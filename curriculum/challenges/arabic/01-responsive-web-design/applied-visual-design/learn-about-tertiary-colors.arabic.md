---
id: 587d78a4367417b2b2512ad2
title: Learn about Tertiary Colors
challengeType: 0
videoUrl: ''
localeTitle: تعرف على ألوان التعليم العالي
---

## Description
<section id="description"> تعمل شاشات الكمبيوتر وشاشات الأجهزة على إنشاء ألوان مختلفة من خلال الجمع بين كميات الضوء الأحمر والأخضر والأزرق. هذا هو المعروف باسم نموذج RGB المضاف اللون في نظرية الألوان الحديثة. تسمى الأحمر (R) والأخضر (G) والأزرق (B) بالألوان الأساسية. يؤدي خلط لونين أساسيين إلى إنشاء الألوان الثانوية السماوي (G + B) والأرجواني (R + B) والأصفر (R + G). لقد رأيت هذه الألوان في تحدي الألوان التكميلية. هذه الألوان الثانوية تكون مكملة للون الأساسي غير المستخدم في إنشائها ، وهي عكس ذلك اللون الأساسي على عجلة الألوان. على سبيل المثال ، يرصد الأرجواني مع الأحمر والأزرق ، وهو مكمل للأخضر. الألوان الثلاثية هي نتيجة دمج لون أساسي مع أحد جوار الألوان الثانوية. على سبيل المثال ، الأحمر (الأساسي) والأصفر (ثانوي) جعل البرتقالي. هذا يضيف ستة ألوان إضافية إلى عجلة ألوان بسيطة لإجمالي 12 لونًا. هناك طرق مختلفة لاختيار ألوان مختلفة تؤدي إلى تركيبة متناسقة في التصميم. يسمى أحد الأمثلة التي يمكن أن تستخدم ألوان ثلاثية نظام الألوان المكملة والمقسمة. يبدأ هذا المخطط بلون أساسي ، ثم يجمعه مع لونين متاخمين لملحقه. توفر الألوان الثلاثة تباينًا بصريًا قويًا في التصميم ، ولكنها أكثر دقة من استخدام لونين متكاملين. في ما يلي ثلاث ألوان تم إنشاؤها باستخدام نظام الإنقسام المنفصل: <table class="table table-striped" style=";text-align:right;direction:rtl"><thead><tr><th> اللون </th><th> رمز عشري </th></tr></thead><thead></thead><tbody><tr><td> البرتقالي </td><td> # FF7D00 </td></tr><tr><td> ازرق سماوي </td><td> # 00FFFF </td></tr><tr><td> توت العُليق </td><td> # FF007D </td></tr></tbody></table></section>

## Instructions
<section id="instructions"> قم بتغيير خاصية <code>background-color</code> بالفصول <code>orange</code> <code>cyan</code> <code>raspberry</code> إلى ألوانها الخاصة. تأكد من استخدام الشفرات السداسية كبرتقال ، وأن التوت ليس أسماء ألوان معترف بها بالمتصفح. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يكون لعنصر <code>div</code> <code>orange</code> <code>background-color</code> برتقالي.
    testString: 'assert($(".orange").css("background-color") == "rgb(255, 125, 0)", "The <code>div</code> element with class <code>orange</code> should have a <code>background-color</code> of orange.");'
  - text: و <code>div</code> عنصر مع الطبقة <code>cyan</code> ينبغي أن يكون <code>background-color</code> من السماوي.
    testString: 'assert($(".cyan").css("background-color") == "rgb(0, 255, 255)", "The <code>div</code> element with class <code>cyan</code> should have a <code>background-color</code> of cyan.");'
  - text: يجب أن يكون لعنصر <code>div</code> مع <code>raspberry</code> <code>background-color</code> للتوت.
    testString: 'assert($(".raspberry").css("background-color") == "rgb(255, 0, 125)", "The <code>div</code> element with class <code>raspberry</code> should have a <code>background-color</code> of raspberry.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  body {
    background-color: #FFFFFF;
  }

  .orange {
    background-color: #000000;
  }

  .cyan {
    background-color: #000000;
  }

  .raspberry {
    background-color: #000000;
  }

  div {
    height: 100px;
    width: 100px;
    margin-bottom: 5px;
  }
</style>

<div class="orange"></div>
<div class="cyan"></div>
<div class="raspberry"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
