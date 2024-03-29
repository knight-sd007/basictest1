import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import { theme } from "../Theme";
import { emailValidator, nameValidator, passwordValidator } from "../helpers";
import { BackButton, BackGround, Header } from "../components/Layouts";
import { Button, Logo, TextInput } from "../components/Screens";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("registerUser", value);
    } catch (e) {
      alert(e);
    }
  };

  const onSignUpPressed = async () => {
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    await storeData(
      JSON.stringify({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );
    alert("Thanks for register!");
    navigation.reset({
      index: 0,
      routes: [{ name: "LoginScreen" }],
    });
  };

  return (
    <BackGround>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Welcome.</Header>
      <TextInput
        label='Name'
        returnKeyType='next'
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: "" })}
        error={!!name.error}
        errorText={name.error}
      />
      <TextInput
        label='Email'
        returnKeyType='next'
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize='none'
        autoCompleteType='email'
        textContentType='emailAddress'
        keyboardType='email-address'
      />
      <TextInput
        label='Password'
        returnKeyType='done'
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: "" })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <Button
        mode='contained'
        onPress={onSignUpPressed}
        style={{ marginTop: 24 }}>
        Next
      </Button>
      <View style={styles.row}>
        <Text>I already have an account !</Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
          <Text style={styles.link}>Log in</Text>
        </TouchableOpacity>
      </View>
    </BackGround>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
});
