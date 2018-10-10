---
id: 58965611f9fc0f352b528e6c
title: Logging a User Out
challengeType: 2
videoUrl: ''
localeTitle: Регистрация пользователя
---

## Description
undefined

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: Маршрут выхода
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /req.logout/gi, "You should be call req.logout() in youre /logout route"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: Выход из системы должен быть перенаправлен на главную страницу /
    testString: 'getUserInput => $.get(getUserInput("url")+ "/logout") .then(data => { assert.match(data, /Home page/gi, "When a user logs out they should be redirected to the homepage"); }, xhr => { throw new Error(xhr.statusText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
