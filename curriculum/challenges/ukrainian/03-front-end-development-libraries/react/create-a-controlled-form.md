---
id: 5a24c314108439a4d4036179
title: Створіть контрольовану форму
challengeType: 6
forumTopicId: 301384
dashedName: create-a-controlled-form
---

# --description--

Попереднє завдання показало, що React може контролювати внутрішній стан певних елементів, серед яких `input` та `textarea`, що робить їх контрольованими компонентами. Це стосується й інших елементів форми, включно зі звичайним елементом HTML `form`.

# --instructions--

Компонент `MyForm` встановлений з порожньою `form` з обробником надсилання. Обробник надсилання буде викликано тоді, коли форма буде надіслана.

Ми додали кнопку, яка надсилає форму. Як бачите, вона має `type` зі значенням `submit`, тобто ця кнопка контролює форму. Додайте елемент `input` до `form` і встановіть його атрибути `value` та `onChange()` як в попередньому завданні. Потім завершіть метод `handleSubmit`, щоб він налаштовував властивість стану компонента `submit` на поточне значення введення в локальному стані.

**Примітка:** ви також маєте викликати `event.preventDefault()` в обробнику надсилання, щоб уникнути поведінки надсилання форми за замочуванням, що оновлює сторінку. Ми відключили поведінку за замовчуванням для вашої зручності, щоб уникнути оновлення та скидання завдання.

Вкінці створіть тег `h1` після `form`, що відтворює значення `submit` зі стану компонента. Після цього ви можете писати у формі та натиснути кнопку (або enter), і побачите відтворене введення на сторінці.

# --hints--

`MyForm` має повернути елемент `div`, який містить `form` та тег `h1`. Форма має містити `input` та `button`.

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

Стан `MyForm` має ініціалізуватися властивостями `input` та `submit` зі значеннями порожніх рядків.

```js
assert(
  Enzyme.mount(React.createElement(MyForm)).state('input') === '' &&
    Enzyme.mount(React.createElement(MyForm)).state('submit') === ''
);
```

Внаслідок введення в елементі `input` має оновитись властивість `input` стану компонента.

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

Внаслідок надсилання форми має запуститись `handleSubmit`, що має встановити значення властивості `submit` у стані на поточне введення.

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

`handleSubmit` має викликати `event.preventDefault`

```js
assert(
  __helpers.isCalledWithNoArgs(
    'event.preventDefault',
    MyForm.prototype.handleSubmit.toString()
  )
);
```

Заголовок `h1` має відтворити значення поля `submit` зі стану компонента.

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
