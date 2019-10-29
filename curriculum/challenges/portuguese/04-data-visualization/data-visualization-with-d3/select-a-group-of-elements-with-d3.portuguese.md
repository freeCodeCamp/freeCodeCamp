---
id: 587d7fa6367417b2b2512bc3
title: Select a Group of Elements with D3
challengeType: 6
videoUrl: ''
localeTitle: Selecione um grupo de elementos com D3
---

## Description
<section id="description"> O D3 também possui o método <code>selectAll()</code> para selecionar um grupo de elementos. Ele retorna uma matriz de nós HTML para todos os itens no documento que correspondem à string de entrada. Aqui está um exemplo para selecionar todas as tags de âncora em um documento: <code>const anchors = d3.selectAll(&quot;a&quot;);</code> Como o método <code>select()</code> , <code>selectAll()</code> suporta o encadeamento de métodos, e você pode usá-lo com outros métodos. </section>

## Instructions
<section id="instructions"> Selecione todas as tags <code>li</code> no documento e altere seu texto para &quot;item de lista&quot; encadeando o método <code>.text()</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Deve haver 3 elementos <code>li</code> na página, e o texto em cada um deve dizer &quot;item da lista&quot;. Capitalização e espaçamento devem corresponder exatamente.'
    testString: 'assert($("li").text().match(/list item/g).length == 3, "There should be 3 <code>li</code> elements on the page, and the text in each one should say "list item". Capitalization and spacing should match exactly.");'
  - text: Seu código deve acessar o objeto <code>d3</code> .
    testString: 'assert(code.match(/d3/g), "Your code should access the <code>d3</code> object.");'
  - text: Seu código deve usar o método <code>selectAll</code> .
    testString: 'assert(code.match(/\.selectAll/g), "Your code should use the <code>selectAll</code> method.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <ul>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
  </ul>
  <script>
    // Add your code below this line



    // Add your code above this line
  </script>
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
