---
id: 5a24c314108439a4d4036141
title: Getting Started with React Redux
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: React Redux入门
---

## Description
<section id="description">这一系列挑战介绍了如何将Redux与React一起使用。首先，这里回顾一下每种技术的一些关键原则。 React是一个您提供数据的视图库，然后以高效，可预测的方式呈现视图。 Redux是一个状态管理框架，可用于简化应用程序状态的管理。通常，在React Redux应用程序中，您可以创建一个Redux存储库来管理整个应用程序的状态。您的React组件仅订阅商店中与其角色相关的数据。然后，直接从React组件调度操作，然后触发存储更新。虽然React组件可以在本地管理自己的状态，但是当您拥有复杂的应用程序时，通常最好将应用程序状态保存在Redux的单个位置。当单个组件可能仅具有特定于其的本地状态时，存在例外情况。最后，因为Redux不是设计用于开箱即用的React，所以你需要使用<code>react-redux</code>包。它为您提供了Redux的传递方式<code>state</code> ，并<code>dispatch</code>到你的反应的组分作为<code>props</code> 。在接下来的几个挑战中，首先，您将创建一个简单的React组件，允许您输入新的文本消息。这些将添加到视图中显示的数组中。这应该是您在React课程中学到的内容的一个很好的回顾。接下来，您将创建一个Redux存储和操作来管理messages数组的状态。最后，您将使用<code>react-redux</code>将Redux存储与您的组件连接，从而将本地状态提取到Redux存储中。 </section>

## Instructions
<section id="instructions">从<code>DisplayMessages</code>组件开始。一个构造添加到该组件，并使用具有两个属性的状态初始化： <code>input</code> ，其被设置为一个空字符串，和<code>messages</code> ，这是设置为空数组。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>DisplayMessages</code>组件应呈现一个空的<code>div</code>元素。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages)); return mockedComponent.find('div').text() === '' })());
  - text: 应该使用<code>super</code>正确调用<code>DisplayMessages</code>构造函数，传入<code>props</code> 。
    testString: getUserInput => assert((function() { const noWhiteSpace = getUserInput('index').replace(/\s/g,''); return noWhiteSpace.includes('constructor(props)') && noWhiteSpace.includes('super(props'); })());
  - text: '<code>DisplayMessages</code>组件的初始状态应等于<code>{input: &quot;&quot;, messages: []}</code> 。'
    testString: "assert((function() { const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages)); const initialState = mockedComponent.state(); return typeof initialState === 'object' && initialState.input === '' && Array.isArray(initialState.messages) && initialState.messages.length === 0; })());"

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class DisplayMessages extends React.Component {
  // change code below this line

  // change code above this line
  render() {
    return <div />
  }
};

```

</div>


### After Test
<div id='jsx-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
