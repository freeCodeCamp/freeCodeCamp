---
id: 5a24c314108439a4d4036144
title: Use Provider to Connect Redux to React
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Использовать Провайдер для подключения Redux к действию
---

## Description
<section id="description"> В последней задаче вы создали хранилище Redux для обработки массива сообщений и создали действие для добавления новых сообщений. Следующим шагом будет предоставление доступа React к хранилищу Redux и действия, необходимые для отправки обновлений. React Redux предоставляет пакет <code>react-redux</code> для выполнения этих задач. React Redux предоставляет небольшой API с двумя ключевыми функциями: <code>Provider</code> и <code>connect</code> . Другая проблема <code>connect</code> . <code>Provider</code> - это оболочка из React Redux, которая обертывает ваше приложение React. Затем этот обертку позволяет вам получить доступ к функциям <code>store</code> Redux и функции <code>dispatch</code> во всем дереве компонентов. <code>Provider</code> берет два реквизита, магазин Redux и дочерние компоненты вашего приложения. Определение <code>Provider</code> для компонента приложения может выглядеть так: <blockquote> &lt;Магазин-провайдер = {store}&gt; <br> &lt;Приложение /&gt; <br> &lt;/ Provider&gt; </blockquote></section>

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); return mockedComponent.find("AppWrapper").length === 1; })(), "The <code>AppWrapper</code> should render.");'
  - text: 'Компонент обертки <code>Provider</code> должен иметь пропущенное <code>store</code> , равное хранилищу Redux.'
    testString: 'getUserInput => assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); return getUserInput("index").replace(/\s/g,"").includes("<Providerstore={store}>"); })(), "The <code>Provider</code> wrapper component should have a prop of <code>store</code> passed to it, equal to the Redux store.");'
  - text: <code>DisplayMessages</code> должен отображаться как ребенок <code>AppWrapper</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); return mockedComponent.find("AppWrapper").find("DisplayMessages").length === 1; })(), "<code>DisplayMessages</code> should render as a child of <code>AppWrapper</code>.");'
  - text: ''
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); return mockedComponent.find("div").length === 1 && mockedComponent.find("h2").length === 1 && mockedComponent.find("button").length === 1 && mockedComponent.find("ul").length === 1; })(), "The <code>DisplayMessages</code> component should render an h2, input, button, and <code>ul</code> element.");'

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
</section>
