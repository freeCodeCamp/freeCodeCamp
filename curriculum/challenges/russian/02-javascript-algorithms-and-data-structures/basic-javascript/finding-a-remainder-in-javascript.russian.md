---
id: 56533eb9ac21ba0edf2244ae
title: Finding a Remainder in JavaScript
challengeType: 1
videoUrl: https://scrimba.com/c/cWP24Ub
forumTopicId: 18184
localeTitle: Поиск остатка в JavaScript
---

## Description
<section id='description'>
Оператор <dfn>остатка</dfn> <code>%</code> дает остаток от деления двух чисел. <strong>пример</strong> <blockquote> 5% 2 = 1, потому что <br> Math.floor (5/2) = 2 (Quotient) <br> 2 * 2 = 4 <br> 5 - 4 = 1 (Остаток) </blockquote> <strong>Применение</strong> <br> В математике число может быть проверено как четное или нечетное, проверяя остаток от деления числа на <code>2</code> . <blockquote> 17% 2 = 1 (17 - нечетное) <br> 48% 2 = 0 (48 равно) </blockquote> <strong>Заметка</strong> <br> Оператор <dfn>остатка</dfn> иногда некорректно называют оператором «модуль». Он очень похож на модуль, но не работает должным образом с отрицательными числами.
</section>

## Instructions
<section id='instructions'>
Установите <code>remainder</code> равный остальной части <code>11</code> деленной на <code>3</code> используя оператор <dfn>остатка</dfn> ( <code>%</code> ).
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The variable <code>remainder</code> should be initialized
    testString: assert(/var\s+?remainder/.test(code));
  - text: The value of <code>remainder</code> should be <code>2</code>
    testString: assert(remainder === 2);
  - text: You should use the <code>%</code> operator
    testString: assert(/\s+?remainder\s*?=\s*?.*%.*;/.test(code));

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

### After Tests
<div id='js-teardown'>

```js
(function(y){return 'remainder = '+y;})(remainder);

```

</div>

</section>

## Solution
<section id='solution'>

```js
var remainder =  11 % 3;
```

</section>
