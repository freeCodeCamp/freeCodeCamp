---
id: 5a24c314108439a4d4036154
title: دمج Reducers المتعددة
challengeType: 6
forumTopicId: 301436
dashedName: combine-multiple-reducers
---

# --description--

عندما تبدأ حالة التطبيق الخاص بك في النمو أكثر تعقيدا، قد يكون من المغري تقسيم الحالة إلى قطع متعددة. بدلاً من ذلك، تذكر المبدأ الأول في Redux: كل حالة التطبيق موجودة في كائن حالة واحدة في المتجر (store). ولذلك، فإن Redux يوفر تركيبة reducer كحل لنموذج معقد للحالة. يمكنك تعريف مخفضات (reducers) متعددة للتعامل مع أجزاء مختلفة من حالة تطبيقك، ثم كون هذه المخفضات (reducers) معاً في مختصر أساسي واحد. يُمرر تقصير (reducer) أساسي إلى طريقة Redux باسم `createStore()`.

من أجل السماح لنا بالجمع بين عدة مخفضات (reducers) معا، يوفر Redux طريقة `combineReducers()`. تَقبل هذه الطريقة الكائن كحجة تحدد فيها الخصائص التي تربط المفاتيح بوظائف مخفيضة (reducer) معينة. الاسم الذي تعطيه للهُوِيَّات (keys) سوف يستخدم بواسطة Redux كاسم للقطعة المرتبطة بالحالة (state).

وعادة ما يكون من الممارسات الجيدة إنشاء تخفيض (reducer) لكل حالة من حالات التطبيق عندما تكون متميزة أو فريدة بطريقة ما. على سبيل المثال، في تطبيق أخذ ملاحظات مع توثيق المستخدم (user authentication)، يمكن لأحد المختصرات (reducer) التعامل مع التوثيق بينما يتعامل آخر مع النص ويلاحظ أن المستخدم إرساله. من أجل مثل التطبيق، قد نكتب طريقة `combineReducers()` مثل:

```js
const rootReducer = Redux.combineReducers({
  auth: authenticationReducer,
  notes: notesReducer
});
```

الآن، سوف تحتوي هُوِيَّة على `notes` التي تحمل الحالة المرتبطة بملاحظاتنا ويعالجها `notesReducer` لدينا. هذه هي الطريقة التي يمكن بها تكوين وحدات خفض متعددة لإدارة حالة التطبيق الأكثر تعقيدا. في هذا المثال، ستكون الحالة المحتفظ بها في متجر Redux كائناً واحدًا يحتوي على خصائص `auth` و `notes`.

# --instructions--

هناك وظائف `counterReducer()` و `authReducer()` مقدمة في محرر التعليمات البرمجية، بالإضافة إلى متجر Redux. إنهاء كتابة وظيفة `rootReducer()` باستخدام طريقة `Redux.combineReducers()`. تعيين `counterReducer` لهُوِيَّة (key) تسمى `count` و `authReducer` لهُوِيَّة تسمى `auth`.

# --hints--

`counterReducer` يجب أن يزيد ويقلل قيمة `state`.

```js
assert(
  (function () {
    const initialState = store.getState().count;
    store.dispatch({ type: INCREMENT });
    store.dispatch({ type: INCREMENT });
    const firstState = store.getState().count;
    store.dispatch({ type: DECREMENT });
    const secondState = store.getState().count;
    return firstState === initialState + 2 && secondState === firstState - 1;
  })()
);
```

يجب أن يغير `authReducer` مكون `state` بقيمة `authenticated` بين `true` و `false`.

```js
assert(
  (function () {
    store.dispatch({ type: LOGIN });
    const loggedIn = store.getState().auth.authenticated;
    store.dispatch({ type: LOGOUT });
    const loggedOut = store.getState().auth.authenticated;
    return loggedIn === true && loggedOut === false;
  })()
);
```

يجب أن يحتوي المتجر `state` على هُوِيَّتين: `count`، يحتوي على عدد، و `auth`، التي تحتوي على كائن. يجب أن يكون الكائن `auth` خاصية `authenticated`، التي تحتوي على منطق (boolean).

```js
assert(
  (function () {
    const state = store.getState();
    return (
      typeof state.auth === 'object' &&
      typeof state.auth.authenticated === 'boolean' &&
      typeof state.count === 'number'
    );
  })()
);
```

يجب أن يكون وظيفة `rootReducer` تجمع `counterReducer` و `authReducer`.

```js
(getUserInput) =>
  assert(
    (function () {
      const noWhiteSpace = __helpers.removeWhiteSpace(getUserInput('index'));
      return (
        typeof rootReducer === 'function' &&
        noWhiteSpace.includes('Redux.combineReducers')
      );
    })()
  );
```

# --seed--

## --seed-contents--

```js
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
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

const rootReducer = // Define the root reducer here

const store = Redux.createStore(rootReducer);
```

# --solutions--

```js
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
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

const rootReducer = Redux.combineReducers({
  count: counterReducer,
  auth: authReducer
});

const store = Redux.createStore(rootReducer);
```
