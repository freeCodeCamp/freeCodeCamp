---
id: 5a24c314108439a4d4036161
challengeType: 6
forumTopicId: 301396
title: 了解自动闭合的 JSX 标记
---

## Description
<section id='description'>
到目前为止，你已经看到 JSX 与 HTML 的不同之处在于使用<code>className</code>和使用<code>class</code>来定义 HTML 的 class。
JSX 不同于 HTML 的另一个重要方面是自闭合标签。
在HTML中，几乎所有的标签都有一个开始和结束标签：<code>&lt;div&gt;&lt;/div&gt;</code>，结束标签在你要关闭的标签名之前始终具有正斜杠。但是，HTML 中有一些称为“自闭合标签”的特殊实例，它们在另一个标签开始之前，不需要开始和结束标签都存在。
例如，换行标签可以写成<code>&lt;br&gt;</code>或者<code>&lt;br /&gt;</code>，但是不应该写成<code>&lt;br&gt;&lt;/br&gt;</code>，因为它不包含任何内容。
在 JSX 中，规则略有不同。任何 JSX 元素都可以使用自闭合标签编写，并且每个元素都必须关闭。例如，换行标签必须始终编写为<code>&lt;br /&gt;</code>。另一方面<code>&lt;div&gt;</code>可以写成<code>&lt;div /&gt;</code>或者<code>&lt;div&gt;&lt;/div&gt;</code>。不同之处在于，在第一个语法版本中，无法在<code>&lt;div /&gt;</code>中包含任何内容。在后面的挑战中你会发现，这种语法在渲染 React 组件时非常有用。
</section>

## Instructions
<section id='instructions'>
修复代码编辑器中的错误，使其成为有效的 JSX 并成功转换。确保你不更改任何内容--你只需要在需要的地方关闭标签。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 常量<code>JSX</code>应该返回一个<code>div</code>元素。
    testString: assert.strictEqual(JSX.type, 'div');
  - text: <code>div</code>应该包含一个<code>br</code>标签。
    testString: assert(Enzyme.shallow(JSX).find('br').length === 1);
  - text: <code>div</code>应该包含一个<code>hr</code>标签。
    testString: assert(Enzyme.shallow(JSX).find('hr').length === 1);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const JSX = (
  <div>
    {/* remove comment and change code below this line
    <h2>Welcome to React!</h2> <br >
    <p>Be sure to close all tags!</p>
    <hr >
    remove comment and change code above this line */}
  </div>
);

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
const JSX = (
<div>
  {/* change code below this line */}
  <h2>Welcome to React!</h2> <br />
  <p>Be sure to close all tags!</p>
  <hr />
  {/* change code above this line */}
</div>
);
```

</section>
