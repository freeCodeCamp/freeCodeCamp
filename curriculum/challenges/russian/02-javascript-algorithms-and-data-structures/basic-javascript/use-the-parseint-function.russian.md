---
id: 587d7b7e367417b2b2512b23
title: Use the parseInt Function
challengeType: 1
videoUrl: ''
localeTitle: Используйте функцию parseInt
---

## Description
<section id="description"> Функция <code>parseInt()</code> анализирует строку и возвращает целое число. Вот пример: <code>var a = parseInt(&quot;007&quot;);</code> Вышеупомянутая функция преобразует строку «007» в целое число 7. Если первый символ в строке не может быть преобразован в число, то он возвращает <code>NaN</code> . </section>

## Instructions
<section id="instructions"> Используйте функцию <code>parseInt()</code> в функции <code>convertToInteger</code> чтобы она преобразует входную строку <code>str</code> в целое число и возвращает ее. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>convertToInteger</code> должен использовать функцию <code>parseInt()</code>
    testString: 'assert(/parseInt/g.test(code), "<code>convertToInteger</code> should use the <code>parseInt()</code> function");'
  - text: <code>convertToInteger(&quot;56&quot;)</code> должен возвращать число
    testString: 'assert(typeof(convertToInteger("56")) === "number", "<code>convertToInteger("56")</code> should return a number");'
  - text: <code>convertToInteger(&quot;56&quot;)</code> должен возвращать 56
    testString: 'assert(convertToInteger("56") === 56, "<code>convertToInteger("56")</code> should return 56");'
  - text: <code>convertToInteger(&quot;77&quot;)</code> должен возвращать 77
    testString: 'assert(convertToInteger("77") === 77, "<code>convertToInteger("77")</code> should return 77");'
  - text: <code>convertToInteger(&quot;JamesBond&quot;)</code> должен вернуть NaN
    testString: 'assert.isNaN(convertToInteger("JamesBond"), "<code>convertToInteger("JamesBond")</code> should return NaN");'

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
// solution required
```
</section>
