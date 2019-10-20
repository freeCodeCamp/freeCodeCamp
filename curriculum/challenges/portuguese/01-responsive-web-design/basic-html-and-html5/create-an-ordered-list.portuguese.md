---
id: bad87fee1348bd9aedf08828
title: Create an Ordered List
challengeType: 0
videoUrl: ''
localeTitle: Crie uma lista ordenada
---

## Description
<section id="description"> O HTML tem outro elemento especial para criar <code>ordered lists</code> ou listas numeradas. As listas ordenadas começam com um elemento <code>&lt;ol&gt;</code> abertura, seguido por qualquer número de elementos <code>&lt;li&gt;</code> . Finalmente, listas ordenadas fecham com um <code>&lt;/ol&gt;</code> Por exemplo: <blockquote> &lt;ol&gt; <br> &lt;li&gt; Garfield &lt;/ li&gt; <br> &lt;li&gt; Sylvester &lt;/ li&gt; <br> &lt;/ ol&gt; </blockquote> criaria uma lista numerada de &quot;Garfield&quot; e &quot;Sylvester&quot;. </section>

## Instructions
<section id="instructions"> Crie uma lista ordenada das 3 principais coisas que os gatos mais odeiam. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Você deve ter uma lista ordenada para "Top 3 coisas que os gatos odeiam:"'
    testString: 'assert((/Top 3 things cats hate:/i).test($("ol").prev().text()), "You should have an ordered list for "Top 3 things cats hate:"");'
  - text: 'Você deve ter uma lista não ordenada de "Coisas que os gatos adoram:"'
    testString: 'assert((/Things cats love:/i).test($("ul").prev().text()), "You should have an unordered list for "Things cats love:"");'
  - text: Você deve ter apenas um elemento <code>ul</code> .
    testString: 'assert.equal($("ul").length, 1, "You should have only one <code>ul</code> element.");'
  - text: Você deve ter apenas um <code>ol</code> elemento.
    testString: 'assert.equal($("ol").length, 1, "You should have only one <code>ol</code> element.");'
  - text: Você deve ter três elementos <code>li</code> no seu elemento <code>ul</code> .
    testString: 'assert.equal($("ul li").length, 3, "You should have three <code>li</code> elements within your <code>ul</code> element.");'
  - text: Você deve ter três elementos <code>li</code> dentro do seu elemento <code>ol</code> .
    testString: 'assert.equal($("ol li").length, 3, "You should have three <code>li</code> elements within your <code>ol</code> element.");'
  - text: Certifique-se de que seu elemento <code>ul</code> tenha uma tag de fechamento.
    testString: 'assert(code.match(/<\/ul>/g) && code.match(/<\/ul>/g).length === code.match(/<ul>/g).length, "Make sure your <code>ul</code> element has a closing tag.");'
  - text: Certifique-se de que seu elemento <code>ol</code> tenha uma tag de fechamento.
    testString: 'assert(code.match(/<\/ol>/g) && code.match(/<\/ol>/g).length === code.match(/<ol>/g).length, "Make sure your <code>ol</code> element has a closing tag.");'
  - text: Certifique-se de que seu elemento <code>li</code> tenha uma tag de fechamento.
    testString: 'assert(code.match(/<\/li>/g) && code.match(/<li>/g) && code.match(/<\/li>/g).length === code.match(/<li>/g).length, "Make sure your <code>li</code> element has a closing tag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>

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
