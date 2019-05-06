---
id: 587d7fa7367417b2b2512bc6
title: Add Inline Styling to Elements
challengeType: 6
videoUrl: ''
localeTitle: Adicionar estilo inline aos elementos
---

## Description
<section id="description"> D3 permite adicionar estilos CSS inline em elementos dinâmicos com o método <code>style()</code> . O método <code>style()</code> usa um par de valores-chave separados por vírgulas como argumento. Aqui está um exemplo para definir a cor do texto da seleção para azul: <code>selection.style(&quot;color&quot;,&quot;blue&quot;);</code> </section>

## Instructions
<section id="instructions"> Adicione o método <code>style()</code> ao código no editor para fazer com que todo o texto exibido tenha uma <code>font-family</code> de <code>font-family</code> de <code>verdana</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seus elementos <code>h2</code> devem ter uma <code>font-family</code> de <code>font-family</code> de verdana.
    testString: 'assert($("h2").css("font-family") == "verdana", "Your <code>h2</code> elements should have a <code>font-family</code> of verdana.");'
  - text: Seu código deve usar o método <code>style()</code> .
    testString: 'assert(code.match(/\.style/g), "Your code should use the <code>style()</code> method.");'

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
