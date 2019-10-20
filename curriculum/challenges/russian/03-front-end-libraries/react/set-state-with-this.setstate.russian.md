---
id: 5a24c314108439a4d4036173
title: Set State with this.setState
challengeType: 6
isRequired: false
forumTopicId: 301412
localeTitle: Установить состояние с this.setState
---

## Description
<section id='description'>
Предыдущие проблемы охватывали <code>state</code> компонента и как инициализировать состояние в <code>constructor</code> . Существует также способ изменения компоненты <code>state</code> . React предоставляет способ обновления <code>state</code> компонента, называемого <code>setState</code> . Вы вызываете метод <code>setState</code> в своем классе компонентов следующим образом: <code>this.setState()</code> , передавая объект с парами ключ-значение. Ключами являются ваши свойства состояния, а значения - это обновленные данные состояния. Например, если мы сохраняем <code>username</code> в состоянии и хотим его обновить, он будет выглядеть так: <blockquote> this.setState ({ <br> имя пользователя: &#39;Lewis&#39; <br> }); </blockquote> React ожидает, что вы никогда не измените <code>state</code> напрямую, вместо этого всегда используйте <code>this.setState()</code> когда происходят изменения состояния. Кроме того, вы должны отметить, что React может выполнять несколько обновлений состояния, чтобы повысить производительность. Это означает, что обновления состояния через метод <code>setState</code> могут быть асинхронными. Существует альтернативный синтаксис метода <code>setState</code> который обеспечивает способ решения этой проблемы. Это редко необходимо, но хорошо помнить об этом! Для получения дополнительной информации обратитесь к <a target="_blank" href="https://facebook.github.io/react/docs/state-and-lifecycle.html">документации React</a> .
</section>

## Instructions
<section id='instructions'>
В редакторе кода есть элемент <code>button</code> который имеет обработчик <code>onClick()</code> . Этот обработчик запускается, когда <code>button</code> получает событие click в браузере и запускает метод <code>handleClick</code> определенный в <code>MyComponent</code> . В методе <code>handleClick</code> обновите <code>state</code> компонента, используя <code>this.setState()</code> . Задайте свойство <code>name</code> в <code>state</code> равным строке <code>React Rocks!</code> , Нажмите кнопку и просмотрите обновленное состояние. Не беспокойтесь, если вы не совсем понимаете, как работает код обработчика кликов. Это связано с предстоящими проблемами.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'The state of <code>MyComponent</code> should initialize with the key value pair <code>{ name: Initial State }</code>.'
    testString: assert(Enzyme.mount(React.createElement(MyComponent)).state('name') === 'Initial State');
  - text: <code>MyComponent</code> should render an <code>h1</code> header.
    testString: assert(Enzyme.mount(React.createElement(MyComponent)).find('h1').length === 1);
  - text: The rendered <code>h1</code> header should contain text rendered from the component&apos;s state.
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const first = () => { mockedComponent.setState({ name: ''TestName'' }); return waitForIt(() => mockedComponent.html()); }; const firstValue = await first(); assert(/<h1>TestName<\/h1>/.test(firstValue)); };'
  - text: Calling the <code>handleClick</code> method on <code>MyComponent</code> should set the name property in state to equal <code>React Rocks!</code>.
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const first = () => { mockedComponent.setState({ name: ''Before'' }); return waitForIt(() => mockedComponent.state(''name'')); }; const second = () => { mockedComponent.instance().handleClick(); return waitForIt(() => mockedComponent.state(''name'')); }; const firstValue = await first(); const secondValue = await second(); assert(firstValue === ''Before'' && secondValue === ''React Rocks!''); };'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // change code below this line

    // change code above this line
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};

```

</div>

### After Tests
<div id='jsx-teardown'>

```jsx
ReactDOM.render(<MyComponent />, document.getElementById('root'))

```

</div>

</section>

## Solution
<section id='solution'>

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
     // change code below this line
    this.setState({
      name: 'React Rocks!'
    });
    // change code above this line
  }
  render() {
    return (
      <div>
        <button onClick = {this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
```

</section>
