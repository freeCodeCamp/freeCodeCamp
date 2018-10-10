---
id: bad87fed1348bd9aedf08833
title: Delete HTML Elements
challengeType: 0
videoUrl: ''
localeTitle: Excluir elementos HTML
---

## Description
<section id="description"> Nosso telefone não tem muito espaço vertical. Vamos remover os elementos desnecessários para que possamos começar a construir o nosso CatPhotoApp. </section>

## Instructions
<section id="instructions"> Exclua seu elemento <code>h1</code> para simplificar nossa visualização. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Exclua seu elemento <code>h1</code> .
    testString: 'assert(!code.match(/<h1>/gi) && !code.match(/<\/h1>/gi), "Delete your <code>h1</code> element.");'
  - text: Deixe seu elemento <code>h2</code> na página.
    testString: 'assert(code.match(/<h2>[\w\W]*<\/h2>/gi), "Leave your <code>h2</code> element on the page.");'
  - text: Deixe seu elemento <code>p</code> na página.
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
