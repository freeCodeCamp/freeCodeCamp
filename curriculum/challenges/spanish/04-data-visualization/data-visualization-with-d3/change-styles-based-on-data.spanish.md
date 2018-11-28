---
id: 587d7fa7367417b2b2512bc7
title: Change Styles Based on Data
challengeType: 6
videoUrl: ''
localeTitle: Cambiar estilos basados ​​en datos
---

## Description
<section id="description"> D3 es sobre visualización y presentación de datos. Es probable que desee cambiar el estilo de los elementos en función de los datos. Puede usar una función de devolución de llamada en el método <code>style()</code> para cambiar el estilo de los diferentes elementos. Por ejemplo, es posible que desee colorear un punto de datos en azul si tiene un valor inferior a 20 y, de lo contrario, en rojo. Puede usar una función de devolución de llamada en el método <code>style()</code> e incluir la lógica condicional. La función de devolución de llamada utiliza el parámetro <code>d</code> para representar el punto de datos: <blockquote> selection.style (&quot;color&quot;, (d) =&gt; { <br> / * Lógica que devuelve el color basado en una condición * / <br> }); </blockquote> El método <code>style()</code> no se limita a establecer el <code>color</code> , también se puede usar con otras propiedades CSS. </section>

## Instructions
<section id="instructions"> Agregue el método <code>style()</code> al código en el editor para establecer el <code>color</code> de los elementos <code>h2</code> condicionalmente. Escriba la función de devolución de llamada de modo que si el valor de los datos es inferior a 20, devuelve &quot;rojo&quot;; de lo contrario, devuelve &quot;verde&quot;. <strong>Nota</strong> <br> Puede utilizar la lógica if-else o el operador ternario. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El primer <code>h2</code> debe tener un <code>color</code> rojo.
    testString: 'assert($("h2").eq(0).css("color") == "rgb(255, 0, 0)", "The first <code>h2</code> should have a <code>color</code> of red.");'
  - text: El segundo <code>h2</code> debe tener un <code>color</code> verde.
    testString: 'assert($("h2").eq(1).css("color") == "rgb(0, 128, 0)", "The second <code>h2</code> should have a <code>color</code> of green.");'
  - text: El tercer <code>h2</code> debe tener un <code>color</code> verde.
    testString: 'assert($("h2").eq(2).css("color") == "rgb(0, 128, 0)", "The third <code>h2</code> should have a <code>color</code> of green.");'
  - text: El cuarto <code>h2</code> debe tener un <code>color</code> rojo.
    testString: 'assert($("h2").eq(3).css("color") == "rgb(255, 0, 0)", "The fourth <code>h2</code> should have a <code>color</code> of red.");'
  - text: El quinto <code>h2</code> debe tener un <code>color</code> verde.
    testString: 'assert($("h2").eq(4).css("color") == "rgb(0, 128, 0)", "The fifth <code>h2</code> should have a <code>color</code> of green.");'
  - text: El sexto <code>h2</code> debe tener un <code>color</code> rojo.
    testString: 'assert($("h2").eq(5).css("color") == "rgb(255, 0, 0)", "The sixth <code>h2</code> should have a <code>color</code> of red.");'
  - text: El séptimo <code>h2</code> debe tener un <code>color</code> verde.
    testString: 'assert($("h2").eq(6).css("color") == "rgb(0, 128, 0)", "The seventh <code>h2</code> should have a <code>color</code> of green.");'
  - text: El octavo <code>h2</code> debe tener un <code>color</code> rojo.
    testString: 'assert($("h2").eq(7).css("color") == "rgb(255, 0, 0)", "The eighth <code>h2</code> should have a <code>color</code> of red.");'
  - text: El noveno <code>h2</code> debe tener un <code>color</code> rojo.
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
