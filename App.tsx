import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { firebaseConfig } from './config/Firebase';
import firebase from 'firebase';
import { StyleSheet, Text, View } from 'react-native';
import AuthNavigation from './navigation/AuthNavigation';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {

  !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();


  return (

    <AuthNavigation />


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
