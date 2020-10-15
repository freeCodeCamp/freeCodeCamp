---
id: 5a24c314108439a4d403616a
challengeType: 6
forumTopicId: 301401
title: 传递一个数组作为 Props
---

## Description
<section id='description'>
上一个挑战演示了如何将来自父组件的信息作为<code>props</code>传递给子组件。这个挑战着眼于如何将数组作为<code>props</code>传递。要将数组传递给 JSX 元素，必须将其视为 JavaScript 并用花括号括起来。

```jsx
<ParentComponent>
  <ChildComponent colors={["green", "blue", "red"]} />
</ParentComponent>
```

这样，子组件就可以访问数组属性<code>colors</code>。访问属性时可以使用<code>join()</code>等数组方法。
<code>const ChildComponent = (props) => &lt;p&gt{props.colors.join(', ')}&lt;/p&gt</code>
这将把所有<code>colors</code>数组项连接成一个逗号分隔的字符串并生成：
 <code> &lt;p&gt;green, blue, red&lt;/p&gt;</code>
稍后，我们将了解在 React 中渲染数组数据的其他常用方法。
</section>

## Instructions
<section id='instructions'>
代码编辑器中有<code>List</code>和<code>ToDo</code>组件。在<code>ToDo</code>组件中渲染每个<code>List</code>时，传入<code>tasks</code>属性并将其分配给待办任务数组，例如<code>["walk dog", "workout"]</code>。然后访问<code>List</code>组件中的<code>tasks</code>数组，在<code>p</code>元素中显示其值。使用<code>join(", ")</code>把<code>props.tasks</code>数组作为逗号分隔列表显示在<code>p</code>元素中。今天的列表应该至少有 2 个任务，明天应该至少有 3 个任务。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>ToDo</code>组件应该返回单个外部<code>div</code>。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ToDo)); return mockedComponent.children().first().type() === 'div'; })());
  - text: <code>ToDo</code>组件的第三个子元素应该是<code>List</code>组件的一个实例。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ToDo)); return mockedComponent.children().first().childAt(2).name() === 'List'; })());
  - text: <code>ToDo</code>组件的第五个子元素应该是<code>List</code>组件的一个实例。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ToDo)); return mockedComponent.children().first().childAt(4).name() === 'List'; })());
  - text: <code>List</code>组件的两个实例都应该具有一个名为<code>tasks</code>的属性，并且<code>tasks</code>的类型应该是数组。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ToDo)); return Array.isArray(mockedComponent.find('List').get(0).props.tasks) && Array.isArray(mockedComponent.find('List').get(1).props.tasks); })());
  - text: 表示今天任务的第一个<code>List</code>组件应该有 2 个或更多项。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ToDo)); return mockedComponent.find('List').get(0).props.tasks.length >= 2; })());
  - text: 表示明天任务的第二个<code>List</code>组件应该有 3 个或更多项。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ToDo)); return mockedComponent.find('List').get(1).props.tasks.length >= 3; })());
  - text: <code>List</code>组件应在<code>p</code>标签中渲染<code>tasks</code>属性的值。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ToDo)); return mockedComponent.find('p').get(0).props.children === mockedComponent.find('List').get(0).props.tasks.join(', ') && mockedComponent.find('p').get(1).props.children === mockedComponent.find('List').get(1).props.tasks.join(', '); })());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const List = (props) => {
  { /* change code below this line */ }
  return <p>{}</p>
  { /* change code above this line */ }
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        { /* change code below this line */ }
        <List/>
        <h2>Tomorrow</h2>
        <List/>
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
ReactDOM.render(<ToDo />, document.getElementById('root'))
```

</div>

</section>

## Solution
<section id='solution'>


```js
const List= (props) => {
  return <p>{props.tasks.join(', ')}</p>
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        <List tasks={['study', 'exercise']} />
        <h2>Tomorrow</h2>
        <List tasks={['call Sam', 'grocery shopping', 'order tickets']} />
      </div>
    );
  }
};
```

</section>
