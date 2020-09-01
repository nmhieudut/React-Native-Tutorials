import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './screens/Login'
import Register from './screens/Register'
import User from './screens/User'
import ChatApp from './screens/ChatApp.js'

const Stack = createStackNavigator();
export default class StackNavigator extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Login"
                    screenOptions={{
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            alignSelf: 'center',
                        },
                    }}>
                    <Stack.Screen
                        name="Login"
                        component={Login}
                        options={{ title: 'Đăng nhập', headerShown: false }} />
                    <Stack.Screen
                        initialParams={{ message: 'Init text' }}
                        name="Register"
                        component={Register}
                        options={{
                            title: 'Register',
                            headerBackTitle: 'Quay lại',
                            headerBackTitleVisible: false,
                            headerStyle: {
                                backgroundColor: '#3366ff',
                            },
                            headerTitleStyle: {
                                textAlign: "center",
                            },
                        }}
                    />
                    {/* <Stack.Screen name="User"
                        component={User}
                        option={{
                            headerShown: false,
                            headerBackTitleVisible: true,
                        }}
                    /> */}
                    <Stack.Screen name="ChatApp"
                        component={ChatApp}
                        options={{ title: 'Chat App', headerShown: false }}
                    // option={{
                    //     headerStyle: {
                    //         backgroundColor: '#3366ff',
                    //     },
                    //     headerTitleStyle: {
                    //         textAlign: "center",
                    //     },
                    //      headerShown: false
                    // }} 
                    />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
