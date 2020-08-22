---
id: a5deed1811a43193f9f1c841
title: Drop it
isRequired: true
challengeType: 5
forumTopicId: 16010
localeTitle: Брось это
---

## Description
<section id='description'>
Учитывая массив <code>arr</code> , выполните итерацию и удаление каждого элемента, начиная с первого элемента (индекс 0) до тех пор, пока функция <code>func</code> вернет <code>true</code> когда итерационный элемент пройдет через него. Затем возвращаем остальную часть массива после выполнения условия, иначе <code>arr</code> должен быть возвращен как пустой массив. Не забудьте использовать <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask,</a> если вы застряли. Попробуйте подключить программу. Напишите свой собственный код.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>dropElements([1, 2, 3, 4], function(n) {return n >= 3;})</code> should return <code>[3, 4]</code>.
    testString: assert.deepEqual(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}), [3, 4]);
  - text: <code>dropElements([0, 1, 0, 1], function(n) {return n === 1;})</code> should return <code>[1, 0, 1]</code>.
    testString: assert.deepEqual(dropElements([0, 1, 0, 1], function(n) {return n === 1;}), [1, 0, 1]);
  - text: <code>dropElements([1, 2, 3], function(n) {return n > 0;})</code> should return <code>[1, 2, 3]</code>.
    testString: assert.deepEqual(dropElements([1, 2, 3], function(n) {return n > 0;}), [1, 2, 3]);
  - text: <code>dropElements([1, 2, 3, 4], function(n) {return n > 5;})</code> should return <code>[]</code>.
    testString: assert.deepEqual(dropElements([1, 2, 3, 4], function(n) {return n > 5;}), []);
  - text: <code>dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;})</code> should return <code>[7, 4]</code>.
    testString: assert.deepEqual(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}), [7, 4]);
  - text: <code>dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;})</code> should return <code>[3, 9, 2]</code>.
    testString: assert.deepEqual(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}), [3, 9, 2]);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function dropElements(arr, func) {
  // Drop them elements.
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });

```

</div>

</section>

## Solution
<section id='solution'>

```js
function dropElements(arr, func) {
  // Drop them elements.
  while (arr.length && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}
```

</section>
