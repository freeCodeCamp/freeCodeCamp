---
id: 5a24c314108439a4d4036178
challengeType: 6
forumTopicId: 301385
title: 创建一个可以控制的输入框
---

## Description
<section id='description'>
你的应用程序可能在<code>state</code>和渲染的 UI 之间有更复杂的交互。例如，用于文本输入的表单控件元素（如<code>input</code>和<code>textarea</code>）在用户键入时在 DOM 中维护自己的 state。通过 React，你可以将这种可变 state 转移到 React 组件的<code>state</code>中。用户的输入变成了应用程序<code>state</code>的一部分，因此 React 控制该输入字段的值。通常，如果你的 React 组件具有用户可以键入的输入字段，那么它将是一个受控的输入表单。
</section>

## Instructions
<section id='instructions'>
代码编辑器具有一个名为<code>ControlledInput</code>的组件框架，用于创建受控的<code>input</code>元素。组件的<code>state</code>已经被包含空字符串的<code>input</code>属性初始化。此值表示用户在<code>input</code>字段中键入的文本。
首先，创建一个名为<code>handleChange()</code>的方法，该方法具有一个名为<code>event</code>的参数。方法被调用时，它接收一个<code>event</code>对象，该对象包含一个来自<code>input</code>元素的字符串文本。你可以使用方法内的<code>event.target.value</code>来访问这个字符串。用这个新字符串更新组件的<code>state</code>的<code>input</code>属性。
在 render 方法中，在<code>h4</code>标签之上创建<code>input</code>元素。添加一个<code>value</code>属性，它等于组件的<code>state</code>的<code>input</code>属性。然后将<code>onChange()</code>事件处理程序设置到<code>handleChange()</code>方法。
在输入框中键入时，该文本由<code>handleChange()</code>方法处理，该文本被设置为本地<code>state</code>中的<code>input</code>属性，并渲染在页面上的<code>input</code>框中。组件<code>state</code>是输入数据的唯一真实来源。
最后也是最重要的，不要忘记在构造函数中添加必要的绑定。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>ControlledInput</code>应该返回包含一个<code>input</code>标签和<code>p</code>标签的<code>div</code>元素。
    testString: assert(Enzyme.mount(React.createElement(ControlledInput)).find('div').children().find('input').length === 1 && Enzyme.mount(React.createElement(ControlledInput)).find('div').children().find('p').length === 1);
  - text: <code>ControlledInput</code>的 state 应该使用设置为空字符串的<code>input</code>属性初始化。
    testString: assert.strictEqual(Enzyme.mount(React.createElement(ControlledInput)).state('input'), '');
  - text: input 元素中的键入值应该更新 input 的 state 和值，并且<code>p</code>元素应该在输入时呈现 state。
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(ControlledInput)); const _1 = () => { mockedComponent.setState({ input: '''' }); return waitForIt(() => mockedComponent.state(''input''))}; const _2 = () => { mockedComponent.find(''input'').simulate(''change'', { target: { value: ''TestInput'' }}); return waitForIt(() => ({ state: mockedComponent.state(''input''), text: mockedComponent.find(''p'').text(), inputVal: mockedComponent.find(''input'').props().value }))}; const before = await _1(); const after = await _2(); assert(before === '''' && after.state === ''TestInput'' && after.text === ''TestInput'' && after.inputVal === ''TestInput''); }; '

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    // change code below this line

    // change code above this line
  }
  // change code below this line

  // change code above this line
  render() {
    return (
      <div>
        { /* change code below this line */}

        { /* change code above this line */}
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};
```

</div>


### After Test
<div id='jsx-teardown'>

```js
ReactDOM.render(<ControlledInput />, document.getElementById('root'))
```

</div>

</section>

## Solution
<section id='solution'>


```js
class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  render() {
    return (
      <div>
        <input
          value={this.state.input}
          onChange={this.handleChange} />
        <h4>Controlled Input:</h4>

        <p>{this.state.input}</p>
      </div>
    );
  }
};
```

</section>
