import React from 'react';
import { Text, View } from 'react-native';
import AddToDo from './AddToDo';
import ToDoList from './ToDoList';

const App = () => {
  return (
    <View testId="welcome">
      <Text>ToDo TDD</Text>
      <AddToDo></AddToDo>
      <ToDoList></ToDoList>
    </View>
  );
};

export default App;
