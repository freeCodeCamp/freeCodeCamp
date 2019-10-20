---
id: 587d774e367417b2b2512aa0
title: Wrap Content in the article Element
challengeType: 0
videoUrl: ''
localeTitle: Envolva o Conteúdo no artigo Element
---

## Description
<section id="description"> <code>article</code> é outro dos novos elementos HTML5 que adiciona significado semântico à sua marcação. <code>Article</code> é um elemento de segmentação e é usado para envolver conteúdo independente e autossufuciente. A tag funciona bem com publicações de blog, postagens em fóruns ou artigos de notícias. Determinar se o conteúdo pode ser isolado é geralmente uma questão de decisão, mas existem alguns testes simples que você pode utilizar. Pergunte a si mesmo se você removesse todo o contexto adjacente, esse conteúdo ainda faria sentido? Da mesma forma para texto, o conteúdo faria sentido se estivesse em um feed RSS? Lembre-se de que pessoas que usam tecnologias assistivas dependem de uma marcação organizada e semanticamente significativa para compreender melhor seu trabalho. <strong>Nota sobre <code>section</code> e <code>div</code></strong> <br> O elemento <code>section</code> também é novo no HTML5 e tem um significado semântico ligeiramente diferente de <code>article</code>. Um <code>article</code> é para conteúdo independente e um <code>section</code> é para agrupar conteúdos relacionados tematicamente. Eles podem ser usados uns dentro dos outros, conforme necessário. Por exemplo, se um livro é o <code>article</code> , então cada capítulo é um <code>section</code> . Quando não houver relação entre grupos de conteúdo, use um <code>div</code> . <blockquote> &lt;div&gt; - agrupa conteúdo <br> &lt;section&gt; - agrupa conteúdo relacionado <br> &lt;article&gt; - agrupa conteúdo independente e autossufuciente <br></blockquote></section>

## Instructions
<section id="instructions"> Camper Cat usou tags <code>article</code> para envolver as postagens em sua página de blog, mas ele se esqueceu de usá-las na primeira postagem. Altere a tag <code>div</code> para usar uma tag <code>article</code> em seu lugar. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve ter três tags <code>article</code> .
    testString: 'assert($("article").length == 3, "Your code should have three <code>article</code> tags.");'
  - text: Seu código não deve ter tags <code>div</code> .
    testString: 'assert($("div").length == 0, "Your code should not have any <code>div</code> tags.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h1>Reflexões Profundas com o Mestre Camper Cat</h1>
<main>
  <div>
    <h2>Os Arquivos Garfield: Lasanha como Combustível de Treinamento?</h2>
    <p>A internet está repleta de diversas opiniões sobre paradigmas nutricionais, da dieta paleo de erva do gato a limpezas de bolas de pelo. Contudo, vamos voltar nossa atenção para um combustível fitness muitas vezes negligenciado e examinar a trifeta proteína-carboidrato-nhac que é a lasanha...</p>
  </div>

  <img src="samuraiSwords.jpeg" alt="">

  <article>
    <h2>Derrotando seu Adversário: o Ponto Vermelho é Nosso!</h2>
    <p>Felinos no mundo inteiro têm travado uma guerra contra o mais persistente dos inimigos. Esse nêmesis vermelho combina astúcia furtiva com velocidade da luz. Mas cabeça erguida, companheiros guerreiros, nosso tempo de vitória pode estar se aproximando...</p>
  </article>

  <img src="samuraiSwords.jpeg" alt="">

  <article>
    <h2>Chuck Norris é gateiro?</h2>
    <p>Chuck Norris é amplamente considerado como o principal artista marcial do planeta, e é uma completa coincidência que qualquer um que discorde com esse fato misteriosamente desapareça pouco tempo depois. Mas a verdadeira questão é: ele é gateiro?...</p>
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
