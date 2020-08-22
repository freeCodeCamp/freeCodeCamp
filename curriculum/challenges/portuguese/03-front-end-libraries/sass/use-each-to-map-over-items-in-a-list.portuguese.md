---
id: 587d7dbf367417b2b2512bba
title: Use @each to Map Over Items in a List
challengeType: 0
videoUrl: ''
localeTitle: Use @each para mapear itens em uma lista
---

## Description
<section id="description">

O último desafio mostrou como a diretiva <code>@for</code> usa um valor inicial e final para repetir um certo número de vezes. O Sass também oferece a diretiva <code>@each</code>, que percorre cada item em uma lista ou mapa. Em cada iteração, a variável é atribuída ao valor atual da lista ou mapa.

```scss
@each $color in blue, red, green {
  .#{$color}-text {color: $color;}
}
```

Um mapa tem uma sintaxe ligeiramente diferente. Aqui está um exemplo:

```scss
$colors: (color1: blue, color2: red, color3: green);

@each $key, $color in $colors {
  .#{$color}-text {color: $color;}
}
```

Observe que a variável <code>$key</code> é necessária para referenciar as chaves no mapa. Caso contrário, o CSS compilado teria <code>color1</code>, <code>color2</code> ... nele.
Os dois exemplos de código acima são convertidos no seguinte CSS:

```scss
.blue-text {
  color: blue;
}

.red-text {
  color: red;
}

.green-text {
  color: green;
}
```

</section>

## Instructions
<section id="instructions">

Escreva uma diretiva <code>@each</code> que passe por uma lista: <code>blue, black, red</code> e atribua cada variável a uma classe <code>.color-bg</code> , onde a parte &quot;color&quot; muda para cada item. Cada classe deve definir a <code>background-color</code> da respectiva cor.

</section>

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
