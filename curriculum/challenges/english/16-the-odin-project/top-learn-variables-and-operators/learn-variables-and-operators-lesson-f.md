---
id: 65e1a2ea500d930ce8ed90a9
title: Learn Variables and Operators Lesson F
challengeType: 15
dashedName: learn-variables-and-operators-lesson-f
---
# --description--

Let’s meet the features of JavaScript operators that are beyond school arithmetics.

Usually, the plus operator `+` sums numbers.

But, if the binary `+` is applied to strings, it merges (concatenates) them:

```js
let s = "my" + "string";
console.log(s); // mystring
```

Note that if any of the operands is a string, then the other one is converted to a string too.

For example:

```js
console.log(1 + '2'); // '12'
console.log('1' + 2); // '12'
```

See, it doesn’t matter whether the first operand is a string or the second one.

Here’s a more complex example:

```js
console.log(2 + 2 + '1') // "41" and not "221"
```

Here, operators work one after another. The first `+` sums two numbers, so it returns `4`, then the next `+`   adds the string `1` to it, so it’s like `4 + '1' = '41'`.

```js
console.log('1' + 2 + 2) // "122" and not "14"
```

Here, the first `+` concatenates the string and the number, so it returns `'12'`, then the next `+` adds `2` to it, so it’s like `'12' + 2 = '122'`.

The binary `+` is the only operator that supports strings in such a way. Other arithmetic operators work only with numbers and always convert their operands to numbers.

Here’s the demo for subtraction and division:

```js
console.log( 6 - '2' ); // 4, converts '2' to a number
console.log( '6' / '2' ); // 3, converts both operands to numbers
```

# --questions--

## --text--
Considering the behavior of the `+` operator with mixed data types in JavaScript, what will be the output of the following code snippet?

```js
console.log('3' + 2 - 1);
```

## --answers--

`31`, because the `+` operator concatenates the string and number before subtraction.

---

`32`, because `+` concatenates the string and number before subtraction.

---

`4`, because all operands are converted to numbers first.

---

`321`, because the `-` operator is not supported with strings.

## --video-solution--

1
