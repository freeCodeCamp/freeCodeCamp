---
id: 5a24c314108439a4d4036170
challengeType: 6
forumTopicId: 301391
title: 创建一个有状态的组件
---

## Description
<section id='description'>
React中最重要的主题之一是<code>state</code>。 state 包含应用程序需要了解的任何数据，这些数据可能会随时间而变化。你希望应用程序能够响应 state 的变更，并在必要时显示更新后的 UI。React 为现代 Web 应用程序的状态管理提供了一个很好的解决方案。
你可以通过在<code>constructor</code>中的组件类上声明<code>state</code>属性来在 React 组件中创建 state，它在创建时使用<code>state</code>初始化组件。<code>state</code>属性必须设置为 JavaScript<code>对象</code>。声明如下：

```jsx
this.state = {
  // describe your state here
}
```

你可以在组件的整个生命周期内访问<code>state</code>对象，你可以更新它、在 UI 中渲染它，也可以将其作为 props 传递给子组件。<code>state</code>对象的使用可以很简单，亦可以很复杂，就看你怎么用了。请注意，你必须通过扩展<code>React.Component</code>来创建类组件，以便像这样创建<code>state</code>。
</section>

## Instructions
<section id='instructions'>
代码编辑器中有一个组件试图从其<code>state</code>中渲染一个<code>name</code>属性，但是<code>state</code>还没有定义。在<code>constructor</code>中使用<code>state</code>初始化组件，并将你的名字赋给<code>name</code>属性。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>StatefulComponent</code>应该存在并被渲染。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(StatefulComponent)); return mockedComponent.find('StatefulComponent').length === 1; })());
  - text: <code>StatefulComponent</code>应该渲染一个<code>div</code>元素和一个<code>h1</code>元素。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(StatefulComponent)); return mockedComponent.find('div').length === 1 && mockedComponent.find('h1').length === 1; })());
  - text: 应使用被设置为字符串的<code>name</code>属性来初始化<code>StatefulComponent</code>的 state。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(StatefulComponent)); const initialState = mockedComponent.state(); return ( typeof initialState === 'object' && typeof initialState.name === 'string'); })());
  - text: <code>StatefulComponent</code>中 state 的<code>name</code>属性应该渲染在<code>h1</code>元素里。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(StatefulComponent)); const initialState = mockedComponent.state(); return mockedComponent.find('h1').text() === initialState.name; })());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx

class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // initialize state here

  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
```

</div>


### After Test
<div id='jsx-teardown'>

```js
ReactDOM.render(<StatefulComponent />, document.getElementById('root'))
```

</div>

</section>

## Solution
<section id='solution'>


```js
class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp!'
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
```

</section>
