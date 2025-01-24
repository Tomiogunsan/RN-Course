import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
const [enteredGoalText, setEnteredGoalText] = useState("");
  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  }

  const addGoalHandler = () => {
    console.log(enteredGoalText)
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Your course goal" style={styles.textInput} onChangeText={goalInputHandler} />
        <Button title="Add Goal" onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 34,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginTop: 84,
    paddingBottom: 34,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: " 70%",
    marginRight: 8,
    padding: 8,
    
  },
  goalsContainer: {
    flex: 4,
    
  },
});
