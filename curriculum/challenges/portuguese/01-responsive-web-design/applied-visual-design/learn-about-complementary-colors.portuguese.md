---
id: 587d78a3367417b2b2512ad1
title: Learn about Complementary Colors
challengeType: 0
videoUrl: ''
localeTitle: Saiba mais sobre cores complementares
---

## Description
<section id="description"> A teoria da cor e seu impacto no design é um tópico profundo e apenas os aspectos básicos são abordados nos desafios a seguir. Em um site, a cor pode chamar a atenção para o conteúdo, evocar emoções ou criar harmonia visual. Usar diferentes combinações de cores pode realmente mudar a aparência de um site, e muito pensamento pode ser usado para escolher uma paleta de cores que funcione com seu conteúdo. A roda de cores é uma ferramenta útil para visualizar como as cores se relacionam umas com as outras - é um círculo onde tons semelhantes são vizinhos e tons diferentes são mais distantes. Quando duas cores estão opostas uma à outra na roda, elas são chamadas de cores complementares. Eles têm a característica de que, se forem combinados, &quot;cancelam&quot; um ao outro e criam uma cor cinza. No entanto, quando colocadas lado a lado, essas cores parecem mais vibrantes e produzem um forte contraste visual. Alguns exemplos de cores complementares com seus códigos hexadecimais são: <blockquote> vermelho (# FF0000) e ciano (# 00FFFF) <br> verde (# 00FF00) e magenta (# FF00FF) <br> azul (# 0000FF) e amarelo (# FFFF00) </blockquote> Isso é diferente do modelo de cores RYB desatualizado que muitos de nós aprendemos na escola, que tem cores primárias e complementares diferentes. A moderna teoria de cores usa o modelo RGB aditivo (como na tela de um computador) e o modelo CMY (K) subtrativo (como na impressão). Leia <a href="https://en.wikipedia.org/wiki/Color_model" target="_blank">aqui</a> para mais informações sobre este assunto complexo. Existem muitas ferramentas de coleta de cores disponíveis on-line que têm a opção de encontrar o complemento de uma cor. <strong>Nota</strong> <br> Para todos os desafios de cores: O uso de cores pode ser uma maneira poderosa de adicionar interesse visual a uma página. No entanto, a cor sozinha não deve ser usada como a única maneira de transmitir informações importantes porque os usuários com deficiências visuais podem não entender esse conteúdo. Essa questão será abordada com mais detalhes nos desafios da acessibilidade aplicada. </section>

## Instructions
<section id="instructions"> Altere a propriedade <code>background-color</code> das classes <code>blue</code> e <code>yellow</code> para suas respectivas cores. Observe como as cores parecem diferentes uma ao lado da outra em relação ao fundo branco. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O elemento <code>div</code> com a classe <code>blue</code> deve ter uma <code>background-color</code> de fundo azul.
    testString: 'assert($(".blue").css("background-color") == "rgb(0, 0, 255)", "The <code>div</code> element with class <code>blue</code> should have a <code>background-color</code> of blue.");'
  - text: O elemento <code>div</code> com a classe <code>yellow</code> deve ter uma <code>background-color</code> de <code>background-color</code> de amarelo.
    testString: 'assert($(".yellow").css("background-color") == "rgb(255, 255, 0)", "The <code>div</code> element with class <code>yellow</code> should have a <code>background-color</code> of yellow.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  body {
    background-color: #FFFFFF;
  }
  .blue {
    background-color: #000000;
  }
  .yellow {
    background-color: #000000;
  }
  div {
    display: inline-block;
    height: 100px;
    width: 100px;
  }
</style>
<div class="blue"></div>
<div class="yellow"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
