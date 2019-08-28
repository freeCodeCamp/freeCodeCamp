---
id: 589fc830f9fc0f352b528e74
title: Set up the Environment
challengeType: 2
forumTopicId: 301566
localeTitle: Настройка среды
---

## Description
<section id='description'>
Напомним, что этот проект строится на следующем стартовом проекте <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-socketio/">Glitch</a> или клонируется из <a href="https://github.com/freeCodeCamp/boilerplate-socketio/">GitHub</a> . Добавьте Socket.IO в качестве зависимости и требуйте / создайте его на своем сервере, определенном как «io», с HTTP-сервером в качестве аргумента. <code>const io = require(&#39;socket.io&#39;)(http);</code> Первое, что нужно обработать, - это прослушивание нового соединения с клиентом. Ключевое слово <dfn>on</dfn> делает именно это - прослушивает конкретное событие. Для этого требуется 2 аргумента: строка, содержащая заголовок события, который выдается, и функция, с которой данные передаются. В случае нашего прослушивателя соединений мы используем <em>socket</em> для определения данных во втором аргументе. Сокет - это отдельный клиент, который подключен. Для прослушивания соединений на нашем сервере добавьте следующее между комментариями в своем проекте: <pre> io.on (&#39;connection&#39;, socket =&gt; {
  console.log («Пользователь подключен»);
}); </pre> Теперь для подключения клиента вам просто нужно добавить следующее к вашему client.js, которое загружается страницей после проверки подлинности: <pre> / * global io * /
var socket = io (); </pre> Комментарий подавляет ошибку, которую вы обычно видите, так как «io» в файле не определен. Мы уже добавили надежный CDN в библиотеку Socket.IO на странице в chat.pug. Теперь попробуйте загрузить приложение и пройти аутентификацию, и вы должны увидеть на своей консоли сервера «Пользователь подключился»! <strong>Заметка</strong> <br> <code>io()</code> работает только при подключении к сокету, размещенному на том же url / сервере. Для подключения к внешнему сокету, размещенному в другом месте, вы должны использовать <code>io.connect(&#39;URL&#39;);</code> , Представьте свою страницу, когда вы думаете, что у вас все в порядке.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Socket.IO is a dependency
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/package.json') .then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, 'socket.io', 'Your project should list "socket.io" as a dependency'); }, xhr => { throw new Error(xhr.statusText); })
  - text: You should correctly require and instantiate <code>socket.io</code> as <code>io</code>.
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js').then(data => {assert.match(data, /io.*=.*require.*('|")socket.io('|").*http/gi, 'You should correctly require and instantiate socket.io as io.');}, xhr => { throw new Error(xhr.statusText); })
  - text: Socket.IO should be listening for connections
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /io.on.*('|")connection('|").*socket/gi, 'io should listen for "connection" and socket should be the 2nd arguments variable'); }, xhr => { throw new Error(xhr.statusText); })
  - text: Your client should connect to your server
    testString: getUserInput => $.get(getUserInput('url')+ '/public/client.js') .then(data => { assert.match(data, /socket.*=.*io/gi, 'Your client should be connection to server with the connection defined as socket'); }, xhr => { throw new Error(xhr.statusText); })

```

</section>
