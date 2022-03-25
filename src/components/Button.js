import React from "react";
import { TouchableOpacity, StyleSheet, Text, Dimensions } from "react-native";

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    color: "#fafafa"
  },
  textSecondary: {
    color: "#fafafa"
  },
  button: {
    backgroundColor: "#3b82f6",
    height: 80,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  buttonDouble: {
    width: 181
  },
  buttonSecondary: {
    backgroundColor: "#1d4ed8"
  },
  buttonAccent: {
    backgroundColor: "#2563eb"
  }
});

export default ({ onPress, text, size, theme }) => {
  const buttonStyles = [styles.button];
  const textStyles = [styles.text];

  if (size === "double") {
    buttonStyles.push(styles.buttonDouble);
  }

  if (theme === "secondary") {
    buttonStyles.push(styles.buttonSecondary);
    textStyles.push(styles.textSecondary);
  } else if (theme === "accent") {
    buttonStyles.push(styles.buttonAccent);
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};