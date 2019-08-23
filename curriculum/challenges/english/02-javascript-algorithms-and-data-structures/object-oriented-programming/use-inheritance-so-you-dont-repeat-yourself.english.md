---
id: 587d7db0367417b2b2512b83
title: Use Inheritance So You Don't Repeat Yourself
challengeType: 1
forumTopicId: 301334
---

## Description
<section id='description'>
There's a principle in programming called <dfn>Don't Repeat Yourself (DRY)</dfn>. The reason repeated code is a problem is because any change requires fixing code in multiple places. This usually means more work for programmers and more room for errors.
Notice in the example below that the <code>describe</code> method is shared by <code>Bird</code> and <code>Dog</code>:

```js
Bird.prototype = {
  constructor: Bird,
  describe: function() {
    console.log("My name is " + this.name);
  }
};

Dog.prototype = {
  constructor: Dog,
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

The <code>describe</code> method is repeated in two places. The code can be edited to follow the DRY principle by creating a <code>supertype</code> (or parent) called <code>Animal</code>:

```js
function Animal() { };

Animal.prototype = {
  constructor: Animal, 
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

Since <code>Animal</code> includes the <code>describe</code> method, you can remove it from <code>Bird</code> and <code>Dog</code>:

```js
Bird.prototype = {
  constructor: Bird
};

Dog.prototype = {
  constructor: Dog
};
```

</section>

## Instructions
<section id='instructions'>
The <code>eat</code> method is repeated in both <code>Cat</code> and <code>Bear</code>. Edit the code in the spirit of DRY by moving the <code>eat</code> method to the <code>Animal</code> <code>supertype</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Animal.prototype</code> should have the <code>eat</code> property.
    testString: assert(Animal.prototype.hasOwnProperty('eat'));
  - text: <code>Bear.prototype</code> should not have the <code>eat</code> property.
    testString: assert(!(Bear.prototype.hasOwnProperty('eat')));
  - text: <code>Cat.prototype</code> should not have the <code>eat</code> property.
    testString: assert(!(Cat.prototype.hasOwnProperty('eat')));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,

};
```

</div>



</section>

## Solution
<section id='solution'>


```js
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
```

</section>
