import React, { Component } from 'react';
import { 
	View,
	Text
} from 'react-native';
import Realm from 'realm';
import Icon from 'react-native-vector-icons/Ionicons';

const ExpenseSchema = {
  name: 'Expense',
  properties: {
    category: {type: 'string', optional: true},
    subcategory: {type: 'string', optional: true},
    name: 'string',
    vendor: {type: 'string', optional: true},
    amount: {type: 'int', default: 0}
  }
}

const realm = new Realm({
  schemaVersion: 2,
  schema: [ExpenseSchema]
});


class ExpensesList extends Component {
	
	constructor() {
    super();
    realm.write(() => {
    	realm.deleteAll();
     	realm.create('Expense', {
        category: 'Food',
        subcategory: 'Restaurant',
        name: 'Falafel',
        vendor: 'Falafix',
        amount: 5.5,
        created_at: today_date,
        updated_at:today_date  
      });
     realm.create('Expense', {
        category: 'Food',
        subcategory: 'Groceries',
        name: '38% cream',
        vendor: 'Mega',
        amount: 100,
        created_at: today_date,
        updated_at: today_date
      });
    });
  }

	render() {
		return (
			<Text>
			  { realm.objects('Expense').map(expense => (
			    <Text><Icon name="ios-cash" color="green" size={25} />{expense.name}</Text>
			  )) }
			</Text>
		)
	}
}

export { ExpensesList as default };