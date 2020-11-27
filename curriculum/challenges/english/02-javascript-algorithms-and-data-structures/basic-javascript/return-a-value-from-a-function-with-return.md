---
id: 56533eb9ac21ba0edf2244c2
title: Return a Value from a Function with Return
challengeType: 1
videoUrl: 'https://scrimba.com/c/cy87wue'
forumTopicId: 18271
---

## Description

<section id='description'>

We can pass values into a function with <dfn>arguments</dfn>. You can use a `return` statement to send a value back out of a function.

**Example**

```js
function plusThree(num) {
  return num + 3;
}
var answer = plusThree(5); // 8
```

`plusThree` takes an <dfn>argument</dfn> for `num` and returns a value equal to `num + 3`.

</section>

## Instructions

<section id='instructions'>

Create a function `timesFive` that accepts one argument, multiplies it by `5`, and returns the new value. See the last line in the editor for an example of how you can test your `timesFive` function.

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>timesFive</code> should be a function
    testString: assert(typeof timesFive === 'function');
  - text: <code>timesFive(5)</code> should return <code>25</code>
    testString: assert(timesFive(5) === 25);
  - text: <code>timesFive(2)</code> should return <code>10</code>
    testString: assert(timesFive(2) === 10);
  - text: <code>timesFive(0)</code> should return <code>0</code>
    testString: assert(timesFive(0) === 0);

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
function timesFive(num) {
  return num * 5;
}
timesFive(10);
```

</section>
