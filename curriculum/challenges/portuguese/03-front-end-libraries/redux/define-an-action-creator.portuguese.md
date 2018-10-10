---
id: 5a24c314108439a4d403614e
title: Define an Action Creator
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Definir um criador de ações
---

## Description
<section id="description"> Depois de criar uma ação, o próximo passo é enviar a ação para o repositório Redux para que ela possa atualizar seu estado. No Redux, você define criadores de ações para realizar isso. Um criador de ações é simplesmente uma função JavaScript que retorna uma ação. Em outras palavras, criadores de ações criam objetos que representam eventos de ação. </section>

## Instructions
<section id="instructions"> Defina uma função denominada <code>actionCreator()</code> que retorna o objeto de <code>action</code> quando chamado. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: A função <code>actionCreator</code> deve existir.
    testString: 'assert(typeof actionCreator === "function", "The function <code>actionCreator</code> should exist.");'
  - text: A execução da função <code>actionCreator</code> deve retornar o objeto de ação.
    testString: 'assert(typeof action === "object", "Running the <code>actionCreator</code> function should return the action object.");'
  - text: A ação retornada deve ter um tipo de propriedade de chave com o valor <code>LOGIN</code> .
    testString: 'assert(action.type === "LOGIN", "The returned action should have a key property type with value <code>LOGIN</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const action = {
  type: 'LOGIN'
}
// Define an action creator here:

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
