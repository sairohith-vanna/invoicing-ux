import { AccessTokenResponse } from './../models/security.d';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private securityApi = `${environment.api}/security/`;

  constructor(private http: HttpClient) { }

  public authenticateUser(username: string, password: string): Observable<AccessTokenResponse> {
    return this.http.post<AccessTokenResponse>(`${this.securityApi}/login`, { username, password });
  }

}
