---
id: 5a24c314108439a4d4036167
title: Відображення компонентів класу в DOM
challengeType: 6
forumTopicId: 301404
dashedName: render-a-class-component-to-the-dom
---

# --description--

Ви вже зустрічалися з використанням ReactDOM API для рендерингу JSX-елементів у DOM в попередніх завданнях. Процес рендерингу компонентів React буде схожим. Останні кілька завдань зосереджувалися на компонентах та композиції, тому рендеринг виконувався для вас за замовчуванням. Проте, жоден з написаного вами коду на React, не буде рендеритися в DOM без виклику ReactDOM API.

Ось оновлення синтаксису: `ReactDOM.render(componentToRender, targetNode)`. Першим аргументом є компонент React, який ви хочете відобразити. Другий аргумент - DOM-вузол, всередині якого ви хочете відобразити компонент.

Компоненти React передаються в `ReactDOM.render()` дещо інакше ніж елементи JSX. У JSX-елементах ви передаєте ім'я компонента, який хочете відобразити. Однак для компонентів React вам треба використовувати той самий синтаксис, що й під час рендерингу вкладених компонентів, наприклад `ReactDOM.render(<ComponentToRender />, targetNode)`. Такий синтаксис використовується як для класових, так і для функціональних компонентів ES6.

# --instructions--

Як компонент `Fruits`, так і компонент `Vegetables` визначені для вас за замовчуванням. Відобразіть обидва компоненти як дочірні для компонента `TypesOfFood`, далі відобразіть `TypesOfFood` у DOM. Також можна скористатися `div` з `id='challenge-node'`.

# --hints--

Компонент `TypesOfFood` повинен повертати одинарний елемент `div`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood));
    return mockedComponent.children().type() === 'div';
  })()
);
```

Компонент `TypesOfFood` повинен відображати компонент `Fruits` після елемента `h1`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood));
    return mockedComponent.children().childAt(1).name() === 'Fruits';
  })()
);
```

Компонент `TypesOfFood` повинен рендерити компонент `Vegetables` після компонента `Fruits`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood));
    return mockedComponent.children().childAt(2).name() === 'Vegetables';
  })()
);
```

Компонент `TypesOfFood` повинен відображатися у DOM всередині `div` з id `challenge-node`.

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
