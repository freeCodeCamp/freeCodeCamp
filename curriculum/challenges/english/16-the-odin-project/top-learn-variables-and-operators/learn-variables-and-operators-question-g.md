---
id: 65e1aaf8500d930ce8ed90aa
title: Learn Variables and Operators Question G
challengeType: 15
dashedName: learn-variables-and-operators-question-g
---
# --description--

The plus `+` exists in two forms: the binary form that you used in the last challenge and the unary form.

The unary plus or, in other words, the plus operator `+` applied to a single value, doesn’t do anything to numbers. But if the operand is not a number, the unary plus converts it into a number.

For example:

```js
// No effect on numbers
let x = 1;
console.log( +x ); // 1

let y = -2;
console.log( +y ); // -2

// Converts non-numbers
console.log( +true ); // 1
console.log( +"" );   //
```

The need to convert strings to numbers arises very often. For example, if you are getting values from HTML form fields, they are usually strings. What if you want to sum them?

The binary plus would add them as strings:

```js
let apples = "2";
let oranges = "3";

alert( apples + oranges ); // "23", the binary plus concatenates strings
```

If you want to treat them as numbers, you need to convert and then sum them:

```js
let apples = "2";
let oranges = "3";

// both values converted to numbers before the binary plus
alert( +apples + +oranges ); // 5

// the longer variant
// alert( Number(apples) + Number(oranges) ); // 5
```

From a mathematician’s standpoint, the abundance of pluses may seem strange. But from a programmer’s standpoint, there’s nothing special: unary pluses are applied first, they convert strings to numbers, and then the binary plus sums them up.

Why are unary pluses applied to values before the binary ones? As you’re going to see, that’s because of their _higher_ precedence.

# --question--

## --text--
Given the explanation of unary and binary `+` operators in JavaScript, how can you correctly sum the string values `'2'` and `'3'` as numbers using unary `+`?

## --answers--

`console.log('2' + '3'); // Outputs: '23'` 

---

`console.log(+2 + +3); // Outputs: 5`

---

`console.log(+'2' + +'3'); // Outputs: 5`

---

`console.log(Number('2') + Number('3')); // Outputs: '23'`


## --video-solution--

3
