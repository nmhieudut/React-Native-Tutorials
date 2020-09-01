import * as React from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Dimensions
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LIcon from 'react-native-vector-icons/FontAwesome'
import MCIcon from 'react-native-vector-icons/AntDesign'
import axios from 'axios';
import firestore from '@react-native-firebase/firestore';
import ChatApp from './ChatApp'

const heightScr = Dimensions.get('screen').height;
const widthScr = Dimensions.get('screen').width;
const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: 'white',
    },
    welcome: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 4,
        backgroundColor: '#3366ff',
    },
    inputArea: {
        padding: 6,
        flex: 2
    },
    textInput: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputTextContainer: {
        flex: 1,
        padding: 14,
    },
    icon: {
        width: 56,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
    },
    forgot: {
        height: heightScr / 12,
        paddingHorizontal: 24,
        alignItems: 'flex-end',
        paddingVertical: 10,
    },
    loginButton: {
        flex: 1,
        paddingHorizontal: widthScr / 5,
        paddingVertical: 10
    },
    registerButton: {
        flex: 1,
        paddingHorizontal: widthScr / 5,
        paddingVertical: 10,
    }
})
const Stack = createStackNavigator();

function Login({ navigation }) {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    // Sign-in method
    // signIn = () => {
    //     axios.post('https://training.softech.cloud/api/users/login', {
    //         email: username,
    //         password: password,
    //     }).then(function (res) {
    //         if (res.data.length > 0) {
    //             navigation.navigate('Welcome',{
    //                 username: username.replace("@gmail.com",""),
    //             });
    //         }
    //         else alert("User or password doesn't exist,try again ");
    //     }).catch(function (err) {
    //         console.log(err);
    //     })
    // }
    signIn = () => {
        firestore()
            .collection("Users")
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach(documentSnapshot => {
                    if (documentSnapshot.data().username === username && documentSnapshot.data().password === password) {
                        alert("Success");
                        navigation.navigate('ChatApp', {
                            username: username.replace("@gmail.com", ""),
                        });
                    }
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <View style={styles.container}>
            {/* LoginScreen */}
            <View style={{ flex: 1 }}>
                {/* Welcome */}
                <View style={styles.welcome}>
                    <View style={{ marginVertical: 24 }}>
                        <Text style={{ fontSize: 30, color: 'white', fontWeight: '700' }}>Hello</Text>
                    </View>
                    <View>
                        <Text style={{ color: 'white', fontSize: 20 }}>Sign in your account</Text>
                    </View>
                </View>
                {/* InputArea */}
                <View style={styles.inputArea}>
                    {/* UserName */}
                    <View style={styles.textInput}>
                        <View style={styles.inputTextContainer}>
                            <TextInput
                                style={{ color: 'black', fontSize: 18 }}
                                placeholder="Username"
                                placeholderTextColor="#c6cede"
                                onChangeText={text => setUsername(text)}
                            />
                        </View>
                        <View style={styles.icon}>
                            <LIcon name='user' size={24} style={{ color: '#c6cede' }} />
                        </View>
                    </View>
                    {/* Password */}
                    <View style={styles.textInput}>
                        <View style={styles.inputTextContainer}>
                            <TextInput
                                style={{ color: 'black', fontSize: 18 }}
                                placeholder="Password"
                                placeholderTextColor="#c6cede"
                                onChangeText={text => setPassword(text)}
                            />
                        </View>
                        <View style={styles.icon}>
                            <MCIcon name='closecircle' size={24} style={{ color: '#c6cede' }} />
                        </View>
                    </View>
                </View>
                {/* Forgot Password */}
                <View style={styles.forgot}>
                    <TouchableOpacity>
                        <Text style={{ color: '#757575' }}>Forgot your password ?</Text>
                    </TouchableOpacity>
                </View>
                {/* Button */}
                <View style={styles.loginButton}>
                    <TouchableOpacity onPress={signIn}
                        style={{
                            borderRadius: 8,
                            flex: 1,
                            height: 60,
                            backgroundColor: '#3366ff',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Text style={{ color: '#dfe6e9', fontSize: 18, fontWeight: '700', }}>
                            LOGIN
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.registerButton}>
                    <TouchableOpacity
                        style={{
                            borderRadius: 8,
                            flex: 1,
                            height: 30,
                            justifyContent: 'center',
                            alignItems: 'center',
                            opacity: 0.8
                        }}
                        onPress={() => {
                            navigation.navigate('Register');
                        }}>
                        <Text style={{ color: '#212121' }}>
                            REGISTER
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export default Login