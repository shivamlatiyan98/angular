import {
  ADD_REDIRECT_URL,
  CustomerActionType,
  SET_LOGIN_STATUS,
} from './customer-list.actions';

export function CustomerListReducer(
  state: CustomerState = initialAgentState,
  action:CustomerActionType
) {
  switch (action.type) {
    case ADD_REDIRECT_URL: {
      return {
        ...state,
        redirectUrl: action.payload,
      };
    }

    case SET_LOGIN_STATUS: {
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    }

    default:
      return state;
  }
}

export interface AppState {
  customerList: CustomerState;
}

interface customerCredentials {
  loginid: string;
  password: string;
}

export interface CustomerState {
  isLoggedIn: boolean;
  validUserNames: customerCredentials[];
  redirectUrl: string;
}

const initialAgentState: CustomerState = {
  isLoggedIn: false,
  validUserNames: [
    {
      loginid: 'shivam',
      password: '123',
    },
    {
      loginid: 'manpreet',
      password: '456',
    },
  ],
  redirectUrl: '',
};
