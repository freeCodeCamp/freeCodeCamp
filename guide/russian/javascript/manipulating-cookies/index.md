---
title: Manipulating Cookies
localeTitle: Управление файлами cookie
---
## Управление файлами cookie

Получение или настройка файлов cookie - это простая операция, которая может быть достигнута путем доступа к свойству cookie в объекте документа браузера.

Вы найдете удивительный и информативный веб-сайт рецептов, чтобы приготовить иностранную еду для своих гостей, но это на иностранном языке, к счастью, вы можете изменить язык на сайте сайта с помощью раскрывающегося списка. Через пару дней вы снова посетите один и тот же сайт, чтобы приготовить блюдо для своей матери, но теперь вы видите веб-сайт на своем родном языке по умолчанию.

_Веб-сайт запоминает выбранный вами язык при последнем посещении и сохраняет его в виде **файла cookie** . Теперь он автоматически выбирает ваш предпочтительный язык, читая этот файл cookie._

`userLanguage:french`

Файлы cookie используются для хранения данных в форме пары `name:value` на стороне клиента. Он позволяет веб-сайту хранить информацию о пользователе в браузере для последующего использования. Запомненная информация может быть `sessionID` , `userCountry` , `visitorLanguage` и т. Д.

Другой способ хранения данных на стороне клиента - `localstorage` .

### Установить Cookie

Файл cookie можно установить с помощью синтаксиса ниже, но библиотека, как и упомянутая в конце, настоятельно рекомендуется сделать процесс разработки более простым для всех. При настройке файла cookie вы также можете установить срок его действия. Если пропущено, cookie удаляется, когда браузер закрыт.

**Имейте в виду, что cookie, заданный определенным доменом, может быть прочитан только этим доменом и только его субдоменами.**

```javascript
// Using vanilla javascript 
 document.cookie = 'userLanguage=french; expires=Sun, 2 Dec 2017 23:56:11 UTC; path=/'; 
 
 //Using JS cookie library 
 Cookies.set('userLanguage', 'french', { expires: 7, path: '/' }); 
```

_Cookie истекает через 7 дней_

### Получить Cookie

```javascript
// Using vanilla javascript 
 console.log(document.cookie) 
 
 // => "_ga=GA1.2.1266762736.1473341790; userLanguage=french" 
 
 // Using JS cookie library 
 Cookies.get('userLanguage'); 
 
 // => "french" 
```

### Удалить Cookie

Чтобы удалить набор файлов cookie, срок действия истекает в прошлом.

```javascript
// Using vanilla javascript 
 document.cookie = 'userLanguage; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/'; 
 
 //Using JS cookie library 
 Cookies.remove('userLanguage'); 
```

_Если вы часто играете с куки-файлами в своем проекте, используйте библиотеку, подобную [JS Cookie,](https://github.com/js-cookie/js-cookie) и сэкономьте себе массу времени._

#### Дополнительная информация:

*   [Cookie объяснил](https://www.quirksmode.org/js/cookies.html)
*   [MDN Cookie Guide](https://developer.mozilla.org/en-US/docs/Web/API/document/cookie)
*   [Видео для Udacity Cookie](https://www.youtube.com/watch?v=xdH9zsW1CK0)
*   [Файлы cookie HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)