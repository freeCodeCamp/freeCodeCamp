---
title: Service Workers
localeTitle: 服务人员
---
## 服务人员

Service Worker是一个适用于浏览器背景而无需用户独立交互的脚本。此外，它类似于在用户端工作的代理。使用此脚本，您可以使用Cache API跟踪页面的网络流量，管理推送通知并开发“脱机优先”Web应用程序。

### 我们可以对服务工作者做些什么？
```
You can dominate Network Traffic! 
 You can manage all network traffic of the page and do any manipulations. 
 You can “Cache”! 
 You can cache any request/response pair with Service Worker and Cache API and you can access these offline content anytime. 
 You can manage Push Notifications! 
 You can manage push notifications with Service Worker and show any information message to the user. 
 Although Internet connection is broken, you can start any process with Background Sync of Service Worker. 
```

### 我们不能与服务工作者做什么？
```
You can't access the window! 
 You can't access the window, therefore, You can't any manipulation DOM elements. 
 But, you can communicate to the window through postMessage and manage processes that you want. 
 You can't work it on 80 Port! 
 Service Worker just can work on HTTPS protocol. But you can work on localhost during development. 
```

### 服务工作者生命周期

服务工作者生命周期有3个步骤;注册，安装和激活。

### 注册服务工作者

在安装Service Worker之前，您需要在主JavaScript文件中注册一个。这可以通过navigator.serviceWorker.register方法完成，如下所示：

```javascript
if ('serviceWorker' in navigator) { 
 navigator.serviceWorker.register('/serviceWorkerArticles.js', { scope: '/' }): 
 } 
```

此方法有两个参数：
```
The name of the javascript file, relative to the root of your domain 
 (Optional) The scope to give a specific perimeter where your ServiceWorker has power to work. Basically it is the folder where it has control for assets, the default value is the root of the domain. 
```

### 安装和使用服务工作者

现在我们从'serviceWorker.js'注册了一个Service Worker，让我们填写这个文件，这样如果您的用户之前已经访问过所需的文章，那么您的网站有关政治文章的文章可以脱机阅读。

对于大多数操作，您只需要执行一些addEventListener，因为Service Workers已经有很多有用的事件要收听！

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

我们这里有3种有趣的方法！让我们快速浏览一下所有这些：
```
event.waitUntil: This method is used in an event to make it wait for a Promise to be resolved, in our case we have to compute things from cache before the Service Worker is considered installed 
 
 caches.open: This method comes form the CacheStorage API, it returns a Promise that containing the cache you asked in given parameter. 
 
 cache.addAll: This method comes form the Cache API (do not confuse with the CacheStorage, the Cache API is an object that is returned by the caches.open ). This method takes an array of URLs, and for each of them try to retrieve them and store it in the Cache object. 
```

因此，使用此代码，您的服务工作者现在已注册，安装并处于活动状态。如果您转到网站的主页，并在离线模式下重新加载，您应该能够像以前一样看到您的网页！

#### 更多信息

[服务工作者的初学者指南](https://medium.com/samsung-internet-dev/a-beginners-guide-to-service-workers-f76abf1960f6) [JS中的服务工作者和离线阅读](https://medium.com/quick-code/service-workers-in-js-and-offline-reading-7bac9d4980ea) [什么是服务人员？](https://medium.com/commencis/what-is-service-worker-4f8dc478f0b9)