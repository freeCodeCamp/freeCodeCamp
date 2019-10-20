---
id: 587d8248367417b2b2512c3b
title: Prevent IE from Opening Untrusted HTML with helmet.ieNoOpen()
challengeType: 2
forumTopicId: 301584
localeTitle: Предотвратите запуск IE из ненадежного HTML с помощью helmet.ieNoOpen ()
---

## Description
<section id='description'>
Напомним, что этот проект строится на следующем стартовом проекте <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/">Glitch</a> или клонируется из <a href="https://github.com/freeCodeCamp/boilerplate-infosec/">GitHub</a> . Некоторые веб-приложения будут служить ненадежным HTML для загрузки. Некоторые версии Internet Explorer по умолчанию открывают эти HTML-файлы в контексте вашего сайта. Это означает, что ненадежная HTML-страница может начать делать плохие вещи в контексте ваших страниц. Это промежуточное ПО устанавливает заголовок X-Download-Options в noopen. Это не позволит пользователям IE выполнять загрузку в контексте доверенного сайта.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: helmet.ieNoOpen() middleware should be mounted correctly
    testString: getUserInput => $.get(getUserInput('url') + '/_api/app-info').then(data => { assert.include(data.appStack, 'ienoopen'); assert.equal(data.headers['x-download-options'], 'noopen'); }, xhr => { throw new Error(xhr.responseText); })

```

</section>
