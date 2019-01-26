---
id: 5a24c314108439a4d4036145
title: Map State to Props
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Mapa del estado a los apoyos
---

## Descripción
<section id="description"> El componente <code>Provider</code> permite proporcionar <code>state</code> y <code>dispatch</code> a sus componentes React, pero debe especificar exactamente qué estado y acciones desea. De esta manera, se asegura de que cada componente solo tenga acceso al estado que necesita. Esto se logra creando dos funciones: <code>mapStateToProps()</code> y <code>mapDispatchToProps()</code> . En estas funciones, declara a qué estados de estado desea acceder y a qué creadores de acción necesita poder enviar. Una vez que estas funciones estén en su lugar, verá cómo utilizar el método React Redux <code>connect</code> para conectarlos a sus componentes en otro desafío. <strong>Nota:</strong> Detrás de escena, React Redux usa el método <code>store.subscribe()</code> para implementar <code>mapStateToProps()</code> . </section>

## Instrucciones
<section id="instructions"> Crear una función <code>mapStateToProps()</code> . Esta función debe tomar el <code>state</code> como un argumento, luego devolver un objeto que mapea ese estado a nombres de propiedad específicos. Estas propiedades serán accesibles a su componente a través de <code>props</code> . Como este ejemplo mantiene todo el estado de la aplicación en una sola matriz, puede pasar ese estado completo a su componente. Cree un <code>messages</code> propiedad en el objeto que se está devolviendo y configúrelo en <code>state</code> . </section>

## Pruebas
<section id='tests'>

```yml
tests:
  - text: El <code>state</code> constante debe ser una matriz vacía.
    testString: 'assert(Array.isArray(state) && state.length === 0, "The const <code>state</code> should be an empty array.");'
  - text: <code>mapStateToProps</code> debería ser una función.
    testString: 'assert(typeof mapStateToProps === "function", "<code>mapStateToProps</code> should be a function.");'
  - text: <code>mapStateToProps</code> debe devolver un objeto.
    testString: 'assert(typeof mapStateToProps() === "object", "<code>mapStateToProps</code> should return an object.");'
  - text: Pasar una matriz como estado a <code>mapStateToProps</code> debería devolver esta matriz asignada a una clave de <code>messages</code> .
    testString: 'assert(mapStateToProps(["messages"]).messages.pop() === "messages", "Passing an array as state to <code>mapStateToProps</code> should return this array assigned to a key of <code>messages</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const state = [];

// cambia el código debajo esta linea

```

</div>



</section>

## Solución
<section id='solution'>

```js
// Solución requerida 
```
</section>
