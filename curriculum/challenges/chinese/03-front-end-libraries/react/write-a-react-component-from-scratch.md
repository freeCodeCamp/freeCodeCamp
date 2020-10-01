---
id: 5a24c314108439a4d4036168
challengeType: 6
forumTopicId: 301424
title: 从零开始写一个 React 组件
---

## Description
<section id='description'>
现在你已经了解了 JSX 和 React 组件的基础知识，现在是时候自己编写一个组件了。React 组件是 React 应用程序的核心组成部分，因此熟练编写它们是非常重要的。记住，典型的 React 组件是 ES6<code>class</code>，它扩展了<code>React.Component</code>。它有一个返回 HTML（从 JSX 返回）或<code>null</code>的渲染方法，这是 React 组件的基本形式。一旦你深刻地理解了这一点，你就可以开始构建更复杂的 React 项目了。
</section>

## Instructions
<section id='instructions'>
定义一个<code>MyComponent</code>类，它是<code>React.Component</code>的扩展。它的渲染方法应该返回一个<code>div</code>，其中包含一个<code>h1</code>标签，标签文本为：<code>My First React Component!</code>。请确保文本内容、大小写和标点符号正确，以及调用了组件的构造函数。
使用<code>ReactDOM.render()</code>把该组件渲染到 DOM 中。有一个<code>id='challenge-node'</code>的<code>div</code>可供你使用。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应该有一个名为<code>MyComponent</code>的React组件。
    testString: getUserInput => assert(getUserInput('index').replace(/\s/g, '').includes('classMyComponentextendsReact.Component{'));
  - text: <code>MyComponent</code>应该包含一个<code>h1</code>标签，标签的文本为<code>My First React Component!</code>，区分大小写并有标点符号。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return mockedComponent.find('h1').text() === 'My First React Component!'; })());
  - text: <code>MyComponent</code>应该渲染到 DOM。
    testString: assert(document.getElementById('challenge-node').childNodes.length === 1);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
// change code below this line

```

</div>



</section>

## Solution
<section id='solution'>


```js
// change code below this line
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>My First React Component!</h1>
      </div>
    );
  }
};

ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'));
```

</section>
