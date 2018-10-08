---
id: 587d7dad367417b2b2512b78
title: Use a Constructor to Create Objects
challengeType: 1
---

## Description
<section id='description'>
Here's the <code>Bird</code> constructor from the previous challenge:
<blockquote>function Bird() {<br>&nbsp;&nbsp;this.name = "Albert";<br>&nbsp;&nbsp;this.color  = "blue";<br>&nbsp;&nbsp;this.numLegs = 2;<br>&nbsp;&nbsp;// "this" inside the constructor always refers to the object being created<br>}<br><br>let blueBird = new Bird();</blockquote>
Notice that the <code>new</code> operator is used when calling a constructor. This tells JavaScript to create a new <code>instance</code> of <code>Bird</code> called <code>blueBird</code>. Without the <code>new</code> operator, <code>this</code> inside the constructor would not point to the newly created object, giving unexpected results.
Now <code>blueBird</code> has all the properties defined inside the <code>Bird</code> constructor:
<blockquote>blueBird.name; // => Albert<br>blueBird.color; // => blue<br>blueBird.numLegs; // => 2</blockquote>
Just like any other object, its properties can be accessed and modified:
<blockquote>blueBird.name = 'Elvira';<br>blueBird.name; // => Elvira</blockquote>
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
    testString: 'assert(hound instanceof Dog, "<code>hound</code> should be created using the <code>Dog</code> constructor.");'
  - text: Your code should use the <code>new</code> operator to create an <code>instance</code> of <code>Dog</code>.
    testString: 'assert(code.match(/new/g), "Your code should use the <code>new</code> operator to create an <code>instance</code> of <code>Dog</code>.");'

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
// Add your code below this line


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
