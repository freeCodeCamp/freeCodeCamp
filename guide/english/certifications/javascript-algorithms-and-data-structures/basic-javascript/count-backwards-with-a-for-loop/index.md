---
title: Count Backwards With a For Loop
---
## Count Backwards With a For Loop

Here’s the example:

```javascript
// Example
var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.
```

#### HINT: 1
* create a new for loop for myArray

#### HINT: 2
* start from the first odd number just before 9

# SPOILER WARNING: SOLUTION AHEAD

```javascript
var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.
for (var i = 9; i > 0; i-=2){
  myArray.push(i)
}
```