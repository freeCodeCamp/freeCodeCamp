---
id: 5a24c314108439a4d403616a
title: Pass an Array as Props
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 将数组作为道具传递
---

## Description
<section id="description">最后一项挑战演示了如何将信息从父组件传递到子组件作为<code>props</code>或属性。这个挑战着眼于如何将数组作为<code>props</code>传递。要将数组传递给JSX元素，必须将其视为JavaScript并用大括号括起来。 <blockquote> &lt;为父级&gt; <br> &lt;ChildComponent colors = {[“green”，“blue”，“red”]} /&gt; <br> &lt;/为父级&gt; </blockquote>然后子组件可以访问数组属性<code>colors</code> 。访问属性时可以使用诸如<code>join()</code>类的数组方法。 <code>const ChildComponent = (props) =&gt; &lt;p&gt;{props.colors.join(&#39;, &#39;)}&lt;/p&gt;</code>这会将所有<code>colors</code>数组项连接成逗号分隔的字符串并生成： <code>&lt;p&gt;green, blue, red&lt;/p&gt;</code>稍后，我们将了解在React中呈现数据数组的其他常用方法。 </section>

## Instructions
<section id="instructions">代码编辑器中有<code>List</code>和<code>ToDo</code>组件。从<code>ToDo</code>组件渲染每个<code>List</code> ，传入分配给待办任务数组的<code>tasks</code>属性，例如<code>[&quot;walk dog&quot;, &quot;workout&quot;]</code> 。然后在<code>List</code>组件中访问此<code>tasks</code>数组，在<code>p</code>元素中显示其值。使用<code>join(&quot;, &quot;)</code>以逗号分隔列表的形式显示<code>p</code>元素中的<code>props.tasks</code>数组。今天的列表应该至少有2个任务，明天应该至少有3个任务。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>ToDo</code>组件应返回单个外部<code>div</code> 。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ToDo)); return mockedComponent.children().first().type() === 'div'; })());
  - text: <code>ToDo</code>组件的第三个子<code>ToDo</code>应该是<code>List</code>组件的实例。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ToDo)); return mockedComponent.children().first().childAt(2).name() === 'List'; })());
  - text: <code>ToDo</code>组件的第五个子<code>ToDo</code>应该是<code>List</code>组件的一个实例。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ToDo)); return mockedComponent.children().first().childAt(4).name() === 'List'; })());
  - text: <code>List</code>组件的两个实例都应该有一个名为<code>tasks</code>的属性，而<code>tasks</code>应该是array类型。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ToDo)); return Array.isArray(mockedComponent.find('List').get(0).props.tasks) && Array.isArray(mockedComponent.find('List').get(1).props.tasks); })());
  - text: 表示今天任务的第一个<code>List</code>组件应该有2个或更多项。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ToDo)); return mockedComponent.find('List').get(0).props.tasks.length >= 2; })());
  - text: 表示明天任务的第二个<code>List</code>组件应该有3个或更多项。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ToDo)); return mockedComponent.find('List').get(1).props.tasks.length >= 3; })());
  - text: '<code>List</code>组件应该将<code>p</code>标记中的<code>tasks</code> prop的值呈现为以逗号分隔的列表，例如<code>walk dog, workout</code> 。'
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ToDo)); return mockedComponent.find('p').get(0).props.children === mockedComponent.find('List').get(0).props.tasks.join(', ') && mockedComponent.find('p').get(1).props.children === mockedComponent.find('List').get(1).props.tasks.join(', '); })());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const List= (props) => {
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
