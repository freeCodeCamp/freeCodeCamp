---
id: 587d778f367417b2b2512aae
title: Give Links Meaning by Using Descriptive Link Text
challengeType: 0
videoUrl: ''
localeTitle: إعطاء الارتباطات المعنوية باستخدام نص الوصلة الوصفية
---

## Description
<section id="description"> يتوفر لدى مستخدمي قارئ الشاشة خيارات مختلفة لنوع المحتوى الذي يقرأه جهازهم. ويشمل ذلك تخطي (أو) عناصر المعالم ، أو القفز إلى المحتوى الرئيسي ، أو الحصول على ملخص للصفحة من العناوين. خيار آخر هو فقط سماع الروابط المتاحة على الصفحة. تقوم قارئات الشاشة بذلك عن طريق قراءة نص الرابط ، أو ما بين علامات الربط ( <code>a</code> ). إن وجود قائمة من الروابط &quot;انقر هنا&quot; أو &quot;اقرأ المزيد&quot; ليس مفيدًا. بدلا من ذلك، يجب عليك استخدام النص وجيزة ولكن وصفي داخل <code>a</code> العلامات إلى توفير المزيد من معنى لهؤلاء المستخدمين. </section>

## Instructions
<section id="instructions"> نص الارتباط الذي يستخدمه Camper Cat ليس وصفيًا للغاية بدون السياق المحيط. قم بتحريك علامة الربط ( <code>a</code> ) بحيث يتم التفاف حول النص &quot;معلومات حول البطاريات&quot; بدلاً من &quot;انقر هنا&quot;. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تتحرك الشفرة مرساة <code>a</code> العلامات من حول عبارة &quot;اضغط هنا&quot; للالتفاف حول عبارة &quot;معلومات حول بطاريات&quot;.
    testString: 'assert($("a").text().match(/^(information about batteries)$/g), "Your code should move the anchor <code>a</code> tags from around the words "Click here" to wrap around the words "information about batteries".");'
  - text: تأكد من <code>a</code> عنصر يحتوي على علامة إغلاق.
    testString: 'assert(code.match(/<\/a>/g) && code.match(/<\/a>/g).length === code.match(/<a href=(""|"")>/g).length, "Make sure your <code>a</code> element has a closing tag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near. <a href="">Click here</a> for information about batteries</p>
  </article>
</body>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
