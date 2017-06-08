import { Component  } from '@angular/core';
import { LocalStorageService } from "../utils/localstorage.service";
import {DataSharingService} from "../utils/dataSharingService";
@Component({
  selector: 'dashboard-component',
  templateUrl: './dashboard.component.html',
  providers:[LocalStorageService]
 })

export class DashboardComponent {
    title:String;
    username:String;
    constructor(private localstorageService:LocalStorageService,
    private dataSharingService:DataSharingService){
        this.title="Dashboard";
        this.getMessage();
        this.dataSharingService.loginSuccess$.subscribe(message=>console.log("subscribed"+message));
        let userData=localstorageService.get(this.username);
        console.log("username is"+this.username);
    }
    
    getMessage(){
        
    }
}