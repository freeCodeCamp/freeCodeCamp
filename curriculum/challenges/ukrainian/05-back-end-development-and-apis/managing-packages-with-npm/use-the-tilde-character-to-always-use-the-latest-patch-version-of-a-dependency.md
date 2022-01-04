---
id: 587d7fb5367417b2b2512c02
title: Використовуйте символ тильди (~), щоб завжди мати доступ до останньої версії залежностей Patch
challengeType: 2
forumTopicId: 301532
dashedName: use-the-tilde-character-to-always-use-the-latest-patch-version-of-a-dependency
---

# --description--

В останньому завданні ви сказали npm включати тільки конкретну версію пакету. Це корисний спосіб призупинити блокування ваших залежностей, якщо вам потрібно переконатися, що різні частини вашого проєкту залишаються сумісними одна з одною. Але в більшості випадків ви не захочете пропустити виправлення помилок, оскільки вони часто містять важливі патчі безпеки і (як можна сподіватися) не порушують при цьому речі.

Щоб npm залежність оновилася до останньої версії PATCH, можна встановити префікс версії залежностей з символом тильди (`~`). Ось приклад оновлення для будь-якої версії 1.3.x.

```json
"package": "~1.3.8"
```

# --instructions--

У файлі package.json вашим поточним правилом для моменту оновлення npm є використання конкретної версії (2.10.2). Але тепер ви захочете останню версію 2.10.x.

Використовуйте символ тильди (`~`), щоб встановити префікс версії моменту у ваших залежностях і дозволити npm оновити його до будь-якого оновлення версії PATCH.

**Примітка:** Номери версій не слід змінювати.

# --hints--

"dependencies" повинні містити "moment"

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'moment',
        '"dependencies" does not include "moment"'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

версія "moment" повинна бути "~2.10.2"

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.match(
        packJson.dependencies.moment,
        /^\~2\.10\.2/,
        'Wrong version of "moment". It should be ~2.10.2'
      );
    },
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
