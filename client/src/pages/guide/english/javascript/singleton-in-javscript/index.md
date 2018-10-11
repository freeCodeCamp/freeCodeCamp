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


Hope, This will help you write better codes. Happy Coding :)
