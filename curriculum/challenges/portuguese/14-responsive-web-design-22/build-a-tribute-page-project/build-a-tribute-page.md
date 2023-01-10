---
id: bd7158d8c442eddfaeb5bd18
title: Criar uma página de homenagem
challengeType: 14
forumTopicId: 301147
dashedName: build-a-tribute-page
---

# --description--

**Objetivo:** criar uma aplicação que funcione de modo semelhante a <a href="https://tribute-page.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://tribute-page.freecodecamp.rocks</a>

**Histórias de usuário:**

1. A página de homenagem deve ter um elemento `main` com o `id` `main` correspondente, que envolva todos os demais elementos
1. Deve haver um elemento com `id` `title`, que contenha uma string (ou seja, um texto) que descreva a pessoa a quem a página presta homenagem (por exemplo, "Dr. Norman Borlaug")
1. Você deve ter um elemento `figure` ou um elemento `div` com o `id` `img-div`
1. Dentro do elemento `#img-div`, deve haver um elemento `img` com um `id="image"` correspondente
1. Dentro do elemento `#img-div`, deve haver um elemento com um `id="img-caption"` correspondente que contenha um conteúdo textual descrevendo a imagem mostrada em `#img-div`
1. Deve haver um elemento com `id="tribute-info"`, que contenha conteúdo textual descrevendo a pessoa a quem a página presta homenagem
1. Deve haver um elemento `a` com um `id="tribute-link"`, que leve a um site externo que contenha informações adicionais sobre a pessoa a quem a página presta homenagem. DICA: você deve dar ao seu elemento um atributo `target` e definir o valor para `_blank` para que seu link possa ser aberto em uma nova aba
1. O elemento `#image` deve usar `max-width` e `height` para redimensionar de forma responsiva, em relação à largura de seu elemento pai, sem exceder seu tamanho original
1. O elemento `img` deve ser centralizado dentro de seu elemento pai

Atenda às histórias de usuário e passe em todos os testes abaixo para concluir este projeto. Dê ao projeto o seu próprio estilo pessoal. Boa programação!

**Observação:** não se esqueça de adicionar `<link rel="stylesheet" href="styles.css">` em seu HTML para vincular sua folha de estilo e aplicar seu CSS

# --hints--

Você deve ter um elemento `main` com o `id` `main`.

```js
const el = document.getElementById('main')
assert(!!el && el.tagName === 'MAIN')
```

Os elementos `#img-div`, `#image`, `#img-caption`, `#tribute-info` e `#tribute-link` devem estar aninhados dentro de `#main`.

```js
const el1 = document.querySelector('#main #img-div')
const el2 = document.querySelector('#main #image')
const el3 = document.querySelector('#main #img-caption')
const el4 = document.querySelector('#main #tribute-info')
const el5 = document.querySelector('#main #tribute-link')
assert(!!el1 & !!el2 && !!el3 && !!el4 && !!el5)
```

Você deve ter um elemento com o `id` `title`.

```js
const el = document.getElementById('title')
assert(!!el)
```

O elemento `#title` não deve estar vazio.

```js
const el = document.getElementById('title')
assert(!!el && el.innerText.length > 0)

```

Você deve ter um elemento `figure` ou um elemento `div` com o `id` `img-div`.

```js
const el = document.getElementById('img-div')
assert(!!el && (el.tagName === 'DIV' || el.tagName === 'FIGURE'))
```

Você deve ter um elemento `img` com o `id` `image`.

```js
const el = document.getElementById('image')
assert(!!el && el.tagName === 'IMG')
```

O elemento `#image` deve estar aninhado dentro de `#img-div`.

```js
const el = document.querySelector('#img-div #image')
assert(!!el)
```

Você deve ter um elemento `figcaption` ou um elemento `div` com o `id` `img-caption`.

```js
const el = document.getElementById('img-caption')
assert(!!el && (el.tagName === 'DIV' || el.tagName === 'FIGCAPTION'))
```

O elemento `#img-caption` deve estar aninhado dentro de `#img-div`.

```js
const el = document.querySelector('#img-div #img-caption')
assert(!!el)
```

O elemento `#img-caption` não deve estar vazio.

```js
const el = document.getElementById('img-caption')
assert(!!el && el.innerText.length > 0)
```

Você deve ter um elemento com o `id` `tribute-info`.

```js
const el = document.getElementById('tribute-info')
assert(!!el)
```

O elemento `#tribute-info` não deve estar vazio.

```js
const el = document.getElementById('tribute-info')
assert(!!el && el.innerText.length > 0)
```

Você deve ter um elemento `a` com o `id` `tribute-link`.

```js
const el = document.getElementById('tribute-link')
assert(!!el && el.tagName === 'A')
```

O elemento `#tribute-link` deve ter o atributo `href` e um valor.

```js
const el = document.getElementById('tribute-link')
assert(!!el && !!el.href && el.href.length > 0)
```

O elemento `#tribute-link` deve ter um atributo `target` definido como `_blank`.

```js
const el = document.getElementById('tribute-link')
assert(!!el && el.target === '_blank')
```

O elemento `img` deve ter o atributo `display` com o valor `block`.

```js
const img = document.getElementById('image');
const imgStyle = window.getComputedStyle(img);
const style = imgStyle?.getPropertyValue('display')
assert(style === 'block')
```

O elemento `#image` deve ter o atributo `max-width` com o valor `100%`.

```js
const img = document.getElementById('image');
const imgStyle = window.getComputedStyle(img);
const style = imgStyle?.getPropertyValue('max-width')
assert(style === '100%')
```

O elemento `#image` deve ter o atributo `height` com o valor `auto`.

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

O elemento `#image` deve ser centralizado dentro de seu elemento pai.

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
