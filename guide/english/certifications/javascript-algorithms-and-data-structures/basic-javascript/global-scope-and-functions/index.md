---
title: Global Scope and Functions
---
## Global Scope and Functions

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
The scope of a variable is its visibility; where in the code is the function available? Here is a list of the different scopes a variable can have.

* **Global scope**: The variable is available throughout the code
* **Local scope**: Available in only a certain area (like only within function)
* **Block scope**: Available within an *even more* certain area (like an if-statement)

Your task is to understand how adding `var` (and not adding) before a variable name, can change the variable's scope. 

When you add `var` before the variable name, its scope is determined by where it is placed. Like so:

```javascript
var num1 = 18; // Global scope
function fun() {
  var num2 = 20; // Local (Function) Scope
  if (true) {
    var num3 = 22; // Block Scope (within an if-statement)
  }
}
```

When you don't, this is the result:

```javascript
num1 = 18; // Global scope
function fun() {
  num2 = 20; // Global Scope
  if (true) {
    num3 = 22; // Global Scope
  }
}
```

Alright, here is the basic code solution.

```javascript
// Declare your variable here
var myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
  
}

// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
```
