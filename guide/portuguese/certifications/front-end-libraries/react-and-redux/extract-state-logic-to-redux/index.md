---
title: Extract State Logic to Redux
localeTitle: Extraia a lógica de estado para Redux
---
## Extraia a lógica de estado para Redux

Este é um esboço. [Ajude nossa comunidade a expandi-lo](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/front-end-libraries/react-and-redux/extract-state-logic-to-redux/index.md) .

[Este guia de estilo rápido ajudará a garantir que sua solicitação de recebimento seja aceita](https://github.com/freecodecamp/guides/blob/master/README.md) .

Solução sugerida:

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