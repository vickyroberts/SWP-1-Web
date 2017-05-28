import {Injectable} from '@angular/core';
import {CookieService, CookieOptionsArgs} from 'angular2-cookie/core';

import {ConfigurationData} from '../CommonServices/configuration.model';

@Injectable()
export class SharedServiceGM{
    isLoginPage : boolean = false;

    constructor(private cookieServe:CookieService){}

    /**This will provide the user token key. Move this to common utility service. */
    public getTokenKey()
    {
        let currentUser = this.cookieServe.get(ConfigurationData.currentUserName);
        return currentUser;
    }

    public getUserBasicInfo()
    {
        let currentUserDetails = this.cookieServe.get(ConfigurationData.currentUserDetails);                
        return currentUserDetails;
    }
}