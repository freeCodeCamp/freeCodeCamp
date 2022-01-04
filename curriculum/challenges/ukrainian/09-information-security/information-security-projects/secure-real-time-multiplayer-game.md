---
id: 5e601c775ac9d0ecd8b94aff
title: Безпечна мультиплеєрна гра в режимі реального часу
challengeType: 4
forumTopicId: 462375
dashedName: secure-real-time-multiplayer-game
---

# --description--

Розробіть 2D оперативну багатокористувацьку гру в режимі HTML Canvas API та [Socket.io](https://socket.io/), що функціонально схожа на це: <https://secure-real-time-multiplayer-game.freecodecamp.rocks/>. Робота над цим проєктом бути включати написання кода одним із таких методів:

-   Клонувати [цей GitHub репозиторій](https://github.com/freeCodeCamp/boilerplate-project-secure-real-time-multiplayer-game/) та локально завершити ваш проєкт.
-   Використовуйте [наш Replit проєкт](https://replit.com/github/freeCodeCamp/boilerplate-project-secure-real-time-multiplayer-game), щоб завершити ваш проєкт.
-   Для завершення проєкту використайте вибраний вами розробник сайтів. Не забудьте включити всі файли із нашого репозиторію GitHub.

Коли ви завершили, переконайтеся, що демоверсія вашого проекту розміщена у відкритому доступі. Потім введіть URL-адресу у поле `Solution Link`. Додатково, також вкажіть посилання на вхідний код вашого проєкту у полі `GitHub Link`.

# --instructions--

**Примітка**: `helmet@^3.21.3` потрібна для користувацьких історій. Це означає, що вам потрібно буде використовувати попередню версію документації Helmet, щоб отримати інформацію про те, як досягти історій користувача.

# --hints--

Ви можете вказати свій власний проєкт, а не приклад URL.

```js
(getUserInput) => {
  assert(
    !/.*\/secure-real-time-multiplayer-game\.freecodecamp\.rocks/.test(
      getUserInput('url')
    )
  );
};
```

Декілька гравців можуть підключитися до сервера і грати.

```js

```

У кожного гравця є аватар.

```js

```

Кожен гравець представлений об'єктом, створеним класом `Player` у `Player.mjs`.

```js

```

Як мінімум, кожен гравець повинен містити унікальний `id`, `score`, `x` і `y` координати, які відображають поточну позицію гравця.

```js

```

Гра має принаймні один тип предметів, які треба збирати. Заповніть `Collectible` клас у `Collectible.mjs` для наслідування цього.

```js

```

Як мінімум, кожен зібраний об'єкт предметів, створений класом `Collectible` повинен містити унікальний `id`, `value` та `x` і `y` координат, що представляють поточну позицію предмета.

```js

```

Гравці можуть використовувати клавіші WASD та/або стрілки, щоб перемістити свій аватар. Заповніть `movePlayer` метод у `Player.mjs` щоб це реалізувати.

```js

```

Метод `movePlayer` повинен приймати два аргументи: рядок "up", "down", "left" або "right", а також число пікселів, на яку позиція гравця має змінюватися. `movePlayer` повинен адаптуватися до `x` і `y` координат об'єкта який його викликав.

```js

```

Рахунок гравця повинен розраховувати його рейтинг серед інших гравців. Заповніть `calculateRank` метод у `Player` щоб це реалізувати.

```js

```

Метод `calculateRank` повинен приймати масив об'єктів, які представляють всіх підключених гравців і повернути рядок `Rank: currentRanking/totalPlayers`. Наприклад, в грі з двома гравцями, якщо гравець А має рахунок 3 і гравець В має рахунок 5, `calculateRank` для гравця A повинен повернути `Rank: 2/2`.

```js

```

Гравці можуть зіткнутися з предметом, який треба збирати. Заповніть `collision` метод у `Player.mjs` щоб це реалізувати.

```js

```

Метод `collision` повинен приймати об'єкт збору предмета в якості аргумента. Якщо аватар гравця перетинається з предметом, метод `collision` повинен повернути `true`.

```js

```

Всі гравці залишаються синхронізованими.

```js

```

Гравці можуть відключитись від гри в будь-який час.

```js

```

Заборонити клієнту вгадувати тип MIME.

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.equal(parsed.headers['x-content-type-options'], 'nosniff');
};
```

Заборонити міжсайтові скрипти (XSS) атаки.

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.equal(parsed.headers['x-xss-protection'], '1; mode=block');
};
```

Немає даних з веб-сайту.

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

Заголовки кажуть, що сайт працює на "PHP 7.4.3", не дивлячись на те, що це насправді не так (написано з міркувань безпеки).

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
