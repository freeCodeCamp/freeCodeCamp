---
id: 587d78a4367417b2b2512ad5
title: Ajustar o tom de uma cor
challengeType: 0
videoUrl: 'https://scrimba.com/c/cEDJvT7'
forumTopicId: 301038
dashedName: adjust-the-tone-of-a-color
---

# --description--

A função `hsl()` no CSS também facilita o ajuste do tom de uma cor. A mistura de branco com uma tonalidade pura cria uma cor igual à cor que foi misturada com o branco e a adição de preto cria uma tonalidade mais escura. Como alternativa, um tom é produzido adicionando cinza ou matizando e sombreando. Lembre-se de que o 's' e 'l' de `hsl()` representam saturação e luminosidade, respectivamente. A porcentagem de saturação altera a quantidade de cinza e a porcentagem de luminosidade determina quanto de branco ou preto há na cor. Isso é útil quando você tem uma tonalidade básica de que gosta, mas precisa de diferentes variações.

# --instructions--

Todos os elementos, por padrão, têm a propriedade `background-color` com o valor de `transparent`. O elemento `nav` atualmente parece ter um fundo `cyan`, porque o elemento por trás dele tem uma propriedade `background-color` definida com o valor `cyan`. Adicione a propriedade `background-color` ao elemento `nav` para que este elemento tenha a cor `cyan`, mas com saturação de `80%` e luminosidade de `25%` para alterar seu tom e sombreamento.

# --hints--

O elemento `nav` deve ter a propriedade `background-color` de tom ciano usando a função `hsl()`.

```js
// Estilo calculado de hsl(180, 80%, 25%) resulta em rgb(13,115,115)
assert.equal(
  new __helpers.CSSHelp(document).getStyle('nav').getPropVal('background-color', true), 
  'rgb(13,115,115)'
)
```

# --seed--

## --seed-contents--

```html
<style>
  header {
    background-color: hsl(180, 90%, 35%);
    color: #FFFFFF;
  }

  nav {

  }

  h1 {
    text-indent: 10px;
    padding-top: 10px;
  }

  nav ul {
    margin: 0px;
    padding: 5px 0px 5px 30px;
  }

  nav li {
    display: inline;
    margin-right: 20px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
</style>

<header>
  <h1>Cooking with FCC!</h1>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Classes</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</header>
```

# --solutions--

```html
<style>
  header {
    background-color: hsl(180, 90%, 35%);
    color: #FFFFFF;
  }

  nav {
    background-color: hsl(180, 80%, 25%);
  }

  h1 {
    text-indent: 10px;
    padding-top: 10px;
  }

  nav ul {
    margin: 0px;
    padding: 5px 0px 5px 30px;
  }

  nav li {
    display: inline;
    margin-right: 20px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
</style>
<header>
  <h1>Cooking with FCC!</h1>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Classes</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</header>
```
