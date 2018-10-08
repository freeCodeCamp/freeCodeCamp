---
id: 587d7dae367417b2b2512b7c
title: Use Prototype Properties to Reduce Duplicate Code
challengeType: 1
---

## Description
<section id='description'>
Since <code>numLegs</code> will probably have the same value for all instances of <code>Bird</code>, you essentially have a duplicated variable <code>numLegs</code> inside each <code>Bird</code> instance.
This may not be an issue when there are only two instances, but imagine if there are millions of instances. That would be a lot of duplicated variables.
A better way is to use <code>Bird’s</code> <code>prototype</code>. The <code>prototype</code> is an object that is shared among ALL instances of <code>Bird</code>. Here's how to add <code>numLegs</code> to the <code>Bird prototype</code>:
<blockquote>Bird.prototype.numLegs = 2;</blockquote>
Now all instances of <code>Bird</code> have the <code>numLegs</code> property.
<blockquote>console.log(duck.numLegs);  // prints 2<br>console.log(canary.numLegs);  // prints 2</blockquote>
Since all instances automatically have the properties on the <code>prototype</code>, think of a <code>prototype</code> as a "recipe" for creating objects.
Note that the <code>prototype</code> for <code>duck</code> and <code>canary</code> is part of the <code>Bird</code> constructor as <code>Bird.prototype</code>. Nearly every object in JavaScript has a <code>prototype</code> property which is part of the constructor function that created it.
</section>

## Instructions
<section id='instructions'>
Add a <code>numLegs</code> property to the <code>prototype</code> of <code>Dog</code>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>beagle</code> should have a <code>numLegs</code> property.
    testString: 'assert(beagle.numLegs !== undefined, "<code>beagle</code> should have a <code>numLegs</code> property.");'
  - text: <code>beagle.numLegs</code> should be a number.
    testString: 'assert(typeof(beagle.numLegs) === "number" , "<code>beagle.numLegs</code> should be a number.");'
  - text: <code>numLegs</code> should be a <code>prototype</code> property not an <code>own</code> property.
    testString: 'assert(beagle.hasOwnProperty("numLegs") === false, "<code>numLegs</code> should be a <code>prototype</code> property not an <code>own</code> property.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Dog(name) {
  this.name = name;
}



// Add your code above this line
let beagle = new Dog("Snoopy");
```

</div>



</section>

## Solution
<section id='solution'>


```js
function Dog (name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;
let beagle = new Dog("Snoopy");
```

</section>
