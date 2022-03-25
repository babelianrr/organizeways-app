import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons } from "@expo/vector-icons";
import { theme, useTheme } from "native-base";

import FormNativeBase from "./src/screens/FormNativeBase";
import Hello from "./src/screens/Hello";
import IncDec from "./src/screens/IncDec";
import Calc from "./src/screens/Calc";
import TodoList from "./src/screens/TodoList";
import ExampleTDL from "./src/screens/ExampleTDL";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()

function MyTab() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Calculator"
      screenOptions={({ route }) => ({
        headerMode: "screen",
        headerTintColor: "white",
        headerStyle: { backgroundColor: theme.colors.primary["300"] },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Calculator") {
            iconName = focused ? "ios-calculator" : "ios-calculator-outline"
          } else if (route.name === "To Do List") {
            iconName = focused ? "ios-list" : "ios-list-outline"
          }

          return <Ionicons name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: theme.colors.primary["800"],
        tabBarInactiveTintColor: "gray"
      })}
    >

      <Tab.Screen name="Calculator" component={Calc} options={{ headerShown: false }} />
      <Tab.Screen name="To Do List" component={TodoList} />
    </Tab.Navigator>
  )

}

export default function Container() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MyTab}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
