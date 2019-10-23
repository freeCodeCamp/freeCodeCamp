---
id: bad87fee1348bd9aedf08726
title: Use Hex Code for Specific Colors
challengeType: 0
videoUrl: ''
localeTitle: ''
---

## Description
<section id="description"> هل تعلم أن هناك طرقًا أخرى لتمثيل الألوان في CSS؟ يُطلق على أحد هذه الطرق الرمز السداسي العشري ، أو الشفرة السداسية <code>hex code</code> . عادة ما نستخدم <code>decimals</code> ، أو الأرقام الأساسية 10 ، والتي تستخدم الرموز من 0 إلى 9 لكل رقم. <code>Hexadecimals</code> (أو <code>hex</code> ) هي قاعدة أرقام 16. هذا يعني أنه يستخدم ستة عشر رموز متميزة. مثل الكسور العشرية ، تمثل الرموز من 0 إلى 9 القيم من صفر إلى تسعة. ثم تمثل A ، B ، C ، D ، E ، F القيم من عشرة إلى خمسة عشر. بالإجمال ، يمكن أن يمثل 0 إلى F رقماً <code>hexadecimal</code> ، مما يمنحنا إجمالي 16 قيمة ممكنة. يمكنك العثور على مزيد من المعلومات حول <a target="_blank" href="https://en.wikipedia.org/wiki/Hexadecimal">الأرقام السداسية العشرية هنا</a> . في CSS ، يمكننا استخدام 6 أرقام سداسية عشرية لتمثيل الألوان ، اثنان لكل منهما للمكونات الحمراء (R) ، والأخضر (G) ، والأزرق (B). على سبيل المثال ، يكون الرقم <code>#000000</code> باللون الأسود ويعد أيضًا أقل قيمة ممكنة. يمكنك العثور على مزيد من المعلومات حول <a target="_blank" href="https://en.wikipedia.org/wiki/RGB_color_model">نظام ألوان RGB هنا</a> . <blockquote style=";text-align:right;direction:rtl"> الجسم { <br> اللون: # 000000؛ <br> } </blockquote></section>

## Instructions
<section id="instructions"> استبدل الكلمة <code>black</code> في لون خلفية عنصر <code>body</code> مع تمثيل <code>hex code</code> ، <code>#000000</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: أعط عنصر <code>body</code> لون خلفية اللون الأسود.
    testString: 'assert($("body").css("background-color") === "rgb(0, 0, 0)", "Give your <code>body</code> element the background-color of black.");'
  - text: استخدم <code>hex code</code> للون الأسود بدلاً من الكلمة <code>black</code> .
    testString: 'assert(code.match(/body\s*{(([\s\S]*;\s*?)|\s*?)background.*\s*:\s*?#000(000)?((\s*})|(;[\s\S]*?}))/gi), "Use the <code>hex code</code> for the color black instead of the word <code>black</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  body {
    background-color: black;
  }
</style>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
