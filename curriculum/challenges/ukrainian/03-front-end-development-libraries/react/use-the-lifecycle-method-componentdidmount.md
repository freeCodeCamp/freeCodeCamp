---
id: 5a24c314108439a4d403617d
title: Використання методу componentDidMount
challengeType: 6
forumTopicId: 301422
dashedName: use-the-lifecycle-method-componentdidmount
---

# --description--

Більшість веб-розробників в якийсь момент мають викликати кінцеву точку API, щоб отримати дані. Якщо ви працюєте у React, потрібно розуміти як виконати цю дію.

Найкращим рішенням буде розмістити виклик API, або будь-які інші виклики направлені до сервера у методі життєвого циклу `componentDidMount()`. Цей метод викликають після того, як компонент встановлено в DOM. Будь-які виклики `setState()` активують ререндер вашого компонента. Коли ви викликаєте API у цьому методі й встановлюєте стан відповідно до вихідних API даних, цей метод автоматично запустить оновлення.

# --instructions--

В `componentDidMount()` є імітація виклику API. Через 2.5 секунди він симулює виклик до сервера для отримання даних. У цьому прикладі йде запит на кількість поточних активних користувачів сайту. У рендер методі покажіть значення `activeUsers` у `h1` після тексту `Active Users:`. Подивіться, що відбувається при попередньому перегляді та спробуйте змінити таймаут, щоб побачити різні ефекти.

# --hints--

`MyComponent` має рендерити елемент `div`, що охоплює `h1` тег.

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

Стан компонентів має оновлюватися функцією таймаут у `componentDidMount`.

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

Тег `h1` має рендерити значення `activeUsers` зі стану `MyComponent`.

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
