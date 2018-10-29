---
title: Add To Homescreen
localeTitle: Добавить на домашний экран
---
## Добавить на домашний экран

Здесь баннер установки веб-приложений ориентирован на веб-приложение, с возможностью добавления на рабочий стол.

### Поддержка браузера для добавления на рабочий стол

В настоящее время функция добавления в Homescreen поддерживается:

*   Хром
*   iOS Safari

Вы можете увидеть последний статус поддержки браузером этой функции [здесь](https://caniuse.com/#feat=web-app-manifest) .

### На Android

На Android баннер «добавить к главному экрану» автоматически появляется, если вы отвечаете определенным требованиям. Это то, что должно выглядеть на Android:

| Добавить в приглашение на рабочий стол | Когда приложение запущено | | : ----------------------: | : ---------------: | | ![prompt](https://user-images.githubusercontent.com/15358452/31663686-860779f0-b375-11e7-85c9-1387d9b3bfcf.png "Добавить в приглашение на рабочий стол на Android") | ![launch](https://user-images.githubusercontent.com/15358452/31663690-89b0d998-b375-11e7-8a84-f3e33be9a2c2.png "Запуск с Homescreen") |

#### Требования

*   включают файл `manifest.json` со следующими свойствами:
*   `short name`
*   `name`
*   `192x192` размер значка `png`
*   `start_url`
*   включают сервисного работника, который зарегистрирован и активирован
*   сайт работает через HTTPS (вы все еще можете попробовать это с помощью localhost без HTTPS)
*   сайт соответствует эвристике взаимодействия, определяемой Chrome

#### manifest.json

```json
{ 
  "name": "FreeCodeCamp", 
  "short_name": "FreeCodeCamp", 
  "theme_color": "#00FF00", 
  "background_color": "#00FF00", 
  "display": "standalone", 
  "Scope": "/", 
  "start_url": "/", 
  "icons": [ 
    { 
      "src": "assets/images/icons/icon-72x72.png", 
      "sizes": "72x72", 
      "type": "image/png" 
    }, 
    { 
      "src": "assets/images/icons/icon-96x96.png", 
      "sizes": "96x96", 
      "type": "image/png" 
    }, 
    { 
      "src": "assets/images/icons/icon-128x128.png", 
      "sizes": "128x128", 
      "type": "image/png" 
    }, 
    { 
      "src": "assets/images/icons/icon-144x144.png", 
      "sizes": "144x144", 
      "type": "image/png" 
    }, 
    { 
      "src": "assets/images/icons/icon-152x152.png", 
      "sizes": "152x152", 
      "type": "image/png" 
    }, 
    { 
      "src": "assets/images/icons/icon-192x192.png", 
      "sizes": "192x192", 
      "type": "image/png" 
    }, 
    { 
      "src": "assets/images/icons/icon-384x384.png", 
      "sizes": "384x384", 
      "type": "image/png" 
    }, 
    { 
      "src": "assets/images/icons/icon-512x512.png", 
      "sizes": "512x512", 
      "type": "image/png" 
    } 
  ], 
  "splash_pages": null 
 } 
```

*   `name` - это имя веб-приложения. (Это будет показано на экране запуска)
*   `short name` - краткое имя веб-приложения. (Это будет показано ниже значка меню телефона)
*   `theme_color` - цвет верхней части браузера.
*   `background_color` - цвет фона экрана запуска.
*   `display` - это способ `display` веб-приложения после его запуска на телефоне.
*   `start_url` определяет начальный URL-адрес веб-сайта.
*   `icons` - это массив, который хранит все местоположение, размеры и тип изображения.

### На других устройствах

Хотя этот метод не работает в iOS и Windows, существует метод возврата.

**IOS**

На iOS кнопку «добавить к главному экрану» нужно добавить вручную. Добавьте следующие метатеги в раздел заголовка вашего HTML для поддержки значка веб-приложения iOS.

```html

<meta name="apple-mobile-web-app-capable" content="yes"> 
 <meta name="apple-mobile-web-app-status-bar-style" content="green"> 
 <meta name="apple-mobile-web-app-title" content="FreeCodeCamp"> 
 <link rel="apple-touch-icon" href="/assets/images/icons/icon-72x72.png" sizes="72x72"> 
 <link rel="apple-touch-icon" href="/assets/images/icons/icon-96x96.png" sizes="96x96"> 
 <link rel="apple-touch-icon" href="/assets/images/icons/icon-128x128.png" sizes="128x128"> 
 <link rel="apple-touch-icon" href="/assets/images/icons/icon-144x144.png" sizes="144x144"> 
 <link rel="apple-touch-icon" href="/assets/images/icons/icon-152x152.png" sizes="152x152"> 
 <link rel="apple-touch-icon" href="/assets/images/icons/icon-192x192.png" sizes="192x192"> 
 <link rel="apple-touch-icon" href="/assets/images/icons/icon-384x384.png" sizes="384x384"> 
 <link rel="apple-touch-icon" href="/assets/images/icons/icon-512x512.png" sizes="512x512"> 
```

**Windows**

На телефоне Windows добавьте следующие метатеги в раздел заголовка вашего HTML:

```html

<meta name="msapplication-TileImage" content="/assets/images/icons/icon-144x144.png"> 
 <meta name="msapplication-TileColor" content="green"> 
```

### Рекомендации

1.  [superoo7, «Высокий уровень просмотра прогрессивного веб-приложения» Опубликовано: 18 декабря 2017 года.](https://steemit.com/web/@superoo7/a-high-level-view-of-progressive-web-app)
2.  [Мэтт Гаунт и Пол Кинлан, «Веб-баннеры установки приложений» Добавлено: 14 ноября 2017 года.](https://developers.google.com/web/fundamentals/app-install-banners/)