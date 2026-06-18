const cart = [
	{ name: "Laptop", price: 1000 },
	{ name: "Phone", price: 500 },
	{ name: "Headphones", price: 200 },
];

function calculateTotal(cartItems) {
	let total = 0;

	// loop condition causes error on the last iteration, so use < instead of <=
	for (let i = 0; i < cartItems.length; i++) {
		total += cartItems[i].price;
	}

	return total;
}

function applyDiscount(total, discountRate) {
	// add validation for discountRate
	if (discountRate < 0 || discountRate > 1) {
		console.error("Discount rate must be between 0 and 1!");
		return total;
	}

	return total - total * discountRate;
}

function generateReceipt(cartItems, total) {
	// check if total is not a number
	if (isNaN(total)) {
		return console.error("Invalid total!");
	}

	let receipt = "Items:\n";
	cartItems.forEach((item) => {
		receipt += `${item.name}: $${item.price}\n`;
	});
	receipt += `Total: $${total.toFixed(2)}`;
	return receipt;
}

// debugging entry point
console.log("Starting shopping cart calculation...");
const total = calculateTotal(cart);
const discountedTotal = applyDiscount(total, 0.2); // 20% discount
const receipt = generateReceipt(cart, discountedTotal);

document.getElementById("total").textContent = `Total: $${discountedTotal}`;
document.getElementById("receipt").textContent = receipt;

// console helps locate errors > log messages and inspect variables during runtime > helped identify undefined cartItems[i] due to conditional
// sources allowed inspection of code structure > breakpoints
// call stack > allows me to inspect sequence of functional calls leading to error
// debugger pauses execution at specific points in the code
