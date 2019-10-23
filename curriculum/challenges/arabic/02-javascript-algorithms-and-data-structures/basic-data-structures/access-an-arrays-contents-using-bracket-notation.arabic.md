---
id: 5a661e0f1068aca922b3ef17
title: Access an Array's Contents Using Bracket Notation
challengeType: 1
videoUrl: ''
localeTitle: الوصول إلى محتويات صفيف باستخدام تدرج قوس
---

## Description
<section id="description"> إن الميزة الأساسية لأي بنية بيانات هي ، بالطبع ، القدرة على تخزين البيانات فحسب ، بل أيضًا القدرة على استرداد البيانات الموجودة في الأمر. والآن ، بعد أن تعلمنا كيفية إنشاء مصفوفة ، فلنبدأ في التفكير في كيفية الوصول إلى معلومات هذا الصفيف. عندما نحدد صفيفًا بسيطًا كما هو موضح أدناه ، يوجد 3 عناصر فيه: <blockquote style=";text-align:right;direction:rtl"> let ourArray = [&quot;a&quot;، &quot;b&quot;، &quot;c&quot;]؛ </blockquote> في صفيف ، يحتوي كل عنصر صفيف على <dfn>فهرس</dfn> . يتضاعف هذا المؤشر كموضع لهذا العنصر في الصفيف ، وكيف يمكنك الرجوع إليه. ومع ذلك، فمن المهم أن نلاحظ، أن صفائف جافا سكريبت <dfn>صفر-فهرستها،</dfn> وهذا يعني أن العنصر الأول من مجموعة هو في الواقع في موقف <em><strong>الصفري،</strong></em> وليس الأول. من أجل استرداد عنصر من صفيف ، يمكننا وضع فهرس بين قوسين وإلحاقه بنهاية مصفوفة ، أو بشكل أكثر شيوعًا ، إلى متغير يشير إلى كائن مصفوفة. هذا هو المعروف باسم <dfn>تدوين قوس</dfn> . على سبيل المثال ، إذا أردنا استرداد <code>&quot;a&quot;</code> من <code>ourArray</code> وتعيينه إلى متغير ، فيمكننا القيام بذلك باستخدام الكود التالي: <blockquote style=";text-align:right;direction:rtl"> دع ourVariable = ourArray [0]؛ <br> // our المتغير يساوي &quot;a&quot; </blockquote> بالإضافة إلى الوصول إلى القيمة المرتبطة بفهرس ، يمكنك أيضًا <em>تعيين</em> فهرس لقيمة باستخدام نفس الترميز: <blockquote style=";text-align:right;direction:rtl"> ourArray [1] = &quot;not b anymore&quot;؛ <br> // ourArray الآن تساوي [&quot;a&quot;، &quot;not b anymore&quot;، &quot;c&quot;]؛ </blockquote> باستخدام تدوين قوس ، قمنا الآن بإعادة تعيين العنصر في الفهرس 1 من <code>&quot;b&quot;</code> إلى <code>&quot;not b anymore&quot;</code> . </section>

## Instructions
<section id="instructions"> لإكمال هذا التحدي ، قم بتعيين الموضع الثاني (الرقم <code>1</code> ) من <code>myArray</code> إلى أي شيء تريده ، إلى جانب <code>&quot;b&quot;</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>myArray[0]</code> يساوي <code>&quot;a&quot;</code>'
    testString: 'assert.strictEqual(myArray[0], "a", "<code>myArray[0]</code> is equal to <code>"a"</code>");'
  - text: 'لم يعد <code>myArray[1]</code> مضبوطًا على <code>&quot;b&quot;</code>'
    testString: 'assert.notStrictEqual(myArray[1], "b", "<code>myArray[1]</code> is no longer set to <code>"b"</code>");'
  - text: '<code>myArray[2]</code> يساوي <code>&quot;c&quot;</code>'
    testString: 'assert.strictEqual(myArray[2], "c", "<code>myArray[2]</code> is equal to <code>"c"</code>");'
  - text: '<code>myArray[3]</code> يساوي <code>&quot;d&quot;</code>'
    testString: 'assert.strictEqual(myArray[3], "d", "<code>myArray[3]</code> is equal to <code>"d"</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let myArray = ["a", "b", "c", "d"];
// change code below this line

//change code above this line
console.log(myArray);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
