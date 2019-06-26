---
id: 5a24c314108439a4d4036152
title: Use const for Action Types
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 将const用于Action Types
---

## Description
<section id="description">使用Redux时的一种常见做法是将操作类型指定为只读常量，然后在使用它们的任何地方引用这些常量。您可以重构您正在使用的代码，将操作类型编写为<code>const</code>声明。 </section>

## Instructions
<section id="instructions">将<code>LOGIN</code>和<code>LOGOUT</code>声明为<code>const</code>值，并将它们分别分配给字符串<code>&#39;LOGIN&#39;</code>和<code>&#39;LOGOUT&#39;</code> 。然后，编辑<code>authReducer()</code>和动作创建者以引用这些常量而不是字符串值。 <strong>注意：</strong>通常以全部大写形式写常量，这也是Redux中的标准做法。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 測試文本
    testString: assert(true);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
// change code below this line

// change code above this line

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

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
