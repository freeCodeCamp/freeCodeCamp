---
id: 587d7b7e367417b2b2512b23
title: Use the parseInt Function
challengeType: 1
videoUrl: https://scrimba.com/c/cm83LSW
forumTopicId: 301183
localeTitle: Используйте функцию parseInt
---

## Description
<section id='description'>
Функция <code>parseInt()</code> анализирует строку и возвращает целое число. Вот пример: <code>var a = parseInt(&quot;007&quot;);</code> Вышеупомянутая функция преобразует строку «007» в целое число 7. Если первый символ в строке не может быть преобразован в число, то он возвращает <code>NaN</code> .
</section>

## Instructions
<section id='instructions'>
Используйте функцию <code>parseInt()</code> в функции <code>convertToInteger</code> чтобы она преобразует входную строку <code>str</code> в целое число и возвращает ее.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>convertToInteger</code> should use the <code>parseInt()</code> function
    testString: assert(/parseInt/g.test(code));
  - text: <code>convertToInteger("56")</code> should return a number
    testString: assert(typeof(convertToInteger("56")) === "number");
  - text: <code>convertToInteger("56")</code> should return 56
    testString: assert(convertToInteger("56") === 56);
  - text: <code>convertToInteger("77")</code> should return 77
    testString: assert(convertToInteger("77") === 77);
  - text: <code>convertToInteger("JamesBond")</code> should return NaN
    testString: assert.isNaN(convertToInteger("JamesBond"));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function convertToInteger(str) {

}

convertToInteger("56");

```

</div>

</section>

## Solution
<section id='solution'>

```js
function convertToInteger(str) {
  return parseInt(str);
}
```

</section>
