---
title: Functional
---

```javascript
var fun = function(a, b) {
  var funInstance = {};
  funInstance.a = a;
  funInstance.b = b;
  funInstance.method1 = function() {
    // method code here
  }
  funInstance.method2 = function() {
    // method code here
  }
  funInstance.method3 = function() {
    // method code here
  }
  return funInstance;
}
var myFun = fun(1, 2);
myFun.method1();
```

## How do I recognize it?
Functional object instantiation creates a class instance with a function, like the other options do. The difference is that all associated methods are also defined in the constructor function.

## Why would I use it?
Since a new set of methods are created for each instance of the object and could take up a considerate amount of memory, functional instantiation is good for when you know that you aren’t going to be working with a lot of instances. It is also good for having your code easily understood by new and seasoned JavaScript coders alike, since the instantiation is completely self contained and it is easy to see the relationships between the methods and the object instances.

## What are the drawbacks?
The down side with Functional Instantiation is that if you were to make any changes to your code (such as adding more methods), any instances of the object that were created before these changes were made would not get updated. You could end up with two instances containing different method information.

---
title: Functional-Shared
---

```javascript
var fun = function(a, b) {
  var funInstance = {};
  funInstance.a = a;
  funInstance.b = b;
  extend(funInstance, funMethods);
  return funInstance;
}
var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
}
var funMethods = {};
funMethods.method1 = function() {
    // method code here
}
funMethods.method2 = function() {
    // method code here
}
funMethods.method3 = function() {
    // method code here
}
var myFun = fun(1, 2);
myFun.method1();
```

## How do I recognize it?
The main difference between Functional and Functional-Shared, is that in Functional-Shared we share our methods. Rather than declare methods in our Instantiation function, we have a separate object holding all of our methods. In order to use the methods, we extend them into each instance of the object that is being created.

## Why would I use it?
Functional-Shared allows for us to use references to methods, rather than declaring and storing our methods for each instance of our object, saving us space.

## What are the drawbacks?
The downside is that since the methods are being referenced via pointers to the methods object, if we were to update the methods object in any way, the instances of the object that were created before the changes would not be updated. You could end up with two instances of the object referencing two different versions of the methods.

---
title: Prototypal
---
```javascript
var fun = function(a, b) {
  var funInstance = Object.create(funMethods);
  funInstance.a = a;
  funInstance.b = b;
  return funInstance;
}
var funMethods = {};
funMethods.method1 = function() {
    // method code here
}
funMethods.method2 = function() {
    // method code here
}
funMethods.method3 = function() {
    // method code here
}
var myFun = fun(1, 2);
myFun.method1();
```

## How do I recognize it?
Prototypal is similar to Functional-Shared in that they both use a separate methods object to hold all of the methods that will be shared between the instances of the object we are creating. The difference is that we can use the prototype chain. We can create the object using Object.create(prototype) in order to attach the methods to our object instance. The object that is holding our shared methods is considered the prototype.

## Why would I use it?
If you make changes to your prototype after creating an object instance, that instance will be updated. You won’t end up with two instances with the same prototype that have different methods.

## What are the drawbacks?
The drawbacks of using this method is that it requires extra steps and extra code. We have to not only create and return our object like before, but we also have to decorate it.

---
title: Pseudoclassical
---
```javascript
var Fun = function(a, b) {
  // this = Object.create(Fun.prototype);
  this.a = a;
  this.b = b;
  // return this;
}
Fun.prototype.method1 = function() {
    // method code here
}
Fun.prototype.method2 = function() {
    // method code here
}
Fun.prototype.method3 = function() {
    // method code here
}
var myFun = new Fun(1, 2);
myFun.method1();
```

## How do I recognize it?
Pseudoclassical Instantiation is by far contains the least amount of code. Rather than creating a new object and returning it, the new keyword does that for us. Under the hood, when you use the new keyword to instantiate an object, you create a new object using this = Object.create(Object.prototype), where this refers to the prototype that is named after the new keyword. When we are defining our methods, we use the prototype keyword.

## Why would I use it?
Pseudoclassical is said to be the fastest instantiation pattern, which is helpful if you are creating tens of thousands of instances. It is also the most optimized since it utilizes Javascript functionality.

## What are the drawbacks?
The downside of Pseudoclassical Instantiation is that it requires a bit more knowledge about what JavaScript is doing under the hood, particularly with the this keyword. This makes this type of object instantiation a bit more complex to understand, especially if someone else is reading your code
