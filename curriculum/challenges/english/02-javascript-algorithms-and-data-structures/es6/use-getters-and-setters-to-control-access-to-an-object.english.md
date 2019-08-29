---
id: 587d7b8c367417b2b2512b54
title: Use getters and setters to Control Access to an Object
challengeType: 1
forumTopicId: 301220
---

## Description
<section id='description'>
You can obtain values from an object, and set a value of a property within an object.
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
const lol = new Book('anonymous');
console.log(lol.writer);  // anonymous
lol.writer = 'wut';
console.log(lol.writer);  // wut
```

Notice the syntax we are using to invoke the getter and setter - as if they are not even functions.
Getters and setters are important, because they hide internal implementation details.
<strong>Note:</strong> It is a convention to precede the name of a private variable with an underscore (<code>_</code>). The practice itself does not make a variable private.
</section>

## Instructions
<section id='instructions'>
Use <code>class</code> keyword to create a Thermostat class. The constructor accepts Fahrenheit temperature.
Now create <code>getter</code> and <code>setter</code> in the class, to obtain the temperature in Celsius scale.
Remember that <code>C = 5/9 * (F - 32)</code> and <code>F = C * 9.0 / 5 + 32</code>, where F is the value of temperature in Fahrenheit scale, and C is the value of the same temperature in Celsius scale
<strong>Note:</strong><br>When you implement this, you would be tracking the temperature inside the class in one scale - either Fahrenheit or Celsius.
This is the power of getter or setter - you are creating an API for another user, who would get the correct result, no matter which one you track.
In other words, you are abstracting implementation details from the consumer.
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

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
/* Alter code below this line */

/* Alter code above this line */

const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
```

</div>



</section>

## Solution
<section id='solution'>

```js

/* Alter code below this line */
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
/* Alter code above this line */

const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
```

</section>
