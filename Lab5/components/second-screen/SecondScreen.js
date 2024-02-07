import { Button, Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  buttons_view: {
    padding: "30%", // не принимает паддинг с несколькими значениями
    paddingTop: "0%",
  },
  button_wrapper: {
    marginBottom: "5%",
  },
  text: {
    fontSize: "1.2rem",
    textAlign: "center",
    margin: "5%",
  },
});

const SecondScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>second screen</Text>
      <View style={styles.buttons_view}>
        <View style={styles.button_wrapper}>
          <Button
            title="go back"
            onPress={() => navigation.navigate("Start")}
          />
        </View>
        <View>
          <Button
            title="to third screen"
            onPress={() => navigation.navigate("Third")}
          />
        </View>
      </View>
    </View>
  );
};

export default SecondScreen;
