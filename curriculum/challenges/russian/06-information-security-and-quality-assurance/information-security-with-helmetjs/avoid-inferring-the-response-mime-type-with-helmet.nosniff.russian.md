---
id: 587d8248367417b2b2512c3a
title: Avoid Inferring the Response MIME Type with helmet.noSniff()
challengeType: 2
forumTopicId: 301574
localeTitle: Избегайте вызывать тип MIME ответа с помощью helmet.noSniff()
---

## Description
<section id='description'>
Напомним, что этот проект строится на следующем стартовом проекте <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/">Glitch</a> или клонируется из <a href="https://github.com/freeCodeCamp/boilerplate-infosec/">GitHub</a>. Браузеры могут использовать контент или MIME, чтобы адаптироваться к различным типам данных, приходящих ответом. Они переопределяют заголовки Content-Type для распознования и обработки данных. Хотя это может быть удобно в некоторых сценариях, это также может привести к некоторым опасным атакам. Это промежуточное ПО устанавливает заголовок X-Content-Type-Options в nosniff. Это указывает браузеру не обходить предоставленный Content-Type.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: helmet.noSniff() промежуточное ПО должно быть правильно установлено
    testString: getUserInput => $.get(getUserInput('url') + '/_api/app-info').then(data => { assert.include(data.appStack, 'nosniff'); assert.equal(data.headers['x-content-type-options'], 'nosniff'); }, xhr => { throw new Error(xhr.responseText); })

```

</section>
