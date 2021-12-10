---
id: bd7158d8c443edefaeb5bdff
title: Мікросервіс парсингу заголовків запиту
challengeType: 4
forumTopicId: 301507
dashedName: request-header-parser-microservice
---

# --description--

Створіть full stack додаток на JavaScript, який функціонально схожий до цього:<https://request-header-parser-microservice.freecodecamp.rocks/>. Робота над цим проектом залучатиме тебе писати свій код використовуючи один з наступних методів:

-   Клонувати [цей репозиторій з GitHub](https://github.com/freeCodeCamp/boilerplate-project-headerparser/) та локально завершити свій проект.
-   Використати [наш проект для початківців на Replit](https://replit.com/github/freeCodeCamp/boilerplate-project-headerparser) для завершення свого проекту.
-   Використати конструктор сайтів на свій вибір для завершення проекту. Впевніться, що ви зберегли всі файли із нашого GitHub репозиторію.

По завершенню переконайтеся, що працююча демоверсія вашого проекту розміщена у відкритому доступі. Потім введіть його URL-адресу в поле `Solution Link`. За бажанням також можете ввести посилання на вихідний код вашого проекту в полі `GitHub Link`.

# --hints--

Вам необхідно вказати свій власний проект, а не приклад URL-адреси.

```js
(getUserInput) => {
  assert(
    !/.*\/request-header-parser-microservice\.freecodecamp\.rocks/.test(
      getUserInput('url')
    )
  );
};
```

Запит на `/api/whoami` повинен повернути об'єкт JSON з вашою IP-адресою у ключі `ipaddress`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/whoami').then(
    (data) => assert(data.ipaddress && data.ipaddress.length > 0),
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Запит на `/api/whoami` повинен повернути об’єкт JSON з вашою бажаною мовою у ключі `language`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/whoami').then(
    (data) => assert(data.language && data.language.length > 0),
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Запит на `/api/whoami` повинен повернути об'єкт JSON з вашим програмним забезпеченням у ключі `software`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/whoami').then(
    (data) => assert(data.software && data.software.length > 0),
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
