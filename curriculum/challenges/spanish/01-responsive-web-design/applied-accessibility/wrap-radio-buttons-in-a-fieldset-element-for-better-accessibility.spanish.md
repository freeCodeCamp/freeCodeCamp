---
id: 587d778b367417b2b2512aa7
title: Wrap Radio Buttons in a fieldset Element for Better Accessibility
challengeType: 0
videoUrl: ''
localeTitle: Envolver los botones de radio en un elemento fieldset para mejorar la accesibilidad
---

## Description
<section id="description">
El siguiente tema sobre formularios trata sobre la accesibilidad de los botones de radio. A cada opción se le asigna un <code>label</code> con un atributo <code>for</code> vinculado con el <code>id</code> del elemento correspondiente, tal como se describe en el último desafío. Dado que los botones de radio a menudo vienen en un grupo en que el usuario debe elegir uno, hay una manera de mostrar semánticamente que las opciones son parte de un conjunto.
La etiqueta <code>fieldset</code> rodea todo el grupo de botones de radio para lograrlo. A menudo se utiliza una etiqueta de <code>legend</code> para proporcionar una descripción de la agrupación, que los lectores de pantalla leen para cada opción en el elemento <code>fieldset</code>. El <code>fieldset</code> y la etiqueta de <code>legend</code> no son necesarios cuando las opciones se explican por sí mismas, como una selección de género. Usando un <code>label</code> con el atributo <code>for</code> para cada botón de radio es suficiente.
Aquí hay un ejemplo:
<blockquote> &lt;form&gt; <br> &lt;fieldset&gt; <br> &lt;legend&gt; Elija uno de estos tres elementos: &lt;/legend&gt; <br> &lt;input id = &quot;one&quot; type = &quot;radio&quot; name = &quot;items&quot; value = &quot;one&quot;&gt; <br> &lt;label for = &quot;one&quot;&gt; Opción Uno &lt;/label&gt; &lt;br&gt; <br> &lt;input id = &quot;two&quot; type = &quot;radio&quot; name = &quot;items&quot; value = &quot;two&quot;&gt; <br> &lt;label for = &quot;two&quot;&gt; Opción Dos &lt;/label&gt; &lt;br&gt; <br> &lt;input id = &quot;three&quot; type = &quot;radio&quot; name = &quot;items&quot; value = &quot;three&quot;&gt; <br> &lt;label for = &quot;three&quot;&gt; Opción Tres &lt;/label&gt; <br> &lt;/fieldset&gt; <br> &lt;/form&gt; <br></blockquote>
</section>

## Instructions
<section id="instructions">
Camper Cat quiere información sobre el nivel ninja de sus usuarios cuando se registran en su lista de correo electrónico. Él ha añadido un conjunto de botones de radio y aprendió a utilizar etiquetas con el atributo <code>for</code> de nuestra lección anterior para cada opción. ¡Sigue así, Camper Cat! Sin embargo, su código todavía necesita algo de ayuda. Cambia la etiqueta <code>div</code> que rodea a los botones de radio por una etiqueta <code>fieldset</code> y cambia la etiqueta <code>p</code> que está dentro a <code>legend</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Tu código debe tener una etiqueta <code>fieldset</code> en todo el grupo de botones de radio.
    testString: 'assert($("fieldset").length == 1, "Your code should have a <code>fieldset</code> tag around the radio button set.");'
  - text: Asegúrate de que tu elemento <code>fieldset</code> tenga una etiqueta de cierre.
    testString: 'assert(code.match(/<\/fieldset>/g) && code.match(/<\/fieldset>/g).length === code.match(/<fieldset>/g).length, "Make sure your <code>fieldset</code> element has a closing tag.");'
  - text: Tu código debe tener una etiqueta de <code>legend</code> alrededor del texto que pregunta qué nivel ninja es un usuario.
    testString: 'assert($("legend").length == 1, "Your code should have a <code>legend</code> tag around the text asking what level ninja a user is.");'
  - text: Tu código no debe tener ninguna etiqueta <code>div</code> .
    testString: 'assert($("div").length == 0, "Your code should not have any <code>div</code> tags.");'
  - text: Tu código ya no debería tener una etiqueta <code>p</code> alrededor del texto que pregunta qué nivel de ninja es un usuario.
    testString: 'assert($("p").length == 4, "Your code should no longer have a <code>p</code> tag around the text asking what level ninja a user is.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <header>
    <h1>Pensamientos Profundos con el Maestro Camper Cat</h1>
  </header>
  <section>
    <form>
      <p>¡Subscríbete aquí para recibir por email los posts del blog de Camper Cat!</p>
      <label for="email">Email:</label>
      <input type="text" id="email" name="email">


      <!-- Add your code below this line -->
      <div>
        <p>Cuál es su nivel de ninja?</p>
        <input id="newbie" type="radio" name="levels" value="newbie">
        <label for="newbie">Gatito Novato</label><br>
        <input id="intermediate" type="radio" name="levels" value="intermediate">
        <label for="intermediate">Estudiante en Desarrollo</label><br>
        <input id="master" type="radio" name="levels" value="master">
        <label for="master">Maestro</label>
      </div>
      <!-- Add your code above this line -->


      <input type="submit" name="submit" value="Submit">
    </form>
  </section>
  <article>
    <h2>Los Archivos Garfield: ¿Lasagna como Combustible de Entrenamiento?</h2>
    <p>Internet está repleto de diversas opiniones sobre los paradigmas nutricionales, desde catnip paleo hasta limpieza de bolas de pelos. Pero pongamos ahora nuestra atención en un combustible del bienestar físico muchas veces olvidado, y examinemos la trifecta proteína-carbohidrato-NOM que es la lasagna... </p>
  </article>
  <img src="samuraiSwords.jpeg" alt="">
  <article>
    <h2>Venciendo a tu Rival: el Punto Rojo es Nuestro!</h2>
    <p>Felinos de todo el mundo vienen dándole batalla a uno de los rivales más persistentes. Este némesis colorado combina un sigilo ingenioso con la velocidad del rayo. Pero anímense, compañeros luchadores, nuestra victoria está cerca...</p>
  </article>
  <img src="samuraiSwords.jpeg" alt="">
  <article>
    <h2>Es Chuck Norris un Hombre Gato?</h2>
    <p>Chuck Norris es ampliamente reconocido como el primer artista marcial del planeta, y es una completa coincidencia que todo aquel que no opina lo mismo desaparece misteriosamente poco tiempo después. Pero la verdadera pregunta es: es un hombre gato?...</p>
  </article>
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
