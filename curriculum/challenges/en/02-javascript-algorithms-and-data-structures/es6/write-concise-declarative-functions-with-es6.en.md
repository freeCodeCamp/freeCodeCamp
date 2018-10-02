---
id: 587d7b8b367417b2b2512b50
title: Write Concise Declarative Functions with ES6
challengeType: 1
---

## Description
<section id='description'>
When defining functions within objects in ES5, we have to use the keyword <code>function</code> as follows:
<blockquote>const person = {<br>&nbsp;&nbsp;name: "Taylor",<br>&nbsp;&nbsp;sayHello: function() {<br>&nbsp;&nbsp;&nbsp;&nbsp;return `Hello! My name is ${this.name}.`;<br>&nbsp;&nbsp;}<br>};</blockquote>
With ES6, You can remove the <code>function</code> keyword and colon altogether when defining functions in objects. Here's an example of this syntax:
<blockquote>const person = {<br>&nbsp;&nbsp;name: "Taylor",<br>&nbsp;&nbsp;sayHello() {<br>&nbsp;&nbsp;&nbsp;&nbsp;return `Hello! My name is ${this.name}.`;<br>&nbsp;&nbsp;}<br>};</blockquote>
</section>

## Instructions
<section id='instructions'>
Refactor the function <code>setGear</code> inside the object <code>bicycle</code> to use the shorthand syntax described above.
</section>

## Tests
<section id='tests'>

```yml
- text: Traditional function expression was not used.
  testString: 'assert(!getUserInput(''index'').match(/function/),''Traditional <code>function</code> expression was not used.'');'
- text: <code>setGear</code> is a declarative function.
  testString: 'assert(typeof bicycle.setGear === ''function'' && getUserInput(''index'').match(/setGear\s*\(.+\)\s*\{/), ''<code>setGear</code> is a declarative function.'');'
- text: <code>bicycle.setGear(48)</code> changes the <code>gear</code> value to 48.
  testString: 'assert((new bicycle.setGear(48)).gear === 48, ''<code>bicycle.setGear(48)</code> changes the <code>gear</code> value to 48.'');'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// change code below this line
const bicycle = {
  gear: 2,
  setGear: function(newGear) {
    "use strict";
    this.gear = newGear;
  }
};
// change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
