---
id: 587d78a5367417b2b2512ad7
title: Use a CSS Linear Gradient to Create a Striped Element
challengeType: 0
videoUrl: ''
localeTitle: Use um gradiente linear CSS para criar um elemento distribuído
---

## Description
<section id="description"> A função de <code>repeating-linear-gradient()</code> é muito semelhante ao <code>linear-gradient()</code> com a principal diferença que repete o padrão de gradiente especificado. <code>repeating-linear-gradient()</code> aceita uma variedade de valores, mas para simplificar, você trabalhará com um valor de ângulo e valores de parada de cor neste desafio. O valor do ângulo é a direção do gradiente. As paradas de cores são como valores de largura que marcam onde uma transição ocorre e são fornecidas com uma porcentagem ou um número de pixels. No exemplo demonstrado no editor de código, o gradiente começa com a cor <code>yellow</code> em 0 pixels, que se mistura com a segunda cor <code>blue</code> a 40 pixels de distância do início. Como a próxima parada de cor também é de 40 pixels, o gradiente muda imediatamente para a terceira cor <code>green</code> , que se mistura com o quarto valor de cor <code>red</code> , a 80 pixels do início do gradiente. Para este exemplo, é útil pensar nas paradas de cores como pares, onde cada duas cores se mesclam. <code>0px [yellow -- blend -- blue] 40px [green -- blend -- red] 80px</code> Se cada dois valores de parada de cor forem da mesma cor, a mesclagem não é perceptível porque está entre a mesma cor, seguida por uma transição difícil para a próxima cor, então você acaba com listras. </section>

## Instructions
<section id="instructions"> Faça listras alterando o <code>repeating-linear-gradient()</code> para usar um ângulo de gradiente de <code>45deg</code> , depois defina as duas primeiras cores para <code>yellow</code> e, finalmente, a segunda cor para <code>black</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O ângulo do <code>repeating-linear-gradient()</code> deve ser 45deg.
    testString: 'assert(code.match(/background:\s*?repeating-linear-gradient\(\s*?45deg/gi), "The angle of the <code>repeating-linear-gradient()</code> should be 45deg.");'
  - text: O ângulo do <code>repeating-linear-gradient()</code> não deve mais ser 90 graus
    testString: 'assert(!code.match(/90deg/gi), "The angle of the <code>repeating-linear-gradient()</code> should no longer be 90deg");'
  - text: A parada de cor em 0 pixels deve ser <code>yellow</code> .
    testString: 'assert(code.match(/yellow\s+?0(px)?/gi), "The color stop at 0 pixels should be <code>yellow</code>.");'
  - text: Uma parada de cor em 40 pixels deve ser <code>yellow</code> .
    testString: 'assert(code.match(/yellow\s+?40px/gi), "One color stop at 40 pixels should be <code>yellow</code>.");'
  - text: A segunda parada de cor em 40 pixels deve ser <code>black</code> .
    testString: 'assert(code.match(/yellow\s+?40px,\s*?black\s+?40px/gi), "The second color stop at 40 pixels should be <code>black</code>.");'
  - text: A última parada de cor em 80 pixels deve ser <code>black</code> .
    testString: 'assert(code.match(/black\s+?80px/gi), "The last color stop at 80 pixels should be <code>black</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>

  div{
    border-radius: 20px;
    width: 70%;
    height: 400px;
    margin:  50 auto;
    background: repeating-linear-gradient(
      90deg,
      yellow 0px,
      blue 40px,
      green 40px,
      red 80px
    );
  }

</style>

<div></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
