---
id: 5895f70df9fc0f352b528e6a
title: Create New Middleware
challengeType: 2
forumTopicId: 301551
localeTitle: Создать новое промежуточное программное обеспечение
---

## Description
<section id='description'>
Напомним, что этот проект строится на следующем стартовом проекте <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/">Glitch</a> или клонируется из <a href="https://github.com/freeCodeCamp/boilerplate-advancednode/">GitHub</a> . Как и в случае, любой пользователь может просто перейти к / профилю, прошли ли они проверку подлинности или нет, набрав URL-адрес. Мы хотим предотвратить это, проверив, проверен ли пользователь первым, прежде чем отображать страницу профиля. Это прекрасный пример того, когда создавать промежуточное ПО. Задача здесь заключается в создании функции промежуточного программного обеспечения, обеспечивающей <code>ensureAuthenticated(req, res, next)</code> , которая проверяет, аутентифицирована ли пользователь, вызывая passports isAuthenticated по <em>запросу,</em> который в свою очередь проверяет, что <em>req.user</em> должен быть определен. Если это так, то следует вызвать <em>next ()</em> , иначе мы можем просто ответить на запрос с перенаправлением на нашу домашнюю страницу для входа. Реализация этого промежуточного программного обеспечения: <pre> функция makeAuthenticated (req, res, next) {
  if (req.isAuthenticated ()) {
      return next ();
  }
  res.redirect ( &#39;/&#39;);
}; </pre> Теперь добавьте <em>makeAuthenticated</em> в качестве промежуточного программного обеспечения в запрос для страницы профиля перед аргументом запроса get, содержащего функцию, которая отображает страницу. <pre> app.route ( &#39;/ профиль&#39;)
  .get (обеспечитьAuthenticated, (req, res) =&gt; {
       res.render (process.cwd () + &#39;/ views / pug / profile&#39;);
  }); </pre> Представьте свою страницу, когда вы думаете, что у вас все в порядке.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Middleware ensureAuthenticated should be implemented and on our /profile route
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /ensureAuthenticated[^]*req.isAuthenticated/gi, 'Your ensureAuthenticated middleware should be defined and utilize the req.isAuthenticated function'); assert.match(data, /profile[^]*get[^]*ensureAuthenticated/gi, 'Your ensureAuthenticated middleware should be attached to the /profile route'); }, xhr => { throw new Error(xhr.statusText); })
  - text: A Get request to /profile correctly redirects to / since we are not authenticated
    testString: getUserInput => $.get(getUserInput('url')+ '/profile') .then(data => { assert.match(data, /Home page/gi, 'An attempt to go to the profile at this point should redirect to the homepage since we are not logged in'); }, xhr => { throw new Error(xhr.statusText); })

```

</section>
