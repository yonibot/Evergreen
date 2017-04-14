import { AsyncStorage } from 'react-native';
import { observable } from 'mobx';
import { action, observer } from 'mobx-react';
import Expense from './Expense';

const EXPENSES_KEY = '@Evergreen:expenses'

// Store ->
// - Holds instances of Expense needed in current state
// - Saves Expense instances to localstorage
// - Retrieves Expenses from localstorage
// - Deletes Expenses from localstorage


class ExpensesStore {
	@observable expenses = [];

  constructor() {
    today_date = new Date();
    this.expenses = [
      {
        category: 'Food',
        subcategory: 'Groceries',
        title: '38% cream',
        vendor: 'Mega',
        amount: 100,
        created_at: today_date,
        updated_at: today_date
      },
      {
        category: 'Food',
        subcategory: 'Restaurant',
        title: 'Falafel',
        vendor: 'Falafix',
        amount: 5.5,
        created_at: today_date,
        updated_at:today_date  
      }
    ];
  }

	getExpenses() {
    debugger;
    AsyncStorage.getItem(EXPENSES_KEY)
      .then((data) => {
        debugger;
      });
  }

  saveExpense(expense) {
     AsyncStorage.saveItem(EXPENSES_KEY)
      .then((data) => {
        debugger;
      });
  }
}

const myExpensesStore = new ExpensesStore();

export { myExpensesStore as default };
