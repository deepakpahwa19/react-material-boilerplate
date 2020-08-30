import * as actionTypes from "./actionTypes";
export const loginAction = (email, password) => ({
  type: actionTypes.LOGIN,
  email: email,
  password: password,
});
