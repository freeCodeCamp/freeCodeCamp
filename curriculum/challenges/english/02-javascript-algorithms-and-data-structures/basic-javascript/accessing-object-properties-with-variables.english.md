---
id: 56533eb9ac21ba0edf2244c9
title: Accessing Object Properties with Variables
challengeType: 1
videoUrl: 'https://scrimba.com/c/cnQyKur'
forumTopicId: 16165
---

## Description
<section id='description'>
Another use of bracket notation on objects is to access a property which is stored as the value of a variable. This can be very useful for iterating through an object's properties or when accessing a lookup table.
Here is an example of using a variable to access a property:

```js
var dogs = {
  Fido: "Mutt",  Hunter: "Doberman",  Snoopie: "Beagle"
};
var myDog = "Hunter";
var myBreed = dogs[myDog];
console.log(myBreed); // "Doberman"
```

Another way you can use this concept is when the property's name is collected dynamically during the program execution, as follows:

```js
var someObj = {
  propName: "John"
};
function propPrefix(str) {
  var s = "prop";
  return s + str;
}
var someProp = propPrefix("Name"); // someProp now holds the value 'propName'
console.log(someObj[someProp]); // "John"
```

Note that we do <em>not</em> use quotes around the variable name when using it to access the property because we are using the <em>value</em> of the variable, not the <em>name</em>.
</section>

## Instructions
<section id='instructions'>
Set the <code>playerNumber</code> variable to <code>16</code>. Then, use the variable to look up the player's name and assign it to <code>player</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>playerNumber</code> should be a number
    testString: assert(typeof playerNumber === 'number');
  - text: The variable <code>player</code> should be a string
    testString: assert(typeof player === 'string');
  - text: The value of <code>player</code> should be "Montana"
    testString: assert(player === 'Montana');
  - text: You should use bracket notation to access <code>testObj</code>
    testString: assert(/testObj\s*?\[.*?\]/.test(code));
  - text: You should not assign the value <code>Montana</code> to the variable <code>player</code> directly.
    testString: assert(!code.match(/player\s*=\s*"|\'\s*Montana\s*"|\'\s*;/gi));
  - text: You should be using the variable <code>playerNumber</code> in your bracket notation
    testString: assert(/testObj\s*?\[\s*playerNumber\s*\]/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line

var playerNumber;       // Change this line
var player = testObj;   // Change this line
```

</div>


### After Test
<div id='js-teardown'>

```js
if(typeof player !== "undefined"){(function(v){return v;})(player);}
```

</div>

</section>

## Solution
<section id='solution'>


```js
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};
var playerNumber = 16;
var player = testObj[playerNumber];
```

</section>
