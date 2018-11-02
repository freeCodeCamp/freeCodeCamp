---
title: Understand the Immediately Invoked Function Expression (IIFE)
---
## Understand the Immediately Invoked Function Expression (IIFE)

### Method 

The first test case asks you to make the function anonymous. To do this simply remove the name of the function as seen in the example. The function must then be wrapped in curly brackets with another set of curly brackets at the end to immediatly call the function.

### Solution

```javascript

(function() {
  console.log("A cozy nest is ready");
})();

```
