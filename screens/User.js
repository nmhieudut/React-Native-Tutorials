import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../userScreen/HomeScreen'
import ProductsStackNavigator from './ProductsStackNavigator'
import AccountScreen from '../userScreen/AccountScreen'
import NoticeScreen from '../userScreen/NoticeScreen'
import ChatboxEx from '../userScreen/ChatboxEx'
import Icon from 'react-native-vector-icons/AntDesign'
import FIcon from 'react-native-vector-icons/MaterialCommunityIcons'
const Tab = createBottomTabNavigator();
function User() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#343C44',
                inactiveTintColor: '#2d3436',
            }}>
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    title: 'Home',
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <Icon
                                name="home"
                                size={size}
                                style={{ color: focused ? '#0984e3' : '#2d3436' }}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name="ProductsStackNavigator"
                component={ProductsStackNavigator}
                options={{
                    title: 'Products',
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <Icon
                                name="appstore1"
                                size={size}
                                style={{ color: focused ? '#0984e3' : '#2d3436' }}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen name="ChatboxEx" component={ChatboxEx}
                options={{
                    title: 'Chat',
                    tabBarBadge: 9,
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <Icon
                                name="message1"
                                size={24}
                                style={{ color: focused ? '#0984e3' : '#2d3436' }}
                            />
                        );

                    },

                }}
            />
            <Tab.Screen
                name="AccountScreen"
                component={AccountScreen}
                options={{
                    title: 'Account',
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <FIcon
                                name="account"
                                size={size}
                                style={{ color: focused ? '#0984e3' : '#2d3436' }}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen name="NoticeScreen" component={NoticeScreen}
                options={{
                    title: 'Notifications',
                    tabBarBadge: 9,
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <Icon
                                name="bells"
                                size={24}
                                style={{ color: focused ? '#0984e3' : '#2d3436' }}
                            />
                        );

                    },

                }}
            />
        </Tab.Navigator>
    );
}

export default User
