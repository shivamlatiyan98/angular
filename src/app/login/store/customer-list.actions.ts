import { Action } from '@ngrx/store';

export const ADD_REDIRECT_URL: string = 'ADD_REDIRECT_URL';

export class AddRedirectUrlAction implements Action {
  type: string = ADD_REDIRECT_URL;
  constructor(public payload: string) {}
}

export const SET_LOGIN_STATUS = 'SET_LOGIN_STATUS';
export class SetLoginStatus implements Action {
  type: string = SET_LOGIN_STATUS;
  constructor(public payload: boolean) {}
}

export type CustomerActionType = AddRedirectUrlAction | SetLoginStatus;
