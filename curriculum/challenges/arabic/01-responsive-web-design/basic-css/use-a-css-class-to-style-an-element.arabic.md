---
id: bad87fee1348bd9aecf08806
title: Use a CSS Class to Style an Element
challengeType: 0
videoUrl: ''
localeTitle: استخدم فئة CSS لتصميم عنصر
---

## Description
<section id="description"> تعد الطبقات أنماطًا قابلة لإعادة الاستخدام يمكن إضافتها إلى عناصر HTML. في ما يلي مثال على تصنيف فئة CSS: <blockquote style=";text-align:right;direction:rtl"> &lt;نمط&gt; <br> .blue-text { <br> اللون الازرق؛ <br> } <br> &lt;/ النمط&gt; </blockquote> يمكنك أن ترى أننا أنشأنا فئة CSS تسمى <code>blue-text</code> داخل علامة <code>&lt;style&gt;</code> . يمكنك تطبيق فئة إلى عنصر HTML مثل هذا: <code>&lt;h2 class=&quot;blue-text&quot;&gt;CatPhotoApp&lt;/h2&gt;</code> لاحظ أنه في الخاص بك CSS <code>style</code> عنصر، أسماء فئة تبدأ بنقطة. في سمة فئة عناصر HTML ، لا يتضمن اسم الفئة الفترة. </section>

## Instructions
<section id="instructions"> داخل عنصر <code>style</code> الخاص بك ، قم بتغيير محدد <code>h2</code> إلى <code>.red-text</code> محدد <code>.red-text</code> بتحديث قيمة <code>blue</code> من <code>blue</code> إلى <code>red</code> . امنح عنصر <code>h2</code> عنصر السمة <code>class</code> بقيمة <code>&#39;red-text&#39;</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يكون عنصر <code>h2</code> باللون الأحمر.
    testString: 'assert($("h2").css("color") === "rgb(255, 0, 0)", "Your <code>h2</code> element should be red.");'
  - text: يجب أن يحتوي عنصر <code>h2</code> <code>red-text</code> للفئة.
    testString: 'assert($("h2").hasClass("red-text"), "Your <code>h2</code> element should have the class <code>red-text</code>.");'
  - text: يجب أن تعلن ورقة الأنماط الخاصة بك عن فئة <code>red-text</code> وأن يكون لونها أحمر.
    testString: 'assert(code.match(/\.red-text\s*\{\s*color\s*:\s*red;\s*\}/g), "Your stylesheet should declare a <code>red-text</code> class and have its color set to red.");'
  - text: 'لا تستخدم إعلانات نمط مضمن مثل <code>style=&quot;color: red&quot;</code> في عنصر <code>h2</code> .'
    testString: 'assert($("h2").attr("style") === undefined, "Do not use inline style declarations like <code>style="color&#58; red"</code> in your <code>h2</code> element.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  h2 {
    color: blue;
  }
</style>

<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <div>
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
