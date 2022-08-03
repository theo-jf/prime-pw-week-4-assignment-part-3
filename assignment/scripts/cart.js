console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;


function addItem(item) {
    if (isFull(basket)) {
        console.log(`Tried to add: ${item}`)
        console.log("Your basket is full!");
        return false;
    } else if (!isFull(basket)) {
        basket.unshift(item);
        if (basket[0] === item) {
            console.log(`New item: ${basket[0]}`)
            console.log(`Basket now contains ${basket.join(", ")}`)
            return true;
        } else {
            console.log("Something went wrong")
            return false;
        }
    }
}
console.log("*** Adding pears, broccoli, and asparagus to basket. Expecting all to successfully enter into the array and return true ***")
console.log(addItem("pears"), addItem("broccoli"), addItem("asparagus"));

function listItems() {
    console.log("The following items are in your basket:");
    for (let i = 0; i < basket.length; i++) {
        console.log(`${basket[i]}\n`)
    }
}
console.log("*** Expecting pears, broccoli, and asparagus to list on separate lines below ***")
listItems();

function empty() {
    basket = [];
    if (basket[0] === undefined) {
        console.log("Basket is now empty");
    } else {
        console.log("Error emptying basket");
    }  
}
console.log("*** Expecting empty() to return 'Basket is now empty' ***")
empty();

function isFull(array) {
    if (array.length < maxItems) {
        return false;
    } else if (array.length >= maxItems) {
        return true;
    }
}
console.log("*** Adding apples, cherries, beats, peppers, strawberries, and grapes to basket\n Expecting all to be successfully added and return true except for grapes which should return false ***")
console.log(addItem("apples"), addItem("cherries"), addItem("beats"), addItem("peppers"), addItem("strawberries"), addItem("grapes"));

function removeItem(item) {
    let itemPlacement = basket.indexOf(item);
    if (itemPlacement === -1) {
        return null;
    } else {
        basket.splice(itemPlacement, 1);
        return item;
    }
}
console.log("*** Expecting 'beats' to be removed from basket ***")
console.log(`${removeItem("beats")} was removed. Basket now contains ${basket.join(", ")}`);

console.log("*** Expecting basket to no longer be full ***")
isFull(basket) ? console.log("Your basket is full, time to check out!") : console.log("There's room for more!");
