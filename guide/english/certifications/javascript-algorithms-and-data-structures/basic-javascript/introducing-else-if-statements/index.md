---
title: Introducing Else If statements
---
## Introducing Else If statements

 Remember to use Read-Search-Ask if you get stuck. Try to pair program and write your own code.

 ### Problem explanation:
```javascript
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }
  
  if (val < 5) {
    return "Smaller than 5";
  }
  
  return "Between 5 and 10";
}

// Change this value to test
testElseIf(7);
```
We'll be modifying the existing code above so that it follows the flow of logic that an **else-if** statement has.

 ### Hint: 1
 ``` javascript
   if (val > 10) {
    return "Greater than 10";
  }
  ```
  All `if` statements and their variants start off with an `if` statement.
> _try to solve the problem now_
 
 ### Hint: 2
  ``` javascript
  else if (val < 5) {
    return "Smaller than 5";
  }
  ```
  Statements between the `if` statement and the `else` statement in an **else-if** flow are in the else-if format
> _try to solve the problem now_
 
 ### Hint: 3
``` javascript
else {
  return "Between 5 and 10";
  }
 ```
 The last statement in an **else-if** flow is in the `else` format
 ### Spoiler alert!
![spoiler](http://discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)
 Solution ahead!
 ## Basic code solution:
```javascript
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }
  
  else if (val < 5) {
    return "Smaller than 5";
  }
  
  else {
  return "Between 5 and 10";
  }
}

// Change this value to test
testElseIf(7);
```
:rocket: [Run code](https://repl.it/@RyanPisuena/GoldenWorriedRuntime)
 ## Code explanation
The structure of an **else-if logic flow** is an initial `if` statement, one more `if-else` statements, and one final `else` statement.
 
### Resources
- ["if...else" - *MDN JavaScript reference*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)

