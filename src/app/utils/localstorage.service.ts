import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class LocalStorageService {
  save(key,value){
    let	localData:any;
    localData= localStorage.getItem("myApp");
  	if(localData){
  		localData = JSON.parse(localData);
  	}else{
  		localData = {};
  	}
 
  	localData[key] = value;
 
  	localStorage.setItem('myApp',JSON.stringify(localData))
  }
 
  get(key){
	let data = JSON.parse(localStorage.getItem('myApp'));
  	if(!data){
  		return undefined;
  	}
	if(key){
  		if(data[key]){
  			return data[key];
  		}else{
  			return {};
  		}
  	}
  	return data ;
  }
}
