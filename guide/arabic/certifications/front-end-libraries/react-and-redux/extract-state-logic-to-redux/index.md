---
title: Extract State Logic to Redux
localeTitle: استخراج الدولة المنطق إلى Redux
---
## استخراج الدولة المنطق إلى Redux

هذا هو كعب. [ساعد مجتمعنا على توسيعه](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/front-end-libraries/react-and-redux/extract-state-logic-to-redux/index.md) .

[سيساعدك دليل النمط السريع هذا على ضمان قبول طلب السحب](https://github.com/freecodecamp/guides/blob/master/README.md) .

الحل المقترح:

 `const ADD = 'ADD';

 const addMessage = (message) => {
   return {
     type: ADD,
     message
   }
 };

 const messageReducer = (state = [], action) => {
   switch (action.type) {
     case ADD:
       return [
         ...state,
         action.message
       ];
     default:
       return state;
   }
 };

 const store = Redux.createStore(messageReducer); 
`
