import React, {Component} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import TodoApp from './src/TodoApp';
import TodoReducer from './src/reducer/TodoReducer';

const store = createStore(TodoReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView>
          <View>
            <TodoApp />
          </View>
        </SafeAreaView>
      </Provider>
    );
  }
}

export default App;
