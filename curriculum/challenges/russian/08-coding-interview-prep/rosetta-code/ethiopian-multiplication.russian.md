---
title: Ethiopian multiplication
id: 599d1566a02b571412643b84
challengeType: 5
forumTopicId: 302257
localeTitle: Эфиопское умножение
---

## Description
<section id='description'>
<p> Эфиопское умножение - это метод умножения целых чисел, использующий только добавление, удвоение и уменьшение пополам. </p><p> Метод: </p> Возьмите два числа, чтобы их умножить и записать их в верхней части двух столбцов. В левом столбце повторите половину последнего номера, отбрасывая любые остатки и записывая результат ниже последнего в том же столбце, пока не напишите значение 1. В правом столбце многократно удвоите последнее число и запишите результат ниже. остановитесь, когда вы добавите результат в ту же строку, что и в столбце слева. 1. Изучите созданную таблицу и отбросьте любую строку, где значение в левом столбце четное. Суммируйте значения в правой колонке, которые останутся для получения результата умножения исходных двух чисел вместе <p> Например: 17 × 34 </p><p> 17 34 </p><p> Половина первого столбца: </p><p> 17 34 </p><p> 8 </p><p> 4 </p><p> 2 </p><p> 1 </p><p> Удвоение второй колонки: </p><p> 17 34 </p><p> 8 68 </p><p> 4 136 </p><p> 2 272 </p><p> 1 544 </p><p> Stratch-out rows, чья первая ячейка четная: </p><p> 17 34 </p><p> 8 <strike>68</strike> </p><p> 4 <strike>136</strike> </p><p> 2 <strike>272</strike> </p><p> 1 544 </p><p> Суммируйте оставшиеся числа в правом столбце: </p><p> 17 34 </p><p> 8 - </p><p> 4 --- </p><p> 2 --- </p><p> 1 544 </p><p> ==== </p><p> 578 </p><p> Так 17, умноженное на 34, по эфиопскому методу - 578. </p> Задача: <p> Задача состоит в том, чтобы определить три названные функции / методы / процедуры / подпрограммы: </p> один на половину целого числа, один для двойного целого числа, и один, чтобы указать, является ли целое четным. <p> Используйте эти функции для создания функции, которая делает эфиопское умножение. </p>
</section>

## Instructions
<section id='instructions'>
The task is to define three named functions/methods/procedures/subroutines:
<ol>
  <li>one to halve an integer,</li>
  <li>one to double an integer, and</li>
  <li>one to state if an integer is even</li>
</ol>
Use these functions to create a function that does Ethiopian multiplication.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>eth_mult</code> is a function.
    testString: assert(typeof eth_mult === 'function');
  - text: <code>eth_mult(17,34)</code> should return <code>578</code>.
    testString: assert.equal(eth_mult(17, 34), 578);
  - text: <code>eth_mult(23,46)</code> should return <code>1058</code>.
    testString: assert.equal(eth_mult(23, 46), 1058);
  - text: <code>eth_mult(12,27)</code> should return <code>324</code>.
    testString: assert.equal(eth_mult(12, 27), 324);
  - text: <code>eth_mult(56,98)</code> should return <code>5488</code>.
    testString: assert.equal(eth_mult(56, 98), 5488);
  - text: <code>eth_mult(63,74)</code> should return <code>4662</code>.
    testString: assert.equal(eth_mult(63, 74), 4662);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function eth_mult(a, b) {
  // Good luck!
}

```

</div>

</section>

## Solution
<section id='solution'>

```js
function eth_mult(a, b) {
  let sum = 0; a = [a]; b = [b];

  let half = a => a / 2,
    double = a => a * 2,
    is_even = a => a % 2 == 0;

  while (a[0] !== 1) {
    a.unshift(Math.floor(half(a[0])));
    b.unshift(double(b[0]));
  }

  for (let i = a.length - 1; i > 0; i -= 1) {
    if (!is_even(a[i])) {
      sum += b[i];
    }
  }
  return sum + b[0];
}
```

</section>
