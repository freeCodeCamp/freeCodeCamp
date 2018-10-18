---
title: Guide for Using MongoDB and Deploying to Heroku
localeTitle: دليل لاستخدام MongoDB ونشرها في Heroku
---
دعونا نرى في هذا الدليل كيفية العمل مع `mLab` محليًا ومع `mLab` في Heroku. بدلاً من ذلك ، يمكنك أيضًا استخدام إضافة `mLab` في Heroku ، وهي مجانية ولكنها قد تتطلب تفاصيل بطاقة الائتمان الخاصة بك. لذا ، إذا لم تكن [مهتمًا بتزويدك](https://mlab.com) بتفاصيل بطاقة الائتمان الخاصة بك ، يمكنك الذهاب إلى موقع [mLab](https://mlab.com) .

## إعداد حساب مجاني على Heroku و `mLab` :

قم بالتسجيل في [Heroku](https://signup.heroku.com/) و [mLab](https://mlab.com/signup/)

## بدء من Mongodb (محليًا):

لبدء تشغيل DB على نظامك الخاص قم بتنفيذ الأمر التالي:

 `# Create a directory named 'data' if it doesn't exist 
 $ mongod --port 27017 --dbpath=./data 
` 

الآن ديسيبل الخاص بك يعمل في-

`mongodb://localhost:27017/my_database_name`

إذا كنت تستخدم c9 وإذا كنت تواجه مشكلة في بدء تشغيل DB في C9 ، فراجع هذه [الصفحة](https://community.c9.io/t/setting-up-mongodb/1717)

## بدء من Mongodb ( `mLab` ):

1.  بعد إنشاء حساب `mLab` ، انقر فوق **إنشاء** زر **جديد** وحدد Single-node -> Sandbox للحصول على ديسيبل مجاني وإعطاء قاعدة بياناتك اسمًا (لقد قمت بإنشاء db مسمى 'طعام' لهذا كمثال).
2.  الآن يتم إنشاء قاعدة بيانات باسم "الطعام" ، يمكنك إنشاء مجموعة جديدة خاصة بك.
3.  وأخيرًا ، قم بإضافة مستخدم / مستخدمين يمكنهم الوصول إلى قاعدة البيانات هذه ، بينما تقوم إضافة مستخدم بإدخال اسم المستخدم وكلمة المرور المستخدمة للوصول إلى قاعدة البيانات.

الآن يتم تشغيل DB الخاص بك في URL شيء من هذا القبيل -

`mongodb://username:password@ds01316.mlab.com:1316/food`

حيث اسم المستخدم وكلمة المرور هما التفاصيل التي قدمتها عندما أضفت مستخدمًا.

يمكنك العثور على عنوان URL الخاص بـ DB على [https://mlab.com/databases/your _database_ name](https://mlab.com/databases/your_database_name)

## إجراء اتصال مع MongoDB في Node.js (أثناء تشغيل DB على النظام المحلي الخاص بك):

للعمل مع قاعدة البيانات ، تحتاج أولاً إلى إنشاء اتصال. في هذا القسم ، سنستخدم برنامج التشغيل الأصلي Node.js الخاص بـ MongoDB لإنشاء الاتصال بخادم MongoDB. لتثبيت برامج التشغيل الأصلية mongodb ، استخدم الأمر npm لتثبيت الوحدة النمطية mongodb. بعد ذلك ، قم بتشغيل الأمر التالي في دليل المشروع الخاص بك.

`npm install mongodb`

التعليمات البرمجية الأساسية للاتصال بـ MongoDB

 `//lets require/import the mongodb native drivers. 
 var mongodb = require('mongodb'); 
 
 //We need to work with "MongoClient" interface in order to connect to a mongodb server. 
 var MongoClient = mongodb.MongoClient; 
 
 // Connection URL. This is where your mongodb server is running. 
 
 //(Focus on This Variable) 
 var url = 'mongodb://localhost:27017/my_database_name'; 
 //(Focus on This Variable) 
 
 // Use connect method to connect to the Server 
  MongoClient.connect(url, function (err, db) { 
  if (err) { 
    console.log('Unable to connect to the mongoDB server. Error:', err); 
  } else { 
    console.log('Connection established to', url); 
 
    // do some work here with the database. 
 
    //Close connection 
    db.close(); 
  } 
 }); 
` 

لمزيد من الأمثلة للعمل مع MongoDB يمكنك الرجوع إلى هذه [المدونة](http://blog.modulus.io/mongodb-tutorial)

نحتاج إلى معرفة مكان تشغيل خادم mongodb الخاص بنا. يمثل عنوان url الموقع الذي يعمل فيه مثيل خادم mongodb بحيث يمكننا الاتصال به. يحتوي عنوان URL على اسم قاعدة البيانات الذي ننوي الاتصال به.

إذا افترضنا أن قاعدة بياناتك تعمل على عنوان URL المذكور أعلاه ، فلنركز الآن على عنوان URL الذي يربط قاعدة البيانات (محلي)

`var url = 'mongodb://localhost:27017/my_database_name';`

### إجراء اتصال مع MongoDB في Node.js (أثناء تشغيل DB في `mLab` الخاص بك):

يبدو عنوان url للاتصال بـ `mLab` DB مثل هذا

`var url = 'mongodb://username:password@ds01316.mlab.com:1316/food';`

يمكنك استبدال متغير عنوان url بهذا وسيعمل كل شيء بالطريقة التي ينبغي أن تكون عليها تمامًا وأخيرًا تكون قاعدة البيانات الخاصة بك آمنة ومأمونة في `mLab` حيث يمكنك عرض `mLab` احتياطي إلخ.

### ملاحظة مهمة:

لكن الالتزام بإدخال اسم المستخدم وكلمة المرور إلى الريبو العام في بعض الأحيان أمر خطير للغاية ، لذا لا تقم أبدًا بتخصيصها لمستودعات عامة ، بل يمكنك استخدام متغيرات البيئة لتخزين عنوان url (الذي يحتوي على اسم المستخدم وكلمة المرور) ، للقيام بذلك في نظامك **المحلي**

بالنسبة لمستخدمي Mac / Linux ، يمكنك ببساطة كتابة:

`export MONGOLAB_URI="mongodb://username:password@ds01316.mlab.com:1316/food"`

لمستخدمي ويندوز:

`SET MONGOLAB_URI=mongodb://username:password@ds01316.mlab.com:1316/food`

بعد تحديد متغيرات البيئة ، ستحتاج إلى استدعاء متغير البيئة في شفرتك. يمكنك القيام بذلك عن طريق كتابة هذا

`var url = process.env.MONGOLAB_URI;`

الآن يتم إدراج عنوان URL الخاص بـ MongoDb في رمزك بأمان. يمكنك الآن ارتكابها ونشرها على heroku الخاص بك.

إذا كنت بحاجة إلى مزيد من المساعدة حول كيفية النشر في Heroku ، فيمكنك الرجوع إلى [Wiki](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Heroku-Deployment-Guide)

## الخطوات النهائية:

بعد نشر شفرتك إلى تطبيق Heroku ، ستحتاج إلى ضبط متغير البيئة لـ Code in heroku.

للقيام بذلك ، تحتاج إلى تشغيل الأمر التالي من جهاز التحكم عن بعد الخاص بـ heroku ،

`heroku config:set MONGOLAB_URI=mongodb://username:password@ds01316.mlab.com:1316/food`

هذا هو ، يتم نشر التطبيق الخاص بك بنجاح الآن في heroku مع `mLab` DB