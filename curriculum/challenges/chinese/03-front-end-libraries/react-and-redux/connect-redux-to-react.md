---
id: 5a24c314108439a4d4036147
challengeType: 6
forumTopicId: 301426
title: 连接 Redux 和 React
---

## Description
<section id='description'>
既然写了<code>mapStateToProps()</code>、<code>mapDispatchToProps()</code>两个函数，现在你可以用它们来把<code>state</code>和<code>dispatch</code>映射到 React 组件的<code>props</code>了。React Redux 的<code>connect</code>方法可以完成这个任务。此方法有<code>mapStateToProps()</code>、<code>mapDispatchToProps()</code>两个可选参数，它们是可选的，原因是你的组件可能仅需要访问<code>状态</code>但不需要分发任何 actions，反之亦然。
为了使用此方法，需要传入函数参数并在调用时传入组件。这种语法有些不寻常，如下所示：
<code>connect(mapStateToProps, mapDispatchToProps)(MyComponent)</code>
<strong>注意：</strong>&nbsp;如果要省略<code>connect</code>方法中的某个参数，则应当用<code>null</code>替换这个参数。
</section>

## Instructions
<section id='instructions'>
在编辑器上有两个函数：<code>mapStateToProps()</code>、<code>mapDispatchToProps()</code>，还有一个叫<code>Presentational</code>的 React 组件。用<code>ReactRedux</code>全局对象中的<code>connect</code>方法将此组件连接到 Redux，并立即在<code>Presentational</code>组件中调用，把结果赋值给一个名为<code>ConnectedComponent</code>的代表已连接组件的新常量。大功告成！你已成功把 React 连接到 Redux！尝试更改任何一个<code>connect</code>参数为<code>null</code>并观察测试结果。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应渲染<code>Presentational</code>组件。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); return mockedComponent.find('Presentational').length === 1; })());
  - text: <code>Presentational</code>组件应通过<code>connect</code>接收一个<code>messages</code>属性。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); const props = mockedComponent.find('Presentational').props(); return props.messages === '__INITIAL__STATE__'; })());
  - text: <code>Presentational</code>组件应通过<code>connect</code>接收一个<code>submitNewMessage</code>属性。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); const props = mockedComponent.find('Presentational').props(); return typeof props.submitNewMessage === 'function'; })());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

const mapStateToProps = (state) => {
  return {
    messages: state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message));
    }
  }
};

class Presentational extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h3>This is a Presentational Component</h3>
  }
};

const connect = ReactRedux.connect;
// 请在本行以下添加你的代码

```

</div>


### After Test
<div id='jsx-teardown'>

```js

const store = Redux.createStore(
  (state = '__INITIAL__STATE__', action) => state
);
class AppWrapper extends React.Component {
  render() {
    return (
      <ReactRedux.Provider store = {store}>
        <ConnectedComponent/>
      </ReactRedux.Provider>
    );
  }
};
ReactDOM.render(<AppWrapper />, document.getElementById('root'))
```

</div>

</section>

## Solution
<section id='solution'>


```js
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

const mapStateToProps = (state) => {
  return {
    messages: state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message));
    }
  }
};

class Presentational extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h3>This is a Presentational Component</h3>
  }
};

const connect = ReactRedux.connect;
// change code below this line

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Presentational);

```

</section>
