---
id: 5a24c314108439a4d4036179
title: 创建一个可以控制的表单
challengeType: 6
forumTopicId: 301384
dashedName: create-a-controlled-form
---

# --description--

上一个挑战展示了 React 能控制某些元素的内部 state，比如`input`和`textarea`，这使得这些元素成为受控组件。这也适用于其他表单元素，包括常规的 HTML 表单`form`元素。

# --instructions--

`MyForm`组件中是一个带有提交处理程序的空`form`元素，提交处理程序将在提交表单时被调用。

我们增加了一个提交表单的按钮。你可以看到它的`type`被设置为`submit`，表明它是控制表单的按钮。在表单中添加`input`元素，并像上次挑战一样设置其`value`和`onChange()`属性。然后，你应该完成`handleSubmit`方法，以便将组件 state 属性`submit`设置为本地`state`下的当前输入值。

**注意：** 你还必须在提交处理程序中调用`event.preventDefault()`，以防止默认的表单提交行为刷新网页。

最后，在`form`元素之后创建一个`h1`标签，该标签从组件的`state`渲染`submit`的值。然后，你可以在表单中键入任何内容，然后单击按钮（或按 enter 键），你的输入会渲染到页面上。

# --hints--

`MyForm`应该返回一个包含`form`和`h1`标签的`div`元素，其中，表单中应该包括一个`input`和一个`button`。

```js
assert(
  (() => {
    const mockedComponent = Enzyme.mount(React.createElement(MyForm));
    return (
      mockedComponent.find('div').children().find('form').length === 1 &&
      mockedComponent.find('div').children().find('h1').length === 1 &&
      mockedComponent.find('form').children().find('input').length === 1 &&
      mockedComponent.find('form').children().find('button').length === 1
    );
  })()
);
```

`MyForm`的 state 应该用`input`和`submit`属性初始化，且两者都为空字符串。

```js
assert(
  Enzyme.mount(React.createElement(MyForm)).state('input') === '' &&
    Enzyme.mount(React.createElement(MyForm)).state('submit') === ''
);
```

`input`元素中的输入应该会更新组件中 state 的`input`属性。

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyForm));
  const _1 = () => {
    mockedComponent.setState({ input: '' });
    return waitForIt(() => mockedComponent.state('input'));
  };
  const _2 = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: 'TestInput' } });
    return waitForIt(() => ({
      state: mockedComponent.state('input'),
      inputVal: mockedComponent.find('input').props().value
    }));
  };
  const before = await _1();
  const after = await _2();
  assert(
    before === '' &&
      after.state === 'TestInput' &&
      after.inputVal === 'TestInput'
  );
};
```

提交表单应该运行`handleSubmit`，它应该将 state 中的`submit`属性设置为当前输入。

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyForm));
  const _1 = () => {
    mockedComponent.setState({ input: '' });
    mockedComponent.setState({ submit: '' });
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: 'SubmitInput' } });
    return waitForIt(() => mockedComponent.state('submit'));
  };
  const _2 = () => {
    mockedComponent.find('form').simulate('submit');
    return waitForIt(() => mockedComponent.state('submit'));
  };
  const before = await _1();
  const after = await _2();
  assert(before === '' && after === 'SubmitInput');
};
```

`h1`标题应该从组件的 state 渲染`submit`字段的值。

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyForm));
  const _1 = () => {
    mockedComponent.setState({ input: '' });
    mockedComponent.setState({ submit: '' });
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: 'TestInput' } });
    return waitForIt(() => mockedComponent.find('h1').text());
  };
  const _2 = () => {
    mockedComponent.find('form').simulate('submit');
    return waitForIt(() => mockedComponent.find('h1').text());
  };
  const before = await _1();
  const after = await _2();
  assert(before === '' && after === 'TestInput');
};
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<MyForm />, document.getElementById('root'));
```

## --seed-contents--

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
    // Change code below this line
    
    // Change code above this line
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* Change code below this line */}

          {/* Change code above this line */}
          <button type='submit'>Submit!</button>
        </form>
        {/* Change code below this line */}

        {/* Change code above this line */}
      </div>
    );
  }
}
```

# --solutions--

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
    event.preventDefault();
    this.setState(state => ({
      submit: state.input
    }));
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.input} onChange={this.handleChange} />
          <button type='submit'>Submit!</button>
        </form>
        <h1>{this.state.submit}</h1>
      </div>
    );
  }
}
```
