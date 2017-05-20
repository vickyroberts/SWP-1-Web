import{Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {AuthenticationService} from '../CommonServices/authentication.service';
import {AlertService} from '../CommonServices/alert.service';
import {ConfigurationData} from '../CommonServices/configuration.model';
import {SharedServiceGM} from '../CommonServices/shared.service';

@Component({
    moduleId:module.id,
    templateUrl:'login.component.html'    
})
export class LoginComponent implements OnInit{
    returnUrl:any = {};
    loading = false;
    model: any = {};

    constructor(private router: Router,
    private route:ActivatedRoute,
    private authService: AuthenticationService,
    private alert: AlertService,
    private sharedServe : SharedServiceGM
    ){
        this.sharedServe.isLoginPage = true;
    }   

    ngOnInit(){
        
        this.authService.logout();
        this.model.passwordLengthError = false;
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/fullhouse';
    }

    login(){
        this.loading = true;
        this.authService.authenticateUser(this.model.username, this.model.password).subscribe(
            data=> {
                if(data && data.status == ConfigurationData.errorStatus)
                {
                    this.alert.error(data.message);
                }
                else
                {
                   this.sharedServe.isLoginPage = false;                   
                   this.router.navigate([this.returnUrl]);                                      
                }                
            },
            error => {
                this.alert.error(error);
                this.loading = false;
            });
    }

    validateEmailId(){
        var emailField = this.model.username;

        if(emailField)
        {
            var atpos = emailField.indexOf("@");
            var dotpos = emailField.lastIndexOf(".");
            if (atpos<1 || dotpos<atpos+2 || dotpos+2>=emailField.length) {
                alert("Not a valid e-mail address");
                return false;
            }
        }
        
    }

    validatePasswordLength(){
        if(this.model.password)
        {        
            var pwdLength = this.model.password.length;
            if(pwdLength < 6 || pwdLength > 12)
            {
                this.model.passwordLengthError = true;
            }
            else
            {
                this.model.passwordLengthError = false;
            }
        }
    }
}