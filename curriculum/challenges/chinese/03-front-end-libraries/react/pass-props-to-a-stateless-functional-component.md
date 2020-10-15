---
id: 5a24c314108439a4d4036169
challengeType: 6
forumTopicId: 301402
title: 将 Props 传递给无状态函数组件
---

## Description
<section id='description'>
之前的挑战涵盖了关于在 React 中创建和组合 JSX 元素、函数组件和 ES6 风格的类组件的很多内容。有了这个基础，现在是时候看看 React 中的另一个常见特性 <b>props</b> 了。在 React 中，你可以将属性传递给子组件。假设你有一个<code>App</code>组件，该组件渲染了一个名为<code>Welcome</code>的子组件，它是一个无状态函数组件。你可以通过以下方式给<code>Welcome</code>传递一个<code>user</code>属性：

```jsx
<App>
  <Welcome user='Mark' />
</App>
```

使用<strong>自定义 HTML 属性</strong>，React 支持将属性<code>user</code>传递给组件<code>Welcome</code>。由于<code>Welcome</code>是一个无状态函数组件，它可以像这样访问该值：

```jsx
const Welcome = (props) => <h1>Hello, {props.user}!</h1>
```

调用<code>props</code>这个值是常见做法，当处理无状态函数组件时，你基本上可以将其视为返回 JSX 的函数的参数。这样，你就可以在函数体中访问该值。但对于类组件，访问方式会略有不同。
</section>

## Instructions
<section id='instructions'>
代码编辑器中有<code>Calendar</code>和<code>CurrentDate</code>组件。从<code>Calendar</code>组件渲染<code>CurrentDate</code>时，从 JavaScript 的<code>Date</code>对象分配当前日期，并将其作为<code>date</code>属性传入。然后访问<code>CurrentDate</code>组件的<code>prop</code>，并在<code>p</code>标签中显示其值。请注意，要将<code>prop</code>的值视为 JavaScript，必须将它们括在花括号中，例如<code>date={Date()}</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Calendar</code>组件应该返回单个<code>div</code>元素。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(Calendar)); return mockedComponent.children().type() === 'div'; })());
  - text: <code>Calendar</code>组件的第二个子元素应该是<code>CurrentDate</code>组件。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(Calendar)); return mockedComponent.children().childAt(1).name() === 'CurrentDate'; })());
  - text: <code>CurrentDate</code>组件应该有一个名为<code>date</code>的属性。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(Calendar)); return mockedComponent.children().childAt(1).props().date })());
  - text: <code>CurrentDate</code>的<code>date</code>属性应该包含一段文本字符串。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(Calendar)); const prop = mockedComponent.children().childAt(1).props().date; return( typeof prop === 'string' && prop.length > 0 ); })());
  - text: <code>CurrentDate</code>组件应该把<code>date</code>属性渲染在<code>p</code>标签内。
    testString: assert(/<CurrentDatedate={Date\(\)}\/>/.test(code.replace(/\s/g, '')))
  - text: <code>CurrentDate</code> 组件应该把 <code>date</code> 属性渲染在 <code>p</code> 标签内。
    testString: let date = "dummy date"; assert((function() { const mockedComponent = Enzyme.mount(React.createElement(CurrentDate, {date})); return mockedComponent.find('p').html().includes(date); })());


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
ReactDOM.render(<Calendar />, document.getElementById('root'))
```

</div>

</section>

## Solution
<section id='solution'>


```js
const CurrentDate = (props) => {
  return (
    <div>
      { /* change code below this line */ }
      <p>The current date is: {props.date}</p>
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
        <CurrentDate date={Date()} />
        { /* change code above this line */ }
      </div>
    );
  }
};
```

</section>
