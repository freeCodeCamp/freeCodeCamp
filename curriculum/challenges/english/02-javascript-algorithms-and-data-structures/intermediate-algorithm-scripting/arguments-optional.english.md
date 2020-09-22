---
id: a97fd23d9b809dac9921074f
title: Arguments Optional
challengeType: 5
forumTopicId: 14271
---

## Description
<section id='description'>
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
For example, <code>addTogether(2, 3)</code> should return <code>5</code>, and <code>addTogether(2)</code> should return a function.
Calling this returned function with a single argument will then return the sum:
<code>var sumTwoAnd = addTogether(2);</code>
<code>sumTwoAnd(3)</code> returns <code>5</code>.
If either argument isn't a valid number, return undefined.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>addTogether(2, 3)</code> should return 5.
    testString: assert.deepEqual(addTogether(2, 3), 5);
  - text: <code>addTogether(23, 30)</code> should return 53.
    testString: assert.deepEqual(addTogether(23, 30), 53);
  - text: <code>addTogether(5)(7)</code> should return 12.
    testString: assert.deepEqual(addTogether(5)(7), 12);
  - text: <code>addTogether("http://bit.ly/IqT6zt")</code> should return undefined.
    testString: assert.isUndefined(addTogether("http://bit.ly/IqT6zt"));
  - text: <code>addTogether(2, "3")</code> should return undefined.
    testString: assert.isUndefined(addTogether(2, "3"));
  - text: <code>addTogether(2)([3])</code> should return undefined.
    testString: assert.isUndefined(addTogether(2)([3]));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function addTogether() {
  return false;
}

addTogether(2,3);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function addTogether() {
  var a = arguments[0];
  if (toString.call(a) !== '[object Number]') return;
  if (arguments.length === 1) {
    return function(b) {
      if (toString.call(b) !== '[object Number]') return;
      return a + b;
    };
  }
  var b = arguments[1];
  if (toString.call(b) !== '[object Number]') return;
  return a + arguments[1];
}
```

</section>
