---
id: 5a24bbe0dba28a8d3cbd4c5d
challengeType: 6
forumTopicId: 301382
title: 创建一个复杂的 JSX 元素
---

## Description
<section id='description'>
上一个挑战是 JSX 的一个简单示例，但 JSX 也可以表示更复杂的 HTML。
关于嵌套的 JSX，你需要知道的一件重要的事情，那就是它必须返回单个元素。
这个父元素将包裹所有其他级别的嵌套元素。
例如，几个作为兄弟元素而编写的JSX元素没有父元素包裹将不会被转换。
这里是一个示例：
<b>有效的 JSX：</b>

```jsx
<div>
  <p>Paragraph One</p>
  <p>Paragraph Two</p>
  <p>Paragraph Three</p>
</div>
```

<b>无效的 JSX：</b>

```jsx
<p>Paragraph One</p>
<p>Paragraph Two</p>
<p>Paragraph Three</p>
```

</section>

## Instructions
<section id='instructions'>
定义一个新的常量<code>JSX</code>，渲染一个<code>div</code>，其中依次包含以下元素：
一个<code>h1</code>，一个<code>p</code>，一个包含三个<code>li</code>项的无序列表。你可以在每个元素中包含任何你想要的文本。
<strong>注意：</strong>&nbsp;当像这样渲染多个元素时，你可以把它们都用圆括号括起来，但是这并不是必须的。还请注意，此挑战使用<code>div</code>标签把所有子元素包裹在里面。如果删除<code>div</code>，JSX 将不会编译这些元素。请记住这一点，因为当你在 React 组件中返回 JSX 元素时它也适用。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 常量<code>JSX</code>应该返回一个<code>div</code>元素。
    testString: assert(JSX.type === 'div');
  - text: <code>div</code>应该包含一个<code>p</code>标签作为第二个元素。
    testString: assert(JSX.props.children[0].type === 'h1');
  - text: <code>div</code>应该包含一个<code>ul</code>标签作为第三个元素。
    testString: assert(JSX.props.children[1].type === 'p');
  - text: <code>div</code>应该包含一个<code>h1</code>标签作为第一个元素。
    testString: assert(JSX.props.children[2].type === 'ul');
  - text: <code>ul</code>应该包含三个<code>li</code>元素。
    testString: assert(JSX.props.children.filter(ele => ele.type === 'ul')[0].props.children.filter(ele => ele.type === 'li').length === 3);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
// write your code here

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
  <h1>Hello JSX!</h1>
  <p>Some info</p>
  <ul>
    <li>An item</li>
    <li>Another item</li>
    <li>A third item</li>
  </ul>
</div>);
```

</section>
