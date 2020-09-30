---
id: 587d7b8b367417b2b2512b50
title: Write Concise Declarative Functions with ES6
challengeType: 1
forumTopicId: 301224
---

## Description
<section id='description'>
When defining functions within objects in ES5, we have to use the keyword <code>function</code> as follows:

```js
const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};
```

With ES6, You can remove the <code>function</code> keyword and colon altogether when defining functions in objects. Here's an example of this syntax:

```js
const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};
```

</section>

## Instructions
<section id='instructions'>
Refactor the function <code>setGear</code> inside the object <code>bicycle</code> to use the shorthand syntax described above.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Traditional function expression should not be used.
    testString: getUserInput => assert(!__helpers.removeJSComments(code).match(/function/));
  - text: <code>setGear</code> should be a declarative function.
    testString: assert(typeof bicycle.setGear === 'function' && code.match(/setGear\s*\(.+\)\s*\{/));
  - text: <code>bicycle.setGear(48)</code> should change the <code>gear</code> value to 48.
    testString: assert((new bicycle.setGear(48)).gear === 48);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Only change code below this line
const bicycle = {
  gear: 2,
  setGear: function(newGear) {
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);
```

</div>

</section>

## Solution
<section id='solution'>

```js
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
bicycle.setGear(3);
```

</section>
