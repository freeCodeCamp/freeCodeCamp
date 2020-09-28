---
title: Averages/Mode
id: 594d8d0ab97724821379b1e6
challengeType: 5
forumTopicId: 302226
localeTitle: Сред-Mode
---

## Description
<section id='description'>
<p> Напишите программу , чтобы найти <a href="https://en.wikipedia.org/wiki/Mode (statistics)" title="wp: Режим (статистика)">режим</a> значение коллекции. </p><p> Случай, когда коллекция пуста, может быть проигнорирован. Необходимо следить за тем, чтобы режим не был уникальным. </p><p> Если это не подходит или возможно поддерживает общую коллекцию, используйте вектор (массив), если это возможно. Если это не подходит или возможно поддерживает неопределенный тип значения, используйте целые числа. </p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>mode</code> is a function.
    testString: assert(typeof mode === 'function');
  - text: <code>mode([1, 3, 6, 6, 6, 6, 7, 7, 12, 12, 17])</code> should equal <code>[6]</code>
    testString: assert.deepEqual(mode(arr1), [6]);
  - text: <code>mode([1, 2, 4, 4, 1])</code> should equal <code>[1, 4]</code>.
    testString: assert.deepEqual(mode(arr2).sort(), [1, 4]);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function mode(arr) {
  // Good luck!
  return true;
}

```

</div>

### After Tests
<div id='js-teardown'>

```js
const arr1 = [1, 3, 6, 6, 6, 6, 7, 7, 12, 12, 17];
const arr2 = [1, 2, 4, 4, 1];

```

</div>

</section>

## Solution
<section id='solution'>

```js
function mode(arr) {
  const counter = {};
  let result = [];
  let max = 0;
  // for (const i in arr) {
  arr.forEach(el => {
    if (!(el in counter)) {
      counter[el] = 0;
    }
    counter[el]++;

    if (counter[el] === max) {
      result.push(el);
    }
    else if (counter[el] > max) {
      max = counter[el];
      result = [el];
    }
  });
  return result;
}
```

</section>
