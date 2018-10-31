---
title: Ethiopian multiplication
id: 599d1566a02b571412643b84
challengeType: 5
videoUrl: ''
localeTitle: Эфиопское умножение
---

## Description
<section id="description"><p> Эфиопское умножение - это метод умножения целых чисел, использующий только добавление, удвоение и уменьшение пополам. </p><p> Метод: </p> Возьмите два числа, чтобы их умножить и записать их в верхней части двух столбцов. В левом столбце повторите половину последнего номера, отбрасывая любые остатки и записывая результат ниже последнего в том же столбце, пока не напишите значение 1. В правом столбце многократно удвоите последнее число и запишите результат ниже. остановитесь, когда вы добавите результат в ту же строку, что и в столбце слева. 1. Изучите созданную таблицу и отбросьте любую строку, где значение в левом столбце четное. Суммируйте значения в правой колонке, которые останутся для получения результата умножения исходных двух чисел вместе <p> Например: 17 × 34 </p><p> 17 34 </p><p> Половина первого столбца: </p><p> 17 34 </p><p> 8 </p><p> 4 </p><p> 2 </p><p> 1 </p><p> Удвоение второй колонки: </p><p> 17 34 </p><p> 8 68 </p><p> 4 136 </p><p> 2 272 </p><p> 1 544 </p><p> Stratch-out rows, чья первая ячейка четная: </p><p> 17 34 </p><p> 8 <strike>68</strike> </p><p> 4 <strike>136</strike> </p><p> 2 <strike>272</strike> </p><p> 1 544 </p><p> Суммируйте оставшиеся числа в правом столбце: </p><p> 17 34 </p><p> 8 - </p><p> 4 --- </p><p> 2 --- </p><p> 1 544 </p><p> ==== </p><p> 578 </p><p> Так 17, умноженное на 34, по эфиопскому методу - 578. </p> Задача: <p> Задача состоит в том, чтобы определить три названные функции / методы / процедуры / подпрограммы: </p> один на половину целого числа, один для двойного целого числа, и один, чтобы указать, является ли целое четным. <p> Используйте эти функции для создания функции, которая делает эфиопское умножение. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>eth_mult</code> - это функция.
    testString: 'assert(typeof eth_mult === "function", "<code>eth_mult</code> is a function.");'
  - text: '<code>eth_mult(17,34)</code> должен вернуть <code>578</code> .'
    testString: 'assert.equal(eth_mult(17, 34), 578, "<code>eth_mult(17,34)</code> should return <code>578</code>.");'
  - text: '<code>eth_mult(23,46)</code> должен вернуть <code>1058</code> .'
    testString: 'assert.equal(eth_mult(23, 46), 1058, "<code>eth_mult(23,46)</code> should return <code>1058</code>.");'
  - text: '<code>eth_mult(12,27)</code> должен вернуть <code>324</code> .'
    testString: 'assert.equal(eth_mult(12, 27), 324, "<code>eth_mult(12,27)</code> should return <code>324</code>.");'
  - text: '<code>eth_mult(56,98)</code> должен вернуть <code>5488</code> .'
    testString: 'assert.equal(eth_mult(56, 98), 5488, "<code>eth_mult(56,98)</code> should return <code>5488</code>.");'
  - text: '<code>eth_mult(63,74)</code> должен вернуть <code>4662</code> .'
    testString: 'assert.equal(eth_mult(63, 74), 4662, "<code>eth_mult(63,74)</code> should return <code>4662</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function eth_mult (a, b) {
  // Good luck!
}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
