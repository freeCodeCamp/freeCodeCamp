---
id: 587d7fb0367417b2b2512bf0
title: Serve Static Assets
localeTitle: خدمة الأصول الثابتة
challengeType: 2
---

## Description
<section id='description'> 
يحتوي خادم HTML عادة على واحد أو أكثر من الدلائل التي يمكن الوصول إليها من قبل المستخدم. يمكنك وضع الأصول الثابتة التي يحتاج إليها التطبيق الخاص بك (أوراق الأنماط ، البرامج النصية ، الصور). في Express يمكنك وضع هذه الوظيفة باستخدام الوسيطة <code>express.static(path)</code> ، حيث تكون المعلمة هي المسار المطلق للمجلد الذي يحتوي على الأصول. إذا كنت لا تعرف ما هي الوسيطة ، فلا تقلق. سنناقشها فيما بعد بالتفصيل. في المقام الأول الوسيطة هي وظائف تعترض معالجات الطريق ، تضيف نوعا من المعلومات. تحتاج الوسيطة <code>app.use(path, middlewareFunction)</code> باستخدام طريقة <code>app.use(path, middlewareFunction)</code> . وسيطة المسار الأول اختيارية. إذا لم تنجح ، سيتم تنفيذ الوسيطة لجميع الطلبات. 
<code>app.use()</code> البرامج الوسيطة <code>express.static()</code> لكافة الطلبات باستخدام <code>app.use()</code> . المسار المطلق لمجلد الأصول هو <code>__dirname + /public</code> . 
يجب أن يكون تطبيقك الآن قادرًا على تقديم ورقة أنماط CSS. من خارج المجلد العام سوف تظهر محملة إلى الدليل الجذر. من المفترض أن تبدو صفحتك الأولى أفضل قليلاً الآن! 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يخدم تطبيقك ملفات مواد العرض من الدليل <code>/public</code>
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/style.css'').then(data => { assert.match(data, /body\s*\{[^\}]*\}/, ''Your app does not serve static assets''); }, xhr => { throw new Error(xhr.responseText); })'

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
