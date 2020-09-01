import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ProductsScreen from '../userScreen/ProductsScreen'
import DetailScreen from '../userScreen/DetailScreen'
const Stack = createStackNavigator();
const ProductsStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="ProductsScreen"
                component={ProductsScreen}
                options={{ title: 'Sản phẩm', headerShown: true }}
            />
            <Stack.Screen
                name="DetailScreen"
                component={DetailScreen}
                options={{ title: 'Chi tiết', headerShown: true }}
            />
        </Stack.Navigator>

    )
}

export default ProductsStackNavigator
