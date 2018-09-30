---
id: 587d7dae367417b2b2512b7a
title: Verify an Object's Constructor with instanceof
challengeType: 1
---

## Description
<section id='description'>
Anytime a constructor function creates a new object, that object is said to be an <code>instance</code> of its constructor. JavaScript gives a convenient way to verify this with the <code>instanceof</code> operator. <code>instanceof</code> allows you to compare an object to a constructor, returning <code>true</code> or <code>false</code> based on whether or not that object was created with the constructor. Here's an example:
<blockquote>let Bird = function(name, color) {<br>&nbsp;&nbsp;this.name = name;<br>&nbsp;&nbsp;this.color = color;<br>&nbsp;&nbsp;this.numLegs = 2;<br>}<br><br>let crow = new Bird("Alexis", "black");<br><br>crow instanceof Bird; // => true</blockquote>
If an object is created without using a constructor, <code>instanceof</code> will verify that it is not an instance of that constructor:
<blockquote>let canary = {<br>&nbsp;&nbsp;name: "Mildred",<br>&nbsp;&nbsp;color: "Yellow",<br>&nbsp;&nbsp;numLegs: 2<br>};<br><br>canary instanceof Bird; // => false</blockquote>
</section>

## Instructions
<section id='instructions'>
Create a new instance of the <code>House</code> constructor, calling it <code>myHouse</code> and passing a number of bedrooms. Then, use <code>instanceof</code> to verify that it is an instance of <code>House</code>.
</section>

## Tests
<section id='tests'>

```yml
- text: <code>myHouse</code> should have a <code>numBedrooms</code> attribute set to a number.
  testString: 'assert(typeof myHouse.numBedrooms === "number", "<code>myHouse</code> should have a <code>numBedrooms</code> attribute set to a number.");'
- text: Be sure to verify that <code>myHouse</code> is an instance of <code>House</code> using the <code>instanceof</code> operator.
  testString: 'assert(/myHouse\s*instanceof\s*House/.test(code), "Be sure to verify that <code>myHouse</code> is an instance of <code>House</code> using the <code>instanceof</code> operator.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
/* jshint expr: true */

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Add your code below this line



```

</div>



</section>

## Solution
<section id='solution'>


```js
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}
const myHouse = new House(4);
console.log(myHouse instanceof House);
```

</section>
