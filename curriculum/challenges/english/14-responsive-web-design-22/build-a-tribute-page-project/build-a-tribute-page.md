---
id: bd7158d8c442eddfaeb5bd18
title: Build a Tribute Page
challengeType: 14
forumTopicId: 301147
dashedName: build-a-tribute-page
---

# --description--

**Objective:** Build an app that is functionally similar to <a href="https://codepen.io/freeCodeCamp/full/zNqgVx" target="_blank"><https://codepen.io/freeCodeCamp/full/zNqgVx></a>

**User Stories:**

1. Your tribute page should have an element with a corresponding `id="main"`, which contains all other elements
1. You should see an element with an `id` of `title`, which contains a string (i.e. text), that describes the subject of the tribute page (e.g. "Dr. Norman Borlaug")
1. You should see either a `figure` or a `div` element with an `id` of `img-div`
1. Within the `img-div` element, you should see an `img` element with a corresponding `id="image"`
1. Within the `img-div` element, you should see an element with a corresponding `id="img-caption"` that contains textual content describing the image shown in `img-div`
1. You should see an element with a corresponding `id="tribute-info"`, which contains textual content describing the subject of the tribute page
1. You should see an a element with a corresponding `id="tribute-link"`, which links to an outside site, that contains additional information about the subject of the tribute page. HINT: You must give your element an attribute of `target` and set it to `_blank` in order for your link to open in a new tab
1. Your `#image` should use `max-width` and `height` properties to resize responsively, relative to the width of its parent element, without exceeding its original size
1. Your `img` element should be centered within its parent element

Fulfill the user stories and pass all the tests below to complete this project. Give it your own personal style. Happy Coding!

# --hints--

You should have a `main` element with an `id` of `main`

```js
const el = document.getElementById('main')
assert(!!el && el.tagName === 'MAIN')
```

Your `#img-div`, `#image`, `#img-caption`, `#tribute-info`, and `#tribute-link` should all be descendants of `#main`

```js
const el1 = document.querySelector('#main #img-div')
const el2 = document.querySelector('#main #image')
const el3 = document.querySelector('#main #img-caption')
const el4 = document.querySelector('#main #tribute-info')
const el5 = document.querySelector('#main #tribute-link')
assert(!!el1 & !!el2 && !!el3 && !!el4 && !!el5)
```

You should have an element with an `id` of `title`

```js
const el = document.getElementById('title')
assert(!!el)
```

Your `#title` should not be empty

```js
const el = document.getElementById('title')
assert(!!el && el.innerText.length > 0)

```

You should have a `figure` or `div` element with an `id` of `img-div`

```js
const el = document.getElementById('img-div')
assert(!!el && (el.tagName === 'DIV' || el.tagName === 'FIGURE'))
```

You should have an `img` element with an `id` of `image`

```js
const el = document.getElementById('image')
assert(!!el && el.tagName === 'IMG')
```

Your `#image` should be a descendant of `#img-div`

```js
const el = document.querySelector('#img-div #image')
assert(!!el)
```

You should have a `figcaption` or `div` element with an `id` of `img-caption`

```js
const el = document.getElementById('img-caption')
assert(!!el && (el.tagName === 'DIV' || el.tagName === 'FIGCAPTION'))
```

Your `#img-caption` should be a descendant of `#img-div`

```js
const el = document.querySelector('#img-div #img-caption')
assert(!!el)
```

Your `#img-caption` should not be empty

```js
const el = document.getElementById('img-caption')
assert(!!el && el.innerText.length > 0)
```

You should have an element with an `id` of `tribute-info`

```js
const el = document.getElementById('tribute-info')
assert(!!el)
```

Your `#tribute-info` should not be empty

```js
const el = document.getElementById('tribute-info')
assert(!!el && el.innerText.length > 0)
```

You should have an `a` element with an `id` of `tribute-link`

```js
const el = document.getElementById('tribute-link')
assert(!!el && el.tagName === 'A')
```

Your `#tribute-link` should have an `href` attribute and value

```js
const el = document.getElementById('tribute-link')
assert(!!el && !!el.href && el.href.length > 0)
```

Your `#tribute-link` should have a `target` attribute set to `_blank`

```js
const el = document.getElementById('tribute-link')
assert(!!el && el.target === '_blank')
```

You should use an `#image` selector in your CSS to style the `#image` and pass the next three tests

```js
const style = new __helpers.CSSHelp(document).getStyle('#image')
assert(!!style)
```

Your `#image` should have a `display` of `block`

```js
const style = new __helpers.CSSHelp(document).getStyle('#image')?.getPropertyValue('display')
assert(style === 'block')
```

Your `#image` should have a `max-width` of `100%`

```js
const style = new __helpers.CSSHelp(document).getStyle('#image')?.getPropertyValue('max-width')
assert(style === '100%')
```

Your `#image` should have a `height` of `auto`

```js
// taken from the testable-projects repo
const img = document.getElementById('image');
const maxWidthValue = new __helpers.CSSHelp(document).getStyle('#image')?.getPropertyValue('max-width')
const displayValue = new __helpers.CSSHelp(document).getStyle('#image')?.getPropertyValue('display')
const oldDisplayValue = img?.style.getPropertyValue('display');
const oldDisplayPriority = img?.style.getPropertyPriority('display');
img?.style.setProperty('display', 'none', 'important');
const heightValue = new __helpers.CSSHelp(document).getStyle('#image')?.getPropertyValue('height')
img?.style.setProperty('display', oldDisplayValue, oldDisplayPriority);
assert(heightValue === 'auto')
```

Your `#image` should be centered within its parent

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
