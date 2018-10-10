---
id: 587d78a4367417b2b2512ad3
title: Adjust the Color of Various Elements to Complementary Colors
challengeType: 0
videoUrl: ''
localeTitle: Ajuste a cor de vários elementos para cores complementares
---

## Description
<section id="description"> O desafio Complementary Colours mostrou que cores opostas na roda de cores podem fazer a outra parecer mais vibrante quando colocadas lado a lado. No entanto, o forte contraste visual pode ser chocante se for usado em excesso em um site e, às vezes, dificultar a leitura do texto se ele for colocado em um plano de fundo de cores complementares. Na prática, uma das cores geralmente é dominante e o complemento é usado para chamar a atenção visual para determinado conteúdo da página. </section>

## Instructions
<section id="instructions"> Esta página usará um tom de cerceta ( <code>#09A7A1</code> ) como a cor dominante, e seu complemento laranja ( <code>#FF790E</code> ) para destacar visualmente os botões de inscrição. Altere a <code>background-color</code> de segundo plano do <code>header</code> e do <code>footer</code> de preto para a cor da cerceta. Em seguida, altere a <code>color</code> texto <code>h2</code> para marcar também. Finalmente, mude a <code>background-color</code> de fundo do <code>button</code> para a cor laranja. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'O elemento de <code>header</code> deve ter uma <code>background-color</code> de <code>background-color</code> de # 09A7A1.'
    testString: 'assert($("header").css("background-color") == "rgb(9, 167, 161)", "The <code>header</code> element should have a <code>background-color</code> of #09A7A1.");'
  - text: 'O elemento de <code>footer</code> deve ter uma <code>background-color</code> de <code>background-color</code> de # 09A7A1.'
    testString: 'assert($("footer").css("background-color") == "rgb(9, 167, 161)", "The <code>footer</code> element should have a <code>background-color</code> of #09A7A1.");'
  - text: 'O elemento <code>h2</code> deve ter uma <code>color</code> de # 09A7A1.'
    testString: 'assert($("h2").css("color") == "rgb(9, 167, 161)", "The <code>h2</code> element should have a <code>color</code> of #09A7A1.");'
  - text: 'O elemento de <code>button</code> deve ter uma <code>background-color</code> de <code>background-color</code> de # FF790E.'
    testString: 'assert($("button").css("background-color") == "rgb(255, 121, 14)", "The <code>button</code> element should have a <code>background-color</code> of #FF790E.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  body {
    background-color: white;
  }
  header {
    background-color: black;
    color: white;
    padding: 0.25em;
  }
  h2 {
    color: black;
  }
  button {
    background-color: white;
  }
  footer {
    background-color: black;
    color: white;
    padding: 0.5em;
  }
</style>
<header>
  <h1>Cooking with FCC!</h1>
</header>
<main>
  <article>
    <h2>Machine Learning in the Kitchen</h2>
    <p>Join this two day workshop that walks through how to implement cutting-edge snack-getting algorithms with a command line interface. Coding usually involves writing exact instructions, but sometimes you need your computer to execute flexible commands, like <code>fetch Pringles</code>.</p>
    <button>Sign Up</button>
  </article>
  <article>
    <h2>Bisection Vegetable Chopping</h2>
    <p>This week-long retreat will level-up your coding ninja skills to actual ninja skills. No longer is the humble bisection search limited to sorted arrays or coding interview questions, applying its concepts in the kitchen will have you chopping carrots in O(log n) time before you know it.</p>
    <button>Sign Up</button>
  </article>
</main>
<br>
<footer>&copy; 2018 FCC Kitchen</footer>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
