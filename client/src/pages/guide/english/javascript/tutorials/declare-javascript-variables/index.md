---
title: Declare Variables
---

# Declare Variables

JavaScript variable declarations can be sorted into three distinct components: the variable type, the variable name, and the variable value.
```js
    var myName = "Rafael";
```
Let's break the above line of code into the pieces that make it up: 
```js
    var/const/let
```
JavaScript variables can have three declaration types: var, const, and let. Var-type variables are global, if declared outside a function they can be accessed by any JS file (or the console), and if created within a function they are accessible regardless of block scope. Let-type variables are limited in scope to their block. See the example below for the difference.
```js
     function varTest() {
      var x = 1;
      if (true) {
        var x = 2;  // same variable!
        console.log(x);  // 2
      }
      console.log(x);  // 2
    }

    function letTest() {
      let x = 1;
      if (true) {
        let x = 2;  // different variable
        console.log(x);  // 2
      }
      console.log(x);  // 1
    }
```
Const-type variables have the same scope as let variables (block scope), but are immutable. Whatever value a const-type variable is to be assigned, must happen when the variable is declared, and JavaScript will thrown an error if the variable is changed later.
```js
    const genre = "non-fiction";
    console.log(genre); // "non-fiction";
    genre = "fantasy"; // error
```
Now that we can determine what the variable type is, let's take a look at the name. JavaScript variable names are written in `camel case` format. An example of camel case is: `camelCase`. In the context of our example: 
```js
    myName
```
The name is also we'll access the variable again later:
```js
    console.log(myName); // "Rafael"
```
Finally, our value: 
```js
    "Rafael"
```
JavaScript is dynamically typed, which means any given variable can represent any given data type at any given time. For example: 
```js
    var example = "This is an example";
    example = [0, 1, 2, 3]
    example = {test: "Result"}
    example = 5
```
All those statements are perfectly valid - JavaScript variables can jump from string to array to object to integer.
