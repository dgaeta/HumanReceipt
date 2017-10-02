// src/components/Hello.tsx
import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import App from './App';

export interface IAppHomeProps {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

function AppContext({ name, enthusiasmLevel = 1, onIncrement, onDecrement }: IAppHomeProps) {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }

  return (
    <View style={styles.root}>
        <App/>
    </View>
  );
}

export default AppContext;

// styles

const styles = StyleSheet.create({
    root: {
        alignItems: "center",
        alignSelf: "center"
    },
    buttons: {
        flexDirection: "row",
        minHeight: 70,
        alignItems: "stretch",
        alignSelf: "center",
        borderWidth: 5,
    },
    button: {
        flex: 1,
        paddingVertical: 0,
    },
    greeting: {
        color: "#999",
        fontWeight: "bold"
    }
});

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}