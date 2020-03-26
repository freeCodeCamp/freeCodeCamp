---
id: 56bbb991ad1ed5201cd392d2
title: Add New Properties to a JavaScript Object
challengeType: 1
videoUrl: 'https://scrimba.com/c/cQe38UD'
forumTopicId: 301169
---

## Description
<section id='description'>
You can add new properties to existing JavaScript objects the same way you would modify them.
Here's how we would add a <code>"bark"</code> property to <code>ourDog</code>:
<code>ourDog.bark = "bow-wow";</code>
or
<code>ourDog["bark"] = "bow-wow";</code>
Now when we evaluate <code>ourDog.bark</code>, we'll get his bark, "bow-wow".

Example:

```js
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.bark = "bow-wow";
```

</section>

## Instructions
<section id='instructions'>
Add a <code>"bark"</code> property to <code>myDog</code> and set it to a dog sound, such as "woof". You may use either dot or bracket notation.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should add the property <code>"bark"</code> to <code>myDog</code>.
    testString: assert(myDog.bark !== undefined);
  - text: You should not add <code>"bark"</code> to the setup section.
    testString: assert(!/bark[^\n]:/.test(code));

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
  "friends": ["freeCodeCamp Campers"]
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
  "friends": ["freeCodeCamp Campers"]
};
myDog.bark = "Woof Woof";
```

</section>
