---
id: 587d7dac367417b2b2512b74
title: Use Dot Notation to Access the Properties of an Object
challengeType: 1
---

## Description
<section id='description'>
The last challenge created an <code>object</code> with various <code>properties</code>, now you'll see how to access the values of those <code>properties</code>. Here's an example:

```js
let duck = {
  name: "Aflac",
  numLegs: 2
};
console.log(duck.name);
// This prints "Aflac" to the console
```

Dot notation is used on the <code>object</code> name, <code>duck</code>, followed by the name of the <code>property</code>, <code>name</code>, to access the value of "Aflac".
</section>

## Instructions
<section id='instructions'>
Print both <code>properties</code> of the <code>dog</code> object to your console.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should use <code>console.log</code> to print the value for the <code>name</code> property of the <code>dog</code> object.
    testString: assert(/console.log\(.*dog\.name.*\)/g.test(code));
  - text: Your code should use <code>console.log</code> to print the value for the <code>numLegs</code> property of the <code>dog</code> object.
    testString: assert(/console.log\(.*dog\.numLegs.*\)/g.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let dog = {
  name: "Spot",
  numLegs: 4
};
// Add your code below this line


```

</div>



</section>

## Solution
<section id='solution'>


```js
let dog = {
  name: "Spot",
  numLegs: 4
};
console.log(dog.name);
console.log(dog.numLegs);
```

</section>
