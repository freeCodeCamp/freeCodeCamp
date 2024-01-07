---
id: 5a24c314108439a4d4036189
title: Змініть вбудований CSS умовно на основі стану компонента
challengeType: 6
forumTopicId: 301380
dashedName: change-inline-css-conditionally-based-on-component-state
---

# --description--

Ви вже бачили декілька застосувань умовного відтворення та використання вбудованих стилів. Розглянемо ще один приклад, який поєднує обидві теми. CSS можна відтворити умовно на основі стану компонента React. Для цього необхідно перевірити умову, та, якщо вона виконана, змінити об’єкт стилів, призначений до елементів JSX в методі відтворення.

Цю парадигму важливо зрозуміти, оскільки вона є різкою зміною від більш традиційного підходу застосування стилів шляхом безпосередньої зміни елементів DOM (що дуже часто зустрічається, наприклад, в jQuery). При такому підході необхідно відстежувати час зміни елементів, а також безпосередньо обробляти керування. Іноді важко відслідковувати зміни, що може зробити UI непередбачуваним. Встановлюючи об’єкт стилю на основі умови, потрібно описувати UI у вигляді функції стану застосунку. Існує чіткий потік інформації, який рухається тільки в одному напрямку. Це найбільш прийнятний метод під час написання застосунків з React.

# --instructions--

Редактор коду містить простий керований компонент введення зі стилізованим кордоном. Зробіть цей кордон червоним, якщо користувач вводить понад 15 символів у полі введення. Додайте умову для перевірки та, якщо умова дійсна, встановіть стиль кордону на `3px solid red`. Здійсніть перевірку, ввівши текст у поле.

# --hints--

Компонент `GateKeeper` має відтворити елемент `div`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(GateKeeper));
    return mockedComponent.find('div').length === 1;
  })()
);
```

Компонент `GateKeeper` має ініціалізуватися ключем стану `input` зі значенням порожнього рядка.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(GateKeeper));
    return mockedComponent.state().input === '';
  })()
);
```

Компонент `GateKeeper` має відтворити теги `h3` та `input`.

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

Спочатку тег `input` повинен мати властивість `border` зі значенням `1px solid black`.

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

Якщо введене значення в стані містить понад 15 символів, тег `input` повинен мати кордон зі значенням `3px solid red`.

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
