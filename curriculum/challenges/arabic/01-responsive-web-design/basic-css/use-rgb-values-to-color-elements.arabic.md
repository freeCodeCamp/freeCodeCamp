---
id: bad87fee1348bd9aede08718
title: Use RGB values to Color Elements
challengeType: 0
videoUrl: ''
localeTitle: ''
---

## Description
<section id="description"> هناك طريقة أخرى لتمثيل الألوان في CSS باستخدام قيم <code>RGB</code> . تبدو قيمة RGB للون الأسود كالتالي: <code>rgb(0, 0, 0)</code> تبدو قيمة RGB للأبيض كما يلي: <code>rgb(255, 255, 255)</code> بدلاً من استخدام ستة أرقام ست عشرية كما تفعل مع الشفرة السداسية ، مع <code>RGB</code> لك حدد سطوع كل لون برقم بين 0 و 255. إذا قمت بإجراء الحساب ، فإن الرقمين لواحد لون يساوي 16 مرة 16 ، مما يعطينا 256 قيمة إجمالية. لذا فإن <code>RGB</code> ، التي تبدأ العد من الصفر ، تحتوي على نفس العدد بالضبط من القيم المحتملة مثل الرمز السداسي. إليك مثال على كيفية تغيير خلفية الجسم إلى اللون البرتقالي باستخدام رمز RGB الخاص به. <blockquote style=";text-align:right;direction:rtl"> الجسم { <br> background-color: rgb (255، 165، 0)؛ <br> } </blockquote></section>

## Instructions
<section id="instructions"> دعنا نستبدل الشفرة السداسية في لون خلفية عنصر <code>body</code> مع قيمة RGB للون الأسود: <code>rgb(0, 0, 0)</code> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يكون لعنصر <code>body</code> الخاص بك خلفية سوداء.
    testString: 'assert($("body").css("background-color") === "rgb(0, 0, 0)", "Your <code>body</code> element should have a black background.");'
  - text: استخدم <code>rgb</code> لإعطاء عنصر <code>body</code> لونًا أسود.
    testString: 'assert(code.match(/rgb\s*\(\s*0\s*,\s*0\s*,\s*0\s*\)/ig), "Use <code>rgb</code> to give your <code>body</code> element a color of black.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  body {
    background-color: #F00;
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
