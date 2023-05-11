import { View, Text } from "react-native";

import React from "react";
import styles from "./styles";

const GameScreen = () => {
   return (
    <View style={styles.container}>
        <Text style={styles.textColor}>The opponent's assumption is</Text>
        <Text style={StyleSheet.textColor}>{currentGuess}</Text>
    </View>
   )
};

export default GameScreen; 