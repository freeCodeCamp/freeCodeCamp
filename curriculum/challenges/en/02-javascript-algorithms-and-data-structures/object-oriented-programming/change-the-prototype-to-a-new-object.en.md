---
id: 587d7daf367417b2b2512b7f
title: Change the Prototype to a New Object
challengeType: 1
---

## Description
<section id='description'>
Up until now you have been adding properties to the <code>prototype</code> individually:
<blockquote>Bird.prototype.numLegs = 2;</blockquote>
This becomes tedious after more than a few properties.
<blockquote>Bird.prototype.eat = function() {<br>&nbsp;&nbsp;console.log("nom nom nom");<br>}<br><br>Bird.prototype.describe = function() {<br>&nbsp;&nbsp;console.log("My name is " + this.name);<br>}</blockquote>
A more efficient way is to set the <code>prototype</code> to a new object that already contains the properties. This way, the properties are added all at once:
<blockquote>Bird.prototype = {<br>&nbsp;&nbsp;numLegs: 2, <br>&nbsp;&nbsp;eat: function() {<br>&nbsp;&nbsp;&nbsp;&nbsp;console.log("nom nom nom");<br>&nbsp;&nbsp;},<br>&nbsp;&nbsp;describe: function() {<br>&nbsp;&nbsp;&nbsp;&nbsp;console.log("My name is " + this.name);<br>&nbsp;&nbsp;}<br>};</blockquote>
</section>

## Instructions
<section id='instructions'>
Add the property <code>numLegs</code> and the two methods <code>eat()</code> and <code>describe()</code> to the <code>prototype</code> of <code>Dog</code> by setting the <code>prototype</code> to a new object.
</section>

## Tests
<section id='tests'>

```yml
- text: <code>Dog.prototype</code> should be set to a new object.
  testString: 'assert((/Dog\.prototype\s*?=\s*?{/).test(code), ''<code>Dog.prototype</code> should be set to a new object.'');'
- text: <code>Dog.prototype</code> should have the property <code>numLegs</code>.
  testString: 'assert(Dog.prototype.numLegs !== undefined, ''<code>Dog.prototype</code> should have the property <code>numLegs</code>.'');'
- text: <code>Dog.prototype</code> should have the method <code>eat()</code>.
  testString: 'assert(typeof Dog.prototype.eat === ''function'', ''<code>Dog.prototype</code> should have the method <code>eat()</code>.''); '
- text: <code>Dog.prototype</code> should have the method <code>describe()</code>.
  testString: 'assert(typeof Dog.prototype.describe === ''function'', ''<code>Dog.prototype</code> should have the method <code>describe()</code>.''); '

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
  // Add your code below this line
  
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
