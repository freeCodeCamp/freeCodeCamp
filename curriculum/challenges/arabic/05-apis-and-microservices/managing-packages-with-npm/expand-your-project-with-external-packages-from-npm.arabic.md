---
id: 587d7fb4367417b2b2512c00
title: Expand Your Project with External Packages from npm
localeTitle: توسيع المشروع الخاص بك مع الحزم الخارجية من npm
challengeType: 2
---

## Description
<section id='description'> 
واحدة من أكبر الأسباب لاستخدام مدير الحزمة هي إدارة التبعية القوية. بدلاً من الاضطرار يدويًا إلى التأكد من حصولك على جميع الاعتمادات عندما تقوم بإعداد مشروع على كمبيوتر جديد ، يقوم npm تلقائيًا بتثبيت كل شيء لك. ولكن كيف يمكن لـ npm أن تعرف بالضبط ما يحتاجه مشروعك؟ تعرّف على قسم التبعيات في الحزمة. json. 
في قسم التبعيات ، يتم تخزين الحزم التي تحتاجها مشروعك باستخدام التنسيق التالي: 
<code>"dependencies": {</code> 
<code>"package-name": "version",</code> 
<code>"express": "4.14.0"</code> 
<code>}</code> 
إرشادات 
قم بإضافة الإصدار 2.14.0 من حزمة الحزم إلى حقل التبعيات الخاص بك من package.json 
Moment هي مكتبة مفيدة للعمل مع الوقت والتواريخ. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تتضمن "التبعيات" "لحظة"
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data);  assert.property(packJson.dependencies, ''moment'', ''"dependencies" does not include "moment"''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: يجب أن يكون إصدار "اللحظة" هو "2.14.0"
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data);  assert.match(packJson.dependencies.moment, /^[\^\~]?2\.14\.0/, ''Wrong version of "moment" installed. It should be 2.14.0''); }, xhr => { throw new Error(xhr.responseText); })'

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
