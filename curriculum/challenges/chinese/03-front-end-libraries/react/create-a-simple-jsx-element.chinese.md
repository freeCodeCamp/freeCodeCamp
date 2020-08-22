---
id: 587d7dbc367417b2b2512bb1
title: Create a Simple JSX Element
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 创建一个简单的JSX元素
---

## Description
<section id="description"> <strong>简介：</strong> React是由Facebook创建和维护的开源视图库。它是渲染现代Web应用程序的用户界面（UI）的绝佳工具。 React使用名为JSX的JavaScript语法扩展，允许您直接在JavaScript中编写HTML。这有几个好处。它允许您在HTML中使用JavaScript的完整程序功能，并有助于保持代码的可读性。在大多数情况下，JSX类似于您已经学过的HTML，但是在这些挑战中将会涉及一些关键差异。例如，因为JSX是JavaScript的语法扩展，所以您实际上可以直接在JSX中编写JavaScript。要做到这一点，您只需在花括号中包含您希望被视为<code>{ &#39;this is treated as JavaScript code&#39; }</code> ： <code>{ &#39;this is treated as JavaScript code&#39; }</code> 。记住这一点，因为它用于未来的几个挑战。但是，由于JSX不是有效的JavaScript，因此必须将JSX代码编译为JavaScript。转换器Babel是这个过程的流行工具。为了您的方便，它已经在幕后为这些挑战添加。如果您碰巧编写语法无效的JSX，您将看到这些挑战中的第一个测试失败。值得注意的是，在引擎盖下，挑战是调用<code>ReactDOM.render(JSX, document.getElementById(&#39;root&#39;))</code> 。这个函数调用是将JSX置于React自己的DOM轻量级表示中的原因。然后，React使用自己的DOM快照来优化仅更新实际DOM的特定部分。 </section>

## Instructions
<section id="instructions"> <strong>说明：</strong>当前代码使用JSX将<code>div</code>元素分配给常量<code>JSX</code> 。用<code>h1</code>元素替换<code>div</code>并添加文本<code>Hello JSX!</code>在里面。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 常量<code>JSX</code>应该返回一个<code>h1</code>元素。
    testString: assert(JSX.type === 'h1');
  - text: <code>h1</code>标签应该包含文本<code>Hello JSX!</code>
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
