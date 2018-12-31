---
title: Redux Thunk
localeTitle: Redux Thunk
---
## Redux Thunk

Redux Thunk هي برامج وسيطة تسمح لك بإعادة الوظائف ، بدلاً من الإجراءات فقط ، داخل Redux 1 . وهذا يسمح بالتأخر في الإجراءات ، بما في ذلك العمل مع الوعود.

السبب في أننا نستخدم هذه الوسيطة هو السبب في أنه لن تكون جميع الإجراءات التي نقوم بها متزامنة وبعضها لا يكون متزامنًا ، مثل استخدام axios لإرسال طلب الحصول على. وسيستغرق ذلك بعض الوقت ، ولا يأخذ عملية التحسين البسيطة في حساب هذا السلوك الجسيم. لذا ، فإن Redux-thunk يأتي إلى الإنقاذ من خلال السماح لنا بإرسال الأعمال بشكل غير متزامن ، حتى يمكننا السماح لهذه الوعود بالحل.

مثال 1:

 ``const INCREMENT_COUNTER = 'INCREMENT_COUNTER'; 
 
 function increment() { 
  return { 
    type: INCREMENT_COUNTER 
  }; 
 } 
 
 function incrementAsync() { 
  return dispatch => { 
    setTimeout(() => { 
      // Yay! Can invoke sync or async actions with `dispatch` 
      dispatch(increment()); 
    }, 1000); 
  }; 
 } 
`` 

المثال 2:

 `const GET_CURRENT_USER = 'GET_CURRENT_USER'; 
 const GET_CURRENT_USER_SUCCESS = 'GET_CURRENT_USER_SUCCESS'; 
 const GET_CURRENT_USER_FAILURE = 'GET_CURRENT_USER_FAILURE'; 
 
 const getUser = () => { 
  return (dispatch) => {     //nameless functions 
    // Initial action dispatched 
    dispatch({ type: GET_CURRENT_USER }); 
    // Return promise with success and failure actions 
    return axios.get('/api/auth/user').then( 
      user => dispatch({ type: GET_CURRENT_USER_SUCCESS, user }), 
      err => dispatch({ type: GET_CURRENT_USER_FAILURE, err }) 
    ); 
  }; 
 }; 
` 

### التثبيت والإعداد

يمكن تثبيت Redux Thunk باستخدام `npm install redux-thunk --save` أو `yarn add redux-thunk` مع سطر الأوامر. لأنها أداة Redux ، ستحتاج أيضًا إلى إعداد Redux. بمجرد تثبيته ، يتم تمكينه باستخدام `applyMiddleware()` :

 `import { createStore, applyMiddleware } from 'redux'; 
 import thunk from 'redux-thunk'; 
 import rootReducer from './reducers/index'; 
 
 const store = createStore( 
  rootReducer, 
  applyMiddleware(thunk) 
 ); 
` 

### المراجع

*   [Redux Thunk Github Repo](https://github.com/reduxjs/redux-thunk)
*   [Redux الوسيطة](https://redux.js.org/advanced/middleware)

### مصادر

1.  [مثال عداد الزيادة المستشهد به من وثائق Redux Thunk ، بتاريخ 10/02/2018](#https://github.com/reduxjs/redux-thunk)