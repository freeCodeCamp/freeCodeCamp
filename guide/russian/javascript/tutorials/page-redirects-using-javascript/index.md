---
title: Page Redirects Using JavaScript
localeTitle: Перенаправления страниц с использованием JavaScript
---
## Перенаправления страниц с использованием JavaScript

Если вы пытаетесь перенаправить пользователя на другую страницу, вы можете легко использовать JavaScript для выполнения этой задачи. Важно отметить следующее:

Даже если у вас есть библиотека jQuery, загруженная в ваши скрипты, вы можете использовать чистое решение JavaScript для перенаправления страниц для повышения эффективности.

Существует несколько способов сделать это, но самым простым способом является использование объекта `window.location` для отправки пользователя на страницу, к которой вы хотите перенаправить. Объект `window.location` может использовать любое допустимое значение URL, например `http://www.yoururl.com` , `somepage.html` и т. Д.

```javascript
window.location = 'http://www.yoururl.com'; 
 // window.location = 'somepage.html'; 
 // etc. 
```

### Специальная переадресация

Вы можете использовать специальный метод переадресации, который по умолчанию привязан к объекту `window.location` в каждом главном браузере с именем `replace()` . Этот метод принимает те же допустимые значения URL, что и при использовании `window.location` .

Вот пример использования этого метода (он будет по-прежнему работать так же, как просто использовать `window.location` в других браузерах):

```javascript
window.location.replace('http://www.yoururl.com'); 
 // window.location.replace('somepage.html'); 
 // etc. 
```

### Простая временная переадресация с использованием JS

Ниже приведен пример простой временной переадресации с использованием функции `setTimeout()` . Временные переадресации полезны, поэтому вы можете объяснить пользователю через контент на странице переадресации, почему они перенаправляются на другую страницу.

```javascript
// the 5000 below is 5000 milliseconds which equals 5 seconds until the redirect happens 
 // keep in mind that 1 second = 1000 milliseconds 
 setTimeout(function () { 
    window.location = 'http://www.yoururl.com'; 
    // window.location = 'somepage.html'; 
    // etc. 
 }, 5000); 
```

### Отступать

Иногда пользователи просматривают Интернет с отключенным JavaScript, и это, очевидно, представляет проблемы с JS-зависимым решением для переадресации. Я рекомендую установить элемент `<meta>` , который обновит браузер с новым местоположением. Я бы установил время для того, чтобы этот мета-элемент был вторым после того, как предполагается, что перенаправление JS должно состояться. Итак, если у вас есть перенаправление, которое происходит в JS через 5 секунд, установите перенаправление элемента `<meta>` на 6 секунд.

Поместите элемент `<meta>` внутри `<head>` вашего документа так:

```html

<head> 
    <!-- Change the 6 below to however many seconds you wish to wait until redirection to the new page.  Change the portion after "URL=" to the URL of your choice.  This can be a local page: URL=somepage.html, a web address: URL=http://www.yoururl.com, or any other valid URL. It is important to note the semicolon between the number of seconds to refresh and the URL. --> 
    <meta http-equiv="refresh" content="6;URL=http://www.yoururl.com"> 
 </head> 
```

Имейте в виду, что не все браузеры поддерживают элемент `<meta>` (я смотрю на вас, более старые версии IE и Safari), но большинство современных браузеров (Microsoft Edge, Google Chrome, Mozilla Firefox, Opera).