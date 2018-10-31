---
id: bad87fee1348bd9aed908826
title: Change the CSS of an Element Using jQuery
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
challengeType: 6
videoUrl: ''
localeTitle: Alterar o CSS de um elemento usando jQuery
---

## Description
<section id="description"> Também podemos alterar o CSS de um elemento HTML diretamente com o jQuery. jQuery tem uma função chamada <code>.css()</code> que permite alterar o CSS de um elemento. Veja como <code>$(&quot;#target1&quot;).css(&quot;color&quot;, &quot;blue&quot;);</code> a cor para azul: <code>$(&quot;#target1&quot;).css(&quot;color&quot;, &quot;blue&quot;);</code> Isso é um pouco diferente de uma declaração CSS normal, porque a propriedade CSS e seu valor estão entre aspas e separados por uma vírgula em vez de dois pontos. Exclua seus seletores do jQuery, deixando uma <code>document ready function</code> vazio. Selecione <code>target1</code> e mude sua cor para vermelho. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu elemento <code>target1</code> deve ter texto vermelho.
    testString: 'assert($("#target1").css("color") === "rgb(255, 0, 0)", "Your <code>target1</code> element should have red text.");'
  - text: Use apenas o jQuery para adicionar essas classes ao elemento.
    testString: 'assert(!code.match(/class.*animated/g), "Only use jQuery to add these classes to the element.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
    $(".well").addClass("animated shake");
    $("#target3").addClass("animated fadeOut");
    $("button").removeClass("btn-default");

  });
</script>

<!-- Only change code above this line. -->

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
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
