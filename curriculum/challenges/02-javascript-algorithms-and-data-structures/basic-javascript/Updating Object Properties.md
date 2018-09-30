---
id: 56bbb991ad1ed5201cd392d1
title: Updating Object Properties
challengeType: 1
---

## Description
<section id='description'>
After you've created a JavaScript object, you can update its properties at any time just like you would update any other variable. You can use either dot or bracket notation to update.
For example, let's look at <code>ourDog</code>:
<blockquote>var ourDog = {<br>&nbsp;&nbsp;"name": "Camper",<br>&nbsp;&nbsp;"legs": 4,<br>&nbsp;&nbsp;"tails": 1,<br>&nbsp;&nbsp;"friends": ["everything!"]<br>};</blockquote>
Since he's a particularly happy dog, let's change his name to "Happy Camper". Here's how we update his object's name property:
<code>ourDog.name = "Happy Camper";</code> or
<code>ourDog["name"] = "Happy Camper";</code>
Now when we evaluate <code>ourDog.name</code>, instead of getting "Camper", we'll get his new name, "Happy Camper".
</section>

## Instructions
<section id='instructions'>
Update the <code>myDog</code> object's name property. Let's change her name from "Coder" to "Happy Coder". You can use either dot or bracket notation.
</section>

## Tests
<section id='tests'>

```yml
- text: Update <code>myDog</code>&apos;s <code>"name"</code> property to equal "Happy Coder".
  testString: 'assert(/happy coder/gi.test(myDog.name), "Update <code>myDog</code>&apos;s <code>"name"</code> property to equal "Happy Coder".");'
- text: Do not edit the <code>myDog</code> definition
  testString: 'assert(/"name": "Coder"/.test(code), "Do not edit the <code>myDog</code> definition");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.name = "Happy Camper";

// Setup
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line.


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
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.name = "Happy Coder";
```

</section>
