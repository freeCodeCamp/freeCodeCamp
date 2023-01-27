---
id: 5a24c314108439a4d403617c
title: Використання методу життєвого циклу componentWillMount
challengeType: 6
forumTopicId: 301423
dashedName: use-the-lifecycle-method-componentwillmount
---

# --description--

Компоненти у React мають декілька спеціальних методів, що забезпечують можливість виконувати дії у визначений час у їхньому життєвому циклі. Вони називаються методами життєвого циклу, чи перехоплювачами життєвого циклу і дозволяють виловити компонент у визначений час. Це може бути до того, як вони будуть показані, перш ніж вони оновляться, перш ніж вони отримають реквізити, перш ніж від'єднати і так далі. Ось список декількох методів життєвого циклу: `componentWillMount()` `componentDidMount()` `shouldComponentUpdate()` `componentDidUpdate()` `componentWillUnmount()`. Протягом наступних уроків розглянемо деякі основні випадки використання даних методів.

**Примітка:** метод життєвого циклу `componentWillMount` буде виключено з майбутньої версії 16.X і видалено з версії 17. Дізнайтесь більше у цій <a href="https://www.freecodecamp.org/news/how-to-safely-use-reacts-life-cycles-with-fiber-s-async-rendering-fd4469ebbd8f/" target="_blank" rel="noopener noreferrer nofollow">публікації</a>

# --instructions--

Метод `componentWillMount()` викликається перед методом `render()`, коли компонент підключений до DOM. Запишіть щось в консоль в межах `componentWillMount()`; щоб побачити результат - відкрийте консоль вашого браузера.

# --hints--

`MyComponent` має відобразити `div` елемент.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return mockedComponent.find('div').length === 1;
  })()
);
```

`console.log` слід викликати у `componentWillMount`.

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
