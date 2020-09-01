import React from 'react';
import { View, SafeAreaView, Text } from 'react-native';

// COMPONENT
import Product from './component/Product';
import ShoppingCart from './component/ShoppingCart';
import ProductSaga from './component/ProductSaga'
export default function CounterApp() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <View style={{ flex: 1, padding: 24 }}>
        <Product />
      </View> */}
      <View style={{ flex: 1, padding: 24 }}>
        {/* <ShoppingCart /> */}
        <ProductSaga />
      </View>
    </SafeAreaView>
  );
}