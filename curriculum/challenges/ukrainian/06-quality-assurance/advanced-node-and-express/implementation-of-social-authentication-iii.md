---
id: 589a8eb3f9fc0f352b528e72
title: Реалізація соціальної автентифікації ІІІ
challengeType: 2
forumTopicId: 301558
dashedName: implementation-of-social-authentication-iii
---

# --description--

Кінцева частина стратегії керує профілем поверненим з GitHub. Якщо існує об'єкт бази даних користувача, необхідно його завантажити. У разі відсутності, потрібно його створити. Потім заповнюємо поля профілю і повертаємо об'єкт користувача. У межах кожного профілю GitHub надає нам унікальний *id*, який можна використовувати для пошуку для того, щоб серіалізувати користувача (уже реалізовано). Нижче наведено приклад реалізації, який ви можете використовувати у вашому проєкті - це відбувається завдяки функції, яка є другим аргументом для нової стратегії, нижче де `console.log(profile);` наразі є:

```js
myDataBase.findOneAndUpdate(
  { id: profile.id },
  {
    $setOnInsert: {
      id: profile.id,
      username: profile.username,
      name: profile.displayName || 'John Doe',
      photo: profile.photos[0].value || '',
      email: Array.isArray(profile.emails)
        ? profile.emails[0].value
        : 'No public email',
      created_on: new Date(),
      provider: profile.provider || ''
    },
    $set: {
      last_login: new Date()
    },
    $inc: {
      login_count: 1
    }
  },
  { upsert: true, new: true },
  (err, doc) => {
    return cb(null, doc.value);
  }
);
```

`findOneAndUpdate` дозволяє шукати та оновлювати об'єкт. У разі, якщо об'єкта не існує, його вставлять та зроблять доступним для функції зворотнього зв'язку. У цьому прикладі, ми завжди встановлюємо `last_login`, збільшуємо `login_count` на `1` та після додавання нового об'єкту (користувача) лише заповнюємо більшість полів. Зверніть увагу на використання значень за замовчуванням. Іноді повернений профіль не міститиме усієї інформації або ж користувач зробить її приватною. У такому випадку, ви його обробляєте задля уникнення помилки.

You should be able to login to your app now. Try it!

Відправте свою сторінку коли впевнились, що все правильно. Якщо виникають помилки, ви можете <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#implementation-of-social-authentication-iii-5" target="_blank" rel="noopener noreferrer nofollow">переглянути проєкт, виконаний до цього етапу</a>.

# --hints--

Ви повинні завершити налаштування стратегії GitHub.

```js
async (getUserInput) => {
  const url = new URL("/_api/auth.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /GitHubStrategy[^]*myDataBase/gi,
    'Strategy should use now use the database to search for the user'
  );
  assert.match(
    data,
    /GitHubStrategy[^]*return cb/gi,
    'Strategy should return the callback function "cb"'
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
