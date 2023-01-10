---
id: 587d78af367417b2b2512b04
title: Costruisci la landing page per un prodotto
challengeType: 14
forumTopicId: 301144
dashedName: build-a-product-landing-page
---

# --description--

**Obiettivo:** crea un'app funzionalmente simile a <a href="https://product-landing-page.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://product-landing-page.freecodecamp.rocks</a>

**User story:**

1. La landing page del prodotto dovrebbe avere un elemento `header` con un corrispondente `id="header"`
1. Dovresti avere un'immagine dentro l'elemento `header` con un attributo corrispondente `id="header-img"` (un logo sarebbe una buona scelta)
1. Dentro l'elemento `#header`, dovresti avere un elemento `nav` con un corrispondente attributo `id="nav-bar"`
1. Dovresti avere almeno tre elementi cliccabili dentro l'elemento `nav`, ognuno con la classe `nav-link`
1. Cliccando su un pulsante `.nav-link` dentro l'elemento `nav`, dovresti essere portato alla sezione corrispondente nella pagina
1. Dovresti avere un video sul prodotto incorporato nella pagina con un `id="video"`
1. La landing page dovrebbe avere un elemento `form` con un corrispondente attributo `id="form"`
1. Dentro il modulo, dovrebbe esserci un campo `input` con un `id="email"` in cui inserire un indirizzo email
1. Il campo input `#email` dovrebbe avere del testo segnaposto per far sapere agli utenti a cosa è destinato il campo
1. Il campo input `#email` dovrebbe utilizzare la validazione HTML5 per confermare che il testo inserito è un indirizzo email
1. Dentro il modulo, dovrebbe esserci un `input` per inviare il modulo con un corrispondente `id="submit"`
1. Cliccando l'elemento `#submit`, l'email dovrebbe essere inviata a una pagina statica (usa l'URL non funzionante: `https://www.freecodecamp.com/email-submit`)
1. La barra di navigazione dovrebbe essere sempre in cima al viewport
1. La landing page dovrebbe avere almeno una media query
1. La landing page dovrebbe utilizzare CSS flexbox almeno una volta

Soddisfa le user story e supera tutti i test qui sotto per completare questo progetto. Usa il tuo stile personale. Buon divertimento!

**Nota:** Assicurati di aggiungere `<link rel="stylesheet" href="styles.css">` nel tuo HTML per linkare il foglio di stile e applicare il CSS

# --hints--

Dovresti avere un elemento `header` con un `id` del valore di `header`.

```js
const el = document.getElementById('header')
assert(!!el && el.tagName === 'HEADER')
```

Dovresti avere un elemento `img` con un attributo `id` del valore di `header-img`.

```js
const el = document.getElementById('header-img')
assert(!!el && el.tagName === 'IMG')
```

L'elemento `#header-img` dovrebbe essere un discendente di `#header`.

```js
const els = document.querySelectorAll('#header #header-img')
assert(els.length > 0)
```

L'elemento `#header-img` dovrebbe avere un attributo `src`.

```js
const el = document.getElementById('header-img')
assert(!!el && !!el.src)
```

L'attributo `src` dell'elemento `#header-img` dovrebbe essere un URL valido (inizia con `http`).

```js
const el = document.getElementById('header-img')
assert(!!el && /^http/.test(el.src))
```

Dovresti avere un elemento `nav` con un `id` del valore di `nav-bar`.

```js
const el = document.getElementById('nav-bar')
assert(!!el && el.tagName === 'NAV')
```

L'elemento `#nav-bar` dovrebbe essere un discendente dell'elemento `#header`.

```js
const els = document.querySelectorAll('#header #nav-bar')
assert(els.length > 0)
```

Dovresti avere almeno 3 elementi `.nav-link` dentro `#nav-bar`.

```js
const els = document.querySelectorAll('#nav-bar .nav-link')
assert(els.length >= 3)
```

Ogni elemento `.nav-link` dovrebbe avere un attributo `href`.

```js
const els = document.querySelectorAll('.nav-link')
els.forEach(el => {
  if (!el.href) assert(false)
})
assert(els.length > 0)
```

Ogni elemento `.nav-link` dovrebbe linkare a un elemento corrispondente nella pagina (quindi ha un attributo `href` con il valore dell'id di un altro elemento, ad esempio `#footer`).

```js
const els = document.querySelectorAll('.nav-link')
els.forEach(el => {
  const linkDestination = el.getAttribute('href').slice(1)
  if (!document.getElementById(linkDestination)) assert(false)
})
assert(els.length > 0)
```

Dovresti avere un elemento `video` o `iframe` con un `id` del valore di `video`.

```js
const el = document.getElementById('video')
assert(!!el && (el.tagName === 'VIDEO' || el.tagName === 'IFRAME'))
```

L'elemento `#video` dovrebbe avere un attributo `src`.

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

Dovresti avere un elemento `form` con un attributo `id` del valore di `form`.

```js
const el = document.getElementById('form')
assert(!!el && el.tagName === 'FORM')
```

Dovresti avere un elemento `input` con un `id` del valore di `email`.

```js
const el = document.getElementById('email')
assert(!!el && el.tagName === 'INPUT')
```

L'elemento `#email` dovrebbe essere un discendente di `#form`.

```js
const els = document.querySelectorAll('#form #email')
assert(els.length > 0)
```

L'elemento `#email` dovrebbe avere un attributo `placeholder` con del testo segnaposto.

```js
const el = document.getElementById('email')
assert(!!el && !!el.placeholder && el.placeholder.length > 0)
```

L'elemento `#email` dovrebbe usare la validazione HTML5 impostando l'attributo `type` su `email`.

```js
const el = document.getElementById('email')
assert(!!el && el.type === 'email')
```

Dovresti avere un elemento `input` con un `id` del valore di `submit`.

```js
const el = document.getElementById('submit')
assert(!!el && el.tagName === 'INPUT')
```

L'elemento `#submit` dovrebbe essere un discendente di `#form`.

```js
const els = document.querySelectorAll('#form #submit')
assert(els.length > 0)
```

L'elemento `#submit` dovrebbe avere un attributo `type` con il valore `submit`.

```js
const el = document.getElementById('submit')
assert(!!el && el.type === 'submit')
```

L'elemento `#form` dovrebbe avere un attributo `action` con il valore `https://www.freecodecamp.com/email-submit`.

```js
const el = document.getElementById('form')
assert(!!el && el.action === 'https://www.freecodecamp.com/email-submit')
```

L'elemento `#email` dovrebbe avere un attributo `name` con il valore `email`.

```js
const el = document.getElementById('email')
assert(!!el && el.name === 'email')
```

L'elemento `#nav-bar` dovrebbe sempre essere in cima al viewport.

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

La pagina dovrebbe avere almeno un media query.

```js
const htmlSourceAttr = Array.from(document.querySelectorAll('source')).map(el => el.getAttribute('media'))
const cssCheck = new __helpers.CSSHelp(document).getCSSRules('media')
assert(cssCheck.length > 0 || htmlSourceAttr.length > 0);
```

La tua pagina dovrebbe usare CSS Flexbox almeno una volta.

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
