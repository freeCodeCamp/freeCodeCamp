---
id: 587d78af367417b2b2512b04
title: Створіть посадкову сторінку продукту
challengeType: 14
forumTopicId: 301144
dashedName: build-a-product-landing-page
---

# --description--

**Мета:** Створити застосунок, функціонально схожий до <a href="https://product-landing-page.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://product-landing-page.freecodecamp.rocks</a>

**Історія користувача:**

1. Ваша посадкова сторінка продукту повинна мати елемент `header` з відповідним `id="header"`
1. Можна побачити зображення в межах елемента `header` з відповідним `id="header-img"` (на місце зображення чудово підійде логотип)
1. В межах елемента `#header` видно елемент `nav` з відповідним `id="nav-bar"`
1. Можна побачити принаймні три активні елементи всередині елемента `nav`, кожен з класом `nav-link`
1. Якщо натиснути на кнопку `.nav-link` в елементі `nav`, ви перейдете на відповідну секцію посадкової сторінки
1. Ви можете переглянути вмонтоване відео з `id="video"`
1. Посадкова сторінка має елемент `form` з відповідним `id="form"`
1. В межах форми наявне поле `input` з `id="email"`, де можна ввести електронну адресу
1. Поле введення `#email` повинне мати текст наповнювача, щоб користувач розумів його призначення
1. Поле введення `#email` використовує перевірку HTML5, щоб переконатись, що введений текст є електронною адресою
1. В межах форми є кнопка `input` для відправки з відповідним `id="submit"`
1. Якщо натиснути на елемент `#submit`, електронну пошту надіслано на статистичну сторінку (використовуйте альтернативу URL: `https://www.freecodecamp.com/email-submit`)
1. Навігаційна панель завжди повинна знаходитись у верхній частині вюпорту
1. Посадкова сторінка продукту повинна містити щонайменше один медіазапит
1. Посадкова сторінка продукту повинна використовувати CSS flexbox хоча б раз

Виконайте історію користувача та пройдіть тести, наведені нижче, щоб завершити цей проєкт. Оформте за власним стилем. Щасливого кодування!

**Примітка:** переконайтеся, що додали `<link rel="stylesheet" href="styles.css">` до HTML для прив'язки з аркушем стилів та застосували CSS

# --hints--

Ви повинні мати елемент `header` з `id` зі значенням `header`.

```js
const el = document.getElementById('header')
assert(!!el && el.tagName === 'HEADER')
```

Ви повинні мати елемент `img` з `id` зі значенням `header-img`.

```js
const el = document.getElementById('header-img')
assert(!!el && el.tagName === 'IMG')
```

Ваш `#header-img` повинен бути нащадком `#header`.

```js
const els = document.querySelectorAll('#header #header-img')
assert(els.length > 0)
```

Ваш `#header-img` повинен мати атрибут `src`.

```js
const el = document.getElementById('header-img')
assert(!!el && !!el.src)
```

Значення `src` вашого `#header-img` повинне бути активним URL (починається з `http`).

```js
const el = document.getElementById('header-img')
assert(!!el && /^http/.test(el.src))
```

Ви повинні мати елемент `nav` з `id` зі значенням `nav-bar`.

```js
const el = document.getElementById('nav-bar')
assert(!!el && el.tagName === 'NAV')
```

Ваш `#nav-bar` повинен бути нащадком `#header`.

```js
const els = document.querySelectorAll('#header #nav-bar')
assert(els.length > 0)
```

Ви повинні мати щонайменше 3 елементи `.nav-link` в межах `#nav-bar`.

```js
const els = document.querySelectorAll('#nav-bar .nav-link')
assert(els.length >= 3)
```

Кожен елемент `.nav-link` повинен мати атрибут `href`.

```js
const els = document.querySelectorAll('.nav-link')
els.forEach(el => {
  if (!el.href) assert(false)
})
assert(els.length > 0)
```

Кожен елемент `.nav-link` повинен посилати на відповідний елемент посадкової сторінки (має `href` зі значенням ідентифікатора іншого елемента, наприклад `#footer`).

```js
const els = document.querySelectorAll('.nav-link')
els.forEach(el => {
  const linkDestination = el.getAttribute('href').slice(1)
  if (!document.getElementById(linkDestination)) assert(false)
})
assert(els.length > 0)
```

Ви повинні мати елемент `video` або `iframe` з `id` зі значенням `video`.

```js
const el = document.getElementById('video')
assert(!!el && (el.tagName === 'VIDEO' || el.tagName === 'IFRAME'))
```

Ваш `#video` повинен мати атрибут `src`.

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

Ви повинні мати елемент `form` з `id` зі значенням `form`.

```js
const el = document.getElementById('form')
assert(!!el && el.tagName === 'FORM')
```

Ви повинні мати елемент `input` з `id` зі значенням `email`.

```js
const el = document.getElementById('email')
assert(!!el && el.tagName === 'INPUT')
```

Ваш `#email` повинен бути нащадком `#form`.

```js
const els = document.querySelectorAll('#form #email')
assert(els.length > 0)
```

Ваш `#email` повинен мати атрибут `placeholder` з текстом заповнювача.

```js
const el = document.getElementById('email')
assert(!!el && !!el.placeholder && el.placeholder.length > 0)
```

Ваш `#email` повинен використовувати перевірку HTML5, встановивши `type` на `email`.

```js
const el = document.getElementById('email')
assert(!!el && el.type === 'email')
```

Ви повинні мати елемент `input` з `id` зі значенням `submit`.

```js
const el = document.getElementById('submit')
assert(!!el && el.tagName === 'INPUT')
```

Ваш `#submit` повинен бути нащадком `#form`.

```js
const els = document.querySelectorAll('#form #submit')
assert(els.length > 0)
```

Ваш `#submit` повинен мати `type` зі значенням `submit`.

```js
const el = document.getElementById('submit')
assert(!!el && el.type === 'submit')
```

Ваш `#form` повинен мати атрибут `action` зі значенням `https://www.freecodecamp.com/email-submit`.

```js
const el = document.getElementById('form')
assert(!!el && el.action === 'https://www.freecodecamp.com/email-submit')
```

Ваш `#email` повинен мати атрибут `name` зі значенням `email`.

```js
const el = document.getElementById('email')
assert(!!el && el.name === 'email')
```

Ваш `#nav-bar` завжди повинен знаходитись у верхній частині вюпорту.

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

Посадкова сторінка продукту повинна містити щонайменше один медіазапит.

```js
const htmlSourceAttr = Array.from(document.querySelectorAll('source')).map(el => el.getAttribute('media'))
const cssCheck = new __helpers.CSSHelp(document).getCSSRules('media')
assert(cssCheck.length > 0 || htmlSourceAttr.length > 0);
```

Посадкова сторінка продукту повинна використовувати CSS flexbox хоча б раз.

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
