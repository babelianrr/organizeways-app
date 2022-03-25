import React from "react";
import { FlatList, Text, StyleSheet, View } from "react-native";

import Todo from "./Todo";

export default function Todos(props) {
  const { todos, deleteTodo, editTodo, } = props;
  return (
    <View>
      <FlatList
        data={todos}
        keyExtractor={({ id }) => id}
        keyboardShouldPersistTaps="always"
        renderItem={({ item, }) => (
          <Todo item={item} deleteTodo={deleteTodo} editTodo={editTodo} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10
  }
});