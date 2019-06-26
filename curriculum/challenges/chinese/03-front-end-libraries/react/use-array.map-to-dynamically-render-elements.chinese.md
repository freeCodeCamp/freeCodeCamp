---
id: 5a24c314108439a4d403618a
title: Use Array.map() to Dynamically Render Elements
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 使用Array.map（）动态渲染元素
---

## Description
<section id="description">条件渲染很有用，但您可能需要组件渲染未知数量的元素。通常在反应式编程中，程序员无法知道应用程序的状态直到运行时，因为这很大程度上取决于用户与该程序的交互。程序员需要编写代码以提前正确处理未知状态。在React中使用<code>Array.map()</code>说明了这个概念。例如，您创建一个简单的“待办事项列表”应用程序。作为程序员，您无法知道用户可能在其列表中有多少项。您需要设置组件，以便在使用该程序的人决定今天是洗衣日之前<em><strong>动态呈现</strong></em>正确数量的列表元素。 </section>

## Instructions
<section id="instructions">代码编辑器设置了大部分<code>MyToDoList</code>组件。如果您完成了受控制的表单质询，那么这些代您会注意到一个<code>textarea</code>和一个<code>button</code> ，以及一些跟踪其状态的方法，但是还没有任何内容呈现给页面。在<code>constructor</code>内部，创建一个<code>this.state</code>对象并定义两个状态： <code>userInput</code>应初始化为空字符串， <code>toDoList</code>应初始化为空数组。接下来，删除<code>items</code>变量旁边的<code>render()</code>方法中的注释。取而代之，映射存储在组件内部状态中的<code>toDoList</code>数组，并为每个项目动态呈现<code>li</code> 。尝试输入字符串<code>eat, code, sleep, repeat</code>到<code>textarea</code> ，然后单击按钮，看看会发生什么。 <strong>注意：</strong>您可能知道由这样的映射操作创建的所有兄弟子元素都需要提供唯一的<code>key</code>属性。别担心，这是下一个挑战的主题。 </section>

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
const textAreaStyles = {
  width: 235,
  margin: 5
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    // change code below this line

    // change code above this line
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    const itemsArray = this.state.userInput.split(',');
    this.setState({
      toDoList: itemsArray
    });
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  render() {
    const items = null; // change code here
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder="Separate Items With Commas" /><br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>
          {items}
        </ul>
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
