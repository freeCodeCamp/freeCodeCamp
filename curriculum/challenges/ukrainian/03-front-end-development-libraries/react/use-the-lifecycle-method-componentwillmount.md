---
id: 5a24c314108439a4d403617c
title: Використайте метод життєвого циклу componentWillMount
challengeType: 6
forumTopicId: 301423
dashedName: use-the-lifecycle-method-componentwillmount
---

# --description--

Компоненти React мають декілька спеціальних методів, які надають можливість виконувати дії у визначений час їхнього життєвого циклу. Вони називаються методами життєвого циклу, або перехоплювачами життєвого циклу, і дозволяють виловити компонент у визначений час. Це може бути перед відтворенням, оновленням, отриманням пропсу, від’єднанням тощо. Ось список декількох головних методів життєвого циклу: `componentWillMount()` `componentDidMount()` `shouldComponentUpdate()` `componentDidUpdate()` `componentWillUnmount()`. В наступнних уроках ми розглянемо деякі основні випадки їх використання.

**Примітка:** метод життєвого циклу `componentWillMount` буде нерекомендований у майбутній версії 16.X і видалений з версії 17. Дізнайтесь більше у цій <a href="https://www.freecodecamp.org/news/how-to-safely-use-reacts-life-cycles-with-fiber-s-async-rendering-fd4469ebbd8f/" target="_blank" rel="noopener noreferrer nofollow">публікації</a>

# --instructions--

Метод `componentWillMount()` викликається перед методом `render()`, коли компонент підключений до DOM. Напишіть щось на консолі в межах `componentWillMount()` (можливо, вам знадобиться відкрити консоль браузера, щоб побачити вивід).

# --hints--

`MyComponent` має відтворити елемент `div`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return mockedComponent.find('div').length === 1;
  })()
);
```

`console.log` потрібно викликати в `componentWillMount`.

```js
assert(
  (function () {
    const lifecycle = React.createElement(MyComponent)
      .type.prototype.componentWillMount.toString()
      .replace(/ /g, '');
    return lifecycle.includes('console.log(');
  })()
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
  componentWillMount() {
    // Change code below this line

    // Change code above this line
  }
  render() {
    return <div />
  }
};
```

# --solutions--

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    // Change code below this line
    console.log('Component is mounting...');
    // Change code above this line
  }
  render() {
    return <div />
  }
};
```
