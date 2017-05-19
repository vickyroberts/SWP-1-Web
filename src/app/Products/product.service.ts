import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {ProductsModel} from './product.model';

import {ConfigurationData} from '../CommonServices/configuration.model';
import {SharedServiceGM} from '../CommonServices/shared.service';

@Injectable()
export class ProductService{

    constructor(private http:Http,
    private sharedServe:SharedServiceGM){}

    getHomeBanner(){
        var tokenKey = this.sharedServe.getTokenKey();

        let rawData = {token:tokenKey};  
        //let bodyString = JSON.stringify(authInfo); //Stringify object
        let headers = new Headers({ 'Content-Type': 'application/json' }); //Set content type to JSON
        let options = new RequestOptions({ headers: headers });

        return this.http.post(ConfigurationData.appBLURL + 'product/homepageoffer', rawData, headers)
        .map((response : Response) => {
            console.log('Product list ', response.json());
            return <ProductsModel>response.json()
        });
    }

    
}