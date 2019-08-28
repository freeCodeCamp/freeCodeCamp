---
id: 56533eb9ac21ba0edf2244b3
title: Convert Celsius to Fahrenheit
challengeType: 1
isRequired: true
forumTopicId: 16806
localeTitle: Преобразование Цельсия в Фаренгейт
---

## Description
<section id='description'>
Алгоритм преобразования от Цельсия в Фаренгейт - это температура в градусах Цельсия <code>9/5</code> и плюс <code>32</code> . Вам дается переменная <code>celsius</code> представляющая температуру в градусах Цельсия. Используйте переменную <code>fahrenheit</code> уже определена, и назначьте ей температуру Фаренгейта, эквивалентную заданной температуре Цельсия. Используйте вышеупомянутый алгоритм, чтобы помочь преобразовать температуру Цельсия в Фаренгейт. Не беспокойтесь слишком много о функциях и заявлениях о возврате, поскольку они будут рассмотрены в будущих задачах. Пока что используйте только те операторы, которые вы уже узнали.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>convertToF(0)</code> should return a number
    testString: assert(typeof convertToF(0) === 'number');
  - text: <code>convertToF(-30)</code> should return a value of <code>-22</code>
    testString: assert(convertToF(-30) === -22);
  - text: <code>convertToF(-10)</code> should return a value of <code>14</code>
    testString: assert(convertToF(-10) === 14);
  - text: <code>convertToF(0)</code> should return a value of <code>32</code>
    testString: assert(convertToF(0) === 32);
  - text: <code>convertToF(20)</code> should return a value of <code>68</code>
    testString: assert(convertToF(20) === 68);
  - text: <code>convertToF(30)</code> should return a value of <code>86</code>
    testString: assert(convertToF(30) === 86);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function convertToF(celsius) {
  let fahrenheit;
  return fahrenheit;
}

convertToF(30);

```

</div>

</section>

## Solution
<section id='solution'>

```js
function convertToF(celsius) {
  let fahrenheit = celsius * 9/5 + 32;

  return fahrenheit;
}

convertToF(30);
```

</section>
