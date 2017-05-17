import { Component, OnInit } from '@angular/core';
import {ProductService} from '../Products/product.service';
import {ProductsModel} from '../Products/product.model';

@Component({
    moduleId:module.id,
    templateUrl:'home.component.html'
})
export class HomeComponent implements OnInit{

    products:ProductsModel;
    constructor(private productServe:ProductService){}

    ngOnInit(){
        this.loadHomeProducts();
    }

    private loadHomeProducts()
    {
        this.productServe.getHomeBanner().subscribe(products => this.products = products);
    }
}