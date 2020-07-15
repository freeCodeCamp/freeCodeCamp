---
id: bad87fee1348bd9acde08712
title: Use Responsive Design with Bootstrap Fluid Containers
challengeType: 0
videoUrl: ''
localeTitle: Use Design Responsivo com Containers Fluidos do Bootstrap
---

## Description
<section id="description"> Na seção HTML5 e CSS do freeCodeCamp, criamos um aplicativo Cat Photo. Agora vamos voltar a isso. Desta vez, vamos estilizá-lo usando o popular framework CSS responsivo do Bootstrap. O Bootstrap vai descobrir a largura da sua tela e responder redimensionando seus elementos HTML - daí o nome <code>Responsive Design</code> . Com design responsivo, não há necessidade de projetar uma versão móvel do seu site. Ficará bem em dispositivos com telas de qualquer largura. Você pode adicionar o Bootstrap a qualquer aplicativo adicionando o seguinte código ao topo do seu HTML: <code>&lt;link rel=&quot;stylesheet&quot; href=&quot;https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css&quot; integrity=&quot;sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u&quot; crossorigin=&quot;anonymous&quot;/&gt;</code> Neste caso, nós já adicionamos para você nesta página nos bastidores. Observe que usar <code>&gt;</code> ou <code>/&gt;</code> para fechar a tag de <code>link</code> é aceitável. Para começar, devemos aninhar todo o nosso HTML (exceto a tag de <code>link</code> e o elemento de <code>style</code> ) em um elemento <code>div</code> com a classe <code>container-fluid</code> . </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu elemento <code>div</code> deve ter a classe <code>container-fluid</code> .
    testString: 'assert($("div").hasClass("container-fluid"), "Your <code>div</code> element should have the class <code>container-fluid</code>.");'
  - text: Certifique-se de que seu elemento <code>div</code> tenha uma tag de fechamento.
    testString: 'assert(code.match(/<\/div>/g) && code.match(/<div/g) && code.match(/<\/div>/g).length === code.match(/<div/g).length, "Make sure your <code>div</code> element has a closing tag.");'
  - text: Certifique-se de ter aninhado todos os elementos HTML após a tag de <code>style</code> fechamento em <code>.container-fluid</code> .
    testString: 'assert($(".container-fluid").children().length >= 8, "Make sure you have nested all HTML elements after the closing <code>style</code> tag in <code>.container-fluid</code>.");'

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

<h2 class="red-text">CatPhotoApp</h2>

<p>Click here for <a href="#">cat photos</a>.</p>

<a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

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

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
