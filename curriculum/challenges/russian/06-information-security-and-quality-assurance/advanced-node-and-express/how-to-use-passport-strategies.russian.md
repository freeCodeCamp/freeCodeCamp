---
id: 5895f70df9fc0f352b528e69
title: How to Use Passport Strategies
challengeType: 2
forumTopicId: 301555
localeTitle: Как использовать паспортные стратегии
---

## Description
<section id='description'>
Напомним, что этот проект строится на следующем стартовом проекте <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/">Glitch</a> или клонируется из <a href="https://github.com/freeCodeCamp/boilerplate-advancednode/">GitHub</a> . В поставляемом файле index.pug есть форма входа. Ранее он был скрыт из-за встроенного javascript, <code>if showLogin</code> с формой с отступом после него. До того, как showLogin как переменная никогда не определялась, он никогда не отображал блок кода, содержащий форму. Идем дальше, и на res.render для этой страницы добавьте новую переменную в объект <code>showLogin: true</code> . Когда вы обновляете свою страницу, вы должны увидеть форму! Эта форма настроена на <b>POST</b> on <em>/ login,</em> поэтому здесь мы должны настроить прием POST и аутентифицировать пользователя. Для этой задачи вы должны добавить маршрут / логин, чтобы принять запрос POST. Для аутентификации на этом маршруте вам нужно добавить промежуточное программное обеспечение, чтобы сделать это, прежде чем отправлять ответ. Это делается путем передачи другого аргумента с промежуточным программным обеспечением перед вашей <code>function(req,res)</code> с ответом! Промежуточное программное обеспечение для использования - <code>passport.authenticate(&#39;local&#39;)</code> . <em>passport.authenticate</em> также может принимать некоторые параметры в качестве аргумента, такие как: <code>{ failureRedirect: &#39;/&#39; }</code> который невероятно полезен, поэтому обязательно добавьте его также. В качестве ответа после использования промежуточного программного обеспечения (которое будет вызываться только при прохождении промежуточного программного обеспечения аутентификации) необходимо перенаправить пользователя в <em>/ profile,</em> и этот маршрут должен отобразить представление «profile.pug». Если аутентификация прошла успешно, пользовательский объект будет сохранен в <em>req.user</em> . Теперь, когда вы вводите имя пользователя и пароль в форме, оно должно перенаправляться на главную страницу <em>/,</em> а в консоли вашего сервера должно быть «Пользователь {USERNAME], пытающийся войти в систему». поскольку в настоящее время мы не можем войти в систему для пользователя, который не зарегистрирован. Представьте свою страницу, когда вы думаете, что у вас все в порядке. Если вы работаете в ошибки, вы можете проверить проект завершен до этого момента <a href="https://gist.github.com/JosephLivengood/8a335d1a68ed9170da02bb9d8f5b71d5">здесь</a> .
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: All steps correctly implemented in the server.js
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /showLogin:( |)true/gi, 'You should be passing the variable "showLogin" as true to your render function for the homepage'); assert.match(data, /failureRedirect:( |)('|")\/('|")/gi, 'Your code should include a failureRedirect to the "/" route'); assert.match(data, /login[^]*post[^]*local/gi, 'You should have a route for login which accepts a POST and passport.authenticates local'); }, xhr => { throw new Error(xhr.statusText); })
  - text: A POST request to /login correctly redirects to /
    testString: getUserInput => $.post(getUserInput('url')+ '/login') .then(data => { assert.match(data, /Looks like this page is being rendered from Pug into HTML!/gi, 'A login attempt at this point should redirect to the homepage since we do not have any registered users'); }, xhr => { throw new Error(xhr.statusText); })

```

</section>
