import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "../components/dashboard";
import DocumentAttestationScreen from "../components/service/documentattestation";
import AuthStack from "./accountstack";
import RootHeader from "../components/styled/Headers/RootHeader";
const root = createStackNavigator({
  Auth: {
    screen: AuthStack,
    navigationOptions: {
      header: null
    }
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: <RootHeader />
    }
  },
  DocumentAttestationScreen: {
    screen: DocumentAttestationScreen,
    navigationOptions: {
      header: <RootHeader />
    }
  }
});
export default createAppContainer(root);
