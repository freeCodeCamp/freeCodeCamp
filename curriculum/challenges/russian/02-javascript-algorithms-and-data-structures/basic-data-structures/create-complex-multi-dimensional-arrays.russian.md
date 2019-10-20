---
id: 587d7b7b367417b2b2512b16
title: Create complex multi-dimensional arrays
challengeType: 1
forumTopicId: 301159
localeTitle: Создание сложных многомерных массивов
---

## Description
<section id='description'>
Потрясающие! Вы только что узнали тонну о массивах! Это был довольно высокий уровень обзора, и есть еще много возможностей узнать о работе с массивами, многое из которых вы увидите в последующих разделах. Но прежде чем перейти к просмотру <dfn>объектов</dfn> , давайте взглянем еще раз и посмотрим, как массивы могут стать немного более сложными, чем то, что мы видели в предыдущих задачах. Одна из самых мощных функций при рассмотрении массивов как структур данных состоит в том, что массивы могут содержать или даже полностью состоять из других массивов. Мы видели массивы, которые содержат массивы в предыдущих задачах, но довольно простые. Однако массивы могут содержать бесконечную глубину массивов, которые могут содержать другие массивы, каждый со своими произвольными уровнями глубины и т. Д. Таким образом, массив может очень быстро стать очень сложной структурой данных, известной как <dfn>многомерный</dfn> или вложенный массив. Рассмотрим следующий пример: <blockquote> let nestedArray = [// верхний или первый уровень - внешний массив <br> [&#39;deep&#39;], // массив в массиве, 2 уровня глубины <br> [ <br> [&#39;глубже&#39;], [&#39;более глубокий&#39;] // 2 массива вложенные 3 уровня в глубину <br> ], <br> [ <br> [ <br> [&#39;deepest&#39;], [&#39;deepest&#39;] // 2 массива вложенные 4 уровня в глубину <br> ], <br> [ <br> [ <br> [&#39;deepest-est?&#39;] // массив вложен в 5 уровней в глубину <br> ] <br> ] <br> ] <br> ]; </blockquote> Хотя этот пример может показаться запутанным, этот уровень сложности не является неслыханным или даже необычным при работе с большими объемами данных. Тем не менее, мы все же можем очень легко получить доступ к самым глубоким уровням массива этого комплекса с помощью скобок: <blockquote> console.log (nestedArray [2] [1] [0] [0] [0]); <br> // logs: самый глубокий? </blockquote> И теперь, когда мы знаем, где эта часть данных, мы можем ее сбросить, если нам нужно: <blockquote> nestedArray [2] [1] [0] [0] [0] = &#39;еще глубже&#39;; <br><br> console.log (nestedArray [2] [1] [0] [0] [0]); <br> // теперь журналы: еще глубже </blockquote>
</section>

## Instructions
<section id='instructions'>
Мы определили переменную <code>myNestedArray</code> , равную массиву. Измените <code>myNestedArray</code> , используя любую комбинацию <dfn>строк</dfn> , <dfn>чисел</dfn> и <dfn>логических</dfn> элементов для элементов данных, так что он имеет ровно пять уровней глубины (помните, что внешний массив - это уровень 1). Где-то на третьем уровне, включите строку <code>&#39;deep&#39;</code> , на четвертом уровне, включите строку <code>&#39;deeper&#39;</code> , а на пятом уровне включите строку <code>&#39;deepest&#39;</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myNestedArray</code> should contain only numbers, booleans, and strings as data elements
    testString: 'assert.strictEqual((function(arr) { let flattened = (function flatten(arr) { const flat = [].concat(...arr); return flat.some (Array.isArray) ? flatten(flat) : flat; })(arr); for (let i = 0; i < flattened.length; i++) { if ( typeof flattened[i] !== ''number'' && typeof flattened[i] !== ''string'' && typeof flattened[i] !== ''boolean'') { return false } } return true })(myNestedArray), true);'
  - text: <code>myNestedArray</code> should have exactly 5 levels of depth
    testString: 'assert.strictEqual((function(arr) {let depth = 0;function arrayDepth(array, i, d) { if (Array.isArray(array[i])) {  arrayDepth(array[i], 0, d + 1);} else {  depth = (d > depth) ? d : depth;}if (i < array.length) {  arrayDepth(array, i + 1, d);}  }arrayDepth(arr, 0, 0);return depth;})(myNestedArray), 4);'
  - text: <code>myNestedArray</code> should contain exactly one occurrence of the string <code>"deep"</code> on an array nested 3 levels deep
    testString: assert((function howDeep(array, target, depth = 0) {return array.reduce((combined, current) => {if (Array.isArray(current)) {  return combined.concat(howDeep(current, target, depth + 1));} else if (current === target) {  return combined.concat(depth);} else {  return combined;}}, []);})(myNestedArray, 'deep').length === 1 && (function howDeep(array, target, depth = 0) {return array.reduce((combined, current) => {if (Array.isArray(current)) {  return combined.concat(howDeep(current, target, depth + 1));} else if (current === target) {  return combined.concat(depth);} else {  return combined;}}, []);})(myNestedArray, 'deep')[0] === 2);
  - text: <code>myNestedArray</code> should contain exactly one occurrence of the string <code>"deeper"</code> on an array nested 4 levels deep
    testString: assert((function howDeep(array, target, depth = 0) {return array.reduce((combined, current) => {if (Array.isArray(current)) {  return combined.concat(howDeep(current, target, depth + 1));} else if (current === target) {  return combined.concat(depth);} else {  return combined;}}, []);})(myNestedArray, 'deeper').length === 1 && (function howDeep(array, target, depth = 0) {return array.reduce((combined, current) => {if (Array.isArray(current)) {  return combined.concat(howDeep(current, target, depth + 1));} else if (current === target) {  return combined.concat(depth);} else {  return combined;}}, []);})(myNestedArray, 'deeper')[0] === 3);
  - text: <code>myNestedArray</code> should contain exactly one occurrence of the string <code>"deepest"</code> on an array nested 5 levels deep
    testString: assert((function howDeep(array, target, depth = 0) {return array.reduce((combined, current) => {if (Array.isArray(current)) {  return combined.concat(howDeep(current, target, depth + 1));} else if (current === target) {  return combined.concat(depth);} else {  return combined;}}, []);})(myNestedArray, 'deepest').length === 1 && (function howDeep(array, target, depth = 0) {return array.reduce((combined, current) => {if (Array.isArray(current)) {  return combined.concat(howDeep(current, target, depth + 1));} else if (current === target) {  return combined.concat(depth);} else {  return combined;}}, []);})(myNestedArray, 'deepest')[0] === 4);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let myNestedArray = [
  // change code below this line
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array'],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
  // change code above this line
];

```

</div>

</section>

## Solution
<section id='solution'>

```js
let myNestedArray = [
  // change code below this line
  ['unshift', ['deep', ['deeper', ['deepest']]],false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array'],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
  // change code above this line
];
```

</section>
