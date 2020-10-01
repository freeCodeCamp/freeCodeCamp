---
id: 587d7dbc367417b2b2512bb1
challengeType: 6
forumTopicId: 301390
title: 创建一个简单的 JSX 元素
---

## Description
<section id='description'>
<strong>简介：</strong>React 是由 Facebook 创建和维护的开源视图库。它是渲染当代 Web 应用程序用户界面（UI）的绝佳工具。
React 使用名为 JSX 的 JavaScript 语法扩展，允许你直接在 JavaScript 中编写 HTML。这有几个好处。它允许你在 HTML 中使用 JavaScript 的完整程序功能，并有助于保持代码的可读性。在大多数情况下，JSX 类似于你已经学过的 HTML，但是在这些挑战中将会涉及一些关键差异。
例如，因为 JSX 是 JavaScript 的语法扩展，所以你实际上可以直接在 JSX 中编写 JavaScript。要做到这一点，你只需在花括号中包含你希望被视为 JavaScript 的代码：<code>{“这被视为 JavaScript 代码”}</code>。请牢记这个写法，你将会在接下来的挑战中使用。
但是，由于浏览器不能解析 JSX，因此必须将 JSX 代码编译为 JavaScript。在这个过程中，转换器 Babel 是一个很受欢迎的工具。后续挑战已经在后台引入了 Babel，你可以直接写 JSX 代码。如果你的代码不符合 JSX 语法，那么挑战中的第一个测试就不会通过。
值得注意的是，这些挑战在底层调用<code>ReactDOM.render(JSX, document.getElementById('root'))</code>。这个函数调用是将你的 JSX 置于 React 自己的轻量级 DOM 中。然后，React 使用自己的 DOM 快照来优化更新实际 DOM 的特定部分。
</section>

## Instructions
<section id='instructions'>
<strong>说明：</strong>当前代码使用 JSX 将<code>div</code>元素赋值给常量<code>JSX</code>。将<code>div</code>替换为<code>h1</code>元素，并在其中添加文本<code>Hello JSX!</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 常量<code>JSX</code>应该返回一个<code>h1</code>元素。
    testString: assert(JSX.type === 'h1');
  - text: <code>h1</code>标签应该包含文本<code>Hello JSX!</code>。
    testString: assert(Enzyme.shallow(JSX).contains('Hello JSX!'));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx

const JSX = <div></div>;

```

</div>


### After Test
<div id='jsx-teardown'>

```js
ReactDOM.render(JSX, document.getElementById('root'))
```

</div>

</section>

## Solution
<section id='solution'>


```js
const JSX = <h1>Hello JSX!</h1>;
```

</section>
