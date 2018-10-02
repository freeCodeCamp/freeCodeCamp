---
id: 587d7db0367417b2b2512b82
title: Understand the Prototype Chain
challengeType: 1
---

## Description
<section id='description'>
All objects in JavaScript (with a few exceptions) have a <code>prototype</code>. Also, an object’s <code>prototype</code> itself is an object.
<blockquote>function Bird(name) {<br>&nbsp;&nbsp;this.name = name;<br>}<br><br>typeof Bird.prototype; // => object</blockquote>
Because a <code>prototype</code> is an object, a <code>prototype</code> can have its own <code>prototype</code>! In this case, the <code>prototype</code> of <code>Bird.prototype</code> is <code>Object.prototype</code>:
<blockquote>Object.prototype.isPrototypeOf(Bird.prototype);<br>// returns true</blockquote>
How is this useful? You may recall the <code>hasOwnProperty</code> method from a previous challenge:
<blockquote>let duck = new Bird("Donald");<br>duck.hasOwnProperty("name"); // => true</blockquote>
The <code>hasOwnProperty</code> method is defined in <code>Object.prototype</code>, which can be accessed by <code>Bird.prototype</code>, which can then be accessed by <code>duck</code>. This is an example of the <code>prototype</code> chain.
In this <code>prototype</code> chain, <code>Bird</code> is the <code>supertype</code> for <code>duck</code>, while <code>duck</code> is the <code>subtype</code>. <code>Object</code> is a <code>supertype</code> for both <code>Bird</code> and <code>duck</code>.
<code>Object</code> is a <code>supertype</code> for all objects in JavaScript. Therefore, any object can use the <code>hasOwnProperty</code> method.
</section>

## Instructions
<section id='instructions'>
Modify the code to show the correct prototype chain.
</section>

## Tests
<section id='tests'>

```yml
- text: Your code should show that <code>Object.prototype</code> is the prototype of <code>Dog.prototype</code>")
  testString: 'assert(/Object\.prototype\.isPrototypeOf/.test(code), "Your code should show that <code>Object.prototype</code> is the prototype of <code>Dog.prototype</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // => true

// Fix the code below so that it evaluates to true
???.isPrototypeOf(Dog.prototype);

```

</div>



</section>

## Solution
<section id='solution'>


```js
function Dog(name) {
  this.name = name;
}
let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);
Object.prototype.isPrototypeOf(Dog.prototype);
```

</section>
