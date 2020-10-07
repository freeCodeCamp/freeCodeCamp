---
id: 5a24c314108439a4d4036142
challengeType: 6
forumTopicId: 301431
title: 首先在本地管理状态
---

## Description
<section id='description'>
这一关的任务是完成<code>DisplayMessages</code>组件的创建。
</section>

## Instructions
<section id='instructions'>
首先，在<code>render()</code>方法中，让组件渲染<code>input</code>、<code>button</code>、<code>ul</code>三个元素。<code>input</code>元素的改变会触发<code>handleChange()</code>方法。此外，<code>input</code>元素会渲染组件状态中<code>input</code>的值。点击按钮<code>button</code>需触发<code>submitMessage()</code>方法。
接着，写出这两种方法。<code>handleChange()</code>方法会更新<code>input</code>为用户正在输入的内容。<code>submitMessage()</code>方法把当前存储在<code>input</code>的消息与本地状态的<code>messages</code>数组连接起来，并清除<code>input</code>的值。
最后，在<code>ul</code>中展示<code>messages</code>数组，其中每个元素内容需放到<code>li</code>元素内。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>DisplayMessages</code>组件的初始状态应是<code>{ input: "", messages: [] }</code>。'
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages)); const initialState = mockedComponent.state(); return ( typeof initialState === ''object'' && initialState.input === '''' && initialState.messages.length === 0); })());'
  - text: <code>DisplayMessages</code>组件应渲染含<code>h2</code>、<code>button</code>、<code>ul</code>、<code>li</code>四个子元素的<code>div</code>。
    testString: 'async () => { const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages)); const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100)); const state = () => { mockedComponent.setState({messages: [''__TEST__MESSAGE'']}); return waitForIt(() => mockedComponent )}; const updated = await state(); assert(updated.find(''div'').length === 1 && updated.find(''h2'').length === 1 && updated.find(''button'').length === 1 && updated.find(''ul'').length === 1 && updated.find(''li'').length > 0); }; '
  - text: <code>input</code>元素应渲染本地状态中的<code>input</code>值。
    testString: assert(code.match(/this\.state\.messages\.map/g));
  - text: 调用<code>handleChange</code>方法时应更新状态中的<code>input</code>值为当前输入。
    testString: 'async () => { const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages)); const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100)); const causeChange = (c, v) => c.find(''input'').simulate(''change'', { target: { value: v }}); const testValue = ''__TEST__EVENT__INPUT''; const changed = () => { causeChange(mockedComponent, testValue); return waitForIt(() => mockedComponent )}; const updated = await changed(); assert(updated.find(''input'').props().value === testValue); }; '
  - text: 单击<code>Add message</code>按钮应调用<code>submitMessage</code>方法，添加当前<code>输入</code>到状态中的<code>消息</code>数组。
    testString: 'async () => { const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages)); const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100)); const causeChange = (c, v) => c.find(''input'').simulate(''change'', { target: { value: v }}); const initialState = mockedComponent.state(); const testMessage = ''__TEST__EVENT__MESSAGE__''; const changed = () => { causeChange(mockedComponent, testMessage); return waitForIt(() => mockedComponent )}; const afterInput = await changed(); assert(initialState.input === '''' && afterInput.state().input === ''__TEST__EVENT__MESSAGE__'');  }; '
  - text: <code>submitMessage</code>方法应清除当前输入。
    testString: 'async () => { const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages)); const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100)); const causeChange = (c, v) => c.find(''input'').simulate(''change'', { target: { value: v }}); const initialState = mockedComponent.state(); const testMessage_1 = ''__FIRST__MESSAGE__''; const firstChange = () => { causeChange(mockedComponent, testMessage_1); return waitForIt(() => mockedComponent )}; const firstResult = await firstChange(); const firstSubmit = () => { mockedComponent.find(''button'').simulate(''click''); return waitForIt(() => mockedComponent )}; const afterSubmit_1 = await firstSubmit(); const submitState_1 = afterSubmit_1.state(); const testMessage_2 = ''__SECOND__MESSAGE__''; const secondChange = () => { causeChange(mockedComponent, testMessage_2); return waitForIt(() => mockedComponent )}; const secondResult = await secondChange(); const secondSubmit = () => { mockedComponent.find(''button'').simulate(''click''); return waitForIt(() => mockedComponent )}; const afterSubmit_2 = await secondSubmit(); const submitState_2 = afterSubmit_2.state(); assert(initialState.messages.length === 0 && submitState_1.messages.length === 1 && submitState_2.messages.length === 2 && submitState_2.messages[1] === testMessage_2); }; '
  - text: The <code>submitMessage</code> method should clear the current input.
    testString: 'async () => { const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages)); const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100)); const causeChange = (c, v) => c.find(''input'').simulate(''change'', { target: { value: v }}); const initialState = mockedComponent.state(); const testMessage = ''__FIRST__MESSAGE__''; const firstChange = () => { causeChange(mockedComponent, testMessage); return waitForIt(() => mockedComponent )}; const firstResult = await firstChange(); const firstState = firstResult.state(); const firstSubmit = () => { mockedComponent.find(''button'').simulate(''click''); return waitForIt(() => mockedComponent )}; const afterSubmit = await firstSubmit(); const submitState = afterSubmit.state(); assert(firstState.input === testMessage && submitState.input === ''''); }; '

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
  }
// 请把 handleChange()、submitMessage() 写在这里

  render() {
    return (
      <div>
        <h2>键入新 Message</h2>
        { /* 在此渲染 input、button、ul*/ }

        { /* 请在本行以上添加你的代码 */ }
      </div>
    );
  }
};
```

</div>


### After Test
<div id='jsx-teardown'>

```js
ReactDOM.render(<DisplayMessages />, document.getElementById('root'))
```

</div>

</section>

## Solution
<section id='solution'>


```js
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
 this.handleChange = this.handleChange.bind(this);
   this.submitMessage = this.submitMessage.bind(this);
 }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    const currentMessage = this.state.input;
    this.setState({
      input: '',
      messages: this.state.messages.concat(currentMessage)
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};
```

</section>
