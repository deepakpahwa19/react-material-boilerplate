import { takeLatest, put } from "redux-saga/effects";
import * as actionTypes from "../../actions/actionTypes";

import API from "../../../services/axiosInstance";
import { LOGIN_URL } from "../../../services/api_contants";

function* loginUserSaga(action) {
  try {
    const response = yield API.post(LOGIN_URL, {
      email: action.email,
      password: action.password,
    });
    console.log(response);
    yield put({ type: actionTypes.LOGIN_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: actionTypes.LOGIN_FAILED, errorMessage: error });
  }
}

export default function* loginWatcherSaga() {
  yield takeLatest(actionTypes.LOGIN, loginUserSaga);
}
