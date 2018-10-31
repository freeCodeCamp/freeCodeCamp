---
id: 587d7b8b367417b2b2512b53
title: Use class Syntax to Define a Constructor Function
challengeType: 1
videoUrl: ''
localeTitle: ''
---

## Description
undefined

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert(typeof Vegetable === "function" && typeof Vegetable.constructor === "function", "<code>Vegetable</code> should be a <code>class</code> with a defined <code>constructor</code> method.");'
  - text: ''
    testString: 'getUserInput => assert(getUserInput("index").match(/class/g),"<code>class</code> keyword was used.");'
  - text: ''
    testString: 'assert(() => {const a = new Vegetable("apple"); return typeof a === "object";},"<code>Vegetable</code> can be instantiated.");'
  - text: ''
    testString: 'assert(carrot.name=="carrot","<code>carrot.name</code> should return <code>carrot</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function makeClass() {
  "use strict";
  /* Alter code below this line */

  /* Alter code above this line */
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
