---
id: 5a24bbe0dba28a8d3cbd4c5e
challengeType: 6
forumTopicId: 301376
title: 在 JSX 中添加注释
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
    testString: assert(JSX.type === 'div');
  - text: <code>div</code>应该包含一个<code>h1</code>标签作为第一个元素。
    testString: assert(JSX.props.children[0].type === 'h1');
  - text: <code>div</code>应该包含一个<code>p</code>标签作为第二个元素。
    testString: assert(JSX.props.children[1].type === 'p');
  - text: 当前的 <code>h1</code> 和 <code>p</code> 元素不能被修改。
    testString: assert(JSX.props.children[0].props.children === 'This is a block of JSX' && JSX.props.children[1].props.children === 'Here\'s a subtitle');     
  - text: <code>JSX</code>应该包含一个注释。
    testString: assert(/<div>[\s\S]*{\s*\/\*[\s\S]*\*\/\s*}[\s\S]*<\/div>/.test(code));
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
  <h1>This is a block of JSX</h1>
  { /* this is a JSX comment */ }
  <p>Here's a subtitle</p>
</div>);
```

</section>
