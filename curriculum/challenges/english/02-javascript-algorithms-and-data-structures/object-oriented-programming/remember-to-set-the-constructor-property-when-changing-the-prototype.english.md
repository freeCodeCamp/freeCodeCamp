---
id: 587d7daf367417b2b2512b80
title: Remember to Set the Constructor Property when Changing the Prototype
challengeType: 1
---

## Description
<section id='description'>
There is one crucial side effect of manually setting the <code>prototype</code> to a new object. It erased the <code>constructor</code> property! The code in the previous challenge would print the following for <code>duck</code>:
<blockquote>console.log(duck.constructor)<br>// prints ‘undefined’ - Oops!</blockquote>
To fix this, whenever a prototype is manually set to a new object, remember to define the <code>constructor</code> property:
<blockquote>Bird.prototype = {<br>&nbsp;&nbsp;constructor: Bird, // define the constructor property<br>&nbsp;&nbsp;numLegs: 2,<br>&nbsp;&nbsp;eat: function() {<br>&nbsp;&nbsp;&nbsp;&nbsp;console.log("nom nom nom");<br>&nbsp;&nbsp;},<br>&nbsp;&nbsp;describe: function() {<br>&nbsp;&nbsp;&nbsp;&nbsp;console.log("My name is " + this.name); <br>&nbsp;&nbsp;}<br>};</blockquote>
</section>

## Instructions
<section id='instructions'>
Define the <code>constructor</code> property on the <code>Dog</code> <code>prototype</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Dog.prototype</code> should set the <code>constructor</code> property.
    testString: 'assert(Dog.prototype.constructor === Dog, ''<code>Dog.prototype</code> should set the <code>constructor</code> property.'');'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Dog(name) {
  this.name = name; 
}

// Modify the code below this line
Dog.prototype = {
  
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom"); 
  }, 
  describe: function() {
    console.log("My name is " + this.name); 
  }
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
  constructor: Dog,
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
