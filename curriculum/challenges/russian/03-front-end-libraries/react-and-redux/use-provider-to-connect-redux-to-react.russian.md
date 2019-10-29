---
id: 5a24c314108439a4d4036144
title: Use Provider to Connect Redux to React
challengeType: 6
isRequired: false
forumTopicId: 301435
localeTitle: Использовать Провайдер для подключения Redux к действию
---

## Description
<section id='description'>
В последней задаче вы создали хранилище Redux для обработки массива сообщений и создали действие для добавления новых сообщений. Следующим шагом будет предоставление доступа React к хранилищу Redux и действия, необходимые для отправки обновлений. React Redux предоставляет пакет <code>react-redux</code> для выполнения этих задач. React Redux предоставляет небольшой API с двумя ключевыми функциями: <code>Provider</code> и <code>connect</code> . Другая проблема <code>connect</code> . <code>Provider</code> - это оболочка из React Redux, которая обертывает ваше приложение React. Затем этот обертку позволяет вам получить доступ к функциям <code>store</code> Redux и функции <code>dispatch</code> во всем дереве компонентов. <code>Provider</code> берет два реквизита, магазин Redux и дочерние компоненты вашего приложения. Определение <code>Provider</code> для компонента приложения может выглядеть так: <blockquote> &lt;Магазин-провайдер = {store}&gt; <br> &lt;Приложение /&gt; <br> &lt;/ Provider&gt; </blockquote>
</section>

## Instructions
<section id='instructions'>
The code editor now shows all your Redux and React code from the past several challenges. It includes the Redux store, actions, and the <code>DisplayMessages</code> component. The only new piece is the <code>AppWrapper</code> component at the bottom. Use this top level component to render the <code>Provider</code> from <code>ReactRedux</code>, and pass the Redux store as a prop. Then render the <code>DisplayMessages</code> component as a child. Once you are finished, you should see your React component rendered to the page.
<strong>Note:</strong>&nbsp;React Redux is available as a global variable here, so you can access the Provider with dot notation. The code in the editor takes advantage of this and sets it to a constant <code>Provider</code> for you to use in the <code>AppWrapper</code> render method.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>AppWrapper</code> should render.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); return mockedComponent.find('AppWrapper').length === 1; })());
  - text: The <code>Provider</code> wrapper component should have a prop of <code>store</code> passed to it, equal to the Redux store.
    testString: getUserInput => assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); return getUserInput('index').replace(/\s/g,'').includes('<Providerstore={store}>'); })());
  - text: <code>DisplayMessages</code> should render as a child of <code>AppWrapper</code>.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); return mockedComponent.find('AppWrapper').find('DisplayMessages').length === 1; })());
  - text: The <code>DisplayMessages</code> component should render an h2, input, button, and <code>ul</code> element.
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
  // render the Provider here

  // change code above this line
};

```

</div>

### After Tests
<div id='jsx-teardown'>

```jsx
ReactDOM.render(<AppWrapper />, document.getElementById('root'))

```

</div>

</section>

## Solution
<section id='solution'>

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
