---
id: 587d78af367417b2b2512b04
title: Criar uma página inicial para um produto
challengeType: 14
forumTopicId: 301144
dashedName: build-a-product-landing-page
---

# --description--

**Objetivo:** criar uma aplicação que funcione de modo semelhante a <a href="https://product-landing-page.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://product-landing-page.freecodecamp.rocks</a>

**Histórias de usuário:**

1. A página inicial do produto deve ter um elemento `header` com um `id="header"` correspondente
1. Você pode ver uma imagem dentro do elemento `header` com um `id="header-img"` correspondente (um logotipo seria uma boa imagem aqui)
1. Dentro do elemento `#header`, deve haver um elemento `nav` com um `id="nav-bar"` correspondente
1. Deve haver pelo menos três elementos clicáveis dentro do elemento `nav` e cada um deles deve ter a classe `nav-link`
1. Ao clicar em um botão com a classe `.nav-link` no elemento `nav`, o usuário deve ser levado para a seção correspondente na página inicial
1. Você pode assistir a um vídeo de produto integrado com `id="video"`
1. A página inicial do produto deve ter um elemento `form` com um `id="form"` correspondente
1. Dentro do formulário, deve haver um `input` com `id="email"`, onde deve ser possível inserir um endereço de e-mail
1. O campo de entrada `#email` deve ter um placeholder (texto ilustrativo) para que o usuário saiba para que serve o campo
1. O campo de entrada `#email` deve usar a validação do próprio HTML5 para confirmar que o texto inserido é um endereço de e-mail
1. Dentro do formulário, deve haver um `input` do tipo botão de envio com o `id="submit"` correspondente
1. Ao clicar no elemento `#submit`, o e-mail deve ser enviado para uma página estática (use este URL fictício: `https://www.freecodecamp.com/email-submit`)
1. A barra de navegação deve estar sempre na parte superior da viewport
1. A página inicial deve ter pelo menos uma media query
1. A página inicial do produto deve utilizar o CSS flexbox pelo menos uma vez

Atenda às histórias de usuário e passe em todos os testes abaixo para concluir este projeto. Dê ao projeto o seu próprio estilo pessoal. Boa programação!

**Observação:** não se esqueça de adicionar `<link rel="stylesheet" href="styles.css">` em seu HTML para vincular sua folha de estilo e aplicar seu CSS

# --hints--

Você deve ter um elemento `header` com o `id` `header`.

```js
const el = document.getElementById('header')
assert(!!el && el.tagName === 'HEADER')
```

Você deve ter um elemento `img` com o `id` `header-img`.

```js
const el = document.getElementById('header-img')
assert(!!el && el.tagName === 'IMG')
```

O elemento `#header-img` deve estar aninhado dentro de `#header`.

```js
const els = document.querySelectorAll('#header #header-img')
assert(els.length > 0)
```

O elemento `#header-img` deve ter um atributo `src`.

```js
const el = document.getElementById('header-img')
assert(!!el && !!el.src)
```

O `src` de `#header-img` deve ser um URL válido (que comece por `http`).

```js
const el = document.getElementById('header-img')
assert(!!el && /^http/.test(el.src))
```

Você deve ter um elemento `nav` com o `id` `nav-bar`.

```js
const el = document.getElementById('nav-bar')
assert(!!el && el.tagName === 'NAV')
```

O elemento `#nav-bar` deve estar aninhado dentro de `#header`.

```js
const els = document.querySelectorAll('#header #nav-bar')
assert(els.length > 0)
```

Você deve ter pelo menos 3 elementos `.nav-link` dentro de `#nav-bar`.

```js
const els = document.querySelectorAll('#nav-bar .nav-link')
assert(els.length >= 3)
```

Cada elemento `.nav-link` deve ter um atributo `href`.

```js
const els = document.querySelectorAll('.nav-link')
els.forEach(el => {
  if (!el.href) assert(false)
})
assert(els.length > 0)
```

Cada elemento `.nav-link` deve vincular a um elemento correspondente na página inicial (ter um `href` com o valor do id de outro elemento, como `#footer`).

```js
const els = document.querySelectorAll('.nav-link')
els.forEach(el => {
  const linkDestination = el.getAttribute('href').slice(1)
  if (!document.getElementById(linkDestination)) assert(false)
})
assert(els.length > 0)
```

Você deve ter um elemento `video` ou um elemento `iframe` com o `id` `video`.

```js
const el = document.getElementById('video')
assert(!!el && (el.tagName === 'VIDEO' || el.tagName === 'IFRAME'))
```

O elemento `#video` deve ter um atributo `src`.

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

Você deve ter um elemento `form` com o `id` `form`.

```js
const el = document.getElementById('form')
assert(!!el && el.tagName === 'FORM')
```

Você deve ter um elemento `input` com o `id` de `email`.

```js
const el = document.getElementById('email')
assert(!!el && el.tagName === 'INPUT')
```

O elemento `#email` deve estar aninhado dentro de `#form`.

```js
const els = document.querySelectorAll('#form #email')
assert(els.length > 0)
```

O elemento `#email` deve ter o atributo `placeholder` e um texto ilustrativo.

```js
const el = document.getElementById('email')
assert(!!el && !!el.placeholder && el.placeholder.length > 0)
```

O elemento `#email` deve usar a validação de HTML5 definindo seu `type` como `email`.

```js
const el = document.getElementById('email')
assert(!!el && el.type === 'email')
```

Você deve ter um elemento `input` com o `id` `submit`.

```js
const el = document.getElementById('submit')
assert(!!el && el.tagName === 'INPUT')
```

O elemento `#submit` deve estar aninhado dentro de `#form`.

```js
const els = document.querySelectorAll('#form #submit')
assert(els.length > 0)
```

O elemento `#submit` deve ter o atributo `type` com o valor `submit`.

```js
const el = document.getElementById('submit')
assert(!!el && el.type === 'submit')
```

Seu `#form` deve ter um atributo `action` definido como `https://www.freecodecamp.com/email-submit`.

```js
const el = document.getElementById('form')
assert(!!el && el.action === 'https://www.freecodecamp.com/email-submit')
```

O elemento `#email` deve ter um atributo `name` definido como `email`.

```js
const el = document.getElementById('email')
assert(!!el && el.name === 'email')
```

O elemento `#nav-bar` deve estar sempre na parte superior da viewport.

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

A página inicial deve ter pelo menos uma media query.

```js
const htmlSourceAttr = Array.from(document.querySelectorAll('source')).map(el => el.getAttribute('media'))
const cssCheck = new __helpers.CSSHelp(document).getCSSRules('media')
assert(cssCheck.length > 0 || htmlSourceAttr.length > 0);
```

A página inicial do produto deve utilizar o CSS flexbox pelo menos uma vez.

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
