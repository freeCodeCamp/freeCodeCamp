---
id: bd7158d8c242eddfaeb5bd13
title: Створіть вебсторінку персонального портфоліо
challengeType: 14
forumTopicId: 301143
dashedName: build-a-personal-portfolio-webpage
---

# --description--

**Мета:** Створити застосунок, функціонально схожий до <a href="https://personal-portfolio.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://personal-portfolio.freecodecamp.rocks</a>

**Історія користувача:**

1. Портфоліо повинне містити вітальну секцію з `id` зі значенням `welcome-section`
1. Вітальна секція повинна мати елемент `h1`, що містить текст
1. Портфоліо повинне мати секцію проєктів з `id` зі значенням `projects`
1. Секція проєктів повинна містити щонайменше один елемент з `class` зі значенням `project-tile` для виконання проєкту
1. Секція проєктів повинна містити щонайменше одне посилання на проєкт
1. Портфоліо повинне містити навігаційну панель з ідентифікатором зі значенням `navbar`
1. Навігаційна панель повинна містити щонайменше одне посилання, завдяки якому можна перейти на інші секції сторінки
1. Портфоліо повинне містити посилання з ідентифікатором зі значенням `profile-link`, що відкриває ваш профіль GitHub або freeCodeCamp в новій вкладці
1. Портфоліо повинне містити щонайменше один медіазапит
1. Висота вітальної секції повинна дорівнювати висоті вюпорту
1. Навігаційна панель завжди повинна знаходитись у верхній частині вюпорту

Виконайте історію користувача та пройдіть тести, наведені нижче, щоб завершити цей проєкт. Оформте за власним стилем. Щасливого кодування!

**Примітка:** переконайтеся, що додали `<link rel="stylesheet" href="styles.css">` до HTML для прив'язки з аркушем стилів та застосували CSS

# --hints--

Портфоліо повинне містити секцію «Вітання» з `id` зі значенням `welcome-section`.

```js
const el = document.getElementById('welcome-section')
assert(!!el);
```

Елемент `#welcome-section` повинен містити елемент `h1`.

```js
assert.isAbove(
  document.querySelectorAll('#welcome-section h1').length,
  0,
  'Welcome section should contain an h1 element '
);
```

Ви не повинні мати порожніх елементів `h1` в межах елемента `#welcome-section`.

```js
assert.isAbove(
  document.querySelectorAll('#welcome-section h1')?.[0]?.innerText?.length,
  0,
  'h1 element in welcome section should contain your name or camper ' +
    'name '
);
```

Ви повинні мати секцію «Проєкти» з `id` зі значенням `projects`.

```js
const el = document.getElementById('projects')
assert(!!el);
```

Портфоліо повинне містити хоча б один елемент з класом `project-tile`.

```js
assert.isAbove(
  document.querySelectorAll('#projects .project-tile').length,
  0
);
```

Елемент `#projects` повинен містити хоча б один елемент `a`.

```js
assert.isAbove(document.querySelectorAll('#projects a').length, 0);
```

Портфоліо повинне мати навігаційну панель з `id` зі значенням `navbar`.

```js
const el = document.getElementById('navbar');
assert(!!el);
```

Елемент `#navbar` повинен містити хоча б один елемент `a`, чий атрибут `href` починається з `#`.

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

Портфоліо повинне мати елемент `a` з `id` зі значенням `profile-link`.

```js
const el = document.getElementById('profile-link');
assert(!!el && el.tagName === 'A')
```

Елемент `#profile-link` повинен мати атрибут `target` зі значенням `_blank`.

```js
const el = document.getElementById('profile-link');
assert(!!el && el.target === '_blank')
```

Портфоліо повинне містити щонайменше один медіазапит.

```js
const htmlSourceAttr = Array.from(document.querySelectorAll('source')).map(el => el.getAttribute('media'))
const cssCheck = new __helpers.CSSHelp(document).getCSSRules('media')
assert(cssCheck.length > 0 || htmlSourceAttr.length > 0);
```

Елемент `#navbar` завжди повинен знаходитись у верхній частині вюпорту.

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
