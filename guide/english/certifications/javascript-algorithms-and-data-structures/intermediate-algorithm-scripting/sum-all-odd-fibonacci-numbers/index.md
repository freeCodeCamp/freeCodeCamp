---
title: Sum All Odd Fibonacci Numbers
---

# Sum All Odd Fibonacci Numbers

---
## Problem Explanation

You will need to gather all the **Fibonacci** numbers and then check for the odd ones. Once you get the odd ones then you will add them all. The last number should be the number given as a parameter if it actually happens to be an off Fibonacci number.

#### Relevant Links

*   <a href='https://en.wikipedia.org/wiki/Fibonacci_number' target='_blank' rel='nofollow'>Fibonacci number</a>


---
## Hints

### Hint 1

To get the next number of the series, you need to add the current one to the previous and that will give you the next one.

### Hint 2

To check if a number is even all you have to check is if `number % 2 == 0`.

### Hint 3

As you get the next odd one, don't forget to add it to a global variable that can be returned at the end. `result += currNumber;` will do the trick.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function sumFibs(num) {
  var prevNumber = 0;
  var currNumber = 1;
  var result = 0;
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }

    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }

  return result;
}

// test here
sumFibs(4);
```

#### Code Explanation

*   Create a variable to keep record of the current and previous numbers along with the result that will be returned.
*   Use a while loop to make sure we do not go over the number given as parameter.
*   We use the modulo operand to check if the current number is odd or even. If it is odd, add it to the result.
*   Complete the Fibonacci circle by rotating getting the next number and swapping values after.
*   Return the result.

#### Relevant Links

*   <a href='https://www.freecodecamp.org/forum/t/javascript-while-loop/14668' target='_blank' rel='nofollow'>JS while Loop</a>
</details>


<details><summary>Solution 2 (Click to Show/Hide)</summary>

```javascript
function sumFibs(num) {
  // Perform checks for the validity of the input
  if (num < 0) return -1;
  if (num === 0 || num === 1) return 1;

  // Create an array of fib numbers till num
  const arrFib = [1, 1];
  let nextFib = 0;

  // We put the new Fibonacci numbers to the front so we
  // don't need to calculate the length of the array on each
  // iteration
  while ((nextFib = arrFib[0] + arrFib[1]) <= num) {
    arrFib.unshift(nextFib);
  }

  // We filter the array to get the odd numbers and reduce them to get their sum.
  return arrFib.filter(x => x % 2 != 0).reduce((a, b) => a + b);
}

// test here
sumFibs(4);
```

#### Code Explanation

*   Create an array of fibonacci numbers till **num**.
*   Use `filter()` method to filter out even numbers.
*   Use `reduce()` method to sum the remaining (odd) values.
*   Return the sum.

#### Relevant Links

*   <a href='http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298' target='_blank' rel='nofollow'>JS Array Prototype Push</a>
*   <a href='https://www.freecodecamp.org/forum/t/javascript-for-loops-explained/14670' target='_blank' rel='nofollow'>JS For Loops Explained</a>
*   <a href='https://www.freecodecamp.org/forum/t/javascript-array-prototype-filter/14289' target='_blank' rel='nofollow'>JS Array Prototype Filter</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-array-prototype-reduce/14299' target='_blank' rel='nofollow'>JS Array Prototype Reduce</a>
</details>
