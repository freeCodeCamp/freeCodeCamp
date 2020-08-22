---
id: 5a24c314108439a4d4036144
title: Use Provider to Connect Redux to React
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 使用Provider将Redux连接到React
---

## Description
<section id="description">在上一个挑战中，您创建了一个Redux存储来处理messages数组并创建了一个用于添加新消息的操作。下一步是提供对Redux存储的React访问以及分派更新所需的操作。 React Redux提供了<code>react-redux</code>包来帮助完成这些任务。 React Redux提供了一个小API，它有两个关键特性： <code>Provider</code>和<code>connect</code> 。另一个挑战包括<code>connect</code> 。 <code>Provider</code>是React Redux的一个包装组件，它包装了你的React应用程序。然后，此包装器允许您访问整个组件树中的Redux <code>store</code>和<code>dispatch</code>功能。 <code>Provider</code>需要两个道具，Redux商店和应用程序的子组件。为App组件定义<code>Provider</code>可能如下所示： <blockquote> &lt;Provider store = {store}&gt; <br> &lt;应用/&gt; <br> &lt;/提供商&gt; </blockquote></section>

## Instructions
<section id="instructions">代码编辑器现在显示过去几个挑战中的所有Redux和React代码。它包括Redux存储，操作和<code>DisplayMessages</code>组件。唯一的新部分是底部的<code>AppWrapper</code>组件。使用此顶级组件从<code>ReactRedux</code>呈现<code>Provider</code> ，并将Redux存储作为prop传递。然后将<code>DisplayMessages</code>组件渲染为子级。完成后，您应该看到React组件呈现给页面。 <strong>注意：</strong> React Redux在此处可用作全局变量，因此您可以使用点表示法访问提供程序。编辑器中的代码利用了这一点并将其设置为一个常量<code>Provider</code>供您在<code>AppWrapper</code>渲染方法中使用。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>AppWrapper</code>应该渲染。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); return mockedComponent.find('AppWrapper').length === 1; })());
  - text: <code>Provider</code>包装器组件应该具有传递给它的<code>store</code>支柱，等于Redux存储。
    testString: getUserInput => assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); return getUserInput('index').replace(/\s/g,'').includes('<Providerstore={store}>'); })());
  - text: <code>DisplayMessages</code>应该呈现为<code>AppWrapper</code> 。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); return mockedComponent.find('AppWrapper').find('DisplayMessages').length === 1; })());
  - text: <code>DisplayMessages</code>组件应该呈现h2，input，button和<code>ul</code>元素。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); return mockedComponent.find('div').length === 1 && mockedComponent.find('h2').length === 1 && mockedComponent.find('button').length === 1 && mockedComponent.find('ul').length === 1; })());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
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

const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {
  // render the Provider here

  // change code above this line
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
