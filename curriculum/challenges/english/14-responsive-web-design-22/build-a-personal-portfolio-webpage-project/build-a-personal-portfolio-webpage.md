---
id: bd7158d8c242eddfaeb5bd13
title: Build a Personal Portfolio Webpage
challengeType: 14
forumTopicId: 301143
dashedName: build-a-personal-portfolio-webpage
---

# --description--

**Objective:** Build an app that is functionally similar to <a href="https://personal-portfolio.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://personal-portfolio.freecodecamp.rocks</a>. **Do not copy this demo project**.


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

**Note:** Be sure to add `<link rel="stylesheet" href="styles.css">` in your HTML to link your stylesheet and apply your CSS

# --hints--

Your portfolio should have a "Welcome" section with an `id` of `welcome-section`.

```js
const el = document.getElementById('welcome-section')
assert(!!el);
```

Your `#welcome-section` element should contain an `h1` element.

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

Your portfolio should contain at least one element with a class of `project-tile`.

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
  (nav) => (nav?.getAttribute('href') || '').substring(0, 1) === '#'
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
const htmlSourceAttr = Array.from(document.querySelectorAll('source')).map(el => el.getAttribute('media'))
const cssCheck = new __helpers.CSSHelp(document).getCSSRules('media')
assert(cssCheck.length > 0 || htmlSourceAttr.length > 0);
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

# --solutions--

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="styles.css">
    <title>Personal Portfolio</title>
</head>
<body>
    <link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet">
<!--Font Reference-->
<nav id="navbar">
  <a href="#projects">Projects</a> |
  <a href="#contact">Contact me</a>
</nav>
<main>
  <section id="welcome-section">
    <br>
    <h1>It's me!</h1>
    <img src="https://s.cdpn.io/profiles/user/4369153/512.jpg?1587151780" height=100px>
    <h2>Naomi Carrigan</h2>
    <p>Welcome to my portfolio page!</p>
  </section><hr>
  <section id="projects">
    <h1>Projects</h1>
    <h2><a href="https://codepen.io/nhcarrigan">Here's what I've worked on!</a></h2>
    <p class="project-tile">
<iframe height="265" style="width: 25;" scrolling="no" title="Algebraic Concepts" src="https://codepen.io/nhcarrigan/embed/preview/NWGrWBR?height=265&theme-id=dark&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/nhcarrigan/pen/NWGrWBR'>Algebraic Concepts</a> by Naomi Carrigan
  (<a href='https://codepen.io/nhcarrigan'>@nhcarrigan</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
<iframe height="265" style="width: 25;" scrolling="no" title="Pokemon Daycare Service" src="https://codepen.io/nhcarrigan/embed/preview/mdeEbeq?height=265&theme-id=dark&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/nhcarrigan/pen/mdeEbeq'>Pokemon Daycare Service</a> by Naomi Carrigan
  (<a href='https://codepen.io/nhcarrigan'>@nhcarrigan</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
<iframe height="265" style="width: 25;" scrolling="no" title="Togepi Fan Club" src="https://codepen.io/nhcarrigan/embed/preview/vYNGoBE?height=265&theme-id=dark&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/nhcarrigan/pen/vYNGoBE'>Togepi Fan Club</a> by Naomi Carrigan
  (<a href='https://codepen.io/nhcarrigan'>@nhcarrigan</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
<iframe height="265" style="width: 25;" scrolling="no" title="Togepi" src="https://codepen.io/nhcarrigan/embed/preview/yLYOWEN?height=265&theme-id=dark&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/nhcarrigan/pen/yLYOWEN'>Togepi</a> by Naomi Carrigan
  (<a href='https://codepen.io/nhcarrigan'>@nhcarrigan</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
    </p></section><hr>
  <section id="contact">
    <h1>Contact me!</h1>
    <h2>Use the links below to get in touch.</h2>
    <p><a href="https://www.freecodecamp.org/nhcarrigan" id="profile-link" target="_blank" rel="noopener noreferrer">FreeCodeCamp.org</a> | <a href="https://github.com/nhcarrigan" id="github-link" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="https://www.facebook.com/nhcarrigan" id="facebook-link" target="_blank" rel="noopener noreferrer">Facebook</a> | <a href="https://www.linkedin.com/in/Naomi-l-carrigan/" id="linkedin-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
  </section>
<footer><a href="../">Return to Project List</a> | <a href="https://www.nhcarrigan.com">Return to HomePage</a></footer>
</body>
</html>
```

```css
nav{
  position: fixed;
  width: 100%;
  text-align: right;
  font-size: 24pt;
  top: 0%;
  right: 5px;
  background-color: #000000;
  color: #ffffff;
}
@media (max-width: 500px){
  nav{
    display: none;
  }
}
a{
  color: #ffffff;
}
main{
  text-align: center;
  background-color: black;
  font-family:Pacifico
}
h1{
  font-size: 48pt;
}
h2{
  font-size: 24pt;
}
p{
  font-size: 12pt;
}
#welcome-section{
  background-color:#251a4a;
  color: #FFFFFF;
  display: table-cell;
  vertical-align: middle;
  width: 100vw;
  height: 100vh;
}
#projects{
  background-color: #060a9c;
  color: #ffffff;
  display: table-cell;
  vertical-align: middle;
  width: 100vw;
  height: 100vh;
}
#contact{
  background-color: #03300b;
  color: #ffffff;
  display: table-cell;
  vertical-align: middle;
  width: 100vw;
  height: 100vh;
}
```
