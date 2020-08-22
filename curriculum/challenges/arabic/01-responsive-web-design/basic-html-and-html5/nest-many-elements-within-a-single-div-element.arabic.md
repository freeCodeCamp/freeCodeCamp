---
id: bad87fee1348bd9aede08835
title: Nest Many Elements within a Single div Element
challengeType: 0
videoUrl: ''
localeTitle: Nest العديد من العناصر داخل عنصر div مفرد
---

## Description
<section id="description"> عنصر <code>div</code> ، المعروف أيضًا باسم عنصر القسمة ، هو حاوية للأغراض العامة للعناصر الأخرى. ربما يكون عنصر <code>div</code> هو أكثر عناصر HTML شيوعًا على الإطلاق. تمامًا مثل أي عنصر آخر غير الإغلاق الذاتي ، يمكنك فتح عنصر <code>div</code> باستخدام <code>&lt;div&gt;</code> وإغلاقه في سطر آخر باستخدام <code>&lt;/div&gt;</code> . </section>

## Instructions
<section id="instructions"> اجعل &quot;تحب قطط الأشياء&quot; و &quot;أشياء تكره القطط&quot; تسرد كل عنصر <code>div</code> واحد. تلميح: حاول وضع الخاص بك افتتاح <code>div</code> العلامة فوق بك &quot;القطط الأمور الحب&quot; <code>p</code> العنصر الخاص بك وإغلاق <code>div</code> الوسم الخاص بك بعد إغلاق <code>ol</code> العلامة بحيث أن كلا من القوائم الخاصة بك هي واحدة ضمن <code>div</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: ضع عناصر <code>p</code> داخل عنصر <code>div</code> الخاص بك.
    testString: 'assert($("div").children("p").length > 1, "Nest your <code>p</code> elements inside your <code>div</code> element.");'
  - text: عش <code>ul</code> داخل عنصر <code>div</code> الخاص بك.
    testString: 'assert($("div").children("ul").length > 0, "Nest your <code>ul</code> element inside your <code>div</code> element.");'
  - text: قم <code>ol</code> عنصر <code>ol</code> الخاص بك داخل عنصر <code>div</code> الخاص بك.
    testString: 'assert($("div").children("ol").length > 0, "Nest your <code>ol</code> element inside your <code>div</code> element.");'
  - text: تأكد من أن عنصر <code>div</code> يحتوي على علامة إغلاق.
    testString: 'assert(code.match(/<\/div>/g) && code.match(/<\/div>/g).length === code.match(/<div>/g).length, "Make sure your <code>div</code> element has a closing tag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

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
