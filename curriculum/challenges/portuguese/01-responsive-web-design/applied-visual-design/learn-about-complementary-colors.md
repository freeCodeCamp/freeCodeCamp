---
id: 587d78a3367417b2b2512ad1
title: Aprender sobre cores complementares
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MD3Tr'
forumTopicId: 301056
dashedName: learn-about-complementary-colors
---

# --description--

A teoria da cor e seu impacto no design é um tópico profundo e apenas o básico será abordado nos próximos desafios. Em um site, a cor pode chamar a atenção para o conteúdo, despertar emoções ou criar harmonia visual. Usar diferentes combinações de cores pode realmente mudar a aparência de um site, e pode ser necessário dedicar um bom tempo para escolher uma paleta de cores que combine com o conteúdo.

O círculo cromático é uma ferramenta útil para visualizar como as cores se relacionam umas com as outras - é um círculo onde cores semelhantes são vizinhas e cores diferentes estão mais afastadas. Quando duas cores estão em lados opostas na roda, elas são chamadas de cores complementares. Elas têm a característica de que, quando combinadas, se "cancelam" e criam uma cor cinza. No entanto, quando colocadas lado a lado, essas cores parecem mais vibrantes e produzem um forte contraste visual.

Alguns exemplos de cores complementares, e seus códigos hexadecimais, são:

<blockquote>vermelho (#FF0000) e ciano (#00FFFF)<br>verde (#00FF00) e magenta (#FF00FF)<br>azul (#0000FF) e amarelo (#FFFF00)</blockquote>

Isso é diferente do modelo de cores RYB desatualizado que muitos de nós aprendemos na escola, que tem cores primárias e complementares diferentes. A teoria das cores moderna usa o modelo RGB aditivo (comum para telas) e o modelo CMY (K) subtrativo (comum na impressão).

Na Internet, existem muitas ferramentas de seleção de cores que oferecem a opção de encontrar o complemento de uma cor.

**Observação:** usar cores pode ser uma maneira poderosa de adicionar interesse visual a uma página. No entanto, a cor por si só não deve ser usada como a única forma de transmitir informações importantes. Tenha em mente que usuários com deficiência visual podem não entender esse conteúdo. Esse problema será abordado com mais detalhes nos desafios de acessibilidade aplicada.

# --instructions--

Altere a propriedade `background-color` das classes `blue` (azul) e `yellow` (amarelo) para as cores respectivas. Observe como as cores parecem diferentes uma da outra quando comparadas com o fundo branco.

# --hints--

O elemento `div` com a classe `blue` deve ter a propriedade `background-color` com o valor blue (azul).

```js
assert($('.blue').css('background-color') == 'rgb(0, 0, 255)');
```

O elemento `div` com a classe `yellow` deve ter a propriedade `background-color` com o valor amarelo (yellow).

```js
assert($('.yellow').css('background-color') == 'rgb(255, 255, 0)');
```

# --seed--

## --seed-contents--

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

# --solutions--

```html
<style>
  body {
    background-color: #FFFFFF;
  }
  .blue {
    background-color: blue;
  }
  .yellow {
    background-color: yellow;
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
