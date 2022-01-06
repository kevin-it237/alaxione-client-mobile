import React from 'react';
import {View, Text, SafeAreaView, StatusBar } from 'react-native';

const Login = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{ color: "black" }}>Login</Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;
