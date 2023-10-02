---
id: 5a24c314108439a4d4036178
title: Створіть контрольоване введення
challengeType: 6
forumTopicId: 301385
dashedName: create-a-controlled-input
---

# --description--

Ваш застосунок може виконувати набагато складніші взаємодії між станом та відтвореним UI. Наприклад, елементи контролю форми для текстового введення, серед яких `input` та `textarea`, зберігають власний стан DOM як типи користувачів. За допомогою React ви можете перемістити цей змінний стан до стану компонента React. Введення користувача стає частиною стану застосунку, тому React контролює значення поля введення. Зазвичай, якщо ви маєте компоненти React із полями введення, в яких користувач може писати, це буде контрольованою формою введення.

# --instructions--

Редактор коду має каркас компонента під назвою `ControlledInput`, щоб створити контрольований елемент `input`. Стан компонента вже ініціалізований властивістю `input`, яка містить порожній рядок. Це значення являє собою текст, який користувач вводить в поле `input`.

Спочатку створіть метод під назвою `handleChange()`, який має параметр під назвою `event`. Коли метод викликано, він отримує об’єкт `event`, який містить рядок тексту з елементу `input`. Доступ до цього рядка можна отримати завдяки `event.target.value` всередині методу. Оновіть властивість `input` стану компонента, використавши новий рядок.

У методі `render` створіть елемент `input` над тегом `h4`. Додайте атрибут `value`, який дорівнює властивості `input` стану компонента. Потім додайте набір обробників події `onChange()` до методу `handleChange()`.

Коли ви пишете у полі введення, то текст обробляється методом `handleChange()`, встановлюється як властивість `input` у локальному стані та відтворюється як значення в полі `input` на сторінці. Компонент `state` — єдине джерело істини вхідних даних.

Наостанок: не забудьте додати потрібні прив’язки в конструкторі.

# --hints--

`ControlledInput` має повернути елемент `div`, який містить `input` та тег `p`.

```js
assert(
  Enzyme.mount(React.createElement(ControlledInput))
    .find('div')
    .children()
    .find('input').length === 1 &&
    Enzyme.mount(React.createElement(ControlledInput))
      .find('div')
      .children()
      .find('p').length === 1
);
```

Стан `ControlledInput` має ініціалізуватися властивістю `input` зі значенням порожнього рядка.

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(ControlledInput)).state('input'),
  ''
);
```

Написання тексту в елементі введення має оновити стан та значення введення, а елемент `p` має відтворити цей стан згідно з написанням.

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(ControlledInput));
  const _1 = () => {
    mockedComponent.setState({ input: '' });
    return waitForIt(() => mockedComponent.state('input'));
  };
  const _2 = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: 'TestInput' } });
    return waitForIt(() => ({
      state: mockedComponent.state('input'),
      text: mockedComponent.find('p').text(),
      inputVal: mockedComponent.find('input').props().value
    }));
  };
  const before = await _1();
  const after = await _2();
  assert(
    before === '' &&
      after.state === 'TestInput' &&
      after.text === 'TestInput' &&
      after.inputVal === 'TestInput'
  );
};
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<ControlledInput />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    // Change code below this line

    // Change code above this line
  }
  // Change code below this line

  // Change code above this line
  render() {
    return (
      <div>
        { /* Change code below this line */}

        { /* Change code above this line */}
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};
```

# --solutions--

```jsx
class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  render() {
    return (
      <div>
        <input
          value={this.state.input}
          onChange={this.handleChange} />
        <h4>Controlled Input:</h4>

        <p>{this.state.input}</p>
      </div>
    );
  }
};
```
