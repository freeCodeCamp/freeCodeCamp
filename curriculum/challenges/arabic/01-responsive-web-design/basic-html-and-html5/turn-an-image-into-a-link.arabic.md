---
id: bad87fee1348bd9aedf08820
title: Turn an Image into a Link
challengeType: 0
videoUrl: ''
localeTitle: تحويل صورة إلى رابط
---

## Description
<section id="description"> يمكنك جعل العناصر إلى روابط التي تعشش لهم داخل <code>a</code> عنصر. عش صورتك داخل <code>a</code> عنصر. في ما يلي مثال: <code>&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;https://bit.ly/fcc-running-cats&quot; alt=&quot;Three kittens running towards the camera.&quot;&gt;&lt;/a&gt;</code> تذكر أن تستخدم <code>#</code> ك <code>a</code> العنصر <code>href</code> الملكية من أجل تحويله إلى رابط معطل. </section>

## Instructions
<section id="instructions"> ضع عنصر الصورة الموجود داخل عنصر الارتساء. بعد الانتهاء من ذلك ، مرّر مؤشر الماوس فوق صورتك باستخدام المؤشر. يجب أن يصبح المؤشر الطبيعي لمؤشر المؤشر مؤشر النقر على الرابط. الصورة الآن رابط. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert($("a").children("img").length > 0, "Nest the existing <code>img</code> element within an <code>a</code> element.");'
  - text: ''
    testString: 'assert(new RegExp("#").test($("a").children("img").parent().attr("href")), "Your <code>a</code> element should be a dead link with a <code>href</code> attribute set to <code>#</code>.");'
  - text: ''
    testString: 'assert(code.match(/<\/a>/g) && code.match(/<a/g) && code.match(/<\/a>/g).length === code.match(/<a/g).length, "Make sure each of your <code>a</code> elements has a closing tag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

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
