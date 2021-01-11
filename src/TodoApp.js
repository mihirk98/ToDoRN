import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  StatusBar,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {addTodo, toggleTodo} from './action/Todo';
import Todo from './component/Todo';
import {
  addTextInputPlaceholderText,
  addTodoButtonText,
  showCompleteTodoButtonText,
} from './Constants';

let ScreenHeight = Dimensions.get('window').height;
let addTodoBarHeight = 0.08 * ScreenHeight;
let todosContainerHeight = 0.82 * ScreenHeight;
let completeTodosShowHeight =
  ScreenHeight -
  (addTodoBarHeight + todosContainerHeight + StatusBar.currentHeight);

class TodoApp extends Component {
  state = {
    todo: '',
    todos: [],
    complete: true,
  };

  addTodoInputOnChangeText = (value) => {
    this.setState({
      todo: value,
    });
  };

  addTodoOnPress = () => {
    if (this.state.todo.trim() === '') {
      return;
    }
    this.props.addTodo(this.state.todo);
    this.setState({
      todo: '',
    });
  };

  toggleTodoOnPress = (id) => {
    this.props.toggleTodo(id);
  };

  todoOnPress = (id) => {
    console.log(id);
  };

  completeTodosVisibilityToggle = () => {
    this.setState({
      complete: !this.state.complete,
    });
  };

  render() {
    var todosList = this.props.todos;
    var todosComplete = [];
    var todosIncomplete = [];
    for (let i = 0; i < todosList.length; i++) {
      if (todosList[i].complete) {
        todosComplete.push(
          <Todo
            key={'todo-' + todosList[i].id}
            todo={todosList[i]}
            toggleTodoOnPress={() => this.toggleTodoOnPress(todosList[i].id)}
            todoOnPress={() => this.todoOnPress(todosList[i].id)}
          />,
        );
      } else {
        todosIncomplete.push(
          <Todo
            key={'todo-' + todosList[i].id}
            todo={todosList[i]}
            toggleTodoOnPress={() => this.toggleTodoOnPress(todosList[i].id)}
            todoOnPress={() => this.todoOnPress(todosList[i].id)}
          />,
        );
      }
    }
    return (
      <View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder={addTextInputPlaceholderText}
            placeholderTextColor="white"
            style={styles.addTextInput}
            value={this.state.todo}
            onChangeText={this.addTodoInputOnChangeText}
          />
          <TouchableOpacity
            style={styles.addButton}
            onPress={this.addTodoOnPress}>
            <Text style={styles.addButtonText}>{addTodoButtonText}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.todosContainer}>
          <ScrollView>
            {todosIncomplete}
            <View
              style={
                this.state.complete
                  ? styles.completeTodosContainerVisible
                  : styles.completeTodosContainerInvisible
              }>
              {todosComplete}
            </View>
          </ScrollView>
        </View>
        <TouchableOpacity
          style={styles.completeTodosShowButton}
          onPress={this.completeTodosVisibilityToggle}>
          <Text style={styles.completeTodosShowButtonText}>
            {showCompleteTodoButtonText}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: addTodoBarHeight,
    width: '100%',
  },
  addTextInput: {
    paddingLeft: 16,
    fontSize: 16,
    height: '100%',
    width: '80%',
    backgroundColor: 'black',
    color: 'white',
  },
  addButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '20%',
    backgroundColor: 'green',
  },
  addButtonText: {
    fontSize: 16,
    color: 'white',
  },
  todosContainer: {
    height: todosContainerHeight,
    width: '100%',
  },
  completeTodosContainerVisible: {
    width: '100%',
    opacity: 100,
  },
  completeTodosContainerInvisible: {
    width: '100%',
    opacity: 0,
  },
  completeTodosShowButton: {
    height: completeTodosShowHeight,
    width: '100%',
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
  },
  completeTodosShowButtonText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 16,
    color: 'white',
  },
});

const mapStateToProps = (state) => {
  return {
    todos: state.Todos.todos.length === 0 ? [] : state.Todos.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (task) => {
      dispatch(addTodo(task));
    },
    toggleTodo: (id) => {
      dispatch(toggleTodo(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
