---
id: 587d7fb2367417b2b2512bf5
title: Get Route Parameter Input from the Client
challengeType: 2
forumTopicId: 301513
localeTitle: Получить ввод параметров маршрута от клиента
---

## Description
<section id='description'>
При создании API мы должны разрешать пользователям сообщать нам, что они хотят получить от нашего сервиса. Например, если клиент запрашивает информацию о пользователе, хранящемся в базе данных, ему нужен способ сообщить нам, какого пользователя он заинтересовал. Одним из возможных способов достижения этого результата является использование параметров маршрута. Параметры маршрута - это именованные сегменты URL, разделенные косой чертой (/). Каждый сегмент фиксирует значение той части URL, которая соответствует его позиции. Захваченные значения можно найти в объекте <code>req.params</code> . 
<blockquote>route_path: '/user/:userId/book/:bookId'<br>actual_request_URL: '/user/546/book/6754' <br>req.params: {userId: '546', bookId: '6754'}</blockquote> 
Построить эхо-сервер, смонтированный по маршруту <code>GET /:word/echo</code> . Ответьте с помощью объекта JSON, взяв структуру <code>{echo: word}</code> . Вы можете найти слово для повторения в <code>req.params.word</code> . Вы можете проверить свой маршрут из адресной строки вашего браузера, посетив несколько подходящих маршрутов, например, your-app-rootpath / freecodecamp / echo
</section>

## Instructions
<section id='instructions'>
Build an echo server, mounted at the route <code>GET /:word/echo</code>. Respond with a JSON object, taking the structure <code>{echo: word}</code>. You can find the word to be repeated at <code>req.params.word</code>. You can test your route from your browser's address bar, visiting some matching routes, e.g. <code>your-app-rootpath/freecodecamp/echo</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Test 1 : Your echo server should repeat words correctly'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/eChOtEsT/echo'').then(data => { assert.equal(data.echo, ''eChOtEsT'', ''Test 1: the echo server is not working as expected'') }, xhr => { throw new Error(xhr.responseText); })'
  - text: 'Test 2 : Your echo server should repeat words correctly'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/ech0-t3st/echo'').then(data => { assert.equal(data.echo, ''ech0-t3st'', ''Test 2: the echo server is not working as expected'') }, xhr => { throw new Error(xhr.responseText); })'

```

</section>
