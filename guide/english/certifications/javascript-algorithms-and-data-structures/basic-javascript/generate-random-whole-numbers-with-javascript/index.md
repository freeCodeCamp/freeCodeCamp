---
title: Generate Random Whole Numbers with JavaScript
---

# Generate Random Whole Numbers with JavaScript


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {
  // Only change code below this line.
  return Math.floor(Math.random() * 10);
}
```

#### Code Explanation
* We need to use ```Math.floor()``` with ```Math.random()``` to generate and return a random whole number between 0 and 9.
* Putting ```Math.floor()``` and ```Math.random()``` together
</details>