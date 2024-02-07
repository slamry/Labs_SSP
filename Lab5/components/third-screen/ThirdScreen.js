import { Button, Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button_view: {
    padding: "30%", // не принимает паддинг с несколькими значениями
    paddingTop: "0%",
  },
  text: {
    fontSize: "1.2rem",
    textAlign: "center",
    margin: "5%",
  },
});

const ThirdScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>third screen</Text>
      <View style={styles.button_view}>
        <Button title="go back" onPress={() => navigation.navigate("Second")} />
      </View>
    </View>
  );
};

export default ThirdScreen;
