---
title: Creating a Singleton in JavaScript
---

## Creating a Singleton in JavaScript

A singleton is an object that only allows one instance of itself to be created and allows a global point of access to it. The singleton design pattern can be useful if you have some data that should remain the same throughout your application.

### Let's Get Started

Let's create an object with an immediately-invoked function expression (or _IIFE_, pronounced "iffy") that will give us the effect of a singleton.

```
var singletonFn = (function(){ // Created IIFE Function
  var dataCounter = 0;
  return { // Any code inside this return stuff will be accessible directly using objectname.
    
    getDataCounter: function(){
      return dataCounter;
    },
  
    setDataCounter: function(val){
      dataCounter = val;
    },
    
    fishNames: ["SimpleFish"] // Can create variables, arrays, etc.
  }
})();

console.log(singletonFn.getDataCounter()); // 0 by default

singletonFn.setDataCounter(20);

console.log(singletonFn.getDataCounter()); // 20

console.log(singletonFn.fishNames); // ["SimpleFish"]
```

Here's another example of a singleton:

```
var Person;

(function() {
  let instance;

  Person = function(fName, lName, job) {
    // constructor
    this.fName = fName || 'John';
    this.lName = lName || 'Doe';
    this.job = job || 'Software Engineer';
    
    if (!instance) {
      instance = this;
    }

    this.getFullName = function () {
      return this.fName + ' ' + this.lName;
    }
    
    this.getJob = function () {
      return this.job;
    }

    this.print = function () {
      console.log(this.getFullName() + ' ' + this.getJob());
    }

    return instance;
  }
})();

//initialize these "guys" but they point to the same object
var guy1 = new Person();
var guy2 = new Person();

// proof that they're the same instance
guy1.print(); // "John Doe Software Engineer"
guy2.print(); // "John Doe Software Engineer"
console.log(guy1 == guy2); //true

// modify guy2 and see that guy1 has changed as well
guy2.fName = 'Jane';
guy2.lName = 'Doo';
guy2.job = 'Project Manager';
guy1.print(); // "Jane Doo Project Manager"
guy2.print(); // "Jane Doo Project Manager"
```
