---
id: 587d7fb6367417b2b2512c09
title: Create and Save a Record of a Model
localeTitle: إنشاء وحفظ سجل للنموذج
challengeType: 2
---

## Description
<section id='description'> 
إنشاء نسخة من المستند باستخدام مُنشئ الشخص الذي قمت بإنشائه من قبل. تمرير إلى المنشئ كائن له اسم الحقول والعمر و foodFoods المفضلة. يجب أن تكون أنواعها متوافقة مع تلك الموجودة في "مخطط الشخص". ثم استدعاء الأسلوب document.save () على مثيل المستند الذي تم إرجاعه. تمرير إليه رد اتصال باستخدام عقدة العقد. هذا نمط شائع ، كل طرق CRUD التالية تأخذ وظيفة رد اتصال مثل هذا كوسيطة أخيرة. 
<code>/* Example */</code> 
<code>// ...</code> 
<code>person.save(function(err, data) {</code> 
<code>// ...do your stuff here...</code> 
<code>});</code> 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن ينجح إنشاء عنصر db وحفظه
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/create-and-save-person'').then(data => { assert.isString(data.name, ''"item.name" should be a String''); assert.isNumber(data.age, ''28'', ''"item.age" should be a Number''); assert.isArray(data.favoriteFoods, ''"item.favoriteFoods" should be an Array''); assert.equal(data.__v, 0, ''The db item should be not previously edited''); }, xhr => { throw new Error(xhr.responseText); })'

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
