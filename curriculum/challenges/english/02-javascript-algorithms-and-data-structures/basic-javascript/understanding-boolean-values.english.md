---
id: bd7123c9c441eddfaeb5bdef
title: Understanding Boolean Values
challengeType: 1
isHidden: false
videoUrl: 'https://scrimba.com/c/c9Me8t4'
forumTopicId: 301176
---

## Description
<section id='description'>
Another data type is the <dfn>Boolean</dfn>. <code>Booleans</code> may only be one of two values: <code>true</code> or <code>false</code>. They are basically little on-off switches, where <code>true</code> is "on" and <code>false</code> is "off."  These two states are mutually exclusive.
<strong>Note</strong><br><code>Boolean</code> values are never written with quotes. The <code>strings</code> <code>"true"</code> and <code>"false"</code> are not <code>Boolean</code> and have no special meaning in JavaScript.
</section>

## Instructions
<section id='instructions'>
Modify the <code>welcomeToBooleans</code> function so that it returns <code>true</code> instead of <code>false</code> when the run button is clicked.
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
