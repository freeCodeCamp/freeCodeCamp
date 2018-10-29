---
title: Service Workers
localeTitle: Trabajadores de servicio
---
## Trabajadores de servicio

Service Worker es un script que funciona en el fondo del navegador sin la interacción del usuario de forma independiente. Además, se parece a un proxy que funciona en el lado del usuario. Con este script, puede rastrear el tráfico de red de la página, administrar notificaciones automáticas y desarrollar aplicaciones web "sin conexión primero" con la API de caché.

### ¿Qué podemos hacer con Service Worker?
```
You can dominate Network Traffic! 
 You can manage all network traffic of the page and do any manipulations. 
 You can “Cache”! 
 You can cache any request/response pair with Service Worker and Cache API and you can access these offline content anytime. 
 You can manage Push Notifications! 
 You can manage push notifications with Service Worker and show any information message to the user. 
 Although Internet connection is broken, you can start any process with Background Sync of Service Worker. 
```

### ¿Qué no podemos hacer con Service Worker?
```
You can't access the window! 
 You can't access the window, therefore, You can't any manipulation DOM elements. 
 But, you can communicate to the window through postMessage and manage processes that you want. 
 You can't work it on 80 Port! 
 Service Worker just can work on HTTPS protocol. But you can work on localhost during development. 
```

### Ciclo de vida del trabajador de servicio

El ciclo de vida del trabajador de servicio tiene 3 pasos; Registro, Instalación y Activación.

### Registro de un trabajador de servicio

Antes de instalar un Service Worker, debe registrar uno de su archivo JavaScript principal. Esto se puede hacer gracias al método navigator.serviceWorker.register como este:

```javascript
if ('serviceWorker' in navigator) { 
 navigator.serviceWorker.register('/serviceWorkerArticles.js', { scope: '/' }): 
 } 
```

Este método toma dos parámetros:
```
The name of the javascript file, relative to the root of your domain 
 (Optional) The scope to give a specific perimeter where your ServiceWorker has power to work. Basically it is the folder where it has control for assets, the default value is the root of the domain. 
```

### Instalación y uso de un trabajador de servicio

Ahora que registramos un Service Worker de 'serviceWorker.js', llenemos este archivo para que su sitio web sobre el artículo político pueda leer su artículo sin conexión si su usuario ya ha visitado el artículo necesario anteriormente.

Para la mayoría de las acciones, solo necesitas hacer un addEventListener, ¡ya que los trabajadores de servicio ya tienen muchos eventos útiles para escuchar!

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

Tenemos 3 métodos interesantes aquí! Echemos un vistazo rápido a todos ellos:
```
event.waitUntil: This method is used in an event to make it wait for a Promise to be resolved, in our case we have to compute things from cache before the Service Worker is considered installed 
 
 caches.open: This method comes form the CacheStorage API, it returns a Promise that containing the cache you asked in given parameter. 
 
 cache.addAll: This method comes form the Cache API (do not confuse with the CacheStorage, the Cache API is an object that is returned by the caches.open ). This method takes an array of URLs, and for each of them try to retrieve them and store it in the Cache object. 
```

Así que con este código, su trabajador del servicio ahora está registrado, instalado y activo. Si vas a la página de inicio de tu sitio web y lo recargas mientras estás en modo fuera de línea, ¡deberías poder ver tu página como antes!

#### Más información

[Una guía para principiantes de trabajadores de servicios](https://medium.com/samsung-internet-dev/a-beginners-guide-to-service-workers-f76abf1960f6) [Trabajadores de servicio en JS y lectura fuera de línea](https://medium.com/quick-code/service-workers-in-js-and-offline-reading-7bac9d4980ea) [¿Qué es el trabajador de servicio?](https://medium.com/commencis/what-is-service-worker-4f8dc478f0b9)