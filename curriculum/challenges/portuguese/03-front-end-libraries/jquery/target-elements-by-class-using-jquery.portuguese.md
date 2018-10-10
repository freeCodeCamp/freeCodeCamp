---
id: bad87fee1348bd9aedc08826
title: Target Elements by Class Using jQuery
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
challengeType: 6
videoUrl: ''
localeTitle: Elementos de destino por classe usando jQuery
---

## Description
<section id="description"> Você vê como fizemos todos os seus elementos de <code>button</code> saltarem? Nós os selecionamos com <code>$(&quot;button&quot;)</code> , então adicionamos algumas classes CSS a eles com <code>.addClass(&quot;animated bounce&quot;);</code> . Você acabou de usar a função <code>.addClass()</code> do jQuery, que permite adicionar classes aos elementos. Primeiro, vamos direcionar seus <code>div</code> elementos com a classe <code>well</code> , usando o <code>$(&quot;.well&quot;)</code> selector. Observe que, assim como com as declarações CSS, você digita um <code>.</code> antes do nome da turma. Em seguida, use a função <code>.addClass()</code> do jQuery para adicionar as classes <code>animated</code> e <code>shake</code> . Por exemplo, você pode criar todos os elementos com a trepidação <code>text-primary</code> da classe adicionando o seguinte à sua <code>document ready function</code> para o <code>document ready function</code> : <code>$(&quot;.text-primary&quot;).addClass(&quot;animated shake&quot;);</code> </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Use o jQuery <code>addClass()</code> função para dar as aulas <code>animated</code> e <code>shake</code> a todos os seus elementos com a classe <code>well</code> .
    testString: 'assert($(".well").hasClass("animated") && $(".well").hasClass("shake"), "Use the jQuery <code>addClass&#40&#41</code> function to give the classes <code>animated</code> and <code>shake</code> to all your elements with the class <code>well</code>.");'
  - text: Use apenas o jQuery para adicionar essas classes ao elemento.
    testString: 'assert(!code.match(/class\.\*animated/g), "Only use jQuery to add these classes to the element.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
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
