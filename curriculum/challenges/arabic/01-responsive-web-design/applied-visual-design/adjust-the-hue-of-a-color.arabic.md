---
id: 587d78a4367417b2b2512ad4
title: Adjust the Hue of a Color
challengeType: 0
videoUrl: ''
localeTitle: اضبط درجةاللون
---

## Description
<section id="description"> تتميز الألوان بالعديد من الخصائص بما في ذلك الصبغة والتشبع والخفة. قدم CSS3 الخاصية <code>hsl()</code> كطريقة بديلة لاختيار لون عن طريق تحديد هذه الخصائص بشكل مباشر. <b>هوى</b> هو ما يعتقده الناس بشكل عام بـ &quot;اللون&quot;. إذا قمت بتصوير مجموعة متنوعة من الألوان تبدأ باللون الأحمر على اليسار ، تتحرك من خلال اللون الأخضر في الوسط ، والأزرق على اليمين ، حيث أن اللون يتناسب مع لون هذا الخط. في <code>hsl()</code> ، يستخدم hue مفهوم عجلة الألوان بدلاً من الطيف ، حيث يتم إعطاء زاوية اللون على الدائرة كقيمة بين 0 و 360. <b>التشبع</b> هو مقدار اللون الرمادي في اللون. لا يوجد لون رمادي كامل في أي لون مشبع ، ويكون اللون المشبع إلى حد ما رماديًا تقريبًا. يتم إعطاؤه كنسبة مئوية مع 100 ٪ مشبعة بالكامل. <b>الخفة</b> هي كمية اللون الأبيض أو الأسود في اللون. يتم إعطاء نسبة تتراوح من 0٪ (أسود) إلى 100٪ (أبيض) ، حيث 50٪ هو اللون الطبيعي. في ما يلي بعض الأمثلة على استخدام <code>hsl()</code> مع ألوان إضاءة مشبعة تمامًا ومشبعة تمامًا: <table class="table table-striped" style=";text-align:right;direction:rtl"><thead><tr><th> اللون </th><th> HSL </th></tr></thead><tbody><tr><td> أحمر </td><td> hsl (0 ، 100٪ ، 50٪) </td></tr><tr><td> الأصفر </td><td> hsl (60 ، 100٪ ، 50٪) </td></tr><tr><td> أخضر </td><td> hsl (120 ، 100٪ ، 50٪) </td></tr><tr><td> ازرق سماوي </td><td> hsl (180 ، 100٪ ، 50٪) </td></tr><tr><td> أزرق </td><td> hsl (240 ، 100٪ ، 50٪) </td></tr><tr><td> أرجواني </td><td> hsl (300 ، 100٪ ، 50٪) </td></tr></tbody></table></section>

## Instructions
<section id="instructions"> قم بتغيير <code>background-color</code> كل عنصر <code>div</code> استنادًا إلى أسماء <code>cyan</code> ( <code>green</code> أو <code>cyan</code> أو <code>blue</code> ) باستخدام <code>hsl()</code> . كل ثلاثة يجب أن يكون التشبع الكامل والخفة العادية. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تستخدم التعليمات البرمجية الخاصة بك الخاصية <code>hsl()</code> اللون الأخضر.
    testString: 'assert(code.match(/\.green\s*?{\s*?background-color:\s*?hsl/gi), "Your code should use the <code>hsl()</code> property to declare the color green.");'
  - text: يجب أن تستخدم التعليمات البرمجية الخاصة بك الخاصية <code>hsl()</code> لون السماوي.
    testString: 'assert(code.match(/\.cyan\s*?{\s*?background-color:\s*?hsl/gi), "Your code should use the <code>hsl()</code> property to declare the color cyan.");'
  - text: يجب أن تستخدم التعليمات البرمجية الخاصة بك الخاصية <code>hsl()</code> اللون الأزرق.
    testString: 'assert(code.match(/\.blue\s*?{\s*?background-color:\s*?hsl/gi), "Your code should use the <code>hsl()</code> property to declare the color blue.");'
  - text: يجب أن يكون عنصر <code>div</code> <code>green</code> <code>background-color</code> خضراء.
    testString: 'assert($(".green").css("background-color") == "rgb(0, 255, 0)", "The <code>div</code> element with class <code>green</code> should have a <code>background-color</code> of green.");'
  - text: و <code>div</code> عنصر مع الطبقة <code>cyan</code> ينبغي أن يكون <code>background-color</code> من السماوي.
    testString: 'assert($(".cyan").css("background-color") == "rgb(0, 255, 255)", "The <code>div</code> element with class <code>cyan</code> should have a <code>background-color</code> of cyan.");'
  - text: و <code>div</code> عنصر مع الطبقة <code>blue</code> يجب أن يكون <code>background-color</code> من اللون الأزرق.
    testString: 'assert($(".blue").css("background-color") == "rgb(0, 0, 255)", "The <code>div</code> element with class <code>blue</code> should have a <code>background-color</code> of blue.");'

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

  .green {
    background-color: #000000;
  }

  .cyan {
    background-color: #000000;
  }

  .blue {
    background-color: #000000;
  }

  div {
    display: inline-block;
    height: 100px;
    width: 100px;
  }
</style>

<div class="green"></div>
<div class="cyan"></div>
<div class="blue"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
