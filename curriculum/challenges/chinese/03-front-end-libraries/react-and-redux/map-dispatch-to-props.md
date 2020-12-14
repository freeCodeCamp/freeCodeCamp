---
id: 5a24c314108439a4d4036146
challengeType: 6
forumTopicId: 301432
title: 映射 Dispatch 到 Props
---

## Description
<section id='description'>
<code>mapDispatchToProps()</code>函数可为 React 组件提供特定的创建 action 的函数，以便组件可 dispatch actions，从而更改 Redux store 中的数据。该函数的结构跟上一挑战中的<code>mapStateToProps()</code>函数相似，它返回一个对象，把 dispatch actions 映射到属性名上，该属性名成为<code>props</code>。然而，每个属性都返回一个用 action creator 及与 action 相关的所有数据调用<code>dispatch</code>的函数，而不是返回<code>state</code>的一部分。你可以访问<code>dispatch</code>，因为在定义函数时，我们以参数形式把它传入<code>mapDispatchToProps()</code>了，这跟<code>state</code>传入<code>mapDispatchToProps()</code>是一样的。在幕后，React Redux 用 Redux 的<code>store.dispatch()</code>来管理这些含<code>mapDispatchToProps()</code>的dispatches，这跟它使用<code>store.subscribe()</code>来订阅映射到<code>state</code>的组件的方式类似。
例如，创建 action 的函数<code>loginUser()</code>把<code>username</code>作为 action payload，<code>mapDispatchToProps()</code>返回给创建 action 的函数的对象如下：

```jsx
{
  submitLoginUser: function(username) {
    dispatch(loginUser(username));
  }
}
```

</section>

## Instructions
<section id='instructions'>
编辑器上提供的是创建 action 的函数<code>addMessage()</code>。写出接收<code>dispatch</code>为参数的函数<code>mapDispatchToProps()</code>，返回一个 dispatch 函数对象，其属性为<code>submitNewMessage</code>。该函数在 dispatch <code>addMessage()</code>时为新消息提供一个参数。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>addMessage</code>应返回含<code>type</code>和<code>message</code>两个键的对象。
    testString: assert((function() { const addMessageTest = addMessage(); return ( addMessageTest.hasOwnProperty('type') && addMessageTest.hasOwnProperty('message')); })());
  - text: <code>mapDispatchToProps</code>应为函数。
    testString: assert(typeof mapDispatchToProps === 'function');
  - text: <code>mapDispatchToProps</code>应返回一个对象。
    testString: assert(typeof mapDispatchToProps() === 'object');
  - text: 从<code>mapDispatchToProps</code>通过<code>submitNewMessage</code>分发<code>addMessage</code>，应向 dispatch 函数返回一条消息。
    testString: assert((function() { let testAction; const dispatch = (fn) => { testAction = fn; }; let dispatchFn = mapDispatchToProps(dispatch); dispatchFn.submitNewMessage('__TEST__MESSAGE__'); return (testAction.type === 'ADD' && testAction.message === '__TEST__MESSAGE__'); })());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

// 请在本行以下添加你的代码


```

</div>



</section>

## Solution
<section id='solution'>


```js
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

// change code below this line

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: function(message) {
      dispatch(addMessage(message));
    }
  }
};
```

</section>
