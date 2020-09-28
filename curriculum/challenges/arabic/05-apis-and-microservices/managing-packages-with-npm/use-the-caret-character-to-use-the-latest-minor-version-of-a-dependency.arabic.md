---
id: 587d7fb5367417b2b2512c03
title: Use the Caret-Character to Use the Latest Minor Version of a Dependency
localeTitle: استخدم حرف الإقحام لاستخدام أحدث إصدار ثانوي من التبعية
challengeType: 2
---

## Description
<section id='description'> 
شبيه بالكيفية التي سمعت بها التلدة (~) التي تعلمناها في التحدي الأخير لـ npm لتثبيت أحدث PATCH للتبعية ، تسمح علامة الإقحام (^) لـ npm لتثبيت التحديثات المستقبلية أيضًا. الفرق هو أن حرف الإقحام سيسمح بتحديثات MINOR و PATCHes. 
في الوقت الحالي ، يجب أن يكون الإصدار الحالي من اللحظة ~ 2.10.2 والذي يسمح لـ npm بالتثبيت على أحدث إصدار 2.10.x. إذا استخدمنا بدلاً من ذلك علامة الإقحام (^) كبادئة للإصدار ، فسيتم السماح لـ npm بالتحديث إلى أي إصدار 2.xx. 
مثال 
<code>"some-package-name": "^1.3.8" allows updates to any 1.xx version.</code> 
تعليمات 
استخدم حرف الإقحام (^) لبدء إصدار اللحظة في تبعياتك والسماح لـ npm بتحديثه إلى أي إصدار جديد صغير. 
لاحظ أنه لا يجب تغيير أرقام الإصدارات نفسها. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تتضمن "التبعيات" "لحظة"
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, ''moment'', ''"dependencies" does not include "moment"''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: يجب أن يتطابق إصدار "اللحظة" مع "^ 2.x.x"
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert.match(packJson.dependencies.moment, /^\^2\./, ''Wrong version of "moment". It should be ^2.10.2''); }, xhr => { throw new Error(xhr.responseText); })'

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
