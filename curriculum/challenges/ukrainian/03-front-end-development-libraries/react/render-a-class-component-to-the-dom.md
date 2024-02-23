---
id: 5a24c314108439a4d4036167
title: Відтворіть класовий компонент в DOM
challengeType: 6
forumTopicId: 301404
dashedName: render-a-class-component-to-the-dom
---

# --description--

Ви вже використовували ReactDOM API в попередніх завданнях, щоб відтворити елементи JSX в DOM. Процес відтворення компонентів React буде схожим. У попередніх завданнях ми фокусувались на компонентах та композиції, тому відтворення виконувалось за замовчуванням. Однак жоден з написаного коду React не буде відтворюватись в DOM без виклику ReactDOM API.

Ось оновлення синтаксису: `ReactDOM.render(componentToRender, targetNode)`. Першим аргументом є компонент React, який ви хочете відтворити. Другим аргументом є вузол DOM, де ви хочете відтворити компонент.

Компоненти React передаються до `ReactDOM.render()` дещо інакше, ніж елементи JSX. Для елементів JSX ви передаєте назву елемента, який хочете відтворити. А для компонентів React потрібно використати той самий синтаксис, що й для відтворення вкладеного компонента: `ReactDOM.render(<ComponentToRender />, targetNode)`. Такий синтаксис використовується як для класових, так і для функціональних компонентів ES6.

# --instructions--

Компоненти `Fruits` та `Vegetables` вже визначені. Відтворіть обидва компоненти як дочірні компоненти компонента `TypesOfFood`, а потім відтворіть `TypesOfFood` в DOM. Ви також можете використати `div` з `id='challenge-node'`.

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

Компонент `TypesOfFood` має відтворити компонент `Fruits` після елемента `h1`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood));
    return mockedComponent.children().childAt(1).name() === 'Fruits';
  })()
);
```

Компонент `TypesOfFood` має відтворити компонент `Vegetables` після `Fruits`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood));
    return mockedComponent.children().childAt(2).name() === 'Vegetables';
  })()
);
```

Компонент `TypesOfFood` має відтворитись в DOM в межах `div` з id зі значенням `challenge-node`.

```js
assert(
  (function () {
    const html = document.getElementById('challenge-node').childNodes[0]
      .innerHTML;
    return (
      html.includes(
        '<div><h2>Fruits:</h2><h4>Non-Citrus:</h4><ul><li>Apples</li><li>Blueberries</li><li>Strawberries</li><li>Bananas</li></ul><h4>Citrus:</h4><ul><li>Lemon</li><li>Lime</li><li>Orange</li><li>Grapefruit</li></ul></div>'
      ) &&
      html.includes(
        '<div><h2>Vegetables:</h2><ul><li>Brussel Sprouts</li><li>Broccoli</li><li>Squash</li></ul></div>'
      )
    );
  })()
);
```

# --seed--

## --before-user-code--

```jsx
const Fruits = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <h4>Non-Citrus:</h4>
        <ul>
          <li>Apples</li>
          <li>Blueberries</li>
          <li>Strawberries</li>
          <li>Bananas</li>
        </ul>
      <h4>Citrus:</h4>
        <ul>
          <li>Lemon</li>
          <li>Lime</li>
          <li>Orange</li>
          <li>Grapefruit</li>
        </ul>
    </div>
  );
};
const Vegetables = () => {
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
};
```

## --seed-contents--

```jsx
class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* Change code below this line */}

        {/* Change code above this line */}
      </div>
    );
  }
};

// Change code below this line
```

# --solutions--

```jsx
class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* Change code below this line */}
          <Fruits />
           <Vegetables />
         {/* Change code above this line */}
      </div>
    );
  }
};

// Change code below this line
ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'));
```
