---
id: 5e601bf95ac9d0ecd8b94afd
title: Програма для розв'язування судоку
challengeType: 4
forumTopicId: 462357
dashedName: sudoku-solver
---

# --description--

Створіть повний пакет додатку JavaScript, який функціонально схожий до <a href="https://sudoku-solver.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://sudoku-solver.freecodecamp.rocks/</a>. Робота над цим проєктом включатиме написання коду одним з наступних методів:

-   Клонуйте <a href="https://github.com/freecodecamp/boilerplate-project-sudoku-solver" target="_blank" rel="noopener noreferrer nofollow">цей репозиторій GitHub</a> та виконайте свій проєкт локально.
-   Використайте <a href="https://replit.com/github/freeCodeCamp/boilerplate-project-sudoku-solver" target="_blank" rel="noopener noreferrer nofollow">наш стартовий проєкт Replit</a> для виконання свого проєкту.
-   Для завершення проєкту використовуйте вибраний вами розробник сайтів. Переконайтеся, що зберегли усі файли з нашого репозиторію GitHub.

Коли ви завершили, переконайтеся, що ця демоверсія вашого проєкту розміщена у відкритому місці. Потім введіть URL-адресу у поле `Solution Link`. При необхідності, також введіть посилання на джерело коду вашого проєкту у полі `GitHub Link`.

# --instructions--

- Уся логіка головоломки може ввійти в `/controllers/sudoku-solver.js`
  - Функція `validate` повинна взяти вказаний рядок головоломки й перевірити його, чи є в ньому 81 допустимий символ для входу.
  - Функції `check` повинні бути перевіреними відповідно до статусу *current* на сторінці.
  - Функція `solve` повинна опрацьовувати вирішення будь-якого заданого рядка допустимої головоломки, а не тільки входу та вирішенню тесту. Щоб вирішити це, ви маєте розшифрувати логіку.
- Вся логіка маршрутизації може переміститися в `/routes/api.js`
- Подивіться на файл `puzzle-strings.js` в `/controllers` для деяких зразків головоломок, які має розв'язати ваша програма
- Щоб запустити завдання на цій сторінці, налаштуйте `NODE_ENV` на `test` без лапок у файлі `.env`
- Щоб запустити завдання, використовуйте команду `npm run test`. Щоб відкрити консоль Replit, натисніть Ctrl+Shift+P (Cmd, якщо з Mac) та наберіть "open shell"

Напишіть наступні тести в `tests/1_unit-tests.js`:

-   Логіка обробляє допустимий рядок з 81 символом
-   Логіка опрацьовує рядок головоломки з доступними символами (не 1-9 чи `.`)
-   Логіка опрацьовує рядок головоломки, який не містить 81 символ
-   Логіка опрацьовує допустиме розміщення рядка
-   Логіка опрацьовує недопустиме розміщення рядка
-   Логіка опрацьовує допустиме розміщення стовпця
-   Логіка опрацьовує недопустиме розміщення стовпця
-   Логіка опрацьовує допустиме розміщення області (сітка 3x3)
-   Логіка опрацьовує недопустиме розміщення області (сітка 3x3)
-   Допустимі рядки головоломки передають вирішення
-   Недопустимі рядки головоломки не передають вирішення
-   Розв'язувач повертає очікуване рішення для незавершеного завдання

Напишіть наступні тести в `tests/2_functional-tests.js`

-   Розв'яжіть головоломку з допустимим рядком головоломки: запит POST на `/api/solve`
-   Розв'яжіть головоломку з пропущеним рядком головоломки: запит POST на `/api/solve`
-   Розв'яжіть головоломку з недопустимими символами: запит POST на `/api/solve`
-   Розв'яжіть головоломку з неправильною довжиною: запит POST на `/api/solve`
-   Розв'яжіть головоломку, яка не може бути розв'язана: запит POST на `/api/solve`
-   Перевірте розміщення головоломки з усіма полями: запит POST на `/api/check`
-   Перевірте розміщення головоломки з одним конфліктом: запит POST на `/api/check`
-   Перевірте головоломку з декількома конфліктами: запит POST на `/api/check`
-   Перевірте розміщення головоломки з усіма конфліктами: запит POST на `/api/check`
-   Перевірте розміщення головоломки з пропущеними необхідними полями: запит POST на `/api/check`
-   Перевірте розміщення головоломки з недопустимими символами: запит POST на `/api/check`
-   Перевірте розміщення головоломки з неправильною довжиною: запит POST на `/api/check`
-   Перевірте розміщення головоломки з недопустимим розміщенням позиції (координат): запит POST на `/api/check`
-   Перевірте розміщення головоломки з недопустимим розміщенням значення: запит POST на `/api/check`

# --hints--

Вам необхідно вказати свій власний проєкт, а не приклад URL-адреси.

```js
(getUserInput) => {
  const url = getUserInput('url');
  assert(!/.*\/sudoku-solver\.freecodecamp\.rocks/.test(getUserInput('url')));
};
```

Ви можете `POST` `/api/solve` з даними форми, які містять `puzzle`, який буде рядком з комбінації чисел (1-9) та періодів `.`, щоб зобразити пробіли. Повернений об'єкт буде містити властивість `solution` з вирішеною головоломкою.

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

Якщо об'єкт, представлений в `/api/solve` відсутній `puzzle`, зворотне значення буде `{error: 'Required field missing'}`

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

Якщо головоломка, представлена в `/api/solve` містить значення, які не є числами чи періодами, то зворотне значення буде `{ error: 'Invalid characters in puzzle' }`

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

Якщо головоломка, представлена в `/api/solve` містить більше чи менше ніж 81 символу, то зворотне значення буде `{ error: 'Expected puzzle to be 81 characters long' }`

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

Якщо головоломка, представлена в `/api/solve` недопустима чи не може бути розв'язаною, то зворотне значення буде `{ error: 'Puzzle cannot be solved' }`

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

Ви можете `POST` на об'єкт `/api/check`, який містить `puzzle`, `coordinate`, і `value`, де `coordinate` - букви A-I, які позначають рядок, потім числа 1-9, які позначають стовпець і `value` - числа 1-9.

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

Зворотне значення від`POST` до `/api/check` буде об'єкт, який містить властивість `valid`, яка є `true` якщо номер може бути розміщеним у запропоновану координату і `false` якщо ні. Якщо неправильно, то повернений об'єкт також буде містити властивість `conflict`, яка є масивом з рядками `"row"`, `"column"`, і /or `"region"`, в залежності від того, що робить розміщення недопустимим.

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

Якщо `value` представлене в `/api/check` уже поміщене в `puzzle` на ту `coordinate`, то зворотне значення буде об'єкт, в якому є властивість `valid` з `true`, якщо `value` не суперечливий.

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

Якщо головоломка представлена в `/api/check` містить значення, які не є числами чи періодами, зворотне значення буде `{ error: 'Invalid characters in puzzle' }`

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

Якщо головоломка представлена в `/api/check` містить більше чи менше ніж 81 символ, то зворотне значення буде `{ error: 'Expected puzzle to be 81 characters long' }`

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

If the object submitted to `/api/check` is missing `puzzle`, `coordinate` or `value`, the returned value will be `{ error: 'Required field(s) missing' }`

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

Якщо координата представлена в `api/check` не вказує на чинну ланку сітки, то зворотне значення буде `{ error: 'Invalid coordinate'}`

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

If the `value` submitted to `/api/check` is not a number between 1 and 9, the returned value will be `{ error: 'Invalid value' }`

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

Усі 12 модульних тестів завершено та успішно пройдено. Дивіться `/tests/1_unit-tests.js` для очікуваного поводження об'єкту, вам слід написати тести.

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

Усі 14 функціональних тестів завершено та успішно пройдено. See `/tests/2_functional-tests.js` for the expected functionality you should write tests for.

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
