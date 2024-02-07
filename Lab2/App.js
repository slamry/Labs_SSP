import { Text, StyleSheet, View, Button, Image } from 'react-native';
import { useState } from 'react';

const App = () => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <View style={styles.main_view}>
      <Text style={styles.title}>Журнал Bright</Text>
      <View>
        <View style={styles.content}>
          <View style={styles.link_view}>
            {isPressed ? (
              <Text style={styles.pressed_link}>Новости</Text>
            ) : (
              <Text style={styles.link} onPress={() => setIsPressed(true)}>
                Новости
              </Text>
            )}
          </View>
          <View>
            <Image
              style={styles.img}
              source={{
                uri: 'https://brightmagazine.ru/wp-content/uploads/2020/11/pexels-andrea-piacquadio-3839098-1024x683.jpg',
              }}
            />
          </View>
          <View>
            <Text style={styles.article_title}>
              Превращаем стресс в своего помощника
            </Text>
          </View>
          <View>
            <Text>
              Исследователи Йельского университета заявляют, что люди, которые
              рассматривают стресс, как возможность личностного роста, отмечают
              улучшение качества жизни. Сегодня узнаем, как это работает и как
              увидеть положительные стороны стресса.
            </Text>
          </View>
          <View style={styles.button_view}>
            <Button title="Читать далее" color="orange" />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main_view: {
    backgroundColor: 'lightgrey',
    padding: '10% 2% 2%',
  }, 
  title: {
    textAlign: 'center',
    fontWeight: '650',
    fontSize: '1.2rem',
  },
  link: {
    color: 'blue',
    fontWeight: '650',
  },
  pressed_link: { color: 'purple', fontWeight: '650' },
  link_view: {
    margin: '10% 0%',
  },
  content: {
    backgroundColor: 'white',
    marginTop: '5%',
    padding: '0% 8% 8%',
  },
  img: {
    height: 200,
  },
  article_title: {
    fontWeight: '700',
    fontSize: '1.5rem',
    margin: '5% 0%',
  },
  button_view: {
    margin: '5%',
  },
});

export default App;
