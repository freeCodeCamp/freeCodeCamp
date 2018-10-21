---
title: Immediately Invoked Functions Expressions(IIFEs)
---
## Function Statement

A function created with a function declaration is a Function object and has all the properties, methods and behavior of Function objects.
Example:

```javascript
  function statement(item){
    console.log('Function statement example '+ item);
  }
```

## Function Expression

A function expression is similar to function statement except that function name can be omitted to create anonymous functions.
Example:

```javascript
  var expression = function (item){
    console.log('Function expression example '+ item);
  }
```

## Immediately Invoked Functions Expressions

A soon as function is created it invokes itself doesn't need to invoke explicitly.
In the below example variable iife will store a string that is returned by the function execution.

```javascript
  var iife = function (){
    return 'Immediately Invoked Function Expressions(IIFEs) example ';
  }();
  console.log(iife); // 'Immediately Invoked Function Expressions(IIFEs) example '
```

The statement before IIFE should always end with a ; or it will throw an error.

**Bad example**:
```javascript
var x = 2 //no semicolon, will throw error
(function(y){
  return x;
})(x); //Uncaught TypeError: 2 is not a function
```

## Why use Immediately Invoked Functions Expressions?

```javascript
  (function(value){
    var greet = 'Hello';
    console.log(greet+ ' ' + value);
  })('IIFEs');
```

In above example when javascript engine execute above code it will create global execution context when it sees code and create function object in memory for IIFE.
And when it reaches on line `46` due to which function is Invoked a new execution context is created on the fly and so greet variable goes into that function execution context not into the global this is what makes it unique.
`This ensures that code inside IIFE does not interfere with other code or be interfered by another code` and so code is safe.

#### More Information
[Immediately-invoked function expression on Wikipedia](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression)
[What does the leading semicolon in JavaScript libraries do?](https://stackoverflow.com/questions/1873983/what-does-the-leading-semicolon-in-javascript-libraries-do)
