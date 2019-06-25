import React, { Component } from 'react';
import { View } from 'react-native';

import { actionCreators } from './src/TodoListRedux'

import List from './src/List'
import Title from './src/Title'
import Input from './src/Input'

export default class App extends Component {

  state = {}

  componentWillMount() {
    const { store } = this.props
    const { todos } = store.getState()
    this.setState({ todos })

    this.unsubscribe = store.subscribe(() => {
      const { todos } = store.getState()
      this.setState({ todos })
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  onAddTodo = (text) => {
    const { store } = this.props
    store.dispatch(actionCreators.add(text))
  }

  onRemoveTodo = (index) => {
    const { store } = this.props
    store.dispatch(actionCreators.remove(index))
  }

  render() {
    const { todos } = this.state
    return (
      <View>
        <Title>To-do List</Title>
        <Input placeholder={'Type a todo, then hit enter!'}
          onSubmitEditing={this.onAddTodo}
        />
        <List
          list={todos}
          onPressItem={this.onRemoveTodo}
        />
      </View>
    );
  }
}
