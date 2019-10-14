---
id: 589fc832f9fc0f352b528e78
title: Announce New Users
challengeType: 2
forumTopicId: 301546
localeTitle: Объявление новых пользователей
---

## Description
<section id='description'>
Напомним, что этот проект строится на следующем стартовом проекте <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-socketio/">Glitch</a> или клонируется из <a href="https://github.com/freeCodeCamp/boilerplate-socketio/">GitHub</a> . Многие чаты могут оповещаться, когда пользователь подключается или отключается, а затем отображает это для всех подключенных пользователей в чате. Увидев, что вы уже выбрали событие для подключения и отключения, вам просто нужно будет изменить это событие для поддержки такой функции. Наиболее логичным способом является отправка 3-х частей данных с событием: имя пользователя, подключенного / отключенного, текущий счетчик пользователей, и если это имя связано или отключено. <hr> Измените имя события на «user» и, поскольку данные передают объект вместе с именами полей «name», «currentUsers» и «boolean» connected (если это правда, если соединение или false для отключения отправленного пользователя). Не забудьте внести изменения в обе точки, у которых было событие «счетчик пользователей», и установить отключить один, чтобы послал false для поля «подключено» вместо true, как событие, испущенное при подключении. <code>io.emit(&#39;user&#39;, {name: socket.request.user.name, currentUsers, connected: true});</code> Теперь у вашего клиента будет вся необходимая информация, чтобы правильно отображать текущий счет пользователя и аннуитет, когда пользователь подключается или отключается! Чтобы обработать это событие на стороне клиента, мы должны прослушать «пользователь», а затем обновить текущий счет пользователя, используя jQuery, чтобы изменить текст <code>#num-users</code> на «{NUMBER} пользователей онлайн», а также добавить <code>&lt;li&gt;</code> в неупорядоченный список с id &#39;messages&#39; с &#39;{NAME} имеет {join / left} чат.&#39;. Реализация этого может выглядеть следующим образом: <pre> socket.on(&#39;user&#39;, function(data) {
  $(&#39;#num-users&#39;).text(data.currentUsers + &#39;пользователей онлайн);
  var message = data.name;
  if (data.connected) {
    message += &#39;присоединился(лась) к чату.&#39;;
  } else {
    message += &#39;покинул(а) чат.&#39;;
  }
  $(&#39;#messages&#39;).append($(&#39;&lt;li&gt;&#39;).html(&#39;&lt;b&gt;&#39; + message + &#39;&lt;\/b&gt;&#39;));
}); </pre> Представьте свою страницу, когда вы думаете, что у вас все в порядке.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Event 'user' is emitted with name, currentUsers, and connected
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /io.emit.*('|")user('|").*name.*currentUsers.*connected/gi, 'You should have an event emitted named user sending name, currentUsers, and connected'); }, xhr => { throw new Error(xhr.statusText); })
  - text: Client properly handling and displaying the new data from event 'user'
    testString: 'getUserInput => $.get(getUserInput(''url'')+ ''/public/client.js'') .then(data => { assert.match(data, /socket.on.*(''|")user(''|")[^]*num-users/gi, ''You should change the text of #num-users within on your client within the "user" even listener to show the current users connected''); assert.match(data, /socket.on.*(''|")user(''|")[^]*messages.*li/gi, ''You should append a list item to #messages on your client within the "user" event listener to annouce a user came or went''); }, xhr => { throw new Error(xhr.statusText); })'

```

</section>
