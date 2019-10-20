---
id: 587d7fb1367417b2b2512bf2
title: Use the .env File
localeTitle: استخدم ملف .env
challengeType: 2
---

## Description
<section id='description'> 
الملف <code>.env</code> عبارة عن ملف مخفي يستخدم لتمرير متغيرات البيئة إلى التطبيق الخاص بك. هذا الملف سري ، لا أحد ولكن يمكنك الوصول إليه ، ويمكن استخدامه لتخزين البيانات التي تريد الاحتفاظ بها خاصة أو مخفية. على سبيل المثال ، يمكنك تخزين مفاتيح API من الخدمات الخارجية أو عنوان URI الخاص بقاعدة البيانات. يمكنك أيضًا استخدامه لتخزين خيارات التهيئة. عن طريق إعداد خيارات التكوين ، يمكنك تغيير سلوك التطبيق الخاص بك ، دون الحاجة إلى إعادة كتابة بعض التعليمات البرمجية. 
يمكن الوصول إلى متغيرات البيئة من التطبيق مثل <code>process.env.VAR_NAME</code> . الكائن <code>process.env</code> هو كائن عقدة عمومي ، ويتم تمرير المتغيرات كسلسلة. حسب الاصطلاح ، أسماء المتغيرات كلها أحرف كبيرة ، مع الكلمات مفصولة تسطير سفلي. <code>.env</code> عبارة عن ملف shell ، لذلك لا تحتاج إلى التفاف الأسماء أو القيم بين علامتي اقتباس. من المهم أيضًا ملاحظة أنه لا يمكن توفير مسافة حول علامة equals عند تعيين قيم للمتغيرات ، مثل <code>VAR_NAME=value</code> . عادة ، ستضع كل تعريف متغير على سطر منفصل. 
دعونا إضافة متغير بيئة كخيار التكوين. قم بتخزين متغير <code>MESSAGE_STYLE=uppercase</code> في ملف <code>.env</code> . ثم أخبر معالج مسار GET <code>/json</code> الذي قمت بإنشائه في التحدي الأخير لتحويل رسالة كائن الاستجابة إلى أحرف كبيرة إذا كانت <code>process.env.MESSAGE_STYLE</code> تساوي <code>uppercase</code> . يجب أن يصبح كائن الاستجابة <code>{"message": "HELLO JSON"}</code> . 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تتغير استجابة نقطة النهاية <code>/json</code> طبقًا لمتغير البيئة <code>MESSAGE_STYLE</code>
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/use-env-vars'').then(data => { assert.isTrue(data.passed, ''The response of "/json" does not change according to MESSAGE_STYLE''); }, xhr => { throw new Error(xhr.responseText); })'

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
