---
id: 58966a17f9fc0f352b528e6d
title: Registration of New Users
challengeType: 2
videoUrl: ''
localeTitle: تسجيل المستخدمين الجدد
---

## Description
<section id="description"> وللتذكير ، يجري بناء هذا المشروع على المشروع <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/">المبدئي</a> التالي في <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/">Glitch</a> ، أو مستنسخ من <a href="https://github.com/freeCodeCamp/boilerplate-advancednode/">GitHub</a> . الآن نحن بحاجة إلى السماح لمستخدم جديد على موقعنا بتسجيل حساب. على res.render للصفحة الرئيسية ، أضف متغيرًا جديدًا إلى الكائن الذي تم تمريره - <code>showRegistration: true</code> . عندما تقوم بتحديث صفحتك ، يجب أن تشاهد نموذج التسجيل الذي تم إنشاؤه بالفعل في ملف index.pug الخاص بك! تم إعداد هذا النموذج على <b>POST</b> على <em>/ تسجيل</em> حتى يكون هذا هو المكان الذي يجب أن نعده لقبول POST وإنشاء كائن المستخدم في قاعدة البيانات. يجب أن يكون منطق مسار التسجيل كما يلي: تسجيل المستخدم الجديد&gt; مصادقة المستخدم الجديد&gt; إعادة التوجيه إلى / الملف الشخصي يجب أن يكون منطق الخطوة 1 ، تسجيل المستخدم الجديد ، كما يلي: قاعدة بيانات الاستعلام بأمر findOne&gt; إذا كان المستخدم يتم إرجاعها ثم إعادة توجيهها إلى المنزل <em>أو</em> إذا كان المستخدم غير معروف ولا يحدث أي خطأ ثم &quot;insertOne&quot; في قاعدة البيانات باستخدام اسم المستخدم وكلمة المرور وطالما لم تحدث أي أخطاء ثم اتصل <em>التالي</em> للانتقال إلى الخطوة 2 ، مصادقة الجديد المستخدم ، الذي قمنا بالفعل بكتابة المنطق له في مسار POST / login الخاص بنا. <pre style=";text-align:right;direction:rtl"> app.route ( &#39;/ تسجيل&#39;)
  .post ((req، res، next) =&gt; {
      db.collection (&#39;users&#39;). findOne ({اسم المستخدم: req.body.username} ، الوظيفة (err، user) {
          if (err) {
              بجانب (يخطئ)؛
          } آخر في حالة (المستخدم) {
              res.redirect ( &#39;/&#39;)؛
          } آخر {
              db.collection ( &#39;المستخدمين). insertOne (
                {اسم المستخدم: req.body.username ،
                 كلمة المرور: req.body.password} ،
                (يخطئ ، مستند) =&gt; {
                    if (err) {
                        res.redirect ( &#39;/&#39;)؛
                    } آخر {
                        التالي (فارغ ، مستخدم) ؛
                    }
                }
              )
          }
      })}،
    passport.authenticate (&#39;local&#39;، {failureRedirect: &#39;/&#39;})،
    (req، res، next) =&gt; {
        res.redirect ( &#39;/ ملف&#39;)؛
    }
)؛ </pre> أرسل صفحتك عندما تظن أنك على صواب. إذا كنت تواجه أخطاء ، يمكنك التحقق من اكتمال المشروع حتى هذه النقطة <a href="https://gist.github.com/JosephLivengood/6c47bee7df34df9f11820803608071ed">هنا</a> . </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: سجل الطريق وعرض في المنزل
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /showRegistration:( |)true/gi, "You should be passing the variable "showRegistration" as true to your render function for the homepage"); assert.match(data, /register[^]*post[^]*findOne[^]*username:( |)req.body.username/gi, "You should have a route accepted a post request on register that querys the db with findone and the query being "username: req.body.username""); }, xhr => { throw new Error(xhr.statusText); })'
  - text: التسجيل يجب أن تعمل
    testString: 'getUserInput => $.ajax({url: getUserInput("url")+ "/register",data: {username: "freeCodeCampTester", password: "freeCodeCampTester"},crossDomain: true, type: "POST", xhrFields: { withCredentials: true }}) .then(data => { assert.match(data, /Profile/gi, "I should be able to register and it direct me to my profile. CLEAR YOUR DATABASE if this test fails (each time until its right!)"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: تسجيل الدخول يجب أن تعمل
    testString: 'getUserInput => $.ajax({url: getUserInput("url")+ "/login",data: {username: "freeCodeCampTester", password: "freeCodeCampTester"}, type: "POST", xhrFields: { withCredentials: true }}) .then(data => { assert.match(data, /Profile/gi, "Login should work if previous test was done successfully and redirect successfully to the profile. Check your work and clear your DB"); assert.match(data, /freeCodeCampTester/gi, "The profile should properly display the welcome to the user logged in"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: يجب أن يعمل تسجيل الخروج
    testString: 'getUserInput => $.ajax({url: getUserInput("url")+ "/logout", type: "GET", xhrFields: { withCredentials: true }}) .then(data => { assert.match(data, /Home/gi, "Logout should redirect to home"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: لا يجب أن يعمل الملف الشخصي بعد تسجيل الخروج
    testString: 'getUserInput => $.ajax({url: getUserInput("url")+ "/profile", type: "GET", crossDomain: true, xhrFields: { withCredentials: true }}) .then(data => { assert.match(data, /Home/gi, "Profile should redirect to home when we are logged out now again"); }, xhr => { throw new Error(xhr.statusText); })'

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
