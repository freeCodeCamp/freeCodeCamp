---
id: 587d7b8e367417b2b2512b5c
title: Термінологія функційного програмування
challengeType: 1
forumTopicId: 301240
dashedName: understand-functional-programming-terminology
---

# --description--

У команди fCC змінився настрій і тепер вони хочуть два типи чаю: зелений та чорний. Загальновідомий факт: перепади настрою клієнта є надзвичайно поширеним явищем.

З цією інформацією нам потрібно знову відвідати функцію `getTea`, щоб обробити різні чайні запити. Ми можемо змінити `getTea`, щоб прийняти функцію як аргумент і вона могла заварювати інші види чаю. Це робить `getTea` гнучкішою і надає програмісту більше контролю, якщо клієнт просить щось змінити.

Але спочатку розглянемо трішки функційної термінології:

<dfn>Функція зворотного виклику (callback)</dfn> – це функції, які передаються іншим функціям, щоб вирішити, коли та як їх викликати. Можливо, ви бачили, як деякі передаються іншим методам. Наприклад, у `filter` функція зворотного виклику повідомляє JavaScript критерії для фільтрації масиву.

Функції, які можна присвоїти до змінної, передати до іншої функції або навпаки повернути з іншої функції, як інше звичайне значення, називають функціями <dfn>першого класу</dfn>. У JavaScript всі функції є функціями першого класу.

Функції, які приймають функцію як аргумент або повертають функцію як повернуте значення, називають функціями <dfn>вищого порядку</dfn>.

Якщо функції передаються або повертаються з іншої функції, тоді ті функції, які були передані або повернені, можуть називатися <dfn>лямбдою</dfn>.

# --instructions--

Приготуйте 27 чашок зеленого і 13 чашок чорного чаю та збережіть їх у змінних `tea4GreenTeamFCC` та `tea4BlackTeamFCC`. Зверніть увагу, що функція `getTea` була змінена, тому тепер вона приймає функцію як перший аргумент.

Примітка: дані (кількість чашок чаю) надаються як останній аргумент. Ми обговоримо це в наступних завданнях.

# --hints--

Змінна `tea4GreenTeamFCC` повинна містити 27 чашок зеленого чаю для команди.

```js
assert(tea4GreenTeamFCC.length === 27);
```

Змінна `tea4GreenTeamFCC` повинна містити чашки зеленого чаю.

```js
assert(tea4GreenTeamFCC[0] === 'greenTea');
```

Змінна `tea4BlackTeamFCC` повинна містити 13 чашок чорного чаю.

```js
assert(tea4BlackTeamFCC.length === 13);
```

Змінна `tea4BlackTeamFCC` повинна містити чашки чорного чаю.

```js
assert(tea4BlackTeamFCC[0] === 'blackTea');
```

# --seed--

## --seed-contents--

```js
// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = null;
const tea4BlackTeamFCC = null;
// Only change code above this line

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);
```

# --solutions--

```js
const prepareGreenTea = () => 'greenTea';
const prepareBlackTea = () => 'blackTea';

const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
```
