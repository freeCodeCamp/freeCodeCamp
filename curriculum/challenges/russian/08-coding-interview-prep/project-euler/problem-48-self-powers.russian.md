---
id: 5900f39c1000cf542c50feaf
challengeType: 5
title: 'Problem 48: Self powers'
forumTopicId: 302157
localeTitle: 'Проблема 48: Власть'
---

## Description
<section id='description'>
Серия, 1 <sup>1</sup> + 2 <sup>2</sup> + 3 <sup>3</sup> + ... + 10 <sup>10</sup> = 10405071317. Найдите последние десять цифр серии, 1 <sup>1</sup> + 2 <sup>2</sup> + 3 <sup>3</sup> + ... + 1000 <sup>1000</sup> .
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>selfPowers(10, 3)</code> should return 317.
    testString: assert.strictEqual(selfPowers(10, 3), 317);
  - text: <code>selfPowers(150, 6)</code> should return 29045.
    testString: assert.strictEqual(selfPowers(150, 6), 29045);
  - text: <code>selfPowers(673, 7)</code> should return 2473989.
    testString: assert.strictEqual(selfPowers(673, 7), 2473989);
  - text: <code>selfPowers(1000, 10)</code> should return 9110846700.
    testString: assert.strictEqual(selfPowers(1000, 10), 9110846700);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function selfPowers(power, lastDigits) {
  // Good luck!
  return true;
}

selfPowers(1000, 10);

```

</div>

</section>

## Solution
<section id='solution'>

```js
function selfPowers(power, lastDigits) {
  let sum = 0;
  const modulo = Math.pow(10, lastDigits);

  for (let i = 1; i <= power; i++) {
    let temp = i;
    for (let j = 1; j < i; j++) {
      temp *= i;
      temp %= modulo;
    }

    sum += temp;
    sum %= modulo;
  }

  return sum;
}
```

</section>
