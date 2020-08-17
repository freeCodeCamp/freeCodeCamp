---
id: 5a24bbe0dba28a8d3cbd4c5e
title: Add Comments in JSX
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 在JSX中添加注释
---

## Description
<section id="description"> JSX是一种可以编译成有效JavaScript的语法。有时，为了便于阅读，您可能需要在代码中添加注释。像大多数编程语言一样，JSX有自己的方法来做到这一点。要将注释放在JSX中，可以使用语法<code>{/* */}</code>来包含注释文本。 </section>

## Instructions
<section id="instructions">代码编辑器的JSX元素与您在上一个挑战中创建的元素类似。在提供的<code>div</code>元素中的某处添加注释，而不修改现有的<code>h1</code>或<code>p</code>元素。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 常量<code>JSX</code>应该返回一个<code>div</code>元素。
    testString: 'assert(JSX.type === "div", "The constant <code>JSX</code> should return a <code>div</code> element.");'
  - text: <code>div</code>应包含一个<code>h1</code>标记作为第一个元素。
    testString: 'assert(JSX.props.children[0].type === "h1", "The <code>div</code> should contain an <code>h1</code> tag as the first element.");'
  - text: <code>div</code>应该包含一个<code>p</code>标签作为第二个元素。
    testString: 'assert(JSX.props.children[1].type === "p", "The <code>div</code> should contain a <code>p</code> tag as the second element.");'
  - text: <code>JSX</code>应该包含一条评论。
    testString: 'getUserInput => assert(getUserInput("index").includes("/*") && getUserInput("index").includes("*/"), "The <code>JSX</code> should include a comment.");'

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
