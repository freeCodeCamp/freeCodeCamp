---
id: 66c06d618d075c7f7f1b890a
title: Build a Fortune Teller
challengeType: 26
dashedName: build-a-fortune-teller
---

# --description--

In this lab, you will define five fortunes and randomly select one of them to display the fortune to the user.

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should initialize the five variables `fortune1`, `fortune2`, `fortune3`, `fortune4`, and `fortune5` with a string value of your choice. You can use the below options if you like:

   - `"Your cat will look very cuddly today."`
   - `"The weather will be nice tomorrow."`
   - `"Be cautious of your new neighbors."`
   - `"You will find a new hobby soon."`
   - `"It would be wise to avoid the color red today."`

2. You should select a random number between 1 and 5, inclusive, and assign it to the variable `randomNumber`.

3. You should create a `selectedFortune` variable and assign the appropriate fortune based on these rules:

   - If `randomNumber` is 1, assign the value of `fortune1` to `selectedFortune`.
   - If `randomNumber` is 2, assign the value of `fortune2` to `selectedFortune`.
   - If `randomNumber` is 3, assign the value of `fortune3` to `selectedFortune`.
   - If `randomNumber` is 4, assign the value of `fortune4` to `selectedFortune`.
   - If `randomNumber` is 5, assign the value of `fortune5` to `selectedFortune`.

4. You should log the `selectedFortune` to the console.

# --hints--

You should initialize `fortune1` with a string value.

```js
assert.isNotNull(fortune1);
assert.isString(fortune1);
```

You should initialize `fortune2` with a string value.

```js
assert.isNotNull(fortune2);
assert.isString(fortune2);
```

You should initialize `fortune3` with a string value.

```js
assert.isNotNull(fortune3);
assert.isString(fortune3);
```

You should initialize `fortune4` with a string value.

```js
assert.isNotNull(fortune4);
assert.isString(fortune4);
```

You should initialize `fortune5` with a string value.

```js
assert.isNotNull(fortune5);
assert.isString(fortune5);
```

You should use the `Math.random()` method to generate a random number.

```js
assert.match(__helpers.removeJSComments(code), /Math\.random\(\)/);
```

You should generate a random number between 1 and 5, inclusive, and assign it to the variable `randomNumber`.

```js
assert.isNotNull(randomNumber);
const originalRandom__test_code__ = Math.random;
try {
  const mockValues__test_code__ = [0.0, 0.2, 0.4, 0.6, 0.8];
  let callCount__test_code__ = 0;
  Math.random = () => mockValues__test_code__[callCount__test_code__++ % mockValues__test_code__.length]
  const userCode__test_code__ = new Function(`${code};return randomNumber`);
  for (let i = 0; i < 5; i++) {
    const result = userCode__test_code__()
    assert.strictEqual(result, i + 1);
  }
} finally {
  Math.random = originalRandom__test_code__;
}
```

You should have a `selectedFortune` variable that is assigned a value based on the value of `randomNumber`.

```js
assert.isNotNull(selectedFortune);
```

The `randomNumber` should correspond to its fortune. For example, if `randomNumber` is 1, the `selectedFortune` should be equal to `fortune1` and so on.

```js
const originalRandom__test_code__ = Math.random;
try {
  const mockValues__test_code__ = [0.0, 0.2, 0.4, 0.6, 0.8];
  let callCount__test_code__ = 0;
  Math.random = () => mockValues__test_code__[callCount__test_code__++ % mockValues__test_code__.length];
  const fortunes__test_code__ = [fortune1, fortune2, fortune3, fortune4, fortune5,];
  const userCode__test_code__ = new Function(`${code};return selectedFortune`);
  for (let i = 0; i < 5; i++) {
    const result = userCode__test_code__();
    assert.strictEqual(result, fortunes__test_code__[i]);
  }
} finally {
  Math.random = originalRandom__test_code__;
}
```

You should output the `selectedFortune` to the console.

```js
assert.match(__helpers.removeJSComments(code), /console\s*\.\s*log\s*\(\s*selectedFortune\s*\)\s*;?/);
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
const fortune1 = "Your cat will look very cuddly today.";
const fortune2 = "The weather will be nice tomorrow.";
const fortune3 = "Be cautious of your new neighbors.";
const fortune4 = "You will find a new hobby soon.";
const fortune5 = "It would be wise to avoid the color red today.";

let randomNumber = Math.floor(Math.random() * 5) + 1;

let selectedFortune;

if (randomNumber === 1) {
  selectedFortune = fortune1;
} else if (randomNumber === 2) {
  selectedFortune = fortune2;
} else if (randomNumber === 3) {
  selectedFortune = fortune3;
} else if (randomNumber === 4) {
  selectedFortune = fortune4;
} else {
  selectedFortune = fortune5;
}

console.log(selectedFortune);
```
