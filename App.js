import React, { Component } from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import 'react-native-gesture-handler';
import FormikExample from './FormikExample';
import StackNavigator from './StackNavigator';
import FireStoreEx from './FireStoreEx'
import { Provider as PaperProvider, Button, Appbar } from 'react-native-paper';
import ChatboxEx from './userScreen/ChatboxEx';
// import OneSignal from './OneSignal'
import AuthenticationEx from './AuthenticationEx'
export default class extends Component {
  render() {
    return (
      // <OneSignal />
      //<AuthenticationEx />
      <StackNavigator />
      // <PaperProvider>
      //   <SafeAreaView>
      //     {/* <Button 
      //     loading={false}
      //     disable={false}
      //     icon="camera" 
      //     mode="outlined" 
      //     onPress={() => console.log('Pressed')}>
      //       Press me
      //     </Button> */}
      //     <Appbar.Header>
      //       <Appbar.BackAction onPress={() => { }} />
      //       <Appbar.Content title="Title" subtitle={'Subtitle'} />
      //       <Appbar.Action icon="magnify" onPress={this._handleSearch} />
      //       <Appbar.Action icon="dots-vertical" onPress={this._handleMore} />
      //     </Appbar.Header>
      //   </SafeAreaView>
      // </PaperProvider>
      //<AsyncStorage/>
      // <FormikExample/>
      //<FireStoreEx />
      // <ChatboxEx />
    )
  }
}