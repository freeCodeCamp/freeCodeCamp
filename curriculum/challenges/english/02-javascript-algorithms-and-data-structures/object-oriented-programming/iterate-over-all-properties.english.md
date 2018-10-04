---
id: 587d7daf367417b2b2512b7d
title: Iterate Over All Properties
challengeType: 1
---

## Description
<section id='description'>
You have now seen two kinds of properties: <code>own</code> properties and <code>prototype</code> properties. <code>Own</code> properties are defined directly on the object instance itself. And <code>prototype</code> properties are defined on the <code>prototype</code>.
<blockquote>function Bird(name) {<br>&nbsp;&nbsp;this.name = name;  //own property<br>}<br><br>Bird.prototype.numLegs = 2; // prototype property<br><br>let duck = new Bird("Donald");</blockquote>
Here is how you add <code>duck’s</code> <code>own</code> properties to the array <code>ownProps</code> and <code>prototype</code> properties to the array <code>prototypeProps</code>:
<blockquote>let ownProps = [];<br>let prototypeProps = [];<br><br>for (let property in duck) {<br>&nbsp;&nbsp;if(duck.hasOwnProperty(property)) {<br>&nbsp;&nbsp;&nbsp;&nbsp;ownProps.push(property);<br>&nbsp;&nbsp;} else {<br>&nbsp;&nbsp;&nbsp;&nbsp;prototypeProps.push(property);<br>&nbsp;&nbsp;}<br>}<br><br>console.log(ownProps); // prints ["name"]<br>console.log(prototypeProps); // prints ["numLegs"]</blockquote>
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
    testString: 'assert(ownProps.indexOf(''name'') !== -1, ''The <code>ownProps</code> array should include <code>"name"</code>.'');'
  - text: The <code>prototypeProps</code> array should include <code>"numLegs"</code>.
    testString: 'assert(prototypeProps.indexOf(''numLegs'') !== -1, ''The <code>prototypeProps</code> array should include <code>"numLegs"</code>.'');'
  - text: Solve this challenge without using the built in method <code>Object.keys()</code>.
    testString: 'assert(!/\Object.keys/.test(code), ''Solve this challenge without using the built in method <code>Object.keys()</code>.'');'

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

// Add your code below this line 



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
