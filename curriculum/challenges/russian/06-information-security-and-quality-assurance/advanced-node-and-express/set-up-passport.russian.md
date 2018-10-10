---
id: 5895f70cf9fc0f352b528e65
title: Set up Passport
challengeType: 2
videoUrl: ''
localeTitle: Настройка паспорта
---

## Description
<section id="description"> Напомним, что этот проект строится на следующем стартовом проекте <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/">Glitch</a> или клонируется из <a href="https://github.com/freeCodeCamp/boilerplate-advancednode/">GitHub</a> . Пришло время настроить <em>Passport,</em> чтобы мы, наконец, могли позволить пользователю зарегистрироваться или войти в учетную запись! В дополнение к Passport мы будем использовать Express-session для обработки сеансов. Использование этого промежуточного программного обеспечения сохраняет идентификатор сеанса как куки-файл в клиенте и позволяет нам получить доступ к данным сеанса, используя этот идентификатор на сервере. Таким образом мы сохраняем информацию личного счета из cookie, используемой клиентом, чтобы проверить на нашем сервере, что они аутентифицированы, и просто держите <em>ключ</em> для доступа к данным, хранящимся на сервере. Чтобы настроить Passport для использования в вашем проекте, вам нужно будет добавить его как зависимость сначала в package.json. <code>&quot;passport&quot;: &quot;^0.3.2&quot;</code> Кроме того, добавьте экспресс-сессию как зависимость теперь. Экспресс-сессия имеет массу расширенных функций, которые вы можете использовать, но пока мы просто используем основы! <code>&quot;express-session&quot;: &quot;^1.15.0&quot;</code> Вам нужно будет настроить настройки сеанса и инициализировать Passport. Обязательно сначала создайте «сеанс переменных» и «паспорт», чтобы требовать «экспресс-сессию» и «паспорт» соответственно. Чтобы настроить ваше экспресс-приложение для использования, используйте сеанс, и мы определим лишь несколько основных параметров. Не забудьте добавить &#39;SESSION_SECRET&#39; в ваш .ENV-файл и дать ему случайное значение. Это используется для вычисления хэша, используемого для шифрования вашего файла cookie! <pre> app.use (сессия ({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
})); </pre> Кроме того, вы можете пойти и сказать, что ваше экспресс-приложение <b>использует</b> «passport.initialize ()» и «passport.session ()». (Например, <code>app.use(passport.initialize());</code> ) Представьте свою страницу, если вы считаете, что у вас все в порядке. Если вы работаете в ошибки, вы можете проверить проект завершен до этого момента <a href="https://gist.github.com/JosephLivengood/338a9c5a326923c3826a666d430e65c3">здесь</a> . </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Паспорт и экспресс-сеанс - это зависимости
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/package.json") .then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, "passport", "Your project should list "passport" as a dependency"); assert.property(packJson.dependencies, "express-session", "Your project should list "express-session" as a dependency"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: Зависимости правильно
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /require.*("|")passport("|")/gi, "You should have required passport"); assert.match(data, /require.*("|")express-session("|")/gi, "You should have required express-session"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: Экспресс-приложение использует новые зависимости
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /passport.initialize/gi, "Your express app should use "passport.initialize()""); assert.match(data, /passport.session/gi, "Your express app should use "passport.session()""); }, xhr => { throw new Error(xhr.statusText); })'
  - text: Секретная сессия и секрет сеанса правильно настроены
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /secret:( |)process.env.SESSION_SECRET/gi, "Your express app should have express-session set up with your secret as process.env.SESSION_SECRET"); }, xhr => { throw new Error(xhr.statusText); })'

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
