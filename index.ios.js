/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  AsyncStorage
} from 'react-native';
import { observable, useStrict } from 'mobx';
import { observer } from 'mobx-react';
import myExpensesStore from './models/ExpensesStore';

// useStrict(true);

today_date = new Date();

debugger;
@observer
export default class Evergreen extends Component {
  @observable message = 'Hello world';

  render() {
    debugger;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          { myExpensesStore.expenses.map(expense => (
            <Text>{expense.title}</Text>
          )) }
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Evergreen', () => Evergreen);
