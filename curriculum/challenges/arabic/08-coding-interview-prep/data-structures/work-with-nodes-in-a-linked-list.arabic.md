---
id: 587d8251367417b2b2512c61
title: Work with Nodes in a Linked List
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
    testString: 'assert(Puppy.next.element === "Cat", "Your <code>Puppy</code> node should have a reference to a <code>Cat</code> node.");'
  - text: ''
    testString: 'assert(Cat.next.element === "Dog", "Your <code>Cat</code> node should have a reference to a <code>Dog</code> node.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var Node = function(element){
    this.element = element;
    this.next = null;
};
var Kitten = new Node("Kitten");
var Puppy = new Node("Puppy");

Kitten.next = Puppy;
// only add code below this line

// test your code
console.log(Kitten.next);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
