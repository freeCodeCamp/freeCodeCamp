---
id: 587d7fb3367417b2b2512bfc
title: Add a Description to Your package.json
localeTitle: أضف وصفًا إلى الحزمة. json
challengeType: 2
---

## Description
<section id='description'> 
الجزء التالي من حزمة جيدة. json هو حقل الوصف ، حيث ينتمي وصف قصير ولكن غني بالمعلومات عن مشروعك. 
إذا كنت تخطط في يوم ما لنشر حزمة إلى npm ، تذكر أن هذه هي السلسلة التي يجب أن تبيع فكرتك للمستخدم عندما يقررون تثبيت الحزمة الخاصة بك أم لا. ومع ذلك ، هذه ليست حالة الاستخدام الوحيدة للوصف: إنها طريقة رائعة لتلخيص ما يفعله المشروع ، لا يقل أهمية عن مشاريع Node.js العادية لمساعدة مطورين آخرين ، أو مشرفين مستقبليين أو حتى مستقبلك على فهم المشروع. بسرعة. 
بغض النظر عن ما كنت تخطط لمشروعك، وأوصت بالتأكيد وصفا. دعونا نضيف شيئًا مشابهًا لهذا: 
<code>"description": "A project that does something awesome",</code> 
إرشادات 
أضف وصفًا إلى الحزمة package.json في مشروع Glitch. 
تذكر لاستخدام علامات الاقتباس المزدوجة لأسماء المجال ( ") والفواصل (،) للفصل بين الحقول. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: package.json يجب أن يكون مفتاح "وصف" صالح
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert(packJson.description, ''"description" is missing''); }, xhr => { throw new Error(xhr.responseText); })'

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
