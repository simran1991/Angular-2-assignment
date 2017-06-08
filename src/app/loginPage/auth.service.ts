import { Injectable } from '@angular/core';
import { UserModel } from './UserModel';
import { Observable } from 'rxjs/Rx';
import { USERDATA } from './userData';

@Injectable()
export class AuthService {
  getAuthenticatedUser(user: UserModel): Observable<UserModel> {
    let authenticatedUser = USERDATA.find(userX => userX.username === user.username && userX.password === user.password);
    return Observable.of(new Object(authenticatedUser)).map(user => (user) as UserModel);
  }

}
