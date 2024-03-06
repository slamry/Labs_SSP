import React, { useRef, useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  ImageBackground,
  Animated,
  useWindowDimensions,
  ActivityIndicator,
  StyleSheet,
} from "react-native";

const images = [
  require("./img/1.jpg"),
  require("./img/2.jpg"),
  require("./img/3.jpg"),
  require("./img/4.jpg"),
  require("./img/5.jpg"),
  require("./img/6.jpg"),
];
const App = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [isLoading, setIsLoading] = useState(true);

  const { width: windowWidth } = useWindowDimensions();

  // имитируем загрузку
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
      {isLoading ? (
        <View></View>
      ) : (
        <View style={styles.scrollContainer}>
          {/* прокручиваемая область контента */}
          <ScrollView
            horizontal={true}
            style={styles.scrollViewStyle}
            pagingEnabled // пагинация вкл
            showsHorizontalScrollIndicator={false}
            // получаем инфу о смещении объекта и анимируем смещение
            onScroll={Animated.event([
              {
                nativeEvent: {
                  contentOffset: {
                    x: scrollX,
                  },
                },
              },
            ])}
            scrollEventThrottle={1}
          >
            {images.map((image, imageIndex) => {
              return (
                <View
                  style={{ width: windowWidth, height: 400 }}
                  key={imageIndex}
                >
                  <ImageBackground
                    source={image}
                    style={styles.card}
                  ></ImageBackground>
                </View>
              );
            })}
          </ScrollView>
          {/* индикатор прокрутки */}
          <View style={styles.indicatorContainer}>
            {images.map((image, imageIndex) => {
              const width = scrollX.interpolate({
                inputRange: [
                  windowWidth * (imageIndex - 1),
                  windowWidth * imageIndex,
                  windowWidth * (imageIndex + 1),
                ],
                // определяет соответствующие значения ширины для индикаторов
                outputRange: [8, 16, 8],
                extrapolate: "clamp",
              });
              // создаем вьюшки для каждого индикатора, анимируем их в зависимости от ширины
              return (
                <Animated.View
                  key={imageIndex}
                  style={[styles.normalDot, { width }]}
                />
              );
            })}
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollContainer: {
    height: 400,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollViewStyle: {
    flex: 1,
  },
  card: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 5,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: "silver",
    marginHorizontal: 4,
  },
  indicatorContainer: {
    marginVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
