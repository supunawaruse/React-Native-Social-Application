import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { firebaseConfig } from './config/Firebase';
import firebase from 'firebase';
import { StyleSheet, Text, View } from 'react-native';
import AuthNavigation from './navigation/AuthNavigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import store from './redux/Store';

export default function App() {

  !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();


  return (
    <Provider store={store}>
      <AuthNavigation />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
