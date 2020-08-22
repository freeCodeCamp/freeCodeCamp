---
id: 5a24c314108439a4d4036169
title: Pass Props to a Stateless Functional Component
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 将道具传递给无状态功能组件
---

## Description
<section id="description">之前的挑战涉及在React中创建和组合JSX元素，功能组件和ES6样式类组件的很多内容。有了这个基础，现在是时候看看React中常见的另一个特性： <b>道具</b> 。在React中，您可以将props或属性传递给子组件。假设您有一个<code>App</code>组件，它呈现一个名为<code>Welcome</code>的子组件，它是一个无状态功能组件。您可以通过编写以下方式传递<code>Welcome</code> <code>user</code>属性： <blockquote> &lt;应用&gt; <br> &lt;Welcome user =&#39;Mark&#39;/&gt; <br> &lt;/应用&gt; </blockquote>您使用React提供支持的<strong>自定义HTML属性</strong> ，以将属性<code>user</code>传递给组件<code>Welcome</code> 。由于<code>Welcome</code>是一个无状态功能组件，因此它可以访问此值，如下所示： <blockquote> const Welcome =（props）=&gt; &lt;h1&gt; Hello，{props.user}！&lt;/ h1&gt; </blockquote>调用此值<code>props</code>是标准的，在处理无状态函数组件时，您基本上将其视为返回JSX的函数的参数。您可以在函数体中访问参数的值。使用类组件，您会发现这有点不同。 </section>

## Instructions
<section id="instructions">代码编辑器中有<code>Calendar</code>和<code>CurrentDate</code>组件。当渲染<code>CurrentDate</code>从<code>Calendar</code>组件，通过在属性<code>date</code>分配给从JavaScript的当前日期<code>Date</code>对象。然后在<code>CurrentDate</code>组件中访问此<code>prop</code> ，在<code>p</code>标签中显示其值。请注意，对于要作为JavaScript计算的<code>prop</code>值，它们必须用大括号括起来，例如<code>date={Date()}</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Calendar</code>组件应返回单个<code>div</code>元素。
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(Calendar)); return mockedComponent.children().type() === "div"; })(), "The <code>Calendar</code> component should return a single <code>div</code> element.");'
  - text: <code>Calendar</code>组件的第二个子<code>CurrentDate</code>应该是<code>CurrentDate</code>组件。
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(Calendar)); return mockedComponent.children().childAt(1).name() === "CurrentDate"; })(), "The second child of the <code>Calendar</code> component should be the <code>CurrentDate</code> component.");'
  - text: <code>CurrentDate</code>组件应该有一个名为<code>date</code>的prop。
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(Calendar)); return mockedComponent.children().childAt(1).props().date })(), "The <code>CurrentDate</code> component should have a prop called <code>date</code>.");'
  - text: <code>CurrentDate</code>的<code>date</code>道具应包含一串文本。
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(Calendar)); const prop = mockedComponent.children().childAt(1).props().date; return( typeof prop === "string" && prop.length > 0 ); })(), "The <code>date</code> prop of the <code>CurrentDate</code> should contain a string of text.");'
  - text: <code>CurrentDate</code>组件应该从<code>p</code>标记中的<code>date</code>道具中呈现值。
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(Calendar)); return mockedComponent.find("p").html().includes(Date().substr(3)); })(), "The <code>CurrentDate</code> component should render the value from the <code>date</code> prop in the <code>p</code> tag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const CurrentDate = (props) => {
  return (
    <div>
      { /* change code below this line */ }
      <p>The current date is: </p>
      { /* change code above this line */ }
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        { /* change code below this line */ }
        <CurrentDate />
        { /* change code above this line */ }
      </div>
    );
  }
};

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
