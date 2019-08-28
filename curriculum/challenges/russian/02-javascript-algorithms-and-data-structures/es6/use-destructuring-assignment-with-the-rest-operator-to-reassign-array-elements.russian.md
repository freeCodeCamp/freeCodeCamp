---
id: 587d7b8a367417b2b2512b4c
title: Use Destructuring Assignment with the Rest Operator to Reassign Array Elements
challengeType: 1
videoUrl: ''
localeTitle: Назначение Destructuring с оператором Rest для переназначения элементов массива
---

## Description
<section id='description'>
В некоторых ситуациях, связанных с разрушением массива, мы могли бы захотеть собрать остальные элементы в отдельный массив. Результат аналогичен <code>Array.prototype.slice()</code> , как показано ниже: <blockquote> const [a, b, ... arr] = [1, 2, 3, 4, 5, 7]; <br> console.log (a, b); // 1, 2 <br> console.log (обр); // [3, 4, 5, 7] </blockquote> Переменные <code>a</code> и <code>b</code> принимают первое и второе значения из массива. После этого из-за присутствия оператора отдыха <code>arr</code> получает остальные значения в виде массива. Элемент rest работает корректно только как последняя переменная в списке. Как и в случае, вы не можете использовать оператор rest, чтобы поймать субарей, который не содержит последний элемент исходного массива.
</section>

## Instructions
<section id='instructions'>
undefined
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>arr</code> should be <code>[3,4,5,6,7,8,9,10]</code>
    testString: assert(arr.every((v, i) => v === i + 3) && arr.length === 8);
  - text: Destructuring should be used.
    testString: getUserInput => assert(getUserInput('index').match(/\[\s*\w*\s*,\s*\w*\s*,\s*...\w+\s*\]/g));
  - text: <code>Array.slice()</code> should not be used.
    testString: getUserInput => assert(!getUserInput('index').match(/slice/g));
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  // change code below this line
  arr = list; // change this
  // change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];

```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
