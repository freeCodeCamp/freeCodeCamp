---
title: Service Workers
localeTitle: عمال الخدمة
---
## عمال الخدمة

عامل الخدمة هو برنامج نصي يعمل على خلفية المستعرض دون تدخل المستخدم بشكل مستقل. أيضا ، إنه يشبه الوكيل الذي يعمل على جانب المستخدم. باستخدام هذا البرنامج النصي ، يمكنك تتبع حركة مرور الشبكة للصفحة ، وإدارة إشعارات الدفع وتطوير تطبيقات الويب "دون الاتصال بالإنترنت أولاً" باستخدام Cache API.

### ماذا يمكننا أن نفعل مع عامل الخدمة؟

 `You can dominate Network Traffic! 
 You can manage all network traffic of the page and do any manipulations. 
 You can “Cache”! 
 You can cache any request/response pair with Service Worker and Cache API and you can access these offline content anytime. 
 You can manage Push Notifications! 
 You can manage push notifications with Service Worker and show any information message to the user. 
 Although Internet connection is broken, you can start any process with Background Sync of Service Worker. 
` 

### ما الذي لا يمكننا القيام به مع عامل الخدمة؟

 `You can't access the window! 
 You can't access the window, therefore, You can't any manipulation DOM elements. 
 But, you can communicate to the window through postMessage and manage processes that you want. 
 You can't work it on 80 Port! 
 Service Worker just can work on HTTPS protocol. But you can work on localhost during development. 
` 

### دورة حياة عامل الخدمة

دورة حياة عامل الخدمة لها 3 خطوات ؛ التسجيل والتركيب والتنشيط.

### تسجيل عامل الخدمة

قبل تثبيت عامل خدمة ، تحتاج إلى تسجيل واحد من ملف جافا سكريبت الرئيسي. يمكن القيام بذلك بفضل الطريقة navigator.serviceWorker.register على النحو التالي:

 `if ('serviceWorker' in navigator) { 
 navigator.serviceWorker.register('/serviceWorkerArticles.js', { scope: '/' }): 
 } 
` 

هذه الطريقة تأخذ معلمتين:

 `The name of the javascript file, relative to the root of your domain 
 (Optional) The scope to give a specific perimeter where your ServiceWorker has power to work. Basically it is the folder where it has control for assets, the default value is the root of the domain. 
` 

### التثبيت ، واستخدام عامل الخدمة

الآن بعد أن قمنا بتسجيل "عامل خدمة" من "serviceWorker.js" ، دعونا نملأ هذا الملف بحيث يمكن لموقعك الإلكتروني حول مقالة سياسية أن يقرأ مقالته بلا اتصال إذا قام المستخدم بالفعل بزيارة المقال المطلوب من قبل.

بالنسبة إلى معظم الإجراءات ، تحتاج فقط إلى إجراء بعض addEventListener ، حيث إن لدى عمال الخدمة بالفعل الكثير من الأحداث المفيدة للاستماع إليها!

 `self.addEventListener('install', cach => { 
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
` 

لدينا 3 طرق مثيرة للاهتمام هنا! دعونا نلقي نظرة سريعة على كل منهم:

 `event.waitUntil: This method is used in an event to make it wait for a Promise to be resolved, in our case we have to compute things from cache before the Service Worker is considered installed 
 
 caches.open: This method comes form the CacheStorage API, it returns a Promise that containing the cache you asked in given parameter. 
 
 cache.addAll: This method comes form the Cache API (do not confuse with the CacheStorage, the Cache API is an object that is returned by the caches.open ). This method takes an array of URLs, and for each of them try to retrieve them and store it in the Cache object. 
` 

ﻟذا ﻣﻊ ھذا اﻟرﻣز ، ﯾﺗم اﻵن ﺗﺳﺟﯾل ﻋﺎﻣل اﻟﺧدﻣﺔ وﺗﺛﺑﯾﺗﮫ وﻧﺷطﺗﮫ. إذا انتقلت إلى الصفحة الرئيسية لموقعك على الويب ، وأعد تحميلها أثناء وجودك في وضع عدم الاتصال ، فستتمكن من مشاهدة صفحتك كما كانت من قبل!

#### معلومات اكثر

[دليل المبتدئين لعمال الخدمة](https://medium.com/samsung-internet-dev/a-beginners-guide-to-service-workers-f76abf1960f6) [عمال الخدمة في JS والقراءة حاليا](https://medium.com/quick-code/service-workers-in-js-and-offline-reading-7bac9d4980ea) [ما هو عامل الخدمة؟](https://medium.com/commencis/what-is-service-worker-4f8dc478f0b9)