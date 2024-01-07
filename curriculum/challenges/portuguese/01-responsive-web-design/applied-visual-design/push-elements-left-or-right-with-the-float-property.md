---
id: 587d78a3367417b2b2512ace
title: Empurrar os elementos para a esquerda ou direita com a propriedade float
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MDqu2'
forumTopicId: 301066
dashedName: push-elements-left-or-right-with-the-float-property
---

# --description--

A próxima ferramenta de posicionamento não usa a propriedade `position`, mas define a propriedade `float` de um elemento. Os elementos flutuantes são removidos do fluxo normal de um documento e colocados à esquerda (`left`) ou direita (`right`) do elemento pai que os contém. Essa propriedade é comumente usada com a propriedade `width` para especificar quanto espaço horizontal o elemento flutuante precisa.

# --instructions--

O código fornecido funcionaria bem como um layout de duas colunas, com os elementos `section` e `aside` um ao lado do outro. Dê ao elemento `#left` a propriedade `float` com o valor `left` e ao elemento `#right` a propriedade `float` com o valor `right`.

# --hints--

O elemento com id `left` deve ter a propriedade `float` com o valor `left`.

```js
assert($('#left').css('float') == 'left');
```

O elemento com id `right` deve ter a propriedade`float` com o valor `right`.

```js
assert($('#right').css('float') == 'right');
```

# --seed--

## --seed-contents--

```html
<head>
  <style>
    #left {

      width: 50%;
    }
    #right {

      width: 40%;
    }
    aside, section {
      padding: 2px;
      background-color: #ccc;
    }
  </style>
</head>
<body>
  <header>
    <h1>Welcome!</h1>
  </header>
  <section id="left">
    <h2>Content</h2>
    <p>Good stuff</p>
  </section>
  <aside id="right">
    <h2>Sidebar</h2>
    <p>Links</p>
  </aside>
</body>
```

# --solutions--

```html
<head>
  <style>
    #left {
      float: left;
      width: 50%;
    }
    #right {
      float: right;
      width: 40%;
    }
    aside, section {
      padding: 2px;
      background-color: #ccc;
    }
  </style>
</head>
<body>
  <header>
    <h1>Welcome!</h1>
  </header>
  <section id="left">
    <h2>Content</h2>
    <p>Good stuff</p>
  </section>
  <aside id="right">
    <h2>Sidebar</h2>
    <p>Links</p>
  </aside>
</body>
```
