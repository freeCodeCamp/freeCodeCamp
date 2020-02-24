---
id: 5900f4c21000cf542c50ffd4
challengeType: 5
isHidden: false
title: 'Problem 340: Crazy Function'
forumTopicId: 301999
---

## Description
<section id='description'>
For fixed integers a, b, c, define the crazy function F(n) as follows:
F(n) = n - c for all n > b
F(n) = F(a + F(a + F(a + F(a + n)))) for all n ≤ b.


Also, define S(a, b, c) = .


For example, if a = 50, b = 2000 and c = 40, then F(0) = 3240 and F(2000) = 2040.
Also, S(50, 2000, 40) = 5204240.


Find the last 9 digits of S(217, 721, 127).
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler340()</code> should return 291504964.
    testString: assert.strictEqual(euler340(), 291504964);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler340() {
  // Good luck!
  return true;
}

euler340();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
