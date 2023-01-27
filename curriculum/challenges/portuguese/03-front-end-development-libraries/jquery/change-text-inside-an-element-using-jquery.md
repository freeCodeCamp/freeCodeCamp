---
id: 564944c91be2204b269d51e3
title: Alterar texto dentro de um elemento usando jQuery
challengeType: 6
forumTopicId: 16773
dashedName: change-text-inside-an-element-using-jquery
---

# --description--

Usando jQuery, você pode alterar o texto entre as tags de abertura e fechamento de um elemento. Você pode alterar até a marcação HTML.

O jQuery possui uma função chamada `.html()` que permite a você adicionar tags HTML e texto dentro de um elemento. Qualquer conteúdo previamente dentro do elemento será completamente substituído com o conteúdo que você forneceu usando essa função.

Aqui está como você rescreveria e enfatizaria o texto do nosso cabeçalho:

```js
$("h3").html("<em>jQuery Playground</em>");
```

O jQuery também possui uma função similar chamada `.text()` que altera apenas texto sem adicionar tags. Em outras palavras, essa função não irá avaliar nenhuma tag HTML passada a ela, mas ao invés disso irá tratá-la como o texto que você quer substituir o conteúdo atual existente.

Modifique o botão com id `target4` enfatizando seu texto.

<a href="https://www.freecodecamp.org/news/html-elements-explained-what-are-html-tags/#em-element" target="_blank" rel="noopener noreferrer nofollow">Veja nosso artigo de notícias para &lt;em&gt;</a> aprender a diferença entre `<i>` e `<em>` e seus usos.

Note que enquanto a tag `<i>` foi tradicionalmente usada para enfatizar texto, foi adotada desde então para uso como tag para ícones. A tag `<em>` é agora amplamente aceita como a tag para ênfase. Ambos funcionarão para esse desafio.

# --hints--

Você deve enfatizar o texto no seu botão `target4` ao adicionar tags HTML.

```js
assert.isTrue(
  /<em>|<i>\s*#target4\s*<\/em>|<\/i>/gi.test($('#target4').html())
);
```

De outro modo, o texto deve permanecer inalterado.

```js
assert($('#target4') && $('#target4').text().trim() === '#target4');
```

Você não deve alterar nenhum outro texto.

```js
assert.isFalse(/<em>|<i>/gi.test($('h3').html()));
```

Você deve estar usando `.html()` e não `.text()`.

```js
assert(code.match(/\.html\(/g));
```

Você deve selecionar `button id="target4"` com jQuery.

```js
assert(code.match(/\$\(\s*?(\"|\')#target4(\"|\')\s*?\)\.html\(/));
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
    $("#target4").html('<em>#target4</em>');
  });
</script>

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
