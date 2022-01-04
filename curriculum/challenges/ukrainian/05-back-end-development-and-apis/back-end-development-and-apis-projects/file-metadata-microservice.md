---
id: bd7158d8c443edefaeb5bd0f
title: Мікросервіс метаданих файлу
challengeType: 4
forumTopicId: 301506
dashedName: file-metadata-microservice
---

# --description--

Створіть full stack додаток на JavaScript, який функціонально схожий до цього:<https://file-metadata-microservice.freecodecamp.rocks/>. Робота над цим проектом залучатиме тебе писати свій код використовуючи один з наступних методів:

-   Клонувати [цей репозиторій з GitHub](https://github.com/freeCodeCamp/boilerplate-project-filemetadata/) та локально завершити свій проект.
-   Використати [наш проект для початківців на Replit](https://replit.com/github/freeCodeCamp/boilerplate-project-filemetadata) для завершення свого проекту.
-   Використати конструктор сайтів на свій вибір для завершення проекту. Впевніться, що ви зберегли всі файли із нашого GitHub репозиторію.

По завершенню переконайтеся, що працююча демоверсія вашого проекту розміщена у відкритому доступі. Потім введіть його URL-адресу в поле `Solution Link`. За бажанням також можете ввести посилання на вихідний код вашого проєкту в полі `GitHub Link`.

# --instructions--

**ПІДКАЗКА:** Ви можете використовувати npm пакет `multer` щоб опрацювати завантаження файлу.

# --hints--

Вам необхідно вказати свій власний проект, а не приклад URL-адреси.

```js
(getUserInput) => {
  assert(
    !/.*\/file-metadata-microservice\.freecodecamp\.rocks/.test(
      getUserInput('url')
    )
  );
};
```

Ви можете надіслати форму, що включає в себе завантаження файлу.

```js
async (getUserInput) => {
  const site = await fetch(getUserInput('url'));
  const data = await site.text();
  const doc = new DOMParser().parseFromString(data, 'text/html');
  assert(doc.querySelector('input[type="file"]'));
};
```

Поле вводу файлу форми має параметр `name` встановлений в `upfile`.

```js
async (getUserInput) => {
  const site = await fetch(getUserInput('url'));
  const data = await site.text();
  const doc = new DOMParser().parseFromString(data, 'text/html');
  assert(doc.querySelector('input[name="upfile"]'));
};
```

Коли ви надсилаєте файл, ви отримуєте `name`, `type` і `size` файлу в байтах у відповіді JSON.

```js
async (getUserInput) => {
  const formData = new FormData();
  const fileData = await fetch(
    'https://cdn.freecodecamp.org/weather-icons/01d.png'
  );
  const file = await fileData.blob();
  formData.append('upfile', file, 'icon');
  const data = await fetch(getUserInput('url') + '/api/fileanalyse', {
    method: 'POST',
    body: formData
  });
  const parsed = await data.json();
  assert.property(parsed, 'size');
  assert.equal(parsed.name, 'icon');
  assert.equal(parsed.type, 'image/png');
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
