import React from 'react'
import { View, Text, Button } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { increaseCountAction, decreaseCountAction } from '../action'


export default function Counter() {
    const dispatch = useDispatch();
    const count = useSelector(state => state.counterReducer.count);
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>{count}</Text>
            <Button title="ADD" onPress={() => { dispatch(increaseCountAction(3)) }}></Button>
            <Button title="MINUS" onPress={() => { dispatch(decreaseCountAction(3)) }}></Button>
        </View>
    )
}
