---
id: 587d8248367417b2b2512c3c
title: Ask Browsers to Access Your Site via HTTPS Only with helmet.hsts()
challengeType: 2
forumTopicId: 301573
localeTitle: Попросите Браузеры получить доступ к вашему сайту через HTTPS Только с помощью helmet.hsts ()
---

## Description
<section id="description"> Напомним, что этот проект строится на следующем стартовом проекте <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/">Glitch</a> или клонируется из <a href="https://github.com/freeCodeCamp/boilerplate-infosec/">GitHub</a> . HTTP Strict Transport Security (HSTS) - это политическая политика веб-безопасности, которая помогает защитить веб-сайты от атак с понижением протокола и захвата файлов cookie. Если ваш веб-сайт можно получить через HTTPS, вы можете попросить браузеры пользователей избегать использования небезопасного HTTP. Установив заголовок Strict-Transport-Security, вы указываете браузерам использовать HTTPS для будущих запросов за определенное время. Это будет работать для запросов, поступивших после первоначального запроса. Настройте helmet.hsts (), чтобы использовать HTTPS в течение следующих 90 дней. Передайте объект конфигурации {maxAge: timeInSeconds, force: true}. У глюка уже включен hsts. Чтобы переопределить свои настройки, вам нужно установить для поля «значение силы» значение true в объекте конфигурации. Мы будем перехватывать и восстанавливать заголовок Glitch, после проверки его на тестирование. Примечание. Для настройки HTTPS на пользовательском веб-сайте требуется получение домена и сертификат SSL / TSL. </section>

## Instructions
<section id='instructions'>
Сконфигурируйте <code>helmet.hsts()</code> для использования HTTPS в течение следующих 90 дней. Передайте объект конфигурации <code>{maxAge: timeInMilliseconds, force: true}</code>. Glitch уже имеет hsts включенным. Чтобы переопределить его настройки, вам нужно установить в поле «force» значение true в объекте config. Мы перехватим и восстановим заголовок Glitch после проверки его на предмет тестирования.
Примечание. Настройка HTTPS на пользовательском веб-сайте требует приобретения домена и сертификата SSL/TSL.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Средство helmet.hsts() должно быть правильно установлено
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/app-info").then(data => { assert.include(data.appStack, "hsts"); assert.property(data.headers, "strict-transport-security"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: maxAge должно быть равно 7776000 мс(90 дней)
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/app-info").then(data => { assert.match(data.headers["strict-transport-security"], /^max-age=7776000;?/); }, xhr => { throw new Error(xhr.responseText); })'

```

</section>
