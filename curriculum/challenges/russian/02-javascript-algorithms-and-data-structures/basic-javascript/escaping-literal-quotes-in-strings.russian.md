---
id: 56533eb9ac21ba0edf2244b5
title: Escaping Literal Quotes in Strings
challengeType: 1
videoUrl: https://scrimba.com/c/c2QvgSr
forumTopicId: 17568
localeTitle: Экранирование кавычек в строках
---

## Описание
<section id='description'>
Когда вы определяете строку (string), вы должны заключить ее начало и конец в одиночные или двойные кавычки. Но что делать, если вам нужно вставить цитату, используя <code>&quot;</code> или <code>&#39;</code> внутри вашей строки? В JavaScript вы можете <dfn>избежать</dfn> распознавания кавычек как окончания строки, поместив <dfn>обратную косую черту</dfn> ( <code>\</code> ) перед цитатой (экранирование кавычек). <code>var sampleStr = &quot;Alan said, \&quot;Peter is learning JavaScript\&quot;.&quot;;</code> Это сообщает JavaScript, что следующие кавычки не являются концом строки и что они должны появляться внутри строки. Поэтому если мы выведем это в консоль, мы получим: <code>Alan said, &quot;Peter is learning JavaScript&quot;.</code>
</section>

## Инструкции
<section id='instructions'>
Используя <dfn>обратную косую черту,</dfn> присвойте переменной <code>myStr</code> строку так, чтобы, если бы вы вывели ее в консоль, вы бы увидели: « <code>I am a &quot;double quoted&quot; string inside &quot;double quotes&quot;.</code>
</section>

## Тесты
<section id='tests'>

```yml
tests:
  - text: You should use two double quotes (<code>&quot;</code>) and four escaped double quotes (<code>&#92;&quot;</code>).
    testString: assert(code.match(/\\"/g).length === 4 && code.match(/[^\\]"/g).length === 2);
  - text: 'Variable myStr should contain the string: <code>I am a "double quoted" string inside "double quotes".</code>'
    testString: assert(myStr === "I am a \"double quoted\" string inside \"double quotes\".");

```

</section>

## Начальное число задания
<section id='challengeSeed'>

<div id='js-seed'>

```js
var myStr = ""; // Change this line

```

</div>

### После тестов
<div id='js-teardown'>

```js
(function(){
  if(typeof myStr === 'string') {
    console.log("myStr = \"" + myStr + "\"");
  } else {
    console.log("myStr is undefined");
  }
})();

```

</div>

</section>

## Решение
<section id='solution'>

```js
var myStr = "I am a \"double quoted\" string inside \"double quotes\".";
```

</section>
