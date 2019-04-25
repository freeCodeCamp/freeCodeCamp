---
id: 587d7fb4367417b2b2512bfd
title: Add Keywords to Your package.json
localeTitle: أضف كلمات رئيسية إلى package.json الخاص بك
challengeType: 2
---

## Description
<section id='description'> 
حقل الكلمات الرئيسية هو المكان الذي يمكنك فيه وصف مشروعك باستخدام الكلمات الرئيسية ذات الصلة. 
مثال 
<code>"keywords": [ "descriptive", "related", "words" ],</code> 
كما ترى ، يتم تنظيم هذا الحقل على هيئة مصفوفة من سلاسل مقتبسة مزدوجة. 
إرشادات 
أضف مصفوفة من السلاسل المناسبة إلى حقل الكلمات الرئيسية في الحزمة. json من مشروع Glitch. 
يجب أن تكون واحدة من الكلمات الأساسية freecodecamp. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يحتوي package.json على مفتاح "كلمات رئيسية" صالح
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert(packJson.keywords, ''"keywords" is missing''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: يجب أن يكون حقل "الكلمات الرئيسية" مصفوفة
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert.isArray(packJson.keywords, ''"keywords" is not an array''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: يجب أن تتضمن "الكلمات الرئيسية" "freecodecamp"
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data);     assert.include(packJson.keywords, ''freecodecamp'', ''"keywords" does not include "freecodecamp"''); },  xhr => { throw new Error(xhr.responseText); })'

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
