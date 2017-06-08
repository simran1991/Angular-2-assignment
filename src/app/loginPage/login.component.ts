import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserModel } from './userModel';
import { AuthService } from "./auth.service";
import { LocalStorageService } from "../utils/localstorage.service";
import { Router } from '@angular/router';
import { isNullOrUndefined } from "util"
import {DataSharingService} from "../utils/dataSharingService";

@Component({
    selector: 'login-component',
    templateUrl: './login.component.html',
    providers: [AuthService,LocalStorageService,DataSharingService]

})
export class LoginComponent {
    authenticatedUser: UserModel;
    authenticated: boolean;
    loginForm: FormGroup;

    constructor(private _fb: FormBuilder, private authService: AuthService, 
    private router: Router,private localstorageService:LocalStorageService,
    private dataDataSharingService :DataSharingService) {
        this.createForm();
        this.authenticatedUser = null;
    }

    onSubmit(model: UserModel, isValid: boolean) {
        console.log(model, isValid);
        if (!isValid) {
            console.log("invalid form");
        }
        else {
            console.log(model);
            this.authenticate(model);
        }
    }

    authenticate(user: UserModel) {
        let self = this;
        this.authService.getAuthenticatedUser(user).subscribe(userx => {
            if (userx.username) {
                this.localstorageService.save("userData",userx);
                self.router.navigate(['/dashboard']);
                this.dataDataSharingService.shareLoginMessage(userx.username);
        } else {
                self.router.navigate(['/login']);
            }
        });

    }

    createForm() {
        this.loginForm = this._fb.group({
            username: ['', [Validators.required]],
            password: ['', [Validators.required]]
        });
    }

}