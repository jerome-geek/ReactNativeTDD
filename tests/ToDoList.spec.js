import React from 'react';
import { shallow } from 'enzyme';
import ToDoList from '../src/ToDoList';

describe('Rendering', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      items: [
        {
          text: 'Some Todo 1',
          completed: false,
        },
        {
          text: 'Some Todo 2',
          completed: true,
        },
      ],
    };
    wrapper = shallow(<ToDoList {...props} />);
  });

  it('should render a flat list', () => {
    expect(wrapper.find('FlatList')).toHaveLength(1);
  });

  it('should pass props to FlatList ', () => {
    expect(wrapper.find('FlatList').prop('data')).toBe(props.items);
  });
});
