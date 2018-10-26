---
title: Use the Twitch JSON API
localeTitle: Использовать API Twitch JSON
---
Обновление 29 сентября 2016 года: Twitch изменил свой API и теперь для запуска запросов требуется ключ API. Если вы используете страницы CodePen или GitHub для их создания, мы не рекомендуем добавлять ключ API в ваш проект по соображениям безопасности.

Вместо использования API Twitch мы рекомендуем жестко кодировать [этот JSON](https://gist.github.com/QuincyLarson/2ff6892f948d0b7118a99264fd9c1ce8) в ваше приложение как переменную. Это серия ответов для разных учетных записей Twitch.

* * *

Если вы пытаетесь решить эту проблему с помощью метода `$.getJSON()` jQuery, скорее всего, вы получите сообщение об ошибке, посвященном совместному использованию ресурсов Cross-Origin (CORS).

Самый простой способ разрешить это - использовать возможности JSONP jQuery. На [странице чтения](https://github.com/justintv/Twitch-API#json-p) Twitch API:

> Все методы API поддерживают JSON-P, предоставляя параметр обратного вызова с запросом.

Также в [документации jQuery](http://api.jquery.com/jQuery.getJSON/) указано:

> Если URL-адрес содержит строку «callback =?» (или аналогично, как определено API-интерфейсом на стороне сервера), вместо этого запрос обрабатывается как JSONP.

Вот пример вызова для получения данных канала Twitch Free Code Camp:
```
$.getJSON('https://api.twitch.tv/kraken/streams/freecodecamp?callback=?', function(data) { 
  console.log(data); 
 }); 
```

JSONP считается небезопасным в [соответствии с Википедией](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing#CORS_vs_JSONP) , но этого должно быть достаточно для наших целей. Подробное обсуждение ограничения CORS Twitch, пожалуйста, прочитайте статью [№133](https://github.com/justintv/Twitch-API/issues/133) в репозитории Twitch-API.