---
id: 5a24bbe0dba28a8d3cbd4c5d
title: Create a Complex JSX Element
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 创建一个复杂的JSX元素
---

## Description
<section id="description">最后一个挑战是JSX的一个简单示例，但JSX也可以代表更复杂的HTML。关于嵌套JSX的一个重要事项是它必须返回一个元素。这个父元素将包装所有其他级别的嵌套元素。例如，编写为没有父包装元素的兄弟姐妹的几个JSX元素将不会转换。这是一个例子： <b>有效的JSX：</b> <blockquote> &lt;DIV&gt; <br> &lt;p&gt;第一段&lt;/ p&gt; <br> &lt;p&gt;第二段&lt;/ p&gt; <br> &lt;p&gt;第3段&lt;/ p&gt; <br> &lt;/ DIV&gt; </blockquote> <b>JSX无效：</b> <blockquote> &lt;p&gt;第一段&lt;/ p&gt; <br> &lt;p&gt;第二段&lt;/ p&gt; <br> &lt;p&gt;第3段&lt;/ p&gt; <br></blockquote></section>

## Instructions
<section id="instructions">定义一个新的常量<code>JSX</code> ，它呈现一个按顺序包含以下元素的<code>div</code> ：一个<code>h1</code> ，一个<code>p</code>和一个包含三个<code>li</code>项的无序列表。您可以在每个元素中包含所需的任何文本。 <strong>注意：</strong>渲染多个这样的元素时，可以将它们全部括在括号中，但并不是严格要求的。另请注意，此挑战使用<code>div</code>标记将所有子元素包装在单个父元素中。如果删除<code>div</code> ，JSX将不再转换。请记住这一点，因为当您在React组件中返回JSX元素时它也将适用。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 常量<code>JSX</code>应该返回一个<code>div</code>元素。
    testString: assert(JSX.type === 'div');
  - text: <code>div</code>应该包含一个<code>p</code>标签作为第二个元素。
    testString: assert(JSX.props.children[0].type === 'h1');
  - text: <code>div</code>应包含<code>ul</code>标记作为第三个元素。
    testString: assert(JSX.props.children[1].type === 'p');
  - text: <code>div</code>应包含一个<code>h1</code>标记作为第一个元素。
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
