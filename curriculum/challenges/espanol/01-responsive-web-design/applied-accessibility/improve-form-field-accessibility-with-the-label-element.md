---
id: 587d778a367417b2b2512aa6
title: Mejora la accesibilidad del campo de formulario con el elemento label (etiqueta)
challengeType: 0
videoUrl: 'https://scrimba.com/c/cGJMMAN'
forumTopicId: 301016
dashedName: improve-form-field-accessibility-with-the-label-element
---

# --description--

La mejora de la accesibilidad con el marcado semántico HTML se aplica al uso de nombres de etiquetas y atributos apropiados. Los próximos desafíos cubren algunos escenarios importantes utilizando atributos en formularios.

La etiqueta `label` contiene el texto para un elemento específico de control de formulario, por lo general el nombre o etiqueta para una elección. Esto vincula el significado al elemento y hace que el formulario se lea mejor. El atributo `for` en una etiqueta `label` asocia de manera explícita dicho `label` con el control de formulario utilizado por los lectores de pantalla.

Ya aprendiste sobre botones de radio y sus etiquetas en una lección de la sección de HTML básico. En esa lección, colocamos el elemento de entrada del botón de radio dentro de la etiqueta `label` junto con la etiqueta del texto para hacer que el texto se pueda cliquear. Otra forma de lograr esto es usando el atributo `for`, como se explica en esta lección.

El valor del atributo `for` debe ser igual al valor del atributo `id` del formulario de control. Por ejemplo:

```html
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
</form>
```

# --instructions--

Camper Cat espera que haya mucho interés en sus publicaciones bien armadas en el blog y quiere incluir un formulario de registro por correo electrónico. Añade un atributo `for` en el correo electrónico `label` que coincida con el `id` en su campo `input`.

# --hints--

Tu código debe tener un atributo `for` en una etiqueta `label` que no esté vacía.

```js
assert($('label').attr('for'));
```

El valor del atributo `for` debe coincidir con el valor `id` en el correo electrónico `input`.

```js
assert($('label').attr('for') == 'email');
```

# --seed--

## --seed-contents--

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
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near...</p>
  </article>
  <img src="samuraiSwords.jpeg" alt="">
  <article>
    <h2>Is Chuck Norris a Cat Person?</h2>
    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence that anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

# --solutions--

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
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near...</p>
  </article>
  <img src="samuraiSwords.jpeg" alt="">
  <article>
    <h2>Is Chuck Norris a Cat Person?</h2>
    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence that anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```
