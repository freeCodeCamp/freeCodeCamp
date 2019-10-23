---
id: 56bbb991ad1ed5201cd392d0
title: Build JavaScript Objects
challengeType: 1
videoUrl: ''
localeTitle: بناء كائنات جافا سكريبت
---

## Description
<section id="description"> ربما سمعت المصطلح <code>object</code> قبل. تشبه الكائنات <code>arrays</code> ، إلا أنه بدلاً من استخدام الفهارس للوصول إلى بياناتها وتعديلها ، يمكنك الوصول إلى البيانات الموجودة في الكائنات من خلال ما يسمى <code>properties</code> . تُعد الكائنات مفيدة لتخزين البيانات بطريقة منظمة ، ويمكن أن تمثل كائنات العالم الحقيقي ، مثل القطة. وإليك عينة كائن القط: <blockquote style=";text-align:right;direction:rtl"> var cat = { <br> &quot;الاسم&quot;: &quot;الشعيرات&quot; ، <br> &quot;الساقين&quot;: 4 ، <br> &quot;ذيول&quot;: 1 ، <br> &quot;الأعداء&quot;: [&quot;Water&quot;، &quot;Dogs&quot;] <br> }؛ </blockquote> في هذا المثال ، يتم تخزين جميع الخصائص كسلاسل ، مثل - <code>&quot;name&quot;</code> ، <code>&quot;legs&quot;</code> ، و <code>&quot;tails&quot;</code> . ومع ذلك ، يمكنك أيضًا استخدام الأرقام كخصائص. يمكنك حتى حذف علامات الاقتباس لخصائص السلسلة المفردة الكلمة ، كما يلي: <blockquote style=";text-align:right;direction:rtl"> var anotherObject = { <br> جعل: &quot;فورد&quot; ، <br> 5: &quot;خمسة&quot; ، <br> &quot;نموذج&quot;: &quot;التركيز&quot; <br> }؛ </blockquote> ومع ذلك ، إذا كان الكائن الخاص بك يحتوي على أية خصائص غير سلسلة ، فسوف يقوم جافا سكريبت بتلبيسها تلقائيًا كسلاسل. </section>

## Instructions
<section id="instructions"> جعل كائن يمثل كلب يسمى <code>myDog</code> الذي يحتوي على خصائص <code>&quot;name&quot;</code> (سلسلة) ، <code>&quot;legs&quot;</code> ، <code>&quot;tails&quot;</code> و <code>&quot;friends&quot;</code> . يمكنك تعيين خصائص الكائن هذه إلى أي قيم تريدها ، حيث أن <code>&quot;name&quot;</code> الطويل عبارة عن سلسلة ، و <code>&quot;legs&quot;</code> و <code>&quot;tails&quot;</code> هي أرقام ، و <code>&quot;friends&quot;</code> هو مصفوفة. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myDog</code> يجب أن يحتوي على <code>name</code> الخاصية ويجب أن يكون <code>string</code> .
    testString: 'assert((function(z){if(z.hasOwnProperty("name") && z.name !== undefined && typeof z.name === "string"){return true;}else{return false;}})(myDog), "<code>myDog</code> should contain the property <code>name</code> and it should be a <code>string</code>.");'
  - text: <code>myDog</code> يجب أن يحتوي على <code>legs</code> العقار ويجب أن يكون <code>number</code> .
    testString: 'assert((function(z){if(z.hasOwnProperty("legs") && z.legs !== undefined && typeof z.legs === "number"){return true;}else{return false;}})(myDog), "<code>myDog</code> should contain the property <code>legs</code> and it should be a <code>number</code>.");'
  - text: <code>myDog</code> يجب أن يحتوي على <code>tails</code> الخاصية ويجب أن يكون <code>number</code> .
    testString: 'assert((function(z){if(z.hasOwnProperty("tails") && z.tails !== undefined && typeof z.tails === "number"){return true;}else{return false;}})(myDog), "<code>myDog</code> should contain the property <code>tails</code> and it should be a <code>number</code>.");'
  - text: <code>myDog</code> يجب أن يحتوي على <code>friends</code> الملكية ويجب أن يكون <code>array</code> .
    testString: 'assert((function(z){if(z.hasOwnProperty("friends") && z.friends !== undefined && Array.isArray(z.friends)){return true;}else{return false;}})(myDog), "<code>myDog</code> should contain the property <code>friends</code> and it should be an <code>array</code>.");'
  - text: يجب أن يحتوي <code>myDog</code> على جميع الخصائص المحددة فقط.
    testString: 'assert((function(z){return Object.keys(z).length === 4;})(myDog), "<code>myDog</code> should only contain all the given properties.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

// Only change code below this line.

var myDog = {




};

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
