---
id: a3f503de51cf954ede28891d
title: Find the Symmetric Difference
challengeType: 5
videoUrl: ''
localeTitle: Найти симметричную разницу
---

## Description
<section id="description"> Создайте функцию, которая принимает два или более массива и возвращает массив <dfn>симметричной разности</dfn> ( <code>△</code> или <code>⊕</code> ) предоставленных массивов. Для двух наборов (например, множества <code>A = {1, 2, 3}</code> и множества <code>B = {2, 3, 4}</code> ) математический термин «симметричная разность» двух множеств представляет собой набор элементов, которые находятся в любом из два набора, но не в обоих ( <code>A △ B = C = {1, 4}</code> ). Для каждой дополнительной симметричной разности, которую вы принимаете (скажем, на множестве <code>D = {2, 3}</code> ), вы должны получить набор с элементами, которые находятся в любом из двух наборов, но не оба ( <code>C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}</code> ). Результирующий массив должен содержать только уникальные значения ( <em>без дубликатов</em> ). Не забудьте использовать <a href="http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514" target="_blank">Read-Search-Ask,</a> если вы застряли. Попробуйте подключить программу. Напишите свой собственный код. </section>

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert.sameMembers(sym([1, 2, 3], [5, 2, 1, 4]), [3, 4, 5], "<code>sym([1, 2, 3], [5, 2, 1, 4])</code> should return <code>[3, 4, 5]</code>.");'
  - text: ''
    testString: 'assert.equal(sym([1, 2, 3], [5, 2, 1, 4]).length, 3, "<code>sym([1, 2, 3], [5, 2, 1, 4])</code> should contain only three elements.");'
  - text: '<code>sym([1, 2, 3, 3], [5, 2, 1, 4])</code> должен вернуться <code>[3, 4, 5]</code> .'
    testString: 'assert.sameMembers(sym([1, 2, 3, 3], [5, 2, 1, 4]), [3, 4, 5], "<code>sym([1, 2, 3, 3], [5, 2, 1, 4])</code> should return <code>[3, 4, 5]</code>.");'
  - text: '<code>sym([1, 2, 3, 3], [5, 2, 1, 4])</code> должен содержать только три элемента.'
    testString: 'assert.equal(sym([1, 2, 3, 3], [5, 2, 1, 4]).length, 3, "<code>sym([1, 2, 3, 3], [5, 2, 1, 4])</code> should contain only three elements.");'
  - text: '<code>sym([1, 2, 3], [5, 2, 1, 4, 5])</code> должен вернуться <code>[3, 4, 5]</code> .'
    testString: 'assert.sameMembers(sym([1, 2, 3], [5, 2, 1, 4, 5]), [3, 4, 5], "<code>sym([1, 2, 3], [5, 2, 1, 4, 5])</code> should return <code>[3, 4, 5]</code>.");'
  - text: ''
    testString: 'assert.equal(sym([1, 2, 3], [5, 2, 1, 4, 5]).length, 3, "<code>sym([1, 2, 3], [5, 2, 1, 4, 5])</code> should contain only three elements.");'
  - text: '<code>sym([1, 2, 5], [2, 3, 5], [3, 4, 5])</code> должны возвращать <code>[1, 4, 5]</code>'
    testString: 'assert.sameMembers(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]), [1, 4, 5], "<code>sym([1, 2, 5], [2, 3, 5], [3, 4, 5])</code> should return <code>[1, 4, 5]</code>");'
  - text: ''
    testString: 'assert.equal(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]).length, 3, "<code>sym([1, 2, 5], [2, 3, 5], [3, 4, 5])</code> should contain only three elements.");'
  - text: ''
    testString: 'assert.sameMembers(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]), [1, 4, 5], "<code>sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])</code> should return <code>[1, 4, 5]</code>.");'
  - text: '<code>sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])</code> должны содержать только три элемента.'
    testString: 'assert.equal(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]).length, 3, "<code>sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])</code> should contain only three elements.");'
  - text: '<code>sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])</code> должны возвращать <code>[2, 3, 4, 6, 7]</code> .'
    testString: 'assert.sameMembers(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]), [2, 3, 4, 6, 7], "<code>sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])</code> should return <code>[2, 3, 4, 6, 7]</code>.");'
  - text: '<code>sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])</code> должны содержать только пять элементов.'
    testString: 'assert.equal(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]).length, 5, "<code>sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])</code> should contain only five elements.");'
  - text: '<code>sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])</code> должны возвращать <code>[1, 2, 4, 5, 6, 7, 8, 9]</code> .'
    testString: 'assert.sameMembers(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]), [1, 2, 4, 5, 6, 7, 8, 9], "<code>sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])</code> should return <code>[1, 2, 4, 5, 6, 7, 8, 9]</code>.");'
  - text: '<code>sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])</code> должны содержать только восемь элементов.'
    testString: 'assert.equal(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]).length, 8, "<code>sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])</code> should contain only eight elements.");'

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
// solution required
```
</section>
