import { Text, StyleSheet, View } from 'react-native';
import { useState } from 'react';

const styles = StyleSheet.create({
  box: {
    display: 'flex',
    borderRadius: '1rem',
    margin: '5%',
    backgroundColor: 'grey',
    padding: '15%',
  },
  typography: {
    color: 'white',
    fontSize: '2rem',
    textAlign: 'center',
  },
  change_button: {
    borderColor: 'coral',
    color: 'white',
    backgroundColor: 'coral',
    margin: '0 15%',
    padding: '2%',
    borderRadius: '0.5rem',
  },
});

const App = () => {
  const punctuation = ['!!!', '!', '?', '...', '.', '!!!!', '??'];
  const [currentPuntctuation, setCurrentPunctuation] = useState(punctuation[0]);
  function setRandomPunctuation() {
    let index = Math.floor(Math.random() * punctuation.length);
    console.log(index);
    setCurrentPunctuation(punctuation[index]);
    console.log(currentPuntctuation);
  }

  return (
    <View>
      <View style={styles.box}>
        <Text style={styles.typography}>Hello world{currentPuntctuation}</Text>
      </View>
      <View>
        <button style={styles.change_button} onClick={setRandomPunctuation}>
          Change punctuation
        </button>
      </View>
    </View>
  );
};

export default App;
