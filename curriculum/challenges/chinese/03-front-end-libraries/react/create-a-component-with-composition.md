---
id: 5a24c314108439a4d4036164
challengeType: 6
forumTopicId: 301383
title: 用组合的方式创建一个 React 组件 
---

## Description
<section id='description'>
现在我们来看看如何组合多个 React 组件。想象一下，你正在构建一个应用程序，并创建了三个组件：<code>Navbar</code>、<code>Dashboard</code>和<code>Footer</code>。
要将这些组件组合在一起，你可以创建一个<code>App</code><i>父组件</i>，将这三个组件分别渲染成为<i>子组件</i>。要在 React 组件中渲染一个子组件，你需要在 JSX 中包含作为自定义 HTML 标签编写的组件名称。例如，在<code>render</code>方法中，你可以这样编写：

```jsx
return (
 <App>
  <Navbar />
  <Dashboard />
  <Footer />
 </App>
)
```

当 React 遇到引用另一个组件的自定义 HTML 标签时（如本例所示，组件名称包含在<code>&lt; /&gt;</code>中），它在标签的位置渲染该组件的标签。这可以说明<code>App</code>组件和<code>Navbar</code>、<code>Dashboard</code>以及<code>Footer</code>之间的父子关系。
</section>

## Instructions
<section id='instructions'>
在代码编辑器中，有一个名为<code>ChildComponent</code>的简单功能组件和一个名为<code>ParentComponent</code>的 React 组件。通过在<code>ParentComponent</code>中渲染<code>ChildComponent</code>来将两者组合在一起。确保使用正斜杠关闭<code>ChildComponent</code>标签。
<strong>注意：</strong>&nbsp;<code>ChildComponent</code>是使用 ES6 的箭头函数定义的，因为这是使用 React 时非常常见的做法。但是，要知道这只是一个函数。如果你不熟悉箭头函数语法，请参阅 JavaScript 部分。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: React 组件应该返回单个<code>div</code>元素。
    testString: assert((function() { var shallowRender = Enzyme.shallow(React.createElement(ParentComponent)); return shallowRender.type() === 'div'; })());
  - text: 组件应该返回两个嵌套的元素。
    testString: assert((function() { var shallowRender = Enzyme.shallow(React.createElement(ParentComponent)); return shallowRender.children().length === 2; })());
  - text: 组件的第二个子元素应该是 ChildComponent。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ParentComponent)); return mockedComponent.find('ParentComponent').find('ChildComponent').length === 1; })());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        { /* change code below this line */ }


        { /* change code above this line */ }
      </div>
    );
  }
};
```

</div>


### After Test
<div id='jsx-teardown'>

```js
ReactDOM.render(<ParentComponent />, document.getElementById('root'))
```

</div>

</section>

## Solution
<section id='solution'>


```js
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        { /* change code below this line */ }
        <ChildComponent />
        { /* change code above this line */ }
      </div>
    );
  }
};
```

</section>
