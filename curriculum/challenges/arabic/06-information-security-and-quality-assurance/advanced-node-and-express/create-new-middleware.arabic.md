---
id: 5895f70df9fc0f352b528e6a
title: Create New Middleware
challengeType: 2
videoUrl: ''
localeTitle: ''
---

## Description
<section id="description"> وللتذكير ، يجري بناء هذا المشروع على المشروع <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/">المبدئي</a> التالي في <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/">Glitch</a> ، أو مستنسخ من <a href="https://github.com/freeCodeCamp/boilerplate-advancednode/">GitHub</a> . كما هو الحال في ، يمكن لأي مستخدم الانتقال إلى / profile ما إذا كان قد تمت مصادقته أم لا عن طريق كتابة عنوان url. نريد منع ذلك من خلال التحقق مما إذا كان المستخدم قد تمت مصادقته أولاً قبل عرض صفحة الملف الشخصي. هذا هو المثال المثالي على موعد إنشاء الوسيطة. ويتمثل التحدي هنا في إنشاء وظيفة الوسيطة التي يتم <code>ensureAuthenticated(req, res, next)</code> ، والتي ستتحقق مما إذا كان المستخدم قد تم توثيقه عن طريق الاتصال بجوازات السفر ، تم التصديق عليه <em>بناءً</em> على <em>الطلب</em> الذي يتم <em>تحديده</em> للتحقق من <em>req.user</em> . إذا كان يجب أن يتم استدعاء <em>التالي ()</em> ، وإلا يمكننا فقط الرد على الطلب مع إعادة توجيه إلى صفحتنا الرئيسية لتسجيل الدخول. تنفيذ هذه الوسيطة هو: <pre style=";text-align:right;direction:rtl"> تضمن وظيفة تم التصديق عليها (req، res، next) {
  if (req.isAuthenticated ()) {
      العودة المقبل () ؛
  }
  res.redirect ( &#39;/&#39;)؛
}؛ </pre> الآن أضف <em>makeAuthenticated</em> as a middleware to request for the profile page before the argument to the get request <em>contains the function that viewing</em> the page. <pre style=";text-align:right;direction:rtl"> app.route ( &#39;/ ملف&#39;)
  .get (ensureAuthenticated، (req، res) =&gt; {
       res.render (process.cwd () + &#39;/ views / pug / profile&#39;) ؛
  })؛ </pre> أرسل صفحتك عندما تظن أنك على صواب. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يتم تنفيذ الوسيطة التي تم التأكد من صحتها وعلى طريقنا / ملفنا الشخصي
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /ensureAuthenticated[^]*req.isAuthenticated/gi, "Your ensureAuthenticated middleware should be defined and utilize the req.isAuthenticated function"); assert.match(data, /profile[^]*get[^]*ensureAuthenticated/gi, "Your ensureAuthenticated middleware should be attached to the /profile route"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: طلب الحصول على / إعادة التوصيف بشكل صحيح يعيد التوجيه إلى / بما أننا غير مصادقين
    testString: 'getUserInput => $.get(getUserInput("url")+ "/profile") .then(data => { assert.match(data, /Home page/gi, "An attempt to go to the profile at this point should redirect to the homepage since we are not logged in"); }, xhr => { throw new Error(xhr.statusText); })'

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
