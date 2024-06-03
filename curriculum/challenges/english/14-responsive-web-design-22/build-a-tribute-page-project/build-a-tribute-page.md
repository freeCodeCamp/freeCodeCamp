---
id: bd7158d8c442eddfaeb5bd18
title: Build a Tribute Page
challengeType: 14
forumTopicId: 301147
dashedName: build-a-tribute-page
---

# --description--

**Objective:** Build an app that is functionally similar to <a href="https://tribute-page.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://tribute-page.freecodecamp.rocks</a>. **Do not copy this demo project**.


**User Stories:**

1. Your tribute page should have a `main` element with a corresponding `id` of `main`, which contains all other elements
1. You should see an element with an `id` of `title`, which contains a string (i.e. text), that describes the subject of the tribute page (e.g. "Dr. Norman Borlaug")
1. You should see either a `figure` or a `div` element with an `id` of `img-div`
1. Within the `#img-div` element, you should see an `img` element with a corresponding `id="image"`
1. Within the `#img-div` element, you should see an element with a corresponding `id="img-caption"` that contains textual content describing the image shown in `#img-div`
1. You should see an element with a corresponding `id="tribute-info"`, which contains textual content describing the subject of the tribute page
1. You should see an `a` element with a corresponding `id="tribute-link"`, which links to an outside site, that contains additional information about the subject of the tribute page. HINT: You must give your element an attribute of `target` and set it to `_blank` in order for your link to open in a new tab
1. Your `#image` should use `max-width` and `height` properties to resize responsively, relative to the width of its parent element, without exceeding its original size
1. Your `img` element should be centered within its parent element

Fulfill the user stories and pass all the tests below to complete this project. Give it your own personal style. Happy Coding!

**Note:** Be sure to add `<link rel="stylesheet" href="styles.css">` in your HTML to link your stylesheet and apply your CSS

# --hints--

You should have a `main` element with an `id` of `main`.

```js
const el = document.getElementById('main')
assert(!!el && el.tagName === 'MAIN')
```

Your `#img-div`, `#image`, `#img-caption`, `#tribute-info`, and `#tribute-link` should all be descendants of `#main`.

```js
const el1 = document.querySelector('#main #img-div')
const el2 = document.querySelector('#main #image')
const el3 = document.querySelector('#main #img-caption')
const el4 = document.querySelector('#main #tribute-info')
const el5 = document.querySelector('#main #tribute-link')
assert(!!el1 & !!el2 && !!el3 && !!el4 && !!el5)
```

You should have an element with an `id` of `title`.

```js
const el = document.getElementById('title')
assert(!!el)
```

Your `#title` should not be empty.

```js
const el = document.getElementById('title')
assert(!!el && el.innerText.length > 0)

```

You should have a `figure` or `div` element with an `id` of `img-div`.

```js
const el = document.getElementById('img-div')
assert(!!el && (el.tagName === 'DIV' || el.tagName === 'FIGURE'))
```

You should have an `img` element with an `id` of `image`.

```js
const el = document.getElementById('image')
assert(!!el && el.tagName === 'IMG')
```

Your `#image` should be a descendant of `#img-div`.

```js
const el = document.querySelector('#img-div #image')
assert(!!el)
```

You should have a `figcaption` or `div` element with an `id` of `img-caption`.

```js
const el = document.getElementById('img-caption')
assert(!!el && (el.tagName === 'DIV' || el.tagName === 'FIGCAPTION'))
```

Your `#img-caption` should be a descendant of `#img-div`.

```js
const el = document.querySelector('#img-div #img-caption')
assert(!!el)
```

Your `#img-caption` should not be empty.

```js
const el = document.getElementById('img-caption')
assert(!!el && el.innerText.length > 0)
```

You should have an element with an `id` of `tribute-info`.

```js
const el = document.getElementById('tribute-info')
assert(!!el)
```

Your `#tribute-info` should not be empty.

```js
const el = document.getElementById('tribute-info')
assert(!!el && el.innerText.length > 0)
```

You should have an `a` element with an `id` of `tribute-link`.

```js
const el = document.getElementById('tribute-link')
assert(!!el && el.tagName === 'A')
```

Your `#tribute-link` should have an `href` attribute and value.

```js
const el = document.getElementById('tribute-link')
assert(!!el && !!el.href && el.href.length > 0)
```

Your `#tribute-link` should have a `target` attribute set to `_blank`.

```js
const el = document.getElementById('tribute-link')
assert(!!el && el.target === '_blank')
```

Your `img` element should have a `display` of `block`.

```js
const img = document.getElementById('image');
const imgStyle = window.getComputedStyle(img);
const style = imgStyle?.getPropertyValue('display')
assert(style === 'block')
```

Your `#image` should have a `max-width` of `100%`.

```js
const img = document.getElementById('image');
const imgStyle = window.getComputedStyle(img);
const style = imgStyle?.getPropertyValue('max-width')
assert(style === '100%')
```

Your `#image` should have a `height` of `auto`.

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

Your `#image` should be centered within its parent.

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

# --solutions--

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
