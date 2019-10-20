---
id: 58a25c98f9fc0f352b528e7f
title: Hashing Your Passwords
challengeType: 2
videoUrl: ''
localeTitle: تجزئة كلمات المرور الخاصة بك
---

## Description
<section id="description"> وللتذكير ، يجري بناء هذا المشروع على المشروع <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/">المبدئي</a> التالي في <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/">Glitch</a> ، أو مستنسخ من <a href="https://github.com/freeCodeCamp/boilerplate-advancednode/">GitHub</a> . وبالرجوع إلى قسم أمن المعلومات ، قد تتذكر أن تخزين كلمات مرور نص عادي ليس مقبولًا <em>أبدًا</em> . الآن حان الوقت لتنفيذ BCrypt لحل هذه المشكلة. <hr> إضافة BCrypt كاعتمادية وتطلبها في الخادم الخاص بك. ستحتاج إلى معالجة التجزئة في مجالين رئيسيين: حيث يمكنك التعامل مع تسجيل / حفظ حساب جديد وعند التحقق من صحة كلمة المرور عند تسجيل الدخول. حاليًا على مسار التسجيل الخاص بنا ، تقوم بإدراج كلمة مرور المستخدم في قاعدة البيانات كما يلي: <code>password: req.body.password</code> . طريقة سهلة لتطبيق تجزئة بدلاً من ذلك هو إضافة ما يلي قبل منطق قاعدة البيانات <code>var hash = bcrypt.hashSync(req.body.password, 12);</code> واستبدال <code>req.body.password</code> في حفظ قاعدة البيانات <code>password: hash</code> . وأخيرًا في إستراتيجية المصادقة الخاصة بنا ، نتحقق مما يلي في الكود الخاص بنا قبل إتمام العملية: <code>if (password !== user.password) { return done(null, false); }</code> . بعد إجراء التغييرات السابقة ، الآن <code>user.password</code> هو تجزئة. قبل إجراء تغيير على التعليمات البرمجية الموجودة ، لاحظ كيف يتم التحقق من العبارة إذا كانت كلمة المرور غير مساوية ثم إرجاع غير مصادقة. مع وضع هذا في الاعتبار يمكن أن تبدو التعليمات البرمجية الخاصة بك كما يلي للتحقق بشكل صحيح كلمة المرور التي تم إدخالها مقابل التجزئة: <code>if (!bcrypt.compareSync(password, user.password)) { return done(null, false); }</code> هذا هو كل ما يتطلبه الأمر لتنفيذ أحد أهم ميزات الأمان عندما يكون عليك تخزين كلمات المرور! أرسل صفحتك عندما تظن أنك على صواب. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: BCrypt هو التبعية
    testString: ' getUserInput => $.get(getUserInput("url")+ "/_api/package.json") .then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, "bcrypt", "Your project should list "bcrypt" as a dependency"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: BCrypt المطلوبة بشكل صحيح وتنفيذها
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /require.*("|")bcrypt("|")/gi, "You should have required bcrypt"); assert.match(data, /bcrypt.hashSync/gi, "You should use hash the password in the registration"); assert.match(data, /bcrypt.compareSync/gi, "You should compare the password to the hash in your strategy"); }, xhr => { throw new Error(xhr.statusText); })'

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
