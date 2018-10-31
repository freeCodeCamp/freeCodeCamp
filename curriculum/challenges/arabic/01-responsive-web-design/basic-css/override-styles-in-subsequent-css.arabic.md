---
id: bad87fee1348bd9aedf04756
title: Override Styles in Subsequent CSS
challengeType: 0
videoUrl: ''
localeTitle: ''
---

## Description
undefined

## Instructions
<section id="instructions"> إنشاء فئة CSS إضافية تسمى <code>blue-text</code> يعطي عنصر باللون الأزرق. تأكد من أنه أقل من <code>pink-text</code> الفصل <code>pink-text</code> . قم <code>blue-text</code> فئة <code>blue-text</code> على عنصر <code>h1</code> بالإضافة إلى فصل <code>pink-text</code> ، ودعنا نرى أيهما يفوز. يتم تطبيق سمات فئات متعددة على عنصر HTML بمسافة بينها مثل: <code>class=&quot;class1 class2&quot;</code> ملاحظة: لا يهم أي ترتيب يتم سرد الفئات في عنصر HTML. ومع ذلك ، فإن ترتيب إعلانات <code>class</code> في قسم <code>&lt;style&gt;</code> هو ما هو مهم. سوف يكون للإعلان الثاني الأسبقية على الأول. نظرًا لأنه يتم الإعلان عن <code>.blue-text</code> الثانية ، فإنه يؤدي إلى تجاوز سمات <code>.pink-text</code> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يحتوي عنصر <code>h1</code> <code>pink-text</code> .
    testString: 'assert($("h1").hasClass("pink-text"), "Your <code>h1</code> element should have the class <code>pink-text</code>.");'
  - text: يجب أن يحتوي عنصر <code>h1</code> على الفصل <code>blue-text</code> .
    testString: 'assert($("h1").hasClass("blue-text"), "Your <code>h1</code> element should have the class <code>blue-text</code>.");'
  - text: يجب أن ينتمي <code>blue-text</code> <code>pink-text</code> إلى نفس عنصر <code>h1</code> .
    testString: 'assert($(".pink-text").hasClass("blue-text"), "Both <code>blue-text</code> and <code>pink-text</code> should belong to the same <code>h1</code> element.");'
  - text: ''
    testString: 'assert($("h1").css("color") === "rgb(0, 0, 255)", "Your <code>h1</code> element should be blue.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  .pink-text {
    color: pink;
  }
</style>
<h1 class="pink-text">Hello World!</h1>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
