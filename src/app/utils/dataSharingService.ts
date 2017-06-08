import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs/Rx';


@Injectable()
export class DataSharingService {

    private loginSuccessfullMessage=new Subject<String>();

    loginSuccess$=this.loginSuccessfullMessage.asObservable();

    shareLoginMessage(message:String){
      this.loginSuccessfullMessage.next(message);
      console.log("next value announced");
    }
}