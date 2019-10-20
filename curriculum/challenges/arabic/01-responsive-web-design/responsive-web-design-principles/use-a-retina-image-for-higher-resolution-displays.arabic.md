---
id: 587d78b1367417b2b2512b0a
title: Use a Retina Image for Higher Resolution Displays
challengeType: 0
videoUrl: ''
localeTitle: استخدم صورة شبكية العين لعرض أعلى دقة
---

## Description
<section id="description"> إن أبسط طريقة لجعل صورك تظهر &quot;شبكية العين&quot; (وتحسينها لشاشات عرض الشبكية) هي تحديد قيم <code>width</code> <code>height</code> بها كنصف ما هو الملف الأصلي فقط. في ما يلي مثال على صورة تستخدم فقط نصف الطول والعرض الأصليين: <blockquote style=";text-align:right;direction:rtl"> &lt;نمط&gt; <br> img {height: 250px؛ العرض: 250 بكسل ؛ } <br> &lt;/ النمط&gt; <br> &lt;img src = &quot;coolPic500x500&quot; alt = &quot;صورة ممتازة للغاية&quot;&gt; </blockquote></section>

## Instructions
<section id="instructions"> اضبط <code>width</code> <code>height</code> علامة <code>img</code> على نصف قيمها الأصلية. في هذه الحالة ، <code>height</code> كل من <code>height</code> الأصلي <code>width</code> الأصلي 200 بكسل. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يكون <code>width</code> العلامة <code>img</code> 100 بكسل.
    testString: 'assert($("img").css("width") == "100px", "Your <code>img</code> tag should have a <code>width</code> of 100 pixels.");'
  - text: يجب أن <code>height</code> العلامة <code>img</code> 100 بكسل.
    testString: 'assert($("img").css("height") == "100px", "Your <code>img</code> tag should have a <code>height</code> of 100 pixels.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>

</style>

<img src="https://s3.amazonaws.com/freecodecamp/FCCStickers-CamperBot200x200.jpg" alt="freeCodeCamp sticker that says 'Because CamperBot Cares'">

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
