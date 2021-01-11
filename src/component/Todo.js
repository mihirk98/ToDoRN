import React from 'react';
import {connect} from 'react-redux';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const Todo = ({todo, toggleTodoOnPress, todoOnPress}) => (
  <TouchableOpacity onPress={todoOnPress}>
    <View style={todo.complete ? styles.todoContainerComplete : styles.todoContainerIncomplete}>
      <Text style={todo.complete ? styles.todoTextComplete : styles.todoTextIncomplete}>{todo.content}</Text>
      <View style={styles.todoCheckboxContainer}>
        <CheckBox
          value={todo.complete}
          onChange={toggleTodoOnPress}
          tintColors={{true: 'green', false: 'black'}}
          tintColor="black"
          onCheckColor="white"
          onFillColor="green"
          onTintColor="green"
        />
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  todoContainerComplete: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  todoContainerIncomplete: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  todoTextComplete: {
    textDecorationLine: 'line-through',
    fontWeight: 'bold',
    fontSize: 18,
    padding: 12,
    paddingTop: 16,
    paddingBottom: 16,
    width: '90%',
  },
  todoTextIncomplete: {
    textDecorationLine: 'none',
    fontWeight: 'bold',
    fontSize: 18,
    padding: 12,
    paddingTop: 16,
    paddingBottom: 16,
    width: '90%',
  },
  todoCheckboxContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '10%',
  },
});

export default Todo;
