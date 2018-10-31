---
id: 587d774c367417b2b2512a9d
title: Know When Alt Text Should be Left Blank
challengeType: 0
videoUrl: ''
localeTitle: Saiba quando o texto alternativo deve ser deixado em branco
---

## Description
<section id="description"> No último desafio, você aprendeu que incluir um atributo <code>alt</code> em img tags é obrigatório. No entanto, às vezes, as imagens são agrupadas com uma legenda que já está descrevendo ou são usadas apenas para decoração. Nestes casos, o texto <code>alt</code> pode parecer redundante ou desnecessário. Em situações em que uma imagem já é explicada com conteúdo de texto ou não adiciona significado a uma página, a <code>img</code> ainda precisa de um atributo <code>alt</code> , mas pode ser definida como uma string vazia. Aqui está um exemplo: <code>&lt;img src=&quot;visualDecoration.jpeg&quot; alt=&quot;&quot;&gt;</code> As imagens de fundo geralmente também se enquadram no rótulo &#39;decorativo&#39;. No entanto, eles são normalmente aplicados com regras CSS e, portanto, não fazem parte do processo de leitores de tela de marcação. <strong>Nota</strong> <br> Para imagens com uma legenda, você ainda pode querer incluir texto <code>alt</code> , pois ajuda os mecanismos de pesquisa a catalogar o conteúdo da imagem. </section>

## Instructions
<section id="instructions"> O Camper Cat codificou uma página de esqueleto para a parte do blog do seu site. Ele está planejando adicionar uma ruptura visual entre seus dois artigos com uma imagem decorativa de uma espada samurai. Adicione um atributo <code>alt</code> à tag <code>img</code> e configure-o para uma string vazia. (Observe que a imagem <code>src</code> não está vinculada a um arquivo real - não se preocupe se não há espadas no visor). </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Sua tag <code>img</code> deve ter um atributo <code>alt</code> .
    testString: 'assert(!($("img").attr("alt") == undefined), "Your <code>img</code> tag should have an <code>alt</code> attribute.");'
  - text: O atributo <code>alt</code> deve ser definido para uma string vazia.
    testString: 'assert($("img").attr("alt") == "", "The <code>alt</code> attribute should be set to an empty string.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h1>Deep Thoughts with Master Camper Cat</h1>
<article>
  <h2>Defeating your Foe: the Red Dot is Ours!</h2>
  <p>To Come...</p>
</article>

<img src="samuraiSwords.jpeg">

<article>
  <h2>Is Chuck Norris a Cat Person?</h2>
  <p>To Come...</p>
</article>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
