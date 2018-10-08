---
id: 5a24c314108439a4d403614d
title: Define a Redux Action
localeTitle: Definir una acción redux
challengeType: 6
isRequired: false
---

## Description
<section id='description'> 
Dado que Redux es un marco de administración de estado, la actualización del estado es una de sus tareas principales. En Redux, todas las actualizaciones de estado se activan mediante acciones de despacho. Una acción es simplemente un objeto de JavaScript que contiene información sobre un evento de acción que ha ocurrido. El almacén de Redux recibe estos objetos de acción y, a continuación, actualiza su estado en consecuencia. A veces, una acción Redux también lleva algunos datos. Por ejemplo, la acción lleva un nombre de usuario después de que un usuario inicie sesión. Mientras que los datos son opcionales, las acciones deben llevar una propiedad de <code>type</code> que especifique el &#39;tipo&#39; de acción que ocurrió. 
Piense en las acciones de Redux como mensajeros que brindan información sobre los eventos que ocurren en su aplicación a la tienda de Redux. La tienda luego lleva a cabo el negocio de actualizar el estado en función de la acción que se produjo. 
</section>

## Instructions
<section id='instructions'> 
Escribir una acción de Redux es tan simple como declarar un objeto con una propiedad de tipo. Declare una <code>action</code> objeto y asígnele un <code>type</code> propiedad establecido en la cadena <code>&#39;LOGIN&#39;</code> . 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Un objeto de acción debería existir.
    testString: 'assert((function() { return typeof action === "object" })(), "An action object should exist.");'
  - text: La acción debe tener un tipo de propiedad clave con el valor <código clase = "notranslate"> LOGIN </code>.
    testString: 'assert((function() { return action.type === "LOGIN" })(), "The action should have a key property type with value <code>LOGIN</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
// Define an action here:

```

</div>



</section>

## Solution
<section id='solution'>


```js
const action = {
  type: 'LOGIN'
}
```

</section>
