console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;

// Added 'isFull' and 'maxItems' to the beginning so they can be recognized by 'addItem' and 'isFull' respectively.
function isFull(array) {
    if (array.length < maxItems) {
        return false;
    } else if (array.length >= maxItems) {
        return true;
    }
}

function addItem(item) {
    if (isFull(basket)) {
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
console.log(addItem("pears"), addItem("broccoli"), addItem("asparagus"))

function listItems() {
    for (let i = 0; i < basket.length; i++) {
        console.log(`${basket[i]}\n`)
    }
}
listItems();

function empty() {
    basket = [];
    if (basket[0] === undefined) {
        console.log("Basket is now empty");
    } else {
        console.log("Error emptying basket");
    }  
}
empty();

console.log(addItem("apples"), addItem("cherries"), addItem("beats"), addItem("peppers"), addItem("strawberries"));
isFull(basket) ? console.log("Your basket is full!") : console.log("There's still room for more");

function removeItem(item) {
    let itemPlacement = basket.indexOf(item);
    if (itemPlacement === -1) {
        return null;
    } else {
        basket.splice(itemPlacement, 1);
        return item;
    }
}

console.log(`${removeItem("beats")} was removed. Basket now contains ${basket.join(", ")}`);
