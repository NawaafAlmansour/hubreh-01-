
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers';
import AppWithNavigationState from './src/navigators/AppNavigator';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)
console.disableYellowBox = true;

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState listener={createReduxBoundAddListener('root')} />
      </Provider>
    );
  }
}
