---
id: 5a24c314108439a4d4036160
challengeType: 6
forumTopicId: 301393
title: 在 JSX 中定义一个 HTML Class
---

## Description
<section id='description'>
现在你已经习惯了编写 JSX，你可能想知道它与 HTML 有什么不同。
到目前为止，HTML 和 JSX 似乎完全相同。
JSX 的一个关键区别是你不能再使用<code>class</code>这个单词来定义 HTML 的 class 名。这是因为<code>class</code>是 JavaScript 中的关键字。JSX 使用<code>className</code>代替。
事实上，JSX 中所有 HTML 属性和事件引用的命名约定都变成了驼峰式。例如，JSX 中的单击事件是 <code>onClick</code>，而不是 <code>onclick</code>。同样，<code>onchange</code>变成了<code>onChange</code>。虽然这是一个微妙的差异，但请你一定要记住。
</section>

## Instructions
<section id='instructions'>
将 class<code>myDiv</code> 应用于 JSX 提供的<code>div</code>上。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 常量<code>JSX</code>应该返回一个<code>div</code>元素。
    testString: assert.strictEqual(JSX.type, 'div');
  - text: <code>div</code>有一个<code>myDiv</code>class。
    testString: assert.strictEqual(JSX.props.className, 'myDiv');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const JSX = (
  <div>
    <h1>Add a class to this div</h1>
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
<div className = 'myDiv'>
  <h1>Add a class to this div</h1>
</div>);
```

</section>
