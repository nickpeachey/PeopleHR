import { AppUserAuth } from './app-user-auth';

export const LOGIN_MOCKS: AppUserAuth[] = [
  {
    userName: "NPeachey",
    bearerToken: "abc12354",
    isAuthenticated: true,
    canAccessProducts: true,
    canAccessCategories: true,
    canAddCategory: true,
    canSaveProduct: true
  }
];

