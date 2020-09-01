import React from 'react';
import {View, Text, Image} from 'react-native';

const DetailScreen = ({route, navigation}) => {
  const {product} = route.params;
  return (
    <View style={{flex: 1}}>
      <Image source={{uri: product.pictureUrl}} style={{height: 300}} />
      <View style={{padding:12}}>
        <Text style={{fontSize:40,color:"orange"}}>{product.price}$</Text>
        <Text style={{fontSize:26}}>{product.name}</Text>
        <Text style={{fontSize:20}}>{product.description}</Text>
        <Text>{product.review}</Text>
      </View>
    </View>
  );
};

export default DetailScreen;
