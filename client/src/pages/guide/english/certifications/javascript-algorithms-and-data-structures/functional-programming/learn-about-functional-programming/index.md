---
title: Learn About Functional Programming
---
## Learn About Functional Programming
A function has an input or a parameter ``` const myFunc = (input) => { ...code to execute... } ```. In this case the input is how many cups of tea to be created.
<br/>

### Method

Only one line of code must be changed to pass this challenege. The `getTea()` function must be called and stored in the `tea4TeamFCC` variable. Make sure to read through the `getTea()` function and understand exactly what it does. The function takes in one variable - `numOfCups`. A `teaCups[]` array is first made and a for loop is set up to count down the number of cups passed into the function. A new cup of tea is then pushed to the array through every iteration of the for loop. 

Thus resulting in an array full of the amount of teacups originally passed into the `getTea()` function. 

### Solution

```javascript

/**
 * A long process to prepare tea.
 * @return {string} A cup of tea.
 **/
const prepareTea = () => 'greenTea';

/**
 * Get given number of cups of tea.
 * @param {number} numOfCups Number of required cups of tea.
 * @return {Array<string>} Given amount of tea cups.
 **/
const getTea = (numOfCups) => {
  const teaCups = [];
  
  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }

  return teaCups;
};

// Add your code below this line

const tea4TeamFCC = getTea(40); // :(

// Add your code above this line

console.log(tea4TeamFCC);
```