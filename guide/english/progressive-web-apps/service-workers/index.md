---
title: Service Workers
---
## Service Workers

Service Worker is a script that works on browser background without user interaction independently. Also, It resembles a proxy that works on the user side. With this script, you can track network traffic of the page, manage push notifications and develop “offline first” web applications with Cache API.

### What can we do with Service Worker?

    You can dominate Network Traffic!
    You can manage all network traffic of the page and do any manipulations.
    You can “Cache”!
    You can cache any request/response pair with Service Worker and Cache API and you can access these offline content anytime.
    You can manage Push Notifications!
    You can manage push notifications with Service Worker and show any information message to the user.
    Although Internet connection is broken, you can start any process with Background Sync of Service Worker.
    

### What can’t we do with Service Worker?

    You can’t access the window!
    You can’t access the window, therefore, You can’t any manipulation DOM elements. 
    But, you can communicate to the window through postMessage and manage processes that you want.
    You can’t work it on 80 Port!
    Service Worker just can work on HTTPS protocol. But you can work on localhost during development.
    
### Service Worker Lifecycle

Service Worker lifecycle has 3 step; Registration, Installation, and Activation.

### Registering a Service Worker

Before installing a Service Worker, you need to register one from your main JavaScript file. This can be done thanks to the method navigator.serviceWorker.register like this:


```javascript
if ('serviceWorker' in navigator) {
navigator.serviceWorker.register('/serviceWorkerArticles.js', { scope: '/' }):
}
```

This method takes two parameters:

    The name of the javascript file, relative to the root of your domain
    (Optional) The scope to give a specific perimeter where your ServiceWorker has power to work. Basically it is the folder where it has control for assets, the default value is the root of the domain.
    
### Installing, and using a Service Worker

Now that we registered a Service Worker from ‘serviceWorker.js’, lets fill this file so your website about political article can have its article read offline if you user has already visited the needed article before.

For most of the actions, you just need to do some addEventListener, as Service Workers already have a plenty of useful Events to listen to!

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

We have 3 interesting methods here! Lets take a quick look to all of them:

    event.waitUntil: This method is used in an event to make it wait for a Promise to be resolved, in our case we have to compute things from cache before the Service Worker is considered installed
    
    caches.open: This method comes form the CacheStorage API, it returns a Promise that containing the cache you asked in given parameter.
    
    cache.addAll: This method comes form the Cache API (do not confuse with the CacheStorage, the Cache API is an object that is returned by the caches.open ). This method takes an array of URLs, and for each of them try to retrieve them and store it in the Cache object.

So with this code, your Service Worker is now registered, installed, and active. If you go to the home page of your website, and reload it while being in offline mode, you should be able to see your page just as before!

#### More Information

[A beginner’s guide to Service Workers](https://medium.com/samsung-internet-dev/a-beginners-guide-to-service-workers-f76abf1960f6)
[Service Workers in JS and offline reading](https://medium.com/quick-code/service-workers-in-js-and-offline-reading-7bac9d4980ea)
[What is service worker?](https://medium.com/commencis/what-is-service-worker-4f8dc478f0b9)
