---
id: 661a6f10ce4c51441d61a568
title: Calculate Sum of a Range
challengeType: 1
dashedName: sum-of-range
---

# --description--

Write a program to take two integers M and N and print the sum of numbers in the range from M to N, inclusive.

**Examples:**

If the input integers are `2` and `7`, the sum of numbers in the range from `2` to `7` is `27`.

```js
sumInRange(2, 7) // Output: 27
```

# --instructions--

Write a JavaScript function called `sumInRange` that takes two integers `M` and `N` as arguments and prints the sum of numbers in the range from `M` to `N`, inclusive.

# --hints--

`sumInRange` should be a function.

```js
assert(typeof sumInRange === 'function');
```


# --seed--
## --seed-contents--

```js
function sumOfOddNumbers(M, N) {
   // Only change code below this line


   // Only change code above this line
}


sumOfOddNumbers(2,7);
```

# --solutions--

```js
function sumInRange(M, N) {
   let sum = 0;
   for (let i = M; i <= N; i++) {
       sum += i;
   }
   console.log(sum);
}
```
