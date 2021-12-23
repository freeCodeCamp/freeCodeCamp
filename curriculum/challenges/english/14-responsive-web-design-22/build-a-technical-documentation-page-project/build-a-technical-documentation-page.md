---
id: 587d78b0367417b2b2512b05
title: Build a Technical Documentation Page
challengeType: 14
forumTopicId: 301146
dashedName: build-a-technical-documentation-page
---

# --description--

**Objective:** Build an app that is functionally similar to <a href="https://codepen.io/freeCodeCamp/full/NdrKKL" target="_blank"><https://codepen.io/freeCodeCamp/full/NdrKKL></a>

**User Stories:**

1. You can see a `main` element with a corresponding `id="main-doc"`, which contains the page's main content (technical documentation)
1. Within the `#main-doc` element, you can see several `section` elements, each with a class of `main-section`. There should be a minimum of five
1. The first element within each `.main-section` should be a `header` element, which contains text that describes the topic of that section.
1. Each `section` element with the class of `main-section` should also have an `id` that corresponds with the text of each `header` contained within it. Any spaces should be replaced with underscores (e.g. The section that contains the header "JavaScript and Java" should have a corresponding `id="JavaScript_and_Java"`)
1. The `.main-section` elements should contain at least ten `p` elements total (not each)
1. The `.main-section` elements should contain at least five `code` elements total (not each)
1. The `.main-section` elements should contain at least five `li` items total (not each)
1. You can see a `nav` element with a corresponding `id="navbar"`
1. The navbar element should contain one `header` element which contains text that describes the topic of the technical documentation
1. Additionally, the navbar should contain link (`a`) elements with the class of `nav-link`. There should be one for every element with the class `main-section`
1. The `header` element in the `#navbar` must come before any link (`a`) elements in the navbar
1. Each element with the class of `nav-link` should contain text that corresponds to the `header` text within each `section` (e.g. if you have a "Hello world" section/header, your navbar should have an element which contains the text "Hello world")
1. When you click on a navbar element, the page should navigate to the corresponding section of the `main-doc` element (e.g. If you click on a `nav-link` element that contains the text "Hello world", the page navigates to a `section` element with that id, and contains the corresponding header)
1. On regular sized devices (laptops, desktops), the element with `id="navbar"` should be shown on the left side of the screen and should always be visible to the user
1. Your technical documentation should use at least one media query

Fulfill the user stories and pass all the tests below to complete this project. Give it your own personal style. Happy Coding!

# --hints--

You should have a `main` element with an `id` of `main-doc`

```js
const el = document.getElementById('main-doc')
assert(!!el)
```

You should have at least five `section` elements with a class of `main-section`

```js
const els = document.querySelectorAll('#main-doc section')
assert(els.length >= 5)
```

All of your `.main-section` elements should be `section` elements

```js
const els = document.querySelectorAll('.main-section')
els.forEach(el => {
  if (el.tagName !== 'SECTION') assert(false)
})
assert(els.length > 0)
```

You should have at least five `.main-section` elements that are descendants of `#main-doc`

```js
const els = document.querySelectorAll('#main-doc .main-section')
assert(els.length >= 5)
```

The first child of each `.main-section` should be a `header` element

```js
const els = document.querySelectorAll('.main-section')
els.forEach(el => {
  if(el.firstElementChild?.tagName !== 'HEADER') assert(false)
})
assert(els.length > 0)
```

None of your `header` elements should be empty

```js
const els = document.querySelectorAll('header')
els.forEach(el => {
  if (el.innerText?.length <= 0) assert(false)
})
assert(els.length > 0)
```

All of your `.main-section` elements should have an `id`

```js
const els = document.querySelectorAll('.main-section')
els.forEach(el => {
  if (!el.id || el.id === '') assert(false)
})
assert(els.length > 0)
```

Each `.main-section` should have an `id` that matches the text of its first child, having any spaces in the child's text replaced with underscores (`_`) for the id’s

```js
const els = document.querySelectorAll('.main-section')
els.forEach(el => {
  const text = el.firstElementChild?.innerText?.replaceAll(' ', '_')
  if (el.id?.toUpperCase() !== text?.toUpperCase()) assert(false)
})
assert(els.length > 0)
```

You should have at least 10 `p` elements (total) within your `.main-section` elements

```js
const els = document.querySelectorAll('.main-section p')
assert(els.length >= 10)
```

You should have at least five `code` elements that are descendants of `.main-section` elements

```js
const els = document.querySelectorAll('.main-section code')
assert(els.length >= 5)
```

You should have at least five `li` elements that are descendants of `.main-section` elements

```js
const els = document.querySelectorAll('.main-section li')
assert(els.length >= 5)
```

You should have a `nav` element with an `id` of `navbar`

```js
const el = document.getElementById('navbar')
assert(!!el && el.tagName === 'NAV')
```

Your `#navbar` should have exactly one `header` element within it

```js
const els = document.querySelectorAll('#navbar header')
assert(els.length === 1)
```

You should have at least one `a` element with a class of `nav-link`

```js
const els = document.querySelectorAll('a[class="nav-link"]')
assert(els.length >= 1)
```

All of your `.nav-link` elements should be anchor (`a`) elements

```js
const els = document.querySelectorAll('.nav-link')
els.forEach(el => {
  if (el.tagName !== 'A') assert(false)
})
assert(els.length > 0)
```

All of your `.nav-link` elements should be in the `#navbar`

```js
const els1 = document.querySelectorAll('.nav-link')
const els2 = document.querySelectorAll('#navbar .nav-link')
assert(els2.length > 0 && els1.length === els2.length)
```

You should have the same number of `.nav-link` and `.main-section` elements

```js
const els1 = document.querySelectorAll('.main-section')
const els2 = document.querySelectorAll('.nav-link')
assert(els1.length > 0 && els2.length > 0 && els1.length === els2.length)
```

The `header` element in the `#navbar` should come before any link (`a`) elements also in the `#navbar`

```js
const navLinks = document.querySelectorAll('#navbar a.nav-link');
const header = document.querySelector('#navbar header');
navLinks.forEach((navLink) => {
  if (
    (
      header.compareDocumentPosition(navLink) &
      Node.DOCUMENT_POSITION_PRECEDING
    ) 
  ) assert(false)
});
assert(!!header)
```

Each `.nav-link` should have text that corresponds to the `header` text of its related `section` (e.g. if you have a "Hello world" section/header, your `#navbar` should have a `.nav-link` which has the text "Hello world")

```js
const headerText = Array.from(document.querySelectorAll('.main-section')).map(el =>
  el.firstElementChild?.innerText?.trim().toUpperCase()
)
const linkText = Array.from(document.querySelectorAll('.nav-link')).map(el =>
  el.innerText?.trim().toUpperCase()
)
const remainder = headerText.filter(str => linkText.indexOf(str) === -1)
assert(headerText.length > 0 && headerText.length > 0 && remainder.length === 0)
```

Each `.nav-link` should have an `href` attribute that links to its corresponding `.main-section` (e.g. If you click on a `.nav-link` element that contains the text "Hello world", the page navigates to a `section` element with that id)

```js
const hrefValues = Array.from(document.querySelectorAll('.nav-link')).map(el => el.getAttribute('href'))
const mainSectionIDs = Array.from(document.querySelectorAll('.main-section')).map(el => el.id)
const missingHrefValues = mainSectionIDs.filter(str => hrefValues.indexOf('#' + str) === -1)
assert(hrefValues.length > 0 && mainSectionIDs.length > 0 && missingHrefValues.length === 0)
```

Your `#navbar` should always be on the left edge of the window

```js
const el = document.getElementById('navbar')
const left1 = el?.offsetLeft
const left2 = el?.offsetLeft
assert(!!el && left1 >= -15 && left1 <= 15 && left2 >= -15 && left2 <= 15)
```

Your Technical Documentation project should use at least one media query

```js
assert.isAtLeast(new __helpers.CSSHelp(document).getCSSRules('media')?.length, 1);
```

# --seed--

## --seed-contents--

```html

```

```css

```
