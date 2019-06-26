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
  - text: 測試文本
    testString: assert(true);

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
</section>
