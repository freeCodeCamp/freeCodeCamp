---
id: 587d78af367417b2b2512b03
title: Crea un formulario de encuesta
challengeType: 14
forumTopicId: 301145
dashedName: build-a-survey-form
---

# --description--

**Objetivo:** Crea una aplicación que sea funcionalmente similar a <a href="https://survey-form.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://survey-form.freecodecamp.rocks</a>

**Historias de usuario:**

1. Debes tener un título de página en un elemento `h1` con un `id` de `title`
1. Debes tener una corta explicación en el elemento `p` con un `id` de `description`
1. Debes tener un elemento `form` con un `id` de `survey-form`
1. Dentro del elemento form, debe ser **required** (requerido) ingresar tu nombre en un campo de `input` que tenga un `id` de `name` y un `type` de `text`
1. Dentro del elemento form **required** (requerido) ingresar tu nombre en un campo de `input` que tenga un `id` de `email`
1. Si ingresas un email que no tenga el formato correcto, verás un error de validación HTML5
1. Dentro del formulario, puedes ingresar un número en un campo de `input` que tenga un `id` de `number`
1. La entrada de números no debe aceptar caracteres no numéricos, ya sea impidiendo que los escribas o mostrando un error de validación HTML5 (dependiendo del navegador).
1. Si ingrisas un número que esté fuera del rango de números permitido, que es definido por los atributos `min` y `max`, verás un error de validación de HTML5
1. Para los campos de entrada de nombre, email y número, puedes ver los correspondientes elementos `label` en el formulario, que describen el propósito de cada campo con los siguientes id: `id="name-label"`, `id="email-label"` y `id="number-label"`
1. Para los campos de entrada de nombre, email y número, podrás ver un texto provisional que da una descripción o instrucciones para cada campo
1. Dentro del elemento form, debes tener un elemento desplegable `select` con un `id` de `dropdown` con al menos dos opciones para elegir
1. Dentro del elemento form, puedes seleccionar una opción de un grupo de al menos dos botones de radio que son agrupado utilizando el atributo `name`
1. Dentro del elemento form, puedes seleccionar varios campos en una serie de casillas de verificación, cada una debe tener un atributo `value`
1. Dentro del elemento form, se te presenta un `textarea` para comentarios adicionales
1. Dentro del elemento form, se te presenta un botón con un `id` de `submit` para enviar todas las entradas

Completa las historias de usuario y pasa todas las pruebas a continuación para completar este proyecto. Dale tu propio estilo personal. ¡Feliz día programando!

**Nota:** Asegurate de agregar `<link rel="stylesheet" href="styles.css">` en tu HTML para enlazar tu hoja de estilos y aplicar tu CSS

# --hints--

Debes tener un elemento `h1` con un `id` de `title`.

```js
const el = document.getElementById('title')
assert(!!el && el.tagName === 'H1')
```

Tu `#title` no debe estar vacío.

```js
const el = document.getElementById('title')
assert(!!el && el.innerText.length > 0)
```

Debes tener un elemento `p` con un `id` de `description`.

```js
const el = document.getElementById('description')
assert(!!el && el.tagName === 'P')
```

Tu `#description` no debe estar vacío.

```js
const el = document.getElementById('description')
assert(!!el && el.innerText.length > 0)
```

Debes tener un elemento `form` con un `id` de `survey-form`.

```js
const el = document.getElementById('survey-form')
assert(!!el && el.tagName === 'FORM')
```

Debes tener un elemento `input` con un `id` de `name`.

```js
const el = document.getElementById('name')
assert(!!el && el.tagName === 'INPUT')
```

Tu `#name` debe tener un `type` de `text`.

```js
const el = document.getElementById('name')
assert(!!el && el.type === 'text')
```

Tu `#name` debe requerir una entrada.

```js
const el = document.getElementById('name')
assert(!!el && el.required)
```

Tu `#name` debe ser descendiente de `#survey-form`.

```js
const el = document.querySelector('#survey-form #name')
assert(!!el)
```

Debes tener un elemento `input` con un `id` de `email`.

```js
const el = document.getElementById('email')
assert(!!el && el.tagName === 'INPUT')
```

Tu `#email` debe tener un `type` de `email`.

```js
const el = document.getElementById('email')
assert(!!el && el.type === 'email')
```

Tu `#email` debe requerir una entrada.

```js
const el = document.getElementById('email')
assert(!!el && el.required)
```

Tú `#email` debe ser descendiente de `#survey-form`.

```js
const el = document.querySelector('#survey-form #email')
assert(!!el)
```

Debes tener un elemento `input` con un `id` de `number`.

```js
const el = document.getElementById('number')
assert(!!el && el.tagName === 'INPUT')
```

Tu `#number` debe ser descendiente de `#survey-form`.

```js
const el = document.querySelector('#survey-form #number')
assert(!!el)
```

Tu `#number` debe tner un `type`de `number`.

```js
const el = document.getElementById('number')
assert(!!el && el.type === 'number')
```

Tu `#number` debe tener un atributo `min` con un valor numérico.

```js
const el = document.getElementById('number')
assert(!!el && el.min && isFinite(el.min))
```

Tu `#number` debe tener un atributo `max` con un valor numérico.

```js
const el = document.getElementById('number')
assert(!!el && el.max && isFinite(el.max))
```

Debes tener un elemento `label` con un `id` de `name-label`.

```js
const el = document.getElementById('name-label')
assert(!!el && el.tagName === 'LABEL')
```

Debes tener un elemento `label` con un `id` de `email-label`.

```js
const el = document.getElementById('email-label')
assert(!!el && el.tagName === 'LABEL')
```

Debes tener un elemento `label` con un `id` de `number-label`.

```js
const el = document.getElementById('number-label')
assert(!!el && el.tagName === 'LABEL')
```

Tu `#name-label` debe contener un texto que describa la entrada.

```js
const el = document.getElementById('name-label')
assert(!!el && el.innerText.length > 0)
```

Tu `#email-label` debe contener un texto que describa la entrada.

```js
const el = document.getElementById('email-label')
assert(!!el && el.innerText.length > 0)
```

Tu `#number-label` debe contener un texto que describa la entrada.

```js
const el = document.getElementById('number-label')
assert(!!el && el.innerText.length > 0)
```

Tu `#name-label` debe ser descendiente de `#survey-form`.

```js
const el = document.querySelector('#survey-form #name-label')
assert(!!el)
```

Tu `#email-label` debe ser descendiente de `#survey-form`.

```js
const el = document.querySelector('#survey-form #email-label')
assert(!!el)
```

Tu `#number-label` debe ser descendiente de `#survey-form`.

```js
const el = document.querySelector('#survey-form #number-label')
assert(!!el)
```

Tu `#name` debe tener el atributo `placeholder` y un valor.

```js
const el = document.getElementById('name')
assert(!!el && !!el.placeholder && el.placeholder.length > 0)
```

Tu `#email` debe tener un atributo `placeholder` y un valor.

```js
const el = document.getElementById('email')
assert(!!el && !!el.placeholder && el.placeholder.length > 0)
```

Tu `#number` debe tener un atributo `placeholder` y un valor.

```js
const el = document.getElementById('number')
assert(!!el && !!el.placeholder && el.placeholder.length > 0)
```

Debes tener un campo `select` con un `id` de `dropdown`.

```js
const el = document.getElementById('dropdown')
assert(!!el && el.tagName === 'SELECT')
```

Tu `#dropdown` debe tener al menos dos elementos `option` seleccionables (no deshabilitados).

```js
const els = document.querySelectorAll('#dropdown option:not([disabled])')
assert(els.length >= 2)
```

Tu `#dropdown` debe ser descendiente de `#survey-form`.

```js
const el = document.querySelector('#survey-form #dropdown')
assert(!!el)
```

Debes tener al menos dos elementos `input` con un `type` de `radio` (botones de radio).

```js
const els = document.querySelectorAll('input[type="radio"]')
assert(els.length >= 2)
```

Debes tener al menos dos botones de radio que sean descendientes de `#survey-form`.

```js
const els = document.querySelectorAll('#survey-form input[type="radio"]')
assert(els.length >= 2)
```

Todos tus botones de radio deben tener un atributo `value` y un valor.

```js
const els1 = document.querySelectorAll('input[type="radio"]')
const els2 = document.querySelectorAll('input[type="radio"][value=""], input[type="radio"]:not([value])')
assert(els1.length > 0 && els2.length === 0)
```

Todos tus botones de radio deben tener un atributo `name` y un valor.

```js
const els1 = document.querySelectorAll('input[type="radio"]')
const els2 = document.querySelectorAll('input[type="radio"][name=""], input[type="radio"]:not([name])')
assert(els1.length > 0 && els2.length === 0)
```

Cada grupo de botón de radio debe tener al menos 2 botones de radio.

```js
const radioButtons = document.querySelectorAll('input[type="radio"]');
const groups = {}

if (radioButtons) {
  radioButtons.forEach(el => {
    if (!groups[el.name]) groups[el.name] = []
    groups[el.name].push(el)
  })
}

const groupKeys = Object.keys(groups)

groupKeys.forEach(key => {
  if (groups[key].length < 2) assert(false)
})

assert(groupKeys.length > 0)
```

Debes tener al menos dos elementos `input` con un `type` de `checkbox` (casillas de verificación) que sean descendientes de `#survey-form`.

```js
const els = document.querySelectorAll('#survey-form input[type="checkbox"]');
assert(els.length >= 2)
```

Todos tus casillas de verificación dentro de `#survey-form` deben tener un atributo `value` y un valor.

```js
const els1 = document.querySelectorAll('#survey-form input[type="checkbox"]')
const els2 = document.querySelectorAll('#survey-form input[type="checkbox"][value=""], #survey-form input[type="checkbox"]:not([value])')
assert(els1.length > 0 && els2.length === 0)
```

Debes tener al menos un elemento de `textarea` que sea descendiente de `#survey-form`.

```js
const el = document.querySelector('#survey-form textarea')
assert(!!el)
```

Debes tener un elemento `input` o `button` con un `id` de `submit`.

```js
const el = document.getElementById('submit')
assert(!!el && (el.tagName === 'INPUT' || el.tagName === 'BUTTON'))
```

Tu `#submit` debe tener un `type` de `submit`.

```js
const el = document.getElementById('submit')
assert(!!el && el.type === 'submit')
```

Tu `#submit` debe ser descendiente de `#survey-form`.

```js
const el = document.querySelector('#survey-form #submit')
assert(!!el)
```

# --seed--

## --seed-contents--

```html

```

```css

```

## --solutions--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="styles.css" />
    <title>Survey Form</title>
  </head>
  <body>
    <h1>Survey Form</h1>
    <p>The card below was built as a sample survey form for freeCodeCamp.</p>
    <main id="main">
      <h1 id="title">Join the Togepi Fan Club!</h1>
      <p id="description">
        Enter your information here to receive updates about club activities,
        our monthly newsletter, and other email communications.
      </p>
      <form id="survey-form" action="#">
        <label for="name" id="name-label"
          ><p>Name:</p>
          <input type="text" id="name" placeholder="e.g. John Smith" required />
        </label>
        <label for="email" id="email-label"
          ><p>Email:</p>
          <input
            type="email"
            id="email"
            placeholder="e.g. john.smith@email.com"
            required
          />
        </label>
        <label for="age" id="number-label"
          ><p>Age<em>(optional)</em>:</p>
          <input
            type="number"
            id="number"
            placeholder="e.g. 19"
            min="18"
            max="99"
          />
        </label>
        <label for="interest" id="interest-label"
          ><p>What are you most interested in?</p>
          <select id="dropdown">
            <option selected disabled hidden></option>
            <option id="battles">Battling</option>
            <option id="breeding">Breeding</option>
            <option id="catching">Completing my Pokedex</option>
            <option id="exploring">Exploring new regions</option>
          </select>
        </label>
        <p>Who is your favourite Pokemon?</p>
        <label for="togepi">
          <input
            id="togepi"
            type="radio"
            name="favorite"
            value="togepi"
          />Togepi!
        </label>
        <label for="pikachu">
          <input
            id="pikachu"
            type="radio"
            name="favorite"
            value="pikachu"
          />Pikachu
        </label>
        <label for="other">
          <input id="other" type="radio" name="favorite" value="other" />Other
        </label>
        <p>Which communications do you want to receive?</p>
        <label for="newsletter">
          <input
            id="newsletter"
            type="checkbox"
            name="communications"
            value="newsletter"
          />Newsletter
        </label>
        <label for="events">
          <input
            id="events"
            type="checkbox"
            name="communications"
            value="events"
          />Event updates
        </label>
        <label for="updates">
          <input
            id="updates"
            type="checkbox"
            name="communications"
            value="updates"
          />Club updates
        </label>
        <p>Any other information you would like to share?</p>
        <textarea id="additional-information" rows="4" cols="50">
You can provide comments, suggestions, or feedback here.</textarea
        >
        <p>
          <em
            >Please note: This form is a proof of concept. Submitting the form
            will not actually transmit your data.</em
          >
        </p>
        <button type="Submit" id="submit">Submit</button>
      </form>
    </main>
  </body>
  <footer>
    <a href="../">Return to Project List</a> |
    <a href="https://www.nhcarrigan.com">Return to HomePage</a>
  </footer>
</html>
```

```css
main {
  text-align: center;
  background-color: #92869c;
  background-blend-mode: lighten;
  max-width: 500px;
  margin: 20px auto;
  border-radius: 50px;
  box-shadow: 10px 10px rgba(0, 0, 0, 0.5);
  color: black;
}
body {
  text-align: center;
  background: #3a3240;
  color: white;
}
input, textarea, select, button {
  background: #3a3240;
  color: white;
}
a {
  color: white;
}
```
