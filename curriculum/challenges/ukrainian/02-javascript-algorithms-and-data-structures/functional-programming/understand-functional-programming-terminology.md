---
id: 587d7b8e367417b2b2512b5c
title: Розуміння термінології функціонального програмування
challengeType: 1
forumTopicId: 301240
dashedName: understand-functional-programming-terminology
---

# --description--

Команда FCC мала поганий настрій і зараз хоче два види чаю: зелений і чорний. Загальновідомий факт: перепади настрою клієнта - це дуже поширене явище.

Володіючи такою інформацією, нам потрібно буде повторно ввести функцію `getTea` від останнього завдання для обробки різних чайних запитів. Ми можемо змінити `getTea`, щоб прийняти функцію як параметр для того, щоб мати можливість змінювати вид чаю, який готується. Це робить `getTea` більш гнучким, і надає програмісту більше контролю, коли клієнт просить щось змінити.

Та спершу, давайте розглянемо трохи функціональної термінології:

<dfn>Callbacks</dfn> - функції, які висуваються або передаються в іншу функцію, щоб з'ясувати посилання на цю функцію. Можливо, ви вже бачили як вони переходили до інших методів, наприклад в `filter`, функція зворотного виклику повідомляє для JavaScript критерії для фільтрування структурних даних.

Функції, що призначені для змінної, передані в іншу функцію, або навпаки повернені від іншої функції, так само як інше звичайне значення, називається функції <dfn>first class</dfn>. У JavaScript, всі функції - це функції першого класу.

Функції, що приймають функцію як аргумент, або повертають функцію як повернуте значення, називаються <dfn>higher order</dfn> функції.

Коли функції передаються або повертаються від іншої функції, тоді ті функції, які були передані або повернені, можуть називатися <dfn>lambda</dfn>.

# --instructions--

Приготуйте 27 чашок зеленого і 13 чашок чорного чаю і зберігайте їх відповідно у `tea4GreenTeamFCC` та `tea4BlackTeamFCC`. Зазначте, що функція `getTea` була змінена, тому тепер вона приймає функцію як перший аргумент.

Примітка: дані (кількість чашок чаю) надаються як останній аргумент. Ми поговоримо про це більше на подальших заняттях.

# --hints--

Змінна `tea4GreenTeamFCC` повинна мати 27 чашок зеленого чаю для команди.

```js
assert(tea4GreenTeamFCC.length === 27);
```

Змінна `tea4GreenTeamFCC` повинна мати чашки зеленого чаю.

```js
assert(tea4GreenTeamFCC[0] === 'greenTea');
```

Змінна `tea4BlackTeamFCC` повинна містити 13 чашок чорного чаю.

```js
assert(tea4BlackTeamFCC.length === 13);
```

Змінна `tea4BlackTeamFCC` повинна містити чашки з чорним чаєм.

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
