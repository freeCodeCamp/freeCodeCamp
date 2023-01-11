---
id: 5e601c775ac9d0ecd8b94aff
title: Безпечна мультиплеєрна гра в режимі реального часу
challengeType: 4
forumTopicId: 462375
dashedName: secure-real-time-multiplayer-game
---

# --description--

Розробіть багатокористувацьку 2D-гру в реальному часі, використовуючи HTML Canvas API та Socket.io, яка функціонально схожа до цього: <a href="https://secure-real-time-multiplayer-game.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://secure-real-time-multiplayer-game.freecodecamp.rocks/</a>. Робота над цим проєктом передбачає написання коду за допомогою одного з наступних методів:

-   Клонуйте <a href="https://github.com/freeCodeCamp/boilerplate-project-secure-real-time-multiplayer-game/" target="_blank" rel="noopener noreferrer nofollow">цей репозиторій GitHub</a> та виконайте свій проєкт локально.
-   Використайте <a href="https://replit.com/github/freeCodeCamp/boilerplate-project-secure-real-time-multiplayer-game" target="_blank" rel="noopener noreferrer nofollow">наш стартовий проєкт Replit</a> для виконання свого проєкту.
-   Для виконання проєкту використайте конструктор сайту на власний вибір. Переконайтеся, що приєднали усі файли з нашого репозиторію GitHub.

Якщо ви використовуєте Replit, виконайте наступні кроки для налаштування проєкту:

-   Почніть з імпорту проєкту на Replit.
-   Потім ви побачите вікно `.replit`.
-   Оберіть `Use run command` та натисніть кнопку `Done`.

Після завершення переконайтеся, що демоверсія проєкту розміщена у відкритому доступі. Потім введіть URL-адресу проєкту в полі «Посилання на рішення». За бажанням введіть посилання на початковий код проєкту в полі «Посилання на GitHub».

# --instructions--

Створіть безпечну багатокористувацьку гру, у якій кожен гравець може переміщувати свій аватар, є принаймні один колекційний предмет, а рейтинг гравців обчислюється на основі результатів.

Для отримання детальної інформації зверніться до тестів нижче.

Переконайтеся, що ваша гра безпечна! Додайте такі заходи безпеки:

- Клієнт не може вгадати/розпізнати тип MIME
- Запобігайте атакам XSS
- Не кешуйте нічого з вебсайту в клієнті
- У заголовках зазначено, що сайт працює на основі `PHP 7.4.3`

**Примітка**: `helmet@^3.21.3` потрібний для історії користувача. Це означає, що вам потрібно буде використати попередню версію документації Helmet, щоб отримати інформацію про те, як виконати історію користувача.

# --hints--

Ви можете надати власний проєкт, а не URL-адресу прикладу.

```js
(getUserInput) => {
  assert(
    !/.*\/secure-real-time-multiplayer-game\.freecodecamp\.rocks/.test(
      getUserInput('url')
    )
  );
};
```

Декілька гравців можуть приєднатися до сервера і грати.

```js

```

У кожного гравця є аватар.

```js

```

Кожен гравець представлений об'єктом, створеним класом `Player` у `Player.mjs`.

```js

```

Як мінімум, кожен об'єкт-гравець повинен містити унікальний `id`, `score` і координати `x` та `y`, які показують поточну позицію гравця.

```js

```

Гра має принаймні один тип колекційного предмета. Заповніть клас `Collectible` у `Collectible.mjs`, щоб впровадити це.

```js

```

Як мінімум, кожен об'єкт-предмет, створений класом `Collectible`, повинен містити унікальний `id`, `value` і координати `x` та `y`, які показують поточну позицію предмета.

```js

```

Гравці можуть використовувати клавіші WASD та/або стрілки, щоб перемістити свій аватар. Заповніть метод `movePlayer` у `Player.mjs`, щоб впровадити це.

```js

```

Метод `movePlayer` повинен приймати два аргументи: рядок «up», «down», «left» або «right», а також кількість пікселів, на яку має змінюватися позиція гравця. `movePlayer` повинен адаптовуватися до координат (`x` та `y`) об'єкта-гравця, який його викликав.

```js

```

Рахунок гравця повинен бути використаний, щоб розрахувати рейтинг серед інших гравців. Заповніть метод `calculateRank` у `Player`, щоб впровадити це.

```js

```

Метод `calculateRank` повинен приймати масив об'єктів, представляючи усіх підключених гравців і повернути рядок `Rank: currentRanking/totalPlayers`. Наприклад, в грі з двома гравцями, якщо гравець А має рахунок 3 і гравець В має рахунок 5, `calculateRank` для гравця A повинен повернути `Rank: 2/2`.

```js

```

Гравці можуть зіткнутися з колекційним предметом. Заповніть метод `collision` у `Player.mjs`, щоб впровадити це.

```js

```

Метод `collision` повинен приймати колекційний предмет як аргумент. Якщо аватар гравця перетинається з предметом, метод `collision` повинен повернути `true`.

```js

```

Всі гравці залишаються синхронізованими.

```js

```

Гравці можуть відключитись від гри в будь-який час.

```js

```

Забороніть клієнту вгадувати/розпізнавати тип MIME.

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.equal(parsed.headers['x-content-type-options'], 'nosniff');
};
```

Забороніть міжсайтові атаки XSS.

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.equal(parsed.headers['x-xss-protection'], '1; mode=block');
};
```

Ніякі дані вебсайту не розміщені у кеші клієнта.

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.equal(parsed.headers['surrogate-control'], 'no-store');
  assert.equal(
    parsed.headers['cache-control'],
    'no-store, no-cache, must-revalidate, proxy-revalidate'
  );
  assert.equal(parsed.headers['pragma'], 'no-cache');
  assert.equal(parsed.headers['expires'], '0');
};
```

Заголовки зазначають, що сайт працює на «PHP 7.4.3», хоча це не так (написано з міркувань безпеки).

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.equal(parsed.headers['x-powered-by'], 'PHP 7.4.3');
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
