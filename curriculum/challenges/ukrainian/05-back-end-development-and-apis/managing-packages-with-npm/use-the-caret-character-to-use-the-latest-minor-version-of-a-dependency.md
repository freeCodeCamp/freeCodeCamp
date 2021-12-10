---
id: 587d7fb5367417b2b2512c03
title: Використовуйте Caret-Character для використання останньої мінорної версії залежностей
challengeType: 2
forumTopicId: 301531
dashedName: use-the-caret-character-to-use-the-latest-minor-version-of-a-dependency
---

# --description--

Подібно символу тильда, про який ми дізналися в останньому завданні, npm дозволяє встановити найновіший ПАТЧ для залежності, символ карет (`^`) дозволяє npm також встановлювати майбутні оновлення. Відмінність полягає в тому, що символ карет дозволяє і ДРУГОРЯДНІ оновлення, і ПАТЧІ.

Ваша поточна версія моменту повинна бути "~ 2.10.2", що дозволяє npm встановлювати останню версію 2.10.x. Якби ви використовували символ (^) як префікс версії замість цього, npm було б дозволено оновлюватись до будь-якої версії 2.xx.

```json
"package": "^1.3.8"
```

Це б дозволило оновлювати будь-яку версію 1.xx пакета.

# --instructions--

Використовуйте символ (`^`), щоб встановити префікс версії моменту у ваших залежностях і дозволити npm оновити його до будь-якого оновлення ДРУГОРЯДНОЇ версії.

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

версія "moment" повинна бути "^2.x.x"

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.match(
        packJson.dependencies.moment,
        /^\^2\./,
        'Wrong version of "moment". It should be ^2.10.2'
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
