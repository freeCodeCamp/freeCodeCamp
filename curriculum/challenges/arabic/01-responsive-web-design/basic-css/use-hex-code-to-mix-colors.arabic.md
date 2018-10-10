---
id: bad87fee1348bd9aedf08721
title: Use Hex Code to Mix Colors
challengeType: 0
videoUrl: ''
localeTitle: استخدم Hex Code لخلط الألوان
---

## Description
<section id="description"> للمراجعة ، تستخدم الرموز السداسية ستة أرقام سداسية عشرية لتمثيل الألوان ، كل منها رقمان لكل من المكونات الحمراء (R) ، والأخضر (G) ، والأزرق (B). من هذه الألوان الثلاثة النقية (الأحمر والأخضر والأزرق) ، يمكننا تغيير مقادير كل منها لإنشاء أكثر من 16 مليون لون آخر! على سبيل المثال ، البرتقالي هو أحمر خالص ، ويخلط مع بعض اللون الأخضر ، ولا أزرق. في الشفرة <code>#FFA500</code> ، يُترجم هذا إلى <code>#FFA500</code> . الرقم <code>0</code> هو أقل رقم في الشفرة السداسية ، ويمثل غيابًا تامًا للون. الرقم <code>F</code> هو أعلى رقم في الشفرة السداسية ، ويمثل أقصى سطوع ممكن. </section>

## Instructions
<section id="instructions"> استبدل الكلمات اللونية في عنصر <code>style</code> بنا برموز عرافة صحيحة. <table class="table table-striped" style=";text-align:right;direction:rtl"><tbody><tr><th> اللون </th><th> رمز عشري </th></tr><tr><td> المراوغ الأزرق </td><td> <code>#1E90FF</code> </td> </tr><tr><td> أخضر </td><td> <code>#00FF00</code> </td> </tr><tr><td> البرتقالي </td><td> <code>#FFA500</code> </td> </tr><tr><td> أحمر </td><td> <code>#FF0000</code> </td> </tr></tbody></table></section>

## Tests
<section id='tests'>

```yml
tests:
  - text: امنح عنصر <code>h1</code> بنص <code>I am red!</code> <code>color</code> احمر.
    testString: 'assert($(".red-text").css("color") === "rgb(255, 0, 0)", "Give your <code>h1</code> element with the text <code>I am red!</code> the <code>color</code> red.");'
  - text: استخدم <code>hex code</code> للون الأحمر بدلاً من الكلمة <code>red</code> .
    testString: 'assert(code.match(/\.red-text\s*?{\s*?color:\s*?#FF0000\s*?;\s*?}/gi), "Use the <code>hex code</code> for the color red instead of the word <code>red</code>.");'
  - text: امنح عنصر <code>h1</code> بنص <code>I am green!</code> <code>color</code> الأخضر.
    testString: 'assert($(".green-text").css("color") === "rgb(0, 255, 0)", "Give your <code>h1</code> element with the text <code>I am green!</code> the <code>color</code> green.");'
  - text: استخدم <code>hex code</code> للون الأخضر بدلاً من الكلمة <code>green</code> .
    testString: 'assert(code.match(/\.green-text\s*?{\s*?color:\s*?#00FF00\s*?;\s*?}/gi), "Use the <code>hex code</code> for the color green instead of the word <code>green</code>.");'
  - text: امنح عنصر <code>h1</code> بالنص <code>I am dodger blue!</code> <code>color</code> الأزرق المراوغ.
    testString: 'assert($(".dodger-blue-text").css("color") === "rgb(30, 144, 255)", "Give your <code>h1</code> element with the text <code>I am dodger blue!</code> the <code>color</code> dodger blue.");'
  - text: استخدم <code>hex code</code> <code>dodgerblue</code> بدلًا من الكلمة <code>dodgerblue</code> .
    testString: 'assert(code.match(/\.dodger-blue-text\s*?{\s*?color:\s*?#1E90FF\s*?;\s*?}/gi), "Use the <code>hex code</code> for the color dodger blue instead of the word <code>dodgerblue</code>.");'
  - text: ''
    testString: 'assert($(".orange-text").css("color") === "rgb(255, 165, 0)", "Give your <code>h1</code> element with the text <code>I am orange!</code> the <code>color</code> orange.");'
  - text: استخدم <code>hex code</code> للون البرتقالي بدلاً من الكلمة <code>orange</code> .
    testString: 'assert(code.match(/\.orange-text\s*?{\s*?color:\s*?#FFA500\s*?;\s*?}/gi), "Use the <code>hex code</code> for the color orange instead of the word <code>orange</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .red-text {
    color: black;
  }
  .green-text {
    color: black;
  }
  .dodger-blue-text {
    color: black;
  }
  .orange-text {
    color: black;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="green-text">I am green!</h1>

<h1 class="dodger-blue-text">I am dodger blue!</h1>

<h1 class="orange-text">I am orange!</h1>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
