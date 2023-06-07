---
id: bd7158d8c442eddfaeb5bd18
title: Construye una página de homenaje
challengeType: 14
forumTopicId: 301147
dashedName: build-a-tribute-page
---

# --description--

**Objetivo:** Crea una aplicación que sea funcionalmente similar a <a href="https://tribute-page.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://tribute-page.freecodecamp.rocks</a>

**Instrucciones:**

1. Tu página de homenaje debe tener un elemento `main` con un `id` correspondiente de `main`, que contiene los demás elementos
1. La página debe tener un elemento `id` de `title`, el cual contendrá una cadena de caracteres (p. ej. texto), que describe el tema de la página de homenaje (p. ej. "Dr. Norman Borlaug")
1. La página debe tener tanto un elemento `figure` o un elemento `div` con un `id` de `img-div`
1. Dentro del elemento `#img-div` debe tener un elemento `img` con su correspondiente `id="image"`
1. Dentro del elemento `#img-div`, debes ver un elemento con un `id="img-caption"` correspondiente que contiene contenido textual describiendo la imagen mostrada en `#img-div`
1. Debe tener su correspondiente elemento `id="tribute-info"`, que contendrá una descripción textual del sujeto de la página tributo
1. Debes ver un elemento `a` con su `id="tribute-link"` correspondiente, que contiene información adicional sobre el tema de la página de homenaje. CONSEJO: Debes dar al elemento un atributo `target` y establecerlo como `_blank` para que tu enlace se abra en una nueva pestaña
1. Tú `#image` debe usar las propiedades `max-width` y `height` para redimensionarse en función de la anchura de su elemento padre, sin sobrepasar su tamaño original
1. Tu elemento `img` debe estar centrado con respecto al elemento que lo contiene

Completa las historias de usuario y pasa todas las pruebas a continuación para completar este proyecto. Dale tu propio estilo. ¡Feliz día programando!

**Nota:** Asegúrate de agregar `<link rel="stylesheet" href="styles.css">` en tu HTML para enlazar tu hoja de estilos y aplicar tu CSS

# --hints--

Debes tener un elemento `main` con un `id` de `main`.

```js
const el = document.getElementById('main')
assert(!!el && el.tagName === 'MAIN')
```

Tu `#img-div`, `#image`, `#img-caption`, `#tribute-info`, y `#tribute-link` deben ser descendientes de `#main`.

```js
const el1 = document.querySelector('#main #img-div')
const el2 = document.querySelector('#main #image')
const el3 = document.querySelector('#main #img-caption')
const el4 = document.querySelector('#main #tribute-info')
const el5 = document.querySelector('#main #tribute-link')
assert(!!el1 & !!el2 && !!el3 && !!el4 && !!el5)
```

Debes tener un elemento con un `id` de `title`.

```js
const el = document.getElementById('title')
assert(!!el)
```

Tu `#title` no debe estar vacío.

```js
const el = document.getElementById('title')
assert(!!el && el.innerText.length > 0)

```

Debes tener un elemento `figure` o `div` con un `id` de `img-div`.

```js
const el = document.getElementById('img-div')
assert(!!el && (el.tagName === 'DIV' || el.tagName === 'FIGURE'))
```

Debes tener un elemento `img` con un `id` de `image`.

```js
const el = document.getElementById('image')
assert(!!el && el.tagName === 'IMG')
```

Tu `#image` debe ser descendiente de `#img-div`.

```js
const el = document.querySelector('#img-div #image')
assert(!!el)
```

Deberías tener un elemento `figcaption` o `div` con un `id` de `img-caption`.

```js
const el = document.getElementById('img-caption')
assert(!!el && (el.tagName === 'DIV' || el.tagName === 'FIGCAPTION'))
```

Tu `#img-caption` debe ser descendiente de `#img-div`.

```js
const el = document.querySelector('#img-div #img-caption')
assert(!!el)
```

Tu `#img-caption` no debe estar vacío.

```js
const el = document.getElementById('img-caption')
assert(!!el && el.innerText.length > 0)
```

Debes tener un elemento con un `id` de `tribute-info`.

```js
const el = document.getElementById('tribute-info')
assert(!!el)
```

Tu `#tribute-info` no debe estar vacío.

```js
const el = document.getElementById('tribute-info')
assert(!!el && el.innerText.length > 0)
```

Debes tener un elemento `a` con un `id` de `tribute-link`.

```js
const el = document.getElementById('tribute-link')
assert(!!el && el.tagName === 'A')
```

Tu `#tribute-link` debe tener un atributo `href` con un enlace.

```js
const el = document.getElementById('tribute-link')
assert(!!el && !!el.href && el.href.length > 0)
```

Tu `#tribute-link` debe tener un atributo `target` establecido en `_blank`.

```js
const el = document.getElementById('tribute-link')
assert(!!el && el.target === '_blank')
```

Tu elemento `img` debe tener un `display` de `block`.

```js
const img = document.getElementById('image');
const imgStyle = window.getComputedStyle(img);
const style = imgStyle?.getPropertyValue('display')
assert(style === 'block')
```

Tu `#image` debe tener un `max-width` de `100%`.

```js
const img = document.getElementById('image');
const imgStyle = window.getComputedStyle(img);
const style = imgStyle?.getPropertyValue('max-width')
assert(style === '100%')
```

Tu `#image` debe tener un `height` de `auto`.

```js
// taken from the testable-projects repo
const img = document.getElementById('image');
const imgStyle = window.getComputedStyle(img);
const oldDisplayValue = imgStyle.getPropertyValue('display');
const oldDisplayPriority = imgStyle.getPropertyPriority('display');
img?.style.setProperty('display', 'none', 'important');
const heightValue = imgStyle?.getPropertyValue('height')
img?.style.setProperty('display', oldDisplayValue, oldDisplayPriority);
assert(heightValue === 'auto')
```

Tu `#image` debe estar centrado con respecto al elemento que lo contiene.

```js
// taken from the testable-projects repo
const img = document.getElementById('image'),
  imgParent = img?.parentElement,
  imgLeft = img?.getBoundingClientRect().left,
  imgRight = img?.getBoundingClientRect().right,
  parentLeft = imgParent?.getBoundingClientRect().left,
  parentRight = imgParent?.getBoundingClientRect().right,
  leftMargin = imgLeft - parentLeft,
  rightMargin = parentRight - imgRight;
assert(leftMargin - rightMargin < 6 && rightMargin - leftMargin < 6)
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
    <link
      href="https://fonts.googleapis.com/css?family=Pacifico"
      rel="stylesheet"

    />
    <link
      href="https://fonts.googleapis.com/css?family=Lobster"
      rel="stylesheet"

    />
    <link href="styles.css" rel="stylesheet" />
    <title>Tribute Page</title>
  </head>
  <body>
    <h1>Tribute Page</h1>
    <p>The below card was designed as a tribute page for freeCodeCamp.</p>
    <main id="main">
      <div id="img-div">
        <img
          id="image"
          class="border"
          src="https://upload.wikimedia.org/wikipedia/en/5/53/Pok%C3%A9mon_Togepi_art.png"
          alt="An image of Togepi"
        />
        <figcaption id="img-caption">Togepi, happy as always.</figcaption>
      </div>
      <h2 id="title">Togepi</h2>
      <hr />
      <div id="tribute-info">
        <p>
          Togepi was first discovered in the Johto region, when Ash Ketchum
          discovered a mysterious egg. However, when the egg hatched, Togepi saw
          Ash's friend Misty first and imprinted on her. Like many other
          creatures, this imprinting process created a bond and Togepi views
          Misty as his mother.
        </p>
        <p>
          Togepi is a very childlike Pokemon, and is very emotionally
          expressive. He demonstrates extreme levels of joy and sadness.
        </p>
        <hr />
        <p><u>Battle Information</u></p>
        <ul style="list-style-type: none">
          <li>Type: Fairy</li>
          <li>Evolutions: Togepi -> Togetic -> Togekiss</li>
          <li>Moves: Growl, Pound, Sweet Kiss, Charm</li>
          <li>Weaknesses: Poison, Steel</li>
          <li>Resistances: Dragon</li>
        </ul>
        <p>
          Check out this
          <a
            id="tribute-link"
            href="https://bulbapedia.bulbagarden.net/wiki/Togepi_(Pok%C3%A9mon)"
            target="_blank"
            rel="noopener noreferrer"
            >Bulbapedia article on Togepi</a
          >
          for more information on this great Pokemon.
        </p>
      </div>
    </main>
  </body>
  <footer>
    <a href="../">Return to Project List</a> |
    <a href="https://www.nhcarrigan.com">Return to HomePage</a>
  </footer>
</html>
```

```css
body {
  background-color: #3a3240;
  color: white;
}
main {
  background-color: #92869c;
  font-family: Lobster;
  max-width: 500px;
  margin: 20px auto;
  color: black;
  border-radius: 50px;
  box-shadow: 10px 10px rgba(0, 0, 0, 0.5);
}
h2 {
  text-align: center;
  font-size: 20pt;
  font-family: Pacifico;
}
body {
  text-align: center;
  font-size: 12pt;
}
footer {
  text-align: center;
  font-size: 10pt;
}
.border {
  border-color: black;
  border-width: 5px;
  border-style: solid;
}
#image {
  height: auto;
  display: block;
  margin: auto;
  max-width: 100%;
  border-radius: 50%;
}
#img-caption {
  font-size: 10pt;
}
a:not(#tribute-link) {
  color: white;
}
hr {
  border-color: black;
}
```
