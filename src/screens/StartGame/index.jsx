import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";

import React from "react";
import styles from "./styles";

const StartGame = () => {
    return (
        <View style={styles.container}>
           <Text style={styles.subtitle}>Chose a number</Text>
           <TextInput />
           <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.cleanButton}>
              <Text>clean</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.confirmButton}>
              <Text>confirm</Text>
            </TouchableOpacity>
            </View>
           </View>
    );
};

export default StartGame;  