import React from 'react'
import { Button, StyleSheet, TextInput, View, Modal, Image } from "react-native";

const GoalInput = ({ onAddGoal, onGoalInput, visible, onCancelModal }) => {
  return (
    <Modal animationType="slide" visible={visible}>
      <View style={styles.inputContainer}>
        <Image/>
        <TextInput
          placeholder="Your course goal"
          style={styles.textInput}
          onChangeText={onGoalInput}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={onAddGoal} color='#a065ec'/>
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancelModal}  color='#f31282'/>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    // flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 34,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginTop: 84,
    paddingBottom: 34,
    backgroundColor: '#311b6b'
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: " 70%",
    marginRight: 8,
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16
  },
  button: {
    width: 100,
    marginHorizontal: 8
  }
});