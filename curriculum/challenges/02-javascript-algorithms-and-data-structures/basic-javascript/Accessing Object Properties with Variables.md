---
id: 56533eb9ac21ba0edf2244c9
title: Accessing Object Properties with Variables
challengeType: 1
guideUrl: 'https://guide.freecodecamp.org/certificates/accessing-objects-properties-with-variables'
---

## Description
<section id='description'>
Another use of bracket notation on objects is to access a property which is stored as the value of a variable. This can be very useful for iterating through an object's properties or when accessing a lookup table.
Here is an example of using a variable to access a property:
<blockquote>var dogs = {<br>&nbsp;&nbsp;Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle"<br>};<br>var myDog = "Hunter";<br>var myBreed = dogs[myDog];<br>console.log(myBreed); // "Doberman"</blockquote>
Another way you can use this concept is when the property's name is collected dynamically during the program execution, as follows:
<blockquote>var someObj = {<br>&nbsp;&nbsp;propName: "John"<br>};<br>function propPrefix(str) {<br>&nbsp;&nbsp;var s = "prop";<br>&nbsp;&nbsp;return s + str;<br>}<br>var someProp = propPrefix("Name"); // someProp now holds the value 'propName'<br>console.log(someObj[someProp]); // "John"</blockquote>
Note that we do <em>not</em> use quotes around the variable name when using it to access the property because we are using the <em>value</em> of the variable, not the <em>name</em>.
</section>

## Instructions
<section id='instructions'>
Use the <code>playerNumber</code> variable to look up player <code>16</code> in <code>testObj</code> using bracket notation. Then assign that name to the <code>player</code> variable.
</section>

## Tests
<section id='tests'>

```yml
- text: <code>playerNumber</code> should be a number
  testString: 'assert(typeof playerNumber === "number", "<code>playerNumber</code> should be a number");'
- text: The variable <code>player</code> should be a string
  testString: 'assert(typeof player === "string", "The variable <code>player</code> should be a string");'
- text: The value of <code>player</code> should be "Montana"
  testString: 'assert(player === "Montana", "The value of <code>player</code> should be "Montana"");'
- text: You should use bracket notation to access <code>testObj</code>
  testString: 'assert(/testObj\s*?\[.*?\]/.test(code),"You should use bracket notation to access <code>testObj</code>");'
- text: You should not assign the value <code>Montana</code> to the variable <code>player</code> directly.
  testString: 'assert(!code.match(/player\s*=\s*"|\"\s*Montana\s*"|\"\s*;/gi),"You should not assign the value <code>Montana</code> to the variable <code>player</code> directly.");'
- text: You should be using the variable <code>playerNumber</code> in your bracket notation
  testString: 'assert(/testObj\s*?\[\s*playerNumber\s*\]/.test(code),"You should be using the variable <code>playerNumber</code> in your bracket notation");'

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

// Only change code below this line;

var playerNumber;       // Change this Line
var player = testObj;   // Change this Line
```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
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
