---
title: Golf Code
---

# Golf Code


---
## Hints

---
## Problem Explanation
Change the code below `// Only change code below this line` and above `// Only change code above this line`.

Ensure that you're editing the inside of the `golfScore` function.

You will have to make the function return exactly the same string as shown shown in the table, depending on the value of the parameters **par** and **strokes** that are passed to your function.


### Hint 1

`+number -number` can be used to increase or decrease a parameter in your condition.


### Hint 2

You use `if / else if` chains to return different values in different scenarios.


### Hint 3

Control the flow of your function based on the tables order of priority - top (highest) to bottom (lowest) to return matching string values.



---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1) {
    return "Hole-in-one!";
  } else if (strokes <= par - 2) {
    return "Eagle";
  } else if (strokes == par - 1) {
    return "Birdie";
  } else if (strokes == par) {
    return "Par";
  } else if (strokes == par + 1) {
    return "Bogey";
  } else if (strokes == par + 2) {
    return "Double Bogey";
  } else {
    return "Go Home!";
  }
  // Only change code above this line
}
// Change these values to test
golfScore(5, 4);
```

#### Code Explanation

*   Compare the parameters **par** and **strokes** to return appropriate string values.
*   `if / else if` chain is used for flow control.
*   String "Go Home!" is returned for every condition where **strokes** is greater than or equal to **par + 3**.
</details>


<details><summary>Solution 2 (Click to Show/Hide)</summary>

```javascript
var names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!"
];
function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else {
    return names[6];
  }
  // Only change code above this line
}

// Change these values to test
golfScore(5, 4);
```

#### Code Explanation
Since we already have an array defined in the variable `names` we can take advantage of it and use it for our return statements using indexes (eg: `names[0] is the first one`). That way, if you ever need to change a specific result you wouldn't need to look for it inside the function, it'd be at the beginning, in your array.
</details>


<details><summary>Solution 3 (Click to Show/Hide)</summary>

(Using Multiple Conditional (Ternary) Operators)
```js
function golfScore(par, strokes) {
  return strokes == 1
    ? names[0]
    : strokes <= par - 2
    ? names[1]
    : strokes == par - 1
    ? names[2]
    : strokes == par
    ? names[3]
    : strokes == par + 1
    ? names[4]
    : strokes == par + 2
    ? names[5]
    : strokes >= par + 3
    ? names[6]
    : "Change Me";
}
```

#### Relevant Links

*   <a href='https://en.wikipedia.org/wiki/Golf' target='_blank' rel='nofollow'>Golf</a>
*   <a href='http://www.freecodecamp.com/challenges/chaining-if-else-statements' target='_blank' rel='nofollow'>Challenge: Chaining If Else Statements</a>
*   <a href='http://www.freecodecamp.com/challenges/comparison-with-the-greater-than-equal-to-operator' target='_blank' rel='nofollow'>Challenge: Comparison with the Greater Than Equal To Operator</a>
*   <a href='http://www.freecodecamp.com/challenges/comparison-with-the-less-than-equal-to-operator' target='_blank' rel='nofollow'>Challenge: Comparison with the Less Than Equal To Operator</a>
* ["Array" - *MDN JavaScript reference*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
* <a href='https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/use-multiple-conditional-ternary-operators/' target='_blank' rel='nofollow'>Use Multiple Conditional (Ternary) Operators</a>

</details>