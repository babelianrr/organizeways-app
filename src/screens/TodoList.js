import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import { Center } from "native-base";
import shortid from "shortid";

// components
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [editing, setEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState("");

  useEffect(() => {
    const initialTodos = [];
    setTodos(initialTodos);
  }, []);

  const createTodo = async () => {
    if (text.trim() === "") return;
    setTodos([...todos, { text, id: shortid.generate() }]);
    setText("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = () => {
    if (text.trim() === "") return;
    setTodos(
      todos.map((todo) =>
        todo.id === currentTodo ? { id: currentTodo, text } : todo
      )
    );
    setText("");
    setEditing(false);
  };

  const editTodo = ({ id, text }) => {
    setEditing(true);
    setCurrentTodo(id);
    setText(text);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#93c5fd',
      padding: 22
    },
    safeAreaView: {
      marginBottom: 70,
    },
    noTask: {
      fontSize: 24,
      fontWeight: "bold"
    }
  })

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaView}>
        {todos.length !== 0 ? (
          <Todos todos={todos} editTodo={editTodo} deleteTodo={deleteTodo} />
        ) : (
          <Center>
            <Text style={styles.noTask}>No Tasks</Text>
          </Center>
        )}
      </SafeAreaView>
      <TodoForm
        editing={editing}
        text={text}
        setText={setText}
        createTodo={createTodo}
        updateTodo={updateTodo}
      />
    </View>
  );
}