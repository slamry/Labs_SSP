import React, { useState } from "react";
import { View, TextInput, Button, Image } from "react-native";
import Toast from "react-native-toast-message";

const Register = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleRegister = () => {
    if (!username || !password || !email) {
      Toast.show({
        type: "error",
        text1: "Ошибка",
        text2: "Пожалуйста, заполните все поля",
        visibilityTime: 2000,
      });
      return;
    }
    Toast.show({
      type: "success",
      text1: "Успешно",
      text2: "Вход выполнен успешно",
      visibilityTime: 2000,
    });
    navigation.navigate("Welcome", { username });
    setUsername("");
    setPassword("");
    setEmail("");
  };

  const navigateToLogin = () => {
    navigation.navigate("Login");
    setUsername("");
    setPassword("");
    setEmail("");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Toast forwardRef={(r) => Toast.setRef(r)} />
      <Image
        source={require("./img/h.png")}
        style={{ width: 150, height: 150, marginBottom: 20, zIndex: -1 }}
      />
      <TextInput
        placeholder="Имя пользователя"
        value={username}
        onChangeText={setUsername}
        style={{ marginBottom: 10, borderWidth: 1, padding: 10, width: 200 }}
      />
      <TextInput
        placeholder="Пароль"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        style={{ marginBottom: 10, borderWidth: 1, padding: 10, width: 200 }}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ marginBottom: 10, borderWidth: 1, padding: 10, width: 200 }}
      />
      <View style={{ marginBottom: 10 }}>
        <Button
          title="Зарегистрироваться"
          onPress={handleRegister}
          color={"#e02860"}
        />
      </View>
      <Button title="Ко входу" onPress={navigateToLogin} color={"#ed82a2"} />
    </View>
  );
};

export default Register;
