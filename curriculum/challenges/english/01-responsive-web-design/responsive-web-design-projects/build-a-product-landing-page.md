---
id: 587d78af367417b2b2512b04
title: Build a Product Landing Page
challengeType: 14
forumTopicId: 301144
dashedName: build-a-product-landing-page
---

# --description--

**Objective:** Build an app that is functionally similar to <a href="https://product-landing-page.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://product-landing-page.freecodecamp.rocks</a>

**User Stories:**

1. Your product landing page should have a `header` element with a corresponding `id="header"`
1. You can see an image within the `header` element with a corresponding `id="header-img"` (A logo would make a good image here)
1. Within the `#header` element, you can see a `nav` element with a corresponding `id="nav-bar"`
1. You can see at least three clickable elements inside the `nav` element, each with the class `nav-link`
1. When you click a `.nav-link` button in the `nav` element, you are taken to the corresponding section of the landing page
1. You can watch an embedded product video with `id="video"`
1. Your landing page has a `form` element with a corresponding `id="form"`
1. Within the form, there is an `input` field with `id="email"` where you can enter an email address
1. The `#email` input field should have placeholder text to let users know what the field is for
1. The `#email` input field uses HTML5 validation to confirm that the entered text is an email address
1. Within the form, there is a submit `input` with a corresponding `id="submit"`
1. When you click the `#submit` element, the email is submitted to a static page (use this mock URL: `https://www.freecodecamp.com/email-submit`)
1. The navbar should always be at the top of the viewport
1. Your product landing page should have at least one media query
1. Your product landing page should utilize CSS flexbox at least once

Fulfill the user stories and pass all the tests below to complete this project. Give it your own personal style. Happy Coding!

**Note:** Be sure to add `<link rel="stylesheet" href="styles.css">` in your HTML to link your stylesheet and apply your CSS

# --hints--

You should have a `header` element with an `id` of `header`.

```js
const el = document.getElementById('header')
assert(!!el && el.tagName === 'HEADER')
```

You should have an `img` element with an `id` of `header-img`.

```js
const el = document.getElementById('header-img')
assert(!!el && el.tagName === 'IMG')
```

Your `#header-img` should be a descendant of the `#header`.

```js
const els = document.querySelectorAll('#header #header-img')
assert(els.length > 0)
```

Your `#header-img` should have a `src` attribute.

```js
const el = document.getElementById('header-img')
assert(!!el && !!el.src)
```

Your `#header-img`’s `src` value should be a valid URL (starts with `http`).

```js
const el = document.getElementById('header-img')
assert(!!el && /^http/.test(el.src))
```

You should have a `nav` element with an `id` of `nav-bar`.

```js
const el = document.getElementById('nav-bar')
assert(!!el && el.tagName === 'NAV')
```

Your `#nav-bar` should be a descendant of the `#header`.

```js
const els = document.querySelectorAll('#header #nav-bar')
assert(els.length > 0)
```

You should have at least 3 `.nav-link` elements within the `#nav-bar`.

```js
const els = document.querySelectorAll('#nav-bar .nav-link')
assert(els.length >= 3)
```

Each `.nav-link` element should have an `href` attribute.

```js
const els = document.querySelectorAll('.nav-link')
els.forEach(el => {
  if (!el.href) assert(false)
})
assert(els.length > 0)
```

Each `.nav-link` element should link to a corresponding element on the landing page (has an `href` with a value of another element's id. e.g. `#footer`).

```js
const els = document.querySelectorAll('.nav-link')
els.forEach(el => {
  const linkDestination = el.getAttribute('href').slice(1)
  if (!document.getElementById(linkDestination)) assert(false)
})
assert(els.length > 0)
```

You should have a `video` or `iframe` element with an `id` of `video`.

```js
const el = document.getElementById('video')
assert(!!el && (el.tagName === 'VIDEO' || el.tagName === 'IFRAME'))
```

Your `#video` should have a `src` attribute.

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

You should have a `form` element with an `id` of `form`.

```js
const el = document.getElementById('form')
assert(!!el && el.tagName === 'FORM')
```

You should have an `input` element with an `id` of `email`.

```js
const el = document.getElementById('email')
assert(!!el && el.tagName === 'INPUT')
```

Your `#email` should be a descendant of the `#form`.

```js
const els = document.querySelectorAll('#form #email')
assert(els.length > 0)
```

Your `#email` should have the `placeholder` attribute with placeholder text.

```js
const el = document.getElementById('email')
assert(!!el && !!el.placeholder && el.placeholder.length > 0)
```

Your `#email` should use HTML5 validation by setting its `type` to `email`.

```js
const el = document.getElementById('email')
assert(!!el && el.type === 'email')
```

You should have an `input` element with an `id` of `submit`.

```js
const el = document.getElementById('submit')
assert(!!el && el.tagName === 'INPUT')
```

Your `#submit` should be a descendant of the `#form`.

```js
const els = document.querySelectorAll('#form #submit')
assert(els.length > 0)
```

Your `#submit` should have a `type` of `submit`.

```js
const el = document.getElementById('submit')
assert(!!el && el.type === 'submit')
```

Your `#form` should have an `action` attribute of `https://www.freecodecamp.com/email-submit`.

```js
const el = document.getElementById('form')
assert(!!el && el.action === 'https://www.freecodecamp.com/email-submit')
```

Your `#email` should have a `name` attribute of `email`.

```js
const el = document.getElementById('email')
assert(!!el && el.name === 'email')
```

Your `#nav-bar` should always be at the top of the viewport.

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

Your Product Landing Page should use at least one media query.

```js
const htmlSourceAttr = Array.from(document.querySelectorAll('source')).map(el => el.getAttribute('media'))
const cssCheck = new __helpers.CSSHelp(document).getCSSRules('media')
assert(cssCheck.length > 0 || htmlSourceAttr.length > 0);
```

Your Product Landing Page should use CSS Flexbox at least once.

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
