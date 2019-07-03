---
id: 5a24bbe0dba28a8d3cbd4c5e
title: Add Comments in JSX
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Add Comments in JSX
---

## Description
<section id='description'>
JSX 是一种可以编译成有效 JavaScript 的语法。有时，为了便于阅读，你可能需要在代码中添加注释。像大多数编程语言一样，JSX 也有自己的方法来实现这一点。
要将注释放在 JSX 中，可以使用<code>{/* */}</code>语法来包裹注释文本。
</section>

## Instructions
<section id='instructions'>
代码编辑器中的 JSX 元素与你在上一个挑战中创建的元素类似。在提供的<code>div</code>元素中的某处添加注释，而不修改现有的<code>h1</code>或<code>p</code>元素。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 常量<code>JSX</code>应该返回一个<code>div</code>元素。
    testString: assert(JSX.type === 'div', '常量<code>JSX</code>应该返回一个<code>div</code>元素。');
  - text: <code>div</code>应该包含一个<code>h1</code>标签作为第一个元素。
    testString: assert(JSX.props.children[0].type === 'h1', '<code>div</code>应该包含一个<code>h1</code>标签作为第一个元素。');
  - text: <code>div</code>应该包含一个<code>p</code>标签作为第二个元素。
    testString: assert(JSX.props.children[1].type === 'p', '<code>div</code>应该包含一个<code>p</code>标签作为第二个元素。');
  - text: <code>JSX</code>应该包含一个注释。
    testString: 'getUserInput => assert(getUserInput("index").includes("/*") && getUserInput("index").includes("*/"), "<code>JSX</code>应该包含一个注释。");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>






    <div id='jsx-seed'>
    
```jsx
const JSX = (
  <div>
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
  </div>
);
    
```
</div>


### After Test
<div id='jsx-teardown'>

```jsx
ReactDOM.render(JSX, document.getElementById('root'))

```

</div>



</section>

## Solution
<section id='solution'>

```js
const JSX = (
<div>
  <h1>This is a block of JSX</h1>
  { /* this is a JSX comment */ }
  <p>Here's a subtitle</p>
</div>);
```

</section>
              