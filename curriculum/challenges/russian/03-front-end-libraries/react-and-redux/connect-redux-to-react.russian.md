---
id: 5a24c314108439a4d4036147
title: Connect Redux to React
challengeType: 6
isRequired: false
forumTopicId: 301426
localeTitle: Подключите Redux к действию
---

## Description
<section id='description'>
Теперь, когда вы написали функции <code>mapStateToProps()</code> и <code>mapDispatchToProps()</code> , вы можете использовать их для отображения <code>state</code> и <code>dispatch</code> в <code>props</code> одного из ваших компонентов React. Метод <code>connect</code> из React Redux может справиться с этой задачей. Этот метод принимает два необязательных аргумента: <code>mapStateToProps()</code> и <code>mapDispatchToProps()</code> . Они являются необязательными, потому что у вас может быть компонент, которому нужен только доступ к <code>state</code> но ему не нужно отправлять какие-либо действия или наоборот. Чтобы использовать этот метод, передайте функции в качестве аргументов и немедленно вызовите результат с вашим компонентом. Этот синтаксис немного необычен и выглядит так: <code>connect(mapStateToProps, mapDispatchToProps)(MyComponent)</code> <strong>Примечание.</strong> Если вы хотите опустить один из аргументов метода <code>connect</code> , вы передаете <code>null</code> на свое место.
</section>

## Instructions
<section id='instructions'>
Редактор кода имеет функции <code>mapStateToProps()</code> и <code>mapDispatchToProps()</code> и новый компонент React, называемый <code>Presentational</code> . Подключите этот компонент к Redux с помощью метода <code>connect</code> из глобального объекта <code>ReactRedux</code> и немедленно вызовите его на компоненте <code>Presentational</code> . Назначьте результат новой <code>const</code> называемой <code>ConnectedComponent</code> которая представляет подключенный компонент. Вот и все, теперь вы подключены к Redux! Попробуйте изменить либо из <code>connect</code> аргументов «s к <code>null</code> и наблюдать за результатами испытаний.
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

### After Tests
<div id='jsx-teardown'>

```jsx
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

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Presentational);
```

</section>
