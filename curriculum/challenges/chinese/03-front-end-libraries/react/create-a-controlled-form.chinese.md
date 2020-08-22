---
id: 5a24c314108439a4d4036179
title: Create a Controlled Form
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 创建受控表格
---

## Description
<section id="description">最后一个挑战表明，React可以控制<code>input</code>和<code>textarea</code>等某些元素的内部状态，这使得它们成为受控组件。这也适用于其他表单元素，包括常规HTML <code>form</code>元素。 </section>

## Instructions
<section id="instructions"> <code>MyForm</code>组件设置为带有提交处理程序的空<code>form</code> 。提交表单时将调用提交处理程序。我们添加了一个提交表单的按钮。您可以看到它的<code>type</code>设置为<code>submit</code>表明它是控制表单的按钮。在<code>form</code>添加<code>input</code>元素并设置其<code>value</code>和<code>onChange()</code>属性， <code>onChange()</code>一个挑战。然后，您应该完成<code>handleSubmit</code>方法，以便将组件状态属性<code>submit</code>设置为本地<code>state</code>的当前输入值。 <strong>注意：</strong>您还必须在提交处理程序中调用<code>event.preventDefault()</code> ，以防止将刷新网页的默认表单提交行为。最后，在<code>form</code>之后创建一个<code>h1</code>标记，该<code>form</code>从组件的<code>state</code>呈现<code>submit</code>值。然后，您可以键入表单并单击按钮（或按Enter键），您应该看到您的输入呈现给页面。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyForm</code>应该返回一个包含<code>form</code>和<code>h1</code>标记的<code>div</code>元素。表单应包含<code>input</code>和<code>button</code> 。
    testString: assert((() => { const mockedComponent = Enzyme.mount(React.createElement(MyForm)); return (mockedComponent.find('div').children().find('form').length === 1 && mockedComponent.find('div').children().find('h1').length === 1 && mockedComponent.find('form').children().find('input').length === 1 && mockedComponent.find('form').children().find('button').length === 1) })());
  - text: <code>MyForm</code>的状态应该使用<code>input</code>和<code>submit</code>属性初始化，两者都设置为空字符串。
    testString: assert(Enzyme.mount(React.createElement(MyForm)).state('input') === '' && Enzyme.mount(React.createElement(MyForm)).state('submit') === '');
  - text: 输入<code>input</code>元素应该更新组件状态的<code>input</code>属性。
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyForm)); const _1 = () => { mockedComponent.setState({ input: '''' }); return waitForIt(() => mockedComponent.state(''input''))}; const _2 = () => { mockedComponent.find(''input'').simulate(''change'', { target: { value: ''TestInput'' }}); return waitForIt(() => ({ state: mockedComponent.state(''input''), inputVal: mockedComponent.find(''input'').props().value }))}; const before = await _1(); const after = await _2(); assert(before === '''' && after.state === ''TestInput'' && after.inputVal === ''TestInput''); }; '
  - text: 提交表单应该运行<code>handleSubmit</code> ，它应该将<code>submit</code>属性设置为等于当前输入的状态。
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyForm)); const _1 = () => { mockedComponent.setState({ input: '''' }); mockedComponent.setState({submit: ''''}); mockedComponent.find(''input'').simulate(''change'', {target: {value: ''SubmitInput''}}); return waitForIt(() => mockedComponent.state(''submit''))}; const _2 = () => { mockedComponent.find(''form'').simulate(''submit''); return waitForIt(() => mockedComponent.state(''submit''))}; const before = await _1(); const after = await _2(); assert(before === '''' && after === ''SubmitInput''); };'
  - text: <code>h1</code>标头应该从组件的状态呈现<code>submit</code>字段的值。
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
      input: ",
      submit: "
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
