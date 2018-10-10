---
title: Date format
id: 59669d08d75b60482359409f
challengeType: 5
videoUrl: ''
localeTitle: Формат даты
---

## Description
<section id="description"> Задача: <p> Возвращает массив с текущей датой в форматах: </p><p> - 2007-11-23 и </p><p> - Воскресенье, 23 ноября 2007 г. </p><p> Пример вывода: <code>[&#39;2007-11-23&#39;, &#39;Sunday, November 23, 2007&#39;]</code> </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>getDateFormats</code> - это функция.
    testString: 'assert(typeof getDateFormats === "function", "<code>getDateFormats</code> is a function.");'
  - text: Должен возвращать объект.
    testString: 'assert(typeof getDateFormats() === "object", "Should return an object.");'
  - text: Должен возвращать массив с 2 элементами.
    testString: 'assert(getDateFormats().length === 2, "Should returned an array with 2 elements.");'
  - text: Должна вернуть правильную дату в правильном формате
    testString: 'assert.deepEqual(getDateFormats(), dates, equalsMessage);'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function getDateFormats () {
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
