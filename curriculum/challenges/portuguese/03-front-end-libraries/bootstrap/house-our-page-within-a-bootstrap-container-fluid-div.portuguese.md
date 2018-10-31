---
id: bad87fee1348bd9aec908746
title: House our page within a Bootstrap container-fluid div
challengeType: 0
videoUrl: ''
localeTitle: Abrigue nossa página dentro de um div de container-fluido de Bootstrap
---

## Description
<section id="description"> Agora, vamos garantir que todo o conteúdo da sua página seja responsivo para dispositivos móveis. Vamos aninhar seu elemento <code>h3</code> dentro de um elemento <code>div</code> com a classe <code>container-fluid</code> . </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu elemento <code>div</code> deve ter a classe <code>container-fluid</code> .
    testString: 'assert($("div").hasClass("container-fluid"), "Your <code>div</code> element should have the class <code>container-fluid</code>.");'
  - text: Certifique-se de que cada um dos seus elementos <code>div</code> tenha uma tag de fechamento.
    testString: 'assert(code.match(/<\/div>/g) && code.match(/<div/g) && code.match(/<\/div>/g).length === code.match(/<div/g).length, "Make sure each of your <code>div</code> elements has a closing tag.");'
  - text: Aninhe seu elemento <code>h3</code> dentro de um elemento <code>div</code> .
    testString: 'assert($("div").children("h3").length >0, "Nest your <code>h3</code> element inside a <code>div</code> element.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h3 class="text-primary text-center">jQuery Playground</h3>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
