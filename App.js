import { StyleSheet, View } from 'react-native';

import Header from './src/components/Header';
import StartGame from './src/screens/StartGame';
import GameScreen from "./src/screens/GameScreen";

import { useState } from 'react';

export default function App() {
  const[userNumber, setUserNumber] = useState();

  const handleStartGame = selectedNumber => {
    setUserNumber(selectedNumber)
  };

  let content = <StartGame onStartGame={handleStartGame} />

  if (userNumber) {
    content = <GameScreen />
  }
  return (
    <View style={styles.container}>
      <Header title={"Adivina el número"} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
});
