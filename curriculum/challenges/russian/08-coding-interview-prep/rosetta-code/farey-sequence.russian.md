---
title: Farey sequence
id: 59c3ec9f15068017c96eb8a3
challengeType: 5
videoUrl: ''
localeTitle: Последовательность Farey
---

## Description
<section id="description"><p> Напишите функцию, которая возвращает последовательность Farey порядка n. Функция должна иметь один параметр, который равен n. Он должен возвращать последовательность в виде массива. Подробнее читайте ниже: </p><p> Последовательность <a href="https://en.wikipedia.org/wiki/Farey sequence" title="wp: последовательность Farey">Farey</a> F <sub>n</sub> порядка n представляет собой последовательность полностью восстановленных фракций между 0 и 1, которые, если в младших членах, имеют знаменатели, меньшие или равные n, упорядоченные в порядке возрастания. </p><p> Последовательность Farey иногда некорректно называется серией Farey. </p><p> Каждая последовательность Farey: </p><p> :: * начинается со значения 0, обозначаемого дробью $ \ frac {0} {1} $ </p><p> :: * заканчивается значением 1, обозначаемым дробью $ \ frac {1} {1} $. </p><p> Последовательности Farey от 1 до 5: </p><p> $ {\ bf \ it {F}} _ 1 = \ frac {0} {1}, \ frac {1} {1} $ </p><p></p><p> $ {\ bf \ it {F}} _ 2 = \ frac {0} {1}, \ frac {1} {2}, \ frac {1} {1} $ </p><p></p><p> $ {\ bf \ it {F}} _ 3 = \ frac {0} {1}, \ frac {1} {3}, \ frac {1} {2}, \ frac {2} {3}, \ frac {1} {1} $ </p><p></p><p> $ {\ bf \ it {F}} _ 4 = \ frac {0} {1}, \ frac {1} {4}, \ frac {1} {3}, \ frac {1} {2}, \ frac {2} {3}, \ frac {3} {4}, \ frac {1} {1} $ </p><p></p><p> $ {\ bf \ it {F}} _ 5 = \ frac {0} {1}, \ frac {1} {5}, \ frac {1} {4}, \ frac {1} {3}, \ frac {2} {5}, \ frac {1} {2}, \ frac {3} {5}, \ frac {2} {3}, \ frac {3} {4}, \ frac {4} {5 }, \ frac {1} {1} $ </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>farey</code> - это функция.
    testString: 'assert(typeof farey === "function", "<code>farey</code> is a function.");'
  - text: <code>farey(3)</code> должен возвращать массив
    testString: 'assert(Array.isArray(farey(3)), "<code>farey(3)</code> should return an array");'
  - text: '<code>farey(3)</code> должен возвращать <code>[&quot;1/3&quot;,&quot;1/2&quot;,&quot;2/3&quot;]</code>'
    testString: 'assert.deepEqual(farey(3), ["1/3","1/2","2/3"], "<code>farey(3)</code> should return <code>["1/3","1/2","2/3"]</code>");'
  - text: '<code>farey(4)</code> должен возвращать <code>[&quot;1/4&quot;,&quot;1/3&quot;,&quot;1/2&quot;,&quot;2/4&quot;,&quot;2/3&quot;,&quot;3/4&quot;]</code>'
    testString: 'assert.deepEqual(farey(4), ["1/4","1/3","1/2","2/4","2/3","3/4"], "<code>farey(4)</code> should return <code>["1/4","1/3","1/2","2/4","2/3","3/4"]</code>");'
  - text: '<code>farey(5)</code> должен возвращать <code>[&quot;1/5&quot;,&quot;1/4&quot;,&quot;1/3&quot;,&quot;2/5&quot;,&quot;1/2&quot;,&quot;2/4&quot;,&quot;3/5&quot;,&quot;2/3&quot;,&quot;3/4&quot;,&quot;4/5&quot;]</code>'
    testString: 'assert.deepEqual(farey(5), ["1/5","1/4","1/3","2/5","1/2","2/4","3/5","2/3","3/4","4/5"], "<code>farey(5)</code> should return <code>["1/5","1/4","1/3","2/5","1/2","2/4","3/5","2/3","3/4","4/5"]</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function farey (n) {
  // Good luck!
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
