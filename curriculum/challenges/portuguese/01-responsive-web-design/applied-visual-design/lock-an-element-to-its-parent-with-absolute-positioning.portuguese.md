---
id: 587d781e367417b2b2512acb
title: Lock an Element to its Parent with Absolute Positioning
challengeType: 0
videoUrl: ''
localeTitle: Bloqueie um Elemento ao seu Pai com Posicionamento Absoluto
---

## Description
<section id="description"> A próxima opção para a propriedade CSS <code>position</code> é <code>absolute</code> , que bloqueia o elemento no lugar em relação ao seu contentor pai. Ao contrário da posição <code>relative</code> , isso remove o elemento do fluxo normal do documento, portanto, os itens adjacentes ignoram-no. As propriedades de deslocamento CSS (superior ou inferior e esquerda ou direita) são usadas para ajustar a posição. Uma nuance no posicionamento absoluto é que ele vai bloquear o elemento em relação ao seu antepassado mais próximo <em>posicionado.</em> Se você esquecer de adicionar uma regra de posição ao item pai (isso geralmente é feito usando <code>position: relative;</code> ), o navegador irá continuar a procurar a ligação e, por fim, irá assumir o padrão da tag body. </section>

## Instructions
<section id="instructions"> Bloqueie o elemento <code>#searchbar</code> no canto superior direito do seu pai  <code>section</code> , declarando sua <code>position</code> como <code>absolute</code> . Dê-lhe compensações <code>top</code> e <code>right</code> de 50 pixels cada. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'O elemento <code>#searchbar</code> deve ter uma <code>position</code> definida como <code>absolute</code> .'
    testString: 'assert($("#searchbar").css("position") == "absolute", "The <code>#searchbar</code> element should have a <code>position</code> set to <code>absolute</code>.");'
  - text: 'Seu código deve usar o deslocamento CSS <code>top</code> de 50 pixels no elemento <code>#searchbar</code> .'
    testString: 'assert($("#searchbar").css("top") == "50px", "Your code should use the <code>top</code> CSS offset of 50 pixels on the <code>#searchbar</code> element.");'
  - text: 'Seu código deve usar o deslocamento CSS <code>right</code> de 50 pixels no elemento <code>#searchbar</code> .'
    testString: 'assert($("#searchbar").css("right") == "50px", "Your code should use the <code>right</code> CSS offset of 50 pixels on the <code>#searchbar</code> element.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  #searchbar {



  }
  section {
    position: relative;
  }
</style>
<body>
  <h1>Welcome!</h1>
  <section>
    <form id="searchbar">
      <label for="search">Search:</label>
      <input type="search" id="search" name="search">
      <input type="submit" name="submit" value="Go!">
    </form>
  </section>
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
