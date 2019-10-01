---
id: 587d8248367417b2b2512c3d
title: Disable DNS Prefetching with helmet.dnsPrefetchControl()
challengeType: 2
forumTopicId: 301577
localeTitle: Отключить предварительную выборку DNS с помощью helmet.dnsPrefetchControl ()
---

## Description
<section id='description'>
Напомним, что этот проект строится на следующем стартовом проекте <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/">Glitch</a> или клонируется из <a href="https://github.com/freeCodeCamp/boilerplate-infosec/">GitHub</a> . Чтобы повысить производительность, большинство браузеров предварительно выбирают записи DNS для ссылок на странице. Таким образом, IP-адрес назначения уже известен, когда пользователь нажимает на ссылку. Это может привести к чрезмерному использованию службы DNS (если у вас есть большой веб-сайт, посетивший миллионы людей ...), вопросы конфиденциальности (один подслушиватель может сделать вывод о том, что вы находитесь на определенной странице) или изменение статистики страницы (некоторые ссылки могут появляются, даже если их нет). Если у вас есть высокая безопасность, вы можете отключить предварительную выборку DNS за счет штрафа за производительность.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: helmet.dnsPrefetchControl() middleware should be mounted correctly
    testString: getUserInput => $.get(getUserInput('url') + '/_api/app-info').then(data => { assert.include(data.appStack, 'dnsPrefetchControl'); assert.equal(data.headers['x-dns-prefetch-control'], 'off'); }, xhr => { throw new Error(xhr.responseText); })

```

</section>
