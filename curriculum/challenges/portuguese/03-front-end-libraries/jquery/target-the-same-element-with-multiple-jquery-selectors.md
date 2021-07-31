---
id: bad87fee1348bd9aed908626
title: Mirar o mesmo elemento com múltiplos seletores de jQuery
challengeType: 6
forumTopicId: 18322
required:
  - 
    link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
dashedName: target-the-same-element-with-multiple-jquery-selectors
---

# --description--

Agora você sabe três formas de mirar elementos: pelo tipo`$("button")`, pela classe: `$(".btn")`, e pelo id `$("#target1")`.

Embora seja possível adicionar várias classes em uma única chamada `.addClass()`, vamos adicioná-los ao mesmo elemento de *três formas separadas*.

Usando `.addClass()`, adicione apenas uma classe de cada vez ao mesmo elemento, três formas diferentes:

Adicione a classe `animated` a todos os elementos do tipo `button`.

Adicione a classe `shake` a todos os botões com classe `.btn`.

Adicione a classe `btn-primary` ao botão com id `#target1`.

**Observação:** você deve estar mirando apenas um elemento e adicionando apenas uma classe de cada vez. Ao todo, seus três seletores individuais acabarão adicionando as três classes `shake`, `animated` e `btn-primary` para `#target1`.

# --hints--

O código deve usar o seletor `$("button")`.

```js
assert(code.match(/\$\s*?\(\s*?(?:'|")\s*?button\s*?(?:'|")/gi));
```

O código deve usar o seletor `$(".btn")`.

```js
assert(code.match(/\$\s*?\(\s*?(?:'|")\s*?\.btn\s*?(?:'|")/gi));
```

O código deve usar o seletor `$("#target1")`.

```js
assert(code.match(/\$\s*?\(\s*?(?:'|")\s*?#target1\s*?(?:'|")/gi));
```

Você deve adicionar apenas uma classe com cada um dos seus três seletores.

```js
assert(
  code.match(/addClass/g) &&
    code.match(/addClass\s*?\(\s*?('|")\s*?[\w-]+\s*?\1\s*?\)/g).length > 2
);
```

O elemento `#target1` deve ter as classes `animated`‚ `shake` e `btn-primary`.

```js
assert(
  $('#target1').hasClass('animated') &&
    $('#target1').hasClass('shake') &&
    $('#target1').hasClass('btn-primary')
);
```

Você deve usar apenas jQuery para adicionar esses elementos ao elemento.

```js
assert(!code.match(/class.*animated/g));
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
    $("button").addClass("animated");
    $(".btn").addClass("shake");
    $("#target1").addClass("btn-primary");
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
