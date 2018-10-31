---
id: bad87fed1348bd9aedf08833
title: Delete HTML Elements
challengeType: 0
videoUrl: ''
localeTitle: Удалить элементы HTML
---

## Description
<section id="description"> Наш телефон не имеет большого пространства. Удалим ненужные элементы, чтобы мы могли начать строить CatPhotoApp. </section>

## Instructions
<section id="instructions"> Удалите элемент <code>h1</code> чтобы мы могли упростить наше представление. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Удалите элемент <code>h1</code> .
    testString: 'assert(!code.match(/<h1>/gi) && !code.match(/<\/h1>/gi), "Delete your <code>h1</code> element.");'
  - text: Оставьте свой элемент <code>h2</code> на странице.
    testString: 'assert(code.match(/<h2>[\w\W]*<\/h2>/gi), "Leave your <code>h2</code> element on the page.");'
  - text: Оставьте свой элемент <code>p</code> на странице.
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
