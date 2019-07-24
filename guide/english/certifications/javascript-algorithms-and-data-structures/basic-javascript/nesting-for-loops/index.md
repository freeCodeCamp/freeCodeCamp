---
title: Nesting For Loops
---
# Nesting For Loops

---
## Problem Explanation

#### Relevant Links
<ul>
  <li><a href="https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/basic-javascript/nest-one-array-within-another-array">Nest One Array Within Another Array</a></li>
  <li><a href="https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/iterate-through-an-array-with-a-for-loop">Iterate Through An Array With A For Loop</a></li>
  <li><a href="https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/accessing-nested-arrays">Accessing Nested Arrays</a></li>
</ul>


---
## Hints

### Hint 1

Make sure to check with <code>length</code> and not the overall array.

### Hint 2

Use both <code>i</code> and <code>j</code> when multiplying the product.

### Hint 3

Remember to use <code>arr[i]</code> when you multiply the sub-arrays with the <code>product</code> variable.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product = product * arr[i][j];
    }
  }
  // Only change code above this line
  return product;
}

// Modify values below to test your code
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
```

#### Code Explanation

<ul>
  <li>We check the length of <code>arr</code> in the <code>i</code> for loop and the <code>arr[i]</code> length in the <code>j</code> for loop.</li>
  <li>We multiply the <code>product</code> variable by itself because it equals 1, and then multiply it by the sub-arrays.</li>
  <li>The two sub-arrays to multiply are <code>arr[i]</code> and <code>j</code>.</li>
</ul>
</details>
