---
id: 5a24c314108439a4d4036157
title: Write a Counter with Redux
challengeType: 6
videoUrl: ''
localeTitle: Escreva um contador com Redux
---

## Description
<section id="description"> Agora você aprendeu todos os princípios fundamentais do Redux! Você viu como criar ações e criadores de ações, criar uma loja Redux, despachar suas ações contra a loja e criar atualizações de estado com redutores puros. Você já viu como gerenciar o estado complexo com a composição do redutor e lidar com ações assíncronas. Esses exemplos são simplistas, mas esses conceitos são os princípios centrais do Redux. Se você os entende bem, você está pronto para começar a construir seu próprio aplicativo Redux. Os próximos desafios abrangem alguns detalhes sobre a imutabilidade do <code>state</code> , mas primeiro, aqui está uma análise de tudo que você aprendeu até agora. </section>

## Instructions
<section id="instructions"> Nesta lição, você implementará um contador simples com o Redux do zero. O básico é fornecido no editor de código, mas você terá que preencher os detalhes! Use os nomes que são fornecidos e definem <code>incAction</code> e <code>decAction</code> criadores de ação, o <code>counterReducer()</code> , <code>INCREMENT</code> e <code>DECREMENT</code> tipos de ação, e, finalmente, a Redux <code>store</code> . Quando terminar, você poderá despachar as ações <code>INCREMENT</code> ou <code>DECREMENT</code> para incrementar ou decrementar o estado mantido na <code>store</code> . Boa sorte construindo seu primeiro app Redux! </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O criador de ações <code>incAction</code> deve retornar um objeto de ação com um <code>type</code> igual ao valor de <code>INCREMENT</code>
    testString: 'assert(incAction().type ===INCREMENT, "The action creator <code>incAction</code> should return an action object with <code>type</code> equal to the value of <code>INCREMENT</code>");'
  - text: O criador de ações <code>decAction</code> deve retornar um objeto de ação com um <code>type</code> igual ao valor de <code>DECREMENT</code>
    testString: 'assert(decAction().type === DECREMENT, "The action creator <code>decAction</code> should return an action object with <code>type</code> equal to the value of <code>DECREMENT</code>");'
  - text: O repositório do Redux deve inicializar com um <code>state</code> de 0.
    testString: 'assert(store.getState() === 0, "The Redux store should initialize with a <code>state</code> of 0.");'
  - text: Dispatching <code>incAction</code> no armazenamento do Redux deve incrementar o <code>state</code> em 1.
    testString: 'assert((function() { const initialState = store.getState(); store.dispatch(incAction()); const incState = store.getState(); return initialState + 1 === incState })(), "Dispatching <code>incAction</code> on the Redux store should increment the <code>state</code> by 1.");'
  - text: Dispatching <code>decAction</code> no armazenamento do Redux deve decrementar o <code>state</code> em 1.
    testString: 'assert((function() { const initialState = store.getState(); store.dispatch(decAction()); const decState = store.getState(); return initialState - 1 === decState })(), "Dispatching <code>decAction</code> on the Redux store should decrement the <code>state</code> by 1.");'
  - text: <code>counterReducer</code> deve ser uma função
    testString: 'assert(typeof counterReducer === "function", "<code>counterReducer</code> should be a function");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const INCREMENT = null; // define a constant for increment action types
const DECREMENT = null; // define a constant for decrement action types

const counterReducer = null; // define the counter reducer which will increment or decrement the state based on the action it receives

const incAction = null; // define an action creator for incrementing

const decAction = null; // define an action creator for decrementing

const store = null; // define the Redux store here, passing in your reducers

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
