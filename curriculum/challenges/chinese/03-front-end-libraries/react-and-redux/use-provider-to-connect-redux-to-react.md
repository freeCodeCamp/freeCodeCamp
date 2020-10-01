---
id: 5a24c314108439a4d4036144
challengeType: 6
forumTopicId: 301435
title: 使用 Provider 连接 Redux 和 React
---

## Description
<section id='description'>
在上一挑战中，你创建了 Redux store 和 action，分别用于处理消息数组和添加新消息。下一步要为 React 提供访问 Redux store 及发起更新所需的 actions。<code>react-redux</code>包可帮助我们完成这些任务。
React Redux 提供的 API 有两个关键的功能：<code>Provider</code>和<code>connect</code>。你会在另一个挑战中学<code>connect</code>。<code>Provider</code>是 React Redux 包装 React 应用的 wrapper 组件，它允许你访问整个组件树中的 Redux<code>store</code>及<code>dispatch（分发）</code>方法。<code>Provider</code>需要两个 props：Redux store 和 APP 应用的子组件。用于 APP 组件的<code>Provider</code>可这样定义：

```jsx
<Provider store={store}>
  <App/>
</Provider>
```

</section>

## Instructions
<section id='instructions'>
此时，编辑器上显示的是过去几个挑战中所有代码，包括 Redux store、actions、<code>DisplayMessages</code>组件。新出现的代码是底部的<code>AppWrapper</code>组件，这个顶级组件可用于渲染<code>ReactRedux</code>的<code>Provider</code>，并把 Redux 的 store 作为 props 传入。接着，渲染<code>DisplayMessages</code>为子组件。完成这些任务后，你会看到 React 组件渲染到页面上。
<strong>注意：</strong>&nbsp;React Redux 在此可作全局变量，因此你可通过点号表示法访问 Provider。利用这一点，编辑器上的代码把<code>Provider</code>设置为常量，便于你在<code>AppWrapper</code>渲染方法中使用。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>AppWrapper</code>应渲染。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); return mockedComponent.find('AppWrapper').length === 1; })());
  - text: <code>Provider</code>组件应传入相当于 Redux store 的<code>store</code>参数。
    testString: getUserInput => assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); return getUserInput('index').replace(/\s/g,'').includes('<Providerstore={store}>'); })());
  - text: <code>DisplayMessages</code>应渲染为<code>AppWrapper</code>的子组件。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); return mockedComponent.find('AppWrapper').find('DisplayMessages').length === 1; })());
  - text: <code>DisplayMessages</code>组件应渲染 h2、input、button、<code>ul</code>四个元素。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); return mockedComponent.find('div').length === 1 && mockedComponent.find('h2').length === 1 && mockedComponent.find('button').length === 1 && mockedComponent.find('ul').length === 1; })());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
// Redux 代码：
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message
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

// React 代码：

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

const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {
  // 在此渲染 Provider

  // 请在本行以上添加你的代码
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
// Redux Code:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message
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

// React Code:

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

const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {
  // change code below this line
  render() {
    return (
      <Provider store = {store}>
        <DisplayMessages/>
      </Provider>
    );
  }
  // change code above this line
};
```
</section>
