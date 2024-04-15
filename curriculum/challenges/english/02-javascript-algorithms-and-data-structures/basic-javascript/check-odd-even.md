---
id: 661bb3ac21bbd0556144beb2
title: Check Odd or Even
challengeType: 1
dashedName: check-odd-even
---


# --description--

Learn how to check if a number is even or odd using JavaScript.

In programming, we often need to know if a number is even or odd. This challenge will teach you how to write JavaScript code to do that!

# --instructions--

Ask for a number, and check if it is "Even" or "Odd" accordingly.

# --hints--

`isEvenOrOdd(15)` should return `Odd`

```js
assert(isEvenOrOdd(15)==="Odd")
```

`isEvenOrOdd(32)` should return `Even`

```js
assert(isEvenOrOdd(32)==="Even")
```

# --seed--
## --seed-contents--

```js
function isEvenOrOdd(number) {
   //  Only change code below this line
}
```

# --solutions--

```js
function isEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

```
