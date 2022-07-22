---
id: 5a24c314108439a4d4036187
title: Використовуйте трикомпонентний вираз для умовної візуалізації
challengeType: 6
forumTopicId: 301414
dashedName: use-a-ternary-expression-for-conditional-rendering
---

# --description--

Перед переходом до техніки динамічного малювання, існує останній спосіб використання вбудованих умов JavaScript для відображення вашого бажання: <dfn>Зовнішній оператор</dfn>. Зовнішній оператор часто використовується як ярлик для тверджень `if/else` у JavaScript. Вони не такі надійні, як традиційні `if/else`, але вони дуже популярні серед розробників React. Причиною цього є те, що компілювання JSX операційної системи `if/else` операторів не можна вставляти безпосередньо в код JSX. Можливо, ви помітили це раніше — коли потрібен оператор `if/else`, він завжди був *поза* ключовим словом `return`. Трикомпонентні вирази можуть бути чудовою альтернативою, якщо ви хочете реалізувати умовну логіку в межах вашої JSX. Нагадаємо, що трикомпонентний оператор має три частини, але ви можете поєднати декілька трикомпонентних вирази разом. Ось тут основний синтаксис:

```jsx
condition ? expressionIfTrue : expressionIfFalse;
```

# --instructions--

Редактор коду має три константи, визначені в межах методу `CheckUserAge` component's `render()`. Вони називаються `buttonOne`, `buttonTwo`, і `buttonThree`. Кожному із них призначено простий вираз JSX, що представляє елемент кнопки. Спочатку ініціалізувати стан `CheckUserAge` з `input` і `userAge`, обидва задані значенням пустого рядка.

Як тільки компонент відображає інформацію на сторінці, користувачі повинні мати спосіб взаємодіяти з нею. У межах `return` компонента, встановіть трикомпонентний вираз, який реалізує наступну логіку: коли сторінка вперше завантажується, відобразити кнопку підтвердження, `buttonOne` на сторінці. Потім, коли користувач введе свій вік та натисне кнопку, відобразіть іншу кнопку з урахуванням віку. Якщо користувач вводить число менше за `18`, відобразіть `buttonThree`. Якщо користувач вводить число більше або рівне `18`, відобразіть `buttonTwo`.

# --hints--

Компонент `CheckUserAge` має візуалізувати один елемент `input` і один елемент `button`.

```js
assert(
  Enzyme.mount(React.createElement(CheckUserAge)).find('div').find('input')
    .length === 1 &&
    Enzyme.mount(React.createElement(CheckUserAge)).find('div').find('button')
      .length === 1
);
```

Стан компонента `CheckUserAge` слід ініціалізувати з властивістю `userAge` і властивістю `input`, котрі обидва встановлюють значення пустого рядка.

```js
assert(
  Enzyme.mount(React.createElement(CheckUserAge)).state().input === '' &&
    Enzyme.mount(React.createElement(CheckUserAge)).state().userAge === ''
);
```

Коли компонент `CheckUserAge` першим візуалізовано в DOM, то текст `button` має бути Submit.

```js
assert(
  Enzyme.mount(React.createElement(CheckUserAge)).find('button').text() ===
    'Submit'
);
```

Коли вводиться число менше 18 в `input` і натискається `button`, внутрішній текст `button` має бути `You Shall Not Pass`.

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(CheckUserAge));
  const initialButton = mockedComponent.find('button').text();
  const enter3AndClickButton = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: '3' } });
    mockedComponent.find('button').simulate('click');
    mockedComponent.update();
    return mockedComponent.find('button').text();
  };
  const enter17AndClickButton = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: '17' } });
    mockedComponent.find('button').simulate('click');
    mockedComponent.update();
    return mockedComponent.find('button').text();
  };
  const userAge3 = enter3AndClickButton();
  const userAge17 = enter17AndClickButton();
  assert(
    initialButton === 'Submit' &&
      userAge3 === 'You Shall Not Pass' &&
      userAge17 === 'You Shall Not Pass'
  );
})();
```

Коли вводиться число більше або рівне 18-и в `input` і натискається `button`, внутрішній текст `button` має бути `You May Enter`.

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(CheckUserAge));
  const initialButton = mockedComponent.find('button').text();
  const enter18AndClickButton = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: '18' } });
    mockedComponent.find('button').simulate('click');
    mockedComponent.update();
    return mockedComponent.find('button').text();
  };
  const enter35AndClickButton = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: '35' } });
    mockedComponent.find('button').simulate('click');
    mockedComponent.update();
    return mockedComponent.find('button').text();
  };
  const userAge18 = enter18AndClickButton();
  const userAge35 = enter35AndClickButton();
  assert(
    initialButton === 'Submit' &&
      userAge18 === 'You May Enter' &&
      userAge35 === 'You May Enter'
  );
})();
```

Після того, як число було прийнято, і значення `input` знову змінилося, текст `button` повинен повернутися до `Submit`.

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(CheckUserAge));
  const enter18AndClickButton = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: '18' } });
    mockedComponent.find('button').simulate('click');
    mockedComponent.update();
    return mockedComponent.find('button').text();
  };
  const changeInputDontClickButton = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: '5' } });
    mockedComponent.update();
    return mockedComponent.find('button').text();
  };
  const enter10AndClickButton = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: '10' } });
    mockedComponent.find('button').simulate('click');
    mockedComponent.update();
    return mockedComponent.find('button').text();
  };
  const userAge18 = enter18AndClickButton();
  const changeInput1 = changeInputDontClickButton();
  const userAge10 = enter10AndClickButton();
  const changeInput2 = changeInputDontClickButton();
  assert(
    userAge18 === 'You May Enter' &&
      changeInput1 === 'Submit' &&
      userAge10 === 'You Shall Not Pass' &&
      changeInput2 === 'Submit'
  );
})();
```

Ваш код не повинен містити конструкцій `if/else`.

```js
assert(
  new RegExp(/(\s|;)if(\s|\()/).test(
    code
  ) === false
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<CheckUserAge />, document.getElementById('root'));
```

## --seed-contents--

```jsx
const inputStyle = {
  width: 235,
  margin: 5
};

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    // Change code below this line

    // Change code above this line
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: ''
    });
  }
  submit() {
    this.setState(state => ({
      userAge: state.input
    }));
  }
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type='number'
          value={this.state.input}
          onChange={this.handleChange}
        />
        <br />
        {/* Change code below this line */}

        {/* Change code above this line */}
      </div>
    );
  }
}
```

# --solutions--

```jsx
const inputStyle = {
  width: 235,
  margin: 5
};

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userAge: '',
      input: ''
    };
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: ''
    });
  }
  submit() {
    this.setState(state => ({
      userAge: state.input
    }));
  }
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type='number'
          value={this.state.input}
          onChange={this.handleChange}
        />
        <br />
        {this.state.userAge === ''
          ? buttonOne
          : this.state.userAge >= 18
          ? buttonTwo
          : buttonThree}
      </div>
    );
  }
}
```
