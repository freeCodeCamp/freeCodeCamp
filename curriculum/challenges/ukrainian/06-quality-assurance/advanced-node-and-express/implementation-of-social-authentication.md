---
id: 589a69f5f9fc0f352b528e70
title: Реалізація соціальної автентифікації
challengeType: 2
forumTopicId: 301559
dashedName: implementation-of-social-authentication
---

# --description--

Основний шлях автентифікації відстежуватиметься у вашому застосунку:

1.  Користувач натисне кнопку або з'єднається з нашим маршрутом для автентифікації у визначеній стратегії (наприклад, GitHub).
2.  Ваш маршрут `passport.authenticate('github')` перенаправляє їх на GitHub.
3.  Сторінка, на яку користувач заходить, на GitHub, дозволяє йому увійти в систему, якщо він ще не зробив це. Система попросить підтвердити доступ до свого профілю з нашого застосунку.
4.  Потім користувач повертається до нашого застосунку за адресою зворотного виклику url з його профілем, якщо він схвалений.
5.  Тепер вони аутентифіковані, і ваш застосунок перевірить, чи це постійний профіль, або збереже його у вашій базі даних, якщо це не так.

Стратегії з OAuth потребують, щоб ви мали принаймні *Client ID* та *Client Secret*, так сервіс перевірить, від кого надходить запит автентифікації та чи є він дійсним. Вони отримані з сайту, з яким ви намагаєтеся здійснити автентифікацію, наприклад, з сайту GitHub і вони є унікальними для вашого застосунку **ВОНИ НЕ Є ДЛЯ ЗАГАЛЬНОГО ДОСТУПУ** і ніколи не повинні бути завантажені в публічне сховище або написані безпосередньо у вашому коді. Поширеною практикою є розміщення їх у файлі `.env` і посилання на них таким чином: `process.env.GITHUB_CLIENT_ID`. Для вирішення цього завдання ми будемо використовувати стратегію GitHub.

Отримання вашого *Client ID and Secret* від GitHub можна зробити в налаштуваннях профілю вашого облікового запису в розділі "Налаштування розробника", потім '[OAuth applications](https://github.com/settings/developers)'. Натисніть "Зареєструвати нову програму", назвіть свій додаток, вставте URL-адресу на свою домашню сторінку Replit (**Not the project code's url**), і, зрештою, для URL-адреси зворотного виклику, вставте ту саму URL-адресу як і домашню сторінку, але з додаванням `/auth/github/callback`. Сюди користувачі будуть переадресовані для обробки після автентифікації на GitHub. Збережіть отриману інформацію як `'GITHUB_CLIENT_ID'` та `'GITHUB_CLIENT_SECRET'` у вашому файлі `.env`.

У вашому файлі `routes.js` додайте `showSocialAuth: true` до маршруту головної сторінки після `showRegistration: true`. Тепер створіть 2 маршрути, які прийматимуть запити GET: `/auth/github` та `/auth/github/callback`. Перший повинен лише викликати паспорт для автентифікації `'github'`. Другий повинен викликати паспорт для автентифікації `'github'` з помилкою переадресації на `/`, а потім, якщо вдалося, переадресувати на `/profile` (подібно до нашого останнього проєкту).

Приклад того, що `/auth/github/callback` має виглядати подібним до обробки звичного логіну:

```js
app.route('/login')
  .post(passport.authenticate('local', { failureRedirect: '/' }), (req,res) => {
    res.redirect('/profile');
  });
```

Підтвердьте сторінку, якщо все зрозуміло. Якщо сталась якась помилка, ви маєте змогу перевірити статус проєкту до цього етапу [тут](https://gist.github.com/camperbot/1f7f6f76adb178680246989612bea21e).

# --hints--

Шлях `/auth/github` має бути правильним.

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

Шлях `/auth/github/callback` повинен бути правильним.

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
