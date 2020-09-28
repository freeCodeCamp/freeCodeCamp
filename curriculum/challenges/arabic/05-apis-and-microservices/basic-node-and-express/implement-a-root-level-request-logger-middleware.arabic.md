---
id: 587d7fb1367417b2b2512bf3
title: Implement a Root-Level Request Logger Middleware
localeTitle: تنفيذ برنامج Logware Logger Logger على مستوى الجذر
challengeType: 2
---

## Description
<section id='description'> 
قبل أن نقدم وظيفة الوسيطة <code>express.static()</code> . الآن حان الوقت لنرى ما هي الوسيطة ، بمزيد من التفصيل. دالات الوسيطية هي الدوال التي تأخذ 3 حجج: كائن الطلب ، كائن الاستجابة ، والدالة التالية في دورة طلب-استجابة التطبيق. هذه الوظائف تنفيذ بعض التعليمات البرمجية التي يمكن أن يكون لها آثار جانبية على التطبيق ، وعادة ما تضيف المعلومات إلى الكائنات استجابة أو طلب. يمكنهم أيضًا إنهاء دورة إرسال الاستجابة ، عند استيفاء بعض الشروط. إذا لم يرسلوا الاستجابة ، فعند الانتهاء من ذلك ، يبدأون تنفيذ الوظيفة التالية في المكدس. يتم تشغيل هذا استدعاء الوسيطة الثالثة <code>next()</code> . مزيد من المعلومات في <a href='http://expressjs.com/en/guide/using-middleware.html' target='_blank'>الوثائق السريعة</a> . 
انظر إلى المثال التالي: 
<blockquote style=";text-align:right;direction:rtl">function(req, res, next) {<br>  console.log("I'm a middleware...");<br>  next();<br>}</blockquote> 
دعونا نفترض أننا شنت هذه الوظيفة على الطريق. عندما يطابق أحد الطلبات المسار ، فإنه يعرض السلسلة "أنا برنامج وسيط ...". ثم ينفذ الوظيفة التالية في المكدس. 
في هذا التمرين ، سنقوم ببناء برنامج وسيط بمستوى الجذر. كما رأينا في التحدي 4 ، لتركيب وظيفة الوسيطة على مستوى الجذر يمكننا استخدام طريقة <code>app.use(&lt;mware-function&gt;)</code> . في هذه الحالة ، سيتم تنفيذ الوظيفة لجميع الطلبات ، ولكن يمكنك أيضًا تعيين شروط أكثر تحديدًا. على سبيل المثال ، إذا كنت تريد تنفيذ دالة فقط لطلبات POST ، فيمكنك استخدام <code>app.post(&lt;mware-function&gt;)</code> . توجد أساليب مماثلة لجميع الأفعال http (GET، DELETE، PUT،…). 
بناء بسيط المسجل. لكل طلب ، يجب عليه تسجيل الدخول في وحدة التحكم سلسلة أخذ التنسيق التالي: <code>method path - ip</code> . قد يبدو المثال: <code>GET /json - ::ffff:127.0.0.1</code> . لاحظ أن هناك مسافة بين <code>method</code> و <code>path</code> وأن اندفاعة فصل <code>path</code> و <code>ip</code> وتحيط به مساحة على جانبي. يمكنك الحصول على طريقة الطلب (الفعل المتشعب) ، ومسار المسار النسبي ، <code>req.method</code> المتصل من كائن الطلب ، باستخدام <code>req.method</code> ، <code>req.path</code> و <code>req.ip</code> تذكر الاتصال <code>next()</code> عند الانتهاء ، أو أن الخادم الخاص بك سيكون عالقاً إلى الأبد. تأكد من فتح "السجلات" ، وشاهد ما سيحدث عند وصول بعض الطلبات ... 
تلميح: يقوم Express بتقييم الوظائف بالترتيب الذي تظهر به في التعليمة البرمجية. هذا صحيح على الوسيطة أيضا. إذا كنت تريد أن تعمل في جميع المسارات ، فيجب تثبيتها قبلها. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تكون البرامج الوسيطة لمسجل المستوى الجذر نشطة
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/root-middleware-logger'').then(data => { assert.isTrue(data.passed, ''root-level logger is not working as expected''); }, xhr => { throw new Error(xhr.responseText); })'

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
