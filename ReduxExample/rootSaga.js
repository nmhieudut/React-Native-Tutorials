import { all, fork } from 'redux-saga/effects';
import shoppingSagas from './ShoppingCartApp/saga';
// import authSagas from './AuthApp/sagas';

export default function* rootSagas() {
    yield all([fork(shoppingSagas)]);
    // yield all([fork(authSagas)]);
}