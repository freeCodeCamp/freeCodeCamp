---
id: bad87fee1348bd9aeda08826
title: Mirar elementos por id usando o jQuery
challengeType: 6
forumTopicId: 18317
required:
  - 
    link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
dashedName: target-elements-by-id-using-jquery
---

# --description--

Você também pode mirar elementos por seus atributos id.

Primeiro, vamos tomar como alvo seu elemento `button` com o id `target3` usando o seletor `$("#target3")`.

Note que, assim como as declarações CSS, você digita um `#` antes do nome do id.

Em seguida use a função `.addClass()` do jQuery para adicionar as classes `animated` e `fadeOut`.

Aqui está como você faria o elemento `button` com o id `target6` desaparecer:

```js
$("#target6").addClass("animated fadeOut");
```

# --hints--

Você deve selecionar o elemento `button` com o `id` `target3` e usar a função `addClass()` do jQuery para dar ao botão a classe `animated`.

```js
assert($('#target3').hasClass('animated'));
```

Você deve mirar o elemento com o id `target3` e usar a função `addClass()` do jQuery para dar a ele a classe `fadeOut`.

```js
assert(
  ($('#target3').hasClass('fadeOut') || $('#target3').hasClass('fadeout')) &&
    code.match(/\$\(\s*.#target3.\s*\)/g)
);
```

Você deve usar apenas jQuery para adicionar essas classes ao elemento.

```js
assert(!code.match(/class.*animated/g));
```

# --seed--

## --seed-contents--

```html
<script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
    $(".well").addClass("animated shake");

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
    $("button").addClass("animated bounce");
    $(".well").addClass("animated shake");
    $("#target3").addClass("animated fadeOut");
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
