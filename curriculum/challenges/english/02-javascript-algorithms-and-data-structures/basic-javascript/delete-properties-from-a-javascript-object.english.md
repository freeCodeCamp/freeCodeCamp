---
id: 56bbb991ad1ed5201cd392d3
title: Delete Properties from a JavaScript Object
challengeType: 1
videoUrl: 'https://scrimba.com/c/cDqKdTv'
forumTopicId: 17560
---

## Description
<section id='description'>
We can also delete properties from objects like this:
<code>delete ourDog.bark;</code>

Example:

```js
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark;
```

After the last line shown above, <code>ourDog</code> looks like:

```js
{
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
}
```

</section>

## Instructions
<section id='instructions'>
Delete the <code>"tails"</code> property from <code>myDog</code>. You may use either dot or bracket notation.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should delete the property <code>"tails"</code> from <code>myDog</code>.
    testString: assert(typeof myDog === "object" && myDog.tails === undefined);
  - text: You should not modify the <code>myDog</code> setup.
    testString: 'assert(code.match(/"tails": 1/g).length > 0);'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line


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
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};
delete myDog.tails;
```

</section>
