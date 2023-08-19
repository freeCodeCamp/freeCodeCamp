---
id: 5a24c314108439a4d403617d
title: Використайте метод життєвого циклу componentDidMount
challengeType: 6
forumTopicId: 301422
dashedName: use-the-lifecycle-method-componentdidmount
---

# --description--

Більшості веброзробників в якийсь момент потрібно викликати кінцеву точку API, щоб отримати дані. Якщо ви працюєте в React, потрібно знати, як виконати цю дію.

У випадку з React, виклики API або будь-які виклики до сервера найкраще розміщувати в методі життєвого циклу `componentDidMount()`. Цей метод викликають після того, як компонент встановлено в DOM. Будь-які виклики до `setState()` активують повторне відтворення компонента. Коли ви викликаєте API у цьому методі та встановлюєте стан відповідно до повернених даних API, цей метод автоматично запустить оновлення, як тільки ви отримаєте дані.

# --instructions--

В `componentDidMount()` є імітація виклику API. Після 2,5 секунд він встановлює стан, щоб симулювати виклик сервера для отримання даних. Цей приклад запитує кількість поточних активних користувачів сайту. У методі відтворення відтворіть значення `activeUsers` в `h1` після тексту `Active Users:`. Подивіться, що відбувається в попередньому перегляді та спробуйте змінити тайм-аут, щоб побачити різні ефекти.

# --hints--

`MyComponent` має відтворити елемент `div`, що охоплює тег `h1`.

```js
assert(
  (() => {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return (
      mockedComponent.find('div').length === 1 &&
      mockedComponent.find('h1').length === 1
    );
  })()
);
```

Стан компонента має бути оновлено за допомогою функції тайм-ауту в `componentDidMount`.

```js
assert(
  (() => {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return new RegExp('setTimeout(.|\n)+setState(.|\n)+activeUsers').test(
      String(mockedComponent.instance().componentDidMount)
    );
  })()
);
```

Тег `h1` має відтворити значення `activeUsers` зі стану `MyComponent`.

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
  const first = () => {
    mockedComponent.setState({ activeUsers: 1237 });
    return mockedComponent.find('h1').text();
  };
  const second = () => {
    mockedComponent.setState({ activeUsers: 1000 });
    return mockedComponent.find('h1').text();
  };
  assert(new RegExp('1237').test(first()) && new RegExp('1000').test(second()));
})();
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<MyComponent />, document.getElementById('root'));
```

## --seed-contents--

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeUsers: 1273
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        {/* Change code below this line */}
        <h1>Active Users: </h1>
        {/* Change code above this line */}
      </div>
    );
  }
}
```

# --solutions--

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeUsers: 1273
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        <h1>Active Users: {this.state.activeUsers}</h1>
      </div>
    );
  }
}
```
