---
id: bad87fee1348bd9aedd08835
title: Check Radio Buttons and Checkboxes by Default
challengeType: 0
videoUrl: ''
localeTitle: Verificar botões de rádio e caixas de seleção por padrão
---

## Description
<section id="description"> Você pode definir uma caixa de seleção ou um botão de opção para ser verificado por padrão usando o atributo <code>checked</code> . Para fazer isso, basta adicionar a palavra &quot;checked&quot; ao interior de um elemento de entrada. Por exemplo: <code>&lt;input type=&quot;radio&quot; name=&quot;test-name&quot; checked&gt;</code> </section>

## Instructions
<section id="instructions"> Defina o primeiro de seus <code>radio buttons</code> e a primeira das suas <code>checkboxes</code> de <code>checkboxes</code> para ambos ser marcada por padrão. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu primeiro botão de opção no formulário deve estar marcado por padrão.
    testString: 'assert($("input[type="radio"]").prop("checked"), "Your first radio button on your form should be checked by default.");'
  - text: Sua primeira caixa de seleção no formulário deve ser marcada por padrão.
    testString: 'assert($("input[type="checkbox"]").prop("checked"), "Your first checkbox on your form should be checked by default.");'

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
    <label><input type="radio" name="indoor-outdoor"> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality"> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
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
