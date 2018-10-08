---
id: 5a24c314108439a4d4036146
title: Map Dispatch to Props
localeTitle: Mapa de Despacho a Puntales
challengeType: 6
isRequired: false
---

## Description
<section id='description'> 
La función <code>mapDispatchToProps()</code> se usa para proporcionar creadores de acción específicos a sus componentes React para que puedan enviar acciones contra el almacén de Redux. Es similar en estructura a la función <code>mapStateToProps()</code> que escribió en el último desafío. Devuelve un objeto que asigna acciones de despacho a nombres de propiedades, que se convierten en <code>props</code> componentes. Sin embargo, en lugar de devolver una parte del <code>state</code> , cada propiedad devuelve una función que llama el <code>dispatch</code> con un creador de acción y cualquier información de acción relevante. Tiene acceso a este <code>dispatch</code> porque se pasa a <code>mapDispatchToProps()</code> como un parámetro cuando define la función, al igual que pasó el <code>state</code> a <code>mapStateToProps()</code> . Detrás de escena, React Redux está utilizando <code>store.dispatch()</code> Redux para realizar estos despachos con <code>mapDispatchToProps()</code> . Esto es similar a cómo utiliza <code>store.subscribe()</code> para los componentes que se asignan al <code>state</code> . 
Por ejemplo, tiene un creador de acción <code>loginUser()</code> que toma un <code>username</code> como una carga útil de acción. El objeto devuelto desde <code>mapDispatchToProps()</code> para este creador de acción se vería algo así como: 
<blockquote>{<br>&nbsp;&nbsp;submitLoginUser: function(username) {<br>&nbsp;&nbsp;&nbsp;&nbsp;dispatch(loginUser(username));<br>&nbsp;&nbsp;}<br>}</blockquote> 
</section>

## Instructions
<section id='instructions'> 
El editor de código proporciona un creador de acción llamado <code>addMessage()</code> . Escriba la función <code>mapDispatchToProps()</code> que toma el <code>dispatch</code> como un argumento, luego devuelve un objeto. El objeto debe tener una propiedad <code>submitNewMessage</code> establecida en la función de envío, que toma un parámetro para que el nuevo mensaje se agregue cuando distribuya <code>addMessage()</code> . 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>addMessage</code> debe devolver un objeto con claves de <code>type</code> y <code>message</code> .
    testString: 'assert((function() { const addMessageTest = addMessage(); return ( addMessageTest.hasOwnProperty("type") && addMessageTest.hasOwnProperty("message")); })(), "<code>addMessage</code> should return an object with keys <code>type</code> and <code>message</code>.");'
  - text: <code>mapDispatchToProps</code> debería ser una función.
    testString: 'assert(typeof mapDispatchToProps === "function", "<code>mapDispatchToProps</code> should be a function.");'
  - text: <code>mapDispatchToProps</code> debe devolver un objeto.
    testString: 'assert(typeof mapDispatchToProps() === "object", "<code>mapDispatchToProps</code> should return an object.");'
  - text: El envío de <code>addMessage</code> con <code>submitNewMessage</code> desde <code>mapDispatchToProps</code> debe devolver un mensaje a la función de envío.
    testString: 'assert((function() { let testAction; const dispatch = (fn) => { testAction = fn; }; let dispatchFn = mapDispatchToProps(dispatch); dispatchFn.submitNewMessage("__TEST__MESSAGE__"); return (testAction.type === "ADD" && testAction.message === "__TEST__MESSAGE__"); })(), "Dispatching <code>addMessage</code> with <code>submitNewMessage</code> from <code>mapDispatchToProps</code> should return a message to the dispatch function.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

// change code below this line

```

</div>



</section>

## Solution
<section id='solution'>


```js
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

// change code below this line

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: function(message) {
      dispatch(addMessage(message));
    }
  }
};
```

</section>
