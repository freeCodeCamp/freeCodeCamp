---
id: 56533eb9ac21ba0edf2244c3
title: Assignment with a Returned Value
challengeType: 1
videoUrl: 'https://scrimba.com/c/ce2pEtB'
forumTopicId: 16658
---

## Description
<section id='description'>
If you'll recall from our discussion of <a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/storing-values-with-the-assignment-operator" target="_blank">Storing Values with the Assignment Operator</a>, everything to the right of the equal sign is resolved before the value is assigned. This means we can take the return value of a function and assign it to a variable.
Assume we have pre-defined a function <code>sum</code> which adds two numbers together, then:
<code>ourSum = sum(5, 12);</code>
will call <code>sum</code> function, which returns a value of <code>17</code> and assigns it to <code>ourSum</code> variable.
</section>

## Instructions
<section id='instructions'>
Call the <code>processArg</code> function with an argument of <code>7</code> and assign its return value to the variable <code>processed</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>processed</code> should have a value of <code>2</code>
    testString: assert(processed === 2);
  - text: You should assign <code>processArg</code> to <code>processed</code>
    testString: assert(/processed\s*=\s*processArg\(\s*7\s*\)/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line

```

</div>


### After Test
<div id='js-teardown'>

```js
(function(){return "processed = " + processed})();
```

</div>

</section>

## Solution
<section id='solution'>


```js
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);
```

</section>
