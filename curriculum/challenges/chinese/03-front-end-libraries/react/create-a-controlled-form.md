---
id: 5a24c314108439a4d4036179
challengeType: 6
forumTopicId: 301384
title: 创建一个可以控制的表单
---

## Description
<section id='description'>
上一个挑战展示了 React 能控制某些元素的内部 state，比如<code>input</code>和<code>textarea</code>，这使得这些元素成为受控组件。这也适用于其他表单元素，包括常规的 HTML 表单<code>form</code>元素。
</section>

## Instructions
<section id='instructions'>
<code>MyForm</code>组件中是一个带有提交处理程序的空<code>form</code>元素，提交处理程序将在提交表单时被调用。
我们增加了一个提交表单的按钮。你可以看到它的<code>type</code>被设置为<code>submit</code>，表明它是控制表单的按钮。在表单中添加<code>input</code>元素，并像上次挑战一样设置其<code>value</code>和<code>onChange()</code>属性。然后，你应该完成<code>handleSubmit</code>方法，以便将组件 state 属性<code>submit</code>设置为本地<code>state</code>下的当前输入值。
<strong>注意：</strong>&nbsp; 你还必须在提交处理程序中调用<code>event.preventDefault()</code>，以防止默认的表单提交行为刷新网页。
最后，在<code>form</code>元素之后创建一个<code>h1</code>标签，该标签从组件的<code>state</code>渲染<code>submit</code>的值。然后，你可以在表单中键入任何内容，然后单击按钮（或按 enter 键），你的输入会渲染到页面上。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyForm</code>应该返回一个包含<code>form</code>和<code>h1</code>标签的<code>div</code>元素，其中，表单中应该包括一个<code>input</code>和一个<code>button</code>。
    testString: assert((() => { const mockedComponent = Enzyme.mount(React.createElement(MyForm)); return (mockedComponent.find('div').children().find('form').length === 1 && mockedComponent.find('div').children().find('h1').length === 1 && mockedComponent.find('form').children().find('input').length === 1 && mockedComponent.find('form').children().find('button').length === 1) })());
  - text: <code>MyForm</code>的 state 应该用<code>input</code>和<code>submit</code>属性初始化，且两者都为空字符串。
    testString: assert(Enzyme.mount(React.createElement(MyForm)).state('input') === '' && Enzyme.mount(React.createElement(MyForm)).state('submit') === '');
  - text: <code>input</code>元素中的输入应该会更新组件中 state 的<code>input</code>属性。
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyForm)); const _1 = () => { mockedComponent.setState({ input: '''' }); return waitForIt(() => mockedComponent.state(''input''))}; const _2 = () => { mockedComponent.find(''input'').simulate(''change'', { target: { value: ''TestInput'' }}); return waitForIt(() => ({ state: mockedComponent.state(''input''), inputVal: mockedComponent.find(''input'').props().value }))}; const before = await _1(); const after = await _2(); assert(before === '''' && after.state === ''TestInput'' && after.inputVal === ''TestInput''); }; '
  - text: 提交表单应该运行<code>handleSubmit</code>，它应该将 state 中的<code>submit</code>属性设置为当前输入。
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyForm)); const _1 = () => { mockedComponent.setState({ input: '''' }); mockedComponent.setState({submit: ''''}); mockedComponent.find(''input'').simulate(''change'', {target: {value: ''SubmitInput''}}); return waitForIt(() => mockedComponent.state(''submit''))}; const _2 = () => { mockedComponent.find(''form'').simulate(''submit''); return waitForIt(() => mockedComponent.state(''submit''))}; const before = await _1(); const after = await _2(); assert(before === '''' && after === ''SubmitInput''); };'
  - text: <code>h1</code>标题应该从组件的 state 渲染<code>submit</code>字段的值。
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyForm)); const _1 = () => { mockedComponent.setState({ input: '''' }); mockedComponent.setState({submit: ''''}); mockedComponent.find(''input'').simulate(''change'', {target: {value: ''TestInput''}}); return waitForIt(() => mockedComponent.find(''h1'').text())}; const _2 = () => { mockedComponent.find(''form'').simulate(''submit''); return waitForIt(() => mockedComponent.find(''h1'').text())}; const before = await _1(); const after = await _2(); assert(before === '''' && after === ''TestInput''); }; '

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    // change code below this line

    // change code above this line
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          { /* change code below this line */ }

          { /* change code above this line */ }
          <button type='submit'>Submit!</button>
        </form>
        { /* change code below this line */ }

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
ReactDOM.render(<MyForm />, document.getElementById('root'))
```

</div>

</section>

## Solution
<section id='solution'>


```js
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault()
    this.setState({
      submit: this.state.input
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.input}
            onChange={this.handleChange} />
          <button type='submit'>Submit!</button>
        </form>
        <h1>{this.state.submit}</h1>
      </div>
    );
  }
};
```

</section>
