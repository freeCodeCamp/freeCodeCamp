---
id: bad87fee1348bd9aed208826
title: Target the Children of an Element Using jQuery
challengeType: 6
videoUrl: ''
localeTitle: Segmente os filhos de um elemento usando jQuery
---

## Description
<section id="description"> Quando os elementos HTML são colocados um nível abaixo do outro, eles são chamados <code>children</code> desse elemento. Por exemplo, os elementos de botão neste desafio com o texto &quot;# target1&quot;, &quot;# target2&quot; e &quot;# target3&quot; são todos <code>children</code> do elemento <code>&lt;div class=&quot;well&quot; id=&quot;left-well&quot;&gt;</code> . jQuery tem uma função chamada <code>children()</code> que permite que você acesse os filhos de qualquer elemento selecionado. Aqui está um exemplo de como você usaria a função <code>children()</code> para dar aos filhos do seu elemento de <code>left-well</code> a cor <code>blue</code> : <code>$(&quot;#left-well&quot;).children().css(&quot;color&quot;, &quot;blue&quot;)</code> </section>

## Instructions
<section id="instructions"> Dê a todas as crianças do seu elemento do <code>right-well</code> a cor laranja. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Todos os filhos de <code>#right-well</code> devem ter texto em laranja.'
    testString: 'assert($("#right-well").children().css("color") === "rgb(255, 165, 0)", "All children of <code>#right-well</code> should have orange text.");'
  - text: Você deve usar a função <code>children()</code> para modificar esses elementos.
    testString: 'assert(code.match(/\.children\(\)\.css/g), "You should use the <code>children&#40&#41</code> function to modify these elements.");'
  - text: Use apenas o jQuery para adicionar essas classes ao elemento.
    testString: 'assert(code.match(/<div class="well" id="right-well">/g), "Only use jQuery to add these classes to the element.");'

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
    $("#target2").appendTo("#right-well");
    $("#target5").clone().appendTo("#left-well");
    $("#target1").parent().css("background-color", "red");

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
