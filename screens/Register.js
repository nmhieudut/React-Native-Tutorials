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
import axios from 'axios'

const heightScr = Dimensions.get('screen').height;
const widthScr = Dimensions.get('screen').width;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    welcome: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 2,
        backgroundColor: '#3366ff',
    },
    avatar: {
        height: heightScr / 6,
        width: heightScr / 5,
        backgroundColor: 'white',
    },
    cross: {
        backgroundColor: 'white',
        height: 50,
        width: 50,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        left: 60,
        bottom: 30
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
    registerButton: {
        flex: 0.5,
        paddingHorizontal: widthScr / 5,
    },
    goBack: {
        flex: 0.5
    }
})
const Stack = createStackNavigator();


function Register({ navigation }) {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');

    // Register method
    register = () => {
        axios.post('https://training.softech.cloud/api/users/register', {
            username: username,
            password: password,
            email: email
        })
            .then((res) => {
                if (res.data == 0) {
                    alert('Register Successfully !');
                    navigation.navigate('Login');
                }
                else {
                    alert('This user has existed already, try another one !')
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <View style={styles.container}>
            {/* LoginScreen */}
            <View style={{ flex: 1 }}>
                {/* Welcome */}
                <View style={styles.welcome}>
                    <View style={styles.avatar}>

                    </View>
                    <View style={styles.cross}>
                        <LIcon name="plus" size={24} style={{ color: "#212121" }}></LIcon>
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
                    {/* Email */}
                    <View style={styles.textInput}>
                        <View style={styles.inputTextContainer}>
                            <TextInput
                                style={{ color: 'black', fontSize: 18 }}
                                placeholder="Email"
                                placeholderTextColor="#c6cede"
                                onChangeText={text => setEmail(text)}
                            />
                        </View>
                        <View style={styles.icon}>
                            <LIcon name='envelope' size={24} style={{ color: '#c6cede' }} />
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
                {/* Button */}
                <View style={styles.registerButton}>
                    <TouchableOpacity
                        style={{
                            borderRadius: 8,
                            flex: 1,
                            height: 60,
                            backgroundColor: '#3366ff',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Text style={{ color: '#dfe6e9', fontSize: 18, fontWeight: '700', }}>
                            Register
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.goBack}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Login')
                        }}
                        style={{
                            borderRadius: 8,
                            flex: 1,
                            height: 60,
                            justifyContent: 'center',
                            alignItems: 'center',
                            opacity: 0.8
                        }}>
                        <Text style={{ color: '#212121', fontSize: 18 }}>
                            Back to Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
export default Register