---
id: 587d8249367417b2b2512c3e
title: Disable Client-Side Caching with helmet.noCache()
challengeType: 2
forumTopicId: 301576
localeTitle: Отключить кэширование на стороне клиента с помощью helmet.noCache ()
---

## Description
<section id='description'>
Напомним, что этот проект строится на следующем стартовом проекте <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/">Glitch</a> или клонируется из <a href="https://github.com/freeCodeCamp/boilerplate-infosec/">GitHub</a> . Если вы выпускаете обновление для своего сайта и хотите, чтобы пользователи всегда загружали более новую версию, вы можете (попытаться) отключить кеширование в браузере клиента. Это может быть полезно и в разработке. Кэширование имеет преимущества производительности, которые вы потеряете, поэтому используйте эту опцию только тогда, когда есть настоящая необходимость.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: helmet.noCache() middleware should be mounted correctly
    testString: getUserInput => $.get(getUserInput('url') + '/_api/app-info').then(data => { assert.include(data.appStack, 'nocache'); assert.equal(data.headers['cache-control'], 'no-store, no-cache, must-revalidate, proxy-revalidate'); }, xhr => { throw new Error(xhr.responseText); })

```

</section>
