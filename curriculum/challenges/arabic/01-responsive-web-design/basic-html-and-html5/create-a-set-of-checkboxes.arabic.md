---
id: bad87fee1348bd9aedf08835
title: Create a Set of Checkboxes
challengeType: 0
videoUrl: ''
localeTitle: قم بإنشاء مجموعة من مربعات الاختيار
---

## Description
<section id="description"> تستخدم النماذج عادة <code>checkboxes</code> للأسئلة التي قد تحتوي على أكثر من إجابة واحدة. مربعات الاختيار هي نوع من <code>input</code> يمكن دمج كل مربعات الاختيار داخل عنصر <code>label</code> الخاص بها. من خلال لف عنصر <code>input</code> داخل عنصر <code>label</code> ، سيقوم تلقائيًا بربط إدخال مربع الاختيار مع عنصر التسمية المحيط به. يجب أن تحتوي جميع مدخلات خانة الاختيار ذات الصلة على سمة <code>name</code> نفسه. فهو يعتبر أفضل الممارسات لتحديد بشكل واضح على العلاقة بين مربع <code>input</code> والمناظرة <code>label</code> عن طريق تعيين <code>for</code> سمة على <code>label</code> عنصر لتتناسب مع <code>id</code> سمة من يرتبط <code>input</code> عنصر. في ما يلي مثال على مربع اختيار: <code>&lt;label for=&quot;loving&quot;&gt;&lt;input id=&quot;loving&quot; type=&quot;checkbox&quot; name=&quot;personality&quot;&gt; Loving&lt;/label&gt;</code> </section>

## Instructions
<section id="instructions"> أضف إلى مجموعتك مجموعة من ثلاثة مربعات اختيار. يجب أن يكون كل مربع متداخل داخل عنصر <code>label</code> الخاص به. يجب على جميع الثلاثة تقاسم سمة <code>name</code> <code>personality</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تحتوي صفحتك على ثلاثة عناصر من خانة الاختيار.
    testString: 'assert($("input[type="checkbox"]").length > 2, "Your page should have three checkbox elements.");'
  - text: يجب أن يكون كل عنصر من عناصر خانة الاختيار الثلاثة متداخلاً في عنصر <code>label</code> الخاص به.
    testString: 'assert($("label > input[type="checkbox"]:only-child").length > 2, "Each of your three checkbox elements should be nested in its own <code>label</code> element.");'
  - text: تأكد من أن كل عنصر من عناصر <code>label</code> لديه علامة إغلاق.
    testString: 'assert(code.match(/<\/label>/g) && code.match(/<label/g) && code.match(/<\/label>/g).length === code.match(/<label/g).length, "Make sure each of your <code>label</code> elements has a closing tag.");'
  - text: إعطاء مربعات الاختيار الخاصة بك سمة <code>name</code> <code>personality</code> .
    testString: 'assert($("label > input[type="checkbox"]").filter("[name="personality"]").length > 2, "Give your checkboxes the <code>name</code> attribute of <code>personality</code>.");'

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
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor"> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor"> Outdoor</label><br>
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
