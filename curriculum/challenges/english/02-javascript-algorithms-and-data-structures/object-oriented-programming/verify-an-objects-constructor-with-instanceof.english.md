---
id: 587d7dae367417b2b2512b7a
title: Verify an Object's Constructor with instanceof
challengeType: 1
forumTopicId: 301337
---

## Description
<section id='description'>
Anytime a constructor function creates a new object, that object is said to be an <dfn>instance</dfn> of its constructor. JavaScript gives a convenient way to verify this with the <code>instanceof</code> operator. <code>instanceof</code> allows you to compare an object to a constructor, returning <code>true</code> or <code>false</code> based on whether or not that object was created with the constructor. Here's an example:

```js
let Bird = function(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

let crow = new Bird("Alexis", "black");

crow instanceof Bird; // => true
```

If an object is created without using a constructor, <code>instanceof</code> will verify that it is not an instance of that constructor:

```js
let canary = {
  name: "Mildred",
  color: "Yellow",
  numLegs: 2
};

canary instanceof Bird; // => false
```

</section>

## Instructions
<section id='instructions'>
Create a new instance of the <code>House</code> constructor, calling it <code>myHouse</code> and passing a number of bedrooms. Then, use <code>instanceof</code> to verify that it is an instance of <code>House</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myHouse</code> should have a <code>numBedrooms</code> attribute set to a number.
    testString: assert(typeof myHouse.numBedrooms === 'number');
  - text: You should verify that <code>myHouse</code> is an instance of <code>House</code> using the <code>instanceof</code> operator.
    testString: assert(/myHouse\s*instanceof\s*House/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Only change code below this line



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
