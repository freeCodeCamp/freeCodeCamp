---
title: Count Backwards With a For Loop
---
# Count Backwards With a For Loop


---
## Hints

### Hint 1
* create a new for loop for myArray

### Hint 2
* start from the first odd number just before 9


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.
for (var i = 9; i > 0; i -= 2) {
  myArray.push(i);
}
```
</details>