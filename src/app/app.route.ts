import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './loginPage/login.component';
import{DashboardComponent} from "./dashboard/dashboard.component";


let APP_ROUTES:Routes=[

    {
        path:"",
        component:LoginComponent
    },
    {
        path:'login',
        component:LoginComponent

    } ,
    {
        path:'dashboard',
        component:DashboardComponent
    },
    

       
];

export let AppRouterModule =RouterModule.forRoot(APP_ROUTES,{useHash:true});