---
id: 5a24c314108439a4d4036176
title: Використайте стан, щоб перемкнути елемент
challengeType: 6
forumTopicId: 301421
dashedName: use-state-to-toggle-an-element
---

# --description--

Іноді, під час оновлення стану, вам необхідно знати попередній стан. Однак оновлення станів можуть бути асинхронними, тобто React може згрупувати декілька викликів `setState()` в одне оновлення. Це означає, що не можна покладатися на попереднє значення `this.state` або `this.props` при розрахунку наступного. Тому не варто використовувати такий код:

```jsx
this.setState({
  counter: this.state.counter + this.props.increment
});
```

Натомість потрібно передати функцію, яка дозволяє отримати доступ до станів та пропсів, до `setState`. Використання функції з `setState` гарантує, що ви працюєте з найактуальнішими значеннями станів та пропсів. Це означає, що вищенаведений код потрібно переписати:

```jsx
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```

Також можна використати форму без пропсів, якщо вам потрібен лише стан:

```jsx
this.setState(state => ({
  counter: state.counter + 1
}));
```

Зверніть увагу, що ви маєте обгорнути літерал об’єкта дужками, бо інакше JavaScript вважатиме його блоком коду.

# --instructions--

`MyComponent` має властивість `visibility`, яка ініціалізується до `false`. Метод відтворення повертає один вигляд, якщо значенням `visibility` є true, та інший вигляд, якщо значенням є false.

Наразі немає способу оновити властивість `visibility` в стані компонента. Значення має перемикатись між true та false. Кнопка має обробник натискання, який запускає метод класу під назвою `toggleVisibility()`. Передайте функцію до `setState` для визначення методу, щоб стан властивості `visibility` перемикався на протилежне значення, коли викликано метод. Якщо значенням `visibility` є `false`, то метод змінить його на `true` і навпаки.

Вкінці натисніть на кнопку, щоб побачити умовне відтворення компонента на основі його стану.

**Підказка:** не забудьте прив’язати ключове слово `this` до методу в `constructor`!

# --hints--

`MyComponent` має повернути елемент `div`, який містить `button`.

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(MyComponent)).find('div').find('button')
    .length,
  1
);
```

Стан `MyComponent` має ініціалізуватися властивістю `visibility` зі значенням `false`.

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(MyComponent)).state('visibility'),
  false
);
```

Натискання на кнопку має перемикати значення властивості `visibility` між `true` та `false`.

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
  const first = () => {
    mockedComponent.setState({ visibility: false });
    return mockedComponent.state('visibility');
  };
  const second = () => {
    mockedComponent.find('button').simulate('click');
    return mockedComponent.state('visibility');
  };
  const third = () => {
    mockedComponent.find('button').simulate('click');
    return mockedComponent.state('visibility');
  };
  const firstValue = first();
  const secondValue = second();
  const thirdValue = third();
  assert(!firstValue && secondValue && !thirdValue);
})();
```

Анонімна функція має бути передана до `setState`.

```js
const paramRegex = '[a-zA-Z$_]\\w*(,[a-zA-Z$_]\\w*)?';
assert(
  new RegExp(
    'this\\.setState\\((function\\(' +
      paramRegex +
      '\\){|([a-zA-Z$_]\\w*|\\(' +
      paramRegex +
      '\\))=>)'
  ).test(__helpers.removeWhiteSpace(code))
);
```

Не використовуйте `this` всередині `setState`

```js
assert(!/this\.setState\([^}]*this/.test(code));
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
      visibility: false
    };
    // Change code below this line

    // Change code above this line
  }
  // Change code below this line

  // Change code above this line
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}
```

# --solutions--

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }
  toggleVisibility() {
    this.setState(state => ({
      visibility: !state.visibility
    }));
  }
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}
```
