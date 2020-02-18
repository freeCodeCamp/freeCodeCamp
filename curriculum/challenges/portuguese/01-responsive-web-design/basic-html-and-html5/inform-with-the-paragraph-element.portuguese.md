---
id: bad87fee1348bd9aedf08801
title: Inform with the Paragraph Element
challengeType: 0
videoUrl: ''
localeTitle: Informar com o elemento Paragraph
---

## Description
<section id="description"> Elemento <code>p</code> é o elemento preferido para o texto do parágrafo nos sites. <code>p</code> é a abreviatura de &quot;parágrafo&quot;. Você pode criar um elemento de parágrafo como este: <code>&lt;p&gt;I&#39;m ap tag!&lt;/p&gt;</code> </section>

## Instructions
<section id="instructions"> Crie um elemento <code>p</code> abaixo do seu elemento <code>h2</code> e dê a ele o texto &quot;Hello Paragraph&quot;. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Crie um elemento <code>p</code> .
    testString: 'assert(($("p").length > 0), "Create a <code>p</code> element.");'
  - text: Seu elemento <code>p</code> deve ter o texto &quot;Hello Paragraph&quot;.
    testString: 'assert.isTrue((/hello(\s)+paragraph/gi).test($("p").text()), "Your <code>p</code> element should have the text "Hello Paragraph".");'
  - text: Certifique-se de que seu elemento <code>p</code> tenha uma tag de fechamento.
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
