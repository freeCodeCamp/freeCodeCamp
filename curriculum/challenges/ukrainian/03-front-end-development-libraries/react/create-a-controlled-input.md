---
id: 5a24c314108439a4d4036178
title: Створення контрольованого вводу
challengeType: 6
forumTopicId: 301385
dashedName: create-a-controlled-input
---

# --description--

Ваш додаток може мати набагато складніші взаємодії між `state` і відображеним інтерфейсом користувача. Для прикладу, керування елементами форми для введення тексту, такими як `input` та `textarea`, зберігає їх власний стан у DOM в якості типу користувача. За допомогою React, ви можете перемістити цей незмінний стан до компоненту React `state`. Вхід користувача стає частиною програми `state`, отож React контролює значення цього поля вводу. Зазвичай, якщо у вас є компоненти React із полями вводу, в які користувач може друкувати, це буде контрольована форму вводу.

# --instructions--

Редактор коду має каркас компонента із назвою `ControlledInput` для створення контрольованого `input` елементу. `state` компоненту вже ініціалізовано із `input` властивістю, яка містить порожній рядок. Це значення являє собою текст, який друкує користувач у поле `input`.

По-перше, створіть метод із назвою `handleChange()`, який має параметр із назвою `event`. Коли викликається метод, він отримує `event` об'єкт, що містить в собі рядок тексту з `input` елементу. Ви можете отримати доступ до цього рядка з `event.target.value` всередині методу. Оновіть `input` властивості `state` компонента за допомогою нового рядка.

У методі `render` створіть `input` елемент над тегом `h4`. Додайте атрибут `value`, який дорівнює властивості `input` `state` компоненту. Тоді додайте `onChange()` набір обробника подій до методу `handleChange()`.

Коли ви друкуєте у полі вхідних даних, цей текст обробляється методом `handleChange()`, встановленим як властивість `input` у локальному `state`, і відображається в якості значення у `input` полі на сторінці. Компонент `state` є єдиним джерело істини стосовно вхідних даних.

Останнє, проте важливе - не забудьте додати необхідні прив'язки до конструктора.

# --hints--

`ControlledInput` повинен повертати `div` елемент, який містить в собі `input` та тег `p`.

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

Стан `ControlledInput` має ініціалізуватись із допомогою властивості `input` встановленої у порожній рядок.

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(ControlledInput)).state('input'),
  ''
);
```

Друкування у вхідному елементі повинне оновлювати стан і значення вхідних даних, а `p` елемент повинен відображати цей стан згідно з тим, що ви друкуєте.

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
