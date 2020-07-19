---
id: bad87fee1348bd9aedd08845
title: Add Font Awesome Icons to our Buttons
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/css/font-awesome.css'
    raw: true
challengeType: 0
videoUrl: ''
localeTitle: Adicione ícones de fonte impressionante aos nossos botões
---

## Description
<section id="description"> Font Awesome é uma conveniente biblioteca de ícones. Esses ícones são gráficos vetoriais, armazenados no formato de arquivo <code>.svg</code> . Esses ícones são tratados como fontes. Você pode especificar seu tamanho usando pixels e eles assumirão o tamanho da fonte de seus elementos HTML pai. Você pode incluir o Font Awesome em qualquer aplicativo adicionando o seguinte código ao topo do seu HTML: <code>&lt;link rel=&quot;stylesheet&quot; href=&quot;https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css&quot; integrity=&quot;sha384-XdYbMnZ/QjLh6iI4ogqCTaIjrFk87ip+ekIjefZch0Y+PvJ8CDYtEs1ipDmPorQ+&quot; crossorigin=&quot;anonymous&quot;&gt;</code> Neste caso, nós já adicionamos para você nesta página nos bastidores. O elemento <code>i</code> foi originalmente usado para criar outros elementos em itálico, mas agora é comumente usado para ícones. Você pode adicionar as classes Font Awesome ao elemento <code>i</code> para transformá-lo em um ícone, por exemplo: <code>&lt;i class=&quot;fa fa-info-circle&quot;&gt;&lt;/i&gt;</code> Observe que o elemento <code>span</code> também é aceitável para uso com ícones . Use Font Awesome para adicionar um ícone de <code>thumbs-up</code> ao seu botão like, dando a ele um elemento <code>i</code> com as classes <code>fa</code> e <code>fa-thumbs-up</code> ; não se esqueça de manter o texto &quot;Like&quot; ao lado do ícone. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Adicione um elemento <code>i</code> com as classes <code>fa</code> e <code>fa-thumbs-up</code> .
    testString: 'assert($("i").is(".fa.fa-thumbs-up") || $("span").is(".fa.fa-thumbs-up"), "Add an <code>i</code> element with the classes <code>fa</code> and <code>fa-thumbs-up</code>.");'
  - text: Seu ícone <code>fa-thumbs-up</code> aprovação deve estar localizado no botão Curtir.
    testString: 'assert(($("i.fa-thumbs-up").parent().text().match(/Like/gi) && $(".btn-primary > i").is(".fa.fa-thumbs-up")) || ($("span.fa-thumbs-up").parent().text().match(/Like/gi) && $(".btn-primary > span").is(".fa.fa-thumbs-up")), "Your <code>fa-thumbs-up</code> icon should be located within the Like button.");'
  - text: Aninhe seu elemento <code>i</code> no seu elemento de <code>button</code> .
    testString: 'assert($("button").children("i").length > 0 || $("button").children("span").length > 0, "Nest your <code>i</code> element within your <code>button</code> element.");'
  - text: Certifique-se de que seu elemento de ícone tenha uma tag de fechamento.
    testString: 'assert(code.match(/<\/i>|<\/span>/g), "Make sure your icon element has a closing tag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  h2 {
    font-family: Lobster, Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }
</style>

<div class="container-fluid">
  <div class="row">
    <div class="col-xs-8">
      <h2 class="text-primary text-center">CatPhotoApp</h2>
    </div>
    <div class="col-xs-4">
      <a href="#"><img class="img-responsive thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
    </div>
  </div>
  <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera.">
  <div class="row">
    <div class="col-xs-4">
      <button class="btn btn-block btn-primary">Like</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-info">Info</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-danger">Delete</button>
    </div>
  </div>
  <p>Things cats <span class="text-danger">love:</span></p>
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
