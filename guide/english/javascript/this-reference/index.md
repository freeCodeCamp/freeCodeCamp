---
title: this reference
---
## `this` reference

In JavaScript, every function has a `this` reference automatically created when you declare it. The reference is similar to the `this` reference in other class-based languages such as Java or C#: *It points to which object is calling the function* (this object is sometimes called the *context*). In JavaScript, however, *the `this` reference inside functions can be bound to different objects depending on where the function is being called*. Here are 5 basic rules for `this` binding in JavaScript:

### Rule 1
Global scope.

When a function is called in the global scope, the `this` reference is by default bound to the **global object** (`window` in the browser, or `global` in Node.js). For example:

```javascript
function foo() {
  this.a = 2;
}

foo();
console.log(a); // 2
```

Note: If you declare the `foo()` function above in strict mode, then you call this function in global scope, `this` will be `undefined` and assignment `this.a = 2` will throw `Uncaught TypeError` exception.

### Rule 2
Implicit binding.

Let's examine the example below:

```javascript
function foo() {
  this.a = 2;
}

var obj = {
  foo: foo
};

obj.foo();
console.log(obj.a); // 2
```

Clearly, in the above snippet, the `foo()` function is being called with a *context* of the `obj` object. In these cases where the object is specified using dot notation, the `this` reference is bound to `obj`. So when a function is called with an object context, the `this` reference will be bound to the object named before the dot.

### Rule 3
Call, apply, and bind.

`.call`, `.apply` and `.bind` can all be used at the call site to explicitly bind `this`. Using `.bind(this)` is something you may see in a lot of React components.

```javascript
var foo = function() {
  console.log(this.bar)
}

foo.call({ bar: 1 }) // 1
```

Here's a quick example of how each one is used to bind `this`:

- `.call()`: `fn.call(thisObj, fnParam1, fnParam2)`
- `.apply()`: `fn.apply(thisObj, [fnParam1, fnParam2])`
- `.bind()`: `const newFn = fn.bind(thisObj, fnParam1, fnParam2)`

### Rule 4
Function used as a constructor with the `new` keyword.

```javascript
function Point2D(x, y) {
  this.x = x;
  this.y = y;
}

var p1 = new Point2D(1, 2);
console.log(p1.x); // 1
console.log(p1.y); // 2
```
The `Point2D` function is called with `new` keyword, so the `this` reference is bound to the `p1` object. When a function is called with the `new` keyword, it will create a new object and the `this` reference will be bound to this object.

Note: When you call a function with `new` keyword, we also call the function a *constructor function*. It is good practice to always capitalize constructor functions so other developers know to always use it with the `new` keyword.

### Rule 5
Implicitly bound function that loses its binding.

JavaScript determines the value of `this` at runtime, based on the current context. So `this` can sometimes point to something other than what you expect. 

Consider this example of a Cat class with a method called `makeSound()`, following the pattern in Rule 4 (above) with a constructor function and the `new` keyword.

```javascript
var Cat = function(name, sound) {
    this.name = name;
    this.sound = sound;
    this.makeSound = function() {
        console.log( this.name + ' says: ' + this.sound );
    };
}
var kitty = new Cat('Fat Daddy', 'Mrrooowww');
kitty.makeSound(); // Fat Daddy says: Mrrooowww
```

Now let's try to give the cat a way to `annoy()` people by repeating his sound 100 times, once every half second.

```javascript
var Cat = function(name, sound) {
    this.name = name;
    this.sound = sound;
    this.makeSound = function() {
        console.log( this.name + ' says: ' + this.sound );
    };
    this.annoy = function() {
        var count = 0, max = 100;
        var t = setInterval(function() {
            this.makeSound(); // <-- this line fails with `this.makeSound is not a function` 
            count++;
            if (count === max) {
                clearTimeout(t);
            }
        }, 500);
    };
}
var kitty = new Cat('Fat Daddy', 'Mrrooowww');
kitty.annoy();
```
That doesn't work because inside the `setInterval` callback we've created a new context with global scope, so `this` no longer points to our kitty instance. In a web browser, `this` will instead point to the Window object, which doesn't have a `makeSound()` method.

A couple of ways to make it work: 

1) Before creating the new context, assign `this` to a local variable named `me`, or `self`, or whatever you want to call it, and use that variable inside the callback.

```javascript
var Cat = function(name, sound) {
    this.name = name;
    this.sound = sound;
    this.makeSound = function() {
        console.log( this.name + ' says: ' + this.sound );
    };
    this.annoy = function() {
        var count = 0, max = 100;
        var self = this;
        var t = setInterval(function() {
            self.makeSound();
            count++;
            if (count === max) {
                clearTimeout(t);
            }
        }, 500);
    };
}
var kitty = new Cat('Fat Daddy', 'Mrrooowww');
kitty.annoy();
```

2) With ES6 you can avoid assigning `this` to a local variable by using an arrow function, which binds `this` to the context of the surrounding code where it's defined.

```javascript
var Cat = function(name, sound) {
    this.name = name;
    this.sound = sound;
    this.makeSound = function() {
        console.log( this.name + ' says: ' + this.sound );
    };
    this.annoy = function() {
        var count = 0, max = 100;
        var t = setInterval(() => {
            this.makeSound();
            count++;
            if (count === max) {
                clearTimeout(t);
            }
        }, 500);
    };
}
var kitty = new Cat('Fat Daddy', 'Mrrooowww');
kitty.annoy();
```

### Other resources

- <a href='http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/' target='_blank' rel='nofollow'>javascriptissexy.com</a>
- <a href='https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch2.md' target='_blank' rel='nofollow'>You Don't Know JS</a>
