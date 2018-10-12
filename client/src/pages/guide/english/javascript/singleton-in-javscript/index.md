---
title: Creating Singleton In JavaScript
---

## Creating Singleton In Javascript Guide

This Article is about creating the Singletons in Native(Pure) Javascript. This concept can be useful to maintain clean code.


If you want to maintain your code or somedata should remain same for through out your application this is the way you can get it done.


**Prior knowledge**
This is just to help you understand concept more easily otherwise you can always copy-paste code and change it accordingly.

- Basic Javascript Syntax
- Javascript Functions
- IIFE in Javascript



### Let's Get Started

Let's create object with IIFE function that will get executed instantly to give us effect of Singleton.

```
var singletonFn = (function(){ //Created IIFE Function
  var dataCounter = 0;
  return { //Any code inside this return stuff will be accessible directly using objectname.
    
    getDataCounter: function(){
      return dataCounter;
    },
  
    setDataCounter: function(val){
      dataCounter = val;
    },
    
    fishNames: ["SimpleFish"] //Can create variables, Arrays, etc.
  }
})();
```

Now to execute or use your singleton. in browser after saving this to js file and loading it.

```
console.log(singletonFn.getDataCounter()); //0 as bydefault it will be 0.

singletonFn.setDataCounter(20);

console.log(singletonFn.getDataCounter()); //20 as we assigned.

console.log(fishNames); //will Print array with "SimpleFish".
```


Now with this knowledge you can define constants, enums or anything that needs to use multiple in project written here. or something like configurations.

Here's another example of singleton:
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
guy1.print();
guy2.print();
console.log(guy1 == guy2); //true

// modify guy2 and see that guy1 has changed as well
guy2.fName = 'Jane';
guy2.lName = 'Doo';
guy2.job = 'Project Manager';
guy1.print();
guy2.print();
```

Hope, This will help you write better codes. Happy Coding :)
