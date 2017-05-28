import { Component } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {SharedServiceGM} from '../CommonServices/shared.service';

@Component({  
  templateUrl: './header.component.html',  
})
/**This is the parent page for all the internal pages. */
export class HeaderComponent {
  constructor(private router : Router, private sharedServe: SharedServiceGM){
     console.log("userinfor", sharedServe.getUserBasicInfo);
     this.router.navigate(['/fullhouse', {outlets:{'headeroutlet':['home']}}]);
}

}
