---
id: 5895f70cf9fc0f352b528e65
title: Set up Passport
challengeType: 2
forumTopicId: 301565
localeTitle: Настройка паспорта
---

## Description
<section id='description'>
Напомним, что этот проект строится на следующем стартовом проекте <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/">Glitch</a> или клонируется из <a href="https://github.com/freeCodeCamp/boilerplate-advancednode/">GitHub</a> . Пришло время настроить <em>Passport,</em> чтобы мы, наконец, могли позволить пользователю зарегистрироваться или войти в учетную запись! В дополнение к Passport мы будем использовать Express-session для обработки сеансов. Использование этого промежуточного программного обеспечения сохраняет идентификатор сеанса как cookie-file в клиенте и позволяет нам получить доступ к данным сеанса, используя этот идентификатор на сервере. Таким образом мы сохраняем информацию личного счета из cookie, используемой клиентом, чтобы проверить на нашем сервере, что они аутентифицированы, и просто держите <em>ключ</em> для доступа к данным, хранящимся на сервере. Чтобы настроить Passport и Express-session в вашем проекте, вам нужно будет добавить их в список зависимостей в package.json: <code>&quot;passport&quot;: &quot;^0.3.2&quot;</code> и <code>&quot;express-session&quot;: &quot;^1.15.0&quot;</code>. Express-session имеет массу расширенных функций, которые вы можете использовать, но пока мы просто используем основы! Вам нужно будет настроить настройки сеанса и инициализировать Passport. Обязательно сначала создайте session и passport, чтобы требовать express-session и passport соответственно. Чтобы настроить ваше Express приложение для использования, используйте session, и мы определим лишь несколько основных параметров. Не забудьте добавить &#39;SESSION_SECRET&#39; в ваш .ENV-файл и дать ему случайное значение. Это используется для вычисления хэша, используемого для шифрования вашего файла cookie! <pre> app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
})); </pre> Кроме того, вы можете пойти и сказать, что ваше Express приложение <b>использует</b> <code>passport.initialize()</code> и <code>passport.session()</code>. (Например, <code>app.use(passport.initialize());</code> ) Представьте свою страницу, если вы считаете, что у вас все в порядке. Если вы работаете в ошибки, вы можете проверить проект завершен до этого момента <a href="https://gist.github.com/JosephLivengood/338a9c5a326923c3826a666d430e65c3">здесь</a> .
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Passort and Express-session are dependencies
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/package.json') .then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, 'passport', 'Your project should list "passport" as a dependency'); assert.property(packJson.dependencies, 'express-session', 'Your project should list "express-session" as a dependency'); }, xhr => { throw new Error(xhr.statusText); })
  - text: Dependencies correctly required
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /require.*("|')passport("|')/gi, 'You should have required passport'); assert.match(data, /require.*("|')express-session("|')/gi, 'You should have required express-session'); }, xhr => { throw new Error(xhr.statusText); })
  - text: Express app uses new dependencies
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /passport.initialize/gi, 'Your express app should use "passport.initialize()"'); assert.match(data, /passport.session/gi, 'Your express app should use "passport.session()"'); }, xhr => { throw new Error(xhr.statusText); })
  - text: Session and session secret correctly set up
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /secret:( |)process.env.SESSION_SECRET/gi, 'Your express app should have express-session set up with your secret as process.env.SESSION_SECRET'); }, xhr => { throw new Error(xhr.statusText); })

```

</section>
