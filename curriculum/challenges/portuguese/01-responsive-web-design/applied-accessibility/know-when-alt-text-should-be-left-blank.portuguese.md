---
id: 587d774c367417b2b2512a9d
title: Know When Alt Text Should be Left Blank
challengeType: 0
videoUrl: ''
localeTitle: Saiba quando o texto alt deve ser deixado em branco
---

## Description
<section id="description"> No último desafio, você aprendeu que incluir um atributo <code>alt</code> em tags img é obrigatório. No entanto, às vezes, imagens são agrupadas com uma legenda que já está as descrevendo ou são usadas apenas para decoração. Nestes casos, o texto <code>alt</code> pode parecer redundante ou desnecessário. Em situações em que uma imagem já é explicada com conteúdo de texto ou não adiciona significado a uma página, a <code>img</code> ainda precisa de um atributo <code>alt</code> , mas ele pode ser definido como uma string vazia. Aqui está um exemplo: <code>&lt;img src=&quot;visualDecoration.jpeg&quot; alt=&quot;&quot;&gt;</code> Imagens de fundo geralmente também se enquadram no rótulo &#39;decorativo&#39;. No entanto, elas são normalmente aplicadas com regras CSS e, portanto, não fazem parte da marcação que os leitores de tela processam. <strong>Nota</strong> <br> Para imagens com legenda, você ainda pode querer incluir um texto <code>alt</code> , pois isso ajuda os mecanismos de pesquisa a catalogar o conteúdo da imagem. </section>

## Instructions
<section id="instructions"> Camper Cat codificou uma página esqueleto para a parte do blog do seu site. Ele está planejando adicionar uma quebra visual entre seus dois artigos com uma imagem decorativa de uma espada samurai. Adicione um atributo <code>alt</code> à tag <code>img</code> e defina-o como uma string vazia. (Observe que o <code>src</code> da imagem não é um link para um arquivo de verdade - não se preocupe que não há espadas na tela). </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Sua tag <code>img</code> deve ter um atributo <code>alt</code> .
    testString: 'assert(!($("img").attr("alt") == undefined), "Your <code>img</code> tag should have an <code>alt</code> attribute.");'
  - text: O atributo <code>alt</code> deve ser definido como uma string vazia.
    testString: 'assert($("img").attr("alt") == "", "The <code>alt</code> attribute should be set to an empty string.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h1>Reflexões Profundas com o Mestre Camper Cat</h1>
<article>
  <h2>Derrotando seu Adversário: o Ponto Vermelho é Nosso!</h2>
  <p>Em breve...</p>
</article>

<img src="samuraiSwords.jpeg">

<article>
  <h2>Chuck Norris é gateiro?</h2>
  <p>Em breve...</p>
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
