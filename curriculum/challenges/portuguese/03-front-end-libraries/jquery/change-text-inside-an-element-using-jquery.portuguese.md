---
id: 564944c91be2204b269d51e3
title: Change Text Inside an Element Using jQuery
challengeType: 6
videoUrl: ''
localeTitle: Alterar texto dentro de um elemento usando jQuery
---

## Descrição
<section id="description"> Usando jQuery, você pode alterar o texto entre as tags de início e fim de um elemento. Você pode até mesmo alterar a marcação HTML. jQuery tem uma função chamada <code>.html()</code> que permite adicionar tags HTML e texto dentro de um elemento. Qualquer conteúdo anteriormente dentro do elemento será completamente substituído pelo conteúdo que você fornecer usando essa função. Aqui está como você iria reescrever e enfatizar o texto do nosso título: <code>$(&quot;h3&quot;).html(&quot;&lt;em&gt;jQuery Playground&lt;/em&gt;&quot;);</code> O jQuery também possui uma função similar chamada <code>.text()</code> que apenas altera o texto sem adicionar tags. Em outras palavras, essa função não avaliará nenhuma tag HTML passada a ela, mas a tratará como o texto com o qual você deseja substituir o conteúdo existente. Altere o botão com o ID <code>target4</code> , enfatizando seu texto. Confira este <a href="https://developer.mozilla.org/en/docs/Web/HTML/Element/em" target="_blank">link</a> para saber mais sobre a diferença entre <code>&lt;i&gt;</code> e <code>&lt;em&gt;</code> e seus usos. Observe que, embora a tag <code>&lt;i&gt;</code> tenha sido usada tradicionalmente para enfatizar o texto, ela já foi cooptada para uso como tag para ícones. A tag <code>&lt;em&gt;</code> agora é amplamente aceita como a tag para ênfase. Ou trabalharemos para este desafio. </section>

## Instruções
<section id="instructions">
</section>

## Testes
<section id='tests'>

```yml
tests:
  - text: Enfatize o texto no seu botão <code>target4</code> adicionando tags HTML.
    testString: 'assert.isTrue((/<em>|<i>\s*#target4\s*<\/em>|<\/i>/gi).test($("#target4").html()), "Emphasize the text in your <code>target4</code> button by adding HTML tags.");'
  - text: Certifique-se de que o texto permaneça inalterado.
    testString: 'assert($("#target4") && $("#target4").text().trim() === "#target4", "Make sure the text is otherwise unchanged.");'
  - text: Não altere nenhum outro texto.
    testString: 'assert.isFalse((/<em>|<i>/gi).test($("h3").html()), "Do not alter any other text.");'
  - text: Certifique-se de estar usando <code>.html()</code> e não <code>.text()</code> .
    testString: 'assert(code.match(/\.html\(/g), "Make sure you are using <code>.html()</code> and not <code>.text()</code>.");'
  - text: Certifique-se de selecionar o <code>button id=&quot;target4&quot;</code> com jQuery.
    testString: 'assert(code.match(/\$\(\s*?(\"|\")#target4(\"|\")\s*?\)\.html\(/), "Make sure to select <code>button id="target4"</code> with jQuery.");'

```

</section>

## Desafio
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");

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
