---
id: bad87fee1348bd9aed508826
title: Clone an Element Using jQuery
challengeType: 6
videoUrl: ''
localeTitle: Clone um elemento usando jQuery
---

## Descrição
<section id="description"> Além de mover elementos, você também pode copiá-los de um lugar para outro. jQuery tem uma função chamada <code>clone()</code> que faz uma cópia de um elemento. Por exemplo, se quiséssemos copiar o <code>target2</code> do nosso <code>target2</code> da <code>left-well</code> para o nosso da <code>right-well</code> , <code>$(&quot;#target2&quot;).clone().appendTo(&quot;#right-well&quot;);</code> : <code>$(&quot;#target2&quot;).clone().appendTo(&quot;#right-well&quot;);</code> Você notou que isso envolve juntar duas funções jQuery? Isso é chamado de <code>function chaining</code> e é uma maneira conveniente de fazer as coisas com o jQuery. Clone seu elemento <code>target5</code> e anexe-o à sua <code>left-well</code> . </section>

## Intruções
<section id="instructions">
</section>

## Testes
<section id='tests'>

```yml
tests:
  - text: Seu elemento <code>target5</code> deve estar dentro do seu <code>right-well</code> .
    testString: 'assert($("#right-well").children("#target5").length > 0, "Your <code>target5</code> element should be inside your <code>right-well</code>.");'
  - text: Uma cópia do seu elemento <code>target5</code> também deve estar dentro do seu <code>left-well</code> .
    testString: 'assert($("#left-well").children("#target5").length > 0, "A copy of your <code>target5</code> element should also be inside your <code>left-well</code>.");'
  - text: Use apenas o jQuery para mover esses elementos.
    testString: 'assert(!code.match(/class.*animated/g), "Only use jQuery to move these elements.");'

```

</section>

## Desafio
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");

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

## Solução
<section id='solution'>

```js
// solution required
```
</section>
