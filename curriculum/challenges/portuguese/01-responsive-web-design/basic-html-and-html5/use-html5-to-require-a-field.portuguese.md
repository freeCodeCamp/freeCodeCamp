---
id: bad87fee1348bd9aedc08830
title: Use HTML5 to Require a Field
challengeType: 0
videoUrl: ''
localeTitle: Use HTML5 para exigir um campo
---

## Description
<section id="description"> Você pode exigir campos de formulário específicos para que o usuário não possa enviar seu formulário até que ele os preencha. Por exemplo, se você quiser tornar um campo de entrada de texto obrigatório, basta adicionar o atributo <code>required</code> ao seu elemento de <code>input</code> , da seguinte forma: <code>&lt;input type=&quot;text&quot; required&gt;</code> </section>

## Instructions
<section id="instructions"> Faça o seu texto <code>input</code> um campo <code>required</code>, de modo que o usuário não pode enviar o formulário sem concluir este campo. Em seguida, tente enviar o formulário sem inserir nenhum texto. Veja como o seu formulário HTML5 avisa que o campo é obrigatório </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu elemento <code>input</code> de texto deve ter o atributo <code>required</code> .
    testString: 'assert($("input").prop("required"), "Your text <code>input</code> element should have the <code>required</code> attribute.");'

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
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <input type="text" placeholder="cat photo URL">
    <button type="submit">Submit</button>
  </form>
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
