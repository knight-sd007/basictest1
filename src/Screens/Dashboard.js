import React from "react";
import { BackGround, Header } from "../components/Layouts";
import { Button, Logo, Paragraph } from "../components/Screens";

export default function Dashboard({ navigation }) {
  return (
    <BackGround>
      <Logo />
      <Header>Welcome 💫</Header>
      <Paragraph>Congratulations you are logged in.</Paragraph>
      <Button
        mode='outlined'
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: "StartScreen" }],
          })
        }>
        Sign out
      </Button>
    </BackGround>
  );
}
