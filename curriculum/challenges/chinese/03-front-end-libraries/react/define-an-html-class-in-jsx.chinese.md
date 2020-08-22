---
id: 5a24c314108439a4d4036160
title: Define an HTML Class in JSX
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 在JSX中定义HTML类
---

## Description
<section id="description">现在您已经开始编写JSX了，您可能想知道它与HTML的区别。到目前为止，似乎HTML和JSX完全相同。 JSX的一个关键区别是你不能再使用单词<code>class</code>来定义HTML类。这是因为<code>class</code>是JavaScript中的保留字。相反，JSX使用<code>className</code> 。事实上，JSX中所有HTML属性和事件引用的命名约定都变成了camelCase。例如，JSX中的单击事件是<code>onClick</code> ，而不是<code>onclick</code> 。同样， <code>onchange</code>变为<code>onChange</code> 。虽然这是一个微妙的差异，但重要的是要记住前进。 </section>

## Instructions
<section id="instructions">将一个<code>myDiv</code>类<code>myDiv</code> JSX代码中提供的<code>div</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 常量<code>JSX</code>应该返回一个<code>div</code>元素。
    testString: assert.strictEqual(JSX.type, 'div');
  - text: <code>div</code>有一类<code>myDiv</code> 。
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
