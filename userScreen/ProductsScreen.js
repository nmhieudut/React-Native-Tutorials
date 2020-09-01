import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import axios from 'axios'

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  productContainer: {
    flex: 1,
    margin: 12,
    backgroundColor: 'white',
    borderRadius: 24,
  },
  productImage: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    height: windowHeight / 6,
  },
  productNameContainer: {
    padding: 16,
  },
  productName: {
    fontWeight: '700',
    fontSize: 15,
  },

  productDescription: {
    fontWeight: '400',
    fontSize: 12,
  },
})
const ProductsScreen = ({ navigation }) => {
  const getProducts = () => {
    axios.get('https://api.softech.cloud/products')
      .then(function (res) {
        setProducts(res.data);
      })
      .catch(function (err) {
        console.log(err);
      })
  }
  const [products, setProducts] = React.useState([]);
  React.useEffect(getProducts, []);


  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.productContainer}
        onPress={() => {
          navigation.navigate('DetailScreen', { product: item });
        }}>
        <Image source={{ uri: item.pictureUrl }} style={styles.productImage} />
        <View style={styles.productNameContainer}>
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productName}>{item.price}</Text>
          <Text style={styles.productName}>{item.discount}</Text>
          <Text style={styles.productDescription}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#9e9e9e',
      }}>
      <FlatList
        style={{ flex: 1 }}
        data={products}
        keyExtractor={(item, index) => item.id}
        renderItem={renderItem}
        numColumns={2}
        key={1}
      />
    </View>
  );
};

export default ProductsScreen;