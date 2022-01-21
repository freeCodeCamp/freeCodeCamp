---
id: 587d78af367417b2b2512b04
title: Build a Product Landing Page
challengeType: 14
forumTopicId: 301144
dashedName: build-a-product-landing-page
---

# --description--

**Objective:** Build an app that is functionally similar to <a href="https://codepen.io/freeCodeCamp/full/RKRbwL" target="_blank"><https://codepen.io/freeCodeCamp/full/RKRbwL></a>

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

# --hints--

You should have a `header` element with an `id` of `header`

```js
const el = document.getElementById('header')
assert(!!el && el.tagName === 'HEADER')
```

You should have an `img` element with an `id` of `header-img`

```js
const el = document.getElementById('header-img')
assert(!!el && el.tagName === 'IMG')
```

Your `#header-img` should be a descendant of the `#header`

```js
const els = document.querySelectorAll('#header #header-img')
assert(els.length > 0)
```

Your `#header-img` should have a `src` attribute

```js
const el = document.getElementById('header-img')
assert(!!el && !!el.src)
```

Your `#header-img`’s `src` value should be a valid URL (starts with `http`)

```js
const el = document.getElementById('header-img')
assert(!!el && /^http/.test(el.src))
```

You should have a `nav` element with an `id` of `nav-bar`

```js
const el = document.getElementById('nav-bar')
assert(!!el && el.tagName === 'NAV')
```

Your `#nav-bar` should be a descendant of the `#header`

```js
const els = document.querySelectorAll('#header #nav-bar')
assert(els.length > 0)
```

You should have at least 3 `.nav-link` elements within the `#nav-bar`

```js
const els = document.querySelectorAll('#nav-bar .nav-link')
assert(els.length >= 3)
```

Each `.nav-link` element should have an `href` attribute

```js
const els = document.querySelectorAll('.nav-link')
els.forEach(el => {
  if (!el.href) assert(false)
})
assert(els.length > 0)
```

Each `.nav-link` element should link to a corresponding element on the landing page (has an `href` with a value of another element's id. e.g. `#footer`)

```js
const els = document.querySelectorAll('.nav-link')
els.forEach(el => {
  const linkDestination = el.getAttribute('href').slice(1)
  if (!document.getElementById(linkDestination)) assert(false)
})
assert(els.length > 0)
```

You should have a `video` or `iframe` element with an `id` of `video`

```js
const el = document.getElementById('video')
assert(!!el && (el.tagName === 'VIDEO' || el.tagName === 'IFRAME'))
```

Your `#video` should have a `src` attribute

```js
const el = document.getElementById('video')
assert(!!el && !!el.src)
```

You should have a `form` element with an `id` of `form`

```js
const el = document.getElementById('form')
assert(!!el && el.tagName === 'FORM')
```

You should have an `input` element with an `id of `email`

```js
const el = document.getElementById('email')
assert(!!el && el.tagName === 'INPUT')
```

Your `#email` should be a descendant of the `#form`

```js
const els = document.querySelectorAll('#form #email')
assert(els.length > 0)
```

Your `#email` should have the `placeholder` attribute with placeholder text

```js
const el = document.getElementById('email')
assert(!!el && !!el.placeholder && el.placeholder.length > 0)
```

Your `#email` should use HTML5 validation by setting its `type` to `email`

```js
const el = document.getElementById('email')
assert(!!el && el.type === 'email')
```

You should have an `input` element with an `id` of `submit`

```js
const el = document.getElementById('submit')
assert(!!el && el.tagName === 'INPUT')
```

Your `#submit` should be a descendant of the `#form`

```js
const els = document.querySelectorAll('#form #submit')
assert(els.length > 0)
```

Your `#submit` should have a `type` of `submit`

```js
const el = document.getElementById('submit')
assert(!!el && el.type === 'submit')
```

Your `#form` should have an `action` attribute of `https://www.freecodecamp.com/email-submit`

```js
const el = document.getElementById('form')
assert(!!el && el.action === 'https://www.freecodecamp.com/email-submit')
```

Your `#email` should have a `name` attribute of `email`

```js
const el = document.getElementById('email')
assert(!!el && el.name === 'email')
```

Your `#nav-bar` should always be at the top of the viewport

```js
const el = document.getElementById('nav-bar')
const top1 = el?.offsetTop
const top2 = el?.offsetTop
assert(!!el && top1 >= -15 && top1 <= 15 && top2 >= -15 && top2 <= 15)
```

Your Product Landing Page should use at least one media query

```js
assert.isAtLeast(new __helpers.CSSHelp(document).getCSSRules('media')?.length, 1);
```

Your Product Landing Page should use CSS Flexbox at least once

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
