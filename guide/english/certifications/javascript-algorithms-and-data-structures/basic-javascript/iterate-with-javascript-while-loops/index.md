---
title: Iterate with JavaScript While Loops
---
# Iterate with JavaScript While Loops

---
## Problem Explanation
While loops will run as long as the condition inside the ( ) is true.

Example:

```javascript
while (condition) {
  //code...
}
```

---
## Hints

### Hint 1
Use a iterator variable such as i in your condition
```javascript
var i = 0;
while (i <= 4) {}
```


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
// Setup
var myArray = [];

// Only change code below this line.
var i = 0;
while (i <= 4) {
  myArray.push(i);
  i++;
}
```
</details>
