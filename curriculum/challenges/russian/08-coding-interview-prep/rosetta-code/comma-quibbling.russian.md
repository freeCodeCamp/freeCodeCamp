---
title: Comma quibbling
id: 596e414344c3b2872167f0fe
challengeType: 5
videoUrl: ''
localeTitle: Запястья
---

## Description
<section id="description"><p> Comma quibbling - это задача, первоначально заданная Эриком Липпертом в его <a href="http://blogs.msdn.com/b/ericlippert/archive/2009/04/15/comma-quibbling.aspx" title="ссылка: http://blogs.msdn.com/b/ericlippert/archive/2009/04/15/comma-quibbling.aspx">блоге</a> . </p> Задача: <p> Напишите функцию для генерации вывода строки, которая представляет собой конкатенацию входных слов из списка / последовательности, где: </p> Ввод без слов выводит строку вывода только двух символов скобок «{}». Ввод только одного слова, например [&quot;ABC&quot;], выводит строку вывода слова внутри двух фигурных скобок, например, &quot;{ABC}&quot;. Ввод двух слов, например [&quot;ABC&quot;, &quot;DEF&quot;], выдает строку вывода двух слов внутри двух фигурных скобок словами, разделенными строкой &quot;и&quot;, например &quot;{ABC и DEF}&quot;. Ввод трех или более слов, например [&quot;ABC&quot;, &quot;DEF&quot;, &quot;G&quot;, &quot;H&quot;], выводит строку вывода всего, кроме последнего слова, разделенного символом &quot;,&quot; с последним словом, разделенным символом &quot;и&quot; «и все в фигурных скобках; например, «{ABC, DEF, G и H}». <p> Протестируйте свою функцию со следующей серией входов, показывающей ваш вывод здесь, на этой странице: </p> [] # (Нет входных слов). [&quot;ABC&quot;] [&quot;ABC&quot;, &quot;DEF&quot;] [&quot;ABC&quot;, &quot;DEF&quot;, &quot;G&quot;, &quot;H&quot;] <p> Примечание. Предположим, что для этой задачи слова являются непустыми строками символов верхнего регистра. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>quibble</code> - это функция.
    testString: 'assert(typeof quibble === "function", "<code>quibble</code> is a function.");'
  - text: '<code>quibble([&quot;ABC&quot;])</code> должен возвращать строку.'
    testString: 'assert(typeof quibble(["ABC"]) === "string", "<code>quibble(["ABC"])</code> should return a string.");'
  - text: '<code>quibble([])</code> должен возвращать &quot;{}&quot;.'
    testString: 'assert.equal(quibble(testCases[0]), results[0], "<code>quibble([])</code> should return "{}".");'
  - text: '<code>quibble([&quot;ABC&quot;])</code> должен вернуть &quot;{ABC}&quot;.'
    testString: 'assert.equal(quibble(testCases[1]), results[1], "<code>quibble(["ABC"])</code> should return "{ABC}".");'
  - text: '<code>quibble([&quot;ABC&quot;, &quot;DEF&quot;])</code> должен возвращать &quot;{ABC и DEF}&quot;.'
    testString: 'assert.equal(quibble(testCases[2]), results[2], "<code>quibble(["ABC", "DEF"])</code> should return "{ABC and DEF}".");'
  - text: '<code>quibble([&quot;ABC&quot;, &quot;DEF&quot;, &quot;G&quot;, &quot;H&quot;])</code> должны возвращать &quot;{ABC, DEF, G и H}&quot;.'
    testString: 'assert.equal(quibble(testCases[3]), results[3], "<code>quibble(["ABC", "DEF", "G", "H"])</code> should return "{ABC,DEF,G and H}".");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function quibble (words) {
  // Good luck!
  return true;
}

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
