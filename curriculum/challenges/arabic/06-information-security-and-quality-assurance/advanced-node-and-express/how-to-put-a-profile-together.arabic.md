---
id: 5895f70ef9fc0f352b528e6b
title: How to Put a Profile Together
challengeType: 2
videoUrl: ''
localeTitle: كيفية وضع ملف التعريف معا
---

## Description
<section id="description"> وللتذكير ، يجري بناء هذا المشروع على المشروع <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/">المبدئي</a> التالي في <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/">Glitch</a> ، أو مستنسخ من <a href="https://github.com/freeCodeCamp/boilerplate-advancednode/">GitHub</a> . الآن بعد التأكد من مصادقة المستخدم على <em>الملف الشخصي / الملف الشخصي</em> ، يمكننا استخدام المعلومات الواردة في &quot;req.user&quot; على صفحتنا! المضي قدما وتمرير الكائن الذي يحتوي على <em>اسم مستخدم</em> متغير يساوي &quot;req.user.username&quot; في طريقة تقديم طريقة عرض ملف التعريف. ثم انتقل إلى عرض &quot;profile.pug&quot; وأضف السطر <code>h2.center#welcome Welcome, #{username}!</code> إنشاء عنصر h2 مع الفئة &#39;center&#39; و id &#39;welcome&#39; الذي يحتوي على النص &#39;Welcome&#39; ، واسم المستخدم! أيضًا في الملف الشخصي ، أضف رابطًا إلى <em>/ خروج</em> . سيستضيف هذا المسار المنطق لإلغاء مصادقة مستخدم. <code>a(href=&#39;/logout&#39;) Logout</code> صفحتك عندما تظن أنك على صواب. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: إضافة بشكل صحيح متغير تجسيد الصلصال إلى / الملف الشخصي
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /\/views\/pug\/profile[^]*username:( |)req.user.username/gi, "You should be passing the variable username with req.user.username into the render function of the profile page"); }, xhr => { throw new Error(xhr.statusText); })'

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
