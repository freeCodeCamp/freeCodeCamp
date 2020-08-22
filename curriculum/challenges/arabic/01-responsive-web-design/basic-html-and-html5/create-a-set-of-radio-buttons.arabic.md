---
id: bad87fee1348bd9aedf08834
title: Create a Set of Radio Buttons
challengeType: 0
videoUrl: ''
localeTitle: قم بإنشاء مجموعة من أزرار الراديو
---

## Description
<section id="description"> يمكنك استخدام <code>radio buttons</code> للإجابة على الأسئلة حيث تريد أن يمنحك المستخدم إجابة واحدة فقط من الخيارات المتعددة. أزرار الراديو هي نوع من <code>input</code> . يمكن تداخل كل زر من أزرار الراديو داخل عنصر <code>label</code> الخاص به. من خلال لف عنصر <code>input</code> داخل عنصر <code>label</code> ، سيقوم تلقائيًا بربط إدخال زر الراديو مع عنصر التسمية المحيط به. يجب أن يكون لكل أزرار الراديو ذات الصلة سمة <code>name</code> نفسه لإنشاء مجموعة أزرار الراديو. من خلال إنشاء مجموعة راديو ، سيؤدي تحديد أي زر راديو فردي إلى إلغاء تحديد الأزرار الأخرى في نفس المجموعة تلقائيًا ، مما يضمن إجابة واحدة فقط من قبل المستخدم. في ما يلي مثال على زر الاختيار: <blockquote style=";text-align:right;direction:rtl"> &lt;التسمية&gt; <br> &lt;input type = &quot;radio&quot; name = &quot;indoor-outdoor&quot;&gt; داخلي <br> &lt;/ التسمية&gt; </blockquote> فهو يعتبر أفضل الممارسات لوضع <code>for</code> السمة على <code>label</code> عنصر، مع قيمة يطابق قيمة <code>id</code> السمة ل <code>input</code> عنصر. يسمح ذلك للتقنيات المساعدة لإنشاء علاقة مرتبطة بين الملصق وعنصر <code>input</code> الطفل. فمثلا: <blockquote style=";text-align:right;direction:rtl"> &lt;label for = &quot;indoor&quot;&gt; <br> &lt;input id = &quot;indoor&quot; type = &quot;radio&quot; name = &quot;indoor-outdoor&quot;&gt; داخلي <br> &lt;/ التسمية&gt; </blockquote></section>

## Instructions
<section id="instructions"> أضف زوجًا من أزرار التحديد إلى النموذج ، كل منها متداخل في عنصر التسمية الخاص به. ينبغي للمرء أن يكون خيار <code>indoor</code> والآخر ينبغي أن يكون خيار في <code>outdoor</code> . يجب أن يشترك كلاهما في خاصية <code>name</code> of <code>indoor-outdoor</code> لإنشاء مجموعة راديو. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تحتوي صفحتك على عنصري زر راديو.
    testString: 'assert($("input[type="radio"]").length > 1, "Your page should have two radio button elements.");'
  - text: امنح أزرار الاختيار الخاصة بك السمة <code>name</code> <code>indoor-outdoor</code> .
    testString: 'assert($("label > input[type="radio"]").filter("[name="indoor-outdoor"]").length > 1, "Give your radio buttons the <code>name</code> attribute of <code>indoor-outdoor</code>.");'
  - text: يجب أن يتداخل كل عنصر من عناصر زر الراديو في عنصر <code>label</code> الخاص به.
    testString: 'assert($("label > input[type="radio"]:only-child").length > 1, "Each of your two radio button elements should be nested in its own <code>label</code> element.");'
  - text: تأكد من أن كل عنصر من عناصر <code>label</code> لديه علامة إغلاق.
    testString: 'assert((code.match(/<\/label>/g) && code.match(/<label/g) && code.match(/<\/label>/g).length === code.match(/<label/g).length), "Make sure each of your <code>label</code> elements has a closing tag.");'
  - text: يجب أن يكون أحد أزرار الراديو لديك <code>indoor</code> .
    testString: 'assert($("label").text().match(/indoor/gi), "One of your radio buttons should have the label <code>indoor</code>.");'
  - text: يجب أن يحتوي أحد أزرار الراديو على الملصق <code>outdoor</code> .
    testString: 'assert($("label").text().match(/outdoor/gi), "One of your radio buttons should have the label <code>outdoor</code>.");'
  - text: يجب إضافة كل عنصر من عناصر زر الراديو داخل علامة <code>form</code> .
    testString: 'assert($("label").parent().get(0).tagName.match("FORM"), "Each of your radio button elements should be added within the <code>form</code> tag.");'

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
