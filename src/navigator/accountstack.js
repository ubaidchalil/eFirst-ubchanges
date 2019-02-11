import React from "react";
import { FluidNavigator } from "react-navigation-fluid-transitions";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from "../components/auth/login";
import Home from "../components/dashboard";
import RootHeader from "../components/styled/Headers/RootHeader";
import Registration from "../components/auth/registration";
import ForgetPassword from "../components/auth/forgetpassword";
// import ForgetPassword from "../components/auth/forgetpassword";

const accountStack = createStackNavigator(
  {
    Auth: {
      navigationOptions: {
        header: null
      },
      screen: FluidNavigator(
        {
          Login,
          Registration,
          ForgetPassword
        },
        {
          initialRouteName: "Login"
        }
      )
    }

    // Home :{
    //   title: 'Home Screen',
    //   navigationOptions: {
    //     title: 'Home Screen',
    //     //header:<RootHeader  />,
    //     header:null,
    //   },
    //   screen:Home
    // }
  },
  {
    initialRouteName: "Auth",
    swipeEnabled: false,
    navigationOptions: { gesturesEnabled: false }
  }
);

export default createAppContainer(accountStack);
