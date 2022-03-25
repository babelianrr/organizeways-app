import React from "react";
import { Text, StyleSheet, TouchableHighlight, View, CheckBox } from "react-native";
import { Feather } from '@expo/vector-icons';

export default function Todo(props) {
  const { item, deleteTodo, editTodo, updateTodo, } = props;
  return (
    <View style={styles.todo}>
      <Text style={styles.todoItem}>{item.text}</Text>
      <View style={styles.todoButtonContainer}>
        <TouchableHighlight
          onPress={() => editTodo(item)}
          style={[styles.todoButton, styles.updateButton]}
          underlayColor="#eff6ff"
        >
          <Feather name="edit" size={14} color="black" />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => deleteTodo(item.id)}
          style={[styles.todoButton, styles.removeButton]}
          underlayColor="#93c5fd"
        >
          <Feather name="trash-2" size={14} color="black" />
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  todo: {
    backgroundColor: '#1e40af',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    minHeight: 50,
    marginBottom: 10,
  },
  todoItem: {
    color: "#eff6ff"
  },
  todoButtonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  todoButton: {
    padding: 5,
    margin: 5,
    borderRadius: 3,
  },
  updateButton: {
    backgroundColor: "#dbeafe"
  },
  removeButton: {
    backgroundColor: "#60a5fa"
  },
});