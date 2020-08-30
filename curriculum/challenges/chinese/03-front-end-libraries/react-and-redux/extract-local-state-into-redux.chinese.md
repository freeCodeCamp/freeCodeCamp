---
id: 5a24c314108439a4d4036149
title: Extract Local State into Redux
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 将本地状态提取到Redux
---

## Description
<section id="description">你几乎完成！回想一下，您编写了所有Redux代码，以便Redux可以控制React消息应用程序的状态管理。现在Redux已连接，您需要从<code>Presentational</code>组件中提取状态管理并进入Redux。目前，您已连接Redux，但您正在<code>Presentational</code>组件中本地处理状态。 </section>

## Instructions
<section id="instructions">在<code>Presentational</code>组件中，首先，删除本地<code>state</code>中的<code>messages</code>属性。这些消息将由Redux管理。接下来，修改<code>submitMessage()</code>方法，以便从<code>this.props</code>调度<code>submitNewMessage()</code> ，并将当前消息输入作为参数传入本地<code>state</code> 。因为你删除<code>messages</code>从本地状态，删除<code>messages</code>从调用属性<code>this.setState()</code>在这里。最后，修改<code>render()</code>方法，使其映射到从<code>props</code>而不是<code>state</code>接收的消息。一旦做出这些更改，除了Redux管理状态之外，应用程序将继续运行相同的功能。这个例子也说明组件可以如何具有本地<code>state</code> ：你的组件还是本地跟踪用户输入自己的<code>state</code> 。您可以看到Redux如何在React之上提供有用的状态管理框架。您最初仅使用React的本地状态获得了相同的结果，这通常可以通过简单的应用程序实现。但是，随着您的应用程序变得越来越大，越来越复杂，您的状态管理也是如此，这就是Redux解决的问题。 </section>

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
  - text: <code>Presentational</code>组件的状态应包含一个属性<code>input</code> ，该属性初始化为空字符串。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); const PresentationalState = mockedComponent.find('Presentational').instance().state; return typeof PresentationalState.input === 'string' && Object.keys(PresentationalState).length === 1; })());
  - text: 输入<code>input</code>元素应该更新<code>Presentational</code>组件的状态。
    testString: 'async () => { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); const testValue = ''__MOCK__INPUT__''; const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100)); const causeChange = (c, v) => c.find(''input'').simulate(''change'', { target: { value: v }}); let initialInput = mockedComponent.find(''Presentational'').find(''input''); const changed = () => { causeChange(mockedComponent, testValue); return waitForIt(() => mockedComponent )}; const updated = await changed(); const updatedInput = updated.find(''Presentational'').find(''input''); assert(initialInput.props().value === '''' && updatedInput.props().value === ''__MOCK__INPUT__''); }; '
  - text: 在<code>Presentational</code>组件上调度<code>submitMessage</code>应更新Redux存储并清除本地状态的输入。
    testString: 'async () => { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100)); let beforeProps = mockedComponent.find(''Presentational'').props(); const testValue = ''__TEST__EVENT__INPUT__''; const causeChange = (c, v) => c.find(''input'').simulate(''change'', { target: { value: v }}); const changed = () => { causeChange(mockedComponent, testValue); return waitForIt(() => mockedComponent )}; const clickButton = () => { mockedComponent.find(''button'').simulate(''click''); return waitForIt(() => mockedComponent )}; const afterChange = await changed(); const afterChangeInput = afterChange.find(''input'').props().value; const afterClick = await clickButton(); const afterProps = mockedComponent.find(''Presentational'').props(); assert(beforeProps.messages.length === 0 && afterChangeInput === testValue && afterProps.messages.pop() === testValue && afterClick.find(''input'').props().value === ''''); }; '
  - text: <code>Presentational</code>组件应该呈现来自Redux存储的<code>messages</code> 。
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

// Change code below this line
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
    this.setState({
      input: ",
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
