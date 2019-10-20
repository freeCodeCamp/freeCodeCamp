---
id: 5a24c314108439a4d4036178
title: Create a Controlled Input
challengeType: 6
isRequired: false
forumTopicId: 301385
localeTitle: Создание управляемого входа
---

## Description
<section id='description'>
У вашего приложения может быть более сложное взаимодействие между <code>state</code> и отображаемым пользовательским интерфейсом. Например, элементы управления формой для ввода текста, такие как <code>input</code> и текстовые <code>textarea</code> , сохраняют свое собственное состояние в DOM по типу пользователя. С React, вы можете переместить это изменяемое состояние в React компонента <code>state</code> . Ввод пользователя становится частью приложения <code>state</code> , так что React контролирует значение этого поля ввода. Как правило, если у вас есть компоненты React с полями ввода, которые пользователь может ввести, это будет управляемая форма ввода.
</section>

## Instructions
<section id='instructions'>
Редактор кода имеет скелет компонента, называемого <code>ControlledInput</code> для создания управляемого элемента <code>input</code> . Компонента <code>state</code> уже инициализирован с <code>input</code> свойством , который содержит пустую строку. Это значение представляет собой текст, который пользователь вводит в поле <code>input</code> . Сначала создайте метод <code>handleChange()</code> который имеет параметр, называемый <code>event</code> . Когда метод вызывается, он получает объект <code>event</code> который содержит строку текста из <code>input</code> элемента. Вы можете получить доступ к этой строке с помощью <code>event.target.value</code> внутри метода. Обновление <code>input</code> свойства компоненты <code>state</code> с новой строкой. В методе рендеринга создайте элемент <code>input</code> над тегом <code>h4</code> . Добавьте <code>value</code> атрибута , которое равно <code>input</code> свойству компонента <code>state</code> . Затем добавьте обработчик события <code>onChange()</code> заданный для <code>handleChange()</code> . Когда вы вводите поле ввода, этот текст обрабатывается методом <code>handleChange()</code> , устанавливается как свойство <code>input</code> в локальном <code>state</code> и отображается как значение в поле <code>input</code> на странице. Компонент <code>state</code> является единственным источником истины относительно входных данных. И последнее, но не менее важное: не забудьте добавить необходимые привязки в конструктор.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>ControlledInput</code> should return a <code>div</code> element which contains an <code>input</code> and a <code>p</code> tag.
    testString: assert(Enzyme.mount(React.createElement(ControlledInput)).find('div').children().find('input').length === 1 && Enzyme.mount(React.createElement(ControlledInput)).find('div').children().find('p').length === 1);
  - text: The state of <code>ControlledInput</code> should initialize with an <code>input</code> property set to an empty string.
    testString: assert.strictEqual(Enzyme.mount(React.createElement(ControlledInput)).state('input'), '');
  - text: Typing in the input element should update the state and the value of the input, and the <code>p</code> element should render this state as you type.
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(ControlledInput)); const _1 = () => { mockedComponent.setState({ input: '''' }); return waitForIt(() => mockedComponent.state(''input''))}; const _2 = () => { mockedComponent.find(''input'').simulate(''change'', { target: { value: ''TestInput'' }}); return waitForIt(() => ({ state: mockedComponent.state(''input''), text: mockedComponent.find(''p'').text(), inputVal: mockedComponent.find(''input'').props().value }))}; const before = await _1(); const after = await _2(); assert(before === '''' && after.state === ''TestInput'' && after.text === ''TestInput'' && after.inputVal === ''TestInput''); }; '

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    // change code below this line

    // change code above this line
  }
  // change code below this line

  // change code above this line
  render() {
    return (
      <div>
        { /* change code below this line */}

        { /* change code above this line */}
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};

```

</div>

### After Tests
<div id='jsx-teardown'>

```jsx
ReactDOM.render(<ControlledInput />, document.getElementById('root'))

```

</div>

</section>

## Solution
<section id='solution'>

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

</section>
