---
title: Redux Actions
localeTitle: Acciones Redux
---
## Acciones Redux

La acción Redux es un objeto simple que describe qué tipo de evento ha ocurrido en su aplicación. Incluso pueden contener Datos que deben enviarse desde la aplicación al almacén de Redux. La acción puede contener cualquier cosa pero debe tener un carácter obligatorio. Tipo de propiedad que describe el evento que tiene lugar. Una buena práctica es usar constantes al describir la acción.

Por ejemplo

```javascript
const ADD_ITEM = 'ADD_ITEM' 
```

```javascript
{ 
 type: ADD_ITEM, 
 text: 'This is the first item' 
 } 
```

Podemos enviar estas acciones a la tienda usando `javascript store.dispatch()` Una aplicación puede tener diferentes tipos de eventos que suceden a la vez y estas acciones ayudan a describir estos eventos. Sin estas acciones no hay forma de cambiar el estado de la aplicación.

Puede intentar [un](https://github.com/redux-utilities/redux-actions) proyecto de [redux-actions](https://github.com/redux-utilities/redux-actions) que reduce gran cantidad de repeticiones, lo que hace que sus acciones sean más rápidas.

#### Más información:

[Acciones-Redux Documentos Oficiales](https://redux.js.org/basics/actions) página del proyecto github [redux-actions](https://github.com/redux-utilities/redux-actions)