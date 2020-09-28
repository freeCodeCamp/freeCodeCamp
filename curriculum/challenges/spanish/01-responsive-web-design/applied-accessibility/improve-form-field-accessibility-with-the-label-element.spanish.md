---
id: 587d778a367417b2b2512aa6
title: Improve Form Field Accessibility with the label Element
challengeType: 0
videoUrl: ''
localeTitle: Mejorar la accesibilidad del campo de formulario con la etiqueta Elemento
---

## Description
<section id="description"> La mejora de la accesibilidad con el marcado HTML semántico se aplica al uso de nombres de etiquetas y atributos apropiados. Los siguientes varios desafíos cubren algunos escenarios importantes utilizando atributos en formularios. La <code>label</code> etiqueta envuelve el texto de un elemento de control de formulario específico, generalmente el nombre o la etiqueta de una opción. Esto vincula el significado al elemento y hace que la forma sea más legible. El atributo <code>for</code> en una <code>label</code> etiqueta asocia explícitamente esa <code>label</code> con el control de formulario y es utilizado por los lectores de pantalla. Aprendió sobre los botones de radio y sus etiquetas en una lección en la sección HTML básico. En esa lección, envolvimos el elemento de entrada del botón de radio dentro de un elemento de <code>label</code> junto con el texto de la etiqueta para poder hacer clic en el texto. Otra forma de lograr esto es utilizando el atributo <code>for</code> como se explica en esta lección. El valor del atributo <code>for</code> debe ser el mismo que el valor del atributo <code>id</code> del control de formulario. Aquí hay un ejemplo: <blockquote> &lt;form&gt; <br> &lt;label for = &quot;name&quot;&gt; Name: &lt;/label&gt; <br> &lt;input type = &quot;text&quot; id = &quot;name&quot; name = &quot;name&quot;&gt; <br> &lt;/form&gt; <br></blockquote></section>

## Instructions
<section id="instructions"> Camper Cat espera mucho interés en las publicaciones de su blog, y desea incluir un formulario de registro por correo electrónico. Agregue un atributo <code>for</code> en la <code>label</code> correo electrónico que coincida con el <code>id</code> en su campo de <code>input</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe tener un atributo <code>for</code> en la <code>label</code> etiqueta que no esté vacía.
    testString: 'assert($("label").attr("for"), "Your code should have a <code>for</code> attribute on the <code>label</code> tag that is not empty.");'
  - text: El valor del atributo <code>for</code> debe coincidir con el valor de <code>id</code> en la <code>input</code> correo electrónico.
    testString: 'assert($("label").attr("for") == "email", "Your <code>for</code> attribute value should match the <code>id</code> value on the email <code>input</code>.");'

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
      <p>¡Suscríbete aquí para recibir los posts del blog de Camper Cat por email!</p>


      <label>Email:</label>
      <input type="text" id="email" name="email">


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

## Solution
<section id='solution'>

```js
// solución requerida
```

</section>
