import React from 'react'
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import firestore from '@react-native-firebase/firestore';

export default function Welcome({ navigation }) {
    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
        const data = [];
        firestore()
            .collection('Users')
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((documentSnapshot) => {
                    data.push(documentSnapshot.data());
                });
                setUsers(data);
            });
    }, []);
    return (
        <View>
            <FlatList
                data={users}
                keyExtractor={(item, index) => 'user-' + index}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <TouchableOpacity
                                style={{
                                    padding: 20,
                                    flexDirection: 'row',
                                }}
                                onPress={() => {
                                    navigation.navigate('RoomScreen', { username: item.username })
                                }}>
                                <View style={{ flex: 1 }}>
                                    <Image source={{ uri: "https://via.placeholder.com/600/771796" }}></Image>
                                </View>
                                <View style={{ flex: 4 }}>
                                    <Text style={{ fontWeight: '700', fontSize: 24 }}>{item.username}</Text>
                                    <Text style={{ fontSize: 16 }}>{item.message}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    );
                }}
            />
        </View>
    );
}

