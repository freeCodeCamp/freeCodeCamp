---
id: bd7158d8c443edefaeb5bdef
title: Timestamp Microservice
challengeType: 4
isRequired: true
forumTopicId: 301508
localeTitle: Временная метка Микросервис
---

## Description
<section id='description'>
Создайте полноценное приложение JavaScript, функционально похожее на это: <a href='https://curse-arrow.glitch.me/' target='_blank'>https://curse-arrow.glitch.me/</a> . 
Работа над этим проектом потребует от вас написания кода на Glitch для нашего стартового проекта. После завершения этого проекта вы можете скопировать общедоступный URL-адрес сбоя (на главную страницу вашего приложения) на этот экран, чтобы протестировать его! При желании вы можете написать свой проект на другой платформе, но он должен быть открыт для нашего тестирования. 
Запустите этот проект на Glitch по <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-project-timestamp/' target='_blank'>этой ссылке</a> или клонируйте <a href='https://github.com/freeCodeCamp/boilerplate-project-timestamp/'>этот репозиторий</a> на GitHub! Если вы используете Glitch, не забудьте сохранить ссылку на ваш проект в безопасном месте!
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: It should handle a valid date, and return the correct unix timestamp
    testString: getUserInput => $.get(getUserInput('url') + '/api/timestamp/2016-12-25').then(data => { assert.equal(data.unix, 1482624000000, 'Should be a valid unix timestamp'); }, xhr => { throw new Error(xhr.responseText); })
  - text: It should handle a valid date, and return the correct UTC string
    testString: getUserInput => $.get(getUserInput('url')+ '/api/timestamp/2016-12-25').then(data => { assert.equal(data.utc, 'Sun, 25 Dec 2016 00:00:00 GMT', 'Should be a valid UTC date string'); }, xhr => { throw new Error(xhr.responseText); })
  - text: It should handle a valid unix date, and return the correct unix timestamp
    testString: getUserInput => $.get(getUserInput('url') + '/api/timestamp/1482624000000').then(data => { assert.equal(data.unix, 1482624000000) ;  }, xhr => { throw new Error(xhr.responseText); })
  - text: It should return the expected error message for an invalid date
    testString: getUserInput => $.get(getUserInput('url') + '/api/timestamp/this-is-not-a-date').then(data => { assert.equal(data.error.toLowerCase(), 'invalid date');}, xhr => { throw new Error(xhr.responseText); })
  - text: It should handle an empty date parameter, and return the current time in unix format
    testString: getUserInput => $.get(getUserInput('url') + '/api/timestamp').then(data => { var now = Date.now(); assert.approximately(data.unix, now, 20000) ;}, xhr => { throw new Error(xhr.responseText); })
  - text: It should handle an empty date parameter, and return the current time in UTC format
    testString: getUserInput => $.get(getUserInput('url') + '/api/timestamp').then(data => { var now = Date.now(); var serverTime = (new Date(data.utc)).getTime(); assert.approximately(serverTime, now, 20000) ;}, xhr => { throw new Error(xhr.responseText); })

```

</section>
