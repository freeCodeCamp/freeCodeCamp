---
title: S-Expressions
id: 59667989bf71cf555dd5d2ff
challengeType: 5
videoUrl: ''
localeTitle: S-выражение
---

## Description
<section id="description"><p> <a href="https://en.wikipedia.org/wiki/S-Expression" title="wp: S-выражение">S-выражения</a> - один из удобных способов анализа и хранения данных. </p> Задача: <p> Напишите простой читатель / парсер для S-Expressions, который обрабатывает строки с кавычками и без кавычек, целые числа и поплавки. </p><p> Функция должна читать одно, но вложенное S-выражение из строки и возвращать его как (вложенный) массив. </p><p> Новые строки и другие пробелы могут игнорироваться, если они не содержатся в цитируемой строке. </p><p> &quot; <tt>()</tt> &quot; Внутри цитируемых строк не интерпретируются, а рассматриваются как часть строки. </p><p> Обработка скрытых кавычек внутри строки необязательна; таким образом &quot; <tt>(foo&quot; bar)</tt> &quot;может рассматриваться как строка&quot; <tt>foo &quot;bar</tt> &quot; или как ошибка. </p><p> Для этого читатель не должен распознавать « <tt>\</tt> » для экранирования, но должен, кроме того, распознавать номера, если язык имеет соответствующие типы данных. </p><p> Обратите внимание, что за исключением « <tt>(» «</tt> » (« <tt>\</tt> », если поддерживается escaping) и пробелов нет специальных символов. Все остальное разрешено без кавычек. </p><p> Читатель должен уметь читать следующий ввод </p><p></p><pre> ((данные «котируемые данные» 123 4.5)
    (данные (! @ # (4.5) &quot;(более&quot; &quot;данные)&quot;)))
</pre><p></p><p> и превратить его в родную структуру данных. (см. реализации <a href="http://rosettacode.org/wiki/#Pike" title="#Pike">Pike</a> , <a href="http://rosettacode.org/wiki/#Python" title="#Python">Python</a> и <a href="http://rosettacode.org/wiki/#Ruby" title="#Рубин">Ruby</a> для примеров встроенных структур данных.) </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>parseSexpr</code> - это функция.
    testString: 'assert(typeof parseSexpr === "function", "<code>parseSexpr</code> is a function.");'
  - text: '<code>parseSexpr(&quot;(data1 data2 data3)&quot;)</code> должен возвращать [&quot;data1&quot;, &quot;data2&quot;, &quot;data3&quot;] &quot;)'
    testString: 'assert.deepEqual(parseSexpr(simpleSExpr), simpleSolution, "<code>parseSexpr("(data1 data2 data3)")</code> should return ["data1", "data2", "data3"]");'
  - text: '<code>parseSexpr(&#39;(data1 data2 data3)&#39;)</code> должен возвращать массив с 3 элементами &quot;)'
    testString: 'assert.deepEqual(parseSexpr(basicSExpr), basicSolution, "<code>parseSexpr("(data1 data2 data3)")</code> should return an array with 3 elements");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function parseSexpr(str) {
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
