---
title: Understand the Constructor Property
---
## Understand the Constructor Property

### Method

Simply finish the function like that of the example given. Use an `if-statement` to test whether or not the `candidate` is a `Dog`.  

### Solution

```javascript

function Dog(name) {
  this.name = name;
}

// Add your code below this line
function joinDogFraternity(candidate) {
  if(candidate.constructor === Dog) {
    return true;
  }
  else {
    return false;
  }
}

```
 
