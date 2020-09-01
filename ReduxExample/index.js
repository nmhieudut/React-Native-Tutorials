import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import counterReducer from './CounterApp/reducer'
import shoppingReducer from './ShoppingCartApp/reducer';
// Saga (root)
import rootSagas from './rootSaga'

import ShoppingCartApp from './ShoppingCartApp'

// ROOT REDUCER
const rootReducer = combineReducers({
    counterReducer,
    shoppingReducer
})
const sagaMiddleware = createSagaMiddleware();
const middlewares = [
    sagaMiddleware
]
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares)),
)
// MIDDLEWARE
//Saga (middleware)


sagaMiddleware.run(rootSagas);
export default function ReduxExample() {
    return (
        <Provider store={store}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1, padding: 24 }}>
                    <ShoppingCartApp />
                </View>
            </SafeAreaView>
        </Provider>
    );
}
