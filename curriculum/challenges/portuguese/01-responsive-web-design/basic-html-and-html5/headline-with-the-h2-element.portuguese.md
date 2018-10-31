---
id: bad87fee1348bd9aedf0887a
title: Headline with the h2 Element
challengeType: 0
videoUrl: ''
localeTitle: Título com o elemento h2
---

## Description
<section id="description"> Nas próximas lições, criaremos um aplicativo web de fotos para gatos em HTML5, peça por peça. O elemento <code>h2</code> que você adicionará nesta etapa adicionará um cabeçalho de nível dois à página da web. Esse elemento informa ao navegador sobre a estrutura do seu site. <code>h1</code> elementos <code>h1</code> são freqüentemente usados ​​para cabeçalhos principais, enquanto os elementos <code>h2</code> são geralmente usados ​​para subtítulos. Há também elementos <code>h3</code> , <code>h4</code> , <code>h5</code> e <code>h6</code> para indicar diferentes níveis de subtítulos. </section>

## Instructions
<section id="instructions"> Adicione uma tag <code>h2</code> que diga &quot;CatPhotoApp&quot; para criar um segundo <code>element</code> HTML abaixo do elemento <code>h1</code> &quot;Hello World&quot;. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Crie um elemento <code>h2</code> .
    testString: 'assert(($("h2").length > 0), "Create an <code>h2</code> element.");'
  - text: Certifique-se de que seu elemento <code>h2</code> tenha uma tag de fechamento.
    testString: 'assert(code.match(/<\/h2>/g) && code.match(/<\/h2>/g).length === code.match(/<h2>/g).length, "Make sure your <code>h2</code> element has a closing tag.");'
  - text: Seu elemento <code>h2</code> deve ter o texto &quot;CatPhotoApp&quot;.
    testString: 'assert.isTrue((/cat(\s)?photo(\s)?app/gi).test($("h2").text()), "Your <code>h2</code> element should have the text "CatPhotoApp".");'
  - text: Seu elemento <code>h1</code> deve ter o texto &quot;Hello World&quot;.
    testString: 'assert.isTrue((/hello(\s)+world/gi).test($("h1").text()), "Your <code>h1</code> element should have the text "Hello World".");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h1>Hello World</h1>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
