---
id: 587d7b87367417b2b2512b42
title: Mutate an Array Declared with const
challengeType: 1
forumTopicId: 301206
localeTitle: Мутате массив, объявленный с константой
---

## Description
<section id='description'>
Объявление <code>const</code> имеет много вариантов использования в современном JavaScript. Некоторые разработчики предпочитают назначать все свои переменные, используя <code>const</code> по умолчанию, если только они не знают, что им нужно будет переназначить это значение. Только в этом случае они используют <code>let</code> . Однако важно понимать, что объекты (включая массивы и функции), назначенные переменной с использованием <code>const</code> , по-прежнему изменяемы. Использование объявления <code>const</code> только предотвращает переназначение идентификатора переменной. <blockquote> «использовать строгую»; <br> const s = [5, 6, 7]; <br> s = [1, 2, 3]; // выдает ошибку, пытаясь назначить const <br> s [2] = 45; // работает так же, как и с объявленным массивом var или let <br> console.log (ы); // возвращает [5, 6, 45] </blockquote> Как вы можете видеть, вы можете самостоятельно мутировать объект <code>[5, 6, 7]</code> , а переменная <code>s</code> все равно укажет на измененный массив <code>[5, 6, 45]</code> . Как и все массивы, элементы массива в <code>s</code> изменяемы, но поскольку используется <code>const</code> , вы не можете использовать идентификатор переменной <code>s</code> для указания на другой массив с использованием оператора присваивания.
</section>

## Instructions
<section id='instructions'>
Массив объявляется как <code>const s = [5, 7, 2]</code> . Измените массив на <code>[2, 5, 7]</code> используя различные назначения элементов.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Do not replace <code>const</code> keyword.
    testString: getUserInput => assert(getUserInput('index').match(/const/g));
  - text: <code>s</code> should be a constant variable (by using <code>const</code>).
    testString: getUserInput => assert(getUserInput('index').match(/const\s+s/g));
  - text: Do not change the original array declaration.
    testString: getUserInput => assert(getUserInput('index').match(/const\s+s\s*=\s*\[\s*5\s*,\s*7\s*,\s*2\s*\]\s*;?/g));
  - text: <code>s</code> should be equal to <code>[2, 5, 7]</code>.
    testString: assert.deepEqual(s, [2, 5, 7]);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const s = [5, 7, 2];
function editInPlace() {
  'use strict';
  // change code below this line

  // s = [2, 5, 7]; <- this is invalid

  // change code above this line
}
editInPlace();

```

</div>

</section>

## Solution
<section id='solution'>

```js
const s = [5, 7, 2];
function editInPlace() {
  'use strict';
  // change code below this line

  // s = [2, 5, 7]; <- this is invalid
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
  // change code above this line
}
editInPlace();
```

</section>
