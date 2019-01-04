---
id: 587d7dbf367417b2b2512bba
title: Use @each to Map Over Items in a List
challengeType: 0
videoUrl: ''
localeTitle: Use @each para mapear itens em uma lista
---

## Description
<section id="description"> O último desafio mostrou como o <code>@for</code> diretiva usa um valor inicial e final para fazer um loop em um determinado número de vezes. O Sass também oferece a diretiva <code>@each</code> que faz um loop sobre cada item em uma lista ou mapa. Em cada iteração, a variável é atribuída ao valor atual da lista ou do mapa. <blockquote> @each $ color em azul, vermelho, verde { <br> . # {$ color} -text {color: $ color;} <br> } </blockquote> Um mapa tem uma sintaxe ligeiramente diferente. Aqui está um exemplo: <blockquote> $ colors: (color1: azul, color2: vermelho, color3: verde); <br><br> @ cada tecla $, $ cor em $ cores { <br> . # {$ color} -text {color: $ color;} <br> } </blockquote> Observe que a variável <code>$key</code> é necessária para referenciar as chaves no mapa. Caso contrário, o CSS compilado teria <code>color1</code> , <code>color2</code> ... nele. Ambos os exemplos de código acima são convertidos no seguinte CSS: <blockquote> .blue-text { <br> cor azul; <br> } <br><br> .red-text { <br> cor vermelha; <br> } <br><br> .green-text { <br> cor verde; <br> } </blockquote></section>

## Instructions
<section id="instructions"> Escreva uma diretiva <code>@each</code> que passe por uma lista: <code>blue, black, red</code> e atribua cada variável a uma classe <code>.color-bg</code> , onde a parte &quot;color&quot; muda para cada item. Cada classe deve definir a <code>background-color</code> da respectiva cor. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve usar a diretiva <code>@each</code> .
    testString: 'assert(code.match(/@each /g), "Your code should use the <code>@each</code> directive.");'
  - text: Sua classe <code>.blue-bg</code> deve ter uma <code>background-color</code> de fundo azul.
    testString: 'assert($(".blue-bg").css("background-color") == "rgb(0, 0, 255)", "Your <code>.blue-bg</code> class should have a <code>background-color</code> of blue.");'
  - text: Sua classe <code>.black-bg</code> deve ter uma <code>background-color</code> de fundo preta.
    testString: 'assert($(".black-bg").css("background-color") == "rgb(0, 0, 0)", "Your <code>.black-bg</code> class should have a <code>background-color</code> of black.");'
  - text: Sua classe <code>.red-bg</code> deve ter uma <code>background-color</code> de fundo vermelha.
    testString: 'assert($(".red-bg").css("background-color") == "rgb(255, 0, 0)", "Your <code>.red-bg</code> class should have a <code>background-color</code> of red.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style type='text/sass'>



  div {
    height: 200px;
    width: 200px;
  }
</style>

<div class="blue-bg"></div>
<div class="black-bg"></div>
<div class="red-bg"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
