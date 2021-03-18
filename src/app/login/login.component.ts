import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from '../auth/auth.service';
import { SetLoginStatus } from './store/customer-list.actions';
import { AppState } from './store/customer-list.reducer';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private authService: AuthService,
    private store: Store<AppState>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(
        '',
        [Validators.required, UsernameValidators.checkValidSymbol],
        UsernameValidators.checkValidUsername
      ),
      password: new FormControl(null, [Validators.required]),
      rememberPassword: new FormControl(false),
    });
  }
  get username() {
    return this.loginForm.get('username');
  }
  onSubmit() {
    this.authService
      .isValidUser(this.loginForm.value.username, this.loginForm.value.password)
      .then((isValidUser) => {
        if (isValidUser) {
          let url = '';
          this.store.select('customerList').subscribe((customerState) => {
            url = customerState.redirectUrl;
          });
          this.store.dispatch(new SetLoginStatus(true));
          this.router.navigate([url], { replaceUrl: true });
        } else {
          this.router.navigate(['/login'], { replaceUrl: true });
        }
      });
  }
}
