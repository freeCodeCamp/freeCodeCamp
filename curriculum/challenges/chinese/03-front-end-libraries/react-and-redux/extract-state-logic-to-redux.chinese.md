---
id: 5a24c314108439a4d4036143
title: Extract State Logic to Redux
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 将状态逻辑提取到Redux
---

## Description
<section id="description">现在您已完成React组件，您需要将其在其<code>state</code>本地执行的逻辑移动到Redux中。这是将简单的React应用程序连接到Redux的第一步。您的应用程序的唯一功能是将用户的新消息添加到无序列表中。该示例很简单，以演示React和Redux如何协同工作。 </section>

## Instructions
<section id="instructions">首先，定义一个动作类型&#39;ADD&#39;并将其设置为const <code>ADD</code> 。接下来，定义一个动作创建器<code>addMessage()</code> ，它创建添加消息的动作。您需要将<code>message</code>给此操作创建者，并在返回的<code>action</code>包含该消息。然后创建一个名为<code>messageReducer()</code>的reducer来处理消息的状态。初始状态应该等于空数组。此reducer应向状态中保存的消息数组添加消息，或返回当前状态。最后，创建Redux存储并将其传递给reducer。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: const <code>ADD</code>应该存在并保持一个等于字符串<code>ADD</code>的值
    testString: assert(ADD === 'ADD');
  - text: 动作创建者<code>addMessage</code>应返回<code>type</code>等于<code>ADD</code>的对象，并且消息等于传入的消息。
    testString: assert((function() { const addAction = addMessage('__TEST__MESSAGE__'); return addAction.type === ADD && addAction.message === '__TEST__MESSAGE__'; })());
  - text: <code>messageReducer</code>应该是一个函数。
    testString: assert(typeof messageReducer === 'function');
  - text: 存储应该存在并且初始状态设置为空数组。
    testString: assert((function() { const initialState = store.getState(); return typeof store === 'object' && initialState.length === 0; })());
  - text: 对商店调度<code>addMessage</code>应该<code>addMessage</code>向状态中保存的消息数组添加新消息。
    testString: assert((function() { const initialState = store.getState(); const isFrozen = DeepFreeze(initialState); store.dispatch(addMessage('__A__TEST__MESSAGE')); const addState = store.getState(); return (isFrozen && addState[0] === '__A__TEST__MESSAGE'); })());
  - text: 如果使用任何其他操作调用， <code>messageReducer</code>应返回当前状态。
    testString: 'assert((function() { const addState = store.getState(); store.dispatch({type: ''FAKE_ACTION''}); const testState = store.getState(); return (addState === testState); })());'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
// define ADD, addMessage(), messageReducer(), and store here:

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
