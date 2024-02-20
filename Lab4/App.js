import React, { useEffect, useState } from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";

const questions = [
  {
    imageUrl: "https://start-good.ru/img/8/the-stone-breakers-DC9B.jpg",
    options: ["Реализм", "Импрессионизм", "Кубизм", "Фовизм"],
    correctAnswer: "Реализм",
  },
  {
    imageUrl: "https://arthive.net/res/media/img/oy800/work/702/263468.webp",
    options: ["Сюрреализм", "Экспрессионизм", "Импрессионизм", "Поп-арт"],
    correctAnswer: "Импрессионизм",
  },
  {
    imageUrl:
      "https://veryimportantlot.com/uploads/over/files/Новости/2021/Июль%202021/Статья%2022%20(1)%20Жан-Оноре%20Фрагонар.%20Картина%20«Качели»%2C%20ок.%201767.jpg",
    options: ["Рококо", "Экспрессионизм", "Кубизм", "Ренессанс"],
    correctAnswer: "Рококо",
  },
];

const App = () => {
  useEffect(() => {}, [correctAnswersCount]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [percentage, setPercentage] = useState(0);

  const handleAnswer = (selectedOption) => {
    const isCorrect =
      selectedOption === questions[currentQuestionIndex].correctAnswer;
    if (isCorrect) {
      setCorrectAnswersCount((prevCount) => prevCount + 1);
    }
    moveToNextQuestion(selectedOption);
  };

  const moveToNextQuestion = (selectedOption) => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const correctCount =
        correctAnswersCount +
        (questions[currentQuestionIndex].correctAnswer === selectedOption
          ? 1
          : 0);
      setPercentage(((correctCount / questions.length) * 100).toFixed());
      setCompleted(true);
    }
  };

  const resetQuizz = () => {
    setCompleted(false);
    setCurrentQuestionIndex(0);
    setCorrectAnswersCount(0);
  };

  return (
    <View style={styles.wrapp}>
      {!completed ? (
        <View style={styles.container}>
          <Text style={styles.title}>Квиз-опрос по стилям живописи</Text>
          <Image
            source={{ uri: questions[currentQuestionIndex].imageUrl }}
            style={styles.image}
          />
          <Text style={styles.que}>
            К какому направлению живописи относится эта картина?
          </Text>
          <View style={styles.box_wrapp}>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <View key={index} style={styles.butt}>
                <Button
                  title={option}
                  onPress={() => handleAnswer(option)}
                  color="orange"
                />
              </View>
            ))}
          </View>
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.title}>
            Поздравляем! Ваш результат: {percentage}%
          </Text>
          <View style={styles.butt}>
            <Button
              title={"Попробовать еще раз"}
              onPress={resetQuizz}
              color="orange"
            />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: "#EEE1C6",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 450,
    height: 300,
    marginBottom: 20,
  },
  que: {
    marginBottom: 15,
  },
  butt: { margin: 5 },
  box_wrapp: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-evenly",
  },
  title: { fontWeight: 600, fontSize: 20, marginBottom: 20 },
  wrapp: {
    padding: 10,
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
