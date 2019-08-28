---
id: 5900f4c41000cf542c50ffd6
challengeType: 5
title: 'Problem 343: Fractional Sequences'
forumTopicId: 302002
localeTitle: 'Problem 343: Fractional Sequences'
---

## Description
<section id='description'>
Для любого натурального k конечная последовательность ai дробей xi / yi определяется: a1 = 1 / k и ai = (xi-1 + 1) / (yi-1-1), сведенными к младшим слагаемым при i&gt; 1 , Когда ai достигает некоторого целого n, последовательность останавливается. (То есть, когда yi = 1.) Определим f (k) = n. Например, для k = 20: <p> 1/20 → 2/19 → 3/18 = 1/6 → 2/5 → 3/4 → 4/3 → 5/2 → 6/1 = 6 </p><p> Итак, f (20) = 6. </p><p> Также f (1) = 1, f (2) = 2, f (3) = 1 и Σf (k3) = 118937 для 1 ≤ k ≤ 100. </p><p> Найти Σf (k3) для 1 ≤ k ≤ 2 × 106. </p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler343()</code> should return 269533451410884200.
    testString: assert.strictEqual(euler343(), 269533451410884200);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler343() {
  // Good luck!
  return true;
}

euler343();

```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
