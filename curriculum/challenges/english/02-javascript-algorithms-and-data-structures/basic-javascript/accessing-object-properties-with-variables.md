---
id: 56533eb9ac21ba0edf2244c9
title: Accessing Object Properties with Variables
challengeType: 1
videoUrl: 'https://scrimba.com/c/cnQyKur'
forumTopicId: 16165
dashedName: accessing-object-properties-with-variables
---

# --description--

Another use of bracket notation on objects is to access a property which is stored as the value of a variable. This can be very useful for iterating through an object's properties or when accessing a lookup table.

Here is an example of using a variable to access a property:

```js
var dogs = {
  Fido: "Mutt",  Hunter: "Doberman",  Snoopie: "Beagle"
};
var myDog = "Hunter";
var myBreed = dogs[myDog];
console.log(myBreed);
```

The string `Doberman` would be displayed in the console.

Another way you can use this concept is when the property's name is collected dynamically during the program execution, as follows:

```js
var someObj = {
  propName: "John"
};
function propPrefix(str) {
  var s = "prop";
  return s + str;
}
var someProp = propPrefix("Name");
console.log(someObj[someProp]);
```

`someProp` would have a value of the string `propName`, and the string `John` would be displayed in the console.

Note that we do *not* use quotes around the variable name when using it to access the property because we are using the *value* of the variable, not the *name*.

# --instructions--

Set the `playerNumber` variable to `16`. Then, use the variable to look up the player's name and assign it to `player`.

# --hints--

`playerNumber` should be a number

```js
assert(typeof playerNumber === 'number');
```

The variable `player` should be a string

```js
assert(typeof player === 'string');
```

The value of `player` should be the string `Montana`

```js
assert(player === 'Montana');
```

You should use bracket notation to access `testObj`

```js
assert(/testObj\s*?\[.*?\]/.test(code));
```

You should not assign the value `Montana` to the variable `player` directly.

```js
assert(!code.match(/player\s*=\s*"|\'\s*Montana\s*"|\'\s*;/gi));
```

You should be using the variable `playerNumber` in your bracket notation

```js
assert(/testObj\s*?\[\s*playerNumber\s*\]/.test(code));
```

# --seed--

## --after-user-code--

```js
if(typeof player !== "undefined"){(function(v){return v;})(player);}
```

## --seed-contents--

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

# --solutions--

```js
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};
var playerNumber = 16;
var player = testObj[playerNumber];
```
