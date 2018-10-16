---
title: Testing with Chaijs
localeTitle: اختبار مع Chaijs
---
[تشاي](http://chaijs.com) هي مكتبة اختبار لـ Node.js.

### التركيب

يمكنك تثبيت Chai في مشروعك من خلال npm.

 `npm install chai 
` 

##### المؤيدة للطرف

إضافة Chai في devDependencies of _package.json_ ، باستخدام \* كعلامة إصدار. بهذه الطريقة ، لديك دائمًا أحدث إصدار.

 `"devDependencies": { 
  "chai": "*" 
 } 
` 

### كيف تستعمل

#### يجزم

يمكنك استخدام _التأكيد_ للتأكد من أداء اختباراتك جيدًا.

 ``var assert = require('chai').assert, foo = 'bar', beverages = { tea: [ 'chai', 'matcha', 'oolong' ] }; 
 
 assert.typeOf(foo, 'string'); // without optional message 
 assert.typeOf(foo, 'string', 'foo is a string'); // with optional message 
 assert.equal(foo, 'bar', 'foo equal `bar`'); 
 assert.lengthOf(foo, 3, 'foo`s value has a length of 3'); 
 assert.lengthOf(beverages.tea, 3, 'beverages has 3 types of tea'); 
`` 

### مزيد من المعلومات:

*   `help chai assert`
*   `help chai expectations`