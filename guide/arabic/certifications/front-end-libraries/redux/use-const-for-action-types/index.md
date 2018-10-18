---
title: Use const for Action Types
localeTitle: استخدم const for Action Types
---
## استخدم const for Action Types

### استخدام const for Action Types له ميزة كبيرة على استخدام السلاسل.

**يمكن أن يؤدي الخطأ الإملائي غير المقصود في السلاسل إلى أخطاء.**

يمكنك `type: 'LOGIN'` الهجاء `type: 'LOGIN'` بشكل صحيح في منشئ الفعل الخاص بك ولكن `type: 'LOGN'` الخطأ `type: 'LOGN'` في المخفض كما هو موضح أدناه.

 `const loginUser = () => { 
  return { 
    type: 'LOGIN' 
  } 
 }; 
 
 const authReducer = (state = defaultState, action) => { 
 
  switch (action.type) { 
 
    case 'LOGN': 
      return { 
        authenticated: true 
      } 
 
    case 'LOGOUT': 
      return { 
        authenticated: false 
      } 
 
    default: 
      return state; 
 
  } 
 
 }; 
` 

باستخدام const لنوع الإجراء ، لن يهم ما إذا كانت السلسلة تحتوي على أخطاء إملائية لأن كل من رمز تبديل المُخفض ونوع الإجراء `const` نفس `const` . باستخدام `const` قد يؤدي أيضا محرر التعليمات البرمجية ليشير إلى `const` كما كنت تكتب عليه، وبالتالي تقليل فرصة mispelling و `const` .

سيظهر الرمز الموضح أدناه.

 `const LOGIN = 'blahblahblah'; 
 const LOGOUT = 'wahwahwahwah'; 
 
 const loginUser = () => { 
  return { 
    type: LOGIN 
  } 
 }; 
 
 const logoutUser = () => { 
  return { 
    type: LOGOUT 
  } 
 }; 
 
 const authReducer = (state = defaultState, action) => { 
 
  switch (action.type) { 
 
    case LOGIN: 
      return { 
        authenticated: true 
      } 
 
    case LOGOUT: 
      return { 
        authenticated: false 
      } 
 
    default: 
      return state; 
 
  } 
 
 }; 
`