---
title: Extract State Logic to Redux
localeTitle: 将状态逻辑提取到Redux
---
## 将状态逻辑提取到Redux

这是一个存根。 [帮助我们的社区扩展它](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/front-end-libraries/react-and-redux/extract-state-logic-to-redux/index.md) 。

[这种快速风格指南有助于确保您的拉取请求被接受](https://github.com/freecodecamp/guides/blob/master/README.md) 。

建议的解决方案：

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