---
id: bad87fee1348bd9aedf04756
title: Override Styles in Subsequent CSS
challengeType: 0
videoUrl: ''
localeTitle: Substituir estilos no CSS subseqüente
---

## Description
<section id="description"> Nossa classe &quot;texto rosa&quot; anulou a declaração CSS do elemento do <code>body</code> ! Nós acabamos de provar que nossas classes irão sobrescrever o CSS do elemento <code>body</code> . Então, a próxima questão lógica é: o que podemos fazer para substituir nossa classe de <code>pink-text</code> ? </section>

## Instructions
<section id="instructions"> Crie uma classe CSS adicional chamada <code>blue-text</code> que dá um elemento a cor azul. Certifique-se de que esteja abaixo da sua declaração de classe de <code>pink-text</code> . Aplique a classe de <code>blue-text</code> ao seu elemento <code>h1</code> , além de sua classe de <code>pink-text</code> , e vamos ver qual deles ganha. A aplicação de vários atributos de classe a um elemento HTML é feita com um espaço entre eles como este: <code>class=&quot;class1 class2&quot;</code> Nota: Não importa qual ordem as classes estão listadas no elemento HTML. No entanto, a ordem das declarações de <code>class</code> na seção <code>&lt;style&gt;</code> é o que é importante. A segunda declaração sempre terá precedência sobre a primeira. Porque <code>.blue-text</code> é declarado em segundo lugar, ele substitui os atributos de <code>.pink-text</code> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu elemento <code>h1</code> deve ter a classe <code>pink-text</code> .
    testString: 'assert($("h1").hasClass("pink-text"), "Your <code>h1</code> element should have the class <code>pink-text</code>.");'
  - text: Seu elemento <code>h1</code> deve ter a classe <code>blue-text</code> .
    testString: 'assert($("h1").hasClass("blue-text"), "Your <code>h1</code> element should have the class <code>blue-text</code>.");'
  - text: Tanto <code>blue-text</code> quanto <code>blue-text</code> <code>pink-text</code> devem pertencer ao mesmo elemento <code>h1</code> .
    testString: 'assert($(".pink-text").hasClass("blue-text"), "Both <code>blue-text</code> and <code>pink-text</code> should belong to the same <code>h1</code> element.");'
  - text: Seu elemento <code>h1</code> deve ser azul.
    testString: 'assert($("h1").css("color") === "rgb(0, 0, 255)", "Your <code>h1</code> element should be blue.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  .pink-text {
    color: pink;
  }
</style>
<h1 class="pink-text">Hello World!</h1>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
