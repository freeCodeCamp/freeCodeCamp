---
id: bd7158d8c242eddfaeb5bd13
title: Build a Personal Portfolio Webpage
challengeType: 14
forumTopicId: 301143
dashedName: build-a-personal-portfolio-webpage
---

# --description--

**Objective:** Build an app that is functionally similar to <a href="https://codepen.io/freeCodeCamp/full/zNBOYG" target="_blank"><https://codepen.io/freeCodeCamp/full/zNBOYG></a>

**User Stories:**

1. Your portfolio should have a welcome section with an `id` of `welcome-section`
1. The welcome section should have an `h1` element that contains text
1. Your portfolio should have a projects section with an `id` of `projects`
1. The projects section should contain at least one element with a `class` of `project-tile` to hold a project
1. The projects section should contain at least one link to a project
1. Your portfolio should have a navbar with an id of `navbar`
1. The navbar should contain at least one link that you can click on to navigate to different sections of the page
1. Your portfolio should have a link with an id of `profile-link`, which opens your GitHub or freeCodeCamp profile in a new tab
1. Your portfolio should have at least one media query
1. The height of the welcome section should be equal to the height of the viewport
1. The navbar should always be at the top of the viewport

Fulfill the user stories and pass all the tests below to complete this project. Give it your own personal style. Happy Coding!

# --hints--

Your portfolio should have a "Welcome" section with an `id` of `welcome-section`.

```js
const el = document.getElementById('welcome-section')
assert(!!el);
```

Your `#welcom-section` element should contain an `h1` element.

```js
assert.isAbove(
  document.querySelectorAll('#welcome-section h1').length,
  0,
  'Welcome section should contain an h1 element '
);
```

You should not have any empty `h1` elements within `#welcome-section` element.

```js
assert.isAbove(
  document.querySelectorAll('#welcome-section h1')?.[0]?.innerText?.length,
  0,
  'h1 element in welcome section should contain your name or camper ' +
    'name '
);
```

You should have a "Projects" section with an `id` of `projects`.

```js
const el = document.getElementById('projects')
assert(!!el);
```

Your portfolio should contain at least one elment with a class of `project-tile`.

```js
assert.isAbove(
  document.querySelectorAll('#projects .project-tile').length,
  0
);
```

Your `#projects` element should contain at least one `a` element.

```js
assert.isAbove(document.querySelectorAll('#projects a').length, 0);
```

Your portfolio should have a navbar with an `id` of `navbar`.

```js
const el = document.getElementById('navbar');
assert(!!el);
```

Your `#navbar` element should contain at least one `a` element whose `href` attribute starts with `#`.

```js
const links = [...document.querySelectorAll('#navbar a')].filter(
  (nav) => (nav?.getAttribute('href') || '').substr(0, 1) === '#'
);

assert.isAbove(
  links.length,
  0,
  'Navbar should contain an anchor link '
);
```

Your portfolio should have an `a` element with an `id` of `profile-link`.

```js
const el = document.getElementById('profile-link');
assert(!!el && el.tagName === 'A')
```

Your `#profile-link` element should have a `target` attribute of `_blank`.

```js
const el = document.getElementById('profile-link');
assert(!!el && el.target === '_blank')
```

Your portfolio should use at least one media query.

```js
assert.isAtLeast(new __helpers.CSSHelp(document).getCSSRules('media')?.length, 1);
```

Your `#navbar` element should always be at the top of the viewport.

```js
(async () => {
  const timeout = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

  const navbar = document.getElementById('navbar');
  assert.approximately(
    navbar?.getBoundingClientRect().top,
    0,
    15,
    "Navbar's parent should be body and it should be at the top of " +
    'the viewport '
  );

  window.scroll(0, 500);

  await timeout(1);

  assert.approximately(
    navbar?.getBoundingClientRect().top,
    0,
    15,
    'Navbar should be at the top of the viewport even after ' +
    'scrolling '
  );
  window.scroll(0, 0);
})();
```

# --seed--

## --seed-contents--

```html

```

```css

```
