---
id: bad87fed1348bd9aedf08833
title: Delete HTML Elements
challengeType: 0
videoUrl: ''
localeTitle: احذف عناصر HTML
---

## الوصف
<section id="description"> لا يمتلك هاتفنا مساحة عمودية كبيرة. دعونا نزيل العناصر غير الضرورية حتى نتمكن من البدء في بناء CatPhotoApp. </section>

## الخطوات
<section id="instructions"> احذف العنصر <code>h1</code> حتى نتمكن من تبسيط طريقة العرض. </section>

## الاختبارات
<section id='tests'>

```yml
tests:
  - text: احذف العنصر <code>h1</code> .
    testString: 'assert(!code.match(/<h1>/gi) && !code.match(/<\/h1>/gi), "Delete your <code>h1</code> element.");'
  - text: اترك العنصر <code>h2</code> على الصفحة.
    testString: 'assert(code.match(/<h2>[\w\W]*<\/h2>/gi), "Leave your <code>h2</code> element on the page.");'
  - text: اترك العنصر <code>p</code> على الصفحة.
    testString: 'assert(code.match(/<p>[\w\W]*<\/p>/gi), "Leave your <code>p</code> element on the page.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
