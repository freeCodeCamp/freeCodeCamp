---
id: 5a24c314108439a4d403614c
title: Get State from the Redux Store
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Obtenha o estado da loja Redux
---

## Description
<section id="description"> O objeto de armazenamento Redux fornece vários métodos que permitem interagir com ele. Por exemplo, você pode recuperar o <code>state</code> atual mantido no objeto de armazenamento Redux com o método <code>getState()</code> . </section>

## Instructions
<section id="instructions"> O código do desafio anterior é reescrito de maneira mais concisa no editor de código. Use <code>store.getState()</code> para recuperar o <code>state</code> do <code>store</code> e atribua isso a uma nova variável <code>currentState</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O armazenamento do redux deve ter um valor de 5 para o estado inicial.
    testString: 'assert(store.getState()===5, "The redux store should have a value of 5 for the initial state.");'
  - text: Uma variável <code>currentState</code> deve existir e deve ser atribuída ao estado atual do repositório do Redux.
    testString: 'getUserInput => assert(currentState === 5 && getUserInput("index").includes("store.getState()"), "A variable <code>currentState</code> should exist and should be assigned the current state of the Redux store.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const store = Redux.createStore(
  (state = 5) => state
);

// change code below this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
