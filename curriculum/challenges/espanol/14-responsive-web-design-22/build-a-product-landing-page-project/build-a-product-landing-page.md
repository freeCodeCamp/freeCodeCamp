---
id: 587d78af367417b2b2512b04
title: Construye una página de inicio de producto
challengeType: 14
forumTopicId: 301144
dashedName: build-a-product-landing-page
---

# --description--

**Objetivo:** Crea una aplicación que sea funcionalmente similar a <a href="https://product-landing-page.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://product-landing-page.freecodecamp.rocks</a>

**Historias de usuario:**

1. Tu página de inicio de producto debe tener un elemento `header` con un correspondiente `id="header"`
1. Puedes ver una imagen dentro del elemento `header` con un correspondiente `id="header-img"` (Un logotipo sería una buena imagen aquí)
1. Dentro el elemento `#header`, puedes ver un elemento `nav` con su correspondiente `id="nav-bar"`
1. Puedes ver al menos tres elementos cliqueables dentro del elemento `nav`, cafda una con la clase `nav-link`
1. Cuando hagas click en un botón `.nav-link` en el elemento `nav`, serás redireccionado a la sección correspondiente de la página de inicio
1. Puedes ver un vídeo del producto incrustado con `id="video"`
1. Tu página de inicio tiene un elemento `form` con un correspondiente `id="form"`
1. Dentro del formulario, hay un campo `input` con `id="email"`, donde puedes ingresar tu dirección de email
1. El campo de entrada `#email` debe tener un marcador de texto para que los usuarios sepan para que sirve este campo
1. El campo de entrada `#email` usa validación HTML5 para confirmar que el texto ingresado es una dirección de email
1. Dentro del formulario, hay un `input` de tipo submit (enviar) con su correspondiente `id="submit"`
1. Cuendo haces click en el elemento `#submit`, el email es enviado a una página web (Utiliza esta URL de pruebas: `https://www.freecodecamp.com/email-submit`)
1. La barra de navegación siempre debe estar en la parte superior de la vista
1. La página de inicio de tu producto debe tener al menos una consulta de medios
1. Tu página de inicio del producto debe utillizar el flexbox CSS al menos una vez

Completa las instrucciones y pasa todas las pruebas a continuación para completar este proyecto. Dale tu propio estilo estilo personal. ¡Feliz día programando!

**Nota:** Asegúrate de agregar `<link rel="stylesheet" href="styles.css">` en tu HTML para enlazar tu hoja de estilos y aplicar tu CSS

# --hints--

Debes tener un elemento `header` con un `id` de `header`.

```js
const el = document.getElementById('header')
assert(!!el && el.tagName === 'HEADER')
```

Debes tener un elemento `img` con un `id` de `header-img`.

```js
const el = document.getElementById('header-img')
assert(!!el && el.tagName === 'IMG')
```

Tu `#header-img` debe ser descendiente de `#header`.

```js
const els = document.querySelectorAll('#header #header-img')
assert(els.length > 0)
```

Tu `#header-img` debe tener un atributo `src`.

```js
const el = document.getElementById('header-img')
assert(!!el && !!el.src)
```

El valor del `src` de `#header-img` debe ser una URL válida (inicia con `http`).

```js
const el = document.getElementById('header-img')
assert(!!el && /^http/.test(el.src))
```

Debes tener un elemento `nav` con un `id` de `nav-bar`.

```js
const el = document.getElementById('nav-bar')
assert(!!el && el.tagName === 'NAV')
```

Tu `#nav-bar` debe ser descendiente de `#header`.

```js
const els = document.querySelectorAll('#header #nav-bar')
assert(els.length > 0)
```

Debes tener al menos 3 elementos `.nav-link` dentro del `#nav-bar`.

```js
const els = document.querySelectorAll('#nav-bar .nav-link')
assert(els.length >= 3)
```

Cada elemento `.nav-link` debe tener un atributo `href`.

```js
const els = document.querySelectorAll('.nav-link')
els.forEach(el => {
  if (!el.href) assert(false)
})
assert(els.length > 0)
```

Cada elemento `.nav-link` debe estar enlazado a su elemento correspondiente en la página de aterrizaje (el valor que tiene el `href` es el id de otro elemento, por ejemplo, `#footer`).

```js
const els = document.querySelectorAll('.nav-link')
els.forEach(el => {
  const linkDestination = el.getAttribute('href').slice(1)
  if (!document.getElementById(linkDestination)) assert(false)
})
assert(els.length > 0)
```

Debes tener un elemento `video` o `iframe` con un `id` de `video`.

```js
const el = document.getElementById('video')
assert(!!el && (el.tagName === 'VIDEO' || el.tagName === 'IFRAME'))
```

Tu `#video` debe tener un atributo `src`.

```js
let el = document.getElementById('video')
const sourceNode = el.children;
let sourceElement = null;
if (sourceNode.length) {
  sourceElement = [...video.children].filter(el => el.localName === 'source')[0];
}
if (sourceElement) {
  el = sourceElement;
}
assert(el.hasAttribute('src'));
```

Debes tener un elemento `form` con un `id` de `form`.

```js
const el = document.getElementById('form')
assert(!!el && el.tagName === 'FORM')
```

Debes tener un elemento `input` con un `id` de `email`.

```js
const el = document.getElementById('email')
assert(!!el && el.tagName === 'INPUT')
```

Tu `#email` debe ser descendiente de `#form`.

```js
const els = document.querySelectorAll('#form #email')
assert(els.length > 0)
```

Tu `#email` debe tener el atributo `placeholder` con un texto marcador de posición.

```js
const el = document.getElementById('email')
assert(!!el && !!el.placeholder && el.placeholder.length > 0)
```

Tu `#email` debe usar la validación HTML5 estableciendo su `type` a `email`.

```js
const el = document.getElementById('email')
assert(!!el && el.type === 'email')
```

Debes tener un elemento `input` con un `id` de `submit`.

```js
const el = document.getElementById('submit')
assert(!!el && el.tagName === 'INPUT')
```

Tu `#submit` debe ser descendiente de `#form`.

```js
const els = document.querySelectorAll('#form #submit')
assert(els.length > 0)
```

Tu `#submit` debe tener un `type` de `submit`.

```js
const el = document.getElementById('submit')
assert(!!el && el.type === 'submit')
```

Tu `#form` debe tener un atributo `action` de `https://www.freecodecamp.com/email-submit`.

```js
const el = document.getElementById('form')
assert(!!el && el.action === 'https://www.freecodecamp.com/email-submit')
```

Tu `#email` debe tener un atributo `name` de `email`.

```js
const el = document.getElementById('email')
assert(!!el && el.name === 'email')
```

Tu `#nav-bar` siempre debe estar en la parte superior de la ventana gráfica.

```js
(async () => {
  const timeout = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

  const header = document.getElementById('header');
  const headerChildren = header.children;
  const navbarCandidates = [header, ...headerChildren];

  // Return smallest top position of all navbar candidates
  const getNavbarPosition = (candidates = []) => {
    return candidates.reduce(
      (min, candidate) =>
        Math.min(min, Math.abs(candidate?.getBoundingClientRect().top)),
      Infinity
    );
  };
  assert.approximately(
    getNavbarPosition(navbarCandidates),
    0,
    15,
    '#header or one of its children should be at the top of the viewport '
  );

  window.scroll(0, 500);
  await timeout(1);

  assert.approximately(
    getNavbarPosition(navbarCandidates),
    0,
    15,
    '#header or one of its children should be at the top of the ' +
      'viewport even after scrolling '
  );

  window.scroll(0, 0);
})();
```

Tu página de aterrizaje de un producto debe usar por lo menos una consulta de medios.

```js
const htmlSourceAttr = Array.from(document.querySelectorAll('source')).map(el => el.getAttribute('media'))
const cssCheck = new __helpers.CSSHelp(document).getCSSRules('media')
assert(cssCheck.length > 0 || htmlSourceAttr.length > 0);
```

Tu página de aterrizaje de un producto debe usar CSS Flexbox por lo menos una vez.

```js
const hasFlex = (rule) => ["flex", "inline-flex"].includes(rule.style?.display)
const stylesheet = new __helpers.CSSHelp(document).getStyleSheet()
const cssRules = new __helpers.CSSHelp(document).styleSheetToCssRulesArray(stylesheet)
const mediaRules = new __helpers.CSSHelp(document).getCSSRules('media')
const usesFlex = cssRules.find(rule => hasFlex(rule))
const usesFlexMedia = mediaRules.find(mediaRule => {
  return [...mediaRule.cssRules].find(rule => hasFlex(rule))
})
assert(usesFlex || usesFlexMedia)
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
    <title>Product Landing Page</title>
  </head>
  <body>
    <header id="header">
      <nav id="nav-bar">
        <img
          id="header-img"
          src="https://upload.wikimedia.org/wikipedia/commons/3/39/Pokeball.PNG"
          max-height="50px"
        />
        <a href="#Features" class="nav-link">Features</a> |
        <a href="#Video" class="nav-link">See our facility!</a> |
        <a href="#Pricing" class="nav-link">Purchase</a>
        <hr />
      </nav>
    </header>
    <main>
      <h1>
        Pokemon Daycare Service
      </h1>
      <section id="Features">
        <h2>What we offer</h2>
        <div class="flex-here">
          <div class="flex-left">
            <img
              id="bullet"
              src="https://upload.wikimedia.org/wikipedia/commons/3/39/Pokeball.PNG"
              max-height="25px"
            />
          </div>
          <div class="flex-right">Guaranteed friendly and loving staff!</div>
        </div>
        <div class="flex-here">
          <div class="flex-left">
            <img
              id="bullet"
              src="https://upload.wikimedia.org/wikipedia/commons/3/39/Pokeball.PNG"
              max-height="25px"
            />
          </div>
          <div class="flex-right">
            Comfortable environment for Pokemon to explore and play!
          </div>
        </div>
        <div class="flex-here">
          <div class="flex-left">
            <img
              id="bullet"
              src="https://upload.wikimedia.org/wikipedia/commons/3/39/Pokeball.PNG"
              max-height="25px"
            />
          </div>
          <div class="flex-right">
            Multiple membership plans to fit your lifestyle!
          </div>
        </div>
      </section>
      <section id="Video">
        <h2>Check us out!</h2>
        A sneak peek into our facility:
        <br />
        <iframe
          id="video"
          width="520"
          height="347"
          src="https://www.youtube.com/embed/Nw-ksH2r6AQ"
          frameborder="0"
          allowfullscreen
          alt="A video tour of our facility"
        >
        </iframe>
      </section>
      <section id="Pricing">
        <h2>Membership Plans</h2>
        <div class="flex-mem">
          <div class="flex-mem-box">
            <font size="+2">Basic Membership</font><br />
            <ul>
              <li>One Pokemon</li>
              <li>Food and berries provided</li>
            </ul>
            <em>$9.99/month</em>
          </div>
          <div class="flex-mem-box">
            <font size="+2">Silver Membership</font><br />
            <ul>
              <li>Up to Three Pokemon</li>
              <li>Food and berries provided</li>
              <li>Grooming and accessories included</li>
            </ul>
            <em>$19.99/month</em>
          </div>
          <div class="flex-mem-box">
            <font size="+2">Gold Membership</font><br />
            <ul>
              <li>Up to six Pokemon!</li>
              <li>Food and berries provided</li>
              <li>Grooming and accessories included</li>
              <li>Personal training for each Pokemon</li>
              <li>Breeding and egg hatching</li>
            </ul>
            <em>$29.99/month</em>
          </div>
        </div>
      </section>
      <form id="form" action="https://www.freecodecamp.com/email-submit">
        <p>Sign up for our newsletter!</p>
        <label for="email"><p>Email:</p><input name="email" id="email" type="email" placeholder="johnsmith@email.com" required></label>
        <input type="submit" id="submit">
      </form>
      <footer>
        <a href="../">Return to Project List</a> |
        <a href="https://www.nhcarrigan.com">Return to HomePage</a>
      </footer>
    </main>
  </body>
</html>
```

```css
body {
  background-color: #3a3240;
  color: white;
}
main {
  max-width: 750px;
  margin: 50px auto;
}
input {
  background-color: #92869c;
}
a:not(.nav-link) {
  color: white;
}
#header-img {
  max-height: 25px;
}
#nav-bar {
  position: fixed;
  width: 100%;
  text-align: center;
  top: 0%;
  background-color: #92869c;
}
h1 {
  text-align: center;
}
body {
  text-align: center;
}
footer {
  text-align: center;
}
#bullet {
  max-height: 25px;
}
.flex-here {
  display: flex;
  justify-content: center;
}
.flex-left {
  height: 25px;
}
.flex-mem {
  display: flex;
  justify-content: center;
}
.flex-mem-box {
  background-color: #92869c;
  border-color: black;
  border-width: 5px;
  border-style: solid;
  margin: 10px;
  padding: 10px;
  color: black;
}
@media (max-width: 350px) {
  #video {
    width: 300;
    height: 200;
  }
}
```
