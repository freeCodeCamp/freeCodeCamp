---
id: 587d78a3367417b2b2512ace
title: Push Elements Left or Right with the float Property
challengeType: 0
videoUrl: ''
localeTitle: Empurre os elementos para a esquerda ou para a direita com a propriedade float
---

## Description
<section id="description"> A próxima ferramenta de posicionamento não usa a <code>position</code> , mas define a propriedade <code>float</code> de um elemento. Os elementos flutuantes são removidos do fluxo normal de um documento e enviados para a <code>left</code> ou para a <code>right</code> do elemento pai que o contém. É comumente usado com a propriedade <code>width</code> para especificar quanto espaço horizontal o elemento flutuante requer. </section>

## Instructions
<section id="instructions"> O dado marcação iria funcionar bem como um layout de duas colunas, com as <code>section</code> e <code>aside</code> elementos próximos uns dos outros. Dê ao item <code>#left</code> um <code>float</code> da <code>left</code> e o item <code>#right</code> um <code>float</code> da <code>right</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O elemento com id <code>left</code> deve ter um valor <code>float</code> da <code>left</code> .
    testString: 'assert($("#left").css("float") == "left", "The element with id <code>left</code> should have a <code>float</code> value of <code>left</code>.");'
  - text: O elemento com o <code>right</code> id deve ter um valor <code>float</code> de <code>right</code> .
    testString: 'assert($("#right").css("float") == "right", "The element with id <code>right</code> should have a <code>float</code> value of <code>right</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

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

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
