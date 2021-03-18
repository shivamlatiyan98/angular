import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SetLoginStatus } from '../login/store/customer-list.actions';
import { AppState } from '../login/store/customer-list.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  loginStatus: string;
  isLoggedIn: boolean;
  constructor(private store: Store<AppState>, private router: Router) {
    this.store.select('customerList').subscribe((state) => {
      this.loginStatus = state.isLoggedIn ? 'Log Out' : 'Log In';
      this.isLoggedIn = state.isLoggedIn;
    });
  }

  ngOnInit(): void {}
  handleLogin() {
    if (this.isLoggedIn) {
      this.store.dispatch(new SetLoginStatus(!this.isLoggedIn));
    }
    this.router.navigate(['/login'], { replaceUrl: true });
  }
}
