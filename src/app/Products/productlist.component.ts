import { Component, OnInit } from '@angular/core';
import {ProductService} from '../Products/product.service';
import {ProductsModel} from '../Products/product.model';

@Component({
    moduleId:module.id,
    templateUrl:'productlist.component.html'
})
export class ProductList implements OnInit{

    products: any = [];
    constructor(private productServe:ProductService){}

    ngOnInit(){
        this.loadHomeProducts();
        console.log("Product list loaded");
    }

     private loadHomeProducts()
    {
       this.productServe.getHomeBanner().subscribe(products => this.products = products);

       console.log("product list ->", this.products);

    }
}