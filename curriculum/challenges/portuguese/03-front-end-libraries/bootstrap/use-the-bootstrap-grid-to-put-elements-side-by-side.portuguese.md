---
id: bad88fee1348ce8acef08815
title: Use the Bootstrap Grid to Put Elements Side By Side
challengeType: 0
videoUrl: ''
localeTitle: Use o Bootstrap Grid para colocar elementos lado a lado
---

## Description
<section id="description"> O Bootstrap usa um sistema de grade responsivo de 12 colunas, o que facilita colocar elementos em linhas e especificar a largura relativa de cada elemento. A maioria das classes do Bootstrap pode ser aplicada a um elemento <code>div</code> . O Bootstrap possui diferentes atributos de largura de coluna, dependendo do tamanho da tela do usuário. Por exemplo, os telefones têm telas estreitas e os laptops têm telas mais amplas. Tomemos por exemplo a classe <code>col-md-*</code> do Bootstrap. Aqui, <code>md</code> significa médio e <code>*</code> é um número que especifica quantas colunas o elemento deve ter. Nesse caso, a largura da coluna de um elemento em uma tela de tamanho médio, como um laptop, está sendo especificada. No Cat Photo App que estamos criando, usaremos <code>col-xs-*</code> , onde <code>xs</code> significa extra pequeno (como uma tela extra-pequena para celular), e <code>*</code> é o número de colunas que especificam quantas colunas a largura elemento deve ser. Coloque os botões <code>Like</code> , <code>Info</code> e <code>Delete</code> lado a lado aninhando todos os três dentro de um elemento <code>&lt;div class=&quot;row&quot;&gt;</code> , então cada um deles dentro de um elemento <code>&lt;div class=&quot;col-xs-4&quot;&gt;</code> . A classe de <code>row</code> é aplicada a uma <code>div</code> e os próprios botões podem ser aninhados nela. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seus botões devem estar todos aninhados no mesmo elemento <code>div</code> com a <code>row</code> da turma.
    testString: 'assert($("div.row:has(button)").length > 0, "Your buttons should all be nested within the same <code>div</code> element with the class <code>row</code>.");'
  - text: Cada um dos seus botões do Bootstrap deve ser aninhado dentro de seu próprio elemento <code>div</code> com a classe <code>col-xs-4</code> .
    testString: 'assert($("div.col-xs-4:has(button)").length > 2, "Each of your Bootstrap buttons should be nested within its own <code>div</code> element with the class <code>col-xs-4</code>.");'
  - text: Certifique-se de que cada elemento do seu <code>button</code> tenha uma tag de fechamento.
    testString: 'assert(code.match(/<\/button>/g) && code.match(/<button/g) && code.match(/<\/button>/g).length === code.match(/<button/g).length, "Make sure each of your <code>button</code> elements has a closing tag.");'
  - text: Certifique-se de que cada um dos seus elementos <code>div</code> tenha uma tag de fechamento.
    testString: 'assert(code.match(/<\/div>/g) && code.match(/<div/g) && code.match(/<\/div>/g).length === code.match(/<div/g).length, "Make sure each of your <code>div</code> elements has a closing tag.");'

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
    font-family: Lobster, Monospace;
  }

  p {
    font-size: 16px;
    font-family: Monospace;
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
</style>

<div class="container-fluid">
  <h2 class="red-text text-center">CatPhotoApp</h2>

  <p>Click here for <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera.">
  <button class="btn btn-block btn-primary">Like</button>
  <button class="btn btn-block btn-info">Info</button>
  <button class="btn btn-block btn-danger">Delete</button>
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
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
    <label><input type="checkbox" name="personality"> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Crazy</label>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
