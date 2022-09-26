---
id: 5e601c0d5ac9d0ecd8b94afe
title: Перекладач американської та британської англійської мови
challengeType: 4
forumTopicId: 462358
dashedName: american-british-translator
---

# --description--

Створіть повний пакет додатку JavaScript, який функціонально схожий до <a href="https://american-british-translator.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://american-british-translator.freecodecamp.rocks/</a>. Робота над цим проєктом включатиме написання коду, використовуючи один з таких методів:

-   Клонуйте <a href="https://github.com/freeCodeCamp/boilerplate-project-american-british-english-translator/" target="_blank" rel="noopener noreferrer nofollow">цей репозиторій GitHub</a> та виконайте свій проєкт локально.
-   Використайте <a href="https://replit.com/github/freeCodeCamp/boilerplate-project-american-british-english-translator" target="_blank" rel="noopener noreferrer nofollow">наш стартовий проєкт Replit</a> для виконання свого проєкту.
-   Для завершення проєкту, використайте вибраний вами розробник сайту. Переконайтеся, що зберегли усі файли з нашого репозиторію GitHub.

Коли ви завершили, переконайтеся, що ця демоверсія вашого проєкту розміщена у відкритому доступі. Потім введіть URL-адресу у поле `Solution Link`. При необхідності, також введіть посилання на джерело коду вашого проєкту у полі `GitHub Link`.

# --instructions--

-   Уся логіка може перейти до `/components/translator.js`
-   Завершіть маршрут `/api/translate` в `/routes/api.js`
-   Створіть усі сегменти/функціональні тести в `tests/1_unit-tests.js` та `tests/2_functional-tests.js`
-   Перегляньте файли JavaScript у `/components` для різного правопису і термінів вашого застосунку, які він повинен перекладати
-   Щоб розпочати тести на Replit, налаштуйте `NODE_ENV` на файл `test` без лапок в `.env`
-   Щоб розпочати тести в консолі, використайте команду `npm run test`. Щоб відкрити консоль Replit, натисніть сполучення клавіш Ctrl+Shift+P (Cmd, якщо з Mac) та наберіть "open shell"

Напишіть наступні тести в `tests/1_unit-tests.js`:

-   Перекладіть британською англійською `Mangoes are my favorite fruit.`
-   Перекладіть британською англійською `I ate yogurt for breakfast.`
-   Перекладіть британською англійською `We had a party at my friend's condo.`
-   Перекладіть британською англійською `Can you toss this in the trashcan for me?`
-   Перекладіть британською англійською `The parking lot was full.`
-   Перекладіть британською англійською `Like a high tech Rube Goldberg machine.`
-   Перекладіть британською англійською `To play hooky means to skip class or work.`
-   Перекладіть британською англійською `No Mr. Bond, I expect you to die.`
-   Перекладіть британською англійською `Dr. Grosh will see you now.`
-   Перекладіть британською англійською `Lunch is at 12:15 today.`
-   Перекладіть американською англійською `We watched the footie match for a while.`
-   Перекладіть американською англійською `Paracetamol takes up to an hour to work.`
-   Перекладіть американською англійською `First, caramelise the onions.`
-   Перекладіть американською англійською `I spent the bank holiday at the funfair.`
-   Перекладіть американською англійською `I had a bicky then went to the chippy.`
-   Перекладіть американською англійською `I've just got bits and bobs in my bum bag.`
-   Перекладіть американською англійською `The car boot sale at Boxted Airfield was called off.`
-   Перекладіть американською англійською `Have you met Mrs Kalyani?`
-   Перекладіть американською англійською `Prof Joyner of King's College, London.`
-   Перекладіть американською англійською `Tea time is usually around 4 or 4.30.`
-   Виділіть переклад в `Mangoes are my favorite fruit.`
-   Виділіть переклад в `I ate yogurt for breakfast.`
-   Виділіть переклад в `We watched the footie match for a while.`
-   Виділіть переклад в `Paracetamol takes up to an hour to work.`

Напишіть наступні тести в `tests/2_functional-tests.js`:

-   Переклад з текстом та полями локалізації: запит POST на `/api/translate`
-   Переклад тексту з недопустимими полями локалізації: запит POST на `/api/translate`
-   Переклад з пропущеним текстовим полем: запит POST на `/api/translate`
-   Переклад з пропущеним полем локалізації: запит POST на `/api/translate`
-   Переклад з порожнім текстом: запит POST на `/api/translate`
-   Переклад тексту, який не потребує перекладу: запит POST на `/api/translate`

# --hints--

Я можу надати свій власний проєкт, не приклад URL-адреси.

```js
(getUserInput) => {
  assert(
    !/.*\/american-british-translator\.freecodecamp\.rocks/.test(
      getUserInput('url')
    )
  );
};
```

Ви можете `POST` на `/api/translate`, з корпусом, що містить `text` з текстом для перекладу та `locale` з `american-to-british` чи `british-to-american`. Зворотний об'єкт повинен містити поданий `text` та `translation` з перекладеним текстом.

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

Маршрут `/api/translate` повинен опрацьовувати час, написаний американською та британською англійською. Наприклад, десять тридцять написано як "10.30" британською англійською та "10:30" американською англійською. Елемент `span` повинен містити весь рядок часу, наприклад `<span class="highlight">10:30</span>`.

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

Маршрут `/api/translate` повинен також регулювати те як заголовки/ назви посад/титулів скорочені американською та британською англійською. Наприклад, абревіатура Doctor Wright скорочується на "Dr Wright" у британській англійській і "Dr. Wright" в американській англійській. Дивіться `/components/american-to-british-titles.js` для різних заголовків, які має опрацювати ваш додаток.

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

Перенести будь-який перекладений правопис чи термін з тегів `<span class="highlight">...</span>` так, щоб вони стали зеленими.

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

Якщо одне чи більше необхідних полів відсутні, поверніться `{ error: 'Required field(s) missing' }`.

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

Якщо `text` порожній, поверніться `{ error: 'No text to translate' }`

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

Якщо `locale` не збігається з однією з двох спеціальних мов, поверніться `{ error: 'Invalid value for locale field' }`.

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

Якщо `text` не потребує перекладу, поверніться `"Everything looks good to me!"` для значення `translation`.

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

Усі 24 модульних тестів завершено та успішно пройдено. Дивіться `/tests/1_unit-tests.js` для очікуваної поведінки об'єкту, для якої вам слід написати тести.

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

Усі 6 функціональних тестів завершено та успішно пройдено. Дивіться `/tests/2_functional-tests.js` для функціональності, для якої вам слід написати тести.

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
