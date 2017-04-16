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
import ExpensesList from './views/ExpensesList';


@observer
export default class Evergreen extends Component {
  @observable message = 'Hello world';

  render() {
    debugger;
    return (
      <View style={styles.container}>
        <View style={styles.listView}>
          <ExpensesList />
        </View>
        <View style={styles.budgetBar}>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listView: {
    flex: 0.8
  },
  budgetBar: {
    flex: 0.2
  }
});

AppRegistry.registerComponent('Evergreen', () => Evergreen);
