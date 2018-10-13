---
title: Redux Reducers
localeTitle: Reductores Redux
---
## Reductores Redux

Los reductores de redux le permiten hacer cambios a su estado en su aplicación. Las acciones en redux solo le dicen a la aplicación lo que básicamente sucedió. Ya sea un evento de clic que tuvo lugar o un desplazamiento del mouse simplemente dirá que esto sucedió. Ahora, ¿cómo hace para cambiar el estado de su aplicación que vive dentro de la tienda y lo hace usando un reductor?

Ahora un reductor en redux necesita ser una función pura. Una función pura es un tipo de función que no tiene efectos secundarios adicionales. Le pasas algunos argumentos y te devuelve el resultado esperado. Por ejemplo:

```javascript
function add(a,b) { 
 return a + b; 
 } 
 
 const sum = add(5,4); 
```

La función anterior es pura porque no importa lo que ocurra, devolverá 9. Una función que tiene llamadas ajax dentro de ella o hace algo como acceder a una base de datos no es una función pura. Incluso si mutamos el cambio de significado, un valor variable puede considerarse no una función pura.

Ahora para hacer cambios al estado se usa un reductor. Aquí hay un código de ejemplo de un reductor:

```javascript
 function todoReducer(state= [],action) { 
  case 'ADD_TODO': 
      return [...state,action.data] 
  case  'DELETE_TODO': 
      return state.filter(todo=>todo.id !== action.id) 
  default: 
      return state; 
 } 
```

Lo que está haciendo este todoReducer es que toma el estado actual y la acción que se activó y luego devuelve un nuevo estado. Aquí usamos la sintaxis del parámetro predeterminado es6 para asignar un valor predeterminado a la matriz de estado. El objeto de acción para el reductor anterior puede tener el siguiente aspecto:

```javascript
{ 
 type: 'ADD_TODO', 
 data: {name: 'Learn Redux',completed:false} 
 } 
```

Aquí la acción tiene una propiedad de tipo 'ADD\_TODO' con un objeto de datos. Ahora, cuando esta acción se activa, es recibida por el reductor y luego, en función de la instrucción de cambio, devolverá una nueva matriz con los datos existentes junto con los nuevos datos.

Entonces, para resumir, los reductores no son más que funciones puras que devuelven un nuevo estado para su aplicación.

#### Más información:

[Redux-Reducers Documentos Oficiales](https://redux.js.org/basics/reducers)