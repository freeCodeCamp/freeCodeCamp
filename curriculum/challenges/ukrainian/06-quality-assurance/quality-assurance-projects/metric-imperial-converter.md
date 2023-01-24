---
id: 587d8249367417b2b2512c41
title: Метрично-імперський конвертер
challengeType: 4
forumTopicId: 301570
dashedName: metric-imperial-converter
---

# --description--

Створіть повний пакет додатку JavaScript, який функціонально схожий до <a href="https://metric-imperial-converter.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://metric-imperial-converter.freecodecamp.rocks/</a>. Робота над цим проєктом передбачає написання коду за допомогою одного з наступних методів:

- Клонуйте <a href="https://github.com/freeCodeCamp/boilerplate-project-metricimpconverter/" target="_blank" rel="noopener noreferrer nofollow">цей репозиторій GitHub</a> та виконайте свій проєкт локально.
- Використайте <a href="https://replit.com/github/freeCodeCamp/boilerplate-project-metricimpconverter" target="_blank" rel="noopener noreferrer nofollow">наш стартовий проєкт Replit</a> для виконання свого проєкту.
- Для виконання проєкту використайте конструктор сайту на власний вибір. Переконайтеся, що приєднали усі файли з нашого репозиторію GitHub.

Якщо ви використовуєте Replit, виконайте наступні кроки для налаштування проєкту:

-   Почніть з імпорту проєкту на Replit.
-   Потім ви побачите вікно `.replit`.
-   Оберіть `Use run command` та натисніть кнопку `Done`.

Після завершення переконайтеся, що демоверсія проєкту розміщена у відкритому доступі. Потім введіть URL-адресу проєкту в полі «Посилання на рішення». За бажанням введіть посилання на початковий код проєкту в полі «Посилання на GitHub».

# --instructions--

- Завершіть необхідну логіку перетворення у `/controllers/convertHandler.js`
- Завершіть необхідні маршрути у `/routes/api.js`
- Скопіюйте файл `sample.env` до `.env` та відповідно встановіть змінні
- Щоб провести тести, розкоментуйте `NODE_ENV=test` у своєму файлі `.env`
- Щоб запустити тести на консолі, використайте команду `npm run test`. Щоб відкрити консоль Replit, натисніть Ctrl+Shift+P (Cmd на Mac) та введіть «open shell»

Напишіть наступні тести в `tests/1_unit-tests.js`:

- `convertHandler` повинен правильно читати введення цілого числа.
- `convertHandler` повинен правильно читати введення десяткового числа.
- `convertHandler` повинен правильно читати введення дробу.
- `convertHandler` повинен правильно читати введення десяткового дробу.
- `convertHandler` повинен правильно повернути помилку при подвійному дробі (тобто `3/2/3`).
- `convertHandler` повинен правильно приймати ввід `1` за замовчуванням, якщо нічого не введено.
- `convertHandler` повинен правильно читати дійсні введені одиниці.
- `convertHandler` повинен правильно повертати помилку при недійсній введеній одиниці.
- `convertHandler` повинен повернути правильну одиницю для кожної дійсної введеної одиниці.
- `convertHandler` повинен правильно повернути прописаний рядок для кожної дійсної введеної одиниці.
- `convertHandler` повинен правильно перетворювати `gal` у `L`.
- `convertHandler` повинен правильно перетворювати `L` у `gal`.
- `convertHandler` повинен правильно перетворювати `mi` у `km`.
- `convertHandler` повинен правильно перетворювати `km` у `mi`.
- `convertHandler` повинен правильно перетворювати `lbs` у `kg`.
- `convertHandler` повинен правильно перетворювати `kg` у `lbs`.

Напишіть наступні тести в `tests/2_functional-tests.js`:

- Перетворення дійсного вводу, наприклад `10L`: запит `GET` до `/api/convert`.
- Перетворення недійсного вводу, наприклад `32g`: запит `GET` до `/api/convert`.
- Перетворення недійсного числа, наприклад `3/7.2/4kg`: запит `GET` до `/api/convert`.
- Перетворення недійсного числа ТА одиниці, наприклад `3/7.2/4kilomegagram`: запит `GET` до `/api/convert`.
- Перетворення без числа, наприклад `kg`: запит `GET` до `/api/convert`.

# --hints--

Ви можете надати власний проєкт, а не URL-адресу прикладу.

```js
getUserInput => {
  assert(
    !/.*\/metric-imperial-converter\.freecodecamp\.rocks/.test(
      getUserInput('url')
    )
  );
};
```

Ви можете надіслати запит `GET` до `/api/convert` з параметром, що містить прийняті число та одиницю і отримати їх перетвореними. (Підказка: розділіть вхідні дані, знайшовши індекс першого символу, що позначить початок одиниці)

```js

```

Ви можете перетворити `'gal'` у `'L'` і навпаки. (1 гал = 3.78541 л)

```js
async getUserInput => {
  try {
    const data1 = await $.get(getUserInput('url') + '/api/convert?input=1gal');
    assert.equal(data1.returnNum, 3.78541);
    assert.equal(data1.returnUnit, 'L');
    const data2 = await $.get(getUserInput('url') + '/api/convert?input=10gal');
    assert.equal(data2.returnNum, 37.8541);
    assert.equal(data2.returnUnit, 'L');
    const data3 = await $.get(getUserInput('url') + '/api/convert?input=1l');
    assert.equal(data3.returnNum, 0.26417);
    assert.equal(data3.returnUnit, 'gal');
    const data4 = await $.get(getUserInput('url') + '/api/convert?input=10l');
    assert.equal(data4.returnNum, 2.64172);
    assert.equal(data4.returnUnit, 'gal');
  } catch (xhr) {
    throw new Error(xhr.responseText || xhr.message);
  }
};
```

Ви можете перетворити `'lbs'` у `'kg'` і навпаки. (1 фунт = 0.453592 кг)

```js
async getUserInput => {
  try {
    const data1 = await $.get(getUserInput('url') + '/api/convert?input=1lbs');
    assert.equal(data1.returnNum, 0.45359);
    assert.equal(data1.returnUnit, 'kg');
    const data2 = await $.get(getUserInput('url') + '/api/convert?input=10lbs');
    assert.equal(data2.returnNum, 4.53592);
    assert.equal(data2.returnUnit, 'kg');
    const data3 = await $.get(getUserInput('url') + '/api/convert?input=1kg');
    assert.equal(data3.returnNum, 2.20462);
    assert.equal(data3.returnUnit, 'lbs');
    const data4 = await $.get(getUserInput('url') + '/api/convert?input=10kg');
    assert.equal(data4.returnNum, 22.04624);
    assert.equal(data4.returnUnit, 'lbs');
  } catch (xhr) {
    throw new Error(xhr.responseText || xhr.message);
  }
};
```

Ви можете перетворити `'mi'` у `'km'` і навпаки. (1 миля = 1.60934 км)

```js
async getUserInput => {
  try {
    const data1 = await $.get(getUserInput('url') + '/api/convert?input=1mi');
    assert.equal(data1.returnNum, 1.60934);
    assert.equal(data1.returnUnit, 'km');
    const data2 = await $.get(getUserInput('url') + '/api/convert?input=10mi');
    assert.equal(data2.returnNum, 16.0934);
    assert.equal(data2.returnUnit, 'km');
    const data3 = await $.get(getUserInput('url') + '/api/convert?input=1km');
    assert.equal(data3.returnNum, 0.62137);
    assert.equal(data3.returnUnit, 'mi');
    const data4 = await $.get(getUserInput('url') + '/api/convert?input=10km');
    assert.equal(data4.returnNum, 6.21373);
    assert.equal(data4.returnUnit, 'mi');
  } catch (xhr) {
    throw new Error(xhr.responseText || xhr.message);
  }
};
```

Усі вхідні одиниці повинні прийматись в верхньому та нижньому регістрах, однак повинні повертатись в `initUnit` та `returnUnit` в нижньому регістрі; винятком є літри, які повинні бути у верхньому регістрі `'L'`.

```js
async getUserInput => {
  try {
    const data1 = await $.get(getUserInput('url') + '/api/convert?input=1gal');
    assert.equal(data1.initUnit, 'gal');
    assert.equal(data1.returnUnit, 'L');
    const data2 = await $.get(getUserInput('url') + '/api/convert?input=10L');
    assert.equal(data2.initUnit, 'L');
    assert.equal(data2.returnUnit, 'gal');
    const data3 = await $.get(getUserInput('url') + '/api/convert?input=1l');
    assert.equal(data3.initUnit, 'L');
    assert.equal(data3.returnUnit, 'gal');
    const data4 = await $.get(getUserInput('url') + '/api/convert?input=10KM');
    assert.equal(data4.initUnit, 'km');
    assert.equal(data4.returnUnit, 'mi');
  } catch (xhr) {
    throw new Error(xhr.responseText || xhr.message);
  }
};
```

Якщо одиниця виміру недійсна, поверненим буде `'invalid unit'`.

```js
async getUserInput => {
  try {
    const data = await $.get(getUserInput('url') + '/api/convert?input=1min');
    assert(data.error === 'invalid unit' || data === 'invalid unit');
  } catch (xhr) {
    throw new Error(xhr.responseText || xhr.message);
  }
};
```

Якщо число недійсне, поверненим буде `'invalid number'`.

```js
async getUserInput => {
  try {
    const data = await $.get(
      getUserInput('url') + '/api/convert?input=1//2gal'
    );
    assert(data.error === 'invalid number' || data === 'invalid number');
  } catch (xhr) {
    throw new Error(xhr.responseText || xhr.message);
  }
};
```

Якщо одиниця та число недійсні, поверненим буде `'invalid number and unit'`.

```js
async getUserInput => {
  try {
    const data = await $.get(
      getUserInput('url') + '/api/convert?input=1//2min'
    );
    assert(
      data.error === 'invalid number and unit' ||
        data === 'invalid number and unit'
    );
  } catch (xhr) {
    throw new Error(xhr.responseText || xhr.message);
  }
};
```

Ви можете використовувати дроби в параметрі (тобто 5, 1/2, 2.5/6), але якщо нічого не вказано, за замовчуванням буде 1.

```js
async getUserInput => {
  try {
    const data1 = await $.get(getUserInput('url') + '/api/convert?input=mi');
    assert.approximately(data1.initNum, 1, 0.001);
    assert.approximately(data1.returnNum, 1.60934, 0.001);
    assert.equal(data1.returnUnit, 'km');
    const data2 = await $.get(getUserInput('url') + '/api/convert?input=1/5mi');
    assert.approximately(data2.initNum, 1 / 5, 0.1);
    assert.approximately(data2.returnNum, 0.32187, 0.001);
    assert.equal(data2.returnUnit, 'km');
    const data3 = await $.get(
      getUserInput('url') + '/api/convert?input=1.5/7km'
    );
    assert.approximately(data3.initNum, 1.5 / 7, 0.001);
    assert.approximately(data3.returnNum, 0.13315, 0.001);
    assert.equal(data3.returnUnit, 'mi');
    const data4 = await $.get(
      getUserInput('url') + '/api/convert?input=3/2.7km'
    );
    assert.approximately(data4.initNum, 3 / 2.7, 0.001);
    assert.approximately(data4.returnNum, 0.69041, 0.001);
    assert.equal(data4.returnUnit, 'mi');
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

Повернений об'єкт міститиме `initNum`, `initUnit`, `returnNum`, `returnUnit` та `string`, прописуючи одиниці у форматі `'{initNum} {initUnitString} converts to {returnNum} {returnUnitString}'` із результатом, заокругленим до 5-ти символів після коми.

```js
async getUserInput => {
  try {
    const data = await $.get(getUserInput('url') + '/api/convert?input=2mi');
    assert.equal(data.initNum, 2);
    assert.equal(data.initUnit, 'mi');
    assert.approximately(data.returnNum, 3.21868, 0.001);
    assert.equal(data.returnUnit, 'km', 'returnUnit did not match');
    assert.equal(data.string, '2 miles converts to 3.21868 kilometers');
  } catch (xhr) {
    throw new Error(xhr.responseText || xhr.message);
  }
};
```

Усі 16 модульних тестів завершено та успішно пройдено.

```js
async getUserInput => {
  try {
    const getTests = await $.get(getUserInput('url') + '/_api/get-tests');
    assert.isArray(getTests);
    const unitTests = getTests.filter(test => {
      return !!test.context.match(/Unit Tests/gi);
    });
    assert.isAtLeast(unitTests.length, 16, 'At least 16 tests passed');
    unitTests.forEach(test => {
      assert.equal(test.state, 'passed', 'Tests in Passed State');
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

Усі 5 функціональних тестів завершено та успішно пройдено.

```js
async getUserInput => {
  try {
    const getTests = await $.get(getUserInput('url') + '/_api/get-tests');
    assert.isArray(getTests);
    const functTests = getTests.filter(test => {
      return !!test.context.match(/Functional Tests/gi);
    });
    assert.isAtLeast(functTests.length, 5, 'At least 5 tests passed');
    functTests.forEach(test => {
      assert.equal(test.state, 'passed', 'Tests in Passed State');
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
