import { Component, OnInit } from '@angular/core';
import {ProductService} from '../Products/product.service';
import {ProductsModel} from '../Products/product.model';

@Component({
    moduleId:module.id,
    templateUrl:'home.component.html'
})
export class HomeComponent implements OnInit{

    products:ProductsModel;
    //The time to show the next photo
    private NextPhotoInterval:number = 3000;
    //Looping or not
    private noLoopSlides:boolean = false;
    //Photos Category
    private slides:Array<any> = [];
    constructor(private productServe:ProductService){
        this.addNewSlide();
    }

    ngOnInit(){
        this.loadHomeProducts();        
    }

    private addNewSlide() {
         this.slides.push(
            {image:'assets/images/banner.png',text:'BMW 1'},
            {image:'assets/images/banner-bg.jpg',text:'BMW 2'},
            {image:'assets/images/banner-bg.jpg',text:'BMW 3'},
            {image:'assets/images/banner-bg.jpg',text:'BMW 4'},
            {image:'assets/images/banner-bg.jpg',text:'BMW 5'},
            {image:'assets/images/banner-bg.jpg',text:'BMW 6'}
        );
    }

    private loadHomeProducts()
    {
       this.productServe.getHomeBanner().subscribe(products => this.products = products);

       console.log("product list ->", this.products);

    }
}