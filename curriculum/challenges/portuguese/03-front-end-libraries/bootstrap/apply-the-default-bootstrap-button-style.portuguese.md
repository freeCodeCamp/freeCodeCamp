---
id: bad87fee1348bd9aec908850
title: Apply the Default Bootstrap Button Style
challengeType: 0
videoUrl: ''
localeTitle: Aplicar o estilo padrão do botão de inicialização
---

## Description
<section id="description"> Bootstrap tem outra classe de botões chamada <code>btn-default</code> . Aplique as classes <code>btn-default</code> <code>btn</code> e <code>btn-default</code> a cada um dos seus elementos de <code>button</code> . </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Aplique a classe <code>btn</code> a cada um dos seus elementos de <code>button</code> .
    testString: 'assert($(".btn").length > 5, "Apply the <code>btn</code> class to each of your <code>button</code> elements.");'
  - text: Aplique a classe <code>btn-default</code> a cada um dos seus elementos de <code>button</code> .
    testString: 'assert($(".btn-default").length > 5, "Apply the <code>btn-default</code> class to each of your <code>button</code> elements.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <div class="well">
        <button></button>
        <button></button>
        <button></button>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="well">
        <button></button>
        <button></button>
        <button></button>
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
