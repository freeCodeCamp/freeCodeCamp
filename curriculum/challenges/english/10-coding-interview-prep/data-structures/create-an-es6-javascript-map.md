---
id: 587d825b367417b2b2512c8d
title: Create an ES6 JavaScript Map
challengeType: 1
forumTopicId: 301635
---

## Description
<section id='description'>

The new version of JavaScript provides us with a built-in Map object which provides much of the functionality we wrote by hand in the last challenge. This Map object, although similar to regular JavaScript objects, provides some useful functionality that normal objects lack. For example, an ES6 Map tracks the insertion order of items that are added to it. Here is a more complete overview of its methods:
<code>.has(key)</code> returns true or false based on the presence of a key
<code>.get(key)</code> returns the value associated with a key
<code>.set(key, value)</code> sets a new key, value pair
<code>.delete(key)</code> removes a key, value pair
<code>.clear()</code> removes all key, value pairs
<code>.entries()</code> returns an array of all the keys in insertion order
<code>.values()</code> returns an array of all the values in insertion order
</section>

## Instructions
<section id='instructions'>

Define a JavaScript Map object and assign to it a variable called myMap. Add the key, value pair <code>freeCodeCamp</code>, <code>Awesome!</code> to it.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The myMap object should exist.
    testString: assert(typeof myMap === 'object');
  - text: myMap should contain the key value pair <code>freeCodeCamp</code>, <code>Awesome!</code>.
    testString: assert(myMap.get('freeCodeCamp') === 'Awesome!');
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js

```

</div>
</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
