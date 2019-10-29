---
id: 5a24c314108439a4d403618a
title: Use Array.map() to Dynamically Render Elements
challengeType: 6
isRequired: false
forumTopicId: 301417
localeTitle: Используйте Array.map () для динамически визуализирующих элементов
---

## Description
<section id='description'>
Условный рендеринг полезен, но вам могут понадобиться ваши компоненты для отображения неизвестного количества элементов. Часто в реактивном программировании программист не имеет никакого способа узнать, какое состояние приложения находится во время выполнения, потому что так много зависит от взаимодействия пользователя с этой программой. Программистам необходимо написать свой код для правильной обработки этого неизвестного состояния раньше времени. Использование <code>Array.map()</code> в React иллюстрирует это понятие. Например, вы создаете простое приложение «To Do List». Как программист, у вас нет способа узнать, сколько элементов пользователь может иметь в своем списке. Вам необходимо настроить компонент для <em><strong>динамического отображения</strong></em> правильного количества элементов списка задолго до того, как кто-то, использующий программу, решит, что сегодня день прачечной.
</section>

## Instructions
<section id='instructions'>
Редактор кода имеет большую часть компонента <code>MyToDoList</code> . Некоторые из этого кода должны выглядеть знакомыми, если вы завершили задачу контролируемой формы. Вы заметите <code>textarea</code> и <code>button</code> , а также несколько методов, которые отслеживают их состояния, но пока ничего не отображается на странице. Внутри <code>constructor</code> создайте объект <code>this.state</code> и определите два состояния: <code>userInput</code> должен быть инициализирован как пустая строка, а <code>toDoList</code> должен быть инициализирован как пустой массив. Затем удалите комментарий в методе <code>render()</code> рядом с переменной <code>items</code> . На своем месте, <code>toDoList</code> массив <code>toDoList</code> хранящийся во внутреннем состоянии компонента, и динамически визуализируйте <code>li</code> для каждого элемента. Попробуйте ввести строку <code>eat, code, sleep, repeat</code> в <code>textarea</code> , затем нажмите кнопку и посмотрите, что произойдет. <strong>Примечание.</strong> Возможно, вы знаете, что все дочерние элементы дочернего элемента, созданные с помощью операции сопоставления, такие как это, должны быть снабжены уникальным <code>key</code> атрибутом. Не беспокойтесь, это тема следующей задачи.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The MyToDoList component should exist and render to the page.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyToDoList)); return mockedComponent.find('MyToDoList').length === 1; })());
  - text: The first child of <code>MyToDoList</code> should be a <code>textarea</code> element.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyToDoList)); return mockedComponent.find('MyToDoList').children().childAt(0).type() === 'textarea'; })());
  - text: The third child of <code>MyToDoList</code> should be a <code>button</code> element.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyToDoList)); return mockedComponent.find('MyToDoList').children().childAt(2).type() === 'button'; })());
  - text: The state of <code>MyToDoList</code> should be initialized with <code>toDoList</code> as an empty array.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyToDoList)); const initialState = mockedComponent.state(); return Array.isArray(initialState.toDoList) === true && initialState.toDoList.length === 0; })());
  - text: The state of <code>MyToDoList</code> should be initialized with <code>userInput</code> as an empty string.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyToDoList)); const initialState = mockedComponent.state(); return typeof initialState.userInput === 'string' && initialState.userInput.length === 0; })());
  - text: When the <code>Create List</code> button is clicked, the <code>MyToDoList</code> component should dynamically return an unordered list that contains a list item element for every item of a comma-separated list entered into the <code>textarea</code> element.
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100)); const mockedComponent = Enzyme.mount(React.createElement(MyToDoList)); const simulateChange = (el, value) => el.simulate(''change'', {target: {value}}); const state_1 = () => { return waitForIt(() => mockedComponent.find(''ul'').find(''li''))}; const setInput = () => { return waitForIt(() => simulateChange(mockedComponent.find(''textarea''), "testA, testB, testC"))}; const click = () => { return waitForIt(() => mockedComponent.find(''button'').simulate(''click''))}; const state_2 = () => { return waitForIt(() => { const nodes = mockedComponent.find(''ul'').find(''li''); return { nodes, text: nodes.reduce((t, n) => t + n.text(), '''') }; })}; const setInput_2 = () => { return waitForIt(() => simulateChange(mockedComponent.find(''textarea''), "t1, t2, t3, t4, t5, t6"))}; const click_1 = () => { return waitForIt(() => mockedComponent.find(''button'').simulate(''click''))}; const state_3 = () => { return waitForIt(() => { const nodes = mockedComponent.find(''ul'').find(''li''); return { nodes, text: nodes.reduce((t, n) => t + n.text(), '''') }; })}; const awaited_state_1 = await state_1(); const awaited_setInput = await setInput(); const awaited_click = await click(); const awaited_state_2 = await state_2(); const awaited_setInput_2 = await setInput_2(); const awaited_click_1 = await click_1(); const awaited_state_3 = await state_3(); assert(awaited_state_1.length === 0 && awaited_state_2.nodes.length === 3 && awaited_state_3.nodes.length === 6 && awaited_state_2.text === ''testA testB testC'' && awaited_state_3.text === ''t1 t2 t3 t4 t5 t6''); }; '

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const textAreaStyles = {
  width: 235,
  margin: 5
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    // change code below this line

    // change code above this line
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
    const items = null; // change code here
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder="Separate Items With Commas" /><br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>
          {items}
        </ul>
      </div>
    );
  }
};

```

</div>

### After Tests
<div id='jsx-teardown'>

```jsx
ReactDOM.render(<MyToDoList />, document.getElementById('root'))

```

</div>

</section>

## Solution
<section id='solution'>

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
    }
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
    const items = this.state.toDoList.map( (item, i) => {
      return <li key={i}>{item}</li>
    });
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder="Separate Items With Commas" /><br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>
          {items}
        </ul>
      </div>
    );
  }
};
```

</section>
