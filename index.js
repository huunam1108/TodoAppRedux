import React from 'react'
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import { createStore } from 'redux'
import { reducer } from './src/TodoListRedux'

const store = createStore(reducer)
const AppWithStore = () => <App store={store} />

AppRegistry.registerComponent(appName, () => AppWithStore);
