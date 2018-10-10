---
id: 58965611f9fc0f352b528e6c
title: Logging a User Out
challengeType: 2
videoUrl: ''
localeTitle: تسجيل مستخدم خارج
---

## Description
<section id="description"> وللتذكير ، يجري بناء هذا المشروع على المشروع <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/">المبدئي</a> التالي في <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/">Glitch</a> ، أو مستنسخ من <a href="https://github.com/freeCodeCamp/boilerplate-advancednode/">GitHub</a> . إن إنشاء منطق الخروج أمر سهل. يجب أن يؤدي المسار إلى عدم مصادقة المستخدم وإعادة التوجيه إلى الصفحة الرئيسية بدلاً من عرض أي ملف شخصي. في جواز السفر ، يكون إلغاء مصادقة المستخدم أمراً سهلاً مثل استدعاء <code>req.logout();</code> قبل إعادة التوجيه. <pre style=";text-align:right;direction:rtl"> app.route ( &#39;/ خروج&#39;)
  .get ((req، res) =&gt; {
      req.logout ()؛
      res.redirect ( &#39;/&#39;)؛
  })؛ </pre> قد تكون لاحظنا أيضًا أننا لا نتعامل مع الصفحات المفقودة (404) ، والطريقة الشائعة للتعامل مع هذا في العقدة هي مع الوسيطة التالية. المضي قدما وإضافة هذا بعد كل الطرق الأخرى الخاصة بك: <pre style=";text-align:right;direction:rtl"> app.use ((req، res، next) =&gt; {
  res.status (404)
    .أكتب نصا&#39;)
    . ارسل (&quot;غير موجود&quot;) ؛
})؛ </pre> أرسل صفحتك عندما تظن أنك على صواب. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: طريق الخروج
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /req.logout/gi, "You should be call req.logout() in youre /logout route"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: يجب أن يقوم تسجيل الخروج بإعادة التوجيه إلى الصفحة الرئيسية /
    testString: 'getUserInput => $.get(getUserInput("url")+ "/logout") .then(data => { assert.match(data, /Home page/gi, "When a user logs out they should be redirected to the homepage"); }, xhr => { throw new Error(xhr.statusText); })'

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
