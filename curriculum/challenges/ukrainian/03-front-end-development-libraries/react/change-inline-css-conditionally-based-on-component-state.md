---
id: 5a24c314108439a4d4036189
title: Зміна вбудованих CSS умовно на основі стану компонента
challengeType: 6
forumTopicId: 301380
dashedName: change-inline-css-conditionally-based-on-component-state
---

# --description--

На цьому етапі вже було опрацьовано декілька додатків умовної візуалізації та використання вбудованих стилів. Розглянемо ще один приклад, що поєднує ці дві теми. Також можна відтворити CSS умовно на основі стану компонента React. Для цього необхідно перевірити умову, і якщо вона виконана, змінити об’єкт стилів, призначений для елементів JSX методом візуалізації.

Цю парадигму важливо зрозуміти, оскільки вона є різкою зміною від більш традиційного підходу до застосування стилів шляхом безпосередньої зміни елементів DOM (що дуже часто зустрічається, наприклад, з jQuery). При такому підході необхідно відстежувати момент зміни елементів, а також безпосередньо обробляти фактичне керування. При відстежуванні змін можуть виникнути складнощі, що потенційно робить ваш інтерфейс непередбачуваним. Встановлюючи об’єкт стилю на основі умови, опишіть, що інтерфейс має виглядати як функція стану додатку. Існує чіткий потік інформації, який рухається тільки в одному напрямку. Це найбільш прийнятний метод під час написання програм з React.

# --instructions--

Редактор коду має простий керований компонент введення зі стилізованою рамкою. У разі застосування користувачем понад 15 символів тексту у полі введення, можна оформити цю рамку у червоний колір. Для перевірки, додайте умову, і, вона є дійсною, встановіть стиль введення меж для `3px solid red`. Щоб спробувати його, введіть текст у відповідне поле.

# --hints--

Компонент `GateKeeper` повинен відображати елемент `div`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(GateKeeper));
    return mockedComponent.find('div').length === 1;
  })()
);
```

Компонент `GateKeeper` слід ініціалізувати ключем стану `input`, встановленим для порожнього рядка.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(GateKeeper));
    return mockedComponent.state().input === '';
  })()
);
```

Компонент `GateKeeper` повинен відображати тег `h3` і тег `input`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(GateKeeper));
    return (
      mockedComponent.find('h3').length === 1 &&
      mockedComponent.find('input').length === 1
    );
  })()
);
```

Теґ `input` спочатку повинен мати стиль `1px solid black` для властивості `border`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(GateKeeper));
    return (
      mockedComponent.find('input').props().style.border === '1px solid black'
    );
  })()
);
```

Теґ `input` має бути оформлений з рамкою `3px solid red`, якщо введене значення в стані перевищує 15 символів.

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100));
  const mockedComponent = Enzyme.mount(React.createElement(GateKeeper));
  const simulateChange = (el, value) =>
    el.simulate('change', { target: { value } });
  let initialStyle = mockedComponent.find('input').props().style.border;
  const state_1 = () => {
    mockedComponent.setState({ input: 'this is 15 char' });
    return waitForIt(() => mockedComponent.find('input').props().style.border);
  };
  const state_2 = () => {
    mockedComponent.setState({
      input: 'A very long string longer than 15 characters.'
    });
    return waitForIt(() => mockedComponent.find('input').props().style.border);
  };
  const style_1 = await state_1();
  const style_2 = await state_2();
  assert(
    initialStyle === '1px solid black' &&
      style_1 === '1px solid black' &&
      style_2 === '3px solid red'
  );
};
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<GateKeeper />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class GateKeeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value })
  }
  render() {
    let inputStyle = {
      border: '1px solid black'
    };
    // Change code below this line

    // Change code above this line
    return (
      <div>
        <h3>Don't Type Too Much:</h3>
        <input
          type="text"
          style={inputStyle}
          value={this.state.input}
          onChange={this.handleChange} />
      </div>
    );
  }
};
```

# --solutions--

```jsx
class GateKeeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value })
  }
  render() {
    let inputStyle = {
      border: '1px solid black'
    };
    if (this.state.input.length > 15) {
      inputStyle.border = '3px solid red';
    };
    return (
      <div>
        <h3>Don't Type Too Much:</h3>
        <input
          type="text"
          style={inputStyle}
          value={this.state.input}
          onChange={this.handleChange} />
      </div>
    );
  }
};
```
