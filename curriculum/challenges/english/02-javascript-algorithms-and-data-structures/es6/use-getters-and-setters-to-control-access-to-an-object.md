---
id: 587d7b8c367417b2b2512b54
title: Use getters and setters to Control Access to an Object
challengeType: 1
forumTopicId: 301220
dashedName: use-getters-and-setters-to-control-access-to-an-object
---

# --description--

You can obtain values from an object and set the value of a property within an object.

These are classically called <dfn>getters</dfn> and <dfn>setters</dfn>.

Getter functions are meant to simply return (get) the value of an object's private variable to the user without the user directly accessing the private variable.

Setter functions are meant to modify (set) the value of an object's private variable based on the value passed into the setter function. This change could involve calculations, or even overwriting the previous value completely.  

```js
class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);
```

The console would display the strings `anonymous` and `newAuthor`.

Notice the syntax used to invoke the getter and setter. They do not even look like functions. Getters and setters are important because they hide internal implementation details.

**Note:** It is convention to precede the name of a private variable with an underscore (`_`). However, the practice itself does not make a variable private.

# --instructions--

Use the `class` keyword to create a `Thermostat` class. The `constructor` accepts a Fahrenheit temperature.

In the class, create a `getter` to obtain the temperature in Celsius and a `setter` that accepts a temperature in Celsius.

Remember that `C = 5/9 * (F - 32)` and `F = C * 9.0 / 5 + 32`, where `F` is the value of temperature in Fahrenheit, and `C` is the value of the same temperature in Celsius.

**Note:** When you implement this, you will track the temperature inside the class in one scale, either Fahrenheit or Celsius.

This is the power of a getter and a setter. You are creating an API for another user, who can get the correct result regardless of which one you track.

In other words, you are abstracting implementation details from the user.

# --hints--

`Thermostat` should be a `class` with a defined `constructor` method.

```js
assert.isFunction(Thermostat);
assert.isFunction(Thermostat?.constructor);
```

The `class` keyword should be used.

```js
assert.match(code, /class/);
```

`Thermostat` should be able to be instantiated.

```js
const _t = new Thermostat(122);
assert.isObject(_t);
```

When instantiated with a Fahrenheit value, `Thermostat` should set the correct `temperature`.

```js
const _t = new Thermostat(122);
assert.strictEqual(_t?.temperature, 50);
```

A `getter` should be defined.

```js
const _desc = Object.getOwnPropertyDescriptor(Thermostat.prototype, 'temperature');
assert.isFunction(_desc?.get);
```

A `setter` should be defined.

```js
const _desc = Object.getOwnPropertyDescriptor(Thermostat.prototype, 'temperature');
assert.isFunction(_desc?.set);
```

Calling the `setter` with a Celsius value should set the `temperature`.

```js
const _t = new Thermostat(32);
_t.temperature = 26;
const _u = new Thermostat(32);
_u.temperature = 50;
assert.approximately(_t.temperature, 26, 0.1);
assert.approximately(_u.temperature, 50, 0.1);
```

# --seed--

## --seed-contents--

```js
// Only change code below this line

// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
```

# --solutions--

```js
class Thermostat {
  constructor(fahrenheit) {
    this._tempInCelsius = 5/9 * (fahrenheit - 32);
  }
  get temperature(){
    return this._tempInCelsius;
  }
  set temperature(newTemp){
    this._tempInCelsius = newTemp;
  }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
```
