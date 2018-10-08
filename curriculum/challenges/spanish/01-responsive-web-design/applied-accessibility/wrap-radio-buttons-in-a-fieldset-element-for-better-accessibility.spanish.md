---
id: 587d778b367417b2b2512aa7
title: Wrap Radio Buttons in a fieldset Element for Better Accessibility
localeTitle: Envuelva los botones de radio en un elemento fieldset para una mejor accesibilidad
challengeType: 0
videoUrl: ''
---

## Description
<section id='description'> 
El siguiente tema del formulario cubre la accesibilidad de los botones de radio. A cada opción se le asigna una <code>label</code> con un atributo <code>for</code> vincula con el <code>id</code> del elemento correspondiente tal como se describe en el último desafío. Dado que los botones de radio a menudo vienen en un grupo donde el usuario debe elegir uno, hay una manera de mostrar semánticamente que las opciones son parte de un conjunto. 
La etiqueta de <code>fieldset</code> rodea todo el grupo de botones de radio para lograr esto. A menudo utiliza una etiqueta de <code>legend</code> para proporcionar una descripción de la agrupación, que los lectores de pantalla leen para cada opción en el elemento <code>fieldset</code> . 
El <code>fieldset</code> y la etiqueta de <code>legend</code> no son necesarios cuando las opciones son autoexplicativas, como una selección de género. Usando una <code>label</code> con el <code>for</code> atributo para cada botón de radio es suficiente. 
Aquí hay un ejemplo: 
<blockquote>&lt;form&gt;<br>&nbsp;&nbsp;&lt;fieldset&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;legend&gt;Choose one of these three items:&lt;/legend&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;input id=&quot;one&quot; type=&quot;radio&quot; name=&quot;items&quot; value=&quot;one&quot;&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;label for=&quot;one&quot;&gt;Choice One&lt;/label&gt;&lt;br&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;input id=&quot;two&quot; type=&quot;radio&quot; name=&quot;items&quot; value=&quot;two&quot;&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;label for=&quot;two&quot;&gt;Choice Two&lt;/label&gt;&lt;br&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;input id=&quot;three&quot; type=&quot;radio&quot; name=&quot;items&quot; value=&quot;three&quot;&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;label for=&quot;three&quot;&gt;Choice Three&lt;/label&gt;<br>&nbsp;&nbsp;&lt;/fieldset&gt;<br>&lt;/form&gt;<br></blockquote> 
</section>

## Instructions
<section id='instructions'> 
Camper Cat desea información sobre el nivel de ninja de sus usuarios cuando se registran en su lista de correo electrónico. Ha añadido un conjunto de botones de radio, y aprendió de la lección anterior para utilizar etiquetas de la etiqueta con la <code>for</code> atributos para cada elección. ¡Ve el gato campista! Sin embargo, su código todavía necesita ayuda. Cambie la etiqueta <code>div</code> rodea a los botones de <code>fieldset</code> una etiqueta de conjunto de <code>fieldset</code> y cambie la etiqueta <code>p</code> dentro de una <code>legend</code> . 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El código debe tener un <code>fieldset</code> de etiqueta en todo el juego de botones circulares.
    testString: 'assert($("fieldset").length == 1, "Your code should have a <code>fieldset</code> tag around the radio button set.");'
  - text: Asegúrese de que su elemento <code>fieldset</code> tenga una etiqueta de cierre.
    testString: 'assert(code.match(/<\/fieldset>/g) && code.match(/<\/fieldset>/g).length === code.match(/<fieldset>/g).length, "Make sure your <code>fieldset</code> element has a closing tag.");'
  - text: Tu código debe tener una etiqueta de <code>legend</code> alrededor del texto que pregunta qué nivel de ninja es un usuario.
    testString: 'assert($("legend").length == 1, "Your code should have a <code>legend</code> tag around the text asking what level ninja a user is.");'
  - text: Su código no debe tener ninguna etiqueta <code>div</code> .
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
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <section>
    <form>
      <p>Sign up to receive Camper Cat's blog posts by email here!</p>
      <label for="email">Email:</label>
      <input type="text" id="email" name="email">


      <!-- Add your code below this line -->
      <div>
        <p>What level ninja are you?</p>
        <input id="newbie" type="radio" name="levels" value="newbie">
        <label for="newbie">Newbie Kitten</label><br>
        <input id="intermediate" type="radio" name="levels" value="intermediate">
        <label for="intermediate">Developing Student</label><br>
        <input id="master" type="radio" name="levels" value="master">
        <label for="master">Master</label>
      </div>
      <!-- Add your code above this line -->


      <input type="submit" name="submit" value="Submit">
    </form>
  </section>
  <article>
    <h2>The Garfield Files: Lasagna as Training Fuel?</h2>
    <p>The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses. But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that is lasagna...</p>
  </article>
  <img src="samuraiSwords.jpeg" alt="">
  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightening speed. But chin up, fellow fighters, our time for victory may soon be near...</p>
  </article>
  <img src="samuraiSwords.jpeg" alt="">
  <article>
    <h2>Is Chuck Norris a Cat Person?</h2>
    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
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
