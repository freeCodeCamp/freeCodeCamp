---
id: 56533eb9ac21ba0edf2244ae
title: Finding a Remainder in JavaScript
challengeType: 1
videoUrl: ''
localeTitle: Поиск остатка в JavaScript
---

## Description
<section id="description"> Оператор <dfn>остатка</dfn> <code>%</code> дает остаток от деления двух чисел. <strong>пример</strong> <blockquote> 5% 2 = 1, потому что <br> Math.floor (5/2) = 2 (Quotient) <br> 2 * 2 = 4 <br> 5 - 4 = 1 (Остаток) </blockquote> <strong>Применение</strong> <br> В математике число может быть проверено как четное или нечетное, проверяя остаток от деления числа на <code>2</code> . <blockquote> 17% 2 = 1 (17 - нечетное) <br> 48% 2 = 0 (48 равно) </blockquote> <strong>Заметка</strong> <br> Оператор <dfn>остатка</dfn> иногда некорректно называют оператором «модуль». Он очень похож на модуль, но не работает должным образом с отрицательными числами. </section>

## Instructions
<section id="instructions"> Установите <code>remainder</code> равный остальной части <code>11</code> деленной на <code>3</code> используя оператор <dfn>остатка</dfn> ( <code>%</code> ). </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>remainder</code> переменной должен быть инициализирован
    testString: 'assert(/var\s+?remainder/.test(code), "The variable <code>remainder</code> should be initialized");'
  - text: Стоимость <code>remainder</code> должна быть равна <code>2</code>
    testString: 'assert(remainder === 2, "The value of <code>remainder</code> should be <code>2</code>");'
  - text: Вы должны использовать оператор <code>%</code>
    testString: 'assert(/\s+?remainder\s*?=\s*?.*%.*;/.test(code), "You should use the <code>%</code> operator");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Only change code below this line

var remainder;

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
