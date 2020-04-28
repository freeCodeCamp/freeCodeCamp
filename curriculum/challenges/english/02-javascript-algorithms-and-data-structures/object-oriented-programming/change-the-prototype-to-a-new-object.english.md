---
id: 587d7daf367417b2b2512b7f
title: Change the Prototype to a New Object
challengeType: 1
forumTopicId: 301316
---

## Description
<section id='description'>
Up until now you have been adding properties to the <code>prototype</code> individually:

```js
Bird.prototype.numLegs = 2;
```

This becomes tedious after more than a few properties.

```js
Bird.prototype.eat = function() {
  console.log("nom nom nom");
}

Bird.prototype.describe = function() {
  console.log("My name is " + this.name);
}
```

A more efficient way is to set the <code>prototype</code> to a new object that already contains the properties. This way, the properties are added all at once:

```js
Bird.prototype = {
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

</section>

## Instructions
<section id='instructions'>
Add the property <code>numLegs</code> and the two methods <code>eat()</code> and <code>describe()</code> to the <code>prototype</code> of <code>Dog</code> by setting the <code>prototype</code> to a new object.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Dog.prototype</code> should be set to a new object.
    testString: assert((/Dog\.prototype\s*?=\s*?{/).test(code));
  - text: <code>Dog.prototype</code> should have the property <code>numLegs</code>.
    testString: assert(Dog.prototype.numLegs !== undefined);
  - text: <code>Dog.prototype</code> should have the method <code>eat()</code>.
    testString: assert(typeof Dog.prototype.eat === 'function');
  - text: <code>Dog.prototype</code> should have the method <code>describe()</code>.
    testString: assert(typeof Dog.prototype.describe === 'function');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line

};
```

</div>



</section>

## Solution
<section id='solution'>


```js
function Dog(name) {
  this.name = name;
}
Dog.prototype = {
numLegs: 4,
  eat () {
    console.log('nom nom nom');
  },
  describe () {
    console.log('My name is ' + this.name);
  }
};
```

</section>
