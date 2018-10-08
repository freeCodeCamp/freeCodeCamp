---
id: bad87fee1348bd9aedf08828
title: Create an Ordered List
localeTitle: Crear una lista ordenada
challengeType: 0
videoUrl: ''
---

## Description
<section id='description'> 
HTML tiene otro elemento especial para crear <code>ordered lists</code> o listas numeradas. 
listas ordenadas comienzan con un elemento <code>&lt;ol&gt;</code> apertura, seguido de cualquier número de elementos <code>&lt;li&gt;</code> . Finalmente, las listas ordenadas se cierran con un <code>&lt;/ol&gt;</code> 
Por ejemplo: 
<blockquote>&#60;ol&#62;<br>&nbsp;&nbsp;&#60;li&#62;Garfield&#60;/li&#62;<br>&nbsp;&nbsp;&#60;li&#62;Sylvester&#60;/li&#62;<br>&#60;/ol&#62;</blockquote> 
crearía una lista numerada de &quot;Garfield&quot; y &quot;Sylvester&quot;. 
</section>

## Instructions
<section id='instructions'> 
Crea una lista ordenada de las 3 cosas principales que los gatos odian más. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Debería tener una lista ordenada para "3 cosas que odian los gatos:"'
    testString: 'assert((/Top 3 things cats hate:/i).test($("ol").prev().text()), "You should have an ordered list for "Top 3 things cats hate:"");'
  - text: Deberías tener una lista desordenada para "Cosas que los gatos aman:"
    testString: 'assert((/Things cats love:/i).test($("ul").prev().text()), "You should have an unordered list for "Things cats love:"");'
  - text: Debes tener solo un elemento <code clase = "notranslate"> ul </code>.
    testString: 'assert.equal($("ul").length, 1, "You should have only one <code>ul</code> element.");'
  - text: Debería tener solo un elemento <code clase = "notranslate"> ol </code>.
    testString: 'assert.equal($("ol").length, 1, "You should have only one <code>ol</code> element.");'
  - text: Debería tener tres elementos <code class = "notranslate"> li </code> dentro de su elemento <code class = "notranslate"> ul </code>.
    testString: 'assert.equal($("ul li").length, 3, "You should have three <code>li</code> elements within your <code>ul</code> element.");'
  - text: Debería tener tres elementos <code class = "notranslate"> li </code> dentro de su elemento <code class = "notranslate"> ol </code>.
    testString: 'assert.equal($("ol li").length, 3, "You should have three <code>li</code> elements within your <code>ol</code> element.");'
  - text: Asegúrese de que su elemento <code class = "notranslate"> ul </code> tenga una etiqueta de cierre.
    testString: 'assert(code.match(/<\/ul>/g) && code.match(/<\/ul>/g).length === code.match(/<ul>/g).length, "Make sure your <code>ul</code> element has a closing tag.");'
  - text: Asegúrese de que su elemento <code class = "notranslate"> ol </code> tenga una etiqueta de cierre.
    testString: 'assert(code.match(/<\/ol>/g) && code.match(/<\/ol>/g).length === code.match(/<ol>/g).length, "Make sure your <code>ol</code> element has a closing tag.");'
  - text: Asegúrese de que su elemento <code class = "notranslate"> li </code> tenga una etiqueta de cierre.
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
