import {Alert, Pressable, StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>5 книжных новинок октября</Text>
        </View>
        <View style={styles.title}>
          <Text style={styles.titleText}>"Кадиш.com" Натан Ингландер. Издательство "Книжники"</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentText}>Ироничная новелла Натана Ингландера, две личные истории культовой Патти Смит, репортаж британской журналистки о будущем человечества, дебютный роман Оушена Вуонга и журналистское расследование о создании «Моссада». В нашей подборке рассказываем о пяти захватывающих книжных новинках, которые достойны того, чтобы появиться на ваших полках.</Text>
          <Pressable style={styles.btn} onPress={() => Alert.alert('Книга добавлена в избранное!')}>
            <Text style={styles.btnText}>ЧИТАТЬ ДАЛЕЕ</Text>
          </Pressable>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // заполнение всего доступного пространства
    flexDirection: "column",
  },
  header: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerText: {
    marginTop: 50,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#121212',
  },
  title: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 60,
    backgroundColor: '#a9a9a9',
  },
  titleText: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'normal',
    color: '#121212',
  },
  content: {
    // чем больше значение, тем выше соотн. пространства, к-ое займет компонент
    // по сравнению с компонентами такого же уровня вложенности?
    flex: 7, 
    backgroundColor: '#808080',
  },
  contentText: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 14,
    paddingVertical: 30,
    color: '#121212',
  },
  btn: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    padding: 12,
    paddingBottom: 20,
    elevation: 3,
    backgroundColor: '#121212',
  },
  btnText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#fff',
  }
});
