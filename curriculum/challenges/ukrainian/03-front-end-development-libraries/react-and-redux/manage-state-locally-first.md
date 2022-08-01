---
id: 5a24c314108439a4d4036142
title: Спочатку керуйте станом локально
challengeType: 6
forumTopicId: 301431
dashedName: manage-state-locally-first
---

# --description--

Тут ви закінчите створення компонента `DisplayMessages`.

# --instructions--

Спершу в методі `render()` відобразіть елементи `input`, `button`, та `ul`. Коли елемент `input` змінюється, він повинен запускати метод `handleChange()`. Також елемент `input` повинен відображати значення `input`, що знаходиться в стані компоненту. При натисканні елемент `button` повинен запускати метод `submitMessage()`.

По-друге, запишіть ці два методи. Метод `handleChange()` повинен оновлювати `input` з тим, що друкує користувач. Метод `submitMessage()` повинен об'єднати поточне повідомлення (зберігається в `input`) та масив `messages` в локальному стані та очистити значення `input`.

Зрештою, використовуйте `ul`, щоб окреслити масив `messages` та відобразити його на екрані як список елементів `li`.

# --hints--

Компонент `DisplayMessages` повинен ініціалізуватися за допомогою початкового стану до `{ input: "", messages: [] }`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages));
    const initialState = mockedComponent.state();
    return (
      typeof initialState === 'object' &&
      initialState.input === '' &&
      initialState.messages.length === 0
    );
  })()
);
```

Компонент `DisplayMessages` повинен відображати `div`, що містить елементи `h2`, `button`, `ul`, та `li` elements.

```js
() => {
  const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages));
  const state = () => {
    mockedComponent.setState({ messages: ['__TEST__MESSAGE'] });
    return mockedComponent;
  };
  const updated = state();
  assert(
    updated.find('div').length === 1 &&
      updated.find('h2').length === 1 &&
      updated.find('button').length === 1 &&
      updated.find('ul').length === 1 &&
      updated.find('li').length > 0
  );
};
```

`.map` повинен використовуватися в масиві `messages`.

```js
assert(code.match(/this\.state\.messages\.map/g));
```

Елемент `input` повинен відображати значення `input` у локальному стані.

```js
() => {
  const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages));
  const causeChange = (c, v) =>
    c.find('input').simulate('change', { target: { value: v } });
  const testValue = '__TEST__EVENT__INPUT';
  const changed = () => {
    causeChange(mockedComponent, testValue);
    return mockedComponent;
  };
  const updated = changed();
  assert(updated.find('input').props().value === testValue);
};
```

Виклик методу `handleChange` повинен оновити значення стану `input` до поточного входу.

```js
() => {
  const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages));
  const causeChange = (c, v) =>
    c.find('input').simulate('change', { target: { value: v } });
  const initialState = mockedComponent.state();
  const testMessage = '__TEST__EVENT__MESSAGE__';
  const changed = () => {
    causeChange(mockedComponent, testMessage);
    return mockedComponent;
  };
  const afterInput = changed();
  assert(
    initialState.input === '' &&
      afterInput.state().input === '__TEST__EVENT__MESSAGE__'
  );
};
```

Натискання кнопки `Add message` повинно викликати метод `submitMessage`, який повинен додати поточний `input` до масиву `messages`.

```js
() => {
  const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages));
  const causeChange = (c, v) =>
    c.find('input').simulate('change', { target: { value: v } });
  const initialState = mockedComponent.state();
  const testMessage_1 = '__FIRST__MESSAGE__';
  const firstChange = () => {
    causeChange(mockedComponent, testMessage_1);
    return mockedComponent;
  };
  const firstResult = firstChange();
  const firstSubmit = () => {
    mockedComponent.find('button').simulate('click');
    return mockedComponent;
  };
  const afterSubmit_1 = firstSubmit();
  const submitState_1 = afterSubmit_1.state();
  const testMessage_2 = '__SECOND__MESSAGE__';
  const secondChange = () => {
    causeChange(mockedComponent, testMessage_2);
    return mockedComponent;
  };
  const secondResult = secondChange();
  const secondSubmit = () => {
    mockedComponent.find('button').simulate('click');
    return mockedComponent;
  };
  const afterSubmit_2 = secondSubmit();
  const submitState_2 = afterSubmit_2.state();
  assert(
    initialState.messages.length === 0 &&
      submitState_1.messages.length === 1 &&
      submitState_2.messages.length === 2 &&
      submitState_2.messages[1] === testMessage_2
  );
};
```

Метод `submitMessage` повинен очистити поточне введення.

```js
() => {
  const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages));
  const causeChange = (c, v) =>
    c.find('input').simulate('change', { target: { value: v } });
  const initialState = mockedComponent.state();
  const testMessage = '__FIRST__MESSAGE__';
  const firstChange = () => {
    causeChange(mockedComponent, testMessage);
    return mockedComponent;
  };
  const firstResult = firstChange();
  const firstState = firstResult.state();
  const firstSubmit = () => {
    mockedComponent.find('button').simulate('click');
    return mockedComponent;
  };
  const afterSubmit = firstSubmit();
  const submitState = afterSubmit.state();
  assert(firstState.input === testMessage && submitState.input === '');
};
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<DisplayMessages />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
  }
  // Add handleChange() and submitMessage() methods here

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* Render an input, button, and ul below this line */ }

        { /* Change code above this line */ }
      </div>
    );
  }
};
```

# --solutions--

```jsx
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
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: '',
        messages: state.messages.concat(currentMessage)
      };  
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
```
