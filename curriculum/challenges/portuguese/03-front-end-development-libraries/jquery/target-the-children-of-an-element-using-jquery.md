---
id: bad87fee1348bd9aed208826
title: Mirar o filho de um elemento usando o jQuery
challengeType: 6
forumTopicId: 18320
dashedName: target-the-children-of-an-element-using-jquery
---

# --description--

Quando elementos HTML são colocadas um nível abaixo de outro eles são chamados <dfn>children(filhos)</dfn> daquele elemento. Por exemplo, os elementos button nesse desafio com o texto `#target1`, `#target2` e `#target3` são todos filhos do elemento `<div class="well" id="left-well">`.

O jQuery possui uma função chamada `children()` que o permite acessar os filhos de qualquer elementos que você selecionou.

Aqui está um exemplo de como você usaria a função `children()` para dar ao filho do seu elemento `left-well` a cor `blue`:

```js
$("#left-well").children().css("color", "blue")
```

# --instructions--

Dê a todos os filhos do seu elemento `right-well` a cor laranja.

# --hints--

Todos os filhos de `#right-well` devem ter o texto laranja.

```js
assert($('#right-well').children().css('color') === 'rgb(255, 165, 0)');
```

Você deve usar a função `children()` para modificar esses elementos.

```js
assert(code.match(/\.children\(\)\.css/g));
```

Você deve usar apenas jQuery para adicionar essas classes ao elemento.

```js
assert(code.match(/<div class="well" id="right-well">/g));
```

# --seed--

## --seed-contents--

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

<!-- Only change code above this line -->

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

# --solutions--

```html
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");
    $("#target5").clone().appendTo("#left-well");
    $("#target1").parent().css("background-color", "red");
    $("#right-well").children().css("color", "orange");
  });
</script>

<!-- Only change code above this line -->

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
