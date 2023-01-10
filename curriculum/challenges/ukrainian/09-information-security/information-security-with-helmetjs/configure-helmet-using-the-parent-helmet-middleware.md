---
id: 587d8249367417b2b2512c40
title: Налаштуйте Helmet, використовуючи «батьківське» проміжне ПЗ helmet()
challengeType: 2
forumTopicId: 301575
dashedName: configure-helmet-using-the-parent-helmet-middleware
---

# --description--

Нагадуємо, що цей проєкт створюється на основі наступного стартового проєкту на <a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">Replit</a> або клонований з <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

`app.use(helmet())` автоматично міститиме в собі вищезгадане проміжне програмне забезпечення, окрім `noCache()` та `contentSecurityPolicy()`, але їх можна увімкнути в разі потреби. Ви також можете відключити або налаштувати будь-яке інше проміжне програмне забезпечення самостійно, використовуючи об'єкт конфігурації.

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

Ми представили кожне проміжне програмне забезпечення окремо в навчальних цілях і для полегшення тестування. «Батьківське» проміжне ПЗ `helmet()` легко використовувати у реальних проєктах.

# --hints--

тестів немає: це описове завдання

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
