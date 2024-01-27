import React from "react";
import Background from "../components/Layouts/Background";
import Logo from "../components/Logo";
import Header from "../components/Layouts/Header";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>React Native - Expo - Login</Header>
      <Paragraph>React Native Expo Basic Test 1</Paragraph>
      <Button
        mode='contained'
        onPress={() => navigation.navigate("LoginScreen")}>
        Log in
      </Button>
      <Button
        mode='outlined'
        onPress={() => navigation.navigate("RegisterScreen")}>
        Create an account
      </Button>
    </Background>
  );
}
