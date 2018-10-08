---
id: 587d778a367417b2b2512aa6
title: Improve Form Field Accessibility with the label Element
localeTitle: Mejorar la accesibilidad del campo de formulario con la etiqueta Elemento
challengeType: 0
videoUrl: ''
---

## Description
<section id='description'> 
mejora de la accesibilidad con el código HTML semántico se aplica al uso de nombres de etiquetas y atributos apropiados. Los siguientes varios desafíos cubren algunos escenarios importantes utilizando atributos en formularios. 
La <code>label</code> etiqueta envuelve el texto de un elemento de control de formulario específico, generalmente el nombre o la etiqueta de una opción. Esto vincula el significado al elemento y hace que la forma sea más legible. El atributo <code>for</code> en una <code>label</code> etiqueta asocia explícitamente esa <code>label</code> con el control de formulario y es utilizado por los lectores de pantalla. 
Aprendió sobre los botones de radio y sus etiquetas en una lección en la sección HTML básico. En esa lección, envolvimos el elemento de entrada del botón de radio dentro de un elemento de <code>label</code> junto con el texto de la etiqueta para poder hacer clic en el texto. Otra forma de lograr esto es utilizando el atributo <code>for</code> como se explica en esta lección. 
El valor del atributo <code>for</code> debe ser el mismo que el valor del atributo <code>id</code> del control de formulario. Aquí hay un ejemplo: 
<blockquote>&lt;form&gt;<br>&nbsp;&nbsp;&lt;label for=&quot;name&quot;&gt;Name:&lt;/label&gt;<br>&nbsp;&nbsp;&lt;input type=&quottext&quot; id=&quot;name&quot; name=&quot;name&quot;&gt;<br>&lt;/form&gt;<br></blockquote> 
</section>

## Instructions
<section id='instructions'> 
Camper Cat espera mucho interés en las publicaciones de su blog, y desea incluir un formulario de registro por correo electrónico. Agregue un atributo <code>for</code> en la <code>label</code> correo electrónico que coincida con el <code>id</code> en su campo de <code>input</code> . 
</section>

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
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <section>
    <form>
      <p>Sign up to receive Camper Cat's blog posts by email here!</p>


      <label>Email:</label>
      <input type="text" id="email" name="email">


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
