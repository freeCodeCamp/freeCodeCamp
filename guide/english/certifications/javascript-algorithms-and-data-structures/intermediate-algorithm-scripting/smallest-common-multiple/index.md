---
title: Smallest Common Multiple
---

# Smallest Common Multiple

---
## Problem Explanation

The smallest common multiple between two numbers is the smallest number that both numbers can divide into. This concept can be extended to more than two numbers as well.

We can first start with just finding the smallest common multiple between two numbers. Naively, you can start writing out multiple of each number until you write a multiple that exists from both numbers.

An example would be the numbers `3` and `4`. The multiples of `3` are `3, 6, 9, 12, 15, 18, ...` and the multiples of `4` are `4, 8, 12, 16, 20, ...`. The first smallest number we run into in both lists is `12` so this is the smallest common multiple between `3` and `4`.

This problem can be confusing because most people look for the smallest common multiple of just the two numbers but forget the keyword **range**. However, this means that if you are given `[1,5]`, then you have to check for the smallest common multiple for all the numbers `[1,2,3,4,5]` that is evenly divisible by all of them.

#### Relevant Links

*   <a href='https://en.wikipedia.org/wiki/Least_common_multiple' target='_blank' rel='nofollow'>Least (Smallest) Common Multiple</a>


---
## Hints

### Hint 1

Create an array with all the numbers that are missing from the original array to make it easier to check when having to check for even division.

### Hint 2

You can use remainder operator (`%`) to check if the reminder of a division is 0, which means it is evenly divisible.

### Hint 3

If you sort the array from greatest to smallest, then you can use the first two numbers as a first check for the smallest common multiple. This is because they are more likely to be the smallest common multiple than the lower numbers.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function smallestCommons(arr) {
  // Sort array from greater to lowest
  // This line of code was from Adam Doyle (http://github.com/Adoyle2014)
  arr.sort(function(a, b) {
    return b - a;
  });

  // Create new array and add all values from greater to smaller from the
  // original array.
  var newArr = [];
  for (var i = arr[0]; i >= arr[1]; i--) {
    newArr.push(i);
  }

  // Variables needed declared outside the loops.
  var quot = 0;
  var loop = 1;
  var n;

  // Run code while n is not the same as the array length.
  do {
    quot = newArr[0] * loop * newArr[1];
    for (n = 2; n < newArr.length; n++) {
      if (quot % newArr[n] !== 0) {
        break;
      }
    }

    loop++;
  } while (n !== newArr.length);

  return quot;
}

// test here
smallestCommons([1, 5]);
```


#### Code Explanation

*   Because of the possibility of the smallest common denominator being among the two biggest numbers, it makes sense to check those first, so sort the array.
*   Create a new array to sort all the numbers, `newArr`.
*   Use a descending `for` loop (`var i = arr[0]; i >= arr[1]; i--`) to add the numbers from the biggest to the smallest in the new array.
*   Declare the variables for the quotient so we can access them outside the loop:
    *   the quotient that'll be our smallest common multiple (`quot`)
    *   the loop number we're checking (`loop`)
    *   the index of the array of numbers (`n`)
*   Use a `do` `while`loop to check what we need while`n` is not the same length as the new array.
*   In the `do` part, we are going to multiply the very first number, times the number of loops, times the second number (`quot = newArr[0] * loop * newArr[1];`).
*   The `loop` part will allows us to increase the number we're checking beyond the greatest number we have without having to change the algorithm.
*   We enter a `for` loop that will go from `n` being 2 and going up by one (`loop++`) while it is smaller than the array with all the numbers (`n < newArr.length`).
*   If the quotient does not divide evenly (`quot % newArr[n] !== 0`), then stop the loop (`break;`). If it is even, then check for the next elements (`n++`) in the array until it is not even or we find our answer.
*   Outside the loop, increase the value of loop (`loop++`).
*   At the end of the loop return the quotient (`return quot;`).

Note: If the array only has two elements, then the `for` loop never gets used and the return value is the product of said numbers.

#### Relevant Links

*   <a href='http://forum.freecodecamp.com/t/javascript-array-prototype-sort/14306' target='_blank' rel='nofollow'>JS Array Prototype Sort</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained' target='_blank' rel='nofollow'>JS For Loops Explained</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298' target='_blank' rel='nofollow'>JS Array Prototype Push</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-do-while-loop/14662' target='_blank' rel='nofollow'>JS Do While Loop</a>
*   <a>String.length</a>
</details>


<details><summary>Solution 2 (Click to Show/Hide)</summary>

```javascript
function smallestCommons(arr) {
  var range = [];
  for (var i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
    range.push(i);
  }

  // can use reduce() in place of this block
  var lcm = range[0];
  for (i = 1; i < range.length; i++) {
    var GCD = gcd(lcm, range[i]);
    lcm = (lcm * range[i]) / GCD;
  }
  return lcm;

  function gcd(x, y) {
    // Implements the Euclidean Algorithm
    if (y === 0) return x;
    else return gcd(y, x % y);
  }
}

// test here
smallestCommons([1, 5]);
```


#### Code Explanation

*   The first, basic solution requires over 2,000 loops to calculate the test case `smallestCommons([1,13])`, and over 4 million loops to calculate `smallestCommons([1,25])`. This solution evaluates `smallestCommons([1,13])` in around 20 loops and `smallestCommons([1,25])` in 40, by using a more efficient algorithm.
*   Make an empty array **range**.
*   All numbers between the given range are pushed to **range** using a `for` loop.
*   The next block of code implements the Euclidean algorithm, which is used for finding smallest common multiples.

#### Relevant Links

*   <a href='https://en.wikipedia.org/wiki/Euclidean_algorithm' target='_blank' rel='nofollow'>Euclidean algorithm</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-math-max/14682' target='_blank' rel='nofollow'>JS Math Max</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-math-min/14684' target='_blank' rel='nofollow'>JS Math Min</a>

</details>

<details><summary>Solution 3 (Click to Show/Hide)</summary>


```javascript
function smallestCommons(arr) {
  // Euclidean algorithm for the greatest common divisor.
  // ref: https://en.wikipedia.org/wiki/Euclidean_algorithm
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  // Least Common Multiple for two numbers based on GCD
  const lcm = (a, b) => (a * b) / gcd(a, b);

  // range
  let [min, max] = arr.sort((a, b) => a - b);
  let currentLCM = min;

  while (min < max) {
    currentLCM = lcm(currentLCM, ++min);
  }

  return currentLCM;
}

// test here
smallestCommons([1, 5]);
```
    

#### Code Explanation

*   Extract minimum and maximum from provided **arr** by sorting and grabbing the first and last values.
*   Initialise **smallestCommon** with the LCM of first two numbers.
*   Loop through range computing LCM of current LCM and next number in range **lcm(a, b, c) = lcm(lcm(a, b), c)**.

#### Relevant Links

*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Increment' target='_blank' rel='nofollow'>Prefix increment operator ++</a>

</details>

<details><summary>Solution 4 (Click to Show/Hide)</summary>

```javascript
const smallestCommons = arr => {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  // Initially the solution is assigned to the highest value of the array
  let sol = max;

  for (let i = max - 1; i >= min; i--) {
    // Each time the solution checks (i.e. sol%i===0) it won't be necessary
    // to increment 'max' to our solution and restart the loop
    if (sol % i) {
      sol += max;
      i = max;
    }
  }
  return sol;
};

// test here
smallestCommons([1, 5]);
```
    
#### Code Explanation

*   Extract `min` and `max` from `arr` using `Math.min()` and `Math.max()`, respectively. As the arguments to these functions are integers, it is necessary to spread `...` the array.
*   As a first guess, let's say that the solution is `max`. (we will increment this value later on if it is not the solution)
*   Confirm that our solution is a multiple of all the values between `max` and `min` using a `for` loop.
*   In case it isn't a solution, increment `max` to our solution (i.e. get the next multiple of the `arr` highest value) and restart the loop `i = max`. Note that it isn't `i = max - 1` since the `for` loop hasn't finished yet. Once it is finished, the loop itself will execute `i--`. It is also worth mentioning now that we started the loop at `i = max` and decremented `i` throughout instead of starting at `i = min` and then increment it in order to minimize the number of iterations.
*   The `if` statement never being true means that all numbers between `min` and `max` are divisible by our solution

#### Relevant Links

*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Decrement_(--)' target='_blank' rel='nofollow'>Prefix decrement operator (--)</a>
*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_()' target='_blank' rel='nofollow'>Remainder operator (%)</a>
*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min' target='_blank' rel='nofollow'>Math.min()</a>
*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max' target='_blank' rel='nofollow'>Math.max()</a>
*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax' target='_blank' rel='nofollow'>Spread syntax (...)</a>

</details>
