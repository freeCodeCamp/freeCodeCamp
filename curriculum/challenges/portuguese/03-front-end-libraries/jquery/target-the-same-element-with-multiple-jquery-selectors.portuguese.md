---
id: bad87fee1348bd9aed908626
title: Target the Same Element with Multiple jQuery Selectors
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
challengeType: 6
videoUrl: ''
localeTitle: Segmente o mesmo elemento com vários seletores jQuery
---

## Description
<section id="description"> Agora você conhece três maneiras de segmentar elementos: por tipo: <code>$(&quot;button&quot;)</code> , por classe: <code>$(&quot;.btn&quot;)</code> e por id <code>$(&quot;#target1&quot;)</code> . Embora seja possível adicionar várias classes em uma única chamada <code>.addClass()</code> , vamos incluí-las no mesmo elemento de <em>três maneiras distintas</em> . Usando <code>.addClass()</code> , adicione somente uma classe por vez ao mesmo elemento, de três maneiras diferentes: Adicione a classe <code>animated</code> a todos os elementos com o <code>button</code> type. Adicione a classe <code>shake</code> a todos os botões com a classe <code>.btn</code> . Adicione a classe <code>btn-primary</code> ao botão com id <code>#target1</code> . <strong>Nota</strong> <br> Você deve segmentar apenas um elemento e adicionar apenas uma classe por vez. No total, seus três seletores individuais acabarão adicionando as três classes <code>shake</code> , <code>animated</code> e <code>btn-primary</code> a <code>#target1</code> . </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Use o seletor <code>$(&quot;button&quot;)</code> .
    testString: 'assert(code.match(/\$\s*?\(\s*?(?:"|")\s*?button\s*?(?:"|")/gi), "Use the <code>$&#40"button"&#41</code> selector.");'
  - text: Use o seletor <code>$(&quot;.btn&quot;)</code> .
    testString: 'assert(code.match(/\$\s*?\(\s*?(?:"|")\s*?\.btn\s*?(?:"|")/gi), "Use the <code>$&#40".btn"&#41</code> selector.");'
  - text: 'Use o seletor <code>$(&quot;#target1&quot;)</code> .'
    testString: 'assert(code.match(/\$\s*?\(\s*?(?:"|")\s*?#target1\s*?(?:"|")/gi), "Use the <code>$&#40"#target1"&#41</code> selector.");'
  - text: Adicione apenas uma classe a cada um dos seus três seletores.
    testString: 'assert(code.match(/addClass/g) && code.match(/addClass\s*?\(\s*?("|")\s*?[\w-]+\s*?\1\s*?\)/g).length > 2, "Only add one class with each of your three selectors.");'
  - text: 'Seu elemento <code>#target1</code> deve ter as turmas <code>animated</code> , <code>shake</code> e <code>btn-primary</code> .'
    testString: 'assert($("#target1").hasClass("animated") && $("#target1").hasClass("shake") && $("#target1").hasClass("btn-primary"), "Your <code>#target1</code> element should have the classes <code>animated</code>&#130; <code>shake</code> and <code>btn-primary</code>.");'
  - text: Use apenas o jQuery para adicionar essas classes ao elemento.
    testString: 'assert(!code.match(/class.*animated/g), "Only use jQuery to add these classes to the element.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  $(document).ready(function() {

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
