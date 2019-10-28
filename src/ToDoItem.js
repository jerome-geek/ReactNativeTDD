import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class ToDoList extends React.Component {
  onCompleted = () => {
    const { onCompleted, index } = this.props;
    onCompleted(index);
  };

  onDeleted = () => {
    const { onDeleted, index } = this.props;
    onDeleted(index);
  };

  render() {
    const { item } = this.props;

    return (
      <View style={item.completed ? styles.completed : styles.default}>
        <Text></Text>
        <Button title="C" onPress={this.onCompleted} />
        <Button title="D" onPress={this.onDeleted} />
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  default: {
    backgroundColor: 'white',
  },
  completed: {
    backgroundColor: 'red',
  },
});
