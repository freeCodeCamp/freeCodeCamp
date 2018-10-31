---
id: bad87fee1348bd9aedf08801
title: Inform with the Paragraph Element
challengeType: 0
videoUrl: ''
localeTitle: ''
---

## Description
<section id="description"> تعد العناصر <code>p</code> العنصر المفضل لنص الفقرة على مواقع الويب. <code>p</code> قصيرة في &quot;الفقرة&quot;. يمكنك إنشاء عنصر فقرة مثل: <code>&lt;p&gt;I&#39;m ap tag!&lt;/p&gt;</code> </section>

## Instructions
<section id="instructions"> قم بإنشاء عنصر <code>p</code> أسفل عنصر <code>h2</code> ، وأعطه النص &quot;Hello Paragraph&quot;. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: قم بإنشاء عنصر <code>p</code> .
    testString: 'assert(($("p").length > 0), "Create a <code>p</code> element.");'
  - text: يجب أن يحتوي عنصر <code>p</code> على النص &quot;Hello Paragraph&quot;.
    testString: 'assert.isTrue((/hello(\s)+paragraph/gi).test($("p").text()), "Your <code>p</code> element should have the text "Hello Paragraph".");'
  - text: تأكد من أن عنصر <code>p</code> لديه علامة إغلاق.
    testString: 'assert(code.match(/<\/p>/g) && code.match(/<\/p>/g).length === code.match(/<p/g).length, "Make sure your <code>p</code> element has a closing tag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h1>Hello World</h1>
<h2>CatPhotoApp</h2>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
