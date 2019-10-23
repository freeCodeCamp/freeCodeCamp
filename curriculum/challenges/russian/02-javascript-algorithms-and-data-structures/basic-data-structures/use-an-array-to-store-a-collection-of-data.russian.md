---
id: 587d7b7e367417b2b2512b20
title: Use an Array to Store a Collection of Data
challengeType: 1
forumTopicId: 301167
localeTitle: Используйте массив для хранения коллекции данных
---

## Description
<section id='description'>
Ниже приведен пример простейшей реализации структуры данных массива. Это известно как <dfn>одномерный массив</dfn> , что означает, что он имеет только один уровень, или что он не имеет других массивов, вложенных в него. Обратите внимание, что он содержит <dfn>булевы</dfn> , <dfn>строки</dfn> и <dfn>числа</dfn> , среди прочих допустимых типов данных JavaScript: <blockquote> let simpleArray = [&#39;one&#39;, 2, &#39;three&#39;, true, false, undefined, null]; <br> console.log (simpleArray.length); <br> // журналы 7 </blockquote> У всех массивов есть свойство length, которое, как показано выше, может быть очень легко доступно с помощью синтаксиса <code>Array.length</code> . Более сложную реализацию массива можно увидеть ниже. Это известно как <dfn>многомерный массив</dfn> или массив, содержащий другие массивы. Обратите внимание, что этот массив также содержит <dfn>объекты</dfn> JavaScript, которые мы рассмотрим очень внимательно в следующем разделе, но пока все, что вам нужно знать, это то, что массивы также способны хранить сложные объекты. <blockquote> пусть complexArray = [ <br> [ <br> { <br> один: 1, <br> два: 2 <br> }, <br> { <br> три: 3, <br> четыре: 4 <br> } <br> ], <br> [ <br> { <br> a: &quot;a&quot;, <br> b: &quot;b&quot; <br> }, <br> { <br> c: &quot;c&quot;, <br> d: &quot;d&quot; <br> } <br> ] <br> ]; </blockquote>
</section>

## Instructions
<section id='instructions'>
Мы определили переменную, называемую <code>yourArray</code> . Заполните инструкцию, присвоив массив из не менее 5 элементов в длину переменной <code>yourArray</code> . Ваш массив должен содержать по крайней мере одну <dfn>строку</dfn> , одно <dfn>число</dfn> и одно <dfn>логическое значение</dfn> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: yourArray is an array
    testString: assert.strictEqual(Array.isArray(yourArray), true);
  - text: <code>yourArray</code> is at least 5 elements long
    testString: assert.isAtLeast(yourArray.length, 5);
  - text: <code>yourArray</code> contains at least one <code>boolean</code>
    testString: assert(yourArray.filter( el => typeof el === 'boolean').length >= 1);
  - text: <code>yourArray</code> contains at least one <code>number</code>
    testString: assert(yourArray.filter( el => typeof el === 'number').length >= 1);
  - text: <code>yourArray</code> contains at least one <code>string</code>
    testString: assert(yourArray.filter( el => typeof el === 'string').length >= 1);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let yourArray; // change this line

```

</div>

</section>

## Solution
<section id='solution'>

```js
let yourArray = ['a string', 100, true, ['one', 2], 'another string'];
```

</section>
