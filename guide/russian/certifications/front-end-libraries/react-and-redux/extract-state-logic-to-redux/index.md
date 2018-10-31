---
title: Extract State Logic to Redux
localeTitle: Извлечь логику состояния в Redux
---
## Извлечь логику состояния в Redux

Это заглушка. [Помогите нашему сообществу расширить его](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/front-end-libraries/react-and-redux/extract-state-logic-to-redux/index.md) .

[Это руководство по быстрому стилю поможет вам принять ваш запрос на тягу](https://github.com/freecodecamp/guides/blob/master/README.md) .

Предлагаемое решение:

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