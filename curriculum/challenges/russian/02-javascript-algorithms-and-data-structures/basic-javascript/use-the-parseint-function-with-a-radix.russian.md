---
id: 587d7b7e367417b2b2512b22
title: Use the parseInt Function with a Radix
challengeType: 1
videoUrl: https://scrimba.com/c/c6K4Kh3
forumTopicId: 301182
localeTitle: Используйте функцию parseInt с помощью Radix
---

## Description
<section id='description'>
Функция <code>parseInt()</code> анализирует строку и возвращает целое число. Он принимает второй аргумент для radix, который определяет базу номера в строке. Радикс может быть целым числом от 2 до 36. Вызов функции выглядит так: <code>parseInt(string, radix);</code> И вот пример: <code>var a = parseInt(&quot;11&quot;, 2);</code> В переменной radix указано, что «11» находится в двоичной системе или базе 2. Этот пример преобразует строку «11» в целое число 3.
</section>

## Instructions
<section id='instructions'>
Используйте функцию <code>parseInt()</code> в функции <code>convertToInteger</code> чтобы она преобразует двоичное число в целое и возвращает его.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>convertToInteger</code> should use the <code>parseInt()</code> function
    testString: assert(/parseInt/g.test(code));
  - text: <code>convertToInteger("10011")</code> should return a number
    testString: assert(typeof(convertToInteger("10011")) === "number");
  - text: <code>convertToInteger("10011")</code> should return 19
    testString: assert(convertToInteger("10011") === 19);
  - text: <code>convertToInteger("111001")</code> should return 57
    testString: assert(convertToInteger("111001") === 57);
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

convertToInteger("10011");

```

</div>

</section>

## Solution
<section id='solution'>

```js
function convertToInteger(str) {
  return parseInt(str, 2);
}
```

</section>
