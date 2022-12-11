---
id: 5a24c314108439a4d4036152
title: استخدام ثابت (const) في لأنواع الإجراء (Action Types)
challengeType: 6
forumTopicId: 301450
dashedName: use-const-for-action-types
---

# --description--

والممارسة الشائعة عند العمل مع Redux هي تعيين أنواع الإجراءات كثوابت للقراءة فقط، ثم الرجوع إلى هذه الثوابت (constants) أينما استخدمت. يمكنك إعادة تعديل التعليمات البرمجية التي تعمل معها لكتابة أنواع الإجراءات كإعلانات `const`.

# --instructions--

إعلان `LOGIN` و `LOGOUT` بقيمة `const` وتعيينها إلى strings بقيمة `'LOGIN'` و `'LOGOUT'`، على التوالي. ثم حرر `authReducer()` ومباني العمل للإشارة إلى هذه الثوابت بدلاً من قيم المقطع (string).

**ملاحظة:** هي عادة متفق عليها وهي كتابة الثوابت في كل الحروف على هيئة uppercase، وهذه ممارسة عادية في Redux أيضا.

# --hints--

الاتصال بالوظيفة `loginUser` يجب أن يعيد كائن يحمل مجموعة الخصائص `type` من string باسم `LOGIN`.

```js
assert(loginUser().type === 'LOGIN');
```

الاتصال بالوظيفة `logoutUser` يجب أن يعيد كائن يحمل مجموعة الخصائص `type` من string باسم `LOGOUT`.

```js
assert(logoutUser().type === 'LOGOUT');
```

يجب تهيئة المتجر مع كائن ذو خاصية `login` بقيمة `false`.

```js
assert(store.getState().authenticated === false);
```

إرسال `loginUser` يجب أن تحديث خاصية `login` في حالة (state) المتجر (store) إلى `true`.

```js
assert(
  (function () {
    const initialState = store.getState();
    store.dispatch(loginUser());
    const afterLogin = store.getState();
    return (
      initialState.authenticated === false && afterLogin.authenticated === true
    );
  })()
);
```

إرسال `logoutUser` يجب أن تحديث خاصية `login` في حالة (state) المتجر (store) إلى `false`.

```js
assert(
  (function () {
    store.dispatch(loginUser());
    const loggedIn = store.getState();
    store.dispatch(logoutUser());
    const afterLogout = store.getState();
    return (
      loggedIn.authenticated === true && afterLogout.authenticated === false
    );
  })()
);
```

يجب أن تتعامل وظيفة `authReducer` مع أنواع متعددة من الإجراءات (actions) مع تعبير switch.

```js
(getUserInput) =>
  assert(
    (function () {
      return (
        typeof authReducer === 'function' &&
        getUserInput('index').toString().includes('switch') &&
        getUserInput('index').toString().includes('case') &&
        getUserInput('index').toString().includes('default')
      );
    })()
  );
```

`LOGIN` و `LOGOUT` يجب إعلانه باسم `const` وينبغي تعيين strings بقيم `LOGIN` و `LOGOUT`.

```js
const noWhiteSpace = __helpers.removeWhiteSpace(code);
assert(LOGIN === 'LOGIN' && LOGOUT === 'LOGOUT')
assert(noWhiteSpace.includes('const'))
```

يجب أن يشير منشئو الإجراءات و reducer إلى الثوابت `LOGIN` و `LOGOUT`.

```js
(getUserInput) =>
  assert(
    (function () {
      const noWhiteSpace = __helpers.removeWhiteSpace(
        getUserInput('index').toString()
      );
      return (
        noWhiteSpace.includes('caseLOGIN:') &&
        noWhiteSpace.includes('caseLOGOUT:') &&
        noWhiteSpace.includes('type:LOGIN') &&
        noWhiteSpace.includes('type:LOGOUT')
      );
    })()
  );
```

# --seed--

## --seed-contents--

```js


const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {

  switch (action.type) {
    case 'LOGIN': 
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

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};
```

# --solutions--

```js
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const defaultState = {
  authenticated: false
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

const store = Redux.createStore(authReducer);

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
```
