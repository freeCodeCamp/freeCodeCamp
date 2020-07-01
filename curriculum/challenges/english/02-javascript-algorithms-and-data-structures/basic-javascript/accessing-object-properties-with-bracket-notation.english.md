---
id: 56533eb9ac21ba0edf2244c8
title: Accessing Object Properties with Bracket Notation
challengeType: 1
isHidden: false
videoUrl: 'https://scrimba.com/c/cBvmEHP'
forumTopicId: 16163
---

## Description
<section id='description'>
The second way to access the properties of an object is bracket notation (<code>[]</code>). If the property of the object you are trying to access has a space in its name, you will need to use bracket notation.
However, you can still use bracket notation on object properties without spaces.
Here is a sample of using bracket notation to read an object's property:

```js
var myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};
myObj["Space Name"]; // Kirk
myObj['More Space']; // Spock
myObj["NoSpace"];    // USS Enterprise
```

Note that property names with spaces in them must be in quotes (single or double).
</section>

## Instructions
<section id='instructions'>
Read the values of the properties <code>"an entree"</code> and <code>"the drink"</code> of <code>testObj</code> using bracket notation and assign them to <code>entreeValue</code> and <code>drinkValue</code> respectively.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>entreeValue</code> should be a string
    testString: assert(typeof entreeValue === 'string' );
  - text: The value of <code>entreeValue</code> should be <code>"hamburger"</code>
    testString: assert(entreeValue === 'hamburger' );
  - text: <code>drinkValue</code> should be a string
    testString: assert(typeof drinkValue === 'string' );
  - text: The value of <code>drinkValue</code> should be <code>"water"</code>
    testString: assert(drinkValue === 'water' );
  - text: You should use bracket notation twice
    testString: assert(code.match(/testObj\s*?\[('|")[^'"]+\1\]/g).length > 1);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line

var entreeValue = testObj;   // Change this line
var drinkValue = testObj;    // Change this line
```

</div>


### After Test
<div id='js-teardown'>

```js
(function(a,b) { return "entreeValue = '" + a + "', drinkValue = '" + b + "'"; })(entreeValue,drinkValue);
```

</div>

</section>

## Solution
<section id='solution'>


```js
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};
var entreeValue = testObj["an entree"];
var drinkValue = testObj['the drink'];
```

</section>
