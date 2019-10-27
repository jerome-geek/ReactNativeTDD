import React from 'react';
import { FlatList } from 'react-native';

export default class ToDoList extends React.Component {
  render() {
    const { items } = this.props;
    return <FlatList data={items}></FlatList>;
  }
}
