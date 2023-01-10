---
id: 5a24c314108439a4d403618a
title: Використовуйте Array.map() для динамічної візуалізації елементів
challengeType: 6
forumTopicId: 301417
dashedName: use-array-map-to-dynamically-render-elements
---

# --description--

Умовне відображення зручне, але компоненти мають відображати невідому кількість елементів. Часто під час реактивного програмування у програміста не має можливості дізнатися стан додатку до запуску, бо дуже багато залежить від взаємодії користувача з програмою. Програміст має написати код, щоб правильно обробити цей невідомий стан до запуску. Використання `Array.map()` в React ілюструє це поняття.

Наприклад, ви створюєте простий додаток "To Do List". Як програміст, ви не можете знати, скільки пунктів має бути у переліку користувача. Треба вам потрібно налаштувати компонент на динамічний показ вірної кількості елементів переліку задовго до того, як користувач вирішить присвятити день пранню.

# --instructions--

У редакторі вже встановлено більшість компонентів `MyToDoList`. Дещо з цього коду може виглядати знайомо, якщо ви виконали завдання з контрольованої форми. Можна помітити `textarea` і `button`, так само як і кільки методів, що відстежують стан, але на сторінці ще нічого немає.

У `constructor` створіть об'єкт `this.state` і виділіть 2 стани: `userInput` має ініціалізуватися як порожній рядок, а `toDoList`- як порожній масив. Далі видаліть значення `null` з методу `render()` поруч зі змінною `items`. Натомість нанесіть на карту масив `toDoList`, збережений у внутрішньому стані компонента і динамічно виведіть `li` для кожного об'єкта. Спробуйте відобразити рядок `eat, code, sleep, repeat` у `textarea`, а потім натисніть на кнопку і подивіться, що трапиться.

**Note:** Ви, можливо, знаєте, що всі дочірні елементи, створені за допомогою такої операції, мають бути оснащені унікальним атрибутом `key`. Не хвилюйтесь, це тема наступного завдання.

# --hints--

Компонент MyToDoList має існувати і відображатися на сторінці.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyToDoList));
    return mockedComponent.find('MyToDoList').length === 1;
  })()
);
```

Перший дочірній елемент `MyToDoList` має бути елементом `textarea`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyToDoList));
    return (
      mockedComponent.find('MyToDoList').children().childAt(0).type() ===
      'textarea'
    );
  })()
);
```

Другим дочірнім елементом `MyToDoList` має бути елемент `br`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyToDoList));
    return (
      mockedComponent.find('MyToDoList').children().childAt(1).type() === 'br'
    );
  })()
);
```

Третім дочірнім елементом `MyToDoList` має стати елемент `button`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyToDoList));
    return (
      mockedComponent.find('MyToDoList').children().childAt(2).type() ===
      'button'
    );
  })()
);
```

Стан `MyToDoList` має бути ініціалізовано з `toDoList` як порожній масив.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyToDoList));
    const initialState = mockedComponent.state();
    return (
      Array.isArray(initialState.toDoList) === true &&
      initialState.toDoList.length === 0
    );
  })()
);
```

Стан `MyToDoList` має бути ініціалізовано з `userInput` як порожній масив.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyToDoList));
    const initialState = mockedComponent.state();
    return (
      typeof initialState.userInput === 'string' &&
      initialState.userInput.length === 0
    );
  })()
);
```

Коли натиснуто кнопку `Create List`, компонент `MyToDoList` має динамічно видати невпорядкований перелік, що містить елемент частини списку для кожної відокремленої комою частини списку, що вводиться в елемент `textarea`.

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(MyToDoList));
  const simulateChange = (el, value) =>
    el.simulate('change', { target: { value } });
  const state_1 = () => {
    return mockedComponent.find('ul').find('li');
  };
  const setInput = () => {
    return simulateChange(
      mockedComponent.find('textarea'),
      'testA, testB, testC'
    );
  };
  const click = () => {
    return mockedComponent.find('button').simulate('click');
  };
  const state_2 = () => {
    const nodes = mockedComponent.find('ul').find('li');
    return { nodes, text: nodes.reduce((t, n) => t + n.text().trim(), '') };
  };
  const setInput_2 = () => {
    return simulateChange(
      mockedComponent.find('textarea'),
      't1, t2, t3, t4, t5, t6'
    );
  };
  const click_1 = () => {
    return mockedComponent.find('button').simulate('click');
  };
  const state_3 = () => {
    const nodes = mockedComponent.find('ul').find('li');
    return { nodes, text: nodes.reduce((t, n) => t + n.text().trim(), '') };
  };
  const awaited_state_1 = state_1();
  const awaited_setInput = setInput();
  const awaited_click = click();
  const awaited_state_2 = state_2();
  const awaited_setInput_2 = setInput_2();
  const awaited_click_1 = click_1();
  const awaited_state_3 = state_3();
  assert(
    awaited_state_1.length === 0 &&
      awaited_state_2.nodes.length === 3 &&
      awaited_state_3.nodes.length === 6 &&
      awaited_state_2.text === 'testAtestBtestC' &&
      awaited_state_3.text === 't1t2t3t4t5t6'
  );
})();
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<MyToDoList />, document.getElementById('root'));
```

## --seed-contents--

```jsx
const textAreaStyles = {
  width: 235,
  margin: 5
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    // Change code below this line

    // Change code above this line
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    const itemsArray = this.state.userInput.split(',');
    this.setState({
      toDoList: itemsArray
    });
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  render() {
    const items = null; // Change this line
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder='Separate Items With Commas'
        />
        <br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>{items}</ul>
      </div>
    );
  }
}
```

# --solutions--

```jsx
const textAreaStyles = {
  width: 235,
  margin: 5
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [],
      userInput: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    const itemsArray = this.state.userInput.split(',');
    this.setState({
      toDoList: itemsArray
    });
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  render() {
    const items = this.state.toDoList.map((item, i) => {
      return <li key={i}>{item}</li>;
    });
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder='Separate Items With Commas'
        />
        <br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>{items}</ul>
      </div>
    );
  }
}
```
