---
id: 5a24c314108439a4d4036174
title: Bind 'this' to a Class Method
challengeType: 6
isRequired: false
forumTopicId: 301379
localeTitle: Привязать 'это' к методу класса
---

## Description
<section id='description'>
В дополнение к настройке и обновлению <code>state</code> вы также можете определить методы для вашего класса компонента. Метод класса обычно должен использовать <code>this</code> ключевое слово, чтобы он мог обращаться к свойствам класса (например, <code>state</code> и <code>props</code> ) внутри области действия метода. Существует несколько способов разрешить доступ к <code>this</code> методам класса. Один из распространенных способов заключается в том, чтобы явно связать <code>this</code> в конструкторе, чтобы <code>this</code> стало привязано к методам класса, когда компонент инициализирован. Возможно, вы заметили, что последний вызов использовал <code>this.handleClick = this.handleClick.bind(this)</code> для его метода <code>handleClick</code> в конструкторе. Затем, когда вы вызываете функцию типа <code>this.setState()</code> внутри вашего метода класса, <code>this</code> относится к классу и не будет <code>undefined</code> . <strong>Примечание:</strong> <code>this</code> ключевое слово является одним из наиболее запутанных аспектов JavaScript , но он играет важную роль в React. Хотя его поведение здесь совершенно нормальное, эти уроки не являются местом для углубленного обзора <code>this</code> поэтому, пожалуйста, обратитесь к другим урокам, если приведенное выше смущает!
</section>

## Instructions
<section id='instructions'>
Редактор кода имеет компонент с <code>state</code> которое отслеживает количество элементов. Он также имеет метод, который позволяет вам увеличивать количество этого элемента. Однако этот метод не работает , потому что он , используя <code>this</code> ключевое слово, которое не определено. Исправьте его, явно привязывая <code>this</code> к <code>addItem()</code> в конструкторе компонента. Затем добавьте обработчик кликов к элементу <code>button</code> в методе рендеринга. Он должен вызывать метод <code>addItem()</code> когда кнопка получает событие щелчка. Помните, что метод, который вы передаете обработчику <code>onClick</code> требует фигурных скобок, потому что его следует интерпретировать непосредственно как JavaScript. После того, как вы выполните вышеуказанные шаги, вы сможете щелкнуть по кнопке и увидеть инкремент количества элементов в HTML.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyComponent</code> should return a <code>div</code> element which wraps two elements, a button and an <code>h1</code> element, in that order.
    testString: assert(Enzyme.mount(React.createElement(MyComponent)).find('div').length === 1 && Enzyme.mount(React.createElement(MyComponent)).find('div').childAt(0).type() === 'button' && Enzyme.mount(React.createElement(MyComponent)).find('div').childAt(1).type() === 'h1');
  - text: 'The state of <code>MyComponent</code> should initialize with the key value pair <code>{ itemCount: 0 }</code>.'
    testString: assert(Enzyme.mount(React.createElement(MyComponent)).state('itemCount') === 0);
  - text: Clicking the <code>button</code> element should run the <code>addItem</code> method and increment the state <code>itemCount</code> by <code>1</code>.
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const first = () => { mockedComponent.setState({ itemCount: 0 }); return waitForIt(() => mockedComponent.state(''itemCount'')); }; const second = () => { mockedComponent.find(''button'').simulate(''click''); return waitForIt(() => mockedComponent.state(''itemCount'')); }; const firstValue = await first(); const secondValue = await second(); assert(firstValue === 0 && secondValue === 1); };'

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
      itemCount: 0
    };
    // change code below this line

    // change code above this line
  }
  addItem() {
    this.setState({
      itemCount: this.state.itemCount + 1
    });
  }
  render() {
    return (
      <div>
        { /* change code below this line */ }
        <button>Click Me</button>
        { /* change code above this line */ }
        <h1>Current Item Count: {this.state.itemCount}</h1>
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
      itemCount: 0
    };
    this.addItem = this.addItem.bind(this);
  }
  addItem() {
    this.setState({
      itemCount: this.state.itemCount + 1
    });
  }
  render() {
    return (
      <div>
        <button onClick = {this.addItem}>Click Me</button>
        <h1>Current Item Count: {this.state.itemCount}</h1>
      </div>
    );
  }
};
```

</section>
