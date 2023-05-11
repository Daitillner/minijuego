import { KeyboardAvoidingView, 
  Text, 
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Keyboard,
  Button,
    
} from "react-native";

import React, { useState } from "react";
import styles from "./styles";
import Card from "../../components/Card";
import Input from "../../components/Input";

const StartGame = () => {
  const [value, setValue] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState("");

  const handleInput = text => {
    setValue(text.replace(/[^0-9]/g,"a"));
  };

  const handleResetInput = () => {
    setValue("");
    setConfirm(false);
  };
  
  const handleConfirmation = () => {
    const newValue = parseInt(value);
    if (newValue === NaN || newValue <= 0 || newValue > 99) return;

      setConfirm(true);
      setSelectedNumber(newValue);
      setValue("");
  };


    return (
     <KeyboardAvoidingView style={{flex:1}} behavior={"padding"}>
     < TouchableWithoutFeedback onPress={() =>Keyboard.dismiss}>

      <View style={styles.container}>
        <Card>
           <Text style={styles.subtitle}>Chose a number</Text>
           <Input 
            blurOnSubmit
            autoCapitalize="none" 
            autoCorrect={false}
            keyboardType="numeric"
            maxLenght={2}
            placeholder="your number"
            value={value}
            onChangeText={handleInput}
           
           />

           <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={styles.cleanButton} 
              onPress={handleResetInput}>

              <Text>clean</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.confirmButton} 
              onPress={handleConfirmation}
            >
              <Text>confirm</Text>
            </TouchableOpacity>
            </View>
        </Card>
        {confirm && (
          <Card otherStyles={styles.selectedCard}>
            <Text style={{color:"white"}}>Your Number is</Text> 
            <Text>{selectedNumber}</Text>
            <View>
              <Button title="Start Game" color={"black"}
               onPress={() =>console.log("comenzar juego")}/>
            </View>
          </Card>
        )}
       </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    );
};

export default StartGame;  