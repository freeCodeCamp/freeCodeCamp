---
id: 587d778b367417b2b2512aa8
title: Add an Accessible Date Picker
challengeType: 0
videoUrl: ''
localeTitle: Añadir un selector de fecha accesible
---

## Descripción
<section id="description"> Los formularios a menudo incluyen el campo <code>input</code> , que se puede usar para crear varios controles de formulario diferentes. El atributo <code>type</code> en este elemento indica qué tipo de entrada se creará. Puedes haber notado los tipos de entrada <code>text</code> y <code>submit</code> en desafíos anteriores, y HTML5 introdujo una opción para especificar un campo <code>date</code> . Dependiendo de la compatibilidad del navegador, aparece un selector de fecha en el campo <code>input</code> cuando se lo enfoca, lo que facilita el llenado de un formulario para todos los usuarios. Para los navegadores más antiguos, se asigna por defecto el tipo <code>text</code>, de forma tal que ayuda a mostrar a los usuarios el formato de fecha esperado en la etiqueta o como texto de marcador de posición, por si acaso. Aquí hay un ejemplo: <blockquote> &lt;label for = &quot;input1&quot;&gt; Ingresa una fecha: &lt;/label&gt; <br> &lt;input type = &quot;date&quot; id = &quot;input1&quot; name = &quot;input1&quot;&gt; <br></blockquote></section>

## Instrucciones
<section id="instructions"> Camper Cat está organizando un torneo de Mortal Kombat y quiere preguntar a sus competidores para ver qué fecha resulta mas conveniente. Agregue una etiqueta de <code>input</code> con un atributo de <code>type</code> de &quot;date&quot;, un atributo de <code>id</code> de &quot;pickdate&quot; y un atributo de <code>name</code> de &quot;date&quot;. </section>

## Pruebas
<section id='tests'>

```yml
tests:
  - text: Tu código debe agregar una etiqueta de <code>input</code> para el campo selector de fecha.
    testString: 'assert($("input").length == 2, "Your code should add one <code>input</code> tag for the date selector field.");'
  - text: Tu etiqueta de <code>input</code> debe tener un atributo de <code>type</code> con un valor de "date".
    testString: 'assert($("input").attr("type") == "date", "Your <code>input</code> tag should have a <code>type</code> attribute with a value of date.");'
  - text: Tu etiqueta de <code>input</code> debe tener un atributo <code>id</code> con un valor de "pickdate".
    testString: 'assert($("input").attr("id") == "pickdate", "Your <code>input</code> tag should have an <code>id</code> attribute with a value of pickdate.");'
  - text: Tu etiqueta de <code>input</code> debe tener un atributo de <code>name</code> con un valor de "date".
    testString: 'assert($("input").attr("name") == "date", "Your <code>input</code> tag should have a <code>name</code> attribute with a value of date.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <header>
    <h1>Torneos</h1>
  </header>
  <main>
    <section>
      <h2>Encuesta para el Torneo de Mortal Kombat</h2>
      <form>
        <p>Indicanos la mejor fecha para esta competencia</p>
        <label for="pickdate">Fecha preferida:</label>

        <!-- Agrega tu código debajo de esta línea -->



        <!-- Agrega tu código sobre esta línea -->

        <input type="submit" name="submit" value="Submit">
      </form>
    </section>
  </main>
  <footer>&copy; 2018 Camper Cat</footer>
</body>

```

</div>



</section>

## Solución
<section id='solution'>

```js
// solución requerida
```

</section>
