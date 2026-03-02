---
id: 69008059d43d6751385883c1
title: Debug Increment and Decrement Operator Errors in a Buggy App
challengeType: 26
dashedName: debug-increment-and-decrement-operator-errors-in-a-buggy-app
---

# --description--

Your friend has asked you to help them debug their code. They are practicing increment and decrement operators but are getting unexpected results in the console.

Your task is to help them identify the mistakes and update the code so that the console outputs match the expected results.

You can refer back to the prior lessons on increment and decrement operators as well as prefix and postfix notation.

**User Stories:**

1. You should have a variable named `updatedCounter` that correctly produces the value `11` by using the increment operator. Update the expression to use the correct prefix or postfix notation instead of hardcoding the value.
2. You should have a variable named `finalScore` that correctly produces the value `8` by using the increment operator. Update the expression to use the correct prefix or postfix notation instead of hardcoding the value.
3. You should have a variable named `updatedCoins` that correctly produces the value `2` by using the decrement operator. Update the expression to use the correct prefix or postfix notation instead of hardcoding the value.
4. You should have a variable named `newHealth` that correctly produces the value `7` by using the decrement operator. Update the expression to use the correct prefix or postfix notation instead of hardcoding the value.

# --hints--

You should have a variable named `updatedCounter` that uses prefix increment notation (`++counter`).

```js
assert.match(code, /updatedCounter\s*=\s*\+\+counter\s*;/);
assert.strictEqual(typeof updatedCounter, 'number');
```

`updatedCounter` should equal to `11`.

```js
assert.strictEqual(updatedCounter, 11);
```

You should have a variable named `finalScore` that uses postfix increment notation (`score++`).

```js
assert.match(code, /finalScore\s*=\s*score\+\+\s*;/);
assert.strictEqual(typeof finalScore, 'number');
```

`finalScore` should equal to `8`.

```js
assert.strictEqual(finalScore, 8);
```

You should have a variable named `updatedCoins` that uses prefix decrement notation (`--coins`).

```js
assert.match(code, /updatedCoins\s*=\s*--coins\s*;/);
assert.strictEqual(typeof updatedCoins, 'number');
```

`updatedCoins` should equal to `2`.

```js
assert.strictEqual(updatedCoins, 2);
```

You should have a variable named `newHealth` that uses postfix decrement notation (`health--`).

```js
assert.match(code, /newHealth\s*=\s*health--\s*;/);
assert.strictEqual(typeof newHealth, 'number');
```

`newHealth` should equal to `7`.

```js
assert.strictEqual(newHealth, 7);
```

# --seed--

## --seed-contents--

```js
let counter = 10;
console.log(`Counter is currently ${counter}`);

let updatedCounter = counter++;
console.log(`Counter is now ${updatedCounter}`);

let score = 8;
console.log(`Score is currently ${score}`);

let finalScore = ++score;
console.log(`Score is still ${finalScore}`);

let coins = 3;
console.log(`Coins is currently ${coins}`);

let updatedCoins = coins--;
console.log(`Coins is now ${updatedCoins}`);

let health = 7;
console.log(`Health is currently ${health}`);

let newHealth = --health;
console.log(`Health is still ${newHealth}`);
```

# --solutions--

```js
let counter = 10;
console.log(`Counter is currently ${counter}`);

let updatedCounter = ++counter;
console.log(`Counter is now ${updatedCounter}`);

let score = 8;
console.log(`Score is currently ${score}`);

let finalScore = score++;
console.log(`Score is still ${finalScore}`);

let coins = 3;
console.log(`Coins is currently ${coins}`);

let updatedCoins = --coins;
console.log(`Coins is now ${updatedCoins}`);

let health = 7;
console.log(`Health is currently ${health}`);

let newHealth = health--;
console.log(`Health is still ${newHealth}`);
```
