---
id: bad87fee1348bd9aed708826
title: Remove an Element Using jQuery
challengeType: 6
videoUrl: ''
localeTitle: Remover um elemento usando jQuery
---

## Descrição
<section id="description"> Agora vamos remover um elemento HTML da sua página usando jQuery. jQuery tem uma função chamada <code>.remove()</code> que remove um elemento HTML inteiramente. Remova o elemento <code>target4</code> da página usando a função <code>.remove()</code>.</section>

## Instruções
<section id="instructions">
</section>

## Testes
<section id='tests'>

```yml
tests:
  - text: Use jQuery para remover seu elemento <code>target4</code> da sua página.
    testString: 'assert($("#target4").length === 0 && code.match(/\$\([""]#target4[""]\).remove\(\)/g), "Use jQuery to remove your <code>target4</code> element from your page.");'
  - text: Use apenas o jQuery para remover este elemento.
    testString: 'assert(code.match(/id="target4/g) && !code.match(/<!--.*id="target4".*-->/g) && $("#right-well").length > 0, "Only use jQuery to remove this element.");'

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

  });
</script>

<!-- Apenas altere o código acima dessa linha. -->

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
