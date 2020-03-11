---
id: 5679ceb97cbaa8c51670a16b
title: Returning Boolean Values from Functions
challengeType: 1
videoUrl: 'https://scrimba.com/c/cp62qAQ'
forumTopicId: 18273
---

## Description
<section id='description'>
You may recall from <a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-equality-operator" target="_blank">Comparison with the Equality Operator</a> that all comparison operators return a boolean <code>true</code> or <code>false</code> value.
Sometimes people use an if/else statement to do a comparison, like this:

```js
function isEqual(a,b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
```

But there's a better way to do this. Since <code>===</code> returns <code>true</code> or <code>false</code>, we can return the result of the comparison:

```js
function isEqual(a,b) {
  return a === b;
}
```

</section>

## Instructions
<section id='instructions'>
Fix the function <code>isLess</code> to remove the <code>if/else</code> statements.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>isLess(10,15)</code> should return <code>true</code>
    testString: assert(isLess(10,15) === true);
  - text: <code>isLess(15,10)</code> should return <code>false</code>
    testString: assert(isLess(15, 10) === false);
  - text: You should not use any <code>if</code> or <code>else</code> statements
    testString: assert(!/if|else/g.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function isLess(a, b) {
  // Only change code below this line
  if (a < b) {
    return true;
  } else {
    return false;
  }
  // Only change code above this line
}

isLess(10, 15);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function isLess(a, b) {
  return a < b;
}
```

</section>
