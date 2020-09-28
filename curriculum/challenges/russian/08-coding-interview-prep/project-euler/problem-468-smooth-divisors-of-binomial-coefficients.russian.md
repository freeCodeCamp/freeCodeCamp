---
id: 5900f5411000cf542c510054
challengeType: 5
title: 'Problem 468: Smooth divisors of binomial coefficients'
forumTopicId: 302143
localeTitle: 'Задача 468: Гладкие делители биномиальных коэффициентов'
---

## Description
<section id='description'>
Целое число называется B-гладким, если ни один из его простых факторов больше B. <p> Пусть SB (n) - наибольший B-гладкий дивизор n. Примеры: S1 (10) = 1 S4 (2100) = 12 S17 (2496144) = 5712 </p><p> Определить F (n) = Σ1≤B≤n Σ0≤r≤n SB (C (n, r)). Здесь C (n, r) обозначает биномиальный коэффициент. Примеры: F (11) = 3132 F (1 111) mod 1 000 000 993 = 706036312 F (111 111) mod 1 000 000 993 = 22156169 </p><p> Найти F (11 111 111) mod 1 000 000 993. </p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler468()</code> should return 852950321.
    testString: assert.strictEqual(euler468(), 852950321);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler468() {
  // Good luck!
  return true;
}

euler468();

```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
