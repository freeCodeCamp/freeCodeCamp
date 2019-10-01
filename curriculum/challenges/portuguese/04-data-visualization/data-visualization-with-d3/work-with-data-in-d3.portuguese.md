---
id: 587d7fa7367417b2b2512bc4
title: Work with Data in D3
challengeType: 6
videoUrl: ''
localeTitle: Trabalhar com dados no D3
---

## Description
<section id="description"> A biblioteca D3 se concentra em uma abordagem baseada em dados. Quando você tem um conjunto de dados, você pode aplicar métodos D3 para exibi-los na página. Os dados vêm em vários formatos, mas esse desafio usa uma matriz simples de números. O primeiro passo é tornar D3 ciente dos dados. O método <code>data()</code> é usado em uma seleção de elementos DOM para anexar os dados a esses elementos. O conjunto de dados é passado como um argumento para o método. Um padrão de fluxo de trabalho comum é criar um novo elemento no documento para cada parte dos dados no conjunto. D3 tem o método <code>enter()</code> para esse propósito. Quando <code>enter()</code> é combinado com o método <code>data()</code> , ele verifica os elementos selecionados da página e compara-os com o número de itens de dados no conjunto. Se houver menos elementos que itens de dados, ele criará os elementos ausentes. Aqui está um exemplo que seleciona um elemento <code>ul</code> e cria um novo item de lista com base no número de entradas na matriz: <blockquote> &lt;body&gt; <br> &lt;ul&gt; &lt;/ ul&gt; <br> &lt;script&gt; <br> conjunto de dados const = [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;]; <br> d3.select (&quot;ul&quot;). selectAll (&quot;li&quot;) <br> .data (conjunto de dados) <br> .entrar() <br> .append (&quot;li&quot;) <br> .text (&quot;Novo item&quot;); <br> &lt;/ script&gt; <br> &lt;/ body&gt; </blockquote> Pode parecer confuso selecionar elementos que ainda não existem. Este código está dizendo ao D3 para selecionar primeiro o <code>ul</code> na página. Em seguida, selecione todos os itens da lista, que retornam uma seleção vazia. Em seguida, o método <code>data()</code> revisa o conjunto de dados e executa o código a seguir três vezes, uma vez para cada item na matriz. O método <code>enter()</code> vê que não há elementos <code>li</code> na página, mas precisa de 3 (um para cada parte dos dados no <code>dataset</code> ). Novos elementos <code>li</code> são anexados ao <code>ul</code> e possuem o texto &quot;Novo item&quot;. </section>

## Instructions
<section id="instructions"> Selecione o nó do <code>body</code> , em seguida, selecione todos os elementos <code>h2</code> . Faça o D3 criar e anexar uma tag <code>h2</code> para cada item na matriz do <code>dataset</code> . O texto no <code>h2</code> deve dizer &quot;novo título&quot;. Seu código deve usar os métodos <code>data()</code> e <code>enter()</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu documento deve ter 9 elementos <code>h2</code> .
    testString: 'assert($("h2").length == 9, "Your document should have 9 <code>h2</code> elements.");'
  - text: O texto nos elementos <code>h2</code> deve dizer &quot;Novo Título&quot;. A capitalização e o espaçamento devem corresponder exatamente.
    testString: 'assert($("h2").text().match(/New Title/g).length == 9, "The text in the <code>h2</code> elements should say "New Title". The capitalization and spacing should match exactly.");'
  - text: Seu código deve usar o método <code>data()</code> .
    testString: 'assert(code.match(/\.data/g), "Your code should use the <code>data()</code> method.");'
  - text: Seu código deve usar o método <code>enter()</code> .
    testString: 'assert(code.match(/\.enter/g), "Your code should use the <code>enter()</code> method.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

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
