---
id: bad87dee1348bd9aede07836
title: Use an id Attribute to Style an Element
challengeType: 0
videoUrl: ''
localeTitle: Use um atributo id para estilizar um elemento
---

## Description
<section id="description"> Uma coisa legal sobre os atributos <code>id</code> é que, como nas classes, você pode estilizá-los usando CSS. No entanto, um <code>id</code> não é reutilizável e deve ser aplicado apenas a um elemento. Um <code>id</code> também tem uma maior especificidade (importância) do que uma classe, portanto, se ambos forem aplicados ao mesmo elemento e tiverem estilos conflitantes, os estilos do <code>id</code> serão aplicados. Aqui está um exemplo de como você pode pegar seu elemento com o atributo <code>id</code> de <code>cat-photo-element</code> e dar a ele a cor de fundo verde. Em seu elemento de <code>style</code> : <blockquote> # cat-photo-element { <br> cor de fundo: verde; <br> } </blockquote> Note que dentro do seu elemento de <code>style</code> , você sempre faz referência a classes colocando um <code>.</code> na frente de seus nomes. Você sempre faz referência a ids colocando um <code>#</code> na frente de seus nomes. </section>

## Instructions
<section id="instructions"> Tente dar o seu formulário, que agora tem o atributo <code>id</code> de <code>cat-photo-form</code> , um fundo verde. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Dê ao seu elemento <code>form</code> o id de <code>cat-photo-form</code> .
    testString: 'assert($("form").attr("id") === "cat-photo-form", "Give your <code>form</code> element the id of <code>cat-photo-form</code>.");'
  - text: Seu elemento de <code>form</code> deve ter a <code>background-color</code> de fundo verde.
    testString: 'assert($("#cat-photo-form").css("background-color") === "rgb(0, 128, 0)", "Your <code>form</code> element should have the <code>background-color</code> of green.");'
  - text: Certifique-se de que seu elemento <code>form</code> tenha um atributo <code>id</code> .
    testString: 'assert(code.match(/<form.*cat-photo-form.*>/gi) && code.match(/<form.*cat-photo-form.*>/gi).length > 0, "Make sure your <code>form</code> element has an <code>id</code> attribute.");'
  - text: Não forneça ao seu <code>form</code> nenhum atributo de <code>class</code> ou <code>style</code> .
    testString: 'assert(!code.match(/<form.*style.*>/gi) && !code.match(/<form.*class.*>/gi), "Do not give your <code>form</code> any <code>class</code> or <code>style</code> attributes.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, monospace;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }

  .silver-background {
    background-color: silver;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <div class="silver-background">
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
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo" id="cat-photo-form">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
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

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, monospace;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }

  .silver-background {
    background-color: silver;
  }
  
  #cat-photo-form{
  background-color: green;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <div class="silver-background">
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
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo" id="cat-photo-form">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```
</section>
