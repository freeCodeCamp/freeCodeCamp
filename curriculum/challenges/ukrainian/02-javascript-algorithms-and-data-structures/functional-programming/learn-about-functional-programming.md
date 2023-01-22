---
id: 587d7b8d367417b2b2512b5b
title: Дізнайтеся про функціональне програмування
challengeType: 1
forumTopicId: 301233
dashedName: learn-about-functional-programming
---

# --description--

Функціональне програмування - це стиль програмування, в якому рішення - це прості, ізольовані функції, без будь-яких побічних ефектів, що виходять за межі області дії функції: `INPUT -> PROCESS -> OUTPUT`

Функціональне програмування передбачає:

1) Ізольовані функції: без будь-якої залежності від стану програми, що містить глобальні змінні, які можуть бути змінені

2) Чиста функція: один і той же вхід завжди дає однаковий вихід

3) Функції з обмеженими побічними ефектами: будь-які зміни чи мутації стану програми за межами функції ретельно контролюються

# --instructions--

Учасники FreeCodeCamp полюблять чай.

У редакторі коді `prepareTea` і `getTea` для вас вже визначено функції. Викличте функцію `getTea`, щоб отримати 40 чашок чаю для команди, і збережіть їх у змінній `tea4TeamFCC`.

# --hints--

Змінна `tea4TeamFCC` повинна містити 40 чашок чаю для команди.

```js
assert(tea4TeamFCC.length === 40);
```

Змінна `tea4TeamFCC` повинна містити чашки зеленого чаю.

```js
assert(tea4TeamFCC[0] === 'greenTea');
```

# --seed--

## --seed-contents--

```js
// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4TeamFCC = null;
// Only change code above this line
```

# --solutions--

```js
const prepareTea = () => 'greenTea';

const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }

  return teaCups;
};

const tea4TeamFCC = getTea(40); 
```
