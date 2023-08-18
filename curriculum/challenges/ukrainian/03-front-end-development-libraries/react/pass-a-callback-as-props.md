---
id: 5a24c314108439a4d403617b
title: Передайте зворотний виклик як пропс
challengeType: 6
forumTopicId: 301400
dashedName: pass-a-callback-as-props
---

# --description--

Ви можете передати стан до дочірніх компонентів як пропс, але ви необмежені в передачі даних. Ви також можете передавати функції обробника або будь-який метод, визначений в компоненті React, до дочірнього компонента. Саме таким чином ви дозволяєте дочірнім компонентам взаємодіяти з їхніми батьківськими компонентами. Методи передають до дочірнього компонента так само, як і звичайні пропси. Йому призначено назву, а ви маєте доступ до цієї назви методу під `this.props` в дочірньому компоненті.

# --instructions--

У редакторі коду виділено три компоненти. Компонент `MyApp` є батьківським, який відтворюватиме дочірні компоненти `GetInput` та `RenderInput`. Додайте компонент `GetInput` до методу відтворення в `MyApp`, а потім передайте йому пропс під назвою `input`, призначений до значення `inputValue` зі стану `MyApp`. Також створіть пропс під назвою `handleChange` і передайте йому обробника введення даних `handleChange`.

Далі додайте `RenderInput` до методу відтворення в `MyApp`, потім створіть пропс під назвою `input` та передайте до нього `inputValue` зі стану. Після цього ви зможете писати в полі `input` в компоненті `GetInput`, що потім викликає метод обробника в батьківському компоненті через пропс. Це оновлює введені дані у стані батьківського компонента, які передаються як пропси обом дочірнім компонентам. Зверніть увагу, як між компонентами передаються дані, а єдиним джерелом істини залишається стан батьківського компонента. Варто визнати, що цей приклад не є повністю правдивим, але він повинен слугувати ілюстрацією того, як дані та зворотні виклики можуть передаватися між компонентами React.

# --hints--

Компонент `MyApp` має відтворюватись.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyApp));
    return mockedComponent.find('MyApp').length === 1;
  })()
);
```

Компонент `GetInput` має відтворюватись.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyApp));
    return mockedComponent.find('GetInput').length === 1;
  })()
);
```

Компонент `RenderInput` має відтворюватись.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyApp));
    return mockedComponent.find('RenderInput').length === 1;
  })()
);
```

Компонент `GetInput` має отримати властивість стану `inputValue` від `MyApp` як пропс та містити елемент `input`, який змінює стан `MyApp`.

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyApp));
  const state_1 = () => {
    mockedComponent.setState({ inputValue: '' });
    return waitForIt(() => mockedComponent.state());
  };
  const state_2 = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: 'TestInput' } });
    return waitForIt(() => mockedComponent.state());
  };
  const updated_1 = await state_1();
  const updated_2 = await state_2();
  assert(updated_1.inputValue === '' && updated_2.inputValue === 'TestInput');
};
```

Компонент `RenderInput` має отримати властивість стану `inputValue` від `MyApp` як пропс.

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyApp));
  const state_1 = () => {
    mockedComponent.setState({ inputValue: 'TestName' });
    return waitForIt(() => mockedComponent);
  };
  const updated_1 = await state_1();
  assert(updated_1.find('p').text().includes('TestName'));
};
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<MyApp />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
        { /* Change code below this line */ }

        { /* Change code above this line */ }
       </div>
    );
  }
};

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};
```

# --solutions--

```jsx
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
  this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
         <GetInput
           input={this.state.inputValue}
           handleChange={this.handleChange}/>
         <RenderInput
           input={this.state.inputValue}/>
       </div>
    );
  }
};

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};
```
