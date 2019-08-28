---
id: 589a69f5f9fc0f352b528e70
title: Implementation of Social Authentication
challengeType: 2
forumTopicId: 301559
localeTitle: Реализация социальной аутентификации
---

## Description
<section id='description'>
Напомним, что этот проект строится на следующем стартовом проекте <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-socialauth/">Glitch</a> или клонируется из <a href="https://github.com/freeCodeCamp/boilerplate-socialauth/">GitHub</a> . Основной путь такого рода аутентификации будет следовать в вашем приложении: <ol><li> Пользователь нажимает кнопку или ссылку, отправляя их на наш маршрут для аутентификации с использованием определенной стратегии (EG. GitHub) </li><li> Ваш маршрут требует <code>passport.authenticate(&#39;github&#39;)</code> который перенаправляет их в GitHub. </li><li> Страница, на которую пользователь приземляется, на GitHub, позволяет им войти в систему, если они еще не были. Затем он просит их одобрить доступ к своему профилю из нашего приложения. </li><li> Затем пользователь возвращается в наше приложение с определенным URL-адресом обратного вызова с их профилем, если он одобрен. </li><li> Теперь они аутентифицированы, и ваше приложение должно проверить, является ли он возвращаемым профилем, или сохранить его в своей базе данных, если это не так. </li></ol> Стратегии с OAuth требуют наличия, по крайней мере, <em>идентификатора</em> <em>клиента и секретности клиента,</em> который позволяет проверить, откуда идет запрос на аутентификацию, и если он действителен. Они получены с сайта, на котором вы пытаетесь внедрить аутентификацию с помощью, например, GitHub, и являетесь уникальными для вашего приложения. <b>ОНИ НЕ РАЗМЕЩАЮТСЯ</b> и никогда не должны загружаться в общедоступный репозиторий или записываться непосредственно в ваш код. Обычная практика заключается в том, чтобы поместить их в ваш <em>.ENV-</em> файл и ссылаться на них так: <code>process.env.GITHUB_CLIENT_ID</code> . Для этой задачи мы собираемся использовать стратегию GitHub. Получение <em>идентификатора клиента и секретности <em>из GitHub выполняется в настройках профиля вашего аккаунта в разделе «Настройки разработчика», а затем « <a href="https://github.com/settings/developers">Приложения OAuth</a> ». Нажмите «Зарегистрировать новое приложение», назовите свое приложение, вставьте URL-адрес на свою страницу с глюком ( <b>не URL-адрес кода проекта</b> ) и, наконец, URL-адрес обратного вызова, вставьте тот же URL-адрес, что и на главной странице, но с помощью «/ auth / github / callback &#39;. Здесь пользователи будут перенаправлены на нас для обработки после проверки подлинности на GitHub. Сохраните возвращаемую информацию как «GITHUB_CLIENT_ID» и «GITHUB_CLIENT_SECRET» в вашем .ENV-файле. В вашем ремикс-проекте создайте 2 маршрута, принимающих запросы GET: / auth / github и / auth / github / callback. Первый должен только называть паспорт для аутентификации «github», а второй должен вызывать паспорт для аутентификации «github» с перенаправлением отказа на «/», а затем, если это успешно перенаправляется на «/ profile» (аналогично нашему последнему проекту). Пример того, как выглядит &#39;/ auth / github / callback&#39;, аналогичен тому, как мы обрабатывали обычный логин в нашем последнем проекте:</em></em> <pre> <em><em>app.route ( &#39;/ Войти&#39;)
  .post (passport.authenticate (&#39;local&#39;, {failRedirect: &#39;/&#39;}), (req, res) =&gt; {
    res.redirect ( &#39;/ профиль&#39;);
  });</em></em> </pre> <em><em>Представьте свою страницу, когда вы думаете, что у вас все в порядке. Если вы работаете в ошибки, вы можете проверить проект до этого момента <a href="https://gist.github.com/JosephLivengood/28ea2cae7e1dc6a53d7f0c42d987313b">здесь</a> .</em></em>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Route /auth/github correct
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /('|")\/auth\/github('|")[^]*get.*passport.authenticate.*github/gi, 'Route auth/github should only call passport.authenticate with github'); }, xhr => { throw new Error(xhr.statusText); })
  - text: Route /auth/github/callback correct
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /('|")\/auth\/github\/callback('|")[^]*get.*passport.authenticate.*github.*failureRedirect:( |)("|')\/("|')/gi, 'Route auth/github/callback should accept a get request and call passport.authenticate for github with a failure redirect to home'); }, xhr => { throw new Error(xhr.statusText); })

```

</section>
