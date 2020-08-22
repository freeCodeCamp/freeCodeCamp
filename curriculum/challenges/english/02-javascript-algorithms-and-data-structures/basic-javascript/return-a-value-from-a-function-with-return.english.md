---
id: 56533eb9ac21ba0edf2244c2
title: Return a Value from a Function with Return
challengeType: 1
isHidden: false
videoUrl: 'https://scrimba.com/c/cy87wue'
forumTopicId: 18271
---

## Description
<section id='description'>
We can pass values into a function with <dfn>arguments</dfn>. You can use a <code>return</code> statement to send a value back out of a function.
<strong>Example</strong>

```js
function plusThree(num) {
  return num + 3;
}
var answer = plusThree(5); // 8
```

<code>plusThree</code> takes an <dfn>argument</dfn> for <code>num</code> and returns a value equal to <code>num + 3</code>.
</section>

## Instructions
<section id='instructions'>
Create a function <code>timesFive</code> that accepts one argument, multiplies it by <code>5</code>, and returns the new value. See the last line in the editor for an example of how you can test your <code>timesFive</code> function.
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
