---
id: 587d7fb6367417b2b2512c07
title: Create a Model
localeTitle: خلق نموذج
challengeType: 2
---

## Description
<section id='description'> 
أولا وقبل كل ما نحتاج إليه في المخطط. كل مخطط مخططات إلى مجموعة MongoDB. يحدد شكل المستندات داخل هذه المجموعة. 
المخططات هي العنصر الأساسي للنماذج. يمكن أن تكون متداخلة لإنشاء نماذج معقدة ، ولكن في هذه الحالة سنبقي الأمور بسيطة. 
يتيح لك نموذج إنشاء مثيلات لكائنات ، تسمى مستندات. 
إنشاء شخص لديه هذا النموذج الأولي: 
<code>- Person Prototype -</code> 
<code>--------------------</code> 
<code>name : string [required]</code> 
<code>age : number</code> 
<code>favoriteFoods : array of strings (*)</code> 
استخدم أنواع المخطط الأساسي للنمس. إذا أردت يمكنك أيضا إضافة 
حقول أكثر من ذلك، استخدام المصادقون بسيطة مثل المطلوبة أو فريدة من نوعها، 
القيم الافتراضية والمحددة. انظر <a href='http://mongoosejs.com/docs/guide.html'>مستندات النمس</a> . 
[C] RUD الجزء الأول - CREATE 
ملاحظة: خلل هو خادم حقيقي ، والخوادم الحقيقية في التفاعلات مع ديسيبل يحدث في وظائف معالج. يتم تنفيذ هذه الوظيفة عند حدوث بعض الأحداث (على سبيل المثال ، يضرب أحد الأشخاص نقطة نهاية على واجهة برمجة التطبيقات). سنتبع نفس النهج في هذه التمارين. الدالة done () هي رد اتصال يخبرنا أنه يمكننا المتابعة بعد إكمال عملية غير متزامنة مثل الإدراج أو البحث أو التحديث أو الحذف. إنه يتبع اصطلاح "عقدة" ويجب أن يتم استدعاؤه كـ "فارغ (بيانات) فارغة" أو "تم" (خطأ) على الخطأ. 
تحذير - عند التفاعل مع الخدمات عن بعد ، قد تحدث أخطاء! 
<code>/* Example */</code> 
<code>var someFunc = function(done) {</code> 
<code>//... do something (risky) ...</code> 
<code>if(error) return done(error);</code> 
<code>done(null, result);</code> 
<code>};</code> 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن ينجح إنشاء مثيل من مخطط النمس
    testString: 'getUserInput => $.post(getUserInput(''url'') + ''/_api/mongoose-model'', {name: ''Mike'', age: 28, favoriteFoods: [''pizza'', ''cheese'']}).then(data => { assert.equal(data.name, ''Mike'', ''"model.name" is not what expected''); assert.equal(data.age, ''28'', ''"model.age" is not what expected''); assert.isArray(data.favoriteFoods, ''"model.favoriteFoods" is not an Array''); assert.include(data.favoriteFoods, ''pizza'', ''"model.favoriteFoods" does not include the expected items''); assert.include(data.favoriteFoods, ''cheese'', ''"model.favoriteFoods" does not include the expected items''); }, xhr => { throw new Error(xhr.responseText); })'

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
