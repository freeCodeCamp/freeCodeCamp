---
id: 5a24c314108439a4d4036149
challengeType: 6
forumTopicId: 301428
title: 将局部状态提取到 Redux 中
---

## Description
<section id='description'>
胜利就在眼前了！请回顾一下为管理 React messages app 的状态写的 Redux 代码。现在有了连接好的 Redux，你还要从<code>Presentational</code>组件中提取状态管理到 Redux，在<code>Presentational</code>组件内处理本地状态。
</section>

## Instructions
<section id='instructions'>
在<code>Presentational</code>组件中，先删除本地<code>state</code>中的<code>messages</code>属性，被删的 messages 将由 Redux 管理。接着，修改<code>submitMessage()</code>方法，使该方法从<code>this.props</code>那里分发<code>submitNewMessage()</code>；从本地<code>state</code>中传入当前消息输入作为参数。因本地状态删除了<code>messages</code>属性，所以在调用<code>this.setState()</code>时也要删除该属性。最后，修改<code>render()</code>方法，使其所映射的消息是从<code>props</code>接收的，而不是<code>state</code>
完成这些更改后，我们的应用会实现 Redux 管理应用的状态，但它继续运行着相同的功能。此示例还阐明了组件获得本地状态的方式，即在自己的状态中继续跟踪用户本地输入。由此可见，Redux 为 React 提供了很有用的状态管理框架。先前，你仅使用 React 的本地状态也实现了相同的结果，这在应付简单的应用时通常是可行的。但是，随着应用变得越来越大，越来越复杂，应用的状态管理也变得非常困难，Redux 就是为解决这样的问题而诞生的。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>AppWrapper</code>应该渲染该到页面。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); return mockedComponent.find('AppWrapper').length === 1; })());
  - text: <code>Presentational</code> 应该渲染到页面上.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); return mockedComponent.find('Presentational').length === 1; })());
  - text: <code>Presentational</code>组件应渲染<code>h2</code>、<code>input</code>、<code>button</code>、<code>ul</code>四个元素。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); const PresentationalComponent = mockedComponent.find('Presentational'); return ( PresentationalComponent.find('div').length === 1 && PresentationalComponent.find('h2').length === 1 && PresentationalComponent.find('button').length === 1 && PresentationalComponent.find('ul').length === 1 ); })());
  - text: <code>Presentational</code>组件应接收 Redux store 的<code>消息</code>属性。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); const PresentationalComponent = mockedComponent.find('Presentational'); const props = PresentationalComponent.props(); return Array.isArray(props.messages); })());
  - text: <code>Presentational</code>组件应接收创建 action 的函数<code>submitMessage</code>属性。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); const PresentationalComponent = mockedComponent.find('Presentational'); const props = PresentationalComponent.props(); return typeof props.submitNewMessage === 'function'; })());
  - text: <code>Presentational</code>组件的状态应包含一个初始化为空字符串的input属性。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); const PresentationalState = mockedComponent.find('Presentational').instance().state; return typeof PresentationalState.input === 'string' && Object.keys(PresentationalState).length === 1; })());
  - text: 键入<code>input</code>元素应更新<code>Presentational</code>组件的状态。
    testString: 'async () => { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); const testValue = ''__MOCK__INPUT__''; const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100)); const causeChange = (c, v) => c.find(''input'').simulate(''change'', { target: { value: v }}); let initialInput = mockedComponent.find(''Presentational'').find(''input''); const changed = () => { causeChange(mockedComponent, testValue); return waitForIt(() => mockedComponent )}; const updated = await changed(); const updatedInput = updated.find(''Presentational'').find(''input''); assert(initialInput.props().value === '''' && updatedInput.props().value === ''__MOCK__INPUT__''); }; '
  - text: 在<code>Presentational</code>组件上 dispatch <code>submitMessage</code>应更新 Redux store 并清除本地状态中的输入。
    testString: 'async () => { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100)); let beforeProps = mockedComponent.find(''Presentational'').props(); const testValue = ''__TEST__EVENT__INPUT__''; const causeChange = (c, v) => c.find(''input'').simulate(''change'', { target: { value: v }}); const changed = () => { causeChange(mockedComponent, testValue); return waitForIt(() => mockedComponent )}; const clickButton = () => { mockedComponent.find(''button'').simulate(''click''); return waitForIt(() => mockedComponent )}; const afterChange = await changed(); const afterChangeInput = afterChange.find(''input'').props().value; const afterClick = await clickButton(); const afterProps = mockedComponent.find(''Presentational'').props(); assert(beforeProps.messages.length === 0 && afterChangeInput === testValue && afterProps.messages.pop() === testValue && afterClick.find(''input'').props().value === ''''); }; '
  - text: <code>Presentational</code>组件应渲染 Redux store 中的<code>messages</code>
    testString: 'async () => { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100)); let beforeProps = mockedComponent.find(''Presentational'').props(); const testValue = ''__TEST__EVENT__INPUT__''; const causeChange = (c, v) => c.find(''input'').simulate(''change'', { target: { value: v }}); const changed = () => { causeChange(mockedComponent, testValue); return waitForIt(() => mockedComponent )}; const clickButton = () => { mockedComponent.find(''button'').simulate(''click''); return waitForIt(() => mockedComponent )}; const afterChange = await changed(); const afterChangeInput = afterChange.find(''input'').props().value; const afterClick = await clickButton(); const afterProps = mockedComponent.find(''Presentational'').props(); assert(beforeProps.messages.length === 0 && afterChangeInput === testValue && afterProps.messages.pop() === testValue && afterClick.find(''input'').props().value === '''' && afterClick.find(''ul'').childAt(0).text() === testValue); }; '

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);

// React:
const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

// 请在本行以下添加你的代码
class Presentational extends React.Component {
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
    this.setState({
      input: '',
      messages: this.state.messages.concat(this.state.input)
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
// 请在本行以上添加你的代码

const mapStateToProps = (state) => {
  return {messages: state}
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message))
    }
  }
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container/>
      </Provider>
    );
  }
};
```

</div>


### After Test
<div id='jsx-teardown'>

```js
ReactDOM.render(<AppWrapper />, document.getElementById('root'))
```

</div>

</section>

## Solution
<section id='solution'>


```js
// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);

// React:
const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

// Change code below this line
class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
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
    this.props.submitNewMessage(this.state.input);
    this.setState({
      input: ''
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
          {this.props.messages.map( (message, idx) => {
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
// Change code above this line

const mapStateToProps = (state) => {
  return {messages: state}
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message))
    }
  }
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container/>
      </Provider>
    );
  }
};
```

</section>
