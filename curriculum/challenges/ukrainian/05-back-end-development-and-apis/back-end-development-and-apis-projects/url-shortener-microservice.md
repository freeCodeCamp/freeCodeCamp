---
id: bd7158d8c443edefaeb5bd0e
title: Мікросервіс скорочування URL-адрес
challengeType: 4
forumTopicId: 301509
dashedName: url-shortener-microservice
---

# --description--

Створіть повний пакет додатку JavaScript, який функціонально схожий до <a href="https://url-shortener-microservice.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://url-shortener-microservice.freecodecamp.rocks</a>. Робота над цим проєктом включатиме написання коду одним із таких методів:

-   Клонуйте <a href="https://github.com/freeCodeCamp/boilerplate-project-urlshortener/" target="_blank" rel="noopener noreferrer nofollow">цей репозиторій GitHub</a> та виконайте свій проєкт локально.
-   Використайте <a href="https://replit.com/github/freeCodeCamp/boilerplate-project-urlshortener" target="_blank" rel="noopener noreferrer nofollow">наш стартовий проєкт Replit</a> для виконання свого проєкту.
-   Використати конструктор сайту на свій вибір для завершення проекту. Впевнитися, що включили всі файли з нашого репозиторію GitHub.

По завершенню переконайтеся, що працююча демо-версія вашого проекту розміщена у відкритому доступі. Потім введіть його URL-адресу в поле `Solution Link`. За бажанням також можете ввести посилання на вихідний код вашого проєкту в полі `GitHub Link`.

# --instructions--

**ПІДКАЗКА:** не забудьте використовувати проміжне програмне забезпечення body parsing для обробки запитів POST. Також ви можете використовувати функцію `dns.lookup(host, cb)` з основного модуля `dns` для перевірки надісланої URL-адреси.

# --hints--

Вам необхідно вказати свій власний проект, а не приклад URL-адреси.

```js
(getUserInput) => {
  assert(
    !/.*\/url-shortener-microservice\.freecodecamp\.rocks/.test(
      getUserInput('url')
    )
  );
};
```

Ви можете POST URL до `/api/shorturl` та отримати відповідь JSON з властивостями `original_url` і `short_url`. Ось приклад: `{ original_url : 'https://freeCodeCamp.org', short_url : 1}`

```js
async (getUserInput) => {
  const url = getUserInput('url');
  const urlVariable = Date.now();
  const fullUrl = `${url}/?v=${urlVariable}`
  const res = await fetch(url + '/api/shorturl', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `url=${fullUrl}`
  });
  if (res.ok) {
    const { short_url, original_url } = await res.json();
    assert.isNotNull(short_url);
    assert.strictEqual(original_url, `${url}/?v=${urlVariable}`);
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  }
};
```

Коли ви відкриєте `/api/shorturl/<short_url>`, вас буде перенаправлено на оригінальне URL.

```js
async (getUserInput) => {
  const url = getUserInput('url');
  const urlVariable = Date.now();
  const fullUrl = `${url}/?v=${urlVariable}`
  let shortenedUrlVariable;
  const postResponse = await fetch(url + '/api/shorturl', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `url=${fullUrl}`
  });
  if (postResponse.ok) {
    const { short_url } = await postResponse.json();
    shortenedUrlVariable = short_url;
  } else {
    throw new Error(`${postResponse.status} ${postResponse.statusText}`);
  }
  const getResponse = await fetch(
    url + '/api/shorturl/' + shortenedUrlVariable
  );
  if (getResponse) {
    const { redirected, url } = getResponse;
    assert.isTrue(redirected);
    assert.strictEqual(url,fullUrl);
  } else {
    throw new Error(`${getResponse.status} ${getResponse.statusText}`);
  }
};
```

Якщо ви введете недійсний URL, який не відповідає дійсному формату `http://www.example.com` , то відповідь JSON буде містити `{ error: 'invalid url' }`

```js
async (getUserInput) => {
  const url = getUserInput('url');
  const res = await fetch(url + '/api/shorturl', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `url=ftp:/john-doe.invalidTLD`
  });
  if (res.ok) {
    const { error } = await res.json();
    assert.isNotNull(error);
    assert.strictEqual(error.toLowerCase(), 'invalid url');
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
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
