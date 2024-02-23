---
id: bad87fee1348bd9bedc08826
title: Mirar elementos de HTML com seletores usando o jQuery
challengeType: 6
forumTopicId: 18319
required:
  - 
    link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
dashedName: target-html-elements-with-selectors-using-jquery
---

# --description--

Agora temos uma função `document ready`.

Agora vamos escrever nossa primeira declaração jQuery. Todas as funções do jQuery começam com um `$`, geralmente são referidas como um operador de sinal de dólar ou como bling.

jQuery geralmente selecionar um elemento HTML com um <dfn>seletor</dfn>, em seguida faz algo a esse elemento.

Por exemplo, vamos fazer todos os nossos elementos `button` quicar. Basta adicionar esse código dentro da sua função pronta:

```js
$("button").addClass("animated bounce");
```

Note que nós já incluímos ambas as bibliotecas jQuery e Animate.css por trás dos panos para que você possa utilizá-las no editor. Então você está usando jQuery para aplicar a classe `bounce` do Animate.css ao seus elementos `button`.

# --hints--

Você deve usar a função `addClass()` do jQuery para dar as classes `animated` e `bounce` ao seus elementos `button`.

```js
assert($('button').hasClass('animated') && $('button').hasClass('bounce'));
```

Você deve usar apenas jQuery para adicionar essas classes ao elemento.

```js
assert(!code.match(/class.*animated/g));
```

Seu código jQuery deve estar dentro da função `$(document).ready();`.

```js
assert(
  code.replace(/\s/g, '').match(/\$\(document\)\.ready\(function\(\)\{\$/g)
);
```

# --seed--

## --seed-contents--

```html
<script>
  $(document).ready(function() {

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
