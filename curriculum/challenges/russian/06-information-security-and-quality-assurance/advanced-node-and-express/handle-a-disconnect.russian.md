---
id: 589fc831f9fc0f352b528e76
title: Handle a Disconnect
challengeType: 2
forumTopicId: 301552
localeTitle: Обращение с разъединением
---

## Description
<section id='description'>
Напомним, что этот проект строится на следующем стартовом проекте <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-socketio/">Glitch</a> или клонируется из <a href="https://github.com/freeCodeCamp/boilerplate-socketio/">GitHub</a> . Вы можете заметить, что до сих пор вы только увеличивали количество пользователей. Обращение с отключением пользователя так же просто, как обращение с исходным подключением, за исключением того, что вам нужно прослушивать его для каждого сокета по сравнению со всем сервером. <hr> Для этого добавьте в существующий прослушиватель подключений слушатель, который прослушивает «разъединение» в сокете без передачи данных. Вы можете протестировать эту функциональность, просто зарегистрировавшись на консоли, которую пользователь отключил. <code>socket.on(&#39;disconnect&#39;, () =&gt; { /*anything you want to do on disconnect*/ });</code> Чтобы клиенты постоянно обновляли количество текущих пользователей, вы должны уменьшить currentUsers на 1, когда произойдет отключение, затем выпустите событие «счет пользователя» с обновленным счетчиком! <strong>Заметка</strong> <br> Подобно «разъединению», все другие события, которые сокет может испускать на сервер, должны обрабатываться в подключающемся прослушивателе, где у нас есть «сокет». Представьте свою страницу, когда вы думаете, что у вас все в порядке.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Server handles the event disconnect from a socket
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /socket.on.*('|")disconnect('|")/gi, ''); }, xhr => { throw new Error(xhr.statusText); })
  - text: Your client is listening for 'user count' event
    testString: getUserInput => $.get(getUserInput('url')+ '/public/client.js') .then(data => { assert.match(data, /socket.on.*('|")user count('|")/gi, 'Your client should be connection to server with the connection defined as socket'); }, xhr => { throw new Error(xhr.statusText); })

```

</section>
