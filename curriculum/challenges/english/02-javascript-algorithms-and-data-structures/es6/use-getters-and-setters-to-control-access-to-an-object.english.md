---
id: 587d7b8c367417b2b2512b54
title: Use getters and setters to Control Access to an Object
challengeType: 1
isHidden: false
forumTopicId: 301220
---

## Description
<section id='description'>
You can obtain values from an object and set the value of a property within an object.
These are classically called <dfn>getters</dfn> and <dfn>setters</dfn>.
Getter functions are meant to simply return (get) the value of an object's private variable to the user without the user directly accessing the private variable.
Setter functions are meant to modify (set) the value of an object's private variable based on the value passed into the setter function. This change could involve calculations, or even overwriting the previous value completely.<br><br>

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
console.log(novel.writer);  // anonymous
novel.writer = 'newAuthor';
console.log(novel.writer);  // newAuthor
```

Notice the syntax used to invoke the getter and setter. They do not even look like functions.
Getters and setters are important because they hide internal implementation details.
<strong>Note:</strong> It is convention to precede the name of a private variable with an underscore (<code>_</code>). However, the practice itself does not make a variable private.
</section>

## Instructions
<section id='instructions'>
Use the <code>class</code> keyword to create a Thermostat class. The constructor accepts a Fahrenheit temperature.
Now create a <code>getter</code> and a <code>setter</code> in the class, to obtain the temperature in Celsius.
Remember that <code>C = 5/9 * (F - 32)</code> and <code>F = C * 9.0 / 5 + 32</code>, where <code>F</code> is the value of temperature in Fahrenheit, and <code>C</code> is the value of the same temperature in Celsius.
<strong>Note:</strong> When you implement this, you will track the temperature inside the class in one scale, either Fahrenheit or Celsius.
This is the power of a getter and a setter. You are creating an API for another user, who can get the correct result regardless of which one you track.
In other words, you are abstracting implementation details from the user.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Thermostat</code> should be a <code>class</code> with a defined <code>constructor</code> method.
    testString: assert(typeof Thermostat === 'function' && typeof Thermostat.constructor === 'function');
  - text: <code>class</code> keyword should be used.
    testString: assert(code.match(/class/g));
  - text: <code>Thermostat</code> should be able to be instantiated.
    testString: assert((() => {const t = new Thermostat(32);return typeof t === 'object' && t.temperature === 0;})());
  - text: A <code>getter</code> should be defined.
    testString: assert((() => {const desc = Object.getOwnPropertyDescriptor(Thermostat.prototype, 'temperature');return !!desc && typeof desc.get === 'function';})());
  - text: A <code>setter</code> should  be defined.
    testString: assert((() => {const desc = Object.getOwnPropertyDescriptor(Thermostat.prototype, 'temperature');return !!desc && typeof desc.set === 'function';})());
  - text: Calling the <code>setter</code> should set the temperature.
    testString: assert((() => {const t = new Thermostat(32); t.temperature = 26;return t.temperature !== 0;})());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Only change code below this line

// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
```

</div>



</section>

## Solution
<section id='solution'>

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

</section>
