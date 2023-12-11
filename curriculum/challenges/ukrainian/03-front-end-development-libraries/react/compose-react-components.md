---
id: 5a24c314108439a4d4036166
title: Компонуйте компоненти React
challengeType: 6
forumTopicId: 301381
dashedName: compose-react-components
---

# --description--

Оскільки завдання продовжують використовувати складніші композиції з компонентів React та JSX, варто дещо зазначити. Відтворення класових компонентів стилю ES6 в межах інших компонентів не відрізняється від відтворення простих компонентів, використаних у попередніх завданнях. Ви можете відтворити елементи JSX, функціональні компоненти без стану та класові компоненти ES6 в межах інших компонентів.

# --instructions--

Компонент `TypesOfFood` у редакторі коду вже відтворює компонент під назвою `Vegetables`. Також наявний компонент `Fruits` з попереднього завдання.

Вкладіть два компоненти всередині `Fruits`: спочатку `NonCitrus`, а потім `Citrus`. Обидва компоненти вже надано. Потім вкладіть класовий компонент `Fruits` в компонент `TypesOfFood`, під заголовком `h1` та над `Vegetables`. У результаті отримаємо групу вкладених компонентів з двома різними типами компонентів.

# --hints--

Компонент `TypesOfFood` має повернути єдиний елемент `div`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood));
    return mockedComponent.children().type() === 'div';
  })()
);
```

Компонент `TypesOfFood` має повернути компонент `Fruits`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood));
    return mockedComponent.children().childAt(1).name() === 'Fruits';
  })()
);
```

Компонент `Fruits` має повернути компоненти `NonCitrus` та `Citrus`.

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

Компонент `TypesOfFood` має повернути компонент `Vegetables` під компонентом `Fruits`.

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
