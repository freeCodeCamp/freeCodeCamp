---
id: 5a24c314108439a4d4036165
title: Використайте React, щоб відтворити вкладені компоненти
challengeType: 6
forumTopicId: 301420
dashedName: use-react-to-render-nested-components
---

# --description--

У попередньому завданні представлено простий спосіб компонування компонентів, але за допомогою React їх можна компонувати по-іншому.

Композиція компонентів — одна з потужних функцій React. Під час роботи з React важливо сприймати інтерфейс користувача як компоненти (наприклад, як App з попереднього завдання). Ви розбиваєте UI на базові блоки, які стають компонентами. Це допомагає відокремити код, який відповідає за UI, від коду, який відповідає за логіку застосунку. Так можна значно спростити розробку і обслуговування складних проєктів.

# --instructions--

У редакторі коду є два функціональні компоненти: `TypesOfFruit` та `Fruits`. Візьміть компонент `TypesOfFruit` та компонуйте його, або *вкладіть*, в межах компонента `Fruits`. Потім візьміть компонент `Fruits` та вкладіть його в межах компонента `TypesOfFood`. У результаті має вийти дочірній компонент, вкладений у батьківський компонент, який вкладений у власний батьківський компонент!

# --hints--

Компонент `TypesOfFood` має повернути єдиний елемент `div`.

```js
assert(Enzyme.shallow(React.createElement(TypesOfFood)).type() === 'div');
```

Компонент `TypesOfFood` має повернути компонент `Fruits`.

```js
assert(
  Enzyme.shallow(React.createElement(TypesOfFood)).props().children[1].type
    .name === 'Fruits'
);
```

Компонент `Fruits` має повернути компонент `TypesOfFruit`.

```js
assert(
  Enzyme.mount(React.createElement(TypesOfFood)).find('h2').html() ===
    '<h2>Fruits:</h2>'
);
```

Компонент `TypesOfFruit` має повернути елементи `h2` та `ul`.

```js
assert(
  Enzyme.mount(React.createElement(TypesOfFood)).find('ul').text() ===
    'ApplesBlueberriesStrawberriesBananas'
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<TypesOfFood />, document.getElementById('root'))
```

## --seed-contents--

```jsx
const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      { /* Change code below this line */ }

      { /* Change code above this line */ }
    </div>
  );
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
      </div>
    );
  }
};
```

# --solutions--

```jsx
const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      { /* Change code below this line */ }
        <TypesOfFruit />
      { /* Change code above this line */ }
    </div>
  );
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
        <Fruits />
        { /* Change code above this line */ }
      </div>
    );
  }
};
```
