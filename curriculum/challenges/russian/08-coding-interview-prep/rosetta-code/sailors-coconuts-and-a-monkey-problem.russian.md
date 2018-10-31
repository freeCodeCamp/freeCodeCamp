---
title: 'Sailors, coconuts and a monkey problem'
id: 59da22823d04c95919d46269
challengeType: 5
videoUrl: ''
localeTitle: 'Моряки, кокосы и проблема обезьяны'
---

## Description
<section id="description"><p> Пять матросов потерпели кораблекрушение на острове и собирают большую кучу кокосовых орехов в течение дня. </p><p> В эту ночь первый моряк просыпается и решает взять свою первую долю раньше, поэтому пытается разделить кучу кокосов одинаково на пять кучек, но обнаруживает, что остался один кокос, поэтому он бросает его обезьяне, а затем прячет «свою», одну из пяти одинаковых по размеру груды кокосов и подталкивает еще четыре свай вместе, чтобы снова сформировать одну видимую груду кокосов и ложиться спать. </p><p> Короче говоря, каждый из моряков, в свою очередь, встает один раз ночью и выполняет те же действия, что и разделение кокосовой кучи на пять, и обнаруживает, что один кокос оставлен и дает кокосовому кокосовому ореху обезьяне. </p><p> Утром (после тайного и раздельного действия каждого из пяти матросов в ночное время) оставшиеся кокосы делятся на пять равных свай для каждого из моряков, после чего обнаруживается, что куча кокосовых орехов одинаково делится среди моряков без остатка. (Ничего для обезьяны утром). </p><p> Задание: </p><pre> <code> Create a function that returns the the minimum possible size of the initial pile of coconuts collected during the day for N sailors.</code> </pre><p> Заметка: </p><pre> <code> Of course the tale is told in a world where the collection of any amount of coconuts in a day and multiple divisions of the pile, etc can occur in time fitting the story line, so as not to affect the mathematics.</code> </pre><p> Cf: </p><p> <a href="https://www.youtube.com/watch?v=U9qU20VmvaU" title="ссылка: https://www.youtube.com/watch?v=U9qU20VmvaU">Обезьяны и кокосы - Numberphile</a> (видео) Аналитическое решение. </p><pre> <code> &lt;a href=&quot;http://oeis.org/A002021&quot; title=&quot;link: http://oeis.org/A002021&quot;&gt;A002021 Pile of coconuts problem&lt;/a&gt; The On-Line Encyclopedia of Integer Sequences. (Although some of its references may use the alternate form of the tale).</code> </pre></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>splitCoconuts</code> - это функция.
    testString: 'assert(typeof splitCoconuts === "function", "<code>splitCoconuts</code> is a function.");'
  - text: <code>splitCoconuts(5)</code> должен вернуть 3121.
    testString: 'assert(splitCoconuts(5) === 3121, "<code>splitCoconuts(5)</code> should return 3121.");'
  - text: <code>splitCoconuts(6)</code> должен возвращать 233275.
    testString: 'assert(splitCoconuts(6) === 233275, "<code>splitCoconuts(6)</code> should return 233275.");'
  - text: <code>splitCoconuts(7)</code> должен вернуть 823537.
    testString: 'assert(splitCoconuts(7) === 823537, "<code>splitCoconuts(7)</code> should return 823537.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// noprotect
function splitCoconuts(intSailors) {
  // Good luck!
  return true;
}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
