---
id: bd7158d8c242eddfaeb5bd13
title: Criar uma página de portfólio pessoal
challengeType: 14
forumTopicId: 301143
dashedName: build-a-personal-portfolio-webpage
---

# --description--

**Objetivo:** criar uma aplicação que funcione de modo semelhante a <a href="https://personal-portfolio.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://personal-portfolio.freecodecamp.rocks</a>

**Histórias de usuário:**

1. O portfólio deve ter uma seção de boas-vindas com o `id` `welcome-section`
1. A seção de boas-vindas deve ter um elemento `h1` que contenha texto
1. O portfólio deve ter uma seção de projetos com o `id` `projects`
1. A seção de projetos deve conter pelo menos um elemento com a `class` `project-tile` que contenha um projeto
1. A seção de projetos deve conter pelo menos um link para um projeto
1. O portfólio precisa ter uma barra de navegação com o id `navbar`
1. A barra de navegação deve conter pelo menos um link clicável que navegue para seções diferentes da página
1. O portfólio deve ter um link com o id `profile-link`, que abra seu perfil no GitHub ou no freeCodeCamp em uma nova aba
1. O portfólio deve ter pelo menos uma media query
1. A altura da seção de boas-vindas deve ser igual à altura da viewport
1. A barra de navegação deve estar sempre na parte superior da viewport

Atenda às histórias de usuário e passe em todos os testes abaixo para concluir este projeto. Dê ao projeto o seu próprio estilo pessoal. Boa programação!

**Observação:** não se esqueça de adicionar `<link rel="stylesheet" href="styles.css">` em seu HTML para vincular sua folha de estilo e aplicar seu CSS

# --hints--

O portfólio deve ter uma seção de boas-vindas com o `id` `welcome-section`.

```js
const el = document.getElementById('welcome-section')
assert(!!el);
```

O elemento `#welcome-section` deve conter um elemento `h1`.

```js
assert.isAbove(
  document.querySelectorAll('#welcome-section h1').length,
  0,
  'Welcome section should contain an h1 element '
);
```

Você não deve ter elementos `h1` vazios dentro de `#welcome-section`.

```js
assert.isAbove(
  document.querySelectorAll('#welcome-section h1')?.[0]?.innerText?.length,
  0,
  'h1 element in welcome section should contain your name or camper ' +
    'name '
);
```

Você deve ter uma seção de projetos com o `id` `projects`.

```js
const el = document.getElementById('projects')
assert(!!el);
```

O portfólio deve conter pelo menos um elemento com a classe `project-tile`.

```js
assert.isAbove(
  document.querySelectorAll('#projects .project-tile').length,
  0
);
```

O elemento `#projects` deve conter pelo menos um elemento `a`.

```js
assert.isAbove(document.querySelectorAll('#projects a').length, 0);
```

O portfólio precisa ter uma barra de navegação com o `id` `navbar`.

```js
const el = document.getElementById('navbar');
assert(!!el);
```

O elemento `#navbar` deve conter pelo menos um elemento `a`, cujo atributo `href` comece com `#`.

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

O portfólio deve ter um elemento `a` com o `id` `profile-link`.

```js
const el = document.getElementById('profile-link');
assert(!!el && el.tagName === 'A')
```

O elemento `#profile-link` deve ter um atributo `target` `_blank`.

```js
const el = document.getElementById('profile-link');
assert(!!el && el.target === '_blank')
```

O portfólio deve usar pelo menos uma media query.

```js
const htmlSourceAttr = Array.from(document.querySelectorAll('source')).map(el => el.getAttribute('media'))
const cssCheck = new __helpers.CSSHelp(document).getCSSRules('media')
assert(cssCheck.length > 0 || htmlSourceAttr.length > 0);
```

O elemento `#navbar` deve estar sempre na parte superior da viewport.

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
