---
title: Averages-Mode
id: 594d8d0ab97724821379b1e6
challengeType: 5
videoUrl: ''
localeTitle: Сред-Mode
---

## Description
<section id="description"><p> Напишите программу , чтобы найти <a href="https://en.wikipedia.org/wiki/Mode (statistics)" title="wp: Режим (статистика)">режим</a> значение коллекции. </p><p> Случай, когда коллекция пуст, может быть проигнорирован. Необходимо следить за тем, чтобы режим не был уникальным. </p><p> Если это не подходит или возможно поддерживать общую коллекцию, используйте вектор (массив), если это возможно. Если это не подходит или возможно поддерживать неопределенный тип значения, используйте целые числа. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>mode</code> - это функция.
    testString: 'assert(typeof mode === "function", "<code>mode</code> is a function.");'
  - text: '<code>mode([1, 3, 6, 6, 6, 6, 7, 7, 12, 12, 17])</code> должен равняться <code>[6]</code>'
    testString: 'assert.deepEqual(mode(arr1), [6], "<code>mode([1, 3, 6, 6, 6, 6, 7, 7, 12, 12, 17])</code> should equal <code>[6]</code>");'
  - text: '<code>mode([1, 2, 4, 4, 1])</code> должен быть равен <code>[1, 4]</code> .'
    testString: 'assert.deepEqual(mode(arr2).sort(), [1, 4], "<code>mode([1, 2, 4, 4, 1])</code> should equal <code>[1, 4]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function mode (arr) {
  // Good luck!
  return true;
}

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
