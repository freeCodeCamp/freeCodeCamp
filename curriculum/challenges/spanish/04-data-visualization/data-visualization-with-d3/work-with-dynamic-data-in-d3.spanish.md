---
id: 587d7fa7367417b2b2512bc5
title: Work with Dynamic Data in D3
challengeType: 6
videoUrl: ''
localeTitle: Trabajar con datos dinámicos en D3
---

## Description
<section id="description"> Los dos últimos desafíos cubren los aspectos básicos de mostrar datos dinámicamente con D3 usando los métodos <code>data()</code> y <code>enter()</code> . Estos métodos toman un conjunto de datos y, junto con el método <code>append()</code> , crean un nuevo elemento DOM para cada entrada en el conjunto de datos. En el desafío anterior, creó un nuevo elemento <code>h2</code> para cada elemento en la matriz del <code>dataset</code> , pero todos contenían el mismo texto, &quot;Título nuevo&quot;. Esto se debe a que no ha utilizado los datos vinculados a cada uno de los elementos <code>h2</code> . El método D3 <code>text()</code> puede tomar una cadena o una función de devolución de llamada como un argumento: <code>selection.text((d) =&gt; d)</code> En el ejemplo anterior, el parámetro <code>d</code> refiere a una sola entrada en el conjunto de datos que una selección está vinculada a. Utilizando el ejemplo actual como contexto, el primer elemento <code>h2</code> está vinculado a 12, el segundo elemento <code>h2</code> está vinculado a 31, el tercer elemento <code>h2</code> está vinculado a 22, y así sucesivamente. </section>

## Instructions
<section id="instructions"> Cambie el método <code>text()</code> para que cada elemento <code>h2</code> muestre el valor correspondiente de la matriz del <code>dataset</code> con un solo espacio y &quot;USD&quot;. Por ejemplo, el primer encabezado debe ser &quot;12 USD&quot;. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El primer <code>h2</code> debe tener el texto &quot;12 USD&quot;.
    testString: 'assert($("h2").eq(0).text() == "12 USD", "The first <code>h2</code> should have the text "12 USD".");'
  - text: El segundo <code>h2</code> debe tener el texto &quot;31 USD&quot;.
    testString: 'assert($("h2").eq(1).text() == "31 USD", "The second <code>h2</code> should have the text "31 USD".");'
  - text: El tercer <code>h2</code> debe tener el texto &quot;22 USD&quot;.
    testString: 'assert($("h2").eq(2).text() == "22 USD", "The third <code>h2</code> should have the text "22 USD".");'
  - text: El cuarto <code>h2</code> debe tener el texto &quot;17 USD&quot;.
    testString: 'assert($("h2").eq(3).text() == "17 USD", "The fourth <code>h2</code> should have the text "17 USD".");'
  - text: El quinto <code>h2</code> debe tener el texto &quot;25 USD&quot;.
    testString: 'assert($("h2").eq(4).text() == "25 USD", "The fifth <code>h2</code> should have the text "25 USD".");'
  - text: El sexto <code>h2</code> debe tener el texto &quot;18 USD&quot;.
    testString: 'assert($("h2").eq(5).text() == "18 USD", "The sixth <code>h2</code> should have the text "18 USD".");'
  - text: El séptimo <code>h2</code> debe tener el texto &quot;29 USD&quot;.
    testString: 'assert($("h2").eq(6).text() == "29 USD", "The seventh <code>h2</code> should have the text "29 USD".");'
  - text: El octavo <code>h2</code> debe tener el texto &quot;14 USD&quot;.
    testString: 'assert($("h2").eq(7).text() == "14 USD", "The eighth <code>h2</code> should have the text "14 USD".");'
  - text: El noveno <code>h2</code> debe tener el texto &quot;9 USD&quot;.
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
