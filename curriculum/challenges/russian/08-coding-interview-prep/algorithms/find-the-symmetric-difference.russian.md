---
id: a3f503de51cf954ede28891d
title: Find the Symmetric Difference
challengeType: 5
forumTopicId: 301611
localeTitle: Найти симметричную разницу
---

## Description
<section id='description'>
Создайте функцию, которая принимает два или более массива и возвращает массив <dfn>симметричной разности</dfn> ( <code>△</code> или <code>⊕</code> ) предоставленных массивов. Для двух множеств (например, для множества <code>A = {1, 2, 3}</code> и множества <code>B = {2, 3, 4}</code> ) математический термин «симметричная разность» двух множеств представляет собой включающее все элементы исходных множеств, не принадлежащие одновременно обоим исходным множествам ( <code>A △ B = C = {1, 4}</code> ). Для каждой дополнительной симметричной разности, которую вы принимаете (допустим, множество <code>D = {2, 3}</code> ), вы должны получить набор с элементами, которые находятся в любом из двух наборов, но не в обоих одновременно ( <code>C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}</code> ). Результирующий массив должен содержать только уникальные значения ( <em>без дубликатов</em> ). Не забудьте использовать <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask,</a> если вы застряли. Попробуйте парное программирование. Напишите свой собственный код.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>sym([1, 2, 3], [5, 2, 1, 4])</code> should return <code>[3, 4, 5]</code>.
    testString: assert.sameMembers(sym([1, 2, 3], [5, 2, 1, 4]), [3, 4, 5]);
  - text: <code>sym([1, 2, 3], [5, 2, 1, 4])</code> should contain only three elements.
    testString: assert.equal(sym([1, 2, 3], [5, 2, 1, 4]).length, 3);
  - text: <code>sym([1, 2, 3, 3], [5, 2, 1, 4])</code> should return <code>[3, 4, 5]</code>.
    testString: assert.sameMembers(sym([1, 2, 3, 3], [5, 2, 1, 4]), [3, 4, 5]);
  - text: <code>sym([1, 2, 3, 3], [5, 2, 1, 4])</code> should contain only three elements.
    testString: assert.equal(sym([1, 2, 3, 3], [5, 2, 1, 4]).length, 3);
  - text: <code>sym([1, 2, 3], [5, 2, 1, 4, 5])</code> should return <code>[3, 4, 5]</code>.
    testString: assert.sameMembers(sym([1, 2, 3], [5, 2, 1, 4, 5]), [3, 4, 5]);
  - text: <code>sym([1, 2, 3], [5, 2, 1, 4, 5])</code> should contain only three elements.
    testString: assert.equal(sym([1, 2, 3], [5, 2, 1, 4, 5]).length, 3);
  - text: <code>sym([1, 2, 5], [2, 3, 5], [3, 4, 5])</code> should return <code>[1, 4, 5]</code>
    testString: assert.sameMembers(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]), [1, 4, 5]);
  - text: <code>sym([1, 2, 5], [2, 3, 5], [3, 4, 5])</code> should contain only three elements.
    testString: assert.equal(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]).length, 3);
  - text: <code>sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])</code> should return <code>[1, 4, 5]</code>.
    testString: assert.sameMembers(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]), [1, 4, 5]);
  - text: <code>sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])</code> should contain only three elements.
    testString: assert.equal(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]).length, 3);
  - text: <code>sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])</code> should return <code>[2, 3, 4, 6, 7]</code>.
    testString: assert.sameMembers(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]), [2, 3, 4, 6, 7]);
  - text: <code>sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])</code> should contain only five elements.
    testString: assert.equal(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]).length, 5);
  - text: <code>sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])</code> should return <code>[1, 2, 4, 5, 6, 7, 8, 9]</code>.
    testString: assert.sameMembers(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]), [1, 2, 4, 5, 6, 7, 8, 9]);
  - text: <code>sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])</code> should contain only eight elements.
    testString: assert.equal(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]).length, 8);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function sym(args) {
  return args;
}

sym([1, 2, 3], [5, 2, 1, 4]);

```

</div>

</section>

## Solution
<section id='solution'>

```js
function sym() {
  var arrays = [].slice.call(arguments);
  return arrays.reduce(function (symDiff, arr) {
    return symDiff.concat(arr).filter(function (val, idx, theArr) {
      return theArr.indexOf(val) === idx
        && (symDiff.indexOf(val) === -1 || arr.indexOf(val) === -1);
    });
  });
}
sym([1, 2, 3], [5, 2, 1, 4]);
```

</section>
