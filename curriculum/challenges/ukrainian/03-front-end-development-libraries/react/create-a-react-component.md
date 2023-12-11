---
id: 5a24c314108439a4d4036163
title: Створіть компонент React
challengeType: 6
forumTopicId: 301386
dashedName: create-a-react-component
---

# --description--

Інший спосіб визначити компонент React полягає у використанні синтаксису `class` від ES6. У цьому прикладі `Kitten` розширює `React.Component`:

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

Це створює клас ES6 `Kitten`, який розширює клас `React.Component`. Отож тепер клас `Kitten` має доступ до багатьох корисних функцій React, серед яких локальний стан та хуки життєвого циклу. Не хвилюйтеся, якщо не знайомі з цими поняттями, оскільки ми детально розглянемо їх в наступних завданнях. Також зверніть увагу, що клас `Kitten` має визначений `constructor`, який викликає `super()`. Він використовує `super()`, щоб викликати конструктор батьківського класу, в цьому випадку `React.Component`. Конструктор — це спеціальний метод, який використовують протягом ініціалізації об’єктів, створених за допомогою ключового слова `class`. Конструктор компонента найкраще викликати за допомогою `super`, а потім передати пропси до них. Так можна переконатись, що компонент ініціалізовано правильно. Наразі просто знайте, що цей код потрібно використовувати. Скоро ви дізнаєтесь про інші використання конструктора, а також пропсів.

# --instructions--

`MyComponent` визначено в редакторі коду за допомогою синтаксису класу. Завершіть метод `render`, щоб він повернув елемент `div`, який містить `h1` з текстом `Hello React!`.

# --hints--

Компонент React має повернути елемент `div`.

```js
assert(Enzyme.shallow(React.createElement(MyComponent)).type() === 'div');
```

Повернений `div` має відтворити заголовок `h1`.

```js
assert(
  /<div><h1>.*<\/h1><\/div>/.test(
    Enzyme.shallow(React.createElement(MyComponent)).html()
  )
);
```

Заголовок `h1` повинен містити рядок `Hello React!`.

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
