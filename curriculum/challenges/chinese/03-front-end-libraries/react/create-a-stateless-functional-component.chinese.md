---
id: 5a24c314108439a4d4036162
title: Create a Stateless Functional Component
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 创建无状态功能组件
---

## Description
<section id="description">组件是React的核心。 React中的所有内容都是一个组件，在这里您将学习如何创建一个组件。有两种方法可以创建React组件。第一种方法是使用JavaScript函数。以这种方式定义组件会创建<em>无状态功能组件</em> 。应用程序中的状态概念将在以后的挑战中介绍。现在，将无状态组件视为可以接收数据并对其进行渲染的组件，但不管理或跟踪对该数据的更改。 （我们将介绍在下一个挑战中创建React组件的第二种方法。）要创建一个带有函数的组件，您只需编写一个返回JSX或<code>null</code>的JavaScript函数。需要注意的一件重要事情是，React要求您的函数名称以大写字母开头。这是一个在JSX中分配HTML类的无状态功能组件的示例： <blockquote> //被转换后，&lt;div&gt;将有一个CSS类&#39;customClass&#39; <br> const DemoComponent = function（）{ <br>回来（ <br> &lt;div className =&#39;customClass&#39;/&gt; <br> ）; <br> }; </blockquote>因为JSX组件代表HTML，所以您可以将几个组件放在一起以创建更复杂的HTML页面。这是React提供的组件架构的关键优势之一。它允许您从许多独立的，独立的组件中组合UI。这使得构建和维护复杂的用户界面变得更加容易。 </section>

## Instructions
<section id="instructions">代码编辑器有一个名为<code>MyComponent</code>的函数。完成此函数，以便返回包含一些文本字符串的单个<code>div</code>元素。 <strong>注意：</strong>该文本被视为<code>div</code>元素的子元素，因此您将无法使用自闭合标记。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyComponent</code>应该返回JSX。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return mockedComponent.length === 1; })());
  - text: <code>MyComponent</code>应该返回一个<code>div</code>元素。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return mockedComponent.children().type() === 'div' })());
  - text: <code>div</code>元素应包含一串文本。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return mockedComponent.find('div').text() !== ''; })());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const MyComponent = function() {
  // change code below this line



  // change code above this line
}

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
