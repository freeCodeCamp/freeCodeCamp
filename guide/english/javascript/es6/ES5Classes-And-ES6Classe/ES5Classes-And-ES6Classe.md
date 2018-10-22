---
title: ES5,ES6 Classes
---
## ES5,ES6 Classes

##ES5 Classes
We can isolate the repetitive lines by moving them into their own function. This
function would create an object that delegates to some other arbitrary function’s
prototype, then invoke that function with the newly created object as an
argument, and finally return the object:
```javascript
    function create(fn) {
    var o = Object.create(fn.prototype);
    
    fn.call(o);
    
    return o;
}
// ...
    Thing.prototype.f = function() {};
    Thing.prototype.g = function() {};
    
    function Thing() {
      this.x = 42;
      this.y = 3.14;
}
    var o = create(Thing);
```
In fact, this too is such a common pattern that the language has some built-in
support for it. The create function we defined is actually a rudimentary v
of the new keyword, and we can drop-in replace create with new :
```javascript
    Thing.prototype.f = function() {};
    Thing.prototype.g = function() {};
    function Thing() {
      this.x = 42;
      this.y = 3.14;
}
var o = new Thing();
```
We’ve now arrived at what we commonly call “ES5 classes”. They’re object
creation functions that delegate shared data to a prototype object and rely on
the new keyword to handle repetitive logic.

But there’s a drawback. It’s verbose and ugly, and implementing inheritance is
even more verbose and ugly.

##  ES6 Classes
A relatively recent addition to JavaScript is ES6 classes, which offer a
significantly cleaner syntax for doing the same thing:
```javascript
      lass Thing {
        constructor() {
          this.x = 42;
          this.y = 3.14;
  }
        f() {}
        g() {}
}
const o = new Thing();
```

## Comparison
Over the years, we JavaScripters have had an on-and-off relationship with the
prototype chain, and today the two most common styles you’re likely to
encounter are the class syntax, which relies heavily on the prototype chain, and
the factory function syntax, which typically doesn’t rely on the prototype chain at
all. The two styles differ — but only slightly — in performance and features.

