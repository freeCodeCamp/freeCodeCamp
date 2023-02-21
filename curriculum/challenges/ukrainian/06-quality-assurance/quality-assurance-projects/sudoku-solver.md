---
id: 5e601bf95ac9d0ecd8b94afd
title: Розв'язувач судоку
challengeType: 4
forumTopicId: 462357
dashedName: sudoku-solver
---

# --description--

Створіть повний пакет додатку JavaScript, який функціонально схожий до <a href="https://sudoku-solver.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://sudoku-solver.freecodecamp.rocks/</a>. Робота над цим проєктом передбачає написання коду за допомогою одного з наступних методів:

-   Клонуйте <a href="https://github.com/freecodecamp/boilerplate-project-sudoku-solver" target="_blank" rel="noopener noreferrer nofollow">цей репозиторій GitHub</a> та виконайте свій проєкт локально.
-   Використайте <a href="https://replit.com/github/freeCodeCamp/boilerplate-project-sudoku-solver" target="_blank" rel="noopener noreferrer nofollow">наш стартовий проєкт Replit</a> для виконання свого проєкту.
-   Для виконання проєкту використайте конструктор сайту на власний вибір. Переконайтеся, що приєднали усі файли з нашого репозиторію GitHub.

Якщо ви використовуєте Replit, виконайте наступні кроки для налаштування проєкту:

-   Почніть з імпорту проєкту на Replit.
-   Потім ви побачите вікно `.replit`.
-   Оберіть `Use run command` та натисніть кнопку `Done`.

Після завершення переконайтеся, що демоверсія проєкту розміщена у відкритому доступі. Потім введіть URL-адресу проєкту в полі «Посилання на рішення». За бажанням введіть посилання на початковий код проєкту в полі «Посилання на GitHub».

# --instructions--

- Уся логіка головоломки може перейти до `/controllers/sudoku-solver.js`
  - Функція `validate` повинна приймати наданий рядок головоломки та перевіряти, чи в ньому є 81 дійсних символів для вводу.
  - Функції `check` повинні перевіряти *поточний* стан дошки.
  - Функція `solve` повинна обробляти вирішення будь-якого наданого дійсного рядка головоломки, а не лише тестові вводи та вирішення. Від вас очікується написання логіки, яка б вирішувала це.
- Уся логіка маршруту може перейти до `/routes/api.js`
- Перегляньте файл `puzzle-strings.js` у `/controllers` для прикладів головоломок, які повинен розв'язувати ваш додаток
- Щоб запустити тести завдання на цій сторінці, встановіть `NODE_ENV` на `test` без лапок у файлі `.env`
- Щоб запустити тести на консолі, використайте команду `npm run test`. Щоб відкрити консоль Replit, натисніть Ctrl+Shift+P (Cmd на Mac) та введіть «open shell»

Напишіть наступні тести в `tests/1_unit-tests.js`:

-   Логіка обробляє дійсний рядок головоломки з 81 символом
-   Логіка обробляє рядок головоломки з недійсними символами (не 1-9 або `.`)
-   Логіка обробляє рядок головоломки, довжина якого не 81 символ
-   Логіка обробляє дійсне розміщення рядочка
-   Логіка обробляє недійсне розміщення рядочка
-   Логіка обробляє дійсне розміщення стовпчика
-   Логіка обробляє недійсне розміщення стовпчика
-   Логіка обробляє дійсне розміщення області (сітка 3x3)
-   Логіка обробляє недійсне розміщення області (сітка 3x3)
-   Дійсні рядки головоломки проходять розв’язувач
-   Недійсні рядки головоломки не проходять розв’язувач
-   Розв'язувач повертає вирішення для невирішеної головоломки

Напишіть наступні тести в `tests/2_functional-tests.js`

-   Вирішіть головоломку з дійсним рядком головоломки: запит POST до `/api/solve`
-   Вирішіть головоломку з відсутнім рядком головоломки: запит POST до `/api/solve`
-   Вирішіть головоломку з недійсними символами: запит POST до `/api/solve`
-   Вирішіть головоломку з неправильною довжиною: запит POST до `/api/solve`
-   Вирішіть головоломку, яку неможливо вирішити: запит POST до `/api/solve`
-   Перевірте розміщення головоломки з усіма полями: запит POST до `/api/check`
-   Перевірте розміщення головоломки з одним конфліктом розміщення: запит POST до `/api/check`
-   Перевірте розміщення головоломки з декількома конфліктами розміщення: запит POST до `/api/check`
-   Перевірте розміщення головоломки з усіма конфліктами розміщення: запит POST до `/api/check`
-   Перевірте розміщення головоломки з відсутніми необхідними полями: запит POST до `/api/check`
-   Перевірте розміщення головоломки з недійсними символами: запит POST до `/api/check`
-   Перевірте розміщення головоломки з неправильною довжиною: запит POST до `/api/check`
-   Перевірте розміщення головоломки з недійсною координатою розміщення: запит POST до `/api/check`
-   Перевірте розміщення головоломки з недійсним значенням розміщення: запит POST до `/api/check`

# --hints--

Ви повинні надати власний проєкт, а не URL-адресу прикладу.

```js
(getUserInput) => {
  const url = getUserInput('url');
  assert(!/.*\/sudoku-solver\.freecodecamp\.rocks/.test(getUserInput('url')));
};
```

Ви можете надіслати запит `POST` до `/api/solve` з даними форми, що містять `puzzle`, яка буде рядком з комбінації чисел (1-9) та крапок `.` для представлення порожніх місць. Повернений об'єкт міститиме властивість `solution` з вирішеною головоломкою.

```js
async (getUserInput) => {
  const input =
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const output =
    '769235418851496372432178956174569283395842761628713549283657194516924837947381625';
  const data = await fetch(getUserInput('url') + '/api/solve', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ puzzle: input })
  });
  const parsed = await data.json();
  assert.property(parsed, 'solution');
  assert.equal(parsed.solution, output);
};
```

Якщо об'єкт, надісланий до `/api/solve` не має `puzzle`, поверненим значенням буде `{ error: 'Required field missing' }`

```js
async (getUserInput) => {
  const input =
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const output = 'Required field missing';
  const data = await fetch(getUserInput('url') + '/api/solve', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ notpuzzle: input })
  });
  const parsed = await data.json();
  assert.property(parsed, 'error');
  assert.equal(parsed.error, output);
};
```

Якщо головоломка, надіслана до `/api/solve`, містить значення, які не є числами або крапками, поверненим значенням буде `{ error: 'Invalid characters in puzzle' }`

```js
async (getUserInput) => {
  const input =
    'AA9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const output = 'Invalid characters in puzzle';
  const data = await fetch(getUserInput('url') + '/api/solve', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ puzzle: input })
  });
  const parsed = await data.json();
  assert.property(parsed, 'error');
  assert.equal(parsed.error, output);
};
```

Якщо головоломка, надіслана до `/api/solve`, містить більше чи менше за 81 символ, поверненим значенням буде `{ error: 'Expected puzzle to be 81 characters long' }`

```js
async (getUserInput) => {
  const inputs = [
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6.',
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6...'
  ];
  const output = 'Expected puzzle to be 81 characters long';
  for (const input of inputs) {
    const data = await fetch(getUserInput('url') + '/api/solve', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ puzzle: input })
    });
    const parsed = await data.json();
    assert.property(parsed, 'error');
    assert.equal(parsed.error, output);
  }
};
```

Якщо головоломка, надіслана до `/api/solve`, недійсна або не може бути вирішеною, поверненим значенням буде `{ error: 'Puzzle cannot be solved' }`

```js
async (getUserInput) => {
  const input =
    '9.9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const output = 'Puzzle cannot be solved';
  const data = await fetch(getUserInput('url') + '/api/solve', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ puzzle: input })
  });
  const parsed = await data.json();
  assert.property(parsed, 'error');
  assert.equal(parsed.error, output);
};
```

Ви можете надіслати запит `POST` до `/api/check` з об'єктом, який містить `puzzle`, `coordinate` та `value`, де `coordinate` є буквою від А до I (представляє рядочок) і супроводжується числом від 1 до 9 (представляє стовпчик), а `value` є числом від 1 до 9.

```js
async (getUserInput) => {
  const input =
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const coordinate = 'A1';
  const value = '7';
  const data = await fetch(getUserInput('url') + '/api/check', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ puzzle: input, coordinate, value })
  });
  const parsed = await data.json();
  assert.property(parsed, 'valid');
  assert.isTrue(parsed.valid);
};
```

Поверненим значенням запиту `POST` до `/api/check` буде об'єкт, який містить властивість `valid`, де `true` означає, що число можна розмістити на заданій координаті, та `false`, якщо ні. Якщо false, повернений об'єкт також міститиме властивість `conflict`, яка є масивом із рядками `"row"`, `"column"` та/або `"region"`, залежно від того, чому розміщення недійсне.

```js
async (getUserInput) => {
  const input =
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const coordinate = 'A1';
  const value = '1';
  const conflict = ['row', 'column'];
  const data = await fetch(getUserInput('url') + '/api/check', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ puzzle: input, coordinate, value })
  });
  const parsed = await data.json();
  assert.property(parsed, 'valid');
  assert.isFalse(parsed.valid);
  assert.property(parsed, 'conflict');
  assert.include(parsed.conflict, 'row');
  assert.include(parsed.conflict, 'column');
};
```

Якщо `value`, надіслане до `/api/check`, вже розміщене в `puzzle` на цій `coordinate`, поверненим значенням буде об'єкт, який містить властивість `valid` із `true`, якщо `value` не конфліктує.

```js
async (getUserInput) => {
  const input =
  '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const coordinate = 'C3';
  const value = '2';
  const data = await fetch(getUserInput('url') + '/api/check', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ puzzle: input, coordinate, value })
  });
  const parsed = await data.json();
  assert.property(parsed, 'valid');
  assert.isTrue(parsed.valid);
};
```

Якщо головоломка, надіслана до `/api/check`, містить символи, які не є числами або крапками, поверненим значенням буде `{ error: 'Invalid characters in puzzle' }`

```js
async (getUserInput) => {
  const input =
    'AA9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const coordinate = 'A1';
  const value = '1';
  const output = 'Invalid characters in puzzle';
  const data = await fetch(getUserInput('url') + '/api/check', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ puzzle: input, coordinate, value })
  });
  const parsed = await data.json();
  assert.property(parsed, 'error');
  assert.equal(parsed.error, output);
};
```

Якщо головоломка, надіслана до `/api/check`, містить більше чи менше за 81 символ, поверненим значенням буде `{ error: 'Expected puzzle to be 81 characters long' }`

```js
async (getUserInput) => {
  const inputs = [
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6.',
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6...'
  ];
  const coordinate = 'A1';
  const value = '1';
  const output = 'Expected puzzle to be 81 characters long';
  for (const input of inputs) {
    const data = await fetch(getUserInput('url') + '/api/check', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ puzzle: input, coordinate, value })
    });
    const parsed = await data.json();
    assert.property(parsed, 'error');
    assert.equal(parsed.error, output);
  }
};
```

Якщо об'єкт, надісланий до `/api/check`, не має `puzzle`, `coordinate` або `value`, поверненим значенням буде `{ error: 'Required field(s) missing' }`

```js
async (getUserInput) => {
  const inputs = [
    {
      puzzle: '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..',
      value: '1',
    },
    {
      puzzle: '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..',
      coordinate: 'A1',
    },
    {
      coordinate: 'A1',
      value: '1'
    }
  ];
  for (const input of inputs) {
    const output = 'Required field(s) missing';
    const data = await fetch(getUserInput('url') + '/api/check', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input)
    });
    const parsed = await data.json();
    assert.property(parsed, 'error');
    assert.equal(parsed.error, output);
  }
};
```

Якщо координата, надіслана до `api/check`, не вказує на наявну клітинку сітки, поверненим значенням буде `{ error: 'Invalid coordinate'}`

```js
async (getUserInput) => {
  const input =
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const output = 'Invalid coordinate';
  const coordinates = ['A0', 'A10', 'J1', 'A', '1', 'XZ18'];
  const value = '7';
  for (const coordinate of coordinates) {
    const data = await fetch(getUserInput('url') + '/api/check', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ puzzle: input, coordinate, value })
    });
    const parsed = await data.json();
    assert.property(parsed, 'error');
    assert.equal(parsed.error, output);
  }
};
```

Якщо `value`, надіслане до `/api/check`, не є числом від 1 до 9, поверненим значенням буде `{ error: 'Invalid value' }`

```js
async (getUserInput) => {
  const input =
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const output = 'Invalid value';
  const coordinate = 'A1';
  const values = ['0', '10', 'A'];
  for (const value of values) {
    const data = await fetch(getUserInput('url') + '/api/check', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ puzzle: input, coordinate, value })
    });
    const parsed = await data.json();
    assert.property(parsed, 'error');
    assert.equal(parsed.error, output);
  }
};
```

Усі 12 модульних тестів завершено та успішно пройдено.

```js
async (getUserInput) => {
  try {
    const getTests = await $.get(getUserInput('url') + '/_api/get-tests');
    assert.isArray(getTests);
    const unitTests = getTests.filter((test) => {
      return !!test.context.match(/Unit\s*Tests/gi);
    });
    assert.isAtLeast(unitTests.length, 12, 'At least 12 tests passed');
    unitTests.forEach((test) => {
      assert.equal(test.state, 'passed', 'Test in Passed State');
      assert.isAtLeast(
        test.assertions.length,
        1,
        'At least one assertion per test'
      );
    });
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

Усі 14 функціональних тестів завершено та успішно пройдено.

```js
async (getUserInput) => {
  try {
    const getTests = await $.get(getUserInput('url') + '/_api/get-tests');
    assert.isArray(getTests);
    const functTests = getTests.filter((test) => {
      return !!test.context.match(/Functional\s*Tests/gi);
    });
    assert.isAtLeast(functTests.length, 14, 'At least 14 tests passed');
    functTests.forEach((test) => {
      assert.equal(test.state, 'passed', 'Test in Passed State');
      assert.isAtLeast(
        test.assertions.length,
        1,
        'At least one assertion per test'
      );
    });
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

# --solutions--

```js
/**
  Backend challenges don't need solutions,
  because they would need to be tested against a full working project.
  Please check our contributing guidelines to learn more.
*/
```
