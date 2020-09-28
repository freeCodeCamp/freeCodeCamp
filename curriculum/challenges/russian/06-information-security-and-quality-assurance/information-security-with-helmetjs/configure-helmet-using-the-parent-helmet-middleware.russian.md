---
id: 587d8249367417b2b2512c40
title: Configure Helmet Using the ‘parent’ helmet() Middleware
challengeType: 2
forumTopicId: 301575
localeTitle: Настройка шлема Использование «родительского» helmet() Middleware
---

## Description
<section id='description'>
Напомним, что этот проект строится на следующем стартовом проекте <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/">Glitch</a> или клонируется из <a href="https://github.com/freeCodeCamp/boilerplate-infosec/">GitHub</a>. app.use(helmet()) будет автоматически включать все промежуточное программное обеспечение, введенное выше, за исключением noCache() и contentSecurityPolicy(), но при необходимости они могут быть активированы. Вы также можете отключить или настроить любое другое промежуточное программное обеспечение индивидуально, используя объект конфигурации. // Пример <code>app.use(helmet({</code> <code>frameguard: { // configure</code> <code>action: &#39;deny&#39;</code> <code>},</code> <code>contentSecurityPolicy: { // enable and configure</code> <code>directives: {</code> <code>defaultSrc: [&quot;self&quot;],</code> <code>styleSrc: [&#39;style.com&#39;],</code> <code>}</code> <code>},</code> <code>dnsPrefetchControl: false // disable</code> <code>}))</code> Мы вводили каждое промежуточное программное обеспечение отдельно для целей обучения и для удобства тестирования. Использование «родительского» helmet() промежуточного программного обеспечения является самым простым и более чистым, для реального проекта.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: нет тестов - это описательный вызов
    testString: assert(true)

```

</section>
