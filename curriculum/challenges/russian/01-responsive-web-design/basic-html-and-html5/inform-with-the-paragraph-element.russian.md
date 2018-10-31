---
id: bad87fee1348bd9aedf08801
title: Inform with the Paragraph Element
challengeType: 0
videoUrl: ''
localeTitle: Информировать элемент абзаца
---

## Description
<section id="description"> <code>p</code> элементов являются предпочтительным элементом текста абзаца на веб-сайтах. <code>p</code> является коротким для «абзаца». Вы можете создать элемент абзаца следующим образом: <code>&lt;p&gt;I&#39;m ap tag!&lt;/p&gt;</code> </section>

## Instructions
<section id="instructions"> Создайте <code>p</code> элемент под вашим элементом <code>h2</code> и дайте ему текст «Hello Paragraph». </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Создайте элемент <code>p</code> .
    testString: 'assert(($("p").length > 0), "Create a <code>p</code> element.");'
  - text: Ваш элемент <code>p</code> должен иметь текст «Hello Paragraph».
    testString: 'assert.isTrue((/hello(\s)+paragraph/gi).test($("p").text()), "Your <code>p</code> element should have the text "Hello Paragraph".");'
  - text: 'Убедитесь, что ваш элемент <code>p</code> имеет закрывающий тег.'
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
