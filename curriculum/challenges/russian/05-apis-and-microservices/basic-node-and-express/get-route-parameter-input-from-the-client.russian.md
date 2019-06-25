---
id: 587d7fb2367417b2b2512bf5
title: Get Route Parameter Input from the Client
localeTitle: Получить ввод параметров маршрута от клиента
challengeType: 2
---

## Description
<section id='description'> 
При создании API мы должны разрешать пользователям сообщать нам, что они хотят получить от нашего сервиса. Например, если клиент запрашивает информацию о пользователе, хранящемся в базе данных, ему нужен способ сообщить нам, какого пользователя он заинтересовал. Одним из возможных способов достижения этого результата является использование параметров маршрута. Параметры маршрута - это именованные сегменты URL, разделенные косой чертой (/). Каждый сегмент фиксирует значение той части URL, которая соответствует его позиции. Захваченные значения можно найти в объекте <code>req.params</code> . 
<blockquote>route_path: '/user/:userId/book/:bookId'<br>actual_request_URL: '/user/546/book/6754' <br>req.params: {userId: '546', bookId: '6754'}</blockquote> 
Построить эхо-сервер, смонтированный по маршруту <code>GET /:word/echo</code> . Ответьте с помощью объекта JSON, взяв структуру <code>{echo: word}</code> . Вы можете найти слово для повторения в <code>req.params.word</code> . Вы можете проверить свой маршрут из адресной строки вашего браузера, посетив несколько подходящих маршрутов, например, your-app-rootpath / freecodecamp / echo 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: «Тест 1- ваш эхо-сервер должен правильно повторять слова»
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/eChOtEsT/echo'').then(data => { assert.equal(data.echo, ''eChOtEsT'', ''Test 1: the echo server is not working as expected'') }, xhr => { throw new Error(xhr.responseText); })'
  - text: «Тест 2- ваш эхо-сервер должен правильно повторять слова»
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/ech0-t3st/echo'').then(data => { assert.equal(data.echo, ''ech0-t3st'', ''Test 2: the echo server is not working as expected'') }, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
