import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import firestore from '@react-native-firebase/firestore';

export default function FireStoreEx() {
    const [users, setUsers] = React.useState([]);

    const getUsers = () => {
        const data = [];
        firestore()
            .collection('Users')
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((documentSnapshot) => {
                    data.push(documentSnapshot.data());
                    console.log(
                        'User ID: ',
                        documentSnapshot.id,
                        documentSnapshot.data(),
                    );
                });
                setUsers(data);
            });
    };

    const addUser = () => {
        firestore()
            .collection('Users')
            .add({
                name: 'Peter Jackson',
                age: 31,
            })
            .then(() => {
                console.log('User added!');
            });
    };

    return (
        <View>
            <Text>Firestore Example</Text>
            <Button title="Add user" onPress={addUser} />
            <Button title="Get users" onPress={getUsers} />
            <FlatList
                data={users}
                keyExtractor={(item, index) => index}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Text>{item.age}</Text>
                            <Text>{item.name}</Text>
                        </View>
                    );
                }}
            />
        </View>
    );
}