---
id: 5a24c314108439a4d4036141
title: Початок роботи з React Redux
challengeType: 6
forumTopicId: 301430
dashedName: getting-started-with-react-redux
---

# --description--

Ця низка завдань показує те, як можна використовувати Redux з React. По-перше, ось огляд деяких ключових принципів кожної технології. React - це бібліотека, якій ви надаєте дані. Потім вона візуалізує перегляд у більш ефективний, передбачуваний спосіб. Redux - це система управління станом, яку ви можете використовувати для спрощення управління станом вашого застосунку. Зазвичай, у додатку React Redux, ви створюєте одне сховище Redux, яке керує станом усього застосунку. Ваші компоненти React підписуються лише на ті частини даних в сховищі, що мають відношення до їхньої ролі. Потім ви відправляєте дії безпосередньо від компонентів React, які потім запускають оновлення сховища.

Хоча компоненти React можуть локально керувати своїм станом, коли у вас є складний застосунок, зазвичай, краще зберігати стан застосунку в одному місці за допомогою Redux. Існують винятки, коли окремі компоненти можуть мати локальний стан, створений конкретно лише для них. Зрештою, через те, що Redux не створений для нестандартної роботи з React, вам потрібно використовувати пакет `react-redux`. Він надає вам можливість передавати Redux `state` та `dispatch` вашим компонентам React як `props`.

Перш за все, у декількох наступних завданнях ви створите простий компонент React, який дозволить вам вводити нові повідомлення. Вони додаються до масиву, що відображається в огляді. Це має бути хороший огляд того, що ви вивчили на уроках React. Далі ви створите сховище Redux та дії, які керують станом масиву повідомлень. Зрештою, ви використовуватимете `react-redux` для того, щоб з'єднати сховище Redux з вашим компонентом, таким чином додаючи локальний стан в сховище Redux.

# --instructions--

Почніть з компоненту `DisplayMessages`. Додайте конструктора до цього компонента та ініціалізуйте його за допомогою двох параметрів: `input`, це значення задається у порожньому рядку і `messages`, це значення задається у порожньому масиві.

# --hints--

Компонент `DisplayMessages` повинен відображати порожній `div` елемент.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages));
    return mockedComponent.find('div').text() === '';
  })()
);
```

Конструктор `DisplayMessages` повинен викликатися належним чином за допомогою `super`, при передачі до `props`.

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
