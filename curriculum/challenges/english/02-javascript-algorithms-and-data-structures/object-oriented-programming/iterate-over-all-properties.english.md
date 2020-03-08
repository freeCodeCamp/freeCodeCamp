---
id: 587d7daf367417b2b2512b7d
title: Iterate Over All Properties
challengeType: 1
forumTopicId: 301320
---

## Description
<section id='description'>
You have now seen two kinds of properties: <code>own</code> properties and <code>prototype</code> properties. <code>Own</code> properties are defined directly on the object instance itself. And <code>prototype</code> properties are defined on the <code>prototype</code>.

```js
function Bird(name) {
  this.name = name;  //own property
}

Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird("Donald");
```

Here is how you add <code>duck</code>'s <code>own</code> properties to the array <code>ownProps</code> and <code>prototype</code> properties to the array <code>prototypeProps</code>:

```js
let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps); // prints ["name"]
console.log(prototypeProps); // prints ["numLegs"]
```

</section>

## Instructions
<section id='instructions'>
Add all of the <code>own</code> properties of <code>beagle</code> to the array <code>ownProps</code>. Add all of the <code>prototype</code> properties of <code>Dog</code> to the array <code>prototypeProps</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>ownProps</code> array should include <code>"name"</code>.
    testString: assert(ownProps.indexOf('name') !== -1);
  - text: The <code>prototypeProps</code> array should include <code>"numLegs"</code>.
    testString: assert(prototypeProps.indexOf('numLegs') !== -1);
  - text: You should solve this challenge without using the built in method <code>Object.keys()</code>.
    testString: assert(!/\Object.keys/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Only change code below this line



```

</div>



</section>

## Solution
<section id='solution'>


```js
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];
for (let prop in beagle) {
  if (beagle.hasOwnProperty(prop)) {
    ownProps.push(prop);
  } else {
    prototypeProps.push(prop);
  }
}
```

</section>
