---
id: 5a24c314108439a4d4036145
title: Map State to Props
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Mapa do estado para adereços
---

## Description
<section id="description"> O componente <code>Provider</code> permite que você forneça o <code>state</code> e o <code>dispatch</code> para seus componentes React, mas você deve especificar exatamente qual estado e ações você deseja. Dessa forma, você garante que cada componente tenha acesso apenas ao estado de que precisa. Você consegue isso criando duas funções: <code>mapStateToProps()</code> e <code>mapDispatchToProps()</code> . Nessas funções, você declara quais partes do estado deseja ter acesso e quais ações criadores precisa ser capaz de enviar. Uma vez que estas funções estão no lugar, você verá como usar o Reagir Redux <code>connect</code> método para conectá-los aos seus componentes em um outro desafio. <strong>Nota:</strong> Nos bastidores, o React Redux usa o método <code>store.subscribe()</code> para implementar o <code>mapStateToProps()</code> . </section>

## Instructions
<section id="instructions"> Crie uma função <code>mapStateToProps()</code> . Essa função deve usar o <code>state</code> como um argumento e, em seguida, retornar um objeto que mapeie esse estado para nomes de propriedade específicos. Essas propriedades se tornarão acessíveis ao seu componente por meio de <code>props</code> . Como este exemplo mantém todo o estado do aplicativo em um único array, você pode passar todo esse estado para o seu componente. Crie uma propriedade de <code>messages</code> no objeto que está sendo retornado e defina-a como <code>state</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O <code>state</code> const deve ser um array vazio.
    testString: 'assert(Array.isArray(state) && state.length === 0, "The const <code>state</code> should be an empty array.");'
  - text: <code>mapStateToProps</code> deve ser uma função.
    testString: 'assert(typeof mapStateToProps === "function", "<code>mapStateToProps</code> should be a function.");'
  - text: <code>mapStateToProps</code> deve retornar um objeto.
    testString: 'assert(typeof mapStateToProps() === "object", "<code>mapStateToProps</code> should return an object.");'
  - text: Passar uma matriz como estado para <code>mapStateToProps</code> deve retornar essa matriz atribuída a uma chave de <code>messages</code> .
    testString: 'assert(mapStateToProps(["messages"]).messages.pop() === "messages", "Passing an array as state to <code>mapStateToProps</code> should return this array assigned to a key of <code>messages</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const state = [];

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
