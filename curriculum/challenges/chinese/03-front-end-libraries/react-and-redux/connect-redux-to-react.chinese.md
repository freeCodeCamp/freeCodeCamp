---
id: 5a24c314108439a4d4036147
title: Connect Redux to React
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 将Redux连接到React
---

## Description
<section id="description">现在您已经编写了<code>mapStateToProps()</code>和<code>mapDispatchToProps()</code>函数，您可以使用它们将<code>state</code>和<code>dispatch</code>映射到您的某个React组件的<code>props</code> 。 React Redux的<code>connect</code>方法可以处理此任务。此方法采用两个可选参数： <code>mapStateToProps()</code>和<code>mapDispatchToProps()</code> 。它们是可选的，因为您可能拥有只需要访问<code>state</code>但不需要分派任何操作的组件，反之亦然。要使用此方法，请将函数作为参数传递，并立即使用组件调用结果。这种语法有点不寻常，看起来像： <code>connect(mapStateToProps, mapDispatchToProps)(MyComponent)</code> <strong>注意：</strong>如果要省略<code>connect</code>方法的其中一个参数，则在其位置传递<code>null</code> 。 </section>

## Instructions
<section id="instructions">代码编辑器具有<code>mapStateToProps()</code>和<code>mapDispatchToProps()</code>函数以及一个名为<code>Presentational</code>的新React组件。使用<code>ReactRedux</code>全局对象中的<code>connect</code>方法将此组件连接到Redux，并立即在<code>Presentational</code>组件上调用它。将结果分配给名为<code>ConnectedComponent</code>的新<code>const</code> ，该<code>const</code>表示连接的组件。就是这样，现在你已经连接到Redux了！尝试将<code>connect</code>的参数更改为<code>null</code>并观察测试结果。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Presentational</code>组件应该呈现。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); return mockedComponent.find('Presentational').length === 1; })());
  - text: <code>Presentational</code>组件应通过<code>connect</code>接收prop <code>messages</code> 。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); const props = mockedComponent.find('Presentational').props(); return props.messages === '__INITIAL__STATE__'; })());
  - text: <code>Presentational</code>组件应通过<code>connect</code>接收prop <code>submitNewMessage</code> 。
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
// change code below this line

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
