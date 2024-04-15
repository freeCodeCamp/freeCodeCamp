---
id: 661a6fd12f879044795843ea
title: Interesting Decimal Series
challengeType: 1
dashedName: interesting-dec-series
---

# --description--

Write a program to calculate the sum of the series: 1 + 1/2 + 1/3 + 1/4 + 1/5 + ... + 1/N, where N is input from the user.

**Examples:**

If the input number is `4`, the sum of the series is `2.08`.

```js
sumOfSeries(4) // Output: 2.08
```

# --instructions--

Write a JavaScript function called `sumOfSeries` that takes a number `N` as an argument and calculates the sum of the series:` 1 + 1/2 + 1/3 + 1/4 + 1/5 + ... + 1/N`.

use the `sum` variable to count

# --hints--

`sumOfSeries` should be a function.


```js
assert(typeof sumOfSeries === 'function');

```

You can use a loop to calculate the sum of the series.

```js
assert(code.match(/for\s*\(/));
```

# --seed--
## --seed-contents--

```js
function sumOfSeries(N) {
   // Only change code below this line
    function sumOfSeries(N) 
   let sum = 0;
   for (let i = 1; i <= N; i++) {
       
   }
   // Only change code above this line
   console.log(sum.toFixed(2));
}

   
}

sumOfSeries(4);

```

# --solutions--

```js
function sumOfSeries(N) {
   let sum = 0;
   for (let i = 1; i <= N; i++) {
       sum += 1 / i;
   }
   console.log(sum.toFixed(2));
}
```

