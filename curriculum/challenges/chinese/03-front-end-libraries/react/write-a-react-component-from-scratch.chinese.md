---
id: 5a24c314108439a4d4036168
title: Write a React Component from Scratch
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 从Scratch写一个React组件
---

## Description
<section id="description">现在您已经学习了JSX和React组件的基础知识，现在是时候自己编写一个组件了。 React组件是React应用程序的核心构建块，因此非常熟悉编写它们非常重要。请记住，典型的React组件是扩展<code>React.Component</code>的ES6 <code>class</code> 。它有一个返回HTML（来自JSX）或<code>null</code>的render方法。这是React组件的基本形式。一旦你理解了这一点，你就会准备开始构建更复杂的React项目。 </section>

## Instructions
<section id="instructions">定义一个扩展<code>React.Component</code>的类<code>MyComponent</code> 。它的render方法应该返回一个<code>div</code> ，其中包含一个带有文本的<code>h1</code>标签： <code>My First React Component!</code>在里面。准确使用此文本，案例和标点符号很重要。确保也调用组件的构造函数。使用<code>ReactDOM.render()</code>将此组件呈现给DOM。有一个<code>div</code> ， <code>id=&#39;challenge-node&#39;</code>可供您使用。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应该有一个名为<code>MyComponent</code>的React组件。
    testString: getUserInput => assert(getUserInput('index').replace(/\s/g, '').includes('classMyComponentextendsReact.Component{'));
  - text: <code>MyComponent</code>应该包含带有文本<code>My First React Component!</code>的<code>h1</code>标签<code>My First React Component!</code>案例和标点符号问题。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return mockedComponent.find('h1').text() === 'My First React Component!'; })());
  - text: <code>MyComponent</code>应该呈现给DOM。
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
// solution required
```

/section>
