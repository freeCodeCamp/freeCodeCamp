---
id: 589fc831f9fc0f352b528e76
title: Handle a Disconnect
challengeType: 2
videoUrl: ''
localeTitle: التعامل مع قطع الاتصال
---

## Description
<section id="description"> وللتذكير ، يجري بناء هذا المشروع على المشروع <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-socketio/">المبدئي</a> التالي في <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-socketio/">Glitch</a> ، أو مستنسخ من <a href="https://github.com/freeCodeCamp/boilerplate-socketio/">GitHub</a> . قد تلاحظ أن لديك حتى الآن زيادة عدد المستخدمين فقط. إن التعامل مع قطع اتصال المستخدم أمر سهل تمامًا مثل التعامل مع الاتصال الأولي ، باستثناء الفارق ، يجب عليك الاستماع إليه على كل مأخذ مقابل على الخادم بأكمله. <hr> للقيام بذلك ، أضف إلى مستمع الاتصال الموجود مستمعًا يستمع إلى &quot;قطع الاتصال&quot; على المقبس بدون بيانات تم تمريرها. يمكنك اختبار هذه الوظيفة بمجرد تسجيل الدخول إلى وحدة التحكم التي قام مستخدم بفصلها. <code>socket.on(&#39;disconnect&#39;, () =&gt; { /*anything you want to do on disconnect*/ });</code> للتأكد من أن العملاء لديهم العدد المحدّث من المستخدمين الحاليين بشكل مستمر ، يجب عليك تقليل عدد المستخدمين الحاليين بمقدار 1 عندما يحدث قطع الاتصال ثم إرسال الحدث &quot;عدد المستخدمين&quot; مع العدد المحدّث! <strong>ملحوظة</strong> <br> تمامًا مثل &quot;قطع الاتصال&quot; ، يجب التعامل مع جميع الأحداث الأخرى التي يمكن أن ينبعث منها مأخذ توصيل إلى الخادم داخل المستمع المتصل حيث تم تعريف &quot;المقبس&quot;. أرسل صفحتك عندما تظن أنك على صواب. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يعالج الخادم فصل الحدث من المقبس
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /socket.on.*("|")disconnect("|")/gi, ""); }, xhr => { throw new Error(xhr.statusText); })'
  - text: يستمع عميلك إلى حدث "عدد المستخدمين"
    testString: 'getUserInput => $.get(getUserInput("url")+ "/public/client.js") .then(data => { assert.match(data, /socket.on.*("|")user count("|")/gi, "Your client should be connection to server with the connection defined as socket"); }, xhr => { throw new Error(xhr.statusText); })'

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
