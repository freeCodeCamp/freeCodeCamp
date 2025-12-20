---
id: 68a23004e96a105df3a21fc4
title: Build a Card Counting Assistant
challengeType: 26
dashedName: lab-counting-cards
---

# --description--

In the casino game Blackjack, a player can determine whether they have an advantage on the next hand over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting.

Having more high cards remaining in the deck favors the player. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should use `let` to declare a global variable named `count` and set it to `0`.
1. You should have a function called `cardCounter`.
1. The `cardCounter` function should receive a `card` parameter which can either be a number or string.
    - For values between `2` to `10`, the `card` parameter will be a number.
    - For all other values, the `card` parameter will be a string.
1. The `cardCounter` function should modify the global `count` variable based on certain criteria.
1. The global `count` variable should be increased by `1` for the cards `2`, `3`,`4`, `5`, or `6`
1. The global `count` variable should remain unchanged for the cards `7`, `8`, `9`.
1. The global `count` variable should be decreased by `1` for the cards `10`, `"J"`, `"Q"`, `"K"`, `"A"`
1. The `cardCounter` function should return a string with current count and the string `Bet` if the count is positive.
1. The `cardCounter` function should return a string with current count and the string `Hold` if the count is less than or equal to `0`.
1. In the function output, the current count and the player's decision (`Bet` or `Hold`) should be separated by a space. For example, `-3 Hold`.

# --hints--

You should use `let` to declare a global variable named `count` and set it to `0`. 

```js
assert.match(__helpers.removeJSComments(code), /^\s*let\s+count\s*=\s*0\s*;?\s*$/m);
```

You should have a function named `cardCounter`. 

```js
assert.isFunction(cardCounter);
```

Your function should return the value of `count` and the text (`Bet` or `Hold`) with one space character between them.

```js
count = 0;
let out = cardCounter(10);
const pattern = /^-?\d+ (Bet|Hold)$/;
assert.match(out, pattern);
```

After the cards `2`, `3`, `4`, `5`, then calling `cardCounter(6)` should return the string `5 Bet`.

```js
count = 0;
cardCounter(2);
cardCounter(3);
cardCounter(4);
cardCounter(5);
const out = cardCounter(6);
assert.strictEqual(out, '5 Bet')
```

After the cards `7`, `8`, then calling `cardCounter(9)` should return the string `0 Hold`.

```js
count = 0;
cardCounter(7);
cardCounter(8);
const out = cardCounter(9);
assert.strictEqual(out, '0 Hold');
```

After the cards `10`, `"J"`, `"Q"`, `"K"`, then calling `cardCounter("A")` should return the string `-5 Hold`.

```js
count = 0;
cardCounter(10);
cardCounter('J');
cardCounter('Q');
cardCounter('K');
const out = cardCounter('A');
assert.strictEqual(out, '-5 Hold');
```

After the cards `3`, `7`, `"Q"`, `8`, then calling `cardCounter("A")` should return the string `-1 Hold`.

```js
count = 0;
cardCounter(3);
cardCounter(7);
cardCounter('Q');
cardCounter(8);
const out = cardCounter('A');
assert.strictEqual(out, '-1 Hold');
```

After the cards `2`, `"J"`, `9`, `2`, then calling `cardCounter(7)` should return the string `1 Bet`.

```js
count = 0;
cardCounter(2);
cardCounter('J');
cardCounter(9);
cardCounter(2);
const out = cardCounter(7);
assert.strictEqual(out, '1 Bet');
```

After the cards `2`, `2`, then calling `cardCounter(10)` should return the string `1 Bet`.

```js
count = 0;
cardCounter(2);
cardCounter(2);
const out = cardCounter(10);
assert.strictEqual(out, '1 Bet')
```

After the cards `3`, `2`, `"A"`, `10`, then calling `cardCounter("K")` should return the string `-1 Hold`.

```js
count = 0;
cardCounter(3);
cardCounter(2);
cardCounter('A');
cardCounter(10);
const out = cardCounter('K');
assert.strictEqual(out, '-1 Hold');
```

# --seed--

## --seed-contents--


```js



```

# --solutions--

```js
let count = 0;
function cardCounter(card) {
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
  }
  if(count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}
```
