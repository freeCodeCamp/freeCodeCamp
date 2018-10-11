---
title: Testing Objects for Properties
---
## Testing Objects for Properties

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

Here’s the example:

```javascript
// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  
  return "Change Me!";
}

// Test your code by modifying these values
checkObj("gift");
```

Here’s a solution:

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
 ```
 
 and change the value of `return` in `else` statement:
 
```javascript 
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
  }
  else {
      return "Not Found"
  }
}
// Test your code by modifying these values
checkObj("gift");
```
