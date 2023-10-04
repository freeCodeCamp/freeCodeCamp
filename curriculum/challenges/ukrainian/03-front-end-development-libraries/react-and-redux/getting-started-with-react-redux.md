---
id: 5a24c314108439a4d4036141
title: Початок роботи з React Redux
challengeType: 6
forumTopicId: 301430
dashedName: getting-started-with-react-redux
---

# --description--

У цьому розділі завдань ви дізнаєтесь, як використовувати Redux з React. Спочатку розглянемо деякі ключові принципи кожної технології. React — це бібліотека, якій ви надаєте дані, а потім вона відтворює їх в ефективний та передбачуваний спосіб. Redux — це фреймворк управління станом, який використовують, щоб спростити управління станом застосунку. Зазвичай, в застосунку React Redux ви створюєте сховище Redux, яке керує станом всього застосунку. Компоненти React підписуються лише на ті частини даних в сховищі, які мають відношення до їхньої ролі. Потім ви відправляєте дії безпосередньо від компонентів React, що згодом активує оновлення сховища.

Хоча компоненти React можуть керувати своїм станом локально, але якщо у вас складний застосунок, то краще зберігати стан застосунку в одному місці за допомогою Redux. Існують винятки, коли окремі компоненти можуть мати локальний стан, створений конкретно лише для них. Зрештою, Redux не створений для роботи з React з коробки, тому вам потрібно використовувати пакет `react-redux`. Він дає можливість передавати стан Redux та відправляти їх до компонентів React як пропси.

У декількох наступних завданнях ви створите простий компонент React, який дозволяє вводити нові текстові повідомлення. Вони додаються до масиву, що відображається в огляді. Це має бути хороший огляд того, що ви вивчили на уроках React. Далі ви створите сховище Redux та дії, які керують станом масиву повідомлень. Вкінці ви використаєте `react-redux`, щоб з’єднати сховище Redux з компонентом, таким чином додаючи локальний стан в сховище Redux.

# --instructions--

Почніть з компоненту `DisplayMessages`. Додайте конструктор до цього компонента та ініціалізуйте його станом, який має дві властивості: `input` зі значенням порожнього рядка та `messages` зі значенням порожнього масиву.

# --hints--

Компонент `DisplayMessages` має відтворити порожній елемент `div`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages));
    return mockedComponent.find('div').text() === '';
  })()
);
```

Конструктор `DisplayMessages` має викликатись за допомогою `super`, передаючи `props`.

```js
(getUserInput) =>
  assert(
    (function () {
      const noWhiteSpace = __helpers.removeWhiteSpace(getUserInput('index'));
      return (
        noWhiteSpace.includes('constructor(props)') &&
        noWhiteSpace.includes('super(props')
      );
    })()
  );
```

Компонент `DisplayMessages` повинен мати початковий стан, який дорівнює `{input: "", messages: []}`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages));
    const initialState = mockedComponent.state();
    return (
      typeof initialState === 'object' &&
      initialState.input === '' &&
      Array.isArray(initialState.messages) &&
      initialState.messages.length === 0
    );
  })()
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<DisplayMessages />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class DisplayMessages extends React.Component {
  // Change code below this line

  // Change code above this line
  render() {
    return <div />
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
  }
  render() {
    return <div/>
  }
};
```
