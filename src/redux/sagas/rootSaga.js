import { all } from "redux-saga/effects";

import loginWatcherSaga from "./loginSaga/loginSaga";

export default function* rootSaga() {
  yield all([loginWatcherSaga()]);
}
