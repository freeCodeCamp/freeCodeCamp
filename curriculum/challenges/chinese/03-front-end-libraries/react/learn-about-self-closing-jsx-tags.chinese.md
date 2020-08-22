---
id: 5a24c314108439a4d4036161
title: Learn About Self-Closing JSX Tags
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 了解自我关闭JSX标签
---

## Description
<section id="description">到目前为止，您已经看到JSX与HTML的不同之处在于使用<code>className</code>与<code>class</code>来定义HTML类。 JSX与HTML的另一个重要方式是自闭标签。在HTML中，几乎所有标签都有开始和结束标签： <code>&lt;div&gt;&lt;/div&gt;</code> ;结束标记在您要关闭的标记名称之前始终具有正斜杠。但是，HTML中有一些称为“自闭标签”的特殊实例，或者在另一个标签可以启动之前不需要开始和结束标签的标签。例如，换行标记可以写成<code>&lt;br&gt;</code>或<code>&lt;br /&gt;</code> ，但不应该写为<code>&lt;br&gt;&lt;/br&gt;</code> ，因为它不包含任何内容。在JSX中，规则略有不同。任何JSX元素都可以使用自闭合标记编写，并且必须关闭每个元素。例如，换行标记必须始终写为<code>&lt;br /&gt;</code>才能成为可以转换的有效JSX。另一方面， <code>&lt;div&gt;</code>可以写为<code>&lt;div /&gt;</code>或<code>&lt;div&gt;&lt;/div&gt;</code> 。不同之处在于，在第一个语法版本中，无法在<code>&lt;div /&gt;</code>包含任何内容。您将在以后的挑战中看到，在呈现React组件时，此语法非常有用。 </section>

## Instructions
<section id="instructions">修复代码编辑器中的错误，使其成为有效的JSX并成功转换。确保您不更改任何内容 - 您只需要在需要的地方关闭标签。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 常量<code>JSX</code>应该返回一个<code>div</code>元素。
    testString: assert.strictEqual(JSX.type, 'div');
  - text: <code>div</code>应该包含一个<code>br</code>标签。
    testString: assert(Enzyme.shallow(JSX).find('br').length === 1);
  - text: <code>div</code>应包含<code>hr</code>标记。
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
