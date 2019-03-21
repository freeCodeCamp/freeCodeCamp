---
id: bad87fee1348bd9aedf08830
title: Add Placeholder Text to a Text Field
challengeType: 0
videoUrl: ''
localeTitle: Adicionar texto do marcador de posição a um campo de texto
---

## Description
<section id="description"> O texto do espaço reservado é o que é exibido no elemento de <code>input</code> antes que o usuário introduza alguma coisa. Você pode criar um texto de espaço reservado da seguinte forma: <code>&lt;input type=&quot;text&quot; placeholder=&quot;this is placeholder text&quot;&gt;</code> </section>

## Instructions
<section id="instructions"> Defina o valor de <code>placeholder</code> da sua <code>input</code> texto para &quot;cat photo URL&quot;. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Adicione um atributo de <code>placeholder</code> ao elemento de <code>input</code> texto existente.
    testString: 'assert($("input[placeholder]").length > 0, "Add a <code>placeholder</code> attribute to the existing text <code>input</code> element.");'
  - text: Defina o valor do seu atributo de espaço reservado para "cat photo URL".
    testString: 'assert($("input") && $("input").attr("placeholder") && $("input").attr("placeholder").match(/cat\s+photo\s+URL/gi), "Set the value of your placeholder attribute to "cat photo URL".");'
  - text: O elemento de <code>input</code> finalizado deve ter uma sintaxe válida.
    testString: 'assert($("input[type=text]").length > 0 && code.match(/<input((\s+\w+(\s*=\s*(?:".*?"|".*?"|[\^"">\s]+))?)+\s*|\s*)\/?>/gi), "The finished <code>input</code> element should have valid syntax.");'

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
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <input type="text">
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
