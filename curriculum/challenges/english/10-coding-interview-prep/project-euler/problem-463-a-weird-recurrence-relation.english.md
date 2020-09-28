---
id: 5900f53c1000cf542c51004e
challengeType: 5
title: 'Problem 463: A weird recurrence relation'
forumTopicId: 302138
---

## Description
<section id='description'>
The function $f$ is defined for all positive integers as follows:
$f(1)=1$
$f(3)=3$
$f(2n)=f(n)$
$f(4n + 1)=2f(2n + 1) - f(n)$
$f(4n + 3)=3f(2n + 1) - 2f(n)$

The function $S(n)$ is defined as $\sum_{i=1}^{n}f(i)$.
$S(8)=22$ and $S(100)=3604$.
Find $S(3^{37})$. Give the last 9 digits of your answer.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler463()</code> should return 808981553.
    testString: assert.strictEqual(euler463(), 808981553);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler463() {

  return true;
}

euler463();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
