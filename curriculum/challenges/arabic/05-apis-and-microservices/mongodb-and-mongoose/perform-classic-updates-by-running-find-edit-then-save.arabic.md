---
id: 587d7fb8367417b2b2512c0e
title: 'Perform Classic Updates by Running Find, Edit, then Save'
localeTitle: "قم بإجراء التحديثات الكلاسيكية عن طريق تشغيل بحث ، تحرير ، ثم حفظ"
challengeType: 2
---

## Description
<section id='description'> 
في الأيام الخوالي ، كان هذا هو ما تحتاج إلى القيام به إذا كنت ترغب في تحرير مستند وتكون قادرًا على استخدامه بطريقة ما ، على سبيل المثال إرساله مرة أخرى في استجابة الخادم. لدى Mongoose طريقة تحديث مخصصة: Model.update (). يتم ربطه بالسائق المنخفض المستوى من طراز mongo. يمكنه تحرير الكثير من الوثائق التي تتطابق مع معايير معينة ، لكنه لا يرسل الوثيقة المحدثة ، فقط رسالة "الحالة". وعلاوة على ذلك ، فإنه يجعل عمليات التحقق من صحة النموذج صعبة ، لأنه فقط يدعو مباشرة سائق المونجو. 
البحث عن شخص بواسطة _id (استخدام أي من الأساليب المذكورة أعلاه) مع person المعلمة كمفتاح البحث. أضف "الهامبرغر" إلى قائمة منتجاتها المفضلة (يمكنك استخدام Array.push ()). ثم - داخل البحث عن معاودة الاتصال - حفظ () الشخص المحدثة. 
[*] تلميح: قد يكون هذا أمرًا صعبًا إذا كنت قد أعلنت في المخطط الخاص بك أن الأطعمة المفضلة هي صفيف ، دون تحديد النوع (أي [السلسلة]). في ذلك casefavorite السلع الافتراضية إلى نوع مختلط ، ويجب عليك وضع علامة عليه يدويًا كما تم تحريره باستخدام document.markModified ('edited-field'). (http://mongoosejs.com/docs/schematypes.html - # مختلط) 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: البحث عن تحرير عنصر يجب أن تنجح
    testString: 'getUserInput => $.post(getUserInput(''url'') + ''/_api/find-edit-save'', {name:''Poldo'', age: 40, favoriteFoods:[''spaghetti'']}).then(data => { assert.equal(data.name, ''Poldo'', ''item.name is not what expected''); assert.equal(data.age, 40, ''item.age is not what expected''); assert.deepEqual(data.favoriteFoods, [''spaghetti'', ''hamburger''], ''item.favoriteFoods is not what expected''); assert.equal(data.__v, 1, ''The item should be previously edited''); }, xhr => { throw new Error(xhr.responseText); })'

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
