---
title: Extract State Logic to Redux
localeTitle: Extraer la lógica de estado para redux
---
## Extraer la lógica de estado para redux

Esto es un talón. [Ayuda a nuestra comunidad a expandirla](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/front-end-libraries/react-and-redux/extract-state-logic-to-redux/index.md) .

[Esta guía rápida de estilo ayudará a asegurar que su solicitud de extracción sea aceptada](https://github.com/freecodecamp/guides/blob/master/README.md) .

Solución sugerida:

```javascript
const ADD = 'ADD'; 
 
 function addMessage(message) { 
  return { 
    type: ADD, 
    message: message 
  }; 
 }; 
 
 function messageReducer (previousState, action) { 
  return [...previousState, action.message]; 
 } 
 
 let store = { 
  state: [], 
  getState: () => store.state, 
  dispatch: (action) => { 
    if (action.type === ADD) { 
      store.state = messageReducer(store.state, action); 
    } 
  } 
 }; 

```