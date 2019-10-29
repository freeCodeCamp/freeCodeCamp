---
id: 587d7fb1367417b2b2512bf4
title: Chain Middleware to Create a Time Server
localeTitle: سلسلة Middleware لإنشاء خادم الوقت
challengeType: 2
---

## Description
<section id='description'> 
الوسيطة يمكن تركيبه في مسار محدد باستخدام <code>app.METHOD(path, middlewareFunction)</code> . الوسيطة يمكن أيضا أن تكون بالسلاسل داخل تعريف الطريق. 
انظر إلى المثال التالي: 
<blockquote style=";text-align:right;direction:rtl">app.get('/user', function(req, res, next) {<br>  req.user = getTheUserSync();  // Hypothetical synchronous operation<br>  next();<br>}, function(req, res) {<br>  res.send(req.user);<br>})</blockquote> 
هذه الطريقة مفيدة لتقسيم عمليات الخادم إلى وحدات أصغر. وهذا يؤدي إلى بنية أفضل للتطبيق ، وإمكانية إعادة استخدام الرمز في أماكن مختلفة. يمكن استخدام هذا الأسلوب أيضًا لإجراء بعض التحقق من صحة البيانات. في كل نقطة من مكدس البرامج الوسيطة يمكنك منع تنفيذ التحكم في السلسلة والسلسة الحالية إلى وظائف مصممة خصيصًا للتعامل مع الأخطاء. أو يمكنك تمرير التحكم إلى المسار المطابق التالي ، للتعامل مع الحالات الخاصة. سنرى كيف في قسم Express المتقدمة. 
في مسار <code>app.get('/now', ...)</code> سلسلة وظيفة الوسيطة والمعالج النهائي. في وظيفة الوسيطة ، يجب إضافة الوقت الحالي إلى كائن الطلب في مفتاح <code>req.time</code> . يمكنك استخدام <code>new Date().toString()</code> . في المعالج ، <code>{time: req.time}</code> باستخدام كائن JSON ، مع أخذ البنية <code>{time: req.time}</code> . 
تلميح: لن يمر الاختبار إذا لم تقم بربط الوسيطة. إذا قمت بتركيب الوظيفة في مكان آخر ، سيفشل الاختبار ، حتى إذا كانت نتيجة الإخراج صحيحة. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يكون نقطة النهاية / الآن الوسيطة المثبتة
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/chain-middleware-time'').then(data => { assert.equal(data.stackLength, 2, ''"/now" route has no mounted middleware''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: يجب أن تقوم نقطة النهاية / الآن بإرجاع وقت يكون +/- 20 ثانية من الآن
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/chain-middleware-time'').then(data => { var now = new Date(); assert.isAtMost(Math.abs(new Date(data.time) - now), 20000, ''the returned time is not between +- 20 secs from now''); }, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
