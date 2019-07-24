---
title: Testing Objects for Properties
---
# Testing Objects for Properties


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

We do not change anything here:
```javascript
// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};
```
further, in the body of the function we use `.hasOwnProperty(propname)` method of objects to determine if that object has the given property name. `if/else` statement with Boolean Values will help us in this:

```javascript
function checkObj(checkProp) {
  // Your Code Here
  if (myObj.hasOwnProperty(checkProp) == true) {
    return myObj[checkProp];
  }
  else {
 //  and change the value of `return` in `else` statement:
 
    return "Not Found"
  }
}
```

Now, you can change `checkObj` values:

```javascript
// Test your code by modifying these values
checkObj("gift");
```

Here’s a full solution:

```javascript
function checkObj(checkProp) {
  // Your Code Here
  if (myObj.hasOwnProperty(checkProp) == true) {
    return myObj[checkProp];
  } else {
    return "Not Found";
  }
}
// Test your code by modifying these values
checkObj("gift");
```

</details>