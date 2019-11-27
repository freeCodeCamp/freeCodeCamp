---
id: 589fc832f9fc0f352b528e79
title: Send and Display Chat Messages
challengeType: 2
forumTopicId: 301562
localeTitle: Отправка и отображение сообщений чата
---

## Description
<section id='description'>
Напомним, что этот проект строится на следующем стартовом проекте <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-socketio/">Glitch</a> или клонируется из <a href="https://github.com/freeCodeCamp/boilerplate-socketio/">GitHub</a> . Пришло время, когда вы разрешаете клиентам отправлять чат-сообщение на сервер, чтобы выдать всем клиентам! Уже в вашем файле client.js вы должны увидеть, что уже есть блок обработки кода, когда отправляется форма messgae! ( <code>$(&#39;form&#39;).submit(function(){ /*logic*/ });</code> ) <hr> В коде, который вы обрабатываете отправку формы, вы должны выпустить событие после определения «messageToSend», но перед <code>#m</code> текстового поля <code>#m</code> . Событие должно быть названо «сообщение чата», и данные должны быть просто «messageToSend». <code>socket.emit(&#39;chat message&#39;, messageToSend);</code> Теперь на вашем сервере вы должны слушать сокет для сообщения чата с сообщением «сообщение». Как только событие будет получено, оно должно затем передать сообщение чата всем <code>io.emit</code> с данными, являющимися объектом, содержащим «имя» и «сообщение». Теперь, на вашем клиенте, вы должны теперь прослушать «сообщение чата», а при его получении добавьте элемент списка в <code>#messages</code> с именем двоеточие и сообщение! В этот момент чат должен быть полностью функциональным и отправлять сообщения всем клиентам! Представьте свою страницу, когда вы думаете, что у вас все в порядке. Если вы столкнулись с ошибками, вы можете проверить проект до этого момента <a href="https://gist.github.com/JosephLivengood/3e4b7750f6cd42feaa2768458d682136">здесь для сервера</a> и <a href="https://gist.github.com/JosephLivengood/41ba76348df3013b7870dc64861de744">здесь для клиента</a> .
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Server listens for 'chat message' then emits it properly
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /socket.on.*('|")chat message('|")[^]*io.emit.*('|")chat message('|").*name.*message/gi, 'Your server should listen to the socket for "chat message" then emit to all users "chat message" with name and message in the data object'); }, xhr => { throw new Error(xhr.statusText); })
  - text: Client properly handling and displaying the new data from event 'chat message'
    testString: 'getUserInput => $.get(getUserInput(''url'')+ ''/public/client.js'') .then(data => { assert.match(data, /socket.on.*(''|")chat message(''|")[^]*messages.*li/gi, ''You should append a list item to #messages on your client within the "chat message" event listener to display the new message''); }, xhr => { throw new Error(xhr.statusText); })'

```

</section>
