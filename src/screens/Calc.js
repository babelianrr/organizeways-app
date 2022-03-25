import React from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView, Box, Stack } from "react-native";

import Row from "../components/Row";
import Button from "../components/Button";
import calculator, { initialState } from "../util/calculator";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#93c5fd",
    padding: 22
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#eff6ff",
    marginBottom: 11
  },
  valueContainer: {
    width: "100%",
    backgroundColor: "#eff6ff",
    height: 90,
    paddingTop: 30,
    borderRadius: 8
  },
  value: {
    fontSize: 40,
    textAlign: "right",
    color: "black",
    marginRight: 20,
    marginBottom: 10
  },
  firstRow: {
    marginTop: 20
  }
});

export default class Calc extends React.Component {
  state = initialState;

  handleTap = (type, value) => {
    this.setState(state => calculator(type, value, state));
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <Text style={styles.heading}>Display</Text>
          <View style={styles.valueContainer}>
            <Text style={styles.value}>
              {parseFloat(this.state.currentValue).toLocaleString()}
            </Text>
          </View>
          <View style={styles.firstRow}></View>
          <Row>
            <Button
              text="C"
              theme="secondary"
              onPress={() => this.handleTap("clear")}
            />
            <Button
              text="±"
              theme="secondary"
              onPress={() => this.handleTap("posneg")}
            />
            <Button
              text="%"
              theme="secondary"
              onPress={() => this.handleTap("percentage")}
            />
            <Button
              text="÷"
              theme="accent"
              onPress={() => this.handleTap("operator", "/")}
            />
          </Row>

          <Row>
            <Button text="7" onPress={() => this.handleTap("number", 7)} />
            <Button text="8" onPress={() => this.handleTap("number", 8)} />
            <Button text="9" onPress={() => this.handleTap("number", 9)} />
            <Button
              text="×"
              theme="accent"
              onPress={() => this.handleTap("operator", "*")}
            />
          </Row>

          <Row>
            <Button text="4" onPress={() => this.handleTap("number", 4)} />
            <Button text="5" onPress={() => this.handleTap("number", 5)} />
            <Button text="6" onPress={() => this.handleTap("number", 6)} />
            <Button
              text="-"
              theme="accent"
              onPress={() => this.handleTap("operator", "-")}
            />
          </Row>

          <Row>
            <Button text="1" onPress={() => this.handleTap("number", 1)} />
            <Button text="2" onPress={() => this.handleTap("number", 2)} />
            <Button text="3" onPress={() => this.handleTap("number", 3)} />
            <Button
              text="+"
              theme="accent"
              onPress={() => this.handleTap("operator", "+")}
            />
          </Row>

          <Row>
            <Button
              text="0"
              onPress={() => this.handleTap("number", 0)}
            />
            <Button text="." onPress={() => this.handleTap("number", ".")} />
            <Button
              text="="
              size="double"
              theme="accent"
              onPress={() => this.handleTap("equal")}
            />
          </Row>
        </SafeAreaView>
      </View>
    );
  }
}