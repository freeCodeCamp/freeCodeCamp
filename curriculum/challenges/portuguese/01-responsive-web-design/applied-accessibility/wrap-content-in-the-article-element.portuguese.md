---
id: 587d774e367417b2b2512aa0
title: Wrap Content in the article Element
challengeType: 0
videoUrl: ''
localeTitle: Embrulhe conteúdo no artigo Elemento
---

## Description
<section id="description"> <code>article</code> é outro dos novos elementos HTML5 que adiciona significado semântico à sua marcação. <code>Article</code> é um elemento de corte e é usado para envolver conteúdo independente e independente. A tag funciona bem com entradas de blog, postagens no fórum ou artigos de notícias. Determinar se o conteúdo pode ficar sozinho é geralmente uma avaliação, mas existem alguns testes simples que você pode usar. Pergunte a si mesmo se você removeu todo o contexto circundante, esse conteúdo ainda faria sentido? Da mesma forma, para o texto, o conteúdo se sustentaria se estivesse em um feed RSS? Lembre-se de que as pessoas que usam tecnologias assistivas dependem de uma marcação organizada e significativa para compreender melhor seu trabalho. <strong>Nota sobre a <code>section</code> e <code>div</code></strong> <br> O elemento <code>section</code> também é novo no HTML5 e tem um significado semântico ligeiramente diferente do que o <code>article</code> . Um <code>article</code> é para conteúdo autônomo e uma <code>section</code> é para agrupar conteúdo relacionado tematicamente. Eles podem ser usados ​​uns dentro dos outros, conforme necessário. Por exemplo, se um livro é o <code>article</code> , então cada capítulo é uma <code>section</code> . Quando não houver relacionamento entre grupos de conteúdo, use um <code>div</code> . <blockquote> &lt;div&gt; - agrupa o conteúdo <br> &lt;section&gt; - agrupa conteúdo relacionado <br> &lt;article&gt; - agrupa conteúdo independente e autocontido <br></blockquote></section>

## Instructions
<section id="instructions"> Camper Cat usou tags de <code>article</code> para embrulhar as postagens em sua página do blog, mas ele se esqueceu de usá-las na parte superior. Altere a tag <code>div</code> para usar uma tag de <code>article</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve ter três tags de <code>article</code> .
    testString: 'assert($("article").length == 3, "Your code should have three <code>article</code> tags.");'
  - text: Seu código não deve ter tags <code>div</code> .
    testString: 'assert($("div").length == 0, "Your code should not have any <code>div</code> tags.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h1>Deep Thoughts with Master Camper Cat</h1>
<main>
  <div>
    <h2>The Garfield Files: Lasagna as Training Fuel?</h2>
    <p>The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses. But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that is lasagna...</p>
  </div>

  <img src="samuraiSwords.jpeg" alt="">

  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightening speed. But chin up, fellow fighters, our time for victory may soon be near...</p>
  </article>

  <img src="samuraiSwords.jpeg" alt="">

  <article>
    <h2>Is Chuck Norris a Cat Person?</h2>
    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
</main>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
