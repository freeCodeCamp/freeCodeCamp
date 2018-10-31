---
id: bad87fee1348bd9aed608826
title: Use appendTo to Move Elements with jQuery
challengeType: 6
videoUrl: ''
localeTitle: Use appendTo para mover elementos com jQuery
---

## Description
<section id="description"> Agora vamos tentar mover elementos de uma <code>div</code> para outra. jQuery tem uma função chamada <code>appendTo()</code> que permite selecionar elementos HTML e anexá-los a outro elemento. Por exemplo, se quiséssemos mover bem o <code>target4</code> da direita para a esquerda, <code>$(&quot;#target4&quot;).appendTo(&quot;#left-well&quot;);</code> : <code>$(&quot;#target4&quot;).appendTo(&quot;#left-well&quot;);</code> Mova seu elemento <code>target2</code> seu <code>target2</code> da <code>left-well</code> para o da <code>right-well</code> . </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu elemento <code>target2</code> não deve estar dentro do seu <code>left-well</code> .
    testString: 'assert($("#left-well").children("#target2").length === 0, "Your <code>target2</code> element should not be inside your <code>left-well</code>.");'
  - text: Seu elemento <code>target2</code> deve estar dentro do seu <code>right-well</code> .
    testString: 'assert($("#right-well").children("#target2").length > 0, "Your <code>target2</code> element should be inside your <code>right-well</code>.");'
  - text: Use apenas o jQuery para mover esses elementos.
    testString: 'assert(!code.match(/class.*animated/g), "Only use jQuery to move these elements.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();

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
