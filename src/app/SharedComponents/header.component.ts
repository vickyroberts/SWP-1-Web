import { Component } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';


@Component({  
  templateUrl: './header.component.html',  
})
/**This is the parent page for all the internal pages. */
export class HeaderComponent {
  constructor(private router : Router){
     this.router.navigate(['/fullhouse', {outlets:{'headeroutlet':['home']}}]);
}

}
