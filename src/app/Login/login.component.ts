import{Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {AuthenticationService} from '../CommonServices/authentication.service';
import {AlertService} from '../CommonServices/alert.service';

@Component({
    moduleId:module.id,
    templateUrl:'login.component.html'
})
export class LoginComponent implements OnInit{
    returnUrl:string;
    loading = false;
    model: any = {};

    constructor(private router: Router,
    private route:ActivatedRoute,
    private authService: AuthenticationService,
    private alert: AlertService
    ){}   

    ngOnInit(){
        this.authService.logout();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login(){
        this.loading = true;
        this.authService.authenticateUser(this.model.username, this.model.password).subscribe(
            data=> {
                if(data && data.status == 'error')
                {
                    this.alert.error(data.message);
                }
                else
                {
                    this.router.navigate([this.returnUrl]);
                }                
            },
            error => {
                this.alert.error(error);
                this.loading = false;
            });
    }
}