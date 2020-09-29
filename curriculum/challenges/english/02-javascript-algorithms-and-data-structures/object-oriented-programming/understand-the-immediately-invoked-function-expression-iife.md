---
id: 587d7db2367417b2b2512b8b
title: Understand the Immediately Invoked Function Expression (IIFE)
challengeType: 1
forumTopicId: 301328
---

## Description
<section id='description'>
A common pattern in JavaScript is to execute a function as soon as it is declared:

```js
(function () {
  console.log("Chirp, chirp!");
})(); // this is an anonymous function expression that executes right away
// Outputs "Chirp, chirp!" immediately
```

Note that the function has no name and is not stored in a variable. The two parentheses () at the end of the function expression cause it to be immediately executed or invoked. This pattern is known as an <dfn>immediately invoked function expression</dfn> or <dfn>IIFE</dfn>.
</section>

## Instructions
<section id='instructions'>
Rewrite the function <code>makeNest</code> and remove its call so instead it's an anonymous immediately invoked function expression (IIFE).
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The function should be anonymous.
    testString: assert(/\((function|\(\))(=>|\(\)){?/.test(code.replace(/\s/g, "")));
  - text: Your function should have parentheses at the end of the expression to call it immediately.
    testString: assert(/\(.*(\)\(|\}\(\))\)/.test(code.replace(/[\s;]/g, "")));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function makeNest() {
  console.log("A cozy nest is ready");
}

makeNest();
```

</div>



</section>

## Solution
<section id='solution'>


```js
(function () {
  console.log("A cozy nest is ready");
})();
```

```js
(function () {
  console.log("A cozy nest is ready");
}());
```

```js
(() => {
  console.log("A cozy nest is ready");
})();
```

```js
(() =>
  console.log("A cozy nest is ready")
)();
```

</section>
