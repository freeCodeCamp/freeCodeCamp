---
id: bad87fee1348bd9aedf08816
title: Link to External Pages with Anchor Elements
challengeType: 0
videoUrl: ''
localeTitle: ربط الصفحات الخارجية بستخدام عناصر المرساة Anchor

---

## Description
<section id="description"> 
يمكنك استخدام العنصر <code>anchor</code> للربط بمحتوى خارج صفحة الويب الخاصة بك.
يحتاج العنصر <code>anchor</code> إلى عنوان ويب يسمى بالسمة <code>href</code>. هذه السمة تحتاج نص للرابط.
في ما يلي مثال: 
<code>&lt;a href=&quot;https://freecodecamp.org&quot;&gt;روابط إلى freecodecamp.org&lt;/a&gt;</code> ثم يعرض المتصفح النص <strong>&quot;روابط إلى freecodecamp.org&quot;</strong> كرابط يمكنك النقر عليها.
وسيأخذك هذا الرابط إلى عنوان الويب <strong>https://www.freecodecamp.org</strong>.
</section>

## Instructions
<section id="instructions"> إنشاء العنصر <code>a</code> الذي يربط <code>https://freecatphotoapp.com</code> له النص &quot;cat photos&quot;، في <code> نص الرابط</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يحتوي العنصر <code>a</code> الخاص بك على &quot;cat photos&quot; كنص للرابط <code>anchor text </code>.  
    testString: 'assert((/cat photos/gi).test($("a").text()), "Your <code>a</code> element should have the <code>anchor text</code> of "cat photos".");'
  - text: 'تحتاج إلى عنصر <code>a</code> يربط بالعنوان <code>https://freecatphotoapp.com</code>'
    testString: 'assert(/http:\/\/(www\.)?freecatphotoapp\.com/gi.test($("a").attr("href")), "You need an <code>a</code> element that links to <code>http&#58;//freecatphotoapp<wbr>.com</code>");'
  - text: تأكد من ان العنصر <code>a</code> يحتوي على وسم إغلاق.
    testString: 'assert(code.match(/<\/a>/g) && code.match(/<\/a>/g).length === code.match(/<a/g).length, "Make sure your <code>a</code> element has a closing tag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>
<main>



  <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
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
