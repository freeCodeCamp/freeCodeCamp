---
id: bad87fee1348bd9aedf08827
title: Create a Bulleted Unordered List
localeTitle: Crear una lista desordenada con viñetas
challengeType: 0
videoUrl: ''
---

## Description
<section id='description'> 
HTML tiene un elemento especial para crear <code>unordered lists</code> o listas de estilo de punto de viñeta. 
listas desordenadas comienzan con un elemento <code>&lt;ul&gt;</code> apertura, seguido de cualquier número de elementos <code>&lt;li&gt;</code> . Finalmente, las listas desordenadas se cierran con un <code>&lt;/ul&gt;</code> 
Por ejemplo: 
<blockquote>&#60;ul&#62;<br>&nbsp;&nbsp;&#60;li&#62;milk&#60;/li&#62;<br>&nbsp;&nbsp;&#60;li&#62;cheese&#60;/li&#62;<br>&#60;/ul&#62;</blockquote> 
crearía una lista de estilo de punto de bala de &quot;leche&quot; y &quot;queso&quot;. 
</section>

## Instructions
<section id='instructions'> 
Elimine los dos últimos elementos <code>p</code> y cree una lista desordenada de tres cosas que los gatos adoran al final de la página. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Crear un elemento <code>ul</code> .
    testString: 'assert($("ul").length > 0, "Create a <code>ul</code> element.");'
  - text: Debes tener tres elementos <code>li</code> dentro de tu elemento <code>ul</code> .
    testString: 'assert($("ul li").length > 2, "You should have three <code>li</code> elements within your <code>ul</code> element.");'
  - text: Asegúrese de que su elemento <code>ul</code> tenga una etiqueta de cierre.
    testString: 'assert(code.match(/<\/ul>/gi) && code.match(/<ul/gi) && code.match(/<\/ul>/gi).length === code.match(/<ul/gi).length, "Make sure your <code>ul</code> element has a closing tag.");'
  - text: Asegúrese de que sus elementos <code>li</code> tengan etiquetas de cierre.
    testString: 'assert(code.match(/<\/li>/gi) && code.match(/<li[\s>]/gi) && code.match(/<\/li>/gi).length === code.match(/<li[\s>]/gi).length, "Make sure your <code>li</code> elements have closing tags.");'

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

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
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
