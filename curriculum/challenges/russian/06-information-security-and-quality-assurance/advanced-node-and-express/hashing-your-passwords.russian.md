---
id: 58a25c98f9fc0f352b528e7f
title: Hashing Your Passwords
challengeType: 2
forumTopicId: 301553
localeTitle: Хеширование ваших паролей
---

## Description
<section id='description'>
Напомним, что этот проект строится на следующем стартовом проекте <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/">Glitch</a> или клонируется из <a href="https://github.com/freeCodeCamp/boilerplate-advancednode/">GitHub</a> . Возвращаясь к разделу информационной безопасности, вы, возможно, помните, что хранение паролей с открытым текстом <em>никогда не бывает в</em> порядке. Теперь пришло время реализовать BCrypt для решения этой проблемы. <hr> Добавьте BCrypt в качестве зависимости и требуйте его на своем сервере. Вам нужно будет обрабатывать хэширование в двух ключевых областях: где вы обрабатываете регистрацию / сохранение новой учетной записи и когда вы проверяете, что пароль правильный для входа. В настоящее время на нашем пути регистрации вы вводите пароль пользователя в базу данных следующим образом: <code>password: req.body.password</code> . Простым способом реализации сохранения хеша является добавление следующего до вашей логики базы данных <code>var hash = bcrypt.hashSync(req.body.password, 12);</code> и заменяет <code>req.body.password</code> в базе данных, сохраняя только <code>password: hash</code> . Наконец, по нашей стратегии проверки подлинности мы проверяем следующее в нашем коде перед завершением процесса: <code>if (password !== user.password) { return done(null, false); }</code> . После внесения предыдущих изменений теперь <code>user.password</code> является хешем. Прежде чем вносить изменения в существующий код, обратите внимание на то, как оператор проверяет, не является ли пароль НЕ равным, а затем возвращает не аутентифицированный. Имея это в виду, ваш код может выглядеть следующим образом, чтобы правильно проверить введенный пароль против хэша: <code>if (!bcrypt.compareSync(password, user.password)) { return done(null, false); }</code> Это все, что нужно для реализации одной из самых важных функций безопасности при хранении паролей! Представьте свою страницу, когда вы думаете, что у вас все в порядке.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: BCrypt is a dependency
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/package.json') .then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, 'bcrypt', 'Your project should list "bcrypt" as a dependency'); }, xhr => { throw new Error(xhr.statusText); })
  - text: BCrypt correctly required and implemented
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /require.*("|')bcrypt("|')/gi, 'You should have required bcrypt'); assert.match(data, /bcrypt.hashSync/gi, 'You should use hash the password in the registration'); assert.match(data, /bcrypt.compareSync/gi, 'You should compare the password to the hash in your strategy'); }, xhr => { throw new Error(xhr.statusText); })

```

</section>
