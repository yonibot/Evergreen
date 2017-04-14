// Expense model
// - Initiating new Expense object

class Expense {
	constructor({category, subcategory, title, vendor, amount} = {}) {
		this.created_at = new Date();
		this.category = category;
		this.subcategory = subcategory;
		this.title = title;
		this.vendor = vendor;
		this.amount = amount;
	}
	
}

export { Expense as default };