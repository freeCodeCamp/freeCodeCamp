---
id: 587d8247367417b2b2512c37
title: Hide Potentially Dangerous Information Using helmet.hidePoweredBy()
challengeType: 2
forumTopicId: 301580
localeTitle: Скрыть потенциально опасную информацию Использование helmet.hidePoweredBy ()
---

## Description
<section id='description'>
Напомним, что этот проект строится на следующем стартовом проекте <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/">Glitch</a> или клонируется из <a href="https://github.com/freeCodeCamp/boilerplate-infosec/">GitHub</a> . Хакеры могут использовать известные уязвимости в Express / Node, если они видят, что ваш сайт работает от Express. X-Powered-By: Экспресс отправляется по каждому запросу, поступающему из Express по умолчанию. Средство helmet.hidePoweredBy () удалит заголовок X-Powered-By. Вы также можете явно настроить заголовок на что-то еще, чтобы отключить людей. например app.use (helmet.hidePoweredBy ({setTo: &#39;PHP 4.2.0&#39;}))
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: helmet.hidePoweredBy() middleware should be mounted correctly
    testString: getUserInput => $.get(getUserInput('url') + '/_api/app-info').then(data => { assert.include(data.appStack, 'hidePoweredBy'); assert.notEqual(data.headers['x-powered-by'], 'Express')}, xhr => { throw new Error(xhr.responseText); })

```

</section>
