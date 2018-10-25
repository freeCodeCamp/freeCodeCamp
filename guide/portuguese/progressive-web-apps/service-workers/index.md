---
title: Service Workers
localeTitle: Trabalhadores de serviço
---
## Trabalhadores de serviço

O Service Worker é um script que funciona no segundo plano do navegador sem interação do usuário de forma independente. Além disso, ele se assemelha a um proxy que funciona no lado do usuário. Com esse script, você pode rastrear o tráfego de rede da página, gerenciar notificações push e desenvolver aplicativos da Web "offline primeiro" com a API de cache.

### O que podemos fazer com o Service Worker?
```
You can dominate Network Traffic! 
 You can manage all network traffic of the page and do any manipulations. 
 You can “Cache”! 
 You can cache any request/response pair with Service Worker and Cache API and you can access these offline content anytime. 
 You can manage Push Notifications! 
 You can manage push notifications with Service Worker and show any information message to the user. 
 Although Internet connection is broken, you can start any process with Background Sync of Service Worker. 
```

### O que não podemos fazer com o Service Worker?
```
You can't access the window! 
 You can't access the window, therefore, You can't any manipulation DOM elements. 
 But, you can communicate to the window through postMessage and manage processes that you want. 
 You can't work it on 80 Port! 
 Service Worker just can work on HTTPS protocol. But you can work on localhost during development. 
```

### Ciclo de Vida do Trabalhador de Serviço

O ciclo de vida do Service Worker tem 3 etapas; Registro, instalação e ativação.

### Registrando um trabalhador de serviço

Antes de instalar um Service Worker, você precisa registrar um do seu arquivo JavaScript principal. Isso pode ser feito graças ao método navigator.serviceWorker.register assim:

```javascript
if ('serviceWorker' in navigator) { 
 navigator.serviceWorker.register('/serviceWorkerArticles.js', { scope: '/' }): 
 } 
```

Este método usa dois parâmetros:
```
The name of the javascript file, relative to the root of your domain 
 (Optional) The scope to give a specific perimeter where your ServiceWorker has power to work. Basically it is the folder where it has control for assets, the default value is the root of the domain. 
```

### Instalando e usando um Service Worker

Agora que registramos um Service Worker em 'serviceWorker.js', vamos preencher esse arquivo para que seu site sobre um artigo político possa ter seu artigo lido off-line se o usuário já tiver visitado o artigo necessário anteriormente.

Para a maioria das ações, basta fazer um addEventListener, já que os Service Workers já têm muitos eventos úteis para ouvir!

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

Nós temos 3 métodos interessantes aqui! Vamos dar uma olhada rápida em todos eles:
```
event.waitUntil: This method is used in an event to make it wait for a Promise to be resolved, in our case we have to compute things from cache before the Service Worker is considered installed 
 
 caches.open: This method comes form the CacheStorage API, it returns a Promise that containing the cache you asked in given parameter. 
 
 cache.addAll: This method comes form the Cache API (do not confuse with the CacheStorage, the Cache API is an object that is returned by the caches.open ). This method takes an array of URLs, and for each of them try to retrieve them and store it in the Cache object. 
```

Portanto, com este código, seu Service Worker agora está registrado, instalado e ativo. Se você for para a página inicial do seu site e recarregá-lo enquanto estiver no modo off-line, será possível ver sua página como antes!

#### Mais Informações

[Um guia para principiantes de trabalhadores de serviços](https://medium.com/samsung-internet-dev/a-beginners-guide-to-service-workers-f76abf1960f6) [Trabalhadores de serviço em JS e leitura offline](https://medium.com/quick-code/service-workers-in-js-and-offline-reading-7bac9d4980ea) [O que é trabalhador de serviço?](https://medium.com/commencis/what-is-service-worker-4f8dc478f0b9)