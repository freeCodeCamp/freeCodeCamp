---
id: 587d7db0367417b2b2512b83
title: Use Inheritance So You Don't Repeat Yourself
challengeType: 1
---

## Description
<section id='description'>
There's a principle in programming called <code>Don't Repeat Yourself (DRY)</code>. The reason repeated code is a problem is because any change requires fixing code in multiple places. This usually means more work for programmers and more room for errors.
Notice in the example below that the <code>describe</code> method is shared by <code>Bird</code> and <code>Dog</code>:
<blockquote>Bird.prototype = {<br>&nbsp;&nbsp;constructor: Bird,<br>&nbsp;&nbsp;describe: function() {<br>&nbsp;&nbsp;&nbsp;&nbsp;console.log("My name is " + this.name);<br>&nbsp;&nbsp;}<br>};<br><br>Dog.prototype = {<br>&nbsp;&nbsp;constructor: Dog,<br>&nbsp;&nbsp;describe: function() {<br>&nbsp;&nbsp;&nbsp;&nbsp;console.log("My name is " + this.name);<br>&nbsp;&nbsp;}<br>};</blockquote>
The <code>describe</code> method is repeated in two places. The code can be edited to follow the <code>DRY</code> principle by creating a <code>supertype</code> (or parent) called <code>Animal</code> and it will be extended by <code>Bear</code> and <code>Dog</code>:
<blockquote>function Animal() { };<br><br>Animal.prototype = {<br>&nbsp;&nbsp;constructor: Animal, <br>&nbsp;&nbsp;describe: function() {<br>&nbsp;&nbsp;&nbsp;&nbsp;console.log("My name is " + this.name);<br>&nbsp;&nbsp;}<br>};
  <br><br>
  Bird.prototype = {<br>&nbsp;&nbsp;constructor: Bird,<br>&nbsp;&nbsp;__proto__: Animal.prototype,<br>&nbsp;&nbsp;describe: function() {<br>&nbsp;&nbsp;&nbsp;&nbsp;console.log("My name is " + this.name);<br>&nbsp;&nbsp;}<br>};<br><br>Dog.prototype = {<br>&nbsp;&nbsp;constructor: Dog,<br>&nbsp;&nbsp;__proto__: Animal.prototype,<br>&nbsp;&nbsp;describe: function() {<br>&nbsp;&nbsp;&nbsp;&nbsp;console.log("My name is " + this.name);<br>&nbsp;&nbsp;}<br>};</blockquote>
Since <code>Animal</code> includes the <code>describe</code> method, you can remove it from <code>Bird</code> and <code>Dog</code>:
<blockquote>function Animal() { };<br><br>Animal.prototype = {<br>&nbsp;&nbsp;constructor: Animal, <br>&nbsp;&nbsp;describe: function() {<br>&nbsp;&nbsp;&nbsp;&nbsp;console.log("My name is " + this.name);<br>&nbsp;&nbsp;}<br>};
  <br><br>
  Bird.prototype = {<br>&nbsp;&nbsp;constructor: Bird,<br>&nbsp;&nbsp;__proto__: Animal.prototype<br>};<br><br>Dog.prototype = {<br>&nbsp;&nbsp;constructor: Dog,<br>&nbsp;&nbsp;__proto__: Animal.prototype<br>};</blockquote>
</section>

## Instructions
<section id='instructions'>
The <code>eat</code> method is repeated in both <code>Cat</code> and <code>Bear</code>. Edit the code in the spirit of <code>DRY</code> by moving the <code>eat</code> method to the <code>Animal</code> <code>supertype</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Animal.prototype</code> should have the <code>eat</code> property.
    testString: 'assert(Animal.prototype.hasOwnProperty("eat"), "<code>Animal.prototype</code> should have the <code>eat</code> property.");'
  - text: <code>Bear.prototype</code> should not have the <code>eat</code> property.
    testString: 'assert(!(Bear.prototype.hasOwnProperty("eat")), "<code>Bear.prototype</code> should not have the <code>eat</code> property.");'
  - text: <code>Cat.prototype</code> should not have the <code>eat</code> property.
    testString: 'assert(!(Cat.prototype.hasOwnProperty("eat")), "<code>Cat.prototype</code> should not have the <code>eat</code> property.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Animal() { }

Animal.prototype = {
  constructor: Animal,

};

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
```

</div>



</section>

## Solution
<section id='solution'>


```js
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Cat(name) {
  this.name = name; 
}

Cat.prototype = {
  constructor: Cat,
  __proto__: Animal.prototype
};

function Bear(name) {
  this.name = name; 
}

Bear.prototype = {
  constructor: Bear, 
  __proto__: Animal.prototype
};
```

</section>
