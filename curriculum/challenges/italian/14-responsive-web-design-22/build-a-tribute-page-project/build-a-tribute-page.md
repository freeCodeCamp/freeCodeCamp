---
id: bd7158d8c442eddfaeb5bd18
title: Crea una Tribute Page
challengeType: 14
forumTopicId: 301147
dashedName: build-a-tribute-page
---

# --description--

**Obiettivo:** crea un'app funzionalmente simile a <a href="https://tribute-page.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://tribute-page.freecodecamp.rocks</a>

**User story:**

1. La tua Tribute Page dovrebbe avere un elemento `main` con un corrispondente `id` di `main`, che contiene tutti gli altri elementi
1. Dovresti vedere un elemento con un attributo `id` del valore di `title`, che contiene una stringa (cioè del testo) che descrive il soggetto della pagina tributo (per esempio "Dr. Normal Borlaug")
1. Dovresti vedere o un elemento `figure` o un elemento `div` con un attributo `id` del valore di `img-div`
1. Dentro l'elemento `#img-div`, dovresti vedere un elemento `img` con un corrispondente `id="image"`
1. Dentro l'elemento `#img-div`, dovresti vedere un elemento con un corrispondente attributo `id="img-caption"` che contiene del testo che descrive l'immagine mostrata in `#img-div`
1. Dovresti vedere un elemento con un corrispondente attributo `id="tribute-info"` contenente del testo che descrive il soggetto della pagina tributo
1. Dovresti vedere un elemento `a` con un corrispondente attributo `id="tribute-link"` che linka a un sito esterno che contiene informazioni aggiuntive sul soggetto della pagina tributo. Suggerimento: Devi dare al tuo elemento un attributo `target` e impostarlo su `_blank` per far si che il link si apra in una scheda nuova
1. Il tuo elemento `#image` dovrebbe usare le proprietà `max-width` e `height` per ridimensionarsi in maniera reattiva, a seconda della larghezza dell'elemento genitore senza eccedere la dimensione originale
1. Il tuo elemento `img` dovrebbe essere centrato dentro il suo elemento genitore

Soddisfa le user story e passa tutti i test qui sotto per completare questo progetto. Usa il tuo stile personale. Buon divertimento!

**Nota:** Assicurati di aggiungere `<link rel="stylesheet" href="styles.css">` nel tuo HTML per linkare il tuo foglio di stile e applicare il tuo CSS

# --hints--

Dovrebbe esserci un elemento `main` con un `id` del valore di `main`.

```js
const el = document.getElementById('main')
assert(!!el && el.tagName === 'MAIN')
```

Gli elementi `#img-div`, `#image`, `#img-caption`, `#tribute-info` e `#tribute-link` dovrebbero essere tutti discendenti di `#main`.

```js
const el1 = document.querySelector('#main #img-div')
const el2 = document.querySelector('#main #image')
const el3 = document.querySelector('#main #img-caption')
const el4 = document.querySelector('#main #tribute-info')
const el5 = document.querySelector('#main #tribute-link')
assert(!!el1 & !!el2 && !!el3 && !!el4 && !!el5)
```

Dovresti avere un elemento con un attributo `id` del valore di `title`.

```js
const el = document.getElementById('title')
assert(!!el)
```

Il tuo elemento `#title` non dovrebbe essere vuoto.

```js
const el = document.getElementById('title')
assert(!!el && el.innerText.length > 0)

```

Dovrebbe esserci o un elemento `figure` o un elemento `div` con un attributo `id` del valore di `img-div`.

```js
const el = document.getElementById('img-div')
assert(!!el && (el.tagName === 'DIV' || el.tagName === 'FIGURE'))
```

Dovrebbe esserci un elemento `img` con un `id` del valore di `image`.

```js
const el = document.getElementById('image')
assert(!!el && el.tagName === 'IMG')
```

Il tuo elemento `#image` dovrebbe essere un discendente di `#img-div`.

```js
const el = document.querySelector('#img-div #image')
assert(!!el)
```

Dovrebbe esserci o un elemento `figcaption` o un elemento `div` con un attributo `id` di `img-caption`.

```js
const el = document.getElementById('img-caption')
assert(!!el && (el.tagName === 'DIV' || el.tagName === 'FIGCAPTION'))
```

L'elemento `#img-caption` dovrebbe essere un discendente di `#img-div`.

```js
const el = document.querySelector('#img-div #img-caption')
assert(!!el)
```

L'elemento `#img-caption` non dovrebbe essere vuoto.

```js
const el = document.getElementById('img-caption')
assert(!!el && el.innerText.length > 0)
```

Dovrevve esserci un elemento con un attributo `id` del valore di `tribute-info`.

```js
const el = document.getElementById('tribute-info')
assert(!!el)
```

L'elemento `#tribute-info` non dovrebbe essere vuoto.

```js
const el = document.getElementById('tribute-info')
assert(!!el && el.innerText.length > 0)
```

Dovrebbe esserci un elemento `a` con un `id` del valore di `tribute-link`.

```js
const el = document.getElementById('tribute-link')
assert(!!el && el.tagName === 'A')
```

L'elemento `#tribute-link` dovrebbe avere un attributo `href` con un valore.

```js
const el = document.getElementById('tribute-link')
assert(!!el && !!el.href && el.href.length > 0)
```

L'elemento `#tribute-link` dovrebbe avere un attributo `target` con il valore `_blank`.

```js
const el = document.getElementById('tribute-link')
assert(!!el && el.target === '_blank')
```

L'elemento `img` dovrebbe avere una proprietà `display` con il valore `block`.

```js
const img = document.getElementById('image');
const imgStyle = window.getComputedStyle(img);
const style = imgStyle?.getPropertyValue('display')
assert(style === 'block')
```

`#image` dovrebbe avere una proprietà `max-width` del `100%`.

```js
const img = document.getElementById('image');
const imgStyle = window.getComputedStyle(img);
const style = imgStyle?.getPropertyValue('max-width')
assert(style === '100%')
```

`#image` dovrebbe avere una proprietà `height` con il valore `auto`.

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

L'elemento `#image` dovrebbe essere centrato dentro l'elemento genitore.

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
