---
id: 587d8249367417b2b2512c40
title: Налаштування Helmet за допомогою початкового елемента проміжного програмування helmet()
challengeType: 2
forumTopicId: 301575
dashedName: configure-helmet-using-the-parent-helmet-middleware
---

# --description--

Нагадуємо, що цей проєкт створюється на основі наступного стартового проєкту на <a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">Replit</a> або клонований з <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

`app.use(helmet())` буде автоматично містити в собі все вище згадане проміжне програмне забезпечення, окрім `noCache()` і `contentSecurityPolicy()`, але їх можна застосувати за необхідності. Ви також можете відключити або налаштувати будь-яке інше проміжне програмування самостійно, використовуючи конфігураційний об'єкт.

**Наприклад:**

```js
app.use(helmet({
  frameguard: {         // configure
    action: 'deny'
  },
  contentSecurityPolicy: {    // enable and configure
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ['style.com'],
    }
  },
  dnsPrefetchControl: false     // disable
}))
```

Ми представили окремо кожен тип проміжного програмного забезпечення для навчання і для полегшення тестування. В реальному проєкті легко реалізувати метод 'parent' з використанням `helmet()`.

# --hints--

відсутність тестів - це описове завдання

```js
assert(true);
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
