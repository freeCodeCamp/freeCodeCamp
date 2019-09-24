---
id: 589fc831f9fc0f352b528e77
title: Authentication with Socket.IO
challengeType: 2
forumTopicId: 301548
localeTitle: Аутентификация с помощью Socket.IO
---

## Description
<section id='description'>
Напомним, что этот проект строится на следующем стартовом проекте <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-socketio/">Glitch</a> или клонируется из <a href="https://github.com/freeCodeCamp/boilerplate-socketio/">GitHub</a> . В настоящее время вы не можете определить, кто подключен к вашему веб-соке. В то время как контейнер req.user представляет собой объект пользователя, то есть только тогда, когда ваш пользователь взаимодействует с веб-сервером и с веб-сокетами, у вас нет запроса (запроса), и для этого нет пользовательских данных. Один из способов решить проблему знания того, кто связан с вашим веб-сокетом, - это разбор и декодирование файла cookie, который содержит сессию паспорта, а затем десериализацию его для получения пользовательского объекта. К счастью, на NPM есть пакет только для этого, который превращает сложную задачу в нечто простое! <hr> Добавьте «passport.socketio» в качестве зависимости и укажите его как «passportSocketIo». Теперь мы просто должны сказать Socket.IO, чтобы использовать его и установить параметры. Убедитесь, что это добавлено до существующего кода сокета, а не в существующем прослушивателе подключений. Для вашего сервера он должен выглядеть следующим образом: <pre> io.use (passportSocketIo.authorize ({
  cookieParser: cookieParser,
  ключ: «express.sid»,
  secret: process.env.SESSION_SECRET,
  store: sessionStore
})); </pre> Вы также можете передать «успех» и «сбой» функцией, которая будет вызываться после завершения процесса проверки подлинности, когда клиент пытается подключиться. Пользовательский объект теперь доступен на вашем объекте сокета как <code>socket.request.user</code> . Например, теперь вы можете добавить следующее: <code>console.log(&#39;user &#39; + socket.request.user.name + &#39; connected&#39;);</code> и он будет подключаться к серверной консоли, которая подключилась! Представьте свою страницу, когда вы думаете, что у вас все в порядке. Если вы работаете в ошибки, вы можете проверить проект до этого момента <a href="https://gist.github.com/JosephLivengood/a9e69ff91337500d5171e29324e1ff35">здесь</a> .
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: passportSocketIo is a dependency
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/package.json') .then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, 'passport.socketio', 'Your project should list "passport.socketio" as a dependency'); }, xhr => { throw new Error(xhr.statusText); })
  - text: passportSocketIo is properly required
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js').then(data => { assert.match(data, /require\((['"])passport\.socketio\1\)/gi, 'You should correctly require and instantiate "passport.socketio"');}, xhr => { throw new Error(xhr.statusText); })
  - text: passportSocketIo is properly setup
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /io\.use\(.+\.authorize\(/gi, 'You should register "passport.socketio" as socket.io middleware and provide it correct options'); }, xhr => { throw new Error(xhr.statusText); })

```

</section>
