---
id: 587d8247367417b2b2512c38
title: Mitigate the Risk of Clickjacking with helmet.frameguard()
challengeType: 2
videoUrl: ''
localeTitle: Смягчить риск перетаскивания с помощью шлема.frameguard ()
---

## Description
<section id="description"> Напомним, что этот проект строится на следующем стартовом проекте <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/">Glitch</a> или клонируется из <a href="https://github.com/freeCodeCamp/boilerplate-infosec/">GitHub</a> . Ваша страница может быть помещена в <code>&lt;frame&gt;</code> или <code>&lt;iframe&gt;</code> без вашего согласия. Это, в частности, может привести к атакам с помощью clickjacking. Clickjacking - это метод обмана пользователя во взаимодействии со страницей, отличной от того, что, по мнению пользователя, является. Это может быть достигнуто при выполнении вашей страницы во вредоносном контексте с помощью iframing. В этом контексте хакер может поместить скрытый слой поверх вашей страницы. Скрытые кнопки могут использоваться для запуска плохих сценариев. Это промежуточное программное обеспечение устанавливает заголовок X-Frame-Options. Он ограничивает, кто может разместить ваш сайт в кадре. Он имеет три режима: DENY, SAMEORIGIN и ALLOW-FROM. Нам не нужно, чтобы наше приложение было обрамлено. Вы должны использовать <code>helmet.frameguard()</code> передавая объект конфигурации <code>{action: &#39;deny&#39;}</code> . </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: шлема.frameguard () должно быть правильно установлено
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/app-info").then(data => { assert.include(data.appStack, "frameguard", "helmet.frameguard() middleware is not mounted correctly"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: helmet.frameguard () 'action' должно быть установлено в 'DENY'
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/app-info").then(data => { assert.property(data.headers, "x-frame-options"); assert.equal(data.headers["x-frame-options"], "DENY");}, xhr => { throw new Error(xhr.responseText); })'

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
