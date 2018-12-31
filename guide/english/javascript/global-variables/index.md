---
title: Global Variables
---

Global variables are declared outside of a function for accessibility throughout the program, while local variables are stored within a function using `var` for use only within that function's [scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope). If you declare a variable without using `var`, even if it's inside a function, it will still be seen as global:

```javascript
var x = 5; //global variable
function someThing(y) {
    var z = x + y;
    console.log(z);
}

function someThing(y) {
    x = 5; //still a global variable!
    var z = x + y;
    console.log(z);
}

function someThing(y) {
    var x = 5; //local variable
    var z = x + y;
    console.log(z);
}
```
A global variable is also an object of the current scope, such as the browser window:

```javascript
var dog = “Fluffy”;
console.log(dog); //Fluffy;

var dog = “Fluffy”;
console.log(window.dog); //Fluffy
```

It’s a best practice to minimize global variables. Since the variable can be accessed anywhere in the program, they can cause strange behavior.

References:
* [var -Javascript|MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)
* [You Don't Know JavaScript: Scopes & Closures](https://github.com/getify/You-Dont-Know-JS/tree/master/scope%20%26%20closures)

Additional Info:
* <a href='http://www.w3.org/wiki/JavaScript_best_practices#Avoid_globals' target='_blank' rel='nofollow'>JavaScript Best Practices: Avoid Globals</a>
* [What's the difference between a global var and a window.variable in javascript?](https://stackoverflow.com/questions/6349232/whats-the-difference-between-a-global-var-and-a-window-variable-in-javascript)
---
The scope of JavaScript variables are either global or local.
Global variables are declared OUTSIDE the function and its value is accessible/changeable throughout the program.

You should ALWAYS use **var** to declare your variables (to make locally) else it will install GLOBALLY

Take care with the global variables because they are risky. Most of the time you should use closures to declare your variables.
Example:

```javascript
    (function(){
      var myVar = true;
    })();
```

#### More Information:
- [JavaScript Best Practices: Avoid Globals](http://www.w3.org/wiki/JavaScript_best_practices#Avoid_globals)
- [Global Variables are bad](http://c2.com/cgi/wiki?GlobalVariablesAreBad)
- [MDN - Global Variables](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)
