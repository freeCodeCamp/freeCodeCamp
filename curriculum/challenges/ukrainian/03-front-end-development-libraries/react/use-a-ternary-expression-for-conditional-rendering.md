---
id: 5a24c314108439a4d4036187
title: Використайте тернарний вираз для умовного відтворення
challengeType: 6
forumTopicId: 301414
dashedName: use-a-ternary-expression-for-conditional-rendering
---

# --description--

Перед тим, як перейти до динамічних технік, потрібно розібрати ще один спосіб використання вбудованих умов JavaScript: <dfn>тернарний оператор</dfn>. Тернарний оператор часто використовують як скорочення інструкцій `if/else` в JavaScript. Ці оператори не такі надійні, як традиційні інструкції `if/else`, але дуже популярні серед розробників React. Однією з причин є компіляція JSX, тому інструкції `if/else` не можна вставити одразу в код JSX. Можливо, ви помітили це раніше: коли потрібна інструкція `if/else`, вона завжди була *поза* інструкцією `return`. Тернарні вирази можуть стати чудовою альтернативою, якщо ви хочете імплементувати умовну логіку в JSX. Нагадаємо, що тернарний оператор має три частини, але ви можете поєднати декілька тернарних виразів. Ось основний синтаксис:

```jsx
condition ? expressionIfTrue : expressionIfFalse;
```

# --instructions--

Редактор коду має три константи, визначені в межах методу `render()` компонента `CheckUserAge`. Вони називаються `buttonOne`, `buttonTwo` та `buttonThree`. Кожному з них призначено простий вираз JSX, що представляє кнопку. Спочатку ініціалізуйте стан `CheckUserAge` з `input` та `userAge` зі значеннями порожнього рядка.

Як тільки компонент відтворює інформацію на сторінці, користувачі повинні мати спосіб взаємодіяти з нею. В межах інструкції `return` компонента, встановіть тернарний вираз, який імплементує таку логіку: коли сторінка завантажується вперше, відтворіть кнопку надсилання `buttonOne` на сторінці. Потім, коли користувач введе свій вік та натисне кнопку, відтворіть іншу кнопку на основі віку. Якщо користувач вводить число менше за `18`, відтворіть `buttonThree`. Якщо користувач вводить число більше або рівне `18`, відтворіть `buttonTwo`.

# --hints--

Компонент `CheckUserAge` має відтворюватись з єдиним елементом `input` та єдиним елементом `button`.

```js
assert(
  Enzyme.mount(React.createElement(CheckUserAge)).find('div').find('input')
    .length === 1 &&
    Enzyme.mount(React.createElement(CheckUserAge)).find('div').find('button')
      .length === 1
);
```

Стан компонента `CheckUserAge` має ініціалізуватися властивостями `userAge` та `input` зі значеннями порожніх рядків.

```js
assert(
  Enzyme.mount(React.createElement(CheckUserAge)).state().input === '' &&
    Enzyme.mount(React.createElement(CheckUserAge)).state().userAge === ''
);
```

Коли компонент `CheckUserAge` вперше відтворено в DOM, внутрішнім текстом `button` має бути `Submit`.

```js
assert(
  Enzyme.mount(React.createElement(CheckUserAge)).find('button').text() ===
    'Submit'
);
```

Коли число менше за 18 введено в елементі `input` та натиснуто `button`, внутрішнім текстом `button` має бути `You Shall Not Pass`.

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

Коли число більше або рівне 18 введено в елементі `input` та натиснуто `button`, внутрішнім текстом `button` має бути `You May Enter`.

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

Як тільки число було надіслано, а значення `input` знову було змінено, `button` має повернутись до читання `Submit`.

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

Код не повинен містити інструкцій `if/else`.

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
