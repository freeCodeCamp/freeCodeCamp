---
id: bd7123c9c441eddfaeb5bdef
title: Understanding Boolean Values
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9Me8t4'
forumTopicId: 301176
---

## Description

<section id='description'>

Another data type is the <dfn>Boolean</dfn>. `Booleans` may only be one of two values: `true` or `false`. They are basically little on-off switches, where `true` is "on" and `false` is "off." These two states are mutually exclusive.

**Note**  
`Boolean` values are never written with quotes. The `strings` `"true"` and `"false"` are not `Boolean` and have no special meaning in JavaScript.

</section>

## Instructions

<section id='instructions'>

Modify the `welcomeToBooleans` function so that it returns `true` instead of `false` when the run button is clicked.

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: The <code>welcomeToBooleans()</code> function should return a boolean &#40;true/false&#41; value.
    testString: assert(typeof welcomeToBooleans() === 'boolean');
  - text: <code>welcomeToBooleans()</code> should return true.
    testString: assert(welcomeToBooleans() === true);

```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='js-seed'>

```js
function welcomeToBooleans() {

  // Only change code below this line

  return false; // Change this line

  // Only change code above this line
}
```

</div>

### After Test

<div id='js-teardown'>

```js
welcomeToBooleans();
```

</div>

</section>

## Solution

<section id='solution'>

```js
function welcomeToBooleans() {
  return true; // Change this line
}
```

</section>
