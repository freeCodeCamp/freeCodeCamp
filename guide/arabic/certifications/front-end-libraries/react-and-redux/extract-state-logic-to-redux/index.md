---
title: Extract State Logic to Redux
localeTitle: استخراج الدولة المنطق إلى Redux
---
## استخراج الدولة المنطق إلى Redux

هذا هو كعب. [ساعد مجتمعنا على توسيعه](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/front-end-libraries/react-and-redux/extract-state-logic-to-redux/index.md) .

[سيساعدك دليل النمط السريع هذا على ضمان قبول طلب السحب](https://github.com/freecodecamp/guides/blob/master/README.md) .

الحل المقترح:

 `const ADD = 'ADD'; 
 
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
`