---
id: 5a24c314108439a4d403617e
title: Додати слухачів події
challengeType: 6
forumTopicId: 301377
dashedName: add-event-listeners
---

# --description--

Метод `componentDidMount()` також є найкращим місцем для додавання усіх слухачів події, які вам необхідні для конкретної функціональності. React надає систему синтетичних подій, яка охоплює систему початкової події, наявної у браузерах. Це означає, що синтетична система подій поводиться саме так, незалежно від браузера користувача, навіть якщо початкові події можуть поводитись по-різному між різними браузерами.

Ви вже використовуєте деякі з цих синтетичних обробників подій, на приклад `onClick()`. Система синтетичної події React є зручною для більшості взаємодій, якими ви зможете керувати у DOM елементах. Однак, якщо ви хочете прикріпити обробник подій до документа або об'єктів вікна, ви повинні зробити це напряму.

# --instructions--

Прикріпіть слухача подій у метод `componentDidMount()` для `keydown` подій і отримайте ці події, здійснивши зворотній виклик `handleKeyPress()`. Ви можете використовувати `document.addEventListener()`, який приймає подію (в лапках), в якості першого аргументу і зворотній виклик у якості другого.

Потім у `componentWillUnmount()` видаліть цього слухача подій. Ви можете передати ті ж аргументи до `document.removeEventListener()`. Хорошою практикою для використання цього методу життєвого циклу є очистка компонентів React перед тим, як вони будуть розмонтовані та знищені. Видалення слухачів подій є прикладом однієї з таких дій очистки.

# --hints--

`MyComponent` повинен відображати `div` елемент, який обгортає тег `h1`.

```js
assert(
  (() => {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return mockedComponent.find('div').children().find('h1').length === 1;
  })()
);
```

`keydown` слухач повинен бути підключений до документу у `componentDidMount`.

```js
assert(
  (() => {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    const didMountString = mockedComponent
      .instance()
      .componentDidMount.toString();
    return new RegExp(
      'document.addEventListener(.|\n|\r)+keydown(.|\n|\r)+this.handleKeyPress'
    ).test(didMountString);
  })()
);
```

`keydown` слухач повинен бути видалений з документу у `componentWillUnmount`.

```js
assert(
  (() => {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    const willUnmountString = mockedComponent
      .instance()
      .componentWillUnmount.toString();
    return new RegExp(
      'document.removeEventListener(.|\n|\r)+keydown(.|\n|\r)+this.handleKeyPress'
    ).test(willUnmountString);
  })()
);
```

Як тільки компонент змонтовано, натискання клавіші `enter` змусить його оновитися та відобразити тег `h1`.

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
  const beforeState = mockedComponent.state('message');
  const beforeText = mockedComponent.find('h1').text();
  const pressEnterKey = () => {
    mockedComponent.instance().handleKeyPress({ keyCode: 13 });
    return waitForIt(() => {
      mockedComponent.update();
      return {
        state: mockedComponent.state('message'),
        text: mockedComponent.find('h1').text()
      };
    });
  };
  const afterKeyPress = await pressEnterKey();
  assert(
    beforeState !== afterKeyPress.state && beforeText !== afterKeyPress.text
  );
};
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<MyComponent />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  // Change code below this line
  componentDidMount() {

  }
  componentWillUnmount() {

  }
  // Change code above this line
  handleEnter() {
    this.setState((state) => ({
      message: state.message + 'You pressed the enter key! '
    }));
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
};
```

# --solutions--

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleEnter = this.handleEnter.bind(this);  }
  componentDidMount() {
    // Change code below this line
    document.addEventListener('keydown', this.handleKeyPress);
    // Change code above this line
  }
  componentWillUnmount() {
    // Change code below this line
    document.removeEventListener('keydown', this.handleKeyPress);
    // Change code above this line
  }
  handleEnter() {
    this.setState((state) => ({
      message: state.message + 'You pressed the enter key! '
    }));
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
};
```
