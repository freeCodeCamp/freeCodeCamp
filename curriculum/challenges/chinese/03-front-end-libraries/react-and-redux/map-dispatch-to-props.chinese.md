---
id: 5a24c314108439a4d4036146
title: Map Dispatch to Props
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 将调度映射到道具
---

## Description
<section id="description"> <code>mapDispatchToProps()</code>函数用于为React组件提供特定的操作创建器，以便它们可以针对Redux存储分派操作。它的结构与您在上一次挑战中编写的<code>mapStateToProps()</code>函数类似。它返回一个对象，该对象将调度操作映射到属性名称，后者成为组件<code>props</code> 。但是，每个属性都返回一个函数，该函数使用动作创建者和任何相关的动作数据来调用<code>dispatch</code> ，而不是返回一个<code>state</code> 。您可以访问此<code>dispatch</code>因为它在您定义函数时作为参数传递给<code>mapDispatchToProps()</code> ，就像您将<code>state</code>传递给<code>mapStateToProps()</code> 。在幕后，阵营终极版使用终极版的<code>store.dispatch()</code>进行这些分派<code>mapDispatchToProps()</code>这类似于它将<code>store.subscribe()</code>用于映射到<code>state</code>组件。例如，您有一个<code>loginUser()</code>动作创建者，它将<code>username</code>作为动作有效负载。从<code>mapDispatchToProps()</code>为此动作创建者返回的对象看起来像： <blockquote> { <br> submitLoginUser：function（username）{ <br>调度（loginUser（用户名））; <br> } <br> } </blockquote></section>

## Instructions
<section id="instructions">代码编辑器提供了一个名为<code>addMessage()</code>的动作创建器。编写函数<code>mapDispatchToProps()</code> ，将<code>dispatch</code>作为参数，然后返回一个对象。该对象应该将一个属性<code>submitNewMessage</code>设置为dispatch函数，该函数在调度<code>addMessage()</code>时为新消息添加一个参数。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>addMessage</code>应该返回一个带有键<code>type</code>和<code>message</code>的对象。
    testString: assert((function() { const addMessageTest = addMessage(); return ( addMessageTest.hasOwnProperty('type') && addMessageTest.hasOwnProperty('message')); })());
  - text: <code>mapDispatchToProps</code>应该是一个函数。
    testString: assert(typeof mapDispatchToProps === 'function');
  - text: <code>mapDispatchToProps</code>应该返回一个对象。
    testString: assert(typeof mapDispatchToProps() === 'object');
  - text: 使用<code>submitNewMessage</code>的<code>mapDispatchToProps</code>调度<code>addMessage</code>应该向调度函数返回一条消息。
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

// change code below this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
