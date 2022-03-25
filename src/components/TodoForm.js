import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  KeyboardAvoidingView
} from "react-native";

export default function TodoForm(props) {
  const { editing, text, createTodo, setText, updateTodo, } = props;
  return (
    <KeyboardAvoidingView style={styles.createTodoContainer}>
      <TextInput
        onChangeText={(text) => setText(text)}
        value={text}
        placeholder="add a todo"
        onSubmitEditing={() => (editing ? updateTodo() : createTodo())}
        style={styles.input}
      />
      <TouchableHighlight
        onPress={() => (editing ? updateTodo() : createTodo())}
        style={styles.submitButton}
        underlayColor="#3b82f6"
      >
        <Text style={styles.buttonText}>{editing ? "Update" : "Add"}</Text>
      </TouchableHighlight>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  createTodoContainer: {
    width: "100%",
    marginHorizontal: "auto",
    borderColor: '#fff',
    backgroundColor: '#1e40af',
    borderWidth: 1,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  submitButton: {
    height: 30,
    width: 60,
    borderRadius: 5,
    backgroundColor: '#2563eb',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    color: '#fff',
    height: 50,
    flex: 1,
  },
  buttonText: {
    color: "#eff6ff"
  },
  checkboxContainer: {
  },
  checkbox: {
  },
});