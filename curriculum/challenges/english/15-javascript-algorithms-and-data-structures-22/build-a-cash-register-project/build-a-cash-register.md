---
id: 657bdcc3a322aae1eac38392
title: Build a Cash Register
challengeType: 14
forumTopicId: 16012
dashedName: build-a-cash-register
---

# --description--

Here you'll build a cash register app that will return change to the customer based on the price of the item, the amount of cash provided by the customer, and the amount of cash in the cash drawer. You'll also need to show different messages to the user in different scenarios, such as when the customer provides too little cash or when the cash drawer doesn't have enough to issue the correct change.

In the `script.js` file, you have been provided with the `price` and `cid` variables. The `price` variable is the price of the item, and the `cid` variable is the cash-in-drawer, which is a 2D array listing the available currency in the cash drawer.

The other variable you will need to add is the `cash` variable, which is the amount of cash provided by the customer for the item, which is provided via an `input` element on the page.

If you'd like to test your application with different values for `price` and `cid`, make sure to declare them with the `let` keyword so they can be reassigned by our tests.

Your application should show different messages depending on the price of the item, the amount of cash provided by the customer, and the amount of cash in the drawer:

- `"Status: INSUFFICIENT_FUNDS"`: if `cash-in-drawer` is less than the change due, or if you cannot return the exact change.
- `"Status: CLOSED"`: if `cash-in-drawer` is equal to the change due.
- `"Status: OPEN"`: if `cash-in-drawer` is greater than the change due and you can return change, with the change due in coins and bills sorted in highest to lowest order.

|    Currency Unit    |       Amount       |
|:-------------------:|:------------------:|
|        Penny        |    $0.01 (PENNY)   |
|        Nickel       |   $0.05 (NICKEL)   |
|         Dime        |     $0.1 (DIME)    |
|       Quarter       |   $0.25 (QUARTER)  |
|        Dollar       |      $1 (ONE)      |
|     Five Dollars    |      $5 (FIVE)     |
|     Ten Dollars     |      $10 (TEN)     |
|    Twenty Dollars   |    $20 (TWENTY)    |
| One Hundred Dollars | $100 (ONE HUNDRED) |

**Objective:** Build an app that is functionally similar to <a href="https://cash-register.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://cash-register.freecodecamp.rocks</a>

**User Stories:**

1. You should have an `input` element with an `id` of `"cash"`
1. You should have a `div`, `span` or `p` element with an `id` of `"change-due"`
1. You should have a `button` element with an `id` of `"purchase-btn"`
1. When the value in the `#cash` element is less than `price`, an alert should appear with the text `"Customer does not have enough money to purchase the item"`
1. When the value in the `#cash` element is equal to `price`, the value in the `#change-due` element should be `"No change due - customer paid with exact cash"`
1. When `price` is `19.5`, the value in the `#cash` element is `20`, `cid` is `[["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]`, and the `#purchase-btn` element is clicked, the value in the `#change-due` element should be `"Status: OPEN QUARTER: $0.5"`
1. When `price` is `3.26`, the value in the `#cash` element is `100`, `cid` is `[["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]`, and the `#purchase-btn` element is clicked, the value in the `#change-due` element should be `"Status: OPEN TWENTY: $60 TEN: $20 FIVE: $15 ONE: $1 QUARTER: $0.5 DIME: $0.2 PENNY: $0.04"`
1. When `price` is `19.5`, the value in the `#cash` element is `20`, `cid` is `[["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]`, and the `#purchase-btn` element is clicked, the value in the `#change-due` element should be `"Status: INSUFFICIENT_FUNDS"`
1. When `price` is `19.5`, the value in the `#cash` element is `20`, `cid` is `[["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]`, and the `#purchase-btn` element is clicked, the value in the `#change-due` element should be `"Status: INSUFFICIENT_FUNDS"`
1. When `price` is `19.5`, the value in the `#cash` element is `20`, `cid` is `[["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]`, and the `#purchase-btn` element is clicked, the value in the `#change-due` element should be `"Status: CLOSED PENNY: $0.5"`

Fulfill the user stories and pass all the tests below to complete this project. Give it your own personal style. Happy Coding!

# --hints--

You should have an `input` element with an `id` of `"cash"`.

```js
const el = document.getElementById('cash');
assert.strictEqual(el?.nodeName?.toLowerCase(), 'input');
```

You should have a `div`, `span`, or `p` element with an `id` of `"change-due"`.

```js
const el = document.getElementById('change-due');
assert(['div', 'span', 'p'].includes(el?.nodeName?.toLowerCase()));
```

You should have a `button` element with an `id` of `"purchase-btn"`.

```js
const el = document.getElementById('purchase-btn');
assert.strictEqual(el?.nodeName?.toLowerCase(), 'button');
```

When the value in the `#cash` element is less than `price`, an alert should appear with the text `"Customer does not have enough money to purchase the item"`.

```js
const cashInput = document.getElementById('cash');
const purchaseBtn = document.getElementById('purchase-btn');
let alertMessage;
window.alert = (message) => alertMessage = message; // Override alert and store message
// set price and customer cash
price = 20;
cashInput.value = '10';

cashInput.dispatchEvent(new Event('change'));
purchaseBtn.click();
assert.strictEqual(alertMessage.trim().replace(/[.,?!]+$/g, '').toLowerCase(), 'customer does not have enough money to purchase the item');
```

When the value in the `#cash` element is equal to `price`, the value in the `#change-due` element should be `"No change due - customer paid with exact cash"`.

```js
const cashInput = document.getElementById('cash');
const purchaseBtn = document.getElementById('purchase-btn');
const changeDueDiv = document.getElementById('change-due');
// set price and customer cash
price = 11.95;
cashInput.value = '11.95';

cashInput.dispatchEvent(new Event('change'));
purchaseBtn.click();
assert.strictEqual(changeDueDiv.innerText.trim().replace(/[.,?!]+$/g, '').toLowerCase(), 'no change due - customer paid with exact cash');
```

When `price` is `19.5`, the value in the `#cash` element is `20`, `cid` is `[["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]`, and the `#purchase-btn` element is clicked, the value in the `#change-due` element should be `"Status: OPEN QUARTER: $0.5"`.

```js
const cashInput = document.getElementById('cash');
const purchaseBtn = document.getElementById('purchase-btn');
const changeDueDiv = document.getElementById('change-due');
// set price, customer cash, and cid
price = 19.5;
cashInput.value = 20;
cid = [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.1], ['QUARTER', 4.25], ['ONE', 90], ['FIVE', 55], ['TEN', 20], ['TWENTY', 60], ['ONE HUNDRED', 100]];

const expected = ['Status: OPEN', 'QUARTER: $0.5'];
cashInput.dispatchEvent(new Event('change'));
purchaseBtn.click();
assert.isTrue(expected.every(str => changeDueDiv.innerText.trim().toLowerCase().includes(str.toLowerCase())));
```

When `price` is `3.26`, the value in the `#cash` element is `100`, `cid` is `[["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]`, and the `#purchase-btn` element is clicked, the value in the `#change-due` element should be `"Status: OPEN TWENTY: $60 TEN: $20 FIVE: $15 ONE: $1 QUARTER: $0.5 DIME: $0.2 PENNY: $0.04"`.

```js
const cashInput = document.getElementById('cash');
const purchaseBtn = document.getElementById('purchase-btn');
const changeDueDiv = document.getElementById('change-due');
// set price, customer cash, and cid
price = 3.26;
cashInput.value = 100;
cid = [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.1], ['QUARTER', 4.25], ['ONE', 90], ['FIVE', 55], ['TEN', 20], ['TWENTY', 60], ['ONE HUNDRED', 100]];

const expected = ['Status: OPEN', 'TWENTY: $60', 'TEN: $20', 'FIVE: $15', 'ONE: $1', 'QUARTER: $0.5', 'DIME: $0.2', 'PENNY: $0.04'];
cashInput.dispatchEvent(new Event('change'));
purchaseBtn.click();
assert.isTrue(expected.every(str => changeDueDiv.innerText.trim().toLowerCase().includes(str.toLowerCase())));
```

When `price` is `19.5`, the value in the `#cash` element is `20`, `cid` is `[["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]`, and the `#purchase-btn` element is clicked, the value in the `#change-due` element should be `"Status: INSUFFICIENT_FUNDS"`

```js
const cashInput = document.getElementById('cash');
const purchaseBtn = document.getElementById('purchase-btn');
const changeDueDiv = document.getElementById('change-due');
// set price, customer cash, and cid
price = 19.5;
cashInput.value = 20;
cid = [['PENNY', 0.01], ['NICKEL', 0], ['DIME', 0], ['QUARTER', 0], ['ONE', 0], ['FIVE', 0], ['TEN', 0], ['TWENTY', 0], ['ONE HUNDRED', 0]];

cashInput.dispatchEvent(new Event('change'));
purchaseBtn.click();
assert.strictEqual(changeDueDiv.innerText.trim().toLowerCase(), 'status: insufficient_funds');
```

When `price` is `19.5`, the value in the `#cash` element is `20`, `cid` is `[["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]`, and the `#purchase-btn` element is clicked, the value in the `#change-due` element should be `"Status: INSUFFICIENT_FUNDS"`.

```js
const cashInput = document.getElementById('cash');
const purchaseBtn = document.getElementById('purchase-btn');
const changeDueDiv = document.getElementById('change-due');
// set price, customer cash, and cid
price = 19.5;
cashInput.value = 20;
cid = [['PENNY', 0.01], ['NICKEL', 0], ['DIME', 0], ['QUARTER', 0], ['ONE', 1], ['FIVE', 0], ['TEN', 0], ['TWENTY', 0], ['ONE HUNDRED', 0]];

cashInput.dispatchEvent(new Event('change'));
purchaseBtn.click();
assert.strictEqual(changeDueDiv.innerText.trim().toLowerCase(), 'status: insufficient_funds');
```

When `price` is `19.5`, the value in the `#cash` element is `20`, `cid` is `[["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]`, and the `#purchase-btn` element is clicked, the value in the `#change-due` element should be `"Status: CLOSED PENNY: $0.5"`.

```js
const cashInput = document.getElementById('cash');
const purchaseBtn = document.getElementById('purchase-btn');
const changeDueDiv = document.getElementById('change-due');
// set price, customer cash, and cid
price = 19.5;
cashInput.value = 20;
cid = [['PENNY', 0.5], ['NICKEL', 0], ['DIME', 0], ['QUARTER', 0], ['ONE', 0], ['FIVE', 0], ['TEN', 0], ['TWENTY', 0], ['ONE HUNDRED', 0]];

const expected = ['Status: CLOSED', 'PENNY: $0.5'];
cashInput.dispatchEvent(new Event('change'));
purchaseBtn.click();
assert.isTrue(expected.every(str => changeDueDiv.innerText.trim().toLowerCase().includes(str.toLowerCase())));
```

# --seed--

## --seed-contents--

```html

```

```css

```

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

# --solutions--

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
    <title>Cash Register</title>
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <main>
      <img
        class="freecodecamp-logo"
        src="https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg"
        alt="freeCodeCamp Logo"
      />
      <h1>Cash Register Project</h1>
      <div id="change-due"></div>
      <div class="input-div">
        <label for="cash">Enter cash from customer:</label>
        <input type="number" id="cash" class="user-input" value="" />
        <button class="check-btn-styles" id="purchase-btn">Purchase</button>
      </div>
      <div class="container">
        <div class="top-display-screen-container">
          <p id="price-screen" class="price-screen"></p>
          <div class="connector"></div>
        </div>
        <div class="top-register">
          <div class="btns-container">
            <button class="btn"></button>
            <button class="btn"></button>
            <button class="btn"></button>
            <button class="btn"></button>
            <button class="btn"></button>
            <button class="btn"></button>
            <button class="btn"></button>
            <button class="btn"></button>
            <button class="btn"></button>
          </div>
          <div id="cash-drawer-display" class="cash-drawer-display"></div>
        </div>
        <div class="bottom-register">
          <div class="circle"></div>
        </div>
      </div>
    </main>
    <script src="./script.js"></script>
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
  --light-gray: #dfdfe2;
  --dark-blue: #0a0a23;
}

body {
  background-color: var(--dark-blue);
  color: var(--light-gray);
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
  font-size: 2.5rem;
  margin: 20px 0;
  text-align: center;
}

#change-due {
  text-align: left;
  font-size: 1.2rem;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.input-div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 10px 0 20px;
}

label {
  font-size: 18px;
}

.user-input {
  height: 30px;
  padding: 10px;
  margin: 10px;
  font-size: 15px;
}

.price-screen {
  border: 10px solid #99c9ff;
  background-color: black;
  height: 50px;
  width: 200px;
  margin-left: -40px;
  color: white;
  font-size: 1.2rem;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

#price {
  font-size: 1.5rem;
  text-align: center;
}

.connector {
  margin-left: -20px;
  background-color: #99c9ff;
  height: 30px;
  width: 40px;
}

.top-register {
  display: flex;
  justify-content: space-around;
  border-radius: 35px 35px 0 0;
  padding-top: 20px;
  background-color: #99c9ff;
  height: 250px;
  width: 325px;
}

.btns-container {
  width: 25%;
}

.btn {
  border-radius: 10%;
  border: none;
  width: 20px;
  height: 20px;
  background-color: black;
}

.check-btn-styles {
  cursor: pointer;
  width: 100px;
  height: 30px;
  margin: 10px;
  color: #0a0a23;
  font-size: 18px;
  font-weight: bold;
  background-color: #feac32;
  background-image: linear-gradient(#fecc4c, #ffac33);
  border-color: #feac32;
  border-width: 3px;
}

.cash-drawer-display {
  font-size: 1.1rem;
  background-color: white;
  width: 55%;
  height: 95%;
  color: black;
  padding: 10px;
}

.bottom-register {
  background-color: #99c9ff;
  height: 50px;
  width: 325px;
  margin-top: 10px;
}

.circle {
  margin: 15px auto;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: black;
}
```

```js
let price = 3.26;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];

const displayChangeDue = document.getElementById("change-due");
const cash = document.getElementById("cash");
const purchaseBtn = document.getElementById("purchase-btn");
const priceScreen = document.getElementById("price-screen");
const cashDrawerDisplay = document.getElementById("cash-drawer-display");

const formatResults = (status, change) => {
  displayChangeDue.innerHTML = `<p>Status: ${status}</p>`;
  change.map(
    (money) =>
      (displayChangeDue.innerHTML += `<p>${money[0]}: $${money[1]}</p>`),
  );
  return;
};

const checkCashRegister = () => {
  if (Number(cash.value) < price) {
    alert("Customer does not have enough money to purchase the item");
    cash.value = "";
    return;
  }

  if (Number(cash.value) === price) {
    displayChangeDue.innerHTML =
      "<p>No change due - customer paid with exact cash</p>";
    cash.value = "";
    return;
  }

  let changeDue = Number(cash.value) - price;
  let reversedCid = [...cid].reverse();
  let denominations = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
  let result = { status: "OPEN", change: [] };
  let totalCID = parseFloat(
    cid
      .map((total) => total[1])
      .reduce((prev, curr) => prev + curr)
      .toFixed(2),
  );

  if (totalCID < changeDue) {
    return (displayChangeDue.innerHTML = "<p>Status: INSUFFICIENT_FUNDS</p>");
  }

  if (totalCID === changeDue) {
    result.status = "CLOSED";
  }

  for (let i = 0; i <= reversedCid.length; i++) {
    if (changeDue > denominations[i] && changeDue > 0) {
      let count = 0;
      let total = reversedCid[i][1];
      while (total > 0 && changeDue >= denominations[i]) {
        total -= denominations[i];
        changeDue = parseFloat((changeDue -= denominations[i]).toFixed(2));
        count++;
      }
      if (count > 0) {
        result.change.push([reversedCid[i][0], count * denominations[i]]);
      }
    }
  }
  if (changeDue > 0) {
    return (displayChangeDue.innerHTML = "<p>Status: INSUFFICIENT_FUNDS</p>");
  }

  formatResults(result.status, result.change);
  updateUI(result.change);
};

const checkResults = () => {
  if (!cash.value) {
    return;
  }
  checkCashRegister();
};

const updateUI = (change) => {
  const currencyNameMap = {
    PENNY: "Pennies",
    NICKEL: "Nickels",
    DIME: "Dimes",
    QUARTER: "Quarters",
    ONE: "Ones",
    FIVE: "Fives",
    TEN: "Tens",
    TWENTY: "Twenties",
    "ONE HUNDRED": "Hundreds",
  };
  // Update cid if change is passed in
  if (change) {
    change.forEach((changeArr) => {
      const targetArr = cid.find((cidArr) => cidArr[0] === changeArr[0]);
      targetArr[1] = parseFloat((targetArr[1] - changeArr[1]).toFixed(2));
    });
  }

  cash.value = "";
  priceScreen.textContent = `Total: $${price}`;
  cashDrawerDisplay.innerHTML = `<p><strong>Change in drawer:</strong></p>
    ${cid
      .map((money) => `<p>${currencyNameMap[money[0]]}: $${money[1]}</p>`)
      .join("")}  
  `;
};

purchaseBtn.addEventListener("click", checkResults);

cash.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkResults();
  }
});

updateUI();
```
