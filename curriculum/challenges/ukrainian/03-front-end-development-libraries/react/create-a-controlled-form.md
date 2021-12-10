---
id: 5a24c314108439a4d4036179
title: Створення контрольованої форми
challengeType: 6
forumTopicId: 301384
dashedName: create-a-controlled-form
---

# --description--

Останнє завдання показало, що React може контролювати внутрішній стан певних елементів, як-то `input` та `textarea`, що робить їх контрольованими компонентами. Це також стосується і інших елементів форм, включно із звичайним елементом HTML `form`.

# --instructions--

Компонент `MyForm` встановлено за допомогою порожнього `form` з ініціалізованим обробником. Ініціалізований обробник буде викликано тоді, коли форма буде відправлена.

Ми додали кнопку, яка відправляє форму. Ви можете побачити, що для неї налаштовано `type` для `submit`, що означає, що кнопка контролює форму. Додайте `input` елемент у `form` і встановіть його `value` та `onChange()` атрибути, як в останньому завданні. Ви повинні виконати метод `handleSubmit`, щоб він міг встановити властивість компоненту `submit` для поточного вхідного значення у локальному `state`.

**Note:** Ви також повинні викликати `event.preventDefault()` у ініціалізованому обробнику, щоб запобігти поводженню об'єкта за замовчуванням, яке оновить веб-сторінку. Для зручності учнів, поводження об'єкту за замовчуванням було вимкнено, щоб запобігти оновленню та скидуванню коду завдання.

Нарешті, створіть тег `h1` після `form`, який відображає значення `submit` зі стану компоненту `state`. Далі ви можете надрукувати щось в формі та клацнути кнопку (або натиснути клавішу Enter), після чого повинні будете побачити результат виведення на сторінці.

# --hints--

`MyForm` повинен повертати елемент `div`, який містить в собі `form` та тег `h1`. Форма повинна включати в себе елементи `input` та `button`.

```js
assert(
  (() => {
    const mockedComponent = Enzyme.mount(React.createElement(MyForm));
    return (
      mockedComponent.find('div').children().find('form').length === 1 &&
      mockedComponent.find('div').children().find('h1').length === 1 &&
      mockedComponent.find('form').children().find('input').length === 1 &&
      mockedComponent.find('form').children().find('button').length === 1
    );
  })()
);
```

Стан `MyForm` повинен ініціалізувати за допомогою `input` та `submit` властивості, для обох встановлені у порожніх рядках.

```js
assert(
  Enzyme.mount(React.createElement(MyForm)).state('input') === '' &&
    Enzyme.mount(React.createElement(MyForm)).state('submit') === ''
);
```

Також елемент `input` повинен відображати значення `input`, що знаходиться в стані компоненту.

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(MyForm));
  const _1 = () => {
    mockedComponent.setState({ input: '' });
    return mockedComponent.state('input');
  };
  const _2 = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: 'TestInput' } });
    return {
      state: mockedComponent.state('input'),
      inputVal: mockedComponent.find('input').props().value
    };
  };
  const before = _1();
  const after = _2();
  assert(
    before === '' &&
      after.state === 'TestInput' &&
      after.inputVal === 'TestInput'
  );
})();
```

Запит форми має бути виконано із `handleSubmit`, який повинен встановлювати `submit` властивість у стані, рівному поточному введенню.

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(MyForm));
  const _1 = () => {
    mockedComponent.setState({ input: '' });
    mockedComponent.setState({ submit: '' });
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: 'SubmitInput' } });
    return mockedComponent.state('submit');
  };
  const _2 = () => {
    mockedComponent.find('form').simulate('submit');
    return mockedComponent.state('submit');
  };
  const before = _1();
  const after = _2();
  assert(before === '' && after === 'SubmitInput');
})();
```

`handleSubmit` повинен викликати `event.preventDefault`

```js
assert(
  __helpers.isCalledWithNoArgs(
    'event.preventDefault',
    MyForm.prototype.handleSubmit.toString()
  )
);
```

Заголовок `h1` повинен відображати значення `submit` поля зі стану компонента.

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(MyForm));
  const _1 = () => {
    mockedComponent.setState({ input: '' });
    mockedComponent.setState({ submit: '' });
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: 'TestInput' } });
    return mockedComponent.find('h1').text();
  };
  const _2 = () => {
    mockedComponent.find('form').simulate('submit');
    return mockedComponent.find('h1').text();
  };
  const before = _1();
  const after = _2();
  assert(before === '' && after === 'TestInput');
})();
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<MyForm />, document.getElementById('root'));
```

## --seed-contents--

```jsx
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    // Change code below this line

    // Change code above this line
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* Change code below this line */}

          {/* Change code above this line */}
          <button type='submit'>Submit!</button>
        </form>
        {/* Change code below this line */}

        {/* Change code above this line */}
      </div>
    );
  }
}
```

# --solutions--

```jsx
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState(state => ({
      submit: state.input
    }));
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.input} onChange={this.handleChange} />
          <button type='submit'>Submit!</button>
        </form>
        <h1>{this.state.submit}</h1>
      </div>
    );
  }
}
```
