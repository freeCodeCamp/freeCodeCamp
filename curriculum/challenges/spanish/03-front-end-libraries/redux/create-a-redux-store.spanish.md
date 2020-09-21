---
id: 5a24c314108439a4d403614b
title: Create a Redux Store
challengeType: 6
videoUrl: ''
localeTitle: Crear una tienda Redux
---

## Description
<section id="description"> Redux es un marco de administración estatal que se puede usar con varias tecnologías web diferentes, incluida React. En Redux, hay un solo objeto de estado que es responsable del estado completo de su aplicación. Esto significa que si tenía una aplicación React con diez componentes, y cada componente tenía su propio estado local, el estado completo de su aplicación estaría definido por un objeto de estado único alojado en el <code>store</code> Redux. Este es el primer principio importante que se debe entender al aprender Redux: la tienda Redux es la única fuente de verdad cuando se trata del estado de la aplicación. Esto también significa que en cualquier momento en que cualquier parte de su aplicación quiera actualizar el estado, <strong>debe</strong> hacerlo a través de la tienda Redux. El flujo de datos unidireccional facilita el seguimiento de la administración del estado en su aplicación. </section>

## Instructions
<section id="instructions"> El <code>store</code> Redux es un objeto que mantiene y administra el <code>state</code> aplicación. Existe un método llamado <code>createStore()</code> en el objeto Redux, que se utiliza para crear el <code>store</code> Redux. Este método toma una función <code>reducer</code> como un argumento requerido. La función de <code>reducer</code> se cubre en un desafío posterior y ya está definida para usted en el editor de código. Simplemente toma el <code>state</code> como argumento y devuelve el <code>state</code> . Declare una variable de <code>store</code> y <code>createStore()</code> método <code>createStore()</code> , pasando el <code>reducer</code> como un argumento. <strong>Nota:</strong> el código en el editor utiliza la sintaxis de argumentos por defecto de ES6 para inicializar este estado para mantener un valor de <code>5</code> . Si no está familiarizado con los argumentos predeterminados, puede consultar la <a target="_blank" href="https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/es6/set-default-parameters-for-your-functions">sección ES6 en el Currículo</a> que cubre este tema. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: La tienda redux existe.
    testString: 'assert(typeof store.getState === "function", "The redux store exists.");'
  - text: La tienda redux tiene un valor de 5 para el estado.
    testString: 'assert(store.getState()=== 5, "The redux store has a value of 5 for the state.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const reducer = (state = 5) => {
  return state;
}

// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the store here:

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
