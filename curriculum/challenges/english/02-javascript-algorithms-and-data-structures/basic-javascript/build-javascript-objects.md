---
id: 56bbb991ad1ed5201cd392d0
title: Build JavaScript Objects
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWGkbtd'
forumTopicId: 16769
---

## Description
<section id='description'>
You may have heard the term <code>object</code> before.
Objects are similar to <code>arrays</code>, except that instead of using indexes to access and modify their data, you access the data in objects through what are called <code>properties</code>.
Objects are useful for storing data in a structured way, and can represent real world objects, like a cat.
Here's a sample cat object:

```js
var cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};
```

In this example, all the properties are stored as strings, such as - <code>"name"</code>, <code>"legs"</code>, and <code>"tails"</code>. However, you can also use numbers as properties. You can even omit the quotes for single-word string properties, as follows:

```js
var anotherObject = {
  make: "Ford",
  5: "five",
  "model": "focus"
};
```

However, if your object has any non-string properties, JavaScript will automatically typecast them as strings.
</section>

## Instructions
<section id='instructions'>
Make an object that represents a dog called <code>myDog</code> which contains the properties <code>"name"</code> (a string), <code>"legs"</code>, <code>"tails"</code> and <code>"friends"</code>.
You can set these object properties to whatever values you want, as long as <code>"name"</code> is a string, <code>"legs"</code> and <code>"tails"</code> are numbers, and <code>"friends"</code> is an array.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myDog</code> should contain the property <code>name</code> and it should be a <code>string</code>.
    testString: assert((function(z){if(z.hasOwnProperty("name") && z.name !== undefined && typeof z.name === "string"){return true;}else{return false;}})(myDog));
  - text: <code>myDog</code> should contain the property <code>legs</code> and it should be a <code>number</code>.
    testString: assert((function(z){if(z.hasOwnProperty("legs") && z.legs !== undefined && typeof z.legs === "number"){return true;}else{return false;}})(myDog));
  - text: <code>myDog</code> should contain the property <code>tails</code> and it should be a <code>number</code>.
    testString: assert((function(z){if(z.hasOwnProperty("tails") && z.tails !== undefined && typeof z.tails === "number"){return true;}else{return false;}})(myDog));
  - text: <code>myDog</code> should contain the property <code>friends</code> and it should be an <code>array</code>.
    testString: assert((function(z){if(z.hasOwnProperty("friends") && z.friends !== undefined && Array.isArray(z.friends)){return true;}else{return false;}})(myDog));
  - text: <code>myDog</code> should only contain all the given properties.
    testString: assert((function(z){return Object.keys(z).length === 4;})(myDog));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var myDog = {
// Only change code below this line


// Only change code above this line
};
```

</div>


### After Test
<div id='js-teardown'>

```js
(function(z){return z;})(myDog);
```

</div>

</section>

## Solution
<section id='solution'>


```js
var myDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
```

</section>
