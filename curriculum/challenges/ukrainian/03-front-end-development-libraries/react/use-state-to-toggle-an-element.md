---
id: 5a24c314108439a4d4036176
title: Використання стану для перемикання елемента
challengeType: 6
forumTopicId: 301421
dashedName: use-state-to-toggle-an-element
---

# --description--

Іноді, під час оновлення стану, вам необхідно знати попередній стан. Однак, оновлення станів можуть бути асихронними. Це означає, що React може згрупувати кілька викликів `setState()` в єдине оновлення. Це означає, що не можна покладатися на попереднє значення `this.state` або `this.props` при розрахунку наступного. Тож, такий код використовувати не варто:

```jsx
this.setState({
  counter: this.state.counter + this.props.increment
});
```

Натомість, передайте `setState` функцію, що дає можливість отримати доступ до стану й пропсів. Використання функції за допомогою `setState` гарантує, що ви працюєте з найбільш актуальними значеннями стану й пропсами. Це означає, що вищенаведений код варто переписати так:

```jsx
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```

Також, можна використати форму без `props`, якщо вам потрібен лише `state`:

```jsx
this.setState(state => ({
  counter: state.counter + 1
}));
```

Зверніть увагу, що ви маєте буквально огорнути об'єкт дужками, бо інакше JavaScript вважатиме його блоком коду.

# --instructions--

`MyComponent` має властивість `visibility`, яка ініціалізується до `false`. Метод візуалізації має одне зображення, якщо значення `visibility` - правильне, та інше, якщо воно хибне.

Наразі немає способу оновлення властивостей `visibility` у `state`. Значення слід перемикати назад і вперед між правильним та хибним. Під час натискання на кнопку з'являється обробник натискань, який викликає класовий метод під назвою `toggleVisibility()`. Передайте функцію до `setState`, щоб встановити цей метод, і таким чином, коли метод застосується, `state` `visibility` перемикнеться на протилежне значення. Якщо `visibility` це `false`, цей метод змінить їх на `true` і навпаки.

Нарешті, натисніть на кнопку, щоб побачити умовне зображення компоненту, що базується на його `state`.

**Hint:** Не забудьте прив'язати `this` ключове слово до методу в `constructor`!

# --hints--

`MyComponent` має повернути `div` елемент, що містить `button`.

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(MyComponent)).find('div').find('button')
    .length,
  1
);
```

Стан `MyComponent` має ініціалізуватись з властивістю `visibility` встановленою на `false`.

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(MyComponent)).state('visibility'),
  false
);
```

При натисканні на цю кнопку елемент має встановити властивість `visibility` в стан між `true` і `false`.

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

`this` не можна використовувати всередині `setState`

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
