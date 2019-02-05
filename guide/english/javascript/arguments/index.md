---
title: Arguments
---
The arguments object is an **array-like object** _(in that the structure of the object is similar to that of an array however it should not be considered an array as it has all the functionality of an object)_ that stores all of the arguments that you passed to a function and is proprietary to that function in particular. If you were to pass 3 arguments to a function, say `storeNames()`, those 3 arguments would be stored inside an object called **arguments** and it would look like this when we pass the arguments `storeNames("Mulder", "Scully", "Alex Krycek")` to our function:

*   First, we declare a function and make it return the arguments object.

```javascript  
function storeNames() { return arguments; }
```

*   Then, when we execute that function with **n arguments**, 3 in this case, it will return the object to us and it will **look like** an array. We can convert it to an array, but more on that later...

```javascript
// If we execute the following line in the console:
storeNames("Mulder", "Scully", "Alex Kryceck");
// The output will be { '0': 'Mulder', '1': 'Scully', '2': 'Alex Kryceck' }
```

If you want to know more about this, such as converting it to an array or the optimization problem that comes with using the _slice(_) method and how to solve it, click on **read more** (Gitter Chat Only).

## Treat it as an array

You can invoke arguments by using `arguments[n]` (where _n_ is the index of the argument in the array-like object) but if you want to use it as an array for iteration purposes or applying array methods to it, you need to _convert it to an array_ by declaring a variable and using the Array.prototype.slice.call method (because _arguments_ is not an array):

```javascript
var args = Array.prototype.slice.call(arguments);

// or the es6 way:
var args = Array.from(arguments)
```

Since **slice()** has two (the parameter **end** is optional) parameters, you can grab a certain portion of the arguments by specifying (using the _slice.call()_ method renders these two parameters optional, not just _end_) the beginning and the ending of your portion; check out the following code:

```javascript
function getGrades() {
    var args = Array.prototype.slice.call(arguments, 1, 3);
    return args;
}

// Let's output this!
console.log(getGrades(90, 100, 75, 40, 89, 95));

// OUTPUT SHOULD BE: //
// [100, 75] <- Why? Because it started from index 1 and stopped at index 3
// so, index 3 (40) wasn't taken into consideration.
//
// If we remove the '3' parameter, leaving just (arguments, 1) we'd get
// every argument from index 1: [100, 75, 40, 89, 95].
```

### Optimization issues with Array.slice()

There is a little problem; it's not recommended to use slice in the arguments object (optimization reasons)...

> **Important**: You should not slice on arguments because it prevents optimizations in JavaScript engines (V8 for example). Instead, try constructing a new array by iterating through the arguments object.
> 
> _by_ **_Mozilla Developer Network_** <a href='https://developer.mozilla.org/ca/docs/Web/JavaScript/Reference/Functions/arguments' target='_blank' rel='nofollow'>(reference)<a>



So, what other method is available to convert _arguments_ to an array? I recommend the for-loop (not the for-in loop), you can do it like this:

```javascript
var args = []; // Empty array, at first.
for (var i = 0; i < arguments.length; i++) {
    args.push(arguments[i])
} // Now 'args' is an array that holds your arguments.
```

For more information on the optimization issues:  
Optimization Killers: <a href='https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments' target='_blank' rel='nofollow'>Managing Arguments</a>

### ES6 rest parameter as a way to circumvent the arguments object

In ES2015/ES6 it is possible to use the rest parameter (`...`) instead of the arguments object in most places. Say we have the following function (non-ES6): 

    function getIntoAnArgument() {
        var args = arguments.slice();
        args.forEach(function(arg) {
            console.log(arg);
        });
    }

That function can be replaced in ES6 by: 

    function getIntoAnArgument(...args) {
        args.forEach(arg => console.log(arg));
    }

note that we also used an arrow function to shorten the forEach callback!   

The arguments object is not available inside the body of an arrow function.

The rest parameter must always come as the last argument in your function definition.  
    ```function getIntoAnArgument(arg1, arg2, arg3, ...restOfArgs  /*no more arguments allowed here*/) {
        //function body
    }```
    
so doing this should throw a SyntaxError: Rest parameter must be last formal parameter 
    ```function invalidRestUse(...args, arg1, arg2){
    }```

Rest parameters can be destuctured and unpacked into distinct variables
    ```
    function restDestructuring(...[a, b, c]){
        return a + b + c;
    }
    
    restDestructuring(1, 2, 3);  // 6
    ```
### ES6 destructuring of arrays in formal parameter

With the new destructuring feature we can even go one step ahead when passing an array to a function and break down its elements as variables.
    ```
    function arrayDestructuring([a, b, c]){
        return a + b + c;    
    }

    arrayDestructuring([1,2]) //Nan , as 1 + 2 + undefined = NaN 
    arrayDestructuring([1,2,3]) // 6
    arrayDestructuring([1,2,3,4,5]) // 6  additional elements will be ignored
    ```
