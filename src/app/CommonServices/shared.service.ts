import {Injectable} from '@angular/core';

import {ConfigurationData} from '../CommonServices/configuration.model';

@Injectable()
export class SharedServiceGM{
    isLoginPage : boolean = false;

    /**This will provide the user token key. Move this to common utility service. */
    public getTokenKey()
    {
        let currentUser = localStorage.getItem(ConfigurationData.currentUserName);
        
        return currentUser;
    }
}