---
id: 5a24c314108439a4d4036163
title: Створення компоненту React
challengeType: 6
forumTopicId: 301386
dashedName: create-a-react-component
---

# --description--

Інший спосіб, щоб визначити React компонент - за допомогою синтаксису ES6 `class`. В наступному прикладі `Kitten` розширює `React.Component`:

```jsx
class Kitten extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Hi</h1>
    );
  }
}
```

Це створює клас ES6 `Kitten`, який розширює клас `React.Component`. Отож, клас `Kitten` тепер має доступ до багатьох корисних функцій React, як наприклад, локальний стан та пастки життєвого циклу. Не хвилюйтеся, якщо ви ще не знайомі з цими термінами, вони будуть детально розкриті у наступних завданнях. Також, зверніть увагу на те, що клас `Kitten` має `constructor` визначений через `super()`. Він використовує `super()`, щоб викликати конструктора батьківського класу, в цьому випадку `React.Component`. Конструктор - це спеціальний метод, який використовується під час ініціалізації об'єктів, які було створено за допомогою ключового слова `class`. Найкраща практика для виклику компоненту `constructor` - використати `super`, а потім провести `props` до обидвох. Це дозволяє впевнитись, що компонент ініціалізовано належним чином. Поки що відомо, що це - стандарт для цього коду. Скоро ви побачите інше використання конструктора, а також `props`.

# --instructions--

`MyComponent` визначається в редакторі коду за допомогою синтаксису класів. Завершіть запис методу `render`, щоб він повернув елемент `div`, який містить в собі `h1` з текстом `Hello React!`.

# --hints--

React компонент повинен повертати `div` елемент.

```js
assert(Enzyme.shallow(React.createElement(MyComponent)).type() === 'div');
```

Повернений `div` повинен відображати заголовок `h1` в собі.

```js
assert(
  /<div><h1>.*<\/h1><\/div>/.test(
    Enzyme.shallow(React.createElement(MyComponent)).html()
  )
);
```

Заголовок `h1` повинен містити в собі рядок `Hello React!`.

```js
assert(
  Enzyme.shallow(React.createElement(MyComponent)).html() ===
    '<div><h1>Hello React!</h1></div>'
);
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
  }
  render() {
    // Change code below this line



    // Change code above this line
  }
};
```

# --solutions--

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Change code below this line
    return (
      <div>
        <h1>Hello React!</h1>
      </div>
    );
    // Change code above this line
  }
};
```
