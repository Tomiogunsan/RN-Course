import React from 'react'
import { Pressable, StyleSheet, Text, View,  } from 'react-native';

const GoalItem = ({itemData, onDeleteItem}) => {
  return (
    <Pressable onPress={onDeleteItem.bind(this, itemData.id)} >
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{itemData.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "white",
  },
  goalText: {
    color: "white",
  },
});