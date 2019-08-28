---
id: 5895f70df9fc0f352b528e68
title: Authentication Strategies
challengeType: 2
forumTopicId: 301547
localeTitle: Стратегии аутентификации
---

## Description
<section id='description'>
Напомним, что этот проект строится на следующем стартовом проекте <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/">Glitch</a> или клонируется из <a href="https://github.com/freeCodeCamp/boilerplate-advancednode/">GitHub</a> . Стратегия - это способ аутентификации пользователя. Вы можете использовать стратегию, позволяющую пользователям проходить аутентификацию на основе локально сохраненной информации (если вы сначала регистрируетесь) или от различных поставщиков, таких как Google или GitHub. Для этого проекта мы создадим локальную стратегию. Чтобы просмотреть список 100 стратегий, посетите сайт Passports <a href="http://passportjs.org/">здесь</a> . Добавьте <em>паспорт-локальный</em> в качестве зависимости и добавьте его на свой сервер следующим образом: <code>const LocalStrategy = require(&#39;passport-local&#39;);</code> Теперь вам нужно будет указать паспорт, чтобы <b>использовать</b> экземпляр объекта LocalStartegy с несколькими определенными настройками. Удостоверьтесь, что это, а также все, начиная с этого момента, инкапсулировано в соединение с базой данных, поскольку оно полагается на него! <pre> passport.use (новая LocalStrategy (
  функция (имя пользователя, пароль, сделанный) {
    db.collection (&#39;users&#39;). findOne ({имя пользователя: имя пользователя}, функция (err, user) {
      console.log (&#39;Пользователь&#39; + имя пользователя + &#39;пытался войти.&#39;);
      if (err) {return done (err); }
      if (! user) {return done (null, false); }
      if (password! == user.password) {return done (null, false); }
      return done (null, user);
    });
  }
)); </pre> Это определяет процесс, который нужно предпринять, когда мы пытаемся аутентифицировать кого-то локально. Сначала он пытается найти пользователя в нашей базе данных с введенным именем пользователя, затем он проверяет, соответствует ли пароль, а затем, если не было обнаружено ошибок, которые мы проверили, например неправильный пароль, возвращается объект-пользователи, и они проверку подлинности. Многие стратегии настроены с использованием разных настроек, но в общем, легко настроить его на основе README в этом репозитории стратегий. Хорошим примером этого является стратегия GitHub, в которой нам не нужно беспокоиться о имени пользователя или пароле, потому что пользователь будет отправлен на страницу авторизации GitHub для аутентификации, и пока они войдут в систему и согласятся, GitHub возвращает свой профиль для нам использовать. На следующем шаге мы определим, как на самом деле вызывать стратегию аутентификации для проверки пользователя на основе данных формы! Отправьте свою страницу, когда вы думаете, что у вас есть это прямо до этого момента.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Passport-local is a dependency
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/package.json') .then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, 'passport-local', 'Your project should list "passport-local " as a dependency'); }, xhr => { throw new Error(xhr.statusText); })
  - text: Passport-local correctly required and setup
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /require.*("|')passport-local("|')/gi, 'You should have required passport-local'); assert.match(data, /new LocalStrategy/gi, 'You should have told passport to use a new strategy'); assert.match(data, /findOne/gi, 'Your new local strategy should use the findOne query to find a username based on the inputs'); }, xhr => { throw new Error(xhr.statusText); })

```

</section>
