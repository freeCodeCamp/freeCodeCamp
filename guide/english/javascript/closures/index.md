---
title: Closures
---

# Closures

A closure is the combination of a function and the lexical environment (scope) within which that function was declared. Closures are a fundamental and powerful property of Javascript. This article discusses the 'how' and 'why' about Closures:



### Example

```js
//we have an outer function named walk and an inner function named fly

function walk (){
  
  var dist = '1780 feet';
  
  function fly(){
    console.log('At '+dist);
  }
  
  return fly;
}

var flyFunc = walk(); //calling walk returns the fly function which is being assigned to flyFunc
//you would expect that once the walk function above is run
//you would think that JavaScript has gotten rid of the 'dist' var

flyFunc(); //Logs out 'At 1780 feet'
//but you still can use the function as above 
//this is the power of closures

```
### Another Example
```js
function by(propName) {
    return function(a, b) {
        return a[propName] - b[propName];
    }
}

const person1 = {name: 'joe', height: 72};
const person2 = {name: 'rob', height: 70};
const person3 = {name: 'nicholas', height: 66};

const arr_ = [person1, person2, person3];

const arr_sorted = arr_.sort(by('height')); // [ { name: 'nicholas', height: 66 }, { name: 'rob', height: 70 },{ name: 'joe', height: 72 } ]

```
The closure 'remembers' the environment in which it was created. This environment consists of any local variables that were in-scope at the time the closure was created.

```js
function outside(num) {
  var rememberedVar = num; // In this example, rememberedVar is the lexical environment that the closure 'remembers'
  return function inside() { // This is the function which the closure 'remembers'
    console.log(rememberedVar)
  }
}

var remember1 = outside(7); // remember1 is now a closure which contains rememberedVar = 7 in its lexical environment, and //the function 'inside'
var remember2 = outside(9); // remember2 is now a closure which contains rememberedVar = 9 in its lexical environment, and //the function 'inside'

remember1(); // This now executes the function 'inside' which console.logs(rememberedVar) => 7
remember2(); // This now executes the function 'inside' which console.logs(rememberedVar) => 9 
```
Closures are useful because they let you 'remember' data and then let you operate on that data through returned functions. This allows javascript to emulate private methods that are found in other programming languages. Private methods are useful for restricting access to code as well as managing your global namespace.

### Private variables and methods

Closures can also be used to encapsulate private data/methods. Take a look at this example:

```javascript
const bankAccount = (initialBalance) => {
  const balance = initialBalance;

  return {
    getBalance: function() {
      return balance;
    },
    deposit: function(amount) {
      balance += amount;
      return balance;
    },
  };
};

const account = bankAccount(100);

account.getBalance(); // 100
account.deposit(10); // 110
```

In this example, we won't be able to access `balance` from anywhere outside of the `bankAccount` function, which means we've just created a private variable. Where's the closure? Well, think about what `bankAccount()` is returning. It actually returns an Object with  a bunch of functions inside it, and yet when we call `account.getBalance()`, the function is able to "remember" its initial reference to `balance`. That is the power of the closure, where a function "remembers" its lexical scope (compile time scope), even when the function is executed outside that lexical scope.

<b>Emulating block-scoped variables.</b>

Javascript did not have a concept of block-scoped variables. Meaning that when defining a variable inside a forloop for example, this variable is visible from outside the forloop as well. So how can closures help us solve this problem ? Let's take a look.

```javascript
    var funcs = [];
    
    for(var i = 0; i < 3; i++){
        funcs[i] = function(){
            console.log('My value is ' + i);  //creating three different functions with different param values.
        }
    }
    
    for(var j = 0; j < 3; j++){
        funcs[j]();             // My value is 3
                                // My value is 3
                                // My value is 3
    }
```

Since the variable i does not have block-scope, its value within all three functions was updated with the loop counter and created malicious values. Closure can help us solve this issue by creating a snapshot of the environment the function was in when it was created, preserving its state.

```javascript
    var funcs = [];
    
    var createFunction = function(val){
	    return function() {console.log("My value: " + val);};
    }

    for (var i = 0; i < 3; i++) {
        funcs[i] = createFunction(i);
    }
    for (var j = 0; j < 3; j++) {
        funcs[j]();                 // My value is 0
                                    // My value is 1
                                    // My value is 2
    }

```
The late versions of javascript es6+ have a new keyword called let which can be used to give the variable a blockscope.
There are also many functions (forEach) and entire libraries (lodash.js) that are dedicated to solve such problems as the ones explained above. They can certainly boost your productivity, however it remains extremely important to have knowledge of all these issues when attempting to create something big.

Closures have many special applications that are useful when creating large javascript programs.

1. Emulating private variables or encapsulation
2. Making Asynchronous server side calls
3. Creating a block-scoped variable.

<b>Emulating private variables.</b>

Unlike many other languages, Javascript does not have a mechanism which allows you to create encapsulated instance variables within an object. Having public instance variables can cause a lot of problems when building medium to large programs. However with closures, this problem can be mitigated.

Much like in the previous example, you can build functions which return object literals with methods that have access to the object's local variables without exposing them. Thus, making them effectively private.

Closures can also help you manage your global namespace to avoid collisions with globally shared data. Usually all global variables are shared between all scripts in your project, which will definitely give you alot of trouble when building medium to large programs. That is why library and module authors use closures to hide an entire module's methods and data. This is called the module pattern, it uses an immediately invoked function expression which exports only certain functionality to the outside world, significantly reducing the amount of global references.

Here's a short sample of a module skeleton.

```javascript
var myModule = (function() = {
    let privateVariable = 'I am a private variable';
    
    let method1 = function(){ console.log('I am method 1'); };
    let method2 = function(){ console.log('I am method 2, ', privateVariable); };
    
    return {
        method1: method1,
        method2: method2
    }
}());

myModule.method1(); // I am method 1
myModule.method2(); // I am method 2, I am a private variable
```

Closures are useful for capturing new instances of private variables contained in the 'remembered' environment, and those variables can only be accessed through the returned function or methods.

### More Information:

<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures' target='_blank' rel='nofollow'>MDN</a>
<br />
<a href='https://medium.freecodecamp.org/lets-learn-javascript-closures-66feb44f6a44' target='_blank' rel='nofollow'>Javascript Closures</a>
