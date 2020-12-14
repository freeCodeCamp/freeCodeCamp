---
id: 5a24c314108439a4d403618a
challengeType: 6
forumTopicId: 301417
title: 使用 Array.map() 动态渲染元素
---

## Description
<section id='description'>
条件渲染很有用，但是你可能需要组件来渲染未知数量的元素。通常在响应式编程中，程序员在应用程序运行时之前无法知道其 state，因为这在很大程度上取决于用户与该程序的交互。程序员需要提前编写代码来正确处理未知状态。在 React 中使用<code>Array.map()</code>阐明了这个概念。
例如，你创建一个简单的“To Do List”应用程序。作为程序员，你无法知道用户可能在其列表中有多少项。你需要设置组件，以便在使用该程序的人决定今天今日待办事项之前<em><strong>动态渲染</strong></em>正确数量的列表元素。 
</section>

## Instructions
<section id='instructions'>
代码编辑器完成了<code>MyToDoList</code>组件的大部分设置。如果你完成了受控表单挑战，这些代码中的一些应该看起来很熟悉。你会注意到一个<code>textarea</code>和一个<code>button</code>，以及一些跟踪它们状态的方法，但是页面当前还没有任何东西被渲染。
在<code>constructor</code>中，创建一个<code>this.state</code>对象并定义两个 state：<code>userInput</code>应该初始化为空字符串，<code>toDoList</code>应该初始化为空数组。接下来，删除<code>items</code>变量旁边<code>render()</code>方法中的注释。取而代之的是，将存储在组件内部 state 中的<code>toDoList</code>数组一一映射并相应的动态呈现<code>li</code>元素。尝试在<code>textarea</code>中输入<code>eat, code, sleep, repeat</code>，然后点击按钮，看看会发生什么。
<strong>注意：</strong>&nbsp;你可能知道，像这样的映射操作创建的所有兄弟子元素都需要提供唯一的<code>key</code>属性。别担心，这是下一个挑战的主题。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyToDoList</code>组件应该存在并渲染到页面。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyToDoList)); return mockedComponent.find('MyToDoList').length === 1; })());
  - text: <code>MyToDoList</code>组件的第一个子元素应该是<code>textarea</code>元素。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyToDoList)); return mockedComponent.find('MyToDoList').children().childAt(0).type() === 'textarea'; })());
  - text: <code>MyToDoList</code>组件的第二个子元素应该是<code>br</code>元素。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyToDoList)); return mockedComponent.find('MyToDoList').children().childAt(1).type() === 'br'; })());
  - text: <code>MyToDoList</code>组件的第三个子元素应该是<code>button</code>元素。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyToDoList)); return mockedComponent.find('MyToDoList').children().childAt(2).type() === 'button'; })());
  - text: <code>MyToDoList</code>的 state 应该使用被设置为空数组的<code>toDoList</code>进行初始化。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyToDoList)); const initialState = mockedComponent.state(); return Array.isArray(initialState.toDoList) === true && initialState.toDoList.length === 0; })());
  - text: <code>MyToDoList</code>的 state 应该使用被设置为空字符串的<code>userInput</code>进行初始化。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyToDoList)); const initialState = mockedComponent.state(); return typeof initialState.userInput === 'string' && initialState.userInput.length === 0; })());
  - text: 单击<code>Create List</code>按钮时，<code>MyToDoList</code>组件应该动态返回一个无序列表，该列表包含输入到<code>textarea</code>元素中的逗号分隔列表的每个项目的列表项目元素。
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100)); const mockedComponent = Enzyme.mount(React.createElement(MyToDoList)); const simulateChange = (el, value) => el.simulate(''change'', {target: {value}}); const state_1 = () => { return waitForIt(() => mockedComponent.find(''ul'').find(''li''))}; const setInput = () => { return waitForIt(() => simulateChange(mockedComponent.find(''textarea''), "testA, testB, testC"))}; const click = () => { return waitForIt(() => mockedComponent.find(''button'').simulate(''click''))}; const state_2 = () => { return waitForIt(() => { const nodes = mockedComponent.find(''ul'').find(''li''); return { nodes, text: nodes.reduce((t, n) => t + n.text(), '''') }; })}; const setInput_2 = () => { return waitForIt(() => simulateChange(mockedComponent.find(''textarea''), "t1, t2, t3, t4, t5, t6"))}; const click_1 = () => { return waitForIt(() => mockedComponent.find(''button'').simulate(''click''))}; const state_3 = () => { return waitForIt(() => { const nodes = mockedComponent.find(''ul'').find(''li''); return { nodes, text: nodes.reduce((t, n) => t + n.text(), '''') }; })}; const awaited_state_1 = await state_1(); const awaited_setInput = await setInput(); const awaited_click = await click(); const awaited_state_2 = await state_2(); const awaited_setInput_2 = await setInput_2(); const awaited_click_1 = await click_1(); const awaited_state_3 = await state_3(); assert(awaited_state_1.length === 0 && awaited_state_2.nodes.length === 3 && awaited_state_3.nodes.length === 6 && awaited_state_2.text === ''testA testB testC'' && awaited_state_3.text === ''t1 t2 t3 t4 t5 t6''); }; '

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
          placeholder="Separate Items With Commas" />
        <br />
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
ReactDOM.render(<MyToDoList />, document.getElementById('root'))
```

</div>

</section>

## Solution
<section id='solution'>


```js
const textAreaStyles = {
  width: 235,
  margin: 5
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [],
      userInput: ''
    }
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
    const items = this.state.toDoList.map( (item, i) => {
      return <li key={i}>{item}</li>
    });
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

</section>
