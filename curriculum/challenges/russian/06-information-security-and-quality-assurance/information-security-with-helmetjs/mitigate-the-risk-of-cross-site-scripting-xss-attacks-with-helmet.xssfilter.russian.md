---
id: 587d8247367417b2b2512c39
title: Mitigate the Risk of Cross Site Scripting (XSS) Attacks with helmet.xssFilter()
challengeType: 2
forumTopicId: 301583
localeTitle: Смягчить риск использования сценариев Cross Site Scripting (XSS) с помощью helmet.xssFilter ()
---

## Description
<section id='description'>
Напомним, что этот проект строится на следующем стартовом проекте <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/">Glitch</a> или клонируется из <a href="https://github.com/freeCodeCamp/boilerplate-infosec/">GitHub</a> . Межсайтовый скриптинг (XSS) является частым типом атаки, когда вредоносные скрипты вводятся на уязвимые страницы с целью кражи конфиденциальных данных, таких как файлы cookie сеансов или пароли. Основное правило снизить риск атаки XSS очень просто: «Никогда не доверяйте пользовательскому вводу». Как разработчик, вы всегда должны дезинфицировать все входящие извне. Сюда входят данные, поступающие из форм, URL-адреса запроса GET и даже из органов POST. Sanitizing означает, что вы должны найти и закодировать символы, которые могут быть опасны, например &lt;,&gt;. Современные браузеры могут помочь смягчить риск, приняв более совершенные стратегии программного обеспечения. Часто они настраиваются через заголовки http. HTTP-заголовок X-XSS-Protection является основной защитой. Браузер обнаруживает потенциальный вложенный сценарий с использованием эвристического фильтра. Если заголовок включен, браузер меняет код сценария, нейтрализуя его. Он по-прежнему имеет ограниченную поддержку.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: helmet.xssFilter() middleware should be mounted correctly
    testString: getUserInput => $.get(getUserInput('url') + '/_api/app-info').then(data => { assert.include(data.appStack, 'xXssProtection'); assert.property(data.headers, 'x-xss-protection'); }, xhr => { throw new Error(xhr.responseText); })

```

</section>
