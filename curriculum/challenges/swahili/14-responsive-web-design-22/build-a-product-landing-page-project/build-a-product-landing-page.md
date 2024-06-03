---
id: 587d78af367417b2b2512b04
title: Tengeneza Ukurasa wa Kutua kwa Bidhaa (Product Landing Page)
challengeType: 14
forumTopicId: 301144
dashedName: build-a-product-landing-page
---

# --description--

**Objective:** Build an app that is functionally similar to <a href="https://product-landing-page.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://product-landing-page.freecodecamp.rocks</a>. **Do not copy this demo project**.

**Maelekezo:**

1. Ukurasa wa kutua wa bidhaa yako unapaswa kuwa na kipengele cha `header` chenye husika ya `id="header"`
1. Unaweza kuona picha ndani ya kipengele cha `header` sambamba na `id="header-img"` (Nembo inaweza kutengeneza picha nzuri hapa)
1. Ndani ya kipengele cha `#header` unaweza kuona kipengele cha `nav` chenye `id="nav-bar"` sambamba
1. Unaweza kuona angalau vipengele vitatu vinavyoweza kubofya ndani ya kipengele cha `nav`, kila kimoja kikiwa na class ya `nav-link`
1. Unapobofya kitufe cha `.nav-link` katika kipengele cha `nav`, unachukuliwa hadi sehemu inayolingana ya ukurasa wa kutua
1. Unaweza kutazama video ya bidhaa iliyopachikwa kwa `id="video"`
1. Ukurasa wako wa kutua una kipengele cha `form` chenye `id="form"`
1. Ndani ya fomu, kuna sehemu ya `input` iliyo na `id="email"` ambapo unaweza kuingiza barua pepe
1. Sehemu ya ingizo ya `#email` inapaswa kuwa na maandishi ya kushikilia nafasi ili kuwafahamisha watumiaji uga unahusu nini
1. Sehemu ya ingizo ya `#email` hutumia uthibitishaji wa HTML5 ili kuthibitisha kuwa maandishi yaliyowekwa ni barua pepe
1. Ndani ya fomu, kuna sehemu ya kuwasilisha `input` iliyo na `id="submit"`
1. Unapobofya kipengele cha `#submit`, barua pepe inatumwa kwa ukurasa tuli (tumia URL hii ya dhihaka: `https://www.freecodecamp.com/email-submit`)
1. Sehemu ya navbar inapaswa kuwa juu ya viewport kila wakati
1. Ukurasa wako wa kutua unapaswa kuwa na angalau media query moja
1. Ukurasa wako wa kutua unapaswa unapaswa kutumia CSS flexbox angalau mara moja

Timiza hadithi za watumiaji na upite majaribio yote hapa chini ili kukamilisha mradi huu. Ipe muundo wako wa kibinafsi. Happy Coding!

**Kumbuka:** Hakikisha umeongeza `<link rel="stylesheet" href="styles.css">` katika HTML yako ili kuunganisha stylesheet yako na utumie CSS yako

# --hints--

Unapaswa kuwa na kipengele cha `header` chenye `id` ya `header`.

```js
const el = document.getElementById('header')
assert(!!el && el.tagName === 'HEADER')
```

Unapaswa kuwa na kipengele cha `img` chenye `id` ya `header-img`.

```js
const el = document.getElementById('header-img')
assert(!!el && el.tagName === 'IMG')
```

`#header-img` yako inapaswa kuwa mzao wa `#header`.

```js
const els = document.querySelectorAll('#header #header-img')
assert(els.length > 0)
```

`#header-img` yako inapaswa kuwa na sifa ya `src`.

```js
const el = document.getElementById('header-img')
assert(!!el && !!el.src)
```

Kipengele chako cha `#header-img` chenye sifa ya `src` inapaswa kuwa URL halali (inaanza na `http`).

```js
const el = document.getElementById('header-img')
assert(!!el && /^http/.test(el.src))
```

Unapaswa kuwa na kipengele cha `nav` chenye `id` ya `nav-bar`.

```js
const el = document.getElementById('nav-bar')
assert(!!el && el.tagName === 'NAV')
```

`#nav-bar` yako inapaswa kuwa mzao wa `#header`.

```js
const els = document.querySelectorAll('#header #nav-bar')
assert(els.length > 0)
```

Unapaswa kuwa na angalau vipengele 3 vya `.nav-link` ndani ya `#nav-bar`.

```js
const els = document.querySelectorAll('#nav-bar .nav-link')
assert(els.length >= 3)
```

Kila kipengele cha `.nav-link` kinafaa kuwa na sifa ya `href`.

```js
const els = document.querySelectorAll('.nav-link')
els.forEach(el => {
  if (!el.href) assert(false)
})
assert(els.length > 0)
```

Kila kipengele cha `.nav-link` kinapaswa kuunganishwa kwa kipengele sambamba kwenye ukurasa wa kutua (ina `href` yenye thamani ya id ya kipengele kingine. k.m. `#footer`).

```js
const els = document.querySelectorAll('.nav-link')
els.forEach(el => {
  const linkDestination = el.getAttribute('href').slice(1)
  if (!document.getElementById(linkDestination)) assert(false)
})
assert(els.length > 0)
```

Unapaswa kuwa na kipengele cha `video` au `iframe` chenye `id` ya `video`.

```js
const el = document.getElementById('video')
assert(!!el && (el.tagName === 'VIDEO' || el.tagName === 'IFRAME'))
```

`#video` yako inapaswa kuwa na sifa ya `src`.

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

Unapaswa kuwa na kipengele cha `form` chenye `id` ya `form`.

```js
const el = document.getElementById('form')
assert(!!el && el.tagName === 'FORM')
```

Unapaswa kuwa na kipengele cha `input` chenye `id` ya `email`.

```js
const el = document.getElementById('email')
assert(!!el && el.tagName === 'INPUT')
```

`#email` yako inapaswa kuwa mzao wa `#form`.

```js
const els = document.querySelectorAll('#form #email')
assert(els.length > 0)
```

`#email` yako inapaswa kuwa na sifa ya `placeholder` yenye maandishi ya kishika nafasi.

```js
const el = document.getElementById('email')
assert(!!el && !!el.placeholder && el.placeholder.length > 0)
```

`#email` yako inapaswa kutumia uthibitishaji wa HTML5 kwa kuweka `type` yake kuwa `email`.

```js
const el = document.getElementById('email')
assert(!!el && el.type === 'email')
```

Unapaswa kuwa na kipengele cha `input` chenye `id` ya `submit`.

```js
const el = document.getElementById('submit')
assert(!!el && el.tagName === 'INPUT')
```

`#submit` yako inapaswa kuwa mzao wa `#form`.

```js
const els = document.querySelectorAll('#form #submit')
assert(els.length > 0)
```

`#submit` yako inapaswa kuwa na `type` ya `submit`.

```js
const el = document.getElementById('submit')
assert(!!el && el.type === 'submit')
```

`#form` yako inapaswa kuwa na sifa ya `action` inayoelekezea `https://www.freecodecamp.com/email-submit`.

```js
const el = document.getElementById('form')
assert(!!el && el.action === 'https://www.freecodecamp.com/email-submit')
```

`#email` yako inapaswa kuwa na sifa ya `name` na `email`.

```js
const el = document.getElementById('email')
assert(!!el && el.name === 'email')
```

`#nav-bar` inapaswa kuwa juu ya viewport kila wakati.

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

Ukurasa wako wa kutua unapaswa kuwa na angalau media query moja.

```js
const htmlSourceAttr = Array.from(document.querySelectorAll('source')).map(el => el.getAttribute('media'))
const cssCheck = new __helpers.CSSHelp(document).getCSSRules('media')
assert(cssCheck.length > 0 || htmlSourceAttr.length > 0);
```

Ukurasa wako wa kutua unapaswa unapaswa kutumia CSS flexbox angalau mara moja.

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

# --solutions--

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
