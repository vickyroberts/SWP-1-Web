import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService{
    
    constructor(private http: Http){}
    //private authInfo: any = {};

    authenticateUser(userName:string, password:string){
        let authInfo = {uname:userName, doorkey:password};  
        //let bodyString = JSON.stringify(authInfo); //Stringify object
        let headers = new Headers({ 'Content-Type': 'application/json' }); //Set content type to JSON
        let options = new RequestOptions({ headers: headers });

        return this.http.post('http://localhost:3000/api/member/authuser', {uname:userName, doorkey:password}, { headers: headers })
        .map((response : Response) => {
            let userInfo = response.json();
            if(userInfo.status == "success" && userInfo.token)
            {
                //store the token info in localstorage.
                localStorage.setItem('currentUser', userInfo.token);
            }
            return response.json();
        });
    }

    logout(){
        localStorage.removeItem('currentUser');
    }
}