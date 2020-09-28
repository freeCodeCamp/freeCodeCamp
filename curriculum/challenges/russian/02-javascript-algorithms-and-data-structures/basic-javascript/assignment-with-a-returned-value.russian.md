---
id: 56533eb9ac21ba0edf2244c3
title: Assignment with a Returned Value
challengeType: 1
videoUrl: https://scrimba.com/c/ce2pEtB
forumTopicId: 16658
localeTitle: Назначение с возвращенной стоимостью
---

## Description
<section id='description'>
Если вы вспомните из нашего обсуждения « <a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/storing-values-with-the-assignment-operator" target="_blank">Сохранение значений с помощью оператора назначения»</a> , все, что находится справа от знака равенства, будет разрешено до присвоения значения. Это означает, что мы можем взять возвращаемое значение функции и присвоить ее переменной. Предположим, что мы предварительно определили <code>sum</code> функций, которая объединяет два числа, а затем: <code>ourSum = sum(5, 12);</code> вызовет функцию <code>sum</code> , которая возвращает значение <code>17</code> и присваивает ее переменной <code>ourSum</code> .
</section>

## Instructions
<section id='instructions'>
Вызовите функцию <code>processArg</code> с аргументом <code>7</code> и назначьте его возвращаемое значение <code>processed</code> переменной.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>processed</code> should have a value of <code>2</code>
    testString: assert(processed === 2);
  - text: You should assign <code>processArg</code> to <code>processed</code>
    testString: assert(/processed\s*=\s*processArg\(\s*7\s*\)/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var changed = 0;

function change(num) {
  return (num + 5) / 3;
}

changed = change(10);

// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line

```

</div>

### After Tests
<div id='js-teardown'>

```js
(function(){return "processed = " + processed})();

```

</div>

</section>

## Solution
<section id='solution'>

```js
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);
```

</section>
