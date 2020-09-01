import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { getProducts } from '../action';

const styles = StyleSheet.create({
    text: {
        fontSize: 12,
    },
});
export default function ProductsSaga() {
    const dispatch = useDispatch();
    // const [count, setCount] = React.useState(0);
    const products = useSelector((state) => state.shoppingReducer.products);
    const loading = useSelector((state) => state.shoppingReducer.loading);

    React.useEffect(() => {
        dispatch(getProducts());
    }, []);
    const renderItem = ({ item }) => {
        return (
            <View style={{ flex: 1, marginVertical: 2 }}>
                <View style={{ width: '100%', flexDirection: 'row' }}>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.text}>{item.name}</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', paddingRight: 8 }}>
                        <Text style={styles.text}>{item.price}</Text>
                    </View>
                    <View style={{ justifyContent: 'center', paddingRight: 8 }}>
                        <Text style={styles.text}>{item.discount}%</Text>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View style={{ flex: 1, marginVertical: 2 }}>
            {loading ?
                <View>
                    <Text>Loading</Text>
                </View> :
                <FlatList
                    style={{ flex: 1 }}
                    data={products}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => 'product-' + index.toString()}
                />}
        </View>
    );
}
