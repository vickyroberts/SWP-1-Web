import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {ProductsModel} from './product.model';

@Injectable()
export class ProductService{

    constructor(private http:Http){}

    getHomeBanner(){
        var tokenKey = this.getTokenKey();
        return this.http.post('http://52.37.64.192/api/product/homepageoffer', JSON.stringify({token:tokenKey}))
        .map((response : Response) => <ProductsModel>response.json());
    }

    /**This will provide the user token key. Move this to common utility service. */
    private getTokenKey()
    {
        let currentUser = JSON.parse(localStorage.getItem('CurrentUser'));
        /*if (currentUser && currentUser.token) {
            let headers = new Headers({ 'token-bind': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }*/
        return currentUser;
    }
}