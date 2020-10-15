---
id: 5a24c314108439a4d4036148
challengeType: 6
forumTopicId: 301427
title: 将 Redux 连接到 Messages App
---

## Description
<section id='description'>
知道<code>connect</code>怎么实现 React 和 Redux 的连接后，我们可以在 React 组件中应用上面学到的内容。
在上一课，连接到 Redux 的组件命名为<code>Presentational</code>，这个命名不是任意的，这样的术语通常是指未直接连接到 Redux 的 React 组件，他们只负责执行接收 props 的函数来实现 UI 的呈现。与上一挑战相比，本挑战需要把容器组件连接到 Redux。这些组件通常负责把 actions 分派给 store，且经常给子组件传入 store state 属性。
</section>

## Instructions
<section id='instructions'>
到目前为止，我们的编辑器上已包含了整个章节的代码，唯一不同的是，React 组件被重新命名为<code>Presentational</code>，即展示层组件。创建一个新组件，保存在名为<code>Container</code>的常量中。这个常量用<code>connect</code>把<code>Presentational</code>组件和 Redux 连接起来。然后，在<code>AppWrapper</code>中渲染 React Redux 的<code>Provider</code>组件，给<code>Provider</code>传入 Redux<code>store</code>属性并渲染<code>Container</code>为子组件。完成这些，消息 app 应用会再次渲染页面。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>AppWrapper</code>应渲染该页面。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); return mockedComponent.find('AppWrapper').length === 1; })());
  - text: <code>Presentational</code>组件应渲染<code>h2</code>、<code>input</code>、<code>button</code>、<code>ul</code>四个元素。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); return mockedComponent.find('Presentational').length === 1; })());
  - text: <code>Presentational</code>组件应渲染<code>h2</code>、<code>input</code>、<code>button</code>、<code>ul</code>四个元素。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); const PresentationalComponent = mockedComponent.find('Presentational'); return ( PresentationalComponent.find('div').length === 1 && PresentationalComponent.find('h2').length === 1 && PresentationalComponent.find('button').length === 1 && PresentationalComponent.find('ul').length === 1 ); })());
  - text: <code>Presentational</code>组件应接收 Redux store 的<code>消息</code>属性。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); const PresentationalComponent = mockedComponent.find('Presentational'); const props = PresentationalComponent.props(); return Array.isArray(props.messages); })());
  - text: <code>Presentational</code>组件应接收创建 action 的函数<code>submitMessage</code>属性。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); const PresentationalComponent = mockedComponent.find('Presentational'); const props = PresentationalComponent.props(); return typeof props.submitNewMessage === 'function'; })());

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

// React-Redux:
const mapStateToProps = (state) => {
  return { messages: state }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (newMessage) => {
       dispatch(addMessage(newMessage))
    }
  }
};

const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

// 在此定义 Container 组件：


class AppWrapper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // 完成返回声明：
    return (null);
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

// React-Redux:
const mapStateToProps = (state) => {
  return { messages: state }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (newMessage) => {
       dispatch(addMessage(newMessage))
    }
  }
};

const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

// define the Container component here:
const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class AppWrapper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // complete the return statement:
    return (
      <Provider store={store}>
        <Container/>
      </Provider>
    );
  }
};
```
</section>
