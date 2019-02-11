---
id: 587d7fb8367417b2b2512c0f
title: Perform New Updates on a Document Using model.findOneAndUpdate()
localeTitle: إجراء تحديثات جديدة على مستند باستخدام model.findOneAndUpdate ()
challengeType: 2
---

## Description
<section id='description'> 
الإصدارات الحديثة من النمس لها طرق لتبسيط تحديث الوثائق. تتصرف بعض الميزات الأكثر تقدمًا (أي خطافات ما قبل / النشر والتحقق من الصحة) بشكل مختلف مع هذا الأسلوب ، لذلك لا تزال الطريقة الكلاسيكية مفيدة في العديد من المواقف. يمكن استخدام findByIdAndUpdate () عند البحث باستخدام Id. 
البحث عن شخص حسب الاسم وتعيين سنها إلى 20. استخدم الدالة parameter nameName كمفتاح بحث. 
تلميح: نريد منك إرجاع المستند الذي تم تحديثه. للقيام بذلك ، تحتاج إلى تمرير مستند الخيارات {جديد: true} كوسيطة 3 للبحث عن OneOndUpdate (). بشكل افتراضي ، ترجع هذه الطرق الكائن غير المعدل. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: findOneAndUpdate يجب أن ينجح عنصر
    testString: 'getUserInput => $.post(getUserInput(''url'') + ''/_api/find-one-update'', {name:''Dorian Gray'', age: 35, favoriteFoods:[''unknown'']}).then(data => { assert.equal(data.name, ''Dorian Gray'', ''item.name is not what expected''); assert.equal(data.age, 20, ''item.age is not what expected''); assert.deepEqual(data.favoriteFoods, [''unknown''], ''item.favoriteFoods is not what expected''); assert.equal(data.__v, 0, ''findOneAndUpdate does not increment version by design !!!''); }, xhr => { throw new Error(xhr.responseText); })'

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
