---
id: bad87fee1348bd9acdd08826
title: Aprender como as tags de script e document ready funcionam
challengeType: 6
forumTopicId: 18224
dashedName: learn-how-script-tags-and-document-ready-work
---

# --description--

Agora nós estamos prontos para aprender jQuery, a ferramenta mais popular de JavaScript de todos os tempos.

Antes que nós possamos começar usando jQuery, nós precisamos adicionar algumas coisas ao nosso HTML.

Primeiro, adicione um elemento `script` no topo da página. Certifique-se de fechá-la na próxima linha.

O navegador vai rodar qualquer JavaScript dentro do elemento `script`, incluindo jQuery.

Dentro do seu elemento `script`, adicione esse código: `$(document).ready(function() {` ao seu `script`. Em seguida, feche-o na próxima linha (ainda dentro do elemento `script`) com: `});`

Aprenderemos mais sobre `functions` depois. O importante a saber é que o código que você colocar dentro de `function` executará assim que o seu navegador carregar a página.

Isso é importante porque sem o `document ready function`, seu código pode executar antes do HTML ser carregado, o que causaria bugs.

# --hints--

Você deve criar um elemento `script` certificando-se que é válido e possui tag de fechamento.

```js
assert(
  code.match(/<\/script\s*>/g) &&
    code.match(
      /<script(\sasync|\sdefer)*(\s(charset|src|type)\s*=\s*["\"]+[^"\"]*["\"]+)*(\sasync|\sdefer)*\s*>/g
    ) &&
    code.match(/<\/script\s*>/g).length ===
      code.match(
        /<script(\sasync|\sdefer)*(\s(charset|src|type)\s*=\s*["\"]+[^"\"]*["\"]+)*(\sasync|\sdefer)*\s*>/g
      ).length
);
```

Você deve adicionar `$(document).ready(function() {` ao início do seu elemento `script`.

```js
assert(
  code.match(
    /\$\s*?\(\s*?document\s*?\)\.ready\s*?\(\s*?function\s*?\(\s*?\)\s*?\{/g
  )
);
```

Você deve fechar sua função `$(document).ready(function() {` com `});`

```js
assert(code.match(/\n*?\s*?\}\s*?\);/g));
```

# --seed--

## --seed-contents--

```html
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
