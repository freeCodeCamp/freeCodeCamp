---
id: 587d7fa7367417b2b2512bc8
title: Add Classes with D3
challengeType: 6
videoUrl: ''
localeTitle: ''
---

## Description
<section id="description"> Usar muitos estilos inline em elementos HTML é difícil de gerenciar, mesmo para aplicativos menores. É mais fácil adicionar uma classe a elementos e estilizar essa classe uma vez usando regras CSS. D3 possui o método <code>attr()</code> para adicionar qualquer atributo HTML a um elemento, incluindo um nome de classe. O método <code>attr()</code> funciona da mesma maneira que <code>style()</code> faz. Leva valores separados por vírgula e pode usar uma função de retorno de chamada. Aqui está um exemplo para adicionar uma classe de &quot;container&quot; a uma seleção: <code>selection.attr(&quot;class&quot;, &quot;container&quot;);</code> </section>

## Instructions
<section id="instructions"> Adicione o método <code>attr()</code> ao código no editor e coloque uma classe de <code>bar</code> nos elementos <code>div</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seus elementos <code>div</code> devem ter uma classe de <code>bar</code> .
    testString: 'assert($("div").attr("class") == "bar", "Your <code>div</code> elements should have a class of <code>bar</code>.");'
  - text: Seu código deve usar o método <code>attr()</code> .
    testString: 'assert(code.match(/\.attr/g), "Your code should use the <code>attr()</code> method.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .bar {
    width: 25px;
    height: 100px;
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
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
