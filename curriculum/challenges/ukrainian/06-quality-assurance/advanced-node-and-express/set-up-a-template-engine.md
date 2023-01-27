---
id: 5895f700f9fc0f352b528e63
title: Налаштування шаблонізатора
challengeType: 2
forumTopicId: 301564
dashedName: set-up-a-template-engine
---

# --description--

Робота над цими завданнями передбачає написання коду за допомогою одного з наступних методів:

- Клонуйте <a href="https://github.com/freeCodeCamp/boilerplate-advancednode/" target="_blank" rel="noopener noreferrer nofollow">цей репозиторій GitHub</a> та виконайте завдання локально.
- Використайте <a href="https://replit.com/github/freeCodeCamp/boilerplate-advancednode" target="_blank" rel="noopener noreferrer nofollow">наш стартовий проєкт Replit</a> для виконання цих завдань.
- Для виконання проєкту використайте конструктор сайту на власний вибір. Переконайтеся, що приєднали усі файли з нашого репозиторію GitHub.

Якщо ви використовуєте Replit, виконайте наступні кроки для налаштування проєкту:

-   Почніть з імпорту проєкту на Replit.
-   Потім ви побачите вікно `.replit`.
-   Оберіть `Use run command` та натисніть кнопку `Done`.

Після завершення переконайтеся, що демоверсія проєкту розміщена у відкритому доступі. Потім введіть URL-адресу проєкту в полі «Посилання на рішення».

Шаблонізатор дозволяє використовувати статистичні шаблони (наприклад ті, що написані в *Pug*) у вашому додатку. Під час виконання коду шаблонізатор замінює змінні у шаблоні на фактичні значення, які може надати сервер. Потім шаблон перетворюється на статистичний файл HTML, який надсилається клієнту. Цей підхід спрощує дизайн сторінки HTML та дозволяє відображати змінні на сторінці без потреби викликати API з клієнта.

`pug@~3.0.0` вже встановлений та вказаний як залежність у вашому файлі `package.json`.

Express повинен знати, який шаблонізатор ви використовуєте. Використайте метод `set`, щоб присвоїти `pug` як значення властивості `view engine`:

```javascript
app.set('view engine', 'pug');
```

Після цього додайте ще один метод `set`, який встановлює властивість `views` вашого `app` так, щоб вона вказувала на директорію `./views/pug`. Це каже Express відображати все, що належить до цієї директорії.

Вкінці використайте `res.render()` у маршруті своєї домашньої сторінки, передавши `index` як перший аргумент. Це зобразить шаблон `pug`.

Якщо все пройшло за планом, то домашня сторінка більше не буде порожньою. Натомість буде повідомлення про те, що ви успішно зобразили шаблон Pug!

Відправте свою сторінку коли впевнились, що все правильно. Якщо виникають помилки, ви можете <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#set-up-a-template-engine-1" target="_blank" rel="noopener noreferrer nofollow">переглянути проєкт, виконаний до цього етапу</a>.

# --hints--

Pug повинен бути залежністю.

```js
async (getUserInput) => {
  const url = new URL("/_api/package.json", getUserInput("url"));
  const res = await fetch(url);
  const packJson = await res.json();
  assert.property(
    packJson.dependencies,
    'pug',
    'Your project should list "pug" as a dependency'
  );
}
```

Двигуном перегляду повинен бути Pug.

```js
async (getUserInput) => {
  const url = new URL("/_api/app", getUserInput("url"));
  const res = await fetch(url);
  const app = await res.json();
  assert.equal(app?.settings?.['view engine'], "pug");
}
```

Ви повинні встановити властивість `views` на `./views/pug`.

```js
async (getUserInput) => {
  const url = new URL("/_api/app", getUserInput("url"));
  const res = await fetch(url);
  const app = await res.json();
  assert.equal(app?.settings?.views, "./views/pug");
}
```

Використайте правильний метод ExpressJS, щоб відобразити сторінку індексу з відповіді.

```js
async (getUserInput) => {
  const url = new URL("/", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
      assert.match(
        data,
        /FCC Advanced Node and Express/gi,
        'You successfully rendered the Pug template!'
      );
    }
```

Pug повинен працювати.

```js
async (getUserInput) => {
  const url = new URL("/", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
      assert.match(
        data,
        /pug-success-message/gi,
        'Your projects home page should now be rendered by pug with the projects .pug file unaltered'
      );
    }
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
