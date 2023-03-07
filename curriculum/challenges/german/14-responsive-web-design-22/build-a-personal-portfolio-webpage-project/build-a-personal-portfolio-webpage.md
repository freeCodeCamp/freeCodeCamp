---
id: bd7158d8c242eddfaeb5bd13
title: Eine persönliche Portfolio-Webseite erstellen
challengeType: 14
forumTopicId: 301143
dashedName: build-a-personal-portfolio-webpage
---

# --description--

**Aufgabe:** Erstelle eine Anwendung, die eine ähnliche Funktionalität wie <a href="https://personal-portfolio.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://personal-portfolio.freecodecamp.rocks</a> aufweist.

**User Stories:**

1. Dein Portfolio sollte einen Begrüßungsbereich mit einer `id` von `welcome-section` besitzen
1. Der Begrüßungsbereich sollte ein `h1`-Element mit Text enthalten
1. Dein Portfolio sollte einen Projektabschnitt mit einer `id` von `projects` besitzen
1. Der Projektabschnitt sollte mindestens ein Element mit einer `class` von `project-tile` besitzen, um das Projekt zu halten
1. Der Projektabschnitt sollte mindestens einen Link zu einem Projekt enthalten
1. Dein Portfolio sollte eine Navigationsleiste mit einer ID von `navbar` haben
1. Die Navigationsleiste sollte mindestens einen auswählbaren Link haben, der zu verschiedenen Bereichen der Seite navigiert
1. Dein Portfolio sollte einen Link mit der ID `profile-link` haben, der dein GitHub- oder freeCodeCamp-Profil in einem neuen Tab öffnet
1. Dein Portfolio sollte mindestens eine Media Query (Medienabfrage) enthalten
1. Die Höhe des Begrüßungsabschnitts sollte der Höhe des Ansichtsfensters entsprechen
1. Die Navigationsleiste sollte sich immer am oberen Rand des Ansichtsfensters befinden

Erfülle die folgenden User Stories und bestehe alle Tests, um dieses Projekt abzuschließen. Gib dem Ganzen deinen persönlichen Stil. Viel Spaß beim Programmieren!

**Hinweis:** Füge unbedingt `<link rel="stylesheet" href="styles.css">` in dein HTML ein, um dein Stylesheet zu verlinken und dein CSS anzuwenden

# --hints--

Dein Portfolio sollte einen Begrüßungsbereich mit einer `id` von `welcome-section` beinhalten.

```js
const el = document.getElementById('welcome-section')
assert(!!el);
```

Dein `#welcome-section`-Element sollte ein `h1`-Element enthalten.

```js
assert.isAbove(
  document.querySelectorAll('#welcome-section h1').length,
  0,
  'Welcome section should contain an h1 element '
);
```

Du solltest keine leeren `h1`-Elemente innerhalb des `#welcome-section`-Elements haben.

```js
assert.isAbove(
  document.querySelectorAll('#welcome-section h1')?.[0]?.innerText?.length,
  0,
  'h1 element in welcome section should contain your name or camper ' +
    'name '
);
```

Du solltest einen Projektabschnitt mit einer `id` von `projects` haben.

```js
const el = document.getElementById('projects')
assert(!!el);
```

Dein Portfolio sollte mindestens ein Element mit einer Klasse von `project-tile` haben.

```js
assert.isAbove(
  document.querySelectorAll('#projects .project-tile').length,
  0
);
```

Dein `#projects`-Element sollte mindestens ein `a`-Element beinhalten.

```js
assert.isAbove(document.querySelectorAll('#projects a').length, 0);
```

Dein Portfolio sollte eine Navigationsleiste mit der `id` von `navbar` besitzen.

```js
const el = document.getElementById('navbar');
assert(!!el);
```

Dein `#navbar`-Element sollte mindestens ein `a`-Element, dessen `href`-Attribut mit `#` beginnt, haben.

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

Dein Portfolio sollte ein `a`-Element mit einer `id` von `profile-link` haben.

```js
const el = document.getElementById('profile-link');
assert(!!el && el.tagName === 'A')
```

Dein `#profile-link`-Element sollte ein `target`-Attribut von `_blank` haben.

```js
const el = document.getElementById('profile-link');
assert(!!el && el.target === '_blank')
```

Dein Portfolio sollte mindestens eine Media Query (Medienabfrage) enthalten.

```js
const htmlSourceAttr = Array.from(document.querySelectorAll('source')).map(el => el.getAttribute('media'))
const cssCheck = new __helpers.CSSHelp(document).getCSSRules('media')
assert(cssCheck.length > 0 || htmlSourceAttr.length > 0);
```

Dein `#navbar`-Element sollte immer oben im Viewport liegen.

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

## --solutions--

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
