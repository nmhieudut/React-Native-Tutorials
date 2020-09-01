import * as ActionTypes from '../action/type';
import {
    all,
    put,
    call,
    select,
    takeEvery,
    takeLatest,
} from 'redux-saga/effects';
import axios from 'axios';

function* getProducts(action) {
    try {
        const url = 'https://api.softech.cloud/products';
        const res = yield axios.get(url);
        yield put({ type: ActionTypes.GET_PRODUCTS_SUCCESS, products: res.data });
    }
    catch (e) {
        yield put({ type: ActionTypes.GET_PRODUCTS_FAILURE, error: e });
    }
}
function* sagas() {
    yield takeLatest(ActionTypes.GET_PRODUCTS, getProducts);
}
export default sagas;
