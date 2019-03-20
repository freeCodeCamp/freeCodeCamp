---
id: 587d7fa7367417b2b2512bc5
title: Work with Dynamic Data in D3
challengeType: 6
videoUrl: ''
localeTitle: Trabalhar com dados dinâmicos no D3
---

## Description
<section id="description"> Os dois últimos desafios abrangem os fundamentos da exibição de dados dinamicamente com o D3 usando os métodos <code>data()</code> e <code>enter()</code> . Esses métodos usam um conjunto de dados e, juntamente com o método <code>append()</code> , criam um novo elemento DOM para cada entrada no conjunto de dados. No desafio anterior, você criou um novo elemento <code>h2</code> para cada item na matriz do <code>dataset</code> , mas todos continham o mesmo texto, &quot;Novo Título&quot;. Isso é porque você não fez uso dos dados que estão vinculados a cada um dos elementos <code>h2</code> . O método D3 <code>text()</code> pode ter uma string ou uma função de callback como um argumento: <code>selection.text((d) =&gt; d)</code> No exemplo acima, o parâmetro <code>d</code> se refere a uma única entrada no dataset que uma seleção é ligada para. Usando o exemplo atual como contexto, o primeiro elemento <code>h2</code> é ligado a 12, o segundo elemento <code>h2</code> é ligado a 31, o terceiro elemento <code>h2</code> é ligado a 22 e assim por diante. </section>

## Instructions
<section id="instructions"> Altere o método <code>text()</code> para que cada elemento <code>h2</code> exiba o valor correspondente da matriz do <code>dataset</code> com um único espaço e &quot;USD&quot;. Por exemplo, o primeiro cabeçalho deve ser &quot;12 USD&quot;. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: A primeira <code>h2</code> deve ter o texto &quot;12 USD&quot;.
    testString: 'assert($("h2").eq(0).text() == "12 USD", "The first <code>h2</code> should have the text "12 USD".");'
  - text: A segunda <code>h2</code> deve ter o texto &quot;31 USD&quot;.
    testString: 'assert($("h2").eq(1).text() == "31 USD", "The second <code>h2</code> should have the text "31 USD".");'
  - text: A terceira <code>h2</code> deve ter o texto &quot;22 USD&quot;.
    testString: 'assert($("h2").eq(2).text() == "22 USD", "The third <code>h2</code> should have the text "22 USD".");'
  - text: O quarto <code>h2</code> deve ter o texto &quot;17 USD&quot;.
    testString: 'assert($("h2").eq(3).text() == "17 USD", "The fourth <code>h2</code> should have the text "17 USD".");'
  - text: O quinto <code>h2</code> deve ter o texto &quot;25 USD&quot;.
    testString: 'assert($("h2").eq(4).text() == "25 USD", "The fifth <code>h2</code> should have the text "25 USD".");'
  - text: A sexta <code>h2</code> deve ter o texto &quot;18 USD&quot;.
    testString: 'assert($("h2").eq(5).text() == "18 USD", "The sixth <code>h2</code> should have the text "18 USD".");'
  - text: A sétima <code>h2</code> deve ter o texto &quot;29 USD&quot;.
    testString: 'assert($("h2").eq(6).text() == "29 USD", "The seventh <code>h2</code> should have the text "29 USD".");'
  - text: A oitava <code>h2</code> deve ter o texto &quot;14 USD&quot;.
    testString: 'assert($("h2").eq(7).text() == "14 USD", "The eighth <code>h2</code> should have the text "14 USD".");'
  - text: O nono <code>h2</code> deve ter o texto &quot;9 USD&quot;.
    testString: 'assert($("h2").eq(8).text() == "9 USD", "The ninth <code>h2</code> should have the text "9 USD".");'

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
      // Add your code below this line

      .text("New Title");

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
