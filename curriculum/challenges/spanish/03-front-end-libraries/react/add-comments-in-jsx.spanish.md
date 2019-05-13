---
id: 5a24bbe0dba28a8d3cbd4c5e
title: Add Comments in JSX
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Añadir comentarios en JSX
---

## Description
<section id="description"> JSX es una sintaxis que se compila en JavaScript válido. A veces, para facilitar la lectura, es posible que necesite agregar comentarios a su código. Como la mayoría de los lenguajes de programación, JSX tiene su propia manera de hacer esto. Para colocar comentarios dentro de JSX, usa la sintaxis <code>{/* */}</code> para envolver el texto del comentario. </section>

## Instructions
<section id="instructions"> El editor de código tiene un elemento JSX similar al que creaste en el último desafío. Agregue un comentario en algún lugar dentro del elemento <code>div</code> proporcionado, sin modificar los elementos <code>h1</code> o <code>p</code> existentes. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: La constante <code>JSX</code> debe devolver un elemento <code>div</code>.
    testString: 'assert(JSX.type === "div", "La constante <code>JSX</code> debe devolver un elemento <code>div</code>");'
  - text: El <code>div</code> debe contener una etiqueta <code>h1</code> como el primer elemento.
    testString: 'assert(JSX.props.children[0].type === "h1", "El <code>div</code> debe contener una etiqueta <code>h1</code> como el primer elemento.");'
  - text: El <code>div</code> debe contener una etiqueta <code>p</code> como el segundo elemento.
    testString: 'assert(JSX.props.children[1].type === "p", "El <code>div</code> debe contener una etiqueta <code>p</code> como el segundo elemento.");'
  - text: El <code>JSX</code> debe incluir un comentario.
    testString: 'getUserInput => assert(getUserInput("index").includes("/*") && getUserInput("index").includes("*/"), "El <code>JSX</code> debe incluir un comentario.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const JSX = (
  <div>
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
  </div>
);

```

</div>


### After Test
<div id='jsx-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
const JSX = (
<div>
  <h1>This is a block of JSX</h1>
  { /* this is a JSX comment */ }
  <p>Here's a subtitle</p>
</div>);
```

</section>
