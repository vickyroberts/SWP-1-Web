import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './Home/home.component';
import {LoginComponent} from './Login/login.component';
import {AuthGuard} from './Guards/auth.guards';

const appRoutes : Routes = [{path:'', component:HomeComponent, canActivate:[AuthGuard]},
    {path:'login', component:LoginComponent},
    {path:'register', component:HomeComponent},
    {path:'**', redirectTo:''}];

export const routing = RouterModule.forRoot(appRoutes);

