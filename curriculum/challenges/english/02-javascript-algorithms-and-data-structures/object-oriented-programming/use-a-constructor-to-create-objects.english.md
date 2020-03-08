---
id: 587d7dad367417b2b2512b78
title: Use a Constructor to Create Objects
challengeType: 1
forumTopicId: 18233
---

## Description
<section id='description'>
Here's the <code>Bird</code> constructor from the previous challenge:

```js
function Bird() {
  this.name = "Albert";
  this.color  = "blue";
  this.numLegs = 2;
  // "this" inside the constructor always refers to the object being created
}

let blueBird = new Bird();
```

Notice that the <code>new</code> operator is used when calling a constructor. This tells JavaScript to create a new instance of <code>Bird</code> called <code>blueBird</code>. Without the <code>new</code> operator, <code>this</code> inside the constructor would not point to the newly created object, giving unexpected results.
Now <code>blueBird</code> has all the properties defined inside the <code>Bird</code> constructor:

```js
blueBird.name; // => Albert
blueBird.color; // => blue
blueBird.numLegs; // => 2
```

Just like any other object, its properties can be accessed and modified:

```js
blueBird.name = 'Elvira';
blueBird.name; // => Elvira
```

</section>

## Instructions
<section id='instructions'>
Use the <code>Dog</code> constructor from the last lesson to create a new instance of <code>Dog</code>, assigning it to a variable <code>hound</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>hound</code> should be created using the <code>Dog</code> constructor.
    testString: assert(hound instanceof Dog);
  - text: Your code should use the <code>new</code> operator to create an instance of <code>Dog</code>.
    testString: assert(code.match(/new/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Only change code below this line


```

</div>



</section>

## Solution
<section id='solution'>


```js
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
const hound = new Dog();
```

</section>
