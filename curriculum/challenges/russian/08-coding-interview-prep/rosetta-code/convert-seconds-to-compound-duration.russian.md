---
title: Convert seconds to compound duration
id: 596fd036dc1ab896c5db98b1
challengeType: 5
videoUrl: ''
localeTitle: Преобразование секунд в составную продолжительность
---

## Description
<section id="description"> Задача: <p> Внедрите функцию, которая: </p> принимает положительное целое число, представляющее продолжительность в секундах в качестве входных данных (например, <code>100</code> ), и возвращает строку, которая показывает ту же самую длительность, разложенную на недели, дни, часы, минуты и секунды, как описано ниже (например, « <code>1 min, 40 sec</code> «). <p> Продемонстрируйте, что он проходит следующие три теста: </p><p style="font-size:115%; margin:1em 0 0 0"> Испытательные случаи </p><table><tbody><tr><th> номер ввода </th><th> номер выхода </th></tr><tr><td> 7259 </td><td> <code>2 hr, 59 sec</code> </td> </tr><tr><td> 86400 </td><td> <code>1 d</code> </td> </tr><tr><td> 6000000 </td><td> <code>9 wk, 6 d, 10 hr, 40 min</code> </td> </tr></tbody></table><p style="font-size:115%; margin:1em 0 0 0"> Детали </p> Следует использовать следующие пять единиц: <table><tbody><tr><th> Ед. изм </th><th> суффикс, используемый для вывода </th><th> преобразование </th></tr><tr><td> неделю </td><td> <code>wk</code> </td> <td> 1 неделя = 7 дней </td></tr><tr><td> день </td><td> <code>d</code> </td> <td> 1 день = 24 часа </td></tr><tr><td> час </td><td> <code>hr</code> </td> <td> 1 час = 60 минут </td></tr><tr><td> минут </td><td> <code>min</code> </td> <td> 1 минута = 60 секунд </td></tr><tr><td> второй </td><td> <code>sec</code> </td> <td></td></tr></tbody></table> Тем не менее, включают только количества с ненулевыми значениями на выходе (например, return « <code>1 d</code> », а не « <code>0 wk, 1 d, 0 hr, 0 min, 0 sec</code> »). Увеличивайте более высокий приоритет блоков по сравнению с меньшими (например, возврат <code>2 min, 10 sec</code> а не <code>1 min, 70 sec</code> или <code>130 sec</code> ). Обозначьте форматирование, показанное в тестовых сценариях (количества, отсортированные от наибольшего до наименьшего и разделенные запятой + пробелом, значение и единица каждая величина разделяется пробелом). <p></p><hr style="margin:1em 0;"><p></p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>convertSeconds</code> - это функция.
    testString: 'assert(typeof convertSeconds === "function", "<code>convertSeconds</code> is a function.");'
  - text: '<code>convertSeconds(7259)</code> должен возвращаться <code>2 hr, 59 sec</code> .'
    testString: 'assert.equal(convertSeconds(testCases[0]), results[0], "<code>convertSeconds(7259)</code> should return <code>2 hr, 59 sec</code>.");'
  - text: <code>convertSeconds(86400)</code> должен возвращать <code>1 d</code> .
    testString: 'assert.equal(convertSeconds(testCases[1]), results[1], "<code>convertSeconds(86400)</code> should return <code>1 d</code>.");'
  - text: '<code>convertSeconds(6000000)</code> должен возвращать <code>9 wk, 6 d, 10 hr, 40 min</code> .'
    testString: 'assert.equal(convertSeconds(testCases[2]), results[2], "<code>convertSeconds(6000000)</code> should return <code>9 wk, 6 d, 10 hr, 40 min</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function convertSeconds (sec) {
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
