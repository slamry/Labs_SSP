import React from "react";
import { View, Text, Image, Button } from "react-native";
// через route получаем доступ к параметрам маршрута
const Welcome = ({ route,navigation }) => {
  const { username } = route.params;
  const navigateToLogin = () => {
    navigation.navigate("Login");
  };
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View
        style={{ paddingLeft: "80%", paddingTop: "2%", paddingBottom: "20%" }}
      >
        <Button title="Выйти" onPress={navigateToLogin} color={"#ed82a2"} />
      </View>
      <Image
        source={require("./img/h.png")}
        style={{ width: 200, height: 200, marginBottom: 20 }}
      />
      <Text style={{ fontSize: 20, marginBottom: 10 }}>
        Добро пожаловать, {username}!
      </Text>
    </View>
  );
};

export default Welcome;
