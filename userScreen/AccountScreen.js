import React from 'react';
import {View, Text, Button} from 'react-native';

const AccountScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#343C44',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Account</Text>
      <Button
          title="Sign out"
          onPress={() => {
            this.props.navigation.navigate('Login');
          }}
        />
    </View>
  );
};

export default AccountScreen;