---
id: 589a69f5f9fc0f352b528e70
title: Реалізація соціальної автентифікації
challengeType: 2
forumTopicId: 301559
dashedName: implementation-of-social-authentication
---

# --description--

Цей тип автентифікації буде дотримуватись наступного шляху:

1.  Користувач натискає кнопку або посилання, надсилаючи їх на ваш маршрут, щоб автентифікуватись за допомогою визначеної стратегії (наприклад, GitHub).
2.  Ваш шлях викликає `passport.authenticate('github')`, перенаправляючи користувача на GitHub.
3.  Сторінка на GitHub, яку відвідує користувач, дозволяє увійти в систему, якщо він досі не зробив цього. Потім система просить користувача підтвердити доступ до свого профілю з вашої програми.
4.  Потім користувач повертається до вашої програми за url-адресою зворотного виклику зі своїм профілем, якщо він схвалений.
5.  Тепер користувач автентифікований, і ваша програма перевірить, чи це постійний профіль, або збереже його у вашій базі даних, якщо це не так.

Стратегії з OAuth вимагають, щоб ви мали принаймні *ID клієнта* та *секрет клієнта*; так сервіс перевірить, від кого надходить запит автентифікації та чи є він дійсним. Вони отримані з сайту, за допомогою якого ви намагаєтеся здійснити автентифікацію, наприклад, з сайту GitHub, та вони є унікальними для вашої програми. **ВОНИ НЕ ДЛЯ ПУБЛІЧНОГО ДОСТУПУ** і ніколи не можуть бути завантаженими в публічному репозиторії або написаними у вашому коді. Їх часто зберігають у файлі `.env` та посилаються на них таким чином: `process.env.GITHUB_CLIENT_ID`. Для вирішення цього завдання ви будете використовувати стратегію GitHub.

Дотримуйтесь <a href="https://www.freecodecamp.org/news/how-to-set-up-a-github-oauth-application/" target="_blank" rel="noopener noreferrer nofollow">цих інструкцій</a>, щоб отримати *ID та секрет клієнта* з GitHub. Встановіть URL-адресу головної сторінки на свою головну сторінку Replit (**а не URL-адресу коду проєкту**), і встановіть URL-адресу зворотного виклику на ту саму URL-адресу головної сторінки, додавши `/auth/github/callback` вкінці. Збережіть ID та секрет клієнта у своєму файлі проєкту `.env` як `GITHUB_CLIENT_ID` та `GITHUB_CLIENT_SECRET`.

У своєму файлі `routes.js` додайте `showSocialAuth: true` до маршруту головної сторінки після `showRegistration: true`. Тепер створіть 2 маршрути, які прийматимуть запити GET: `/auth/github` та `/auth/github/callback`. Перший повинен лише викликати паспорт для автентифікації `'github'`. Другий повинен викликати паспорт для автентифікації `'github'` з помилкою переадресації на `/`, а потім, якщо вдалося, переадресувати на `/profile` (подібно до вашого останнього проєкту).

Приклад `/auth/github/callback` схожий до того, як ви обробляли звичайний вхід в обліковий запис:

```js
app.route('/login')
  .post(passport.authenticate('local', { failureRedirect: '/' }), (req,res) => {
    res.redirect('/profile');
  });
```

Відправте свою сторінку коли впевнились, що все правильно. Якщо виникають помилки, ви можете <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#implementation-of-social-authentication-3" target="_blank" rel="noopener noreferrer nofollow">переглянути проєкт, виконаний до цього етапу</a>.

# --hints--

Маршрут `/auth/github` повинен бути правильним.

```js
async (getUserInput) => {
  try {
    const res = await fetch(getUserInput('url') + '/_api/routes.js');
    if (res.ok) {
      const data = await res.text();
      assert.match(
          data.replace(/\s/g, ''),
          /passport.authenticate.*?github/g,
          'Route auth/github should only call passport.authenticate with github'
        );
    } else {
      throw new Error(res.statusText);
    }
    const res2 = await fetch(getUserInput('url') + '/_api/app-stack');
    if (res2.ok) {
      const data2 = JSON.parse(await res2.json());
      const dataLayer = data2.find(layer => layer?.route?.path === '/auth/github');
      assert.deepInclude(dataLayer?.route, { methods: {get: true}, path: "/auth/github"});
      assert.deepInclude(dataLayer?.route?.stack?.[0], {method: "get", name: "authenticate"});
    } else {
      throw new Error(res2.statusText);
    }
  } catch (err) {
    throw new Error(err);
  }
}
```

Маршрут `/auth/github/callback` повинен бути правильним.

```js
async (getUserInput) => {
  try {
    const res = await fetch(getUserInput('url') + '/_api/routes.js');
    if (res.ok) {
      const data = await res.text();
      assert.match(
        data.replace(/\s/g, ''),
        /failureRedirect:("|')\/\1/g,
        'Route auth/github/callback should accept a get request and call passport.authenticate for github with a failure redirect to home'
      );
    } else {
      throw new Error(res.statusText);
    }
    const res2 = await fetch(getUserInput('url') + '/_api/app-stack');
    if (res2.ok) {
      const data2 = JSON.parse(await res2.json());
      const dataLayer = data2.find(layer => layer?.route?.path === '/auth/github/callback');
      assert.deepInclude(dataLayer?.route, { methods: {get: true}, path: "/auth/github/callback"});
      assert.deepInclude(dataLayer?.route?.stack?.[0], {method: "get", name: "authenticate"});
    } else {
      throw new Error(res2.statusText);
    }
  } catch (err) {
    throw new Error(err);
  }
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
