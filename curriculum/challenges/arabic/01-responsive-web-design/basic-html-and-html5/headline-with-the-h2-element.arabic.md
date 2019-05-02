---
id: bad87fee1348bd9aedf0887a
title: Headline with the h2 Element
challengeType: 0
videoUrl: ''
localeTitle: العنوان مع العنصر h2
---

## Description
undefined

## Instructions
<section id="instructions"> إضافة علامة <code>h2</code> تقول &quot;CatPhotoApp&quot; لإنشاء <code>element</code> HTML ثاني أسفل العنصر <code>h1</code> &quot;Hello World&quot;. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: قم بإنشاء عنصر <code>h2</code> .
    testString: 'assert(($("h2").length > 0), "Create an <code>h2</code> element.");'
  - text: ''
    testString: 'assert(code.match(/<\/h2>/g) && code.match(/<\/h2>/g).length === code.match(/<h2>/g).length, "Make sure your <code>h2</code> element has a closing tag.");'
  - text: ''
    testString: 'assert.isTrue((/cat(\s)?photo(\s)?app/gi).test($("h2").text()), "Your <code>h2</code> element should have the text "CatPhotoApp".");'
  - text: يجب أن يحتوي العنصر <code>h1</code> على النص &quot;Hello World&quot;.
    testString: 'assert.isTrue((/hello(\s)+world/gi).test($("h1").text()), "Your <code>h1</code> element should have the text "Hello World".");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h1>Hello World</h1>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
