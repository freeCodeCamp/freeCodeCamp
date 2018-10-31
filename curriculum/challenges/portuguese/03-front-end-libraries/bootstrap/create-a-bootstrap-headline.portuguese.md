---
id: bad87fee1348bd9aec908846
title: Create a Bootstrap Headline
challengeType: 0
videoUrl: ''
localeTitle: Criar um título de bootstrap
---

## Description
<section id="description"> Agora vamos construir algo do zero para praticar nossas habilidades em HTML, CSS e Bootstrap. Construiremos um playground da jQuery, que logo usaremos em nossos desafios da jQuery. Para começar, crie um elemento <code>h3</code> , com o texto <code>jQuery Playground</code> . <code>h3</code> cor ao elemento <code>h3</code> com a classe Bootstrap <code>text-primary</code> ao <code>text-primary</code> e centralize-o com a classe Bootstrap do <code>text-center</code> . </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Adicione um elemento <code>h3</code> à sua página.
    testString: 'assert($("h3") && $("h3").length > 0, "Add a <code>h3</code> element to your page.");'
  - text: Certifique-se de que seu elemento <code>h3</code> tenha uma tag de fechamento.
    testString: 'assert(code.match(/<\/h3>/g) && code.match(/<h3/g) && code.match(/<\/h3>/g).length === code.match(/<h3/g).length, "Make sure your <code>h3</code> element has a closing tag.");'
  - text: Seu elemento <code>h3</code> deve ser colorido aplicando a classe <code>text-primary</code>
    testString: 'assert($("h3").hasClass("text-primary"), "Your <code>h3</code> element should be colored by applying the class <code>text-primary</code>");'
  - text: Seu elemento <code>h3</code> deve ser centrado aplicando o <code>text-center</code> da turma
    testString: 'assert($("h3").hasClass("text-center"), "Your <code>h3</code> element should be centered by applying the class <code>text-center</code>");'
  - text: Seu elemento <code>h3</code> deve ter o texto <code>jQuery Playground</code> .
    testString: 'assert.isTrue((/jquery(\s)+playground/gi).test($("h3").text()), "Your <code>h3</code> element should have the text <code>jQuery Playground</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
