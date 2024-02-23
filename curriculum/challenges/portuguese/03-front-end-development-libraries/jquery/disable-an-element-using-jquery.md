---
id: bad87fee1348bd9aed808826
title: Desativar um elemento usando o jQuery
challengeType: 6
forumTopicId: 17563
dashedName: disable-an-element-using-jquery
---

# --description--

Você também pode alterar as propriedades não CSS de elementos HTML com jQuery. Por exemplo, você pode desabilitar botões.

Quando você desativa um botão, ele se tornará cinza e não poderá mais ser clicado.

O jQuery possui uma função chamada `.prop()` que o permite ajustar as propriedades de elementos.

Aqui está como você desabilitaria todos os botões:

```js
$("button").prop("disabled", true);
```

Desative apenas o botão `target1`.

# --hints--

O botão `target1` deve ser desativado.

```js
assert(
  $('#target1') &&
    $('#target1').prop('disabled') &&
    code.match(/["']disabled["'],( true|true)/g)
);
```

Nenhum outro botão deve ser desativado.

```js
assert($('#target2') && !$('#target2').prop('disabled'));
```

Você deve usar apenas jQuery para adicionar essas classes ao elemento.

```js
assert(!code.match(/disabled[^<]*>/g));
```

# --seed--

## --seed-contents--

```html
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");

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
