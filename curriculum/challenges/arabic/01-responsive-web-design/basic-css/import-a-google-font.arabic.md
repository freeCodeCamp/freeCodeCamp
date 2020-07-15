---
id: bad87fee1348bd9aedf08807
title: Import a Google Font
challengeType: 0
videoUrl: ''
localeTitle: ''
---

## Description
<section id="description"> بالإضافة إلى تحديد الخطوط العامة الموجودة في معظم أنظمة التشغيل ، يمكننا أيضًا تحديد خطوط ويب مخصصة غير قياسية للاستخدام على موقعنا على الويب. هناك مصادر متنوعة لخطوط الويب على الإنترنت ، ولكن في هذا المثال سنركز على مكتبة Google Fonts. <a href="https://fonts.google.com/" target="_blank">Google Fonts</a> هي مكتبة مجانية لخطوط الويب يمكنك استخدامها في CSS بالرجوع إلى عنوان URL الخاص بالخط. لذلك ، دعنا نمضي قدمًا ونستورد ونطبق خط Google (لاحظ أنه إذا تم حظر Google في بلدك ، فستحتاج إلى تخطي هذا التحدي). لاستيراد أحد خطوط Google ، يمكنك نسخ عنوان URL (الخطوط) من مكتبة Google Fonts ، ثم لصقه في HTML. لهذا التحدي ، سنقوم باستيراد خط <code>Lobster</code> . لإجراء ذلك ، انسخ مقتطف الشفرة التالي وألصقه في الجزء العلوي من محرر الشفرة (قبل عنصر <code>style</code> الافتتاحي): <code>&lt;link href=&quot;https://fonts.googleapis.com/css?family=Lobster&quot; rel=&quot;stylesheet&quot; type=&quot;text/css&quot;&gt;</code> يمكنك الآن استخدام خط <code>Lobster</code> في CSS باستخدام <code>Lobster</code> باعتباره FAMILY_NAME كما في المثال التالي: <br> <code>font-family: FAMILY_NAME, GENERIC_NAME;</code> . GENERIC_NAME اختياري ، وهو خط احتياطي في حالة عدم توفر الخط المحدد الآخر. يتم تغطيتها في التحدي التالي. أسماء العائلة حساسة لحالة الأحرف وتحتاج إلى لفها بين علامتي تنصيص إذا كان هناك فراغ في الاسم. على سبيل المثال ، تحتاج إلى علامات اقتباس لاستخدام الخط <code>&quot;Open Sans&quot;</code> ، ولكن لا تستخدم خط <code>Lobster</code> . </section>

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert(new RegExp("googleapis", "gi").test(code), "Import the <code>Lobster</code> font.");'
  - text: ''
    testString: 'assert($("h2").css("font-family").match(/lobster/i), "Your <code>h2</code> element should use the font <code>Lobster</code>.");'
  - text: استخدم محدد CSS <code>h2</code> لتغيير الخط.
    testString: 'assert(/\s*h2\s*\{\s*font-family\:\s*(\"|")?Lobster(\"|")?\s*;\s*\}/gi.test(code), "Use an <code>h2</code> CSS selector to change the font.");'
  - text: يجب أن يستمر عنصر <code>p</code> استخدام <code>monospace</code> للخط.
    testString: 'assert($("p").css("font-family").match(/monospace/i), "Your <code>p</code> element should still use the font <code>monospace</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .red-text {
    color: red;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

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
