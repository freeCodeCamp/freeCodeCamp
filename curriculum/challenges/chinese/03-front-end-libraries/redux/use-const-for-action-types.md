---
id: 5a24c314108439a4d4036152
title: 使用 const 声明 Action Types
challengeType: 6
forumTopicId: 301450
---

# --description--

在使用 Redux 时的一个常见做法是将操作类型指定为只读，然后在任何使用它们的地方引用这些常量。你可以通过将 action types 使用`const`声明重构你正在使用的代码。

# --instructions--

将`LOGIN`和`LOGOUT`声明为`const`类型的值，并为它们分别分配字符串`'LOGIN'`和`'LOGOUT'`。然后，编辑`authReducer()`和 action creators 来引用这些常量而不是字符串值。

**注意：** 通常以全部大写形式写出常量，这也是 Redux 的标准做法。

# --hints--

调用`loginUser`函数应该返回一个 {type:"LOGIN"} 对象。

```js
assert(loginUser().type === 'LOGIN');
```

调用`logoutUser`函数应该返回一个 {type:\\"LOGOUT\\"} 对象。

```js
assert(logoutUser().type === 'LOGOUT');
```

store 应该初始化一个对象 {login：false}。

```js
assert(store.getState().authenticated === false);
```

dispatch `loginUser`以后应将 store 中的 state 的`login`值更新为`true`。

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

dispatch `logoutUser`应将 store 中的 state 的`login`值更新为`false`。

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

`authReducer`函数应该使用 switch 语句处理多个 action 类型。

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

应该使用`const LOGIN="LOGIN"`和`const LOGOUT="LOGOUT"`的方式声明`LOGIN`和`LOGOUT`。

```js
const noWhiteSpace = code.replace(/\s/g, '');
assert(
  /constLOGIN=(['"`])LOGIN\1/.test(noWhiteSpace) &&
    /constLOGOUT=(['"`])LOGOUT\1/.test(noWhiteSpace)
);
```

action creator 和 reducer 中应该引用`LOGIN`和`LOGOUT`常量。

```js
(getUserInput) =>
  assert(
    (function () {
      const noWhiteSpace = getUserInput('index').toString().replace(/\s/g, '');
      return (
        noWhiteSpace.includes('caseLOGIN:') &&
        noWhiteSpace.includes('caseLOGOUT:') &&
        noWhiteSpace.includes('type:LOGIN') &&
        noWhiteSpace.includes('type:LOGOUT')
      );
    })()
  );
```

# --solutions--

