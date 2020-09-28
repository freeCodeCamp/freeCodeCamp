---
id: 587d7fa7367417b2b2512bc7
title: Change Styles Based on Data
challengeType: 6
videoUrl: ''
localeTitle: Alterar estilos com base em dados
---

## Description
<section id="description"> D3 é sobre visualização e apresentação de dados. É provável que você queira alterar o estilo dos elementos com base nos dados. Você pode usar uma função de retorno de chamada no método <code>style()</code> para alterar o estilo de diferentes elementos. Por exemplo, você pode querer colorir um ponto de dados azul se tiver um valor menor que 20 e vermelho caso contrário. Você pode usar uma função de retorno de chamada no método <code>style()</code> e incluir a lógica condicional. A função de retorno de chamada usa o parâmetro <code>d</code> para representar o ponto de dados: <blockquote> selection.style (&quot;cor&quot;, (d) =&gt; { <br> / * Lógica que retorna a cor com base em uma condição * / <br> }); </blockquote> O método <code>style()</code> não se limita a definir a <code>color</code> - também pode ser usado com outras propriedades CSS. </section>

## Instructions
<section id="instructions"> Adicione o método <code>style()</code> ao código no editor para definir a <code>color</code> dos elementos <code>h2</code> condicionalmente. Escreva a função de retorno de chamada, portanto, se o valor dos dados for menor que 20, ele retornará &quot;vermelho&quot;, caso contrário, retornará &quot;verde&quot;. <strong>Nota</strong> <br> Você pode usar a lógica if-else ou o operador ternário. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O primeiro <code>h2</code> deve ter uma <code>color</code> vermelha.
    testString: 'assert($("h2").eq(0).css("color") == "rgb(255, 0, 0)", "The first <code>h2</code> should have a <code>color</code> of red.");'
  - text: O segundo <code>h2</code> deve ter uma <code>color</code> verde.
    testString: 'assert($("h2").eq(1).css("color") == "rgb(0, 128, 0)", "The second <code>h2</code> should have a <code>color</code> of green.");'
  - text: O terceiro <code>h2</code> deve ter uma <code>color</code> verde.
    testString: 'assert($("h2").eq(2).css("color") == "rgb(0, 128, 0)", "The third <code>h2</code> should have a <code>color</code> of green.");'
  - text: O quarto <code>h2</code> deve ter uma <code>color</code> vermelha.
    testString: 'assert($("h2").eq(3).css("color") == "rgb(255, 0, 0)", "The fourth <code>h2</code> should have a <code>color</code> of red.");'
  - text: O quinto <code>h2</code> deve ter uma <code>color</code> verde.
    testString: 'assert($("h2").eq(4).css("color") == "rgb(0, 128, 0)", "The fifth <code>h2</code> should have a <code>color</code> of green.");'
  - text: O sexto <code>h2</code> deve ter uma <code>color</code> vermelha.
    testString: 'assert($("h2").eq(5).css("color") == "rgb(255, 0, 0)", "The sixth <code>h2</code> should have a <code>color</code> of red.");'
  - text: A sétima <code>h2</code> deve ter uma <code>color</code> verde.
    testString: 'assert($("h2").eq(6).css("color") == "rgb(0, 128, 0)", "The seventh <code>h2</code> should have a <code>color</code> of green.");'
  - text: O oitavo <code>h2</code> deve ter uma <code>color</code> vermelha.
    testString: 'assert($("h2").eq(7).css("color") == "rgb(255, 0, 0)", "The eighth <code>h2</code> should have a <code>color</code> of red.");'
  - text: O nono <code>h2</code> deve ter uma <code>color</code> vermelha.
    testString: 'assert($("h2").eq(8).css("color") == "rgb(255, 0, 0)", "The ninth <code>h2</code> should have a <code>color</code> of red.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text((d) => (d + " USD"))
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
