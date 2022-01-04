---
id: 5a24c314108439a4d4036166
title: Створення компонентів React
challengeType: 6
forumTopicId: 301381
dashedName: compose-react-components
---

# --description--

Оскільки завдання продовжують використовувати складніші композиції з компонентами React та JSX, слід зазначити один важливий момент. Візуалізація компонентів класу ES6 в інших компонентах нічим не відрізняється від візуалізації простих компонентів, які використовувалися в останніх кількох завданнях. Можна відтворювати елементи JSX, прості функціональні компоненти та компоненти класу ES6 в рамках інших компонентів.

# --instructions--

У редакторі коду компонент `TypesOfFood` вже відображає компонент з назвою `Vegetables`. Також, в останньому завданні є компонент `Fruits`.

Створіть два компоненти всередині `Fruits`: спочатку - `NonCitrus`, потім - `Citrus`. Обидва ці компоненти доступні у налаштуваннях за замовчуванням. Далі, додайте компонент класу `Fruits` до компонента `TypesOfFood` під заголовком `h1` та над `Vegetables`. У результаті отримуємо низку вкладених компонентів, яка використовує два різних типи компонентів.

# --hints--

Компонент `TypesOfFood` повинен показувати одинарний елемент `div`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood));
    return mockedComponent.children().type() === 'div';
  })()
);
```

Компонент `TypesOfFood` повинен показувати компонент `Fruits`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood));
    return mockedComponent.children().childAt(1).name() === 'Fruits';
  })()
);
```

Компонент `Fruits` повинен показувати компоненти `NonCitrus` та `Citrus`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood));
    return (
      mockedComponent.find('Fruits').children().find('NonCitrus').length ===
        1 &&
      mockedComponent.find('Fruits').children().find('Citrus').length === 1
    );
  })()
);
```

Компонент `TypesOfFood` повинен показувати компонент `Vegetables` нижче від компонента `Fruits`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood));
    return mockedComponent.children().childAt(2).name() === 'Vegetables';
  })()
);
```

# --seed--

## --before-user-code--

```jsx
class NonCitrus extends React.Component {
  render() {
    return (
      <div>
        <h4>Non-Citrus:</h4>
        <ul>
          <li>Apples</li>
          <li>Blueberries</li>
          <li>Strawberries</li>
          <li>Bananas</li>
        </ul>
      </div>
    );
  }
};
class Citrus extends React.Component {
  render() {
    return (
      <div>
        <h4>Citrus:</h4>
        <ul>
          <li>Lemon</li>
          <li>Lime</li>
          <li>Orange</li>
          <li>Grapefruit</li>
        </ul>
      </div>
    );
  }
};
class Vegetables extends React.Component {
  render() {
    return (
      <div>
        <h2>Vegetables:</h2>
        <ul>
          <li>Brussel Sprouts</li>
          <li>Broccoli</li>
          <li>Squash</li>
        </ul>
      </div>
    );
     }
};
```

## --after-user-code--

```jsx
ReactDOM.render(<TypesOfFood />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        { /* Change code below this line */ }

        { /* Change code above this line */ }
      </div>
    );
  }
};

class TypesOfFood extends React.Component {
  constructor(props) {
     super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* Change code below this line */ }

        { /* Change code above this line */ }
        <Vegetables />
      </div>
    );
  }
};
```

# --solutions--

```jsx
class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        { /* Change code below this line */ }
        <NonCitrus />
        <Citrus />
        { /* Change code above this line */ }
      </div>
    )
  }
}

class TypesOfFood extends React.Component {
  constructor(props) {
     super(props);
  }
    render() {
      return (
        <div>
        <h1>Types of Food:</h1>
          { /* Change code below this line */ }
          <Fruits />
          { /* Change code above this line */ }
          <Vegetables />
        </div>
      );
    }
};
```
