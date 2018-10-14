---
title: Async messaging with RabbitMQ and Tortoise
localeTitle: الرسائل غير المتزامنة مع RabbitMQ والسلحفاة
---
RabbitMQ يحدث ليكون أسهل وسيط منصات منصة الوسيط رسالة باستخدام بروتوكول AMQ هناك اليوم. ويترجم استخدامه في الهندسة المعمارية الدقيقة إلى مكاسب هائلة في الأداء ، فضلاً عن الوعد بالموثوقية. في هذا الدليل ، سنستكشف أساسيات استخدام RabbitMQ مع Node.js.

## نظرية

في أبسط مستوياتها الأساسية ، سيكون لديك بشكل مثالي خدمتين مختلفتين تتفاعلان مع بعضهما البعض من خلال Rabbit - _ناشر_ _ومشترك_ . عادةً ما ينشر الناشر الرسائل إلى أرنب ، ويستمع أحد المشتركين إلى هذه الرسائل ، وينفذ الرمز على أساس تلك الرسائل. لاحظ أنه يمكن أن يكونا في نفس الوقت - يمكن للخدمة أن تنشر رسائل إلى أرنب وتستهلك الرسائل في نفس الوقت ، مما يجعل الأنظمة القوية بالفعل مصممة.

ينشر الناشر عادةً الرسائل التي تحتوي على _مفتاح توجيه_ إلى شيء يسمى _التبادل_ . يستمع المستهلك إلى _قائمة انتظار_ في نفس التبادل ، منضمة إلى مفتاح التوجيه. من الناحية المعمارية ، سيستخدم النظام الأساسي الخاص بك تبادلًا واحدًا للأرانب ، وستكون أنواع مختلفة من الوظائف / الخدمات لها مفاتيح التوجيه الخاصة بها وقوائم الانتظار ، حتى تعمل ميزة pub-sub بشكل فعال. يمكن أن تكون الرسائل عبارة عن سلاسل؛ يمكن أن تكون أيضًا كائنات محلية - تقوم مكتبات عميل AMQP بالرفع الثقيل لتحويل الكائنات من لغة إلى أخرى. ونعم ، هذا يعني أنه يمكن كتابة الخدمات بلغات مختلفة ، طالما أنهم قادرون على فهم AMQP.

## ابدء

سنقوم بإعداد مثال بسيط للغاية حيث ينشر برنامج ناشر رسالة إلى أرنب تحتوي على عنوان URL ، ويستمع برنامج نصي للمستهلك إلى Rabbit ، ويأخذ عنوان URL المنشور ، ويستدعيه ويعرض النتائج. يمكنك العثور على عينة منتهية على [جيثب](https://github.com/rudimk/freecodecamp-guides-rabbitmq-tortoise) .

أولاً ، دعنا نبدأ مشروع npm:

`$ npm init`

يمكنك دائمًا النقر على " `Enter` بالكامل واستخدام الخيارات الافتراضية - أو يمكنك ملئها. الآن ، دعنا نركب الحزم التي نحتاجها. سنستخدم [السلحفاة](https://www.npmjs.com/package/tortoise) للتفاعل مع RabbitMQ. سنستخدم أيضًا [العقدة-كرون](https://www.npmjs.com/package/node-cron) لجدولة النشر الفعلي للرسائل.

`$ npm install --save tortoise node-cron`

الآن يجب أن تبدو `package.json` تشبه إلى حد كبير هذا:

 `{ 
  "name": "freecodecamp-guides-rabbitmq-tortoise", 
  "version": "1.0.0", 
  "description": "Sample code to accompany the FreeCodeCamp guide on async messaging with RabbitMQ and Tortoise.", 
  "main": "index.js", 
  "scripts": { 
    "test": "echo \"Error: no test specified\" && exit 1" 
  }, 
  "repository": { 
    "type": "git", 
    "url": "git+https://github.com/rudimk/freecodecamp-guides-rabbitmq-tortoise.git" 
  }, 
  "keywords": [ 
    "rabbitmq", 
    "tortoise", 
    "amqp" 
  ], 
  "author": "Rudraksh MK", 
  "license": "MIT", 
  "bugs": { 
    "url": "https://github.com/rudimk/freecodecamp-guides-rabbitmq-tortoise/issues" 
  }, 
  "homepage": "https://github.com/rudimk/freecodecamp-guides-rabbitmq-tortoise#readme", 
  "dependencies": { 
    "node-cron": "^1.2.1", 
    "tortoise": "^1.0.1" 
  } 
 } 
` 

نحن الآن جاهزون لنقم بإنشاء ناشر أولاً.

 ``const Tortoise = require('tortoise') 
 const cron = require('node-cron') 
 
 const tortoise = new Tortoise(`amqp://rudimk:YouKnowWhat@$localhost:5672`) 
`` 

بعد استيراد `tortoise` `node-cron` ، لقد ذهبنا إلى الأمام وأضفت اتصالاً بـ RabbitMQ. بعد ذلك ، دعنا نكتب وظيفة سريعة وقذرة تنشر رسالة إلى أرنب:

 `function scheduleMessage(){ 
    let payload = {url: 'https://randomuser.me/api'} 
    tortoise 
    .exchange('random-user-exchange', 'direct', { durable:false }) 
    .publish('random-user-key', payload) 
 } 
` 

هذا بسيط بما فيه الكفاية. لقد حددنا قاموسًا يحتوي على عنوان URL [لواجهة](https://randomuser.me/) برمجة تطبيقات [RandomUser.me](https://randomuser.me/) ، والتي يتم نشرها بعد ذلك إلى `random-user-exchange` تبادل `random-user-exchange` على RabbitMQ ، مع `random-user-key` التوجيه `random-user-key` . كما ذكرنا من قبل ، فإن مفتاح التوجيه هو الذي يحدد من الذي يستهلك رسالة. الآن ، دعنا نكتب قاعدة جدولة ، لنشر هذه الرسالة كل 60 ثانية.

 `cron.schedule('60 * * * * *', scheduleMessage) 
` 

وناشرنا جاهز! ولكن في الحقيقة ليس جيدًا بدون المستهلك أن يستهلك هذه الرسائل فعليًا! لكننا نحتاج أولاً إلى مكتبة يمكنها الاتصال بعنوان URL في هذه الرسائل. شخصيا ، أنا استخدم `superagent` : `npm install --save superagent` .

الآن ، في `consumer.js` :

 ``const Tortoise = require('tortoise') 
 const superagent = require('superagent') 
 
 const tortoise = new Tortoise(`amqp://rudimk:YouKnowWhat@$localhost:5672`) 
`` 

بعد ذلك ، دعنا نكتب دالة متزامنة تستدعي عنوان URL وتعرض النتيجة:

 `async function getURL(url){ 
    let response = await superagent.get(url) 
    return response.body 
 } 
` 

وقت كتابة التعليمات البرمجية لاستهلاك الرسائل فعليًا:

 `tortoise 
 .queue('random-user-queue', { durable: false }) 
 // Add as many bindings as needed 
 .exchange('random-user-exchange', 'direct', 'random-user-key', { durable: false }) 
 .prefetch(1) 
 .subscribe(function(msg, ack, nack) { 
  // Handle 
  let payload = JSON.parse(msg) 
  getURL(payload['url']).then((response) => { 
    console.log('Job result: ', response) 
  }) 
  ack() // or nack() 
 }) 
` 

هنا ، أخبرنا `tortoise` أن نستمع إلى `random-user-queue` ، وهذا يرتبط `random-user-key` `random-user-exchange` . بمجرد استلام الرسالة ، يتم استرداد الحمولة من `msg` ، ويتم تمريرها إلى `getURL` ، والتي بدورها تقوم بإرجاع Promation مع استجابة JSON المطلوبة من RandomUser API.

## استنتاج

البساطة المرتبطة باستخدام RabbitMQ للمراسلة لا مثيل لها ، ومن السهل جدًا الوصول إلى أنماط الخدمة الدقيقة المعقدة بالفعل ، مع بضعة أسطر من الشفرات فقط. أفضل جزء هو أن المنطق وراء الرسائل لا يتغير حقاً عبر اللغات - تعمل Crystal أو Go أو Python أو Ruby مع Rabbit بنفس الطريقة تقريبًا - وهذا يعني أنه يمكن أن يكون لديك خدمات مكتوبة بلغات مختلفة تتواصل جميعها مع بعضها البعض دون بذل أي جهد ، مما يتيح لك استخدام أفضل لغة لهذا المنصب.