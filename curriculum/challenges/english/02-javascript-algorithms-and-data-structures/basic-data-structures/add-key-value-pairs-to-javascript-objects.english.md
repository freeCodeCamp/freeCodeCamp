---
id: 587d7b7c367417b2b2512b18
title: Add Key-Value Pairs to JavaScript Objects
challengeType: 1
isHidden: false
forumTopicId: 301153
---

## Description
<section id='description'>
At their most basic, objects are just collections of <dfn>key-value</dfn> pairs. In other words, they are pieces of data (<dfn>values</dfn>) mapped to unique identifiers called <dfn>properties</dfn> (<dfn>keys</dfn>). Take a look at an example:

```js
const tekkenCharacter = {
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true
};
```

The above code defines a Tekken video game character object called <code>tekkenCharacter</code>. It has three properties, each of which map to a specific value. If you want to add an additional property, such as "origin", it can be done by assigning <code>origin</code> to the object:

```js
tekkenCharacter.origin = 'South Korea';
```

This uses dot notation. If you were to observe the <code>tekkenCharacter</code> object, it will now include the <code>origin</code> property. Hwoarang also had distinct orange hair. You can add this property with bracket notation by doing:

```js
tekkenCharacter['hair color'] = 'dyed orange';
```

Bracket notation is required if your property has a space in it or if you want to use a variable to name the property. In the above case, the property is enclosed in quotes to denote it as a string and will be added exactly as shown. Without quotes, it will be evaluated as a variable and the name of the property will be whatever value the variable is. Here's an example with a variable:

```js
const eyes = 'eye color';

tekkenCharacter[eyes] = 'brown';
```

After adding all the examples, the object will look like this:

```js
{
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true,
  origin: 'South Korea',
  'hair color': 'dyed orange',
  'eye color': 'brown'
};
```

</section>

## Instructions
<section id='instructions'>
 A <code>foods</code> object has been created with three entries. Using the syntax of your choice, add three more entries to it: <code>bananas</code> with a value of <code>13</code>, <code>grapes</code> with a value of <code>35</code>, and <code>strawberries</code> with a value of <code>27</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>foods</code> should be an object.
    testString: assert(typeof foods === 'object');
  - text: The <code>foods</code> object should have a key <code>"bananas"</code> with a value of <code>13</code>.
    testString: assert(foods.bananas === 13);
  - text: The <code>foods</code> object should have a key <code>"grapes"</code> with a value of <code>35</code>.
    testString: assert(foods.grapes === 35);
  - text: The <code>foods</code> object should have a key <code>"strawberries"</code> with a value of <code>27</code>.
    testString: assert(foods.strawberries === 27);
  - text: The key-value pairs should be set using dot or bracket notation.
    testString: assert(code.search(/bananas:/) === -1 && code.search(/grapes:/) === -1 && code.search(/strawberries:/) === -1);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// Only change code below this line

// Only change code above this line

console.log(foods);
```

</div>



</section>

## Solution
<section id='solution'>

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

foods['bananas'] = 13;
foods['grapes']  = 35;
foods['strawberries'] = 27;
```

</section>
