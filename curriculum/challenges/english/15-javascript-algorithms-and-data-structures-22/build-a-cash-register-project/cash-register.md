---
id: aa2e6f85cab2ab736c9a9b24
title: Build A Cash Register
challengeType: 14
forumTopicId: 16012
dashedName: build-a-cash-register
---

# --description--

Here you'll build a cash register app that will return change to the customer based on the price of the item, the amount of cash provided by the customer, and the amount of cash in the cash drawer. You'll also need to show different messages to the user in different scenarios, such as when the customer provides too little cash or when the cash drawer doesn't have enough to issue the correct change.

There are a couple of variables that will be provided by the tests for the user stories below:

- `price`: the price of the item as a floating point number
- `cash`: is amount of cash provided by the customer for the item, which is provided via an `input` element on the page
- `cid`: cash-in-drawer, a 2D array listing available currency in the cash drawer

Here are examples of both of these variables:

```js
let price = 1.87;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
];
```

If you'd like to test your application with different values for `price` and `cid`, make sure to declare them with the `let` keyword so they can be reassigned by our tests.

Your application should show different messages depending on price of the item, the amount of cash provided by the customer, and the amount of cash in the drawer:

- `Status: INSUFFICIENT_FUNDS`: if `cash-in-drawer` is less than the change due, or if you cannot return the exact change.
- `Status: CLOSED`: if `cash-in-drawer` is equal to the change due.
- `Status: OPEN`: if `cash-in-drawer` is greater than the change due and you can return change, with the change due in coins and bills sorted in highest to lowest order.

|    Currency Unit    |       Amount       |
|:-------------------:|:------------------:|
|        Penny        |    $0.01 (PENNY)   |
|        Nickle       |   $0.05 (NICKEL)   |
|         Dime        |     $0.1 (DIME)    |
|       Quarter       |   $0.25 (QUARTER)  |
|        Dollar       |      $1 (ONE)      |
|     Five Dollars    |      $5 (FIVE)     |
|     Ten Dollars     |      $10 (TEN)     |
|    Twenty Dollars   |    $20 (TWENTY)    |
| One Hundred Dollars | $100 (ONE HUNDRED) |

**Objective:** Build an app that is functionally similar to <a href="https://cash-register.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://cash-register.freecodecamp.rocks</a>

**User Stories:**

1. You should have an `input` element with an `id` of `cash`
1. You should have a `div` element with an `id` of `change-due`
1. You should have a `button` element with an `id` of `purchase-btn`
1. When the value in `#cash` that the customer has is less than the `price` of the item, an alert should appear with the text `Customer does not have enough money to purchase the item`
1. When the value in `#cash` that the customer has is equal to the `price` of the item, an alert should appear with the text `No change due - customer paid with exact cash`
1. When the `price` is `19.5`, the value in `#cash` is `20`, `cid` is `[["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]`, and `#purchase-btn` is clicked, the value in `#change-due` should be `Status: OPEN QUARTER: $0.5`
1. When the `price` is `3.26`, the value in `#cash` is `100`, `cid` is `[["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]`, and `#purchase-btn` is clicked, the value in `#change-due` should be `Status: OPEN TWENTY: $60 TEN: $20 FIVE: $15 ONE: $1 QUARTER: $0.5 DIME: $0.2 PENNY: $0.04`
1. When the `price` is `19.5`, the value in `#cash` is `20`, `cid` is `[["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]`, and `#purchase-btn` is clicked, the value in `#change-due` should be `Status: INSUFFICIENT_FUNDS`
1. When the `price` is `19.5`, the value in `#cash` is `20`, `cid` is `[["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]`, and `#purchase-btn` is clicked, the value in `#change-due` should be `Status: INSUFFICIENT_FUNDS`
1. When the `price` is `19.5`, the value in `#cash` is `20`, `cid` is `[["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]`, and `#purchase-btn` is clicked, the value in `#change-due` should be `Status: CLOSED QUARTER: $0 DIME: $0 NICKEL: $0 PENNY: $0.5`

Fulfill the user stories and pass all the tests below to complete this project. Give it your own personal style. Happy Coding!

# --hints--

You should have an `input` element with an `id` of `cash`.

```js
const el = document.getElementById('cash');
assert(!!el && el.nodeName.toLowerCase() === 'input');
```

You should have a `div` element with an `id` of `change-due`.

```js
const el = document.getElementById('change-due');
assert(!!el && el.nodeName.toLowerCase() === 'div');
```

You should have a `button` element with an `id` of `purchase-btn`.

```js
const el = document.getElementById('purchase-btn');
assert(!!el && el.nodeName.toLowerCase() === 'button');
```

When the value in `#cash` that the customer has is less than the `price` of the item, an alert should appear with the text `Customer does not have enough money to purchase the item`.

```js
const cashInput = document.getElementById('cash');
const purchaseBtn = document.getElementById('purchase-btn');
// set price and customer cash
price = 20;
cashInput.value = '10';

// Override alert
window.alert = (message) => {
  assert(message.trim().toLowerCase() === 'customer does not have enough money to purchase the item');
};

purchaseBtn.click();
```

When the value in `#cash` that the customer has is equal to the `price` of the item, an alert should appear with the text `No change due - customer paid with exact cash`.

```js
const cashInput = document.getElementById('cash');
const purchaseBtn = document.getElementById('purchase-btn');
// set price and customer cash
price = 11.95;
cashInput.value = '11.95';

// Override alert
window.alert = (message) => {
  assert(message.trim().toLowerCase() === 'customer does not have enough money to purchase the item');
};

purchaseBtn.click();
```

When the `price` is `19.5`, the value in `#cash` is `20`, `cid` is `[["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]`, and `#purchase-btn` is clicked, the value in `#change-due` should be `Status: OPEN QUARTER: $0.5`.

```js
const cashInput = document.getElementById('cash');
const purchaseBtn = document.getElementById('purchase-btn');
const changeDueDiv = document.getElementById('change-due');
// set price, customer cash, and cid
price = 19.5;
cashInput.value = 20;
cid = [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.1], ['QUARTER', 4.25], ['ONE', 90], ['FIVE', 55], ['TEN', 20], ['TWENTY', 60], ['ONE HUNDRED', 100]];

const expected = ['Status: OPEN', 'QUARTER: $0.5'];
purchaseBtn.click();
assert(expected.every(str => changeDueDiv.innerText.trim().toLowerCase().includes(str.toLowerCase())));
```

When the `price` is `19.5`, the value in `#cash` is `20`, `cid` is `[["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]`, and `#purchase-btn` is clicked, the value in `#change-due` should be `Status: INSUFFICIENT_FUNDS`.

```js
const cashInput = document.getElementById('cash');
const purchaseBtn = document.getElementById('purchase-btn');
const changeDueDiv = document.getElementById('change-due');
// set price, customer cash, and cid
price = 19.5;
cashInput.value = 20;
cid = [['PENNY', 0.01], ['NICKEL', 0], ['DIME', 0], ['QUARTER', 0], ['ONE', 0], ['FIVE', 0], ['TEN', 0], ['TWENTY', 0], ['ONE HUNDRED', 0]];

purchaseBtn.click();
assert(changeDueDiv.innerText.trim().toLowerCase() === 'status: insufficient_funds');
```

When the `price` is `19.5`, the value in `#cash` is `20`, `cid` is `[["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]`, and `#purchase-btn` is clicked, the value in `#change-due` should be `Status: INSUFFICIENT_FUNDS`.

```js
const cashInput = document.getElementById('cash');
const purchaseBtn = document.getElementById('purchase-btn');
const changeDueDiv = document.getElementById('change-due');
// set price, customer cash, and cid
price = 19.5;
cashInput.value = 20;
cid = [['PENNY', 0.01], ['NICKEL', 0], ['DIME', 0], ['QUARTER', 0], ['ONE', 1], ['FIVE', 0], ['TEN', 0], ['TWENTY', 0], ['ONE HUNDRED', 0]];

purchaseBtn.click();
assert(changeDueDiv.innerText.trim().toLowerCase() === 'status: insufficient_funds');
```

When the `price` is `19.5`, the value in `#cash` is `20`, `cid` is `[["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]`, and `#purchase-btn` is clicked, the value in `#change-due` should be `Status: CLOSED QUARTER: $0 DIME: $0 NICKEL: $0 PENNY: $0.5`.

```js
const cashInput = document.getElementById('cash');
const purchaseBtn = document.getElementById('purchase-btn');
const changeDueDiv = document.getElementById('change-due');
// set price, customer cash, and cid
price = 19.5;
cashInput.value = 20;
cid = [['PENNY', 0.5], ['NICKEL', 0], ['DIME', 0], ['QUARTER', 0], ['ONE', 0], ['FIVE', 0], ['TEN', 0], ['TWENTY', 0], ['ONE HUNDRED', 0]];

const expected = ['Status: OPEN', 'QUARTER: $0', 'DIME: $0', 'NICKEL: $0', 'PENNY: $0.5'];
purchaseBtn.click();
assert(expected.every(str => changeDueDiv.innerText.trim().toLowerCase().includes(str.toLowerCase())));
```

# --seed--

## --seed-contents--

```html

```

```css

```

```js

```

## --solutions--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="icon"
      type="image/png"
      href="https://cdn.freecodecamp.org/universal/favicons/favicon.ico"
    />
    <title>Telephone Number Validator</title>
    <link rel="stylesheet" href="styles.css" />
  </head>

  <body>
    <main>
      <img
        class="freecodecamp-logo"
        src="https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg"
        alt="freeCodeCamp Logo"
      />
      <h1>Telephone Number Validator</h1>
      <div class="phone-container">
        <div class="phone-background">
          <div class="phone-camera"></div>
        </div>
        <label for="user-input">Enter a Phone Number:</label>
        <input maxlength="20" type="text" id="user-input" value="" />

        <div id="results-div"></div>

        <div class="phone-footer">
          <button class="btn-styles" id="check-btn">Check</button>
          <button class="btn-styles" id="clear-btn">Clear</button>
        </div>
      </div>
    </main>
    <script src="script.js"></script>
  </body>
</html>
```

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --phone-colors: #dfdfe2;
  --center-text: center;
  --gray-00: #fff;
}

body {
  background-color: #3b3b4f;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #0a0a23;
}

main {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 40px 10px;
}

.freecodecamp-logo {
  width: 100%;
  height: 30px;
  margin-bottom: 20px;
}

h1 {
  color: white;
  width: 100%;
  max-width: 480px;
  margin: 15px 0;
  text-align: var(--center-text);
}

.phone-container {
  position: relative;
  background-color: var(--phone-colors);
  width: 250px;
  height: 460px;
  margin: 30px auto;
  border-radius: 15px;
  border: 15px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.phone-background {
  background-color: black;
  width: 100%;
  height: 25px;
}

.phone-camera {
  background-color: var(--phone-colors);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: auto;
}

label {
  margin: 10px auto 5px;
}

#user-input {
  display: block;
  margin: 10px auto;
  padding: 5px;
  border: 1px solid black;
  border-radius: 10px;
  text-align: var(--center-text);
  width: 90%;
  height: 42px;
  font-size: 16px;
}

.phone-footer {
  background-color: black;
  width: 100%;
  height: 40px;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-styles {
  cursor: pointer;
  width: 100px;
  margin: 10px;
  color: #0a0a23;
  font-size: 18px;
  background-color: #ffffff;
  background-image: linear-gradient(#ffffff, #928d86);
  border-color: #ffffff;
  border-width: 3px;
}

#results-div {
  overflow-y: auto;
  height: 265px;
  width: 100%;
}

.results-text {
  font-size: 1.2rem;
  padding: 5px;
  text-align: var(--center-text);
  margin: 10px 0;
}
```

```js
const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

const checkValidNumber = (input) => {
  if (input === "") {
    alert("Please provide a phone number");
    return;
  }
  const countryCode = "^(1\\s?)?";
  const areaCode = "(\\([0-9]{3}\\)|[0-9]{3})";
  const spacesDashes = "[\\s\\-]?";
  const phoneNumber = "[0-9]{3}[\\s\\-]?[0-9]{4}$";
  const phoneRegex = new RegExp(
    `${countryCode}${areaCode}${spacesDashes}${phoneNumber}`,
  );

  const pTag = document.createElement("p");
  pTag.className = "results-text";
  phoneRegex.test(input)
    ? (pTag.style.color = "#00471b")
    : (pTag.style.color = "#4d3800");
  pTag.appendChild(
    document.createTextNode(
      `${phoneRegex.test(input) ? "Valid" : "Invalid"} U.S. number: ${input}`,
    ),
  );
  resultsDiv.appendChild(pTag);
};

checkBtn.addEventListener("click", () => {
  checkValidNumber(userInput.value);
  userInput.value = "";
});

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkValidNumber(userInput.value);
    userInput.value = "";
  }
});

clearBtn.addEventListener("click", () => {
  resultsDiv.textContent = "";
});
```
