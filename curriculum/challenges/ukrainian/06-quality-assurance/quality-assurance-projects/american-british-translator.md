---
id: 5e601c0d5ac9d0ecd8b94afe
title: Перекладач з американської на британську
challengeType: 4
forumTopicId: 462358
dashedName: american-british-translator
---

# --description--

Створіть повний пакет додатку JavaScript, який функціонально схожий до <a href="https://american-british-translator.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://american-british-translator.freecodecamp.rocks/</a>. Робота над цим проєктом передбачає написання коду за допомогою одного з наступних методів:

-   Клонуйте <a href="https://github.com/freeCodeCamp/boilerplate-project-american-british-english-translator/" target="_blank" rel="noopener noreferrer nofollow">цей репозиторій GitHub</a> та виконайте свій проєкт локально.
-   Використайте <a href="https://replit.com/github/freeCodeCamp/boilerplate-project-american-british-english-translator" target="_blank" rel="noopener noreferrer nofollow">наш стартовий проєкт Replit</a> для виконання свого проєкту.
-   Для виконання проєкту використайте конструктор сайту на власний вибір. Переконайтеся, що приєднали усі файли з нашого репозиторію GitHub.

Якщо ви використовуєте Replit, виконайте наступні кроки для налаштування проєкту:

-   Почніть з імпорту проєкту на Replit.
-   Потім ви побачите вікно `.replit`.
-   Оберіть `Use run command` та натисніть кнопку `Done`.

Після завершення переконайтеся, що демоверсія проєкту розміщена у відкритому доступі. Потім введіть URL-адресу проєкту в полі «Посилання на рішення». За бажанням введіть посилання на початковий код проєкту в полі «Посилання на GitHub».

# --instructions--

-   Уся логіка може перейти до `/components/translator.js`
-   Завершіть маршрут `/api/translate` в `/routes/api.js`
-   Створіть усі модульні/функціональні тести у `tests/1_unit-tests.js` та `tests/2_functional-tests.js`
-   Перегляньте файли JavaScript у `/components` для правопису та термінів, які повинен перекласти ваш додаток
-   Щоб запустити тести на Replit, встановіть `NODE_ENV` на `test` без лапок у файлі `.env`
-   Щоб запустити тести на консолі, використайте команду `npm run test`. Щоб відкрити консоль Replit, натисніть Ctrl+Shift+P (Cmd на Mac) та введіть «open shell»

Напишіть наступні тести в `tests/1_unit-tests.js`:

-   Перекладіть `Mangoes are my favorite fruit.` на британську англійську
-   Перекладіть `I ate yogurt for breakfast.` на британську англійську
-   Перекладіть `We had a party at my friend's condo.` на британську англійську
-   Перекладіть `Can you toss this in the trashcan for me?` на британську англійську
-   Перекладіть `The parking lot was full.` на британську англійську
-   Перекладіть `Like a high tech Rube Goldberg machine.` на британську англійську
-   Перекладіть `To play hooky means to skip class or work.` на британську англійську
-   Перекладіть `No Mr. Bond, I expect you to die.` на британську англійську
-   Перекладіть `Dr. Grosh will see you now.` на британську англійську
-   Перекладіть `Lunch is at 12:15 today.` на британську англійську
-   Перекладіть `We watched the footie match for a while.` на американську англійську
-   Перекладіть `Paracetamol takes up to an hour to work.` на американську англійську
-   Перекладіть `First, caramelise the onions.` на американську англійську
-   Перекладіть `I spent the bank holiday at the funfair.` на американську англійську
-   Перекладіть `I had a bicky then went to the chippy.` на американську англійську
-   Перекладіть `I've just got bits and bobs in my bum bag.` на американську англійську
-   Перекладіть `The car boot sale at Boxted Airfield was called off.` на американську англійську
-   Перекладіть `Have you met Mrs Kalyani?` на американську англійську
-   Перекладіть `Prof Joyner of King's College, London.` на американську англійську
-   Перекладіть `Tea time is usually around 4 or 4.30.` на американську англійську
-   Виділіть переклад у `Mangoes are my favorite fruit.`
-   Виділіть переклад у `I ate yogurt for breakfast.`
-   Виділіть переклад у `We watched the footie match for a while.`
-   Виділіть переклад у `Paracetamol takes up to an hour to work.`

Напишіть наступні тести в `tests/2_functional-tests.js`:

-   Переклад із полями тексту та локалі: запит POST до `/api/translate`
-   Переклад із полями тексту та недійсної локалі: запит POST до `/api/translate`
-   Переклад із відсутнім полем тексту: запит POST до `/api/translate`
-   Переклад із відсутнім полем локалі: запит POST до `/api/translate`
-   Переклад із порожнім текстом: запит POST до `/api/translate`
-   Переклад із текстом, якому не потрібен переклад: запит POST до `/api/translate`

# --hints--

Ви повинні надати власний проєкт, а не URL-адресу прикладу.

```js
(getUserInput) => {
  assert(
    !/.*\/american-british-translator\.freecodecamp\.rocks/.test(
      getUserInput('url')
    )
  );
};
```

Ви можете надіслати запит `POST` до `/api/translate` із тілом, що містить `text` з текстом для перекладу та `locale` з `american-to-british` або `british-to-american`. Повернений об'єкт міститиме наданий `text` та `translation` з перекладеним текстом.

```js
async (getUserInput) => {
  try {
    const text = 'Mangoes are my favorite fruit.';
    const locale = 'american-to-british';
    const output = {
      text: 'Mangoes are my favorite fruit.',
      translation:
        'Mangoes are my <span class="highlight">favourite</span> fruit.'
    };
    let data = await fetch(getUserInput('url') + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.property(parsed, 'text');
    assert.property(parsed, 'translation');
    assert.deepEqual(parsed, output);
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

Маршрут `/api/translate` повинен обробляти те, як написаний час американською та британською англійською. Наприклад, пів на десяту пишеться «10.30» британською та «10:30» американською. Елемент `span` повинен повністю обгорнути рядок часу, тобто `<span class="highlight">10:30</span>`.

```js
async (getUserInput) => {
  try {
    const text = 'Lunch is at 12:15 today.';
    const locale = 'american-to-british';
    const output = {
      text: text,
      translation: 'Lunch is at <span class="highlight">12.15</span> today.'
    };
    let data = await fetch(getUserInput('url') + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.property(parsed, 'text');
    assert.property(parsed, 'translation');
    assert.deepEqual(parsed, output);
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

Маршрут `/api/translate` також повинен обробляти скорочення титулів та гоноративів американською та британською. Наприклад, Доктор Райт пишеться «Dr Wright» британською та «Dr. Wright» американською. Перегляньте `/components/american-to-british-titles.js` для різних титулів, які повинен обробляти ваш додаток.

```js
async (getUserInput) => {
  try {
    const text = 'Dr. Grosh will see you now.';
    const locale = 'american-to-british';
    const output = {
      text: text,
      translation: '<span class="highlight">Dr</span> Grosh will see you now.'
    };
    let data = await fetch(getUserInput('url') + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.property(parsed, 'text');
    assert.property(parsed, 'translation');
    assert.deepEqual(parsed, output);
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

Обгорніть будь-які перекладені правописи чи терміни тегами `<span class="highlight">...</span>`, щоб вони були зеленими.

```js
async (getUserInput) => {
  try {
    const text = 'Mangoes are my favorite fruit.';
    const locale = 'american-to-british';
    const output = {
      text: 'Mangoes are my favorite fruit.',
      translation:
        'Mangoes are my <span class="highlight">favourite</span> fruit.'
    };
    let data = await fetch(getUserInput('url') + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.property(parsed, 'text');
    assert.property(parsed, 'translation');
    assert.deepEqual(parsed, output);
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

Якщо одне чи більше необхідних полів відсутні, поверніть `{ error: 'Required field(s) missing' }`.

```js
async (getUserInput) => {
  try {
    const locale = 'american-to-british';
    let data = await fetch(getUserInput('url') + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.property(parsed, 'error');
    assert.equal(parsed.error, 'Required field(s) missing');
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

Якщо `text` порожній, поверніть `{ error: 'No text to translate' }`

```js
async (getUserInput) => {
  try {
    const locale = 'american-to-british';
    let data = await fetch(getUserInput('url') + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: '', locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.property(parsed, 'error');
    assert.equal(parsed.error, 'No text to translate');
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

Якщо `locale` не відповідає одній із вказаних локалей, поверніть `{ error: 'Invalid value for locale field' }`.

```js
async (getUserInput) => {
  try {
    const text = "Ceci n'est pas une pipe";
    const locale = 'french-to-american';
    let data = await fetch(getUserInput('url') + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.property(parsed, 'error');
    assert.equal(parsed.error, 'Invalid value for locale field');
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

Якщо `text` не потрібен переклад, поверніть `"Everything looks good to me!"` для значення `translation`.

```js
async (getUserInput) => {
  try {
    const locale = 'british-to-american';
    const output = {
      text: 'SaintPeter and nhcarrigan give their regards!',
      translation: 'Everything looks good to me!'
    };
    let data = await fetch(getUserInput('url') + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: output.text, locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.isObject(parsed);
    assert.property(parsed, 'text');
    assert.property(parsed, 'translation');
    assert.deepEqual(parsed, output);
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

Усі 24 модульних тестів завершено та успішно пройдено.

```js
async (getUserInput) => {
  try {
    const getTests = await $.get(getUserInput('url') + '/_api/get-tests');
    assert.isArray(getTests);
    const unitTests = getTests.filter((test) => {
      return !!test.context.match(/Unit Tests/gi);
    });
    assert.isAtLeast(unitTests.length, 24, 'At least 24 tests passed');
    unitTests.forEach((test) => {
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

Усі 6 функціональних тестів завершено та успішно пройдено.

```js
async (getUserInput) => {
  try {
    const getTests = await $.get(getUserInput('url') + '/_api/get-tests');
    assert.isArray(getTests);
    const functTests = getTests.filter((test) => {
      return !!test.context.match(/Functional Tests/gi);
    });
    assert.isAtLeast(functTests.length, 6, 'At least 6 tests passed');
    functTests.forEach((test) => {
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
