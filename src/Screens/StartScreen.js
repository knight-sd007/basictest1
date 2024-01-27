import React from "react";
import { BackGround, Header } from "../components/Layouts";
import { Button, Logo, Paragraph } from "../components/Screens";

export default function StartScreen({ navigation }) {
  return (
    <BackGround>
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
    </BackGround>
  );
}
