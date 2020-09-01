import React from 'react'
import { View, Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'


export default function DisplayCounter() {
    const count1 = useSelector(state => state.counterReducer.count);
    return (
        <View>
            <Text>{count1}</Text>
        </View>
    )
}
