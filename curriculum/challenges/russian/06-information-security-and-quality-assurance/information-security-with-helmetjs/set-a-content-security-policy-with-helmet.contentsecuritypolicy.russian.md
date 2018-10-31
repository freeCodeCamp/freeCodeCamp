---
id: 587d8249367417b2b2512c3f
title: Set a Content Security Policy with helmet.contentSecurityPolicy()
challengeType: 2
videoUrl: ''
localeTitle: Задайте политику безопасности контента с помощью helmet.contentSecurityPolicy ()
---

## Description
<section id="description"> Напомним, что этот проект строится на следующем стартовом проекте <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/">Glitch</a> или клонируется из <a href="https://github.com/freeCodeCamp/boilerplate-infosec/">GitHub</a> . Эта проблема подчеркивает одну многообещающую новую защиту, которая может значительно снизить риск и влияние многих типов атак в современных браузерах. Установив и настроив политику безопасности контента, вы можете предотвратить ввод чего-либо непредвиденного в вашу страницу. Это защитит ваше приложение от уязвимостей XSS, нежелательного отслеживания, вредоносных фреймов и т. Д. CSP работает, определяя белый список источников контента, которым доверяют. Вы можете настроить их для каждого вида ресурсов, которые могут понадобиться веб-странице (скрипты, таблицы стилей, шрифты, фреймы, медиа и т. Д.). Существует несколько директив, поэтому владелец веб-сайта может иметь подробный контроль. См. HTML 5 Rocks, KeyCDN для более подробной информации. К сожалению, CSP не поддерживается старым браузером. По умолчанию директивы широко открыты, поэтому важно установить директиву defaultSrc как резервную. Шлем поддерживает стили именования defaultSrc и default-src. Отказ применяется к большинству неуказанных директив. В этом упражнении используйте helmet.contentSecurityPolicy () и настройте его, указав директиву по умолчаниюSrc на [&quot;self&quot;] (список разрешенных источников должен быть в массиве), чтобы по умолчанию доверять только ваш адрес веб-сайта. Задайте также директиву scriptSrc, чтобы разрешить загрузку скриптов с вашего сайта и из домена «trusted-cdn.com». Подсказка: в ключе «ключевое слово» одиночные кавычки являются частью самого ключевого слова, поэтому его нужно заключить в двойные кавычки для работы. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Средство шлема helmet.csp () должно быть правильно установлено
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/app-info").then(data => { assert.include(data.appStack, "csp"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: 'Неверная конфигурация csp. defaultSrc должен быть ["" self ""], а scriptSrc должен быть ["" self "", "trusted-cdn.com"]'
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/app-info").then(data => { var cspHeader = Object.keys(data.headers).filter(function(k){ return k === "content-security-policy" || k === "x-webkit-csp" || k === "x-content-security-policy" })[0]; assert.equal(data.headers[cspHeader], "default-src "self"; script-src "self" trusted-cdn.com"); }, xhr => { throw new Error(xhr.responseText); })'

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
