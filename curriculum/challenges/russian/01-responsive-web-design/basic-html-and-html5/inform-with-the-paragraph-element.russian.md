---
id: bad87fee1348bd9aedf08801
title: Inform with the Paragraph Element
challengeType: 0
videoUrl: https://scrimba.com/p/pVMPUv/ceZ7DtN
forumTopicId: 18202
localeTitle: Передайте информацию с помощью элемента "параграф"
---

## Description
<section id='description'>
Для создания текста параграфа веб-сайта лучше использовать элемент <code>p</code>. <code>p</code> - это сокращение от слова «paragraph» (параграф). Вы можете создать параграф с этим элементом следующим образом: <code>&lt;p&gt;I&#39;m a p tag!&lt;/p&gt;</code>
</section>

## Instructions
<section id='instructions'>
Создайте <code>p</code> элемент под вашим элементом <code>h2</code> с текстом «Hello Paragraph».
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should have a valid <code>p</code> element.
    testString: assert(($("p").length > 0));
  - text: Your <code>p</code> element should have the text "Hello Paragraph".
    testString: assert.isTrue((/hello(\s)+paragraph/gi).test($("p").text()));
  - text: Make sure your <code>p</code> element has a closing tag.
    testString: assert(code.match(/<\/p>/g) && code.match(/<\/p>/g).length === code.match(/<p/g).length);

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

```html
<h1>Hello World</h1>
<h2>CatPhotoApp</h2>
<p>Hello Paragraph</p>
```

</section>
