---
id: 587d781e367417b2b2512acc
title: Lock an Element to the Browser Window with Fixed Positioning
challengeType: 0
videoUrl: ''
localeTitle: Bloquear um elemento para a janela do navegador com posicionamento fixo
---

## Description
<section id="description"> O próximo esquema de layout que o CSS oferece é a posição <code>fixed</code> , que é um tipo de posicionamento absoluto que bloqueia um elemento relativo à janela do navegador. Semelhante ao posicionamento absoluto, é usado com as propriedades de deslocamento CSS e também remove o elemento do fluxo normal do documento. Outros itens não mais &quot;percebem&quot; onde estão posicionados, o que pode exigir alguns ajustes de layout em outro lugar. Uma diferença fundamental entre as posições <code>fixed</code> e <code>absolute</code> é que um elemento com uma posição fixa não se move quando o usuário rola. </section>

## Instructions
<section id="instructions"> A barra de navegação no código é rotulada com um id de <code>navbar</code> . Altere sua <code>position</code> para <code>fixed</code> e compense 0 pixels a partir da <code>top</code> e 0 pixels a partir da <code>left</code> . Observe o (falta de) impacto na posição <code>h1</code> , ele não foi empurrado para baixo para acomodar a barra de navegação e precisaria ser ajustado separadamente. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'O elemento <code>#navbar</code> deve ter uma <code>position</code> definida como <code>fixed</code> .'
    testString: 'assert($("#navbar").css("position") == "fixed", "The <code>#navbar</code> element should have a <code>position</code> set to <code>fixed</code>.");'
  - text: 'Seu código deve usar o deslocamento CSS <code>top</code> de 0 pixels no elemento <code>#navbar</code> .'
    testString: 'assert($("#navbar").css("top") == "0px", "Your code should use the <code>top</code> CSS offset of 0 pixels on the <code>#navbar</code> element.");'
  - text: 'Seu código deve usar o deslocamento CSS <code>left</code> de 0 pixels no elemento <code>#navbar</code> .'
    testString: 'assert($("#navbar").css("left") == "0px", "Your code should use the <code>left</code> CSS offset of 0 pixels on the <code>#navbar</code> element.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  #navbar {



    width: 100%;
    background-color: #767676;
  }
  nav ul {
    margin: 0px;
    padding: 5px 0px 5px 30px;
  }
  nav li {
    display: inline;
    margin-right: 20px;
  }
  a {
    text-decoration: none;
  }
</style>
<body>
  <header>
    <h1>Welcome!</h1>
    <nav id="navbar">
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </nav>
  </header>
  <p>I shift up when the #navbar is fixed to the browser window.</p>
</body>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
