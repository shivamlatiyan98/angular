import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../login/store/customer-list.reducer';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isLoggedIn: boolean;
  constructor(private store: Store<AppState>) {
    this.store.select('customerList').subscribe((state) => {
      this._isLoggedIn = state.isLoggedIn;
    });
  }

  isAuthenticated = (): Promise<boolean> => {
    return new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        resolve(this._isLoggedIn);
      }, 600);
    });
  };

  isValidUser = (loginid: string, password: string): Promise<boolean> => {
    return new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        this.store.select('customerList').subscribe((customerState) => {
          let index = customerState.validUserNames.findIndex((creds) => {
            return (
              JSON.stringify(creds) ===
              JSON.stringify({
                loginid: loginid,
                password: password,
              })
            );
          });
          if (index === -1) {
            resolve(false);
          } else {
            resolve(true);
          }
        });
      }, 800);
    });
  };
}
