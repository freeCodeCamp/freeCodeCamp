---
id: 587d78af367417b2b2512b04
title: Erstelle eine Landingpage für ein Produkt
challengeType: 14
forumTopicId: 301144
dashedName: build-a-product-landing-page
---

# --description--

**Aufgabe:** Erstelle eine Anwendung, die eine ähnliche Funktionalität wie <a href="https://product-landing-page.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://product-landing-page.freecodecamp.rocks</a> aufweist.

**User Stories:**

1. Deine Produkt-Landingpage sollte ein `header`-Element mit einer entsprechenden `id="header"` haben
1. Du kannst ein Bild innerhalb des `header`-Elements mit einer entsprechenden `id="header-img"` (Ein Logo würde hier ein gutes Bild abgeben) sehen
1. Innerhalb des `#header`-Elements siehst du ein `nav`-Element mit dazugehöriger `id="nav-bar"`
1. Du kannst mindestens drei anklickbare Elemente innerhalb des `nav`-Elements sehen, jedes mit der `nav-link`-Klasse
1. Wenn du den `.nav-link`-Button im `nav`-Element drückst, wirst du zu dem entsprechenden Bereich auf der Landingpage geführt
1. Du kannst ein eingebettetes Produktvideo mit `id="video"` ansehen
1. Deine Landingpage sollte über ein `form`-Element mit entsprechender `id="form"` verfügen
1. Innerhalb des Formulars gibt es ein `input`-Feld mit `id="email"`, in das du deine E-Mail-Adresse eingeben kannst
1. Das `#email`-Eingabefeld sollte über einen Platzhaltertext verfügen, um Nutzer über den Zweck des Felds aufzuklären
1. Das `#email`-Eingabefeld findet durch HTML5-Validierung heraus, ob es sich beim eingegebenen Text auch wirklich um eine E-Mail-Adresse handelt
1. Innerhalb des Formulars gibt es ein Feld zum Abschicken des `input` mit einer entsprechenden `id="submit"`
1. Wenn du auf das `#submit`-Element klickst, wird die E-Mail an eine statische Seite weitergeleitet (Verwende diese Pseudo-URL: `https://www.freecodecamp.com/email-submit`)
1. Die Navigationsleiste sollte sich immer am oberen Rand des Ansichtsfensters befinden
1. Deine Produkt-Landingpage sollte mindestens eine Medienabfrage (Media Query) haben
1. Deine Produkt-Landingpage sollte die CSS-Flexbox mindestens einmal verwenden

Erfülle die folgenden User Stories und bestehe alle Tests, um dieses Projekt abzuschließen. Gib dem Ganzen deinen persönlichen Stil. Viel Spaß beim Programmieren!

**Hinweis:** Füge unbedingt `<link rel="stylesheet" href="styles.css">` in dein HTML ein, um dein Stylesheet zu verlinken und dein CSS anzuwenden

# --hints--

Du solltest ein `header`-Element mit einer `id` von `header` haben.

```js
const el = document.getElementById('header')
assert(!!el && el.tagName === 'HEADER')
```

Du solltest ein `img`-Element mit einer `id` von `header-img` haben.

```js
const el = document.getElementById('header-img')
assert(!!el && el.tagName === 'IMG')
```

Dein `#header-img` sollte ein Nachfahre (descendant) des `#header` sein.

```js
const els = document.querySelectorAll('#header #header-img')
assert(els.length > 0)
```

Dein `#header-img` sollte über ein `src`-Attribut verfügen.

```js
const el = document.getElementById('header-img')
assert(!!el && !!el.src)
```

Die `src` deines `#header-img` sollte auf einen gültigen URL-Wert (beginnend mit `http`) gesetzt sein.

```js
const el = document.getElementById('header-img')
assert(!!el && /^http/.test(el.src))
```

Du solltest ein `nav`-Element mit einer `id` von `nav-bar` haben.

```js
const el = document.getElementById('nav-bar')
assert(!!el && el.tagName === 'NAV')
```

Deine `#nav-bar` sollte ein Nachfahre des `#header` sein.

```js
const els = document.querySelectorAll('#header #nav-bar')
assert(els.length > 0)
```

Du solltest mindestens 3 `.nav-link`-Elemente innerhalb des `#nav-bar` haben.

```js
const els = document.querySelectorAll('#nav-bar .nav-link')
assert(els.length >= 3)
```

Jedes `.nav-link`-Element sollte über ein `href`-Attribut verfügen.

```js
const els = document.querySelectorAll('.nav-link')
els.forEach(el => {
  if (!el.href) assert(false)
})
assert(els.length > 0)
```

Jedes `.nav-link`-Element sollte mit einem entsprechenden Element auf der Landingpage verknüpft sein (hat ein `href` mit dem Wert der ID eines anderen Elements, wie bspw. `#footer`).

```js
const els = document.querySelectorAll('.nav-link')
els.forEach(el => {
  const linkDestination = el.getAttribute('href').slice(1)
  if (!document.getElementById(linkDestination)) assert(false)
})
assert(els.length > 0)
```

Du solltest ein `video`- oder `iframe`-Element mit einer `id` von `video` haben.

```js
const el = document.getElementById('video')
assert(!!el && (el.tagName === 'VIDEO' || el.tagName === 'IFRAME'))
```

Dein `#video` sollte über ein `src`-Attribut verfügen.

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

Du solltest ein `form` Element mit einer `id` von `form` haben.

```js
const el = document.getElementById('form')
assert(!!el && el.tagName === 'FORM')
```

Dein `input`-Element sollte über eine `id` von `email` verfügen.

```js
const el = document.getElementById('email')
assert(!!el && el.tagName === 'INPUT')
```

Deine `#email` sollte ein Nachfahre der `#form` sein.

```js
const els = document.querySelectorAll('#form #email')
assert(els.length > 0)
```

Deine `#email` sollte über ein `placeholder`-Attribut mit entsprechendem Text verfügen.

```js
const el = document.getElementById('email')
assert(!!el && !!el.placeholder && el.placeholder.length > 0)
```

Deine `#email` sollte HTML5-Validierung verwenden, indem du `type` auf `email` setzt.

```js
const el = document.getElementById('email')
assert(!!el && el.type === 'email')
```

Dein `input`-Element sollte über eine `id` von `submit` verfügen.

```js
const el = document.getElementById('submit')
assert(!!el && el.tagName === 'INPUT')
```

Dein `#submit` sollte ein Nachfahre der `#form` sein.

```js
const els = document.querySelectorAll('#form #submit')
assert(els.length > 0)
```

Dein `#submit` sollte einen `type` von `submit` haben.

```js
const el = document.getElementById('submit')
assert(!!el && el.type === 'submit')
```

Deine `#form` sollte über ein `action`-Attribut von `https://www.freecodecamp.com/email-submit` verfügen.

```js
const el = document.getElementById('form')
assert(!!el && el.action === 'https://www.freecodecamp.com/email-submit')
```

Deine `#email` sollte ein `name` Attribut von `email` haben.

```js
const el = document.getElementById('email')
assert(!!el && el.name === 'email')
```

Dein `#nav-bar` sollte immer oben im Viewport liegen.

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

Deine Produkt-Landingpage sollte mindestens eine Medienabfrage (Media Query) verwenden.

```js
const htmlSourceAttr = Array.from(document.querySelectorAll('source')).map(el => el.getAttribute('media'))
const cssCheck = new __helpers.CSSHelp(document).getCSSRules('media')
assert(cssCheck.length > 0 || htmlSourceAttr.length > 0);
```

Deine Produktseite sollte mindestens einmal die CSS-Flexbox verwenden.

```js
const stylesheet = new __helpers.CSSHelp(document).getStyleSheet()
const cssRules = new __helpers.CSSHelp(document).styleSheetToCssRulesArray(stylesheet)
const usesFlex = cssRules.find(rule => {
  return rule.style?.display === 'flex' || rule.style?.display === 'inline-flex'
})
assert(usesFlex)
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
