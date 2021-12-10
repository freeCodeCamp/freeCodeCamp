---
id: 5a24c314108439a4d403617b
title: Передача зворотного виклику в якості пропсів
challengeType: 6
forumTopicId: 301400
dashedName: pass-a-callback-as-props
---

# --description--

Можна передавати `state` у якості пропсів дочірнім компонентам, але ви необмежені у передачі даних. Також можна передати функції обробника або будь-який метод, який визначений у компоненті React, дочірньому компоненту. Саме таким чином, дочірнім компонентам надають дозвіл на взаємодію з їхніми батьківськими компонентами. Відбувається передача методів дочірньому елементу, як звичайному пропсу. Він отримує назву, а ви - доступ до назви цього методу у розділі `this.props` у дочірньому компоненті.

# --instructions--

У редакторі коду виділено три компоненти. Компонент `MyApp` є батьківським, що відображає дочірні компоненти `GetInput` та `RenderInput`. Додайте компонент `GetInput` до методу візуалізації у `MyApp`, а потім надайте йому пропс з назвою `input`, призначений для `inputValue` із `MyApp`'s `state`. Також створіть пропс під назвою `handleChange` і передайте йому обробника введення даних `handleChange`.

Далі, додайте `RenderInput` до методу візуалізації в `MyApp`, після цього створіть пропс під назвою `input` і передайте йому `inputValue` із `state`. Після завершення з'являється можливість вводити інформацію у поле `input` у компоненті `GetInput`, який потім викликає метод обробника у своєму батьківському компоненті за допомогою пропсів. Це оновлює вхідні дані у `state` батьківського компонента, які передаються в якості пропсів обом дочірнім елементам. Зверніть увагу, як передаються дані між компонентами і як єдиним джерелом достовірних даних залишається `state` батьківського компонента. Слід визнати, що цей приклад не є повністю правдивим, але він повинен слугувати ілюстрацією того, як дані та зворотні виклики можуть передаватися між компонентами React.

# --hints--

Компонент `MyApp` повинен відображатися.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyApp));
    return mockedComponent.find('MyApp').length === 1;
  })()
);
```

Компонент `GetInput` повинен відображатися.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyApp));
    return mockedComponent.find('GetInput').length === 1;
  })()
);
```

Компонент `RenderInput` повинен відображатися.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyApp));
    return mockedComponent.find('RenderInput').length === 1;
  })()
);
```

Компонент `GetInput` повинен отримувати властивість стану `MyApp` `inputValue` у якості пропсів і містити елемент `input`, який змінює стан `MyApp`.

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

Компонент `RenderInput` повинен отримувати властивість стану `MyApp` `inputValue` у якості пропсів.

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
