import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url =
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDqlDNoPfoCjLF8MXtOO8VFe9zG-91o7hM';

  constructor(private http: HttpClient) {}

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>(this.url, {
      email: email,
      password: password,
      returnSecureToken: true,
    });
  }
}
