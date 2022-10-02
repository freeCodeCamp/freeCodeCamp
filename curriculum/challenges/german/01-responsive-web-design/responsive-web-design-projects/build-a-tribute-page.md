---
id: bd7158d8c442eddfaeb5bd18
title: Erstelle eine Gedenkseite
challengeType: 14
forumTopicId: 301147
dashedName: build-a-tribute-page
---

# --description--

**Aufgabe:** Erstelle eine Anwendung, die eine ähnliche Funktionalität wie <a href="https://tribute-page.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://tribute-page.freecodecamp.rocks</a> aufweist

**User Stories:**

1. Deine Gedenkseite sollte über ein `main`-Element mit einer zugehörigen `id` von `main` verfügen, die alle anderen Elemente enthält
1. Du solltest ein Element mit einer `id` von `title` sehen, das einen String (d.h. Text) enthält, der das Thema der Gedenkseite beschreibt (z.B. „Dr. Norman Borlaug“)
1. Du solltest entweder ein `figure`- oder ein `div`-Element mit einer `id` von `img-div` sehen
1. Du solltest innerhalb des `#img-div`-Elements ein `img`-Element mit zugehöriger `id="image"` sehen
1. Du solltest innerhalb des `#img-div`-Elements ein Element mit zugehöriger `id="img-caption"` sehen, der einen Text enthält, der das in `#img-div` angezeigte Bild beschreibt.
1. Du solltest ein Element mit zugehöriger `id="tribute-info"` sehen, welches das Thema der Gedenkseite beschreibenden Textinhalt enthält
1. Du solltest ein `a`-Element mit zugehöriger `id="tribute-link"` sehen, welches auf eine externe Seite verweist, die zusätzliche Informationen über das Thema der Gedenkseite enthält. TIPP: Du musst deinem Element ein Attribut von `target` zuweisen und es auf `_blank` setzen, damit der Link in einem neuen Tab geöffnet werden kann
1. Dein `#image` sollte die `max-width`- und `height`-Eigenschaften verwenden, um die Größenänderung responsiv zu gestalten, d. h. relativ zur Breite des Elternelements, ohne dessen Originalgröße zu überschreiten
1. Dein `img`-Element sollte innerhalb des Elternelements zentriert werden

Erfülle die folgenden User Stories und bestehe alle Tests, um dieses Projekt abzuschließen. Gib dem Ganzen deinen persönlichen Stil. Viel Spaß beim Programmieren!

**Hinweis:** Achte darauf, `<link rel="stylesheet" href="styles.css">` in deinen HTML-Code einzufügen, um dein Stylesheet zu verknüpfen und deinen CSS-Code anwenden zu können

# --hints--

Du solltest ein `main`-Element mit einer `id` von `main` haben.

```js
const el = document.getElementById('main')
assert(!!el && el.tagName === 'MAIN')
```

Dein `#img-div`, `#image`, `#img-caption`, `#tribute-info` und `#tribute-link` sollten alle Nachfahren (descendants) von `#main` sein.

```js
const el1 = document.querySelector('#main #img-div')
const el2 = document.querySelector('#main #image')
const el3 = document.querySelector('#main #img-caption')
const el4 = document.querySelector('#main #tribute-info')
const el5 = document.querySelector('#main #tribute-link')
assert(!!el1 & !!el2 && !!el3 && !!el4 && !!el5)
```

Du solltest ein Element mit einer `id` von `title` haben.

```js
const el = document.getElementById('title')
assert(!!el)
```

Dein `#title` sollte nicht leer sein.

```js
const el = document.getElementById('title')
assert(!!el && el.innerText.length > 0)

```

Du solltest ein `figure`- oder `div`-Element mit einer `id` von `img-div` haben.

```js
const el = document.getElementById('img-div')
assert(!!el && (el.tagName === 'DIV' || el.tagName === 'FIGURE'))
```

Du solltest ein `img`-Element mit einer `id` von `image` haben.

```js
const el = document.getElementById('image')
assert(!!el && el.tagName === 'IMG')
```

Dein `#image` sollte ein Nachfahre (descendant) von `#img-div` sein.

```js
const el = document.querySelector('#img-div #image')
assert(!!el)
```

Du solltest ein `figcaption`- oder `div`-Element mit einer `id` von `img-caption` haben.

```js
const el = document.getElementById('img-caption')
assert(!!el && (el.tagName === 'DIV' || el.tagName === 'FIGCAPTION'))
```

Dein `#img-caption` sollte ein Nachfahre (descendant) von `#img-div` sein.

```js
const el = document.querySelector('#img-div #img-caption')
assert(!!el)
```

Dein `#img-caption` sollte nicht leer sein.

```js
const el = document.getElementById('img-caption')
assert(!!el && el.innerText.length > 0)
```

Du solltest ein Element mit einer `id` von `tribute-info` haben.

```js
const el = document.getElementById('tribute-info')
assert(!!el)
```

Dein `#tribute-info` sollte nicht leer sein.

```js
const el = document.getElementById('tribute-info')
assert(!!el && el.innerText.length > 0)
```

Du solltest ein `a`-Element mit einer `id` von `tribute-link` haben.

```js
const el = document.getElementById('tribute-link')
assert(!!el && el.tagName === 'A')
```

Dein `#tribute-link` sollte ein `href`-Attribut und einen -Wert haben.

```js
const el = document.getElementById('tribute-link')
assert(!!el && !!el.href && el.href.length > 0)
```

Dein `#tribute-link` sollte ein, auf `_blank` gesetztes, `target`-Attribut haben.

```js
const el = document.getElementById('tribute-link')
assert(!!el && el.target === '_blank')
```

Dein `img`-Element sollte ein `display` von `block` enthalten.

```js
const img = document.getElementById('image');
const imgStyle = window.getComputedStyle(img);
const style = imgStyle?.getPropertyValue('display')
assert(style === 'block')
```

Dein `#image` sollte eine `max-width` von `100%` haben.

```js
const img = document.getElementById('image');
const imgStyle = window.getComputedStyle(img);
const style = imgStyle?.getPropertyValue('max-width')
assert(style === '100%')
```

Dein `#image` sollte eine `height` von `auto` haben.

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

Dein `#image` sollte innerhalb der Elternklasse zentriert sein.

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
