---
id: 5a24bbe0dba28a8d3cbd4c5e
title: Add Comments in JSX
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Adicionar comentários no JSX
---

## Description
<section id="description"> JSX é uma sintaxe que é compilada em JavaScript válido. Às vezes, por questões de legibilidade, você pode precisar adicionar comentários ao seu código. Como a maioria das linguagens de programação, o JSX tem seu próprio jeito de fazer isso. Para colocar comentários dentro do JSX, use a sintaxe <code>{/* */}</code> para envolver o texto do comentário. </section>

## Instructions
<section id="instructions"> O editor de código tem um elemento JSX semelhante ao que você criou no último desafio. Adicione um comentário em algum lugar dentro do elemento <code>div</code> fornecido, sem modificar os elementos <code>h1</code> ou <code>p</code> existentes. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: A constante <code>JSX</code> deve retornar um elemento <code>div</code> .
    testString: 'assert(JSX.type === "div", "The constant <code>JSX</code> should return a <code>div</code> element.");'
  - text: O <code>div</code> deve conter uma tag <code>h1</code> como o primeiro elemento.
    testString: 'assert(JSX.props.children[0].type === "h1", "The <code>div</code> should contain an <code>h1</code> tag as the first element.");'
  - text: O <code>div</code> deve conter uma tag <code>p</code> como o segundo elemento.
    testString: 'assert(JSX.props.children[1].type === "p", "The <code>div</code> should contain a <code>p</code> tag as the second element.");'
  - text: O <code>JSX</code> deve incluir um comentário.
    testString: 'getUserInput => assert(getUserInput("index").includes("/*") && getUserInput("index").includes("*/"), "The <code>JSX</code> should include a comment.");'

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
// solution required
```
</section>
