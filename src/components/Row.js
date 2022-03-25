import React from "react";
import { View } from "react-native";

export default ({ children }) => (
  <View
    style={{
      flexDirection: "row",
      marginTop: 11,
      justifyContent: "space-between"
    }}
  >
    {children}
  </View>
);