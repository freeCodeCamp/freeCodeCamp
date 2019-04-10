---
title: Service Workers
localeTitle: Рабочие службы
---
## Рабочие службы

Service Worker - это скрипт, который работает на фоне браузера без участия пользователя самостоятельно. Кроме того, он похож на прокси-сервер, который работает на стороне пользователя. С помощью этого сценария вы можете отслеживать сетевой трафик страницы, управлять push-уведомлениями и разрабатывать «офлайн-первые» веб-приложения с помощью Cache API.

### Что мы можем сделать с Service Worker?
```
You can dominate Network Traffic! 
 You can manage all network traffic of the page and do any manipulations. 
 You can “Cache”! 
 You can cache any request/response pair with Service Worker and Cache API and you can access these offline content anytime. 
 You can manage Push Notifications! 
 You can manage push notifications with Service Worker and show any information message to the user. 
 Although Internet connection is broken, you can start any process with Background Sync of Service Worker. 
```

### Что мы не можем сделать с Service Worker?
```
You can't access the window! 
 You can't access the window, therefore, You can't any manipulation DOM elements. 
 But, you can communicate to the window through postMessage and manage processes that you want. 
 You can't work it on 80 Port! 
 Service Worker just can work on HTTPS protocol. But you can work on localhost during development. 
```

### Жизненный цикл рабочего

Жизненный цикл Service Worker имеет 3 шага; Регистрация, установка и активация.

### Регистрация сотрудника службы

Перед установкой Service Worker вам необходимо зарегистрировать его из основного файла JavaScript. Это можно сделать с помощью метода navigator.serviceWorker.register следующим образом:

```javascript
if ('serviceWorker' in navigator) { 
 navigator.serviceWorker.register('/serviceWorkerArticles.js', { scope: '/' }): 
 } 
```

Этот метод принимает два параметра:
```
The name of the javascript file, relative to the root of your domain 
 (Optional) The scope to give a specific perimeter where your ServiceWorker has power to work. Basically it is the folder where it has control for assets, the default value is the root of the domain. 
```

### Установка и использование Service Worker

Теперь, когда мы зарегистрировали Service Worker из «serviceWorker.js», вы можете заполнить этот файл, чтобы ваш сайт о политической статье мог прочитать свою статью в автономном режиме, если пользователь уже посетил нужную статью раньше.

Для большинства действий вам просто нужно сделать addEventListener, так как у сервис-работников уже есть много полезных событий для прослушивания!

```javascript
self.addEventListener('install', cach => { 
    event.waitUntil( 
        caches.open('v1').then(cache => { 
            return cache.addAll([ 
              '/', 
              '/style.css', 
              '/app.js', 
              '/favicon.ico', 
              '/frontPageCover.jpg', 
            ]); 
          }) 
        ); 
    }); 
```

У нас есть 3 интересных метода! Давайте быстро взглянем на всех из них:
```
event.waitUntil: This method is used in an event to make it wait for a Promise to be resolved, in our case we have to compute things from cache before the Service Worker is considered installed 
 
 caches.open: This method comes form the CacheStorage API, it returns a Promise that containing the cache you asked in given parameter. 
 
 cache.addAll: This method comes form the Cache API (do not confuse with the CacheStorage, the Cache API is an object that is returned by the caches.open ). This method takes an array of URLs, and for each of them try to retrieve them and store it in the Cache object. 
```

Таким образом, с помощью этого кода ваш рабочий сервис теперь зарегистрирован, установлен и активен. Если вы перейдете на домашнюю страницу своего сайта и перезагрузите его, находясь в автономном режиме, вы сможете увидеть свою страницу так же, как раньше!

#### Больше информации

[Руководство для новичков для рабочих служб](https://medium.com/samsung-internet-dev/a-beginners-guide-to-service-workers-f76abf1960f6) [Служащие службы в JS и автономном чтении](https://medium.com/quick-code/service-workers-in-js-and-offline-reading-7bac9d4980ea) [Что такое рабочий службы?](https://medium.com/commencis/what-is-service-worker-4f8dc478f0b9)