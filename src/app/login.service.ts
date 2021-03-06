import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers, Response } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from './usuario/user';

@Injectable()
export class LoginService {
  private loginUrl = environment.urlbase + '/api/login';

  constructor(private _http: Http) {}

  public Login(_email: string, _password: string, _id_empresa: number) {
    const headers = new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json'
    });

    const postData = {
      email: _email,
      password: _password,
      id_empresa: _id_empresa
    };

    return this._http
      .post(this.loginUrl, JSON.stringify(postData), {
        headers: headers
      })
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json() || 'Server error'));
  }
}
