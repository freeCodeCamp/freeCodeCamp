---
id: 589fc831f9fc0f352b528e75
title: Communicate by Emitting
challengeType: 2
forumTopicId: 301550
localeTitle: Общение через Emitting
---

## Description
<section id='description'>
Напомним, что этот проект строится на следующем стартовом проекте <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-socketio/">Glitch</a> или клонируется из <a href="https://github.com/freeCodeCamp/boilerplate-socketio/">GitHub</a> . <dfn>Emit</dfn> - самый распространенный способ общения, который вы будете использовать. Когда вы выдаете что-то с сервера на «io», вы отправляете имя события и данные во все подключенные сокеты. Хорошим примером этой концепции будет исчисление текущего количества подключенных пользователей каждый раз, когда подключается новый пользователь! <hr> Начните с добавления переменной, чтобы отслеживать пользователей непосредственно перед тем, где вы сейчас слушаете подключения. <code>var currentUsers = 0;</code> Теперь, когда кто-то подключается, вы должны увеличить счетчик перед исчислением счета, поэтому вам нужно добавить инкремент в прослушиватель соединения. <code>++currentUsers;</code> Наконец, после увеличения счетчика, вы должны испустить событие (все еще внутри прослушивателя соединения). Событие должно быть названо «user count», и данные должны быть просто «currentUsers». <code>io.emit(&#39;user count&#39;, currentUsers);</code> <hr> Теперь вы можете реализовать способ для вашего клиента слушать это событие! Аналогично прослушиванию соединения на сервере вы будете использовать ключевое слово <em>on</em> . <pre> socket.on (&#39;user count&#39;, function (data) {
  console.log (данные);
}); </pre> Теперь попробуйте загрузить приложение и выполнить проверку подлинности, и вы должны увидеть в своей клиентской консоли «1», представляющий текущий счет пользователя! Попробуйте загрузить больше клиентов и пройти проверку подлинности, чтобы увидеть, как число увеличивается. Представьте свою страницу, когда вы думаете, что у вас все в порядке.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: currentUsers is defined
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js').then(data => {assert.match(data, /currentUsers/gi, 'You should have variable currentUsers defined');}, xhr => { throw new Error(xhr.statusText); })
  - text: Server emits the current user count at each new connection
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /io.emit.*('|")user count('|").*currentUsers/gi, 'You should emit "user count" with data currentUsers'); }, xhr => { throw new Error(xhr.statusText); })
  - text: Your client is listening for 'user count' event
    testString: getUserInput => $.get(getUserInput('url')+ '/public/client.js') .then(data => { assert.match(data, /socket.on.*('|")user count('|")/gi, 'Your client should be connection to server with the connection defined as socket'); }, xhr => { throw new Error(xhr.statusText); })

```

</section>
