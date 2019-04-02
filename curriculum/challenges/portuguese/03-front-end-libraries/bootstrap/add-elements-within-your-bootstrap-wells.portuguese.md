---
id: bad87fee1348bd9aec908849
title: Add Elements within Your Bootstrap Wells
challengeType: 0
videoUrl: ''
localeTitle: Adicionar elementos dentro dos seus poços de bootstrap
---

## Descrição
<section id="description"> Agora temos vários elementos <code>div</code> em cada coluna da nossa linha. Isso é tão profundo quanto precisaremos ir. Agora podemos adicionar nossos elementos de <code>button</code> . Alinhe três elementos de <code>button</code> dentro de cada um dos elementos do seu <code>well</code> <code>div</code> . </section>

## Instruções
<section id="instructions">
</section>

## Testes
<section id='tests'>

```yml
tests:
  - text: Alinhe três elementos de <code>button</code> dentro de cada um dos seus elementos <code>div</code> com classe <code>well</code> .
    testString: 'assert($("div.well:eq(0)").children("button").length === 3 && $("div.well:eq(1)").children("button").length === 3, "Nest three <code>button</code> elements within each of your <code>div</code> elements with class <code>well</code>.");'
  - text: Você deve ter um total de 6 elementos de <code>button</code> .
    testString: 'assert($("button") && $("button").length > 5, "You should have a total of 6 <code>button</code> elements.");'
  - text: Certifique-se de que todos os seus elementos de <code>button</code> tenham tags de fechamento.
    testString: 'assert(code.match(/<\/button>/g) && code.match(/<button/g) && code.match(/<\/button>/g).length === code.match(/<button/g).length, "Make sure all your <code>button</code> elements have closing tags.");'

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



      </div>
    </div>
    <div class="col-xs-6">
      <div class="well">



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
