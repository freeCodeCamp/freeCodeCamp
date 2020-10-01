---
id: 5a24c314108439a4d4036141
challengeType: 6
forumTopicId: 301430
title: React 和 Redux 入门
---

## Description
<section id='description'>
这一系列挑战介绍的是 Redux 和 React 的配合，我们先来回顾一下这两种技术的关键原则是什么。React 是提供数据的视图库，能以高效、可预测的方式渲染视图。Redux 是状态管理框架，可用于简化 APP 应用状态的管理。在 React Redux app 应用中，通常可创建单一的 Redux store 来管理整个应用的状态。React 组件仅订阅 store 中与其角色相关的数据，你可直接从 React 组件中分发 actions 以触发 store 对象的更新。
React 组件可以在本地管理自己的状态，但是对于复杂的应用来说，它的状态最好是用 Redux 保存在单一位置，有特定本地状态的独立组件例外。最后一点是，Redux 没有内置的 React，需要安装<code>react-redux</code>包，通过这个方式把 Redux 的<code>state</code>和<code>dispatch</code>作为<code>props</code>传给组件。
在接下来的挑战中，先要创建一个可输入新文本消息的 React 组件，添加这些消息到数组里，在视图上显示数组。接着，创建 Redux store 和 actions 来管理消息数组的状态。最后，使用<code>react-redux</code>连接 Redux store 和组件，从而将本地状态提取到 Redux store 中。
</section>

## Instructions
<section id='instructions'>
创建<code>DisplayMessages</code>组件，把构造函数添加到此组件中，使用含两个属性的状态初始化该组件，这两个属性为：input（设置为空字符串），<code>messages</code>（设置为空数组）。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>DisplayMessages</code>组件应渲染空的<code>div</code>元素。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages)); return mockedComponent.find('div').text() === '' })());
  - text: <code>DisplayMessages</code>组件的构造函数应调用<code>super</code>，传入<code>props</code>。
    testString: getUserInput => assert((function() { const noWhiteSpace = getUserInput('index').replace(/\s/g,''); return noWhiteSpace.includes('constructor(props)') && noWhiteSpace.includes('super(props'); })());
  - text: '<code>DisplayMessages</code>组件的初始状态应是<code>{input: "", messages: []}</code>。'
    testString: "assert((function() { const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages)); const initialState = mockedComponent.state(); return typeof initialState === 'object' && initialState.input === '' && Array.isArray(initialState.messages) && initialState.messages.length === 0; })());"

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class DisplayMessages extends React.Component {
// 请在本行以下添加你的代码

// 请在本行以上添加你的代码
  render() {
    return <div />
  }
};
```

</div>


### After Test
<div id='jsx-teardown'>

```js
ReactDOM.render(<DisplayMessages />, document.getElementById('root'))
```

</div>

</section>

## Solution
<section id='solution'>


```js
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
  }
  render() {
    return <div/>
  }
};
```

</section>

