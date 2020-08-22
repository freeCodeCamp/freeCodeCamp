---
id: 5a24c314108439a4d4036148
title: Connect Redux to the Messages App
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 将Redux连接到消息应用程序
---

## Description
<section id="description">现在您已了解如何使用<code>connect</code>将React连接到Redux，您可以将您学到的知识应用于处理消息的React组件。在上一课中，您连接到Redux的组件名为<code>Presentational</code> ，这不是任意的。该术语<i>通常</i>是指未直接连接到Redux的React组件。他们只负责UI的呈现，并根据他们收到的道具来执行此操作。相比之下，容器组件连接到Redux。这些通常负责将操作分派给商店，并且经常将商店状态作为道具传递给子组件。 </section>

## Instructions
<section id="instructions">到目前为止，代码编辑器包含了您在本节中编写的所有代码。唯一的变化是React组件被重命名为<code>Presentational</code> 。创建一个名为<code>Container</code>的常量中保存的新组件，该常量使用<code>connect</code>将<code>Presentational</code>组件连接到Redux。然后，在<code>AppWrapper</code> ，渲染React Redux <code>Provider</code>组件。将Redux <code>store</code> <code>Provider</code>作为道具传递，并将<code>Container</code>作为子项呈现。设置完所有内容后，您将再次看到应用程序呈现给页面的消息。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>AppWrapper</code>应该呈现给页面。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); return mockedComponent.find('AppWrapper').length === 1; })());
  - text: <code>Presentational</code>组件应呈现<code>h2</code> ， <code>input</code> ， <code>button</code>和<code>ul</code>元素。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); return mockedComponent.find('Presentational').length === 1; })());
  - text: <code>Presentational</code>组件应呈现<code>h2</code> ， <code>input</code> ， <code>button</code>和<code>ul</code>元素。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); const PresentationalComponent = mockedComponent.find('Presentational'); return ( PresentationalComponent.find('div').length === 1 && PresentationalComponent.find('h2').length === 1 && PresentationalComponent.find('button').length === 1 && PresentationalComponent.find('ul').length === 1 ); })());
  - text: <code>Presentational</code>组件应该从Redux商店接收<code>messages</code>作为道具。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); const PresentationalComponent = mockedComponent.find('Presentational'); const props = PresentationalComponent.props(); return Array.isArray(props.messages); })());
  - text: <code>Presentational</code>组件应该接收<code>submitMessage</code>操作创建者作为prop。
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
      input: ",
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
      input: ",
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


class AppWrapper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // complete the return statement:
    return (null);
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
