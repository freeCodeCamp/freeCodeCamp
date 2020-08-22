---
id: a105e963526e7de52b219be9
title: Sorted Union
isRequired: true
challengeType: 5
forumTopicId: 16077
localeTitle: Сортированный союз
---

## Description
<section id='description'>
Напишите функцию, которая берет два или более массива и возвращает новый массив уникальных значений в порядке исходных предоставленных массивов. Другими словами, все значения, присутствующие во всех массивах, должны быть включены в их первоначальный порядок, но без дубликатов в конечном массиве. Уникальные номера должны быть отсортированы по их первоначальному порядку, но окончательный массив не следует сортировать в числовом порядке. Проверьте примеры тестов. Не забудьте использовать <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask,</a> если вы застряли. Попробуйте подключить программу. Напишите свой собственный код.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])</code> should return <code>[1, 3, 2, 5, 4]</code>.
    testString: assert.deepEqual(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]), [1, 3, 2, 5, 4]);
  - text: <code>uniteUnique([1, 2, 3], [5, 2, 1])</code> should return <code>[1, 2, 3, 5]</code>.
    testString: assert.deepEqual(uniteUnique([1, 2, 3], [5, 2, 1]), [1, 2, 3, 5]);
  - text: <code>uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])</code> should return <code>[1, 2, 3, 5, 4, 6, 7, 8]</code>.
    testString: assert.deepEqual(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]), [1, 2, 3, 5, 4, 6, 7, 8]);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function uniteUnique(arr) {
  return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

```

</div>

</section>

## Solution
<section id='solution'>

```js
function uniteUnique(arr) {
  return [].slice.call(arguments).reduce(function(a, b) {
    return [].concat(a, b.filter(function(e) {return a.indexOf(e) === -1;}));
  }, []);
}
```

</section>
