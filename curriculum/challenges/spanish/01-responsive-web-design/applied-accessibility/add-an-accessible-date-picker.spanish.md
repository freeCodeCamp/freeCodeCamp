---
id: 587d778b367417b2b2512aa8
title: Add an Accessible Date Picker
challengeType: 0
videoUrl: ''
localeTitle: Añadir un selector de fecha accesible
---

## Description
<section id="description"> Los formularios a menudo incluyen el campo de <code>input</code> , que se puede usar para crear varios controles de formulario diferentes. El atributo de <code>type</code> en este elemento indica qué tipo de entrada se creará. Puede haber notado el <code>text</code> y <code>submit</code> los tipos de entrada en desafíos anteriores, y HTML5 introdujo una opción para especificar un campo de <code>date</code> . Dependiendo de la compatibilidad del navegador, un selector de fecha aparece en el campo de <code>input</code> cuando está enfocado, lo que facilita el llenado de un formulario para todos los usuarios. Para los navegadores más antiguos, el tipo será el <code>text</code> predeterminado, por lo que ayuda a mostrar a los usuarios el formato de fecha esperado en la etiqueta o como texto de marcador de posición, por si acaso. Aquí hay un ejemplo: <blockquote> &lt;label for = &quot;input1&quot;&gt; Ingrese una fecha: &lt;/label&gt; <br> &lt;input type = &quot;date&quot; id = &quot;input1&quot; name = &quot;input1&quot;&gt; <br></blockquote></section>

## Instructions
<section id="instructions"> Camper Cat está organizando un torneo de Mortal Kombat y quiere preguntar a sus competidores para ver qué fecha funciona mejor. Agregue una etiqueta de <code>input</code> con un atributo de <code>type</code> de &quot;fecha&quot;, un atributo de <code>id</code> de &quot;pickdate&quot; y un atributo de <code>name</code> de &quot;fecha&quot;. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe agregar una etiqueta de <code>input</code> para el campo selector de fecha.
    testString: 'assert($("input").length == 2, "Your code should add one <code>input</code> tag for the date selector field.");'
  - text: Su etiqueta de <code>input</code> debe tener un atributo de <code>type</code> con un valor de fecha.
    testString: 'assert($("input").attr("type") == "date", "Your <code>input</code> tag should have a <code>type</code> attribute with a value of date.");'
  - text: Su etiqueta de <code>input</code> debe tener un atributo <code>id</code> con un valor de pickdate.
    testString: 'assert($("input").attr("id") == "pickdate", "Your <code>input</code> tag should have an <code>id</code> attribute with a value of pickdate.");'
  - text: Su etiqueta de <code>input</code> debe tener un atributo de <code>name</code> con un valor de fecha.
    testString: 'assert($("input").attr("name") == "date", "Your <code>input</code> tag should have a <code>name</code> attribute with a value of date.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <header>
    <h1>Tournaments</h1>
  </header>
  <main>
    <section>
      <h2>Mortal Kombat Tournament Survey</h2>
      <form>
        <p>Tell us the best date for the competition</p>
        <label for="pickdate">Preferred Date:</label>

        <!-- Add your code below this line -->



        <!-- Add your code above this line -->

        <input type="submit" name="submit" value="Submit">
      </form>
    </section>
  </main>
  <footer>&copy; 2018 Camper Cat</footer>
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
