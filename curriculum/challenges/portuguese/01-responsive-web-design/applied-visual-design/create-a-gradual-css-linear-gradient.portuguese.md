---
id: 587d78a5367417b2b2512ad6
title: Create a Gradual CSS Linear Gradient
challengeType: 0
videoUrl: ''
localeTitle: Criar um gradiente linear de CSS gradual
---

## Description
<section id="description"> A aplicação de uma cor nos elementos HTML não se limita a um matiz plano. O CSS fornece a capacidade de usar transições de cores, também conhecidas como gradientes, em elementos. Isso é acessado através da função <code>linear-gradient()</code> da propriedade <code>background</code> . Aqui está a sintaxe geral: <code>background: linear-gradient(gradient_direction, color 1, color 2, color 3, ...);</code> O primeiro argumento especifica a direção a partir da qual a transição de cor começa - pode ser declarada como um grau, em que 90deg faz um gradiente vertical e 45deg é inclinado como uma barra invertida. Os argumentos a seguir especificam a ordem das cores usadas no gradiente. Exemplo: <code>background: linear-gradient(90deg, red, yellow, rgb(204, 204, 255));</code> </section>

## Instructions
<section id="instructions"> Use um <code>linear-gradient()</code> para o <code>background</code> do elemento <code>div</code> e defina-o a partir de uma direção de 35 graus para alterar a cor de <code>#CCFFFF</code> para <code>#FFCCCC</code> . <strong>Nota</strong> <br> Embora existam outras maneiras de especificar um valor de cor, como <code>rgb()</code> ou <code>hsl()</code> , use valores hexadecimais para esse desafio. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O elemento <code>div</code> deve ter um <code>background</code> <code>linear-gradient</code> com a direção e as cores especificadas.
    testString: 'assert(code.match(/background:\s*?linear-gradient\(35deg,\s*?(#CCFFFF|#CFF),\s*?(#FFCCCC|#FCC)\);/gi), "The <code>div</code> element should have a <code>linear-gradient</code> <code>background</code> with the specified direction and colors.");'

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
    margin: 50px auto;

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
