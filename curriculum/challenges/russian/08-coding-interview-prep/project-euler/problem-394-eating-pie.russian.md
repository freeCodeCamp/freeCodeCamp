---
id: 5900f4f71000cf542c510009
challengeType: 5
title: 'Problem 394: Eating pie'
forumTopicId: 302059
localeTitle: 'Problem 394: Eating pie'
---

## Description
<section id='description'>
Джефф ест пирог необычным способом. Кружок круговой. Он начинает с разрезания начального разреза в пироге по радиусу. В то время как есть хотя бы одна фракция F пирога слева, он выполняет следующую процедуру: - Он делает два среза из центра пирога в любую точку остатка границы пирога, причем любая точка на оставшейся грани пирога одинаково вероятна. Это разделит оставшийся пирог на три части. - Проходя против часовой стрелки от начального разреза, он берет первые два пирога и ест их. Когда осталось меньше F пирога, он не повторяет эту процедуру. Вместо этого он ест весь оставшийся пирог. <p> Для x ≥ 1 пусть E (x) - ожидаемое число раз, когда Джефф повторяет описанную выше процедуру с F = 1 / x. Можно проверить, что E (1) = 1, E (2) ≈ 1.2676536759 и E (7.5) ≈ 2.1215732071. </p><p> Найдите E (40), округленное до десяти десятичных знаков за десятичной точкой. </p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler394()</code> should return 3.2370342194.
    testString: assert.strictEqual(euler394(), 3.2370342194);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler394() {
  // Good luck!
  return true;
}

euler394();

```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
