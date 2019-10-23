---
id: 589a69f5f9fc0f352b528e71
title: Implementation of Social Authentication II
challengeType: 2
forumTopicId: 301557
localeTitle: Внедрение социальной аутентификации II
---

## Description
<section id='description'>
Напомним, что этот проект строится на следующем стартовом проекте <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-socialauth/">Glitch</a> или клонируется из <a href="https://github.com/freeCodeCamp/boilerplate-socialauth/">GitHub</a> . Последняя часть настройки вашей аутентификации GitHub - это создание самой стратегии. Для этого вам нужно будет добавить зависимость «паспорт-github» к вашему проекту и потребовать его как GithubStrategy, например, <code>const GitHubStrategy = require(&#39;passport-github&#39;).Strategy;</code> , Чтобы настроить стратегию GitHub, вы должны указать <b>паспорт,</b> чтобы <b>использовать</b> экземпляр <b>GithubStrategy</b> , который принимает 2 аргумента: объект (содержащий <em>clientID</em> , <em>clientSecret</em> и <em>callbackURL</em> ) и функцию, которая будет вызываться, когда пользователь будет успешно аутентифицирован, что мы определим если пользователь является новым и какие поля сначала сохраняются в объекте базы данных пользователя. Это распространено во многих стратегиях, но для некоторых из них может потребоваться дополнительная информация, как указано в github этой конкретной стратегии README; например, Google требует также <em>область видимости,</em> которая определяет, какую информацию запрашивает ваш запрос, и просит пользователя одобрить такой доступ. Текущая стратегия, которую мы реализуем, имеет свое использование, изложенное <a>здесь</a> , но мы все это проверим здесь, на freeCodeCamp! Вот как ваша новая стратегия должна смотреть на этот момент: <pre> passport.use (новый GitHubStrategy ({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: / * ВСТАВЬТЕ URL-адрес CALLBACK, ВХОДЯЩИЙ В ГИТУМ ЗДЕСЬ * /
  },
  function (accessToken, refreshToken, profile, cb) {
      console.log (профиль);
      // Логика базы данных здесь с обратным вызовом, содержащим наш пользовательский объект
  }
)); </pre> Ваша аутентификация еще не будет выполнена, и на самом деле вывести ошибку, без логики базы данных и обратного вызова, но она должна зайти на консоль вашего профиля GitHub, если вы попробуете! Представьте свою страницу, когда вы думаете, что у вас все в порядке.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Dependency added
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/package.json') .then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, 'passport-github', 'Your project should list "passport-github" as a dependency'); }, xhr => { throw new Error(xhr.statusText); })
  - text: Dependency required
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /require.*("|')passport-github("|')/gi, 'You should have required passport-github'); }, xhr => { throw new Error(xhr.statusText); })
  - text: GitHub strategy setup correctly thus far
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /passport.use.*new GitHubStrategy/gi, 'Passport should use a new GitHubStrategy'); assert.match(data, /callbackURL:( |)("|').*("|')/gi, 'You should have a callbackURL'); assert.match(data, /process.env.GITHUB_CLIENT_SECRET/g, 'You should use process.env.GITHUB_CLIENT_SECRET'); assert.match(data, /process.env.GITHUB_CLIENT_ID/g, 'You should use process.env.GITHUB_CLIENT_ID'); }, xhr => { throw new Error(xhr.statusText); })

```

</section>
