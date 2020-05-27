---
id: 5a24c314108439a4d4036147
title: Connect Redux to React
challengeType: 6
isHidden: false
isRequired: false
forumTopicId: 301426
---

## Description
<section id='description'>
Now that you've written both the <code>mapStateToProps()</code> and the <code>mapDispatchToProps()</code> functions, you can use them to map <code>state</code> and <code>dispatch</code> to the <code>props</code> of one of your React components. The <code>connect</code> method from React Redux can handle this task. This method takes two optional arguments, <code>mapStateToProps()</code> and <code>mapDispatchToProps()</code>. They are optional because you may have a component that only needs access to <code>state</code> but doesn't need to dispatch any actions, or vice versa.
To use this method, pass in the functions as arguments, and immediately call the result with your component. This syntax is a little unusual and looks like:
<code>connect(mapStateToProps, mapDispatchToProps)(MyComponent)</code>
<strong>Note:</strong>&nbsp;If you want to omit one of the arguments to the <code>connect</code> method, you pass <code>null</code> in its place.
</section>

## Instructions
<section id='instructions'>
The code editor has the <code>mapStateToProps()</code> and <code>mapDispatchToProps()</code> functions and a new React component called <code>Presentational</code>. Connect this component to Redux with the <code>connect</code> method from the <code>ReactRedux</code> global object, and call it immediately on the <code>Presentational</code> component. Assign the result to a new <code>const</code> called <code>ConnectedComponent</code> that represents the connected component. That's it, now you're connected to Redux! Try changing either of <code>connect</code>'s arguments to <code>null</code> and observe the test results.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>Presentational</code> component should render.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); return mockedComponent.find('Presentational').length === 1; })());
  - text: The <code>Presentational</code> component should receive a prop <code>messages</code> via <code>connect</code>.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); const props = mockedComponent.find('Presentational').props(); return props.messages === '__INITIAL__STATE__'; })());
  - text: The <code>Presentational</code> component should receive a prop <code>submitNewMessage</code> via <code>connect</code>.
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
