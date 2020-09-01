import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './Welcome';
import RoomScreen from './RoomScreen';

const ChatAppStack = createStackNavigator();

export default function ChatApp({ route, navigation }) {
    const { username } = route.params;
    return (
        <ChatAppStack.Navigator
            initialRouteName="Welcome"
        >
            <ChatAppStack.Screen
                name='Welcome'
                component={Welcome}
                options={{
                    title: 'Chat',
                    headerBackTitleVisible: false,
                    headerStyle: {
                        backgroundColor: '#3366ff',
                    },
                    headerTitleStyle: {
                        textAlign: "center",
                    },
                }}
            />
            <ChatAppStack.Screen
                title="Chat"
                name='RoomScreen'
                component={RoomScreen}
                options={{ headerShown: false}}
            />
        </ChatAppStack.Navigator>
    );
}