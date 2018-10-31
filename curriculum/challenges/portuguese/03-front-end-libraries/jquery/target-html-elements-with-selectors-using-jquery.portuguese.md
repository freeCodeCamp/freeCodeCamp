---
id: bad87fee1348bd9bedc08826
title: Target HTML Elements with Selectors Using jQuery
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
challengeType: 6
videoUrl: ''
localeTitle: Alvo de elementos HTML com seletores usando jQuery
---

## Description
<section id="description"> Agora temos uma <code>document ready function</code> . Agora vamos escrever nossa primeira declaração jQuery. Todas as funções do jQuery começam com um <code>$</code> , geralmente chamado de <code>dollar sign operator</code> , ou <code>bling</code> . Muitas vezes, o jQuery seleciona um elemento HTML com um <code>selector</code> e faz algo com esse elemento. Por exemplo, vamos fazer todos os seus elementos de <code>button</code> saltarem. Basta adicionar este código dentro da função pronta para o seu documento: <code>$(&quot;button&quot;).addClass(&quot;animated bounce&quot;);</code> Observe que já incluímos a biblioteca jQuery e a biblioteca Animate.css em segundo plano para que você possa usá-las no editor. Então você está usando o jQuery para aplicar a classe de <code>bounce</code> do Animate.css aos seus elementos de <code>button</code> . </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Use a função <code>addClass()</code> do jQuery para dar as classes <code>animated</code> e <code>bounce</code> para seus elementos de <code>button</code> .
    testString: 'assert($("button").hasClass("animated") && $("button").hasClass("bounce"), "Use the jQuery <code>addClass&#40&#41</code> function to give the classes <code>animated</code> and <code>bounce</code> to your <code>button</code> elements.");'
  - text: Use apenas o jQuery para adicionar essas cores ao elemento.
    testString: 'assert(!code.match(/class.*animated/g), "Only use jQuery to add these colors to the element.");'
  - text: Seu código jQuery deve estar dentro do <code>$(document).ready();</code> função.
    testString: 'assert(code.match(/\$\(document\)\.ready\(function.*(\s|\n)*.*button.*.addClass.*\);/g), "Your jQuery code should be within the <code>$(document).ready();</code> function.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  $(document).ready(function() {

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
