---
id: 5a24c314108439a4d403617e
title: Add Event Listeners
challengeType: 6
isRequired: false
forumTopicId: 301377
localeTitle: Добавить слушателей событий
---

## Description
<section id='description'>
Метод <code>componentDidMount()</code> также является лучшим местом для присоединения любых прослушивателей событий, которые необходимо добавить для определенных функций. React предоставляет синтетическую систему событий, которая обертывает родную систему событий браузеров. Это означает, что синтетическая система событий ведет себя точно так же, независимо от браузера пользователя, даже если родные события могут вести себя по-разному между разными браузерами. Вы уже использовали некоторые из этих синтетических обработчиков событий, таких как <code>onClick()</code> . Синтетическая система событий React отлично подходит для большинства взаимодействий, которые вы будете использовать для элементов DOM. Однако, если вы хотите присоединить обработчик событий к объектам документа или окна, вы должны сделать это напрямую.
</section>

## Instructions
<section id='instructions'>
Приложи слушатель событий в методе <code>componentDidMount()</code> для событий <code>keydown</code> и заставь эти события вызывать функцию обратного вызова <code>handleKeyPress()</code> . Вы можете использовать <code>document.addEventListener()</code> который принимает событие (в кавычках) в качестве первого аргумента и обратный вызов в качестве второго аргумента. Затем в <code>componentWillUnmount()</code> удалите этот же прослушиватель событий. Вы можете передать те же аргументы в <code>document.removeEventListener()</code> . Хорошей практикой является использование этого метода жизненного цикла для любой очистки компонентов React перед их размонтированием и уничтожением. Удаление прослушивателей событий является примером одного из таких действий по очистке.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyComponent</code> should render a <code>div</code> element which wraps an <code>h1</code> tag.
    testString: assert((() => { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return mockedComponent.find('div').children().find('h1').length === 1; })());
  - text: A keydown listener should be attached to the document in <code>componentDidMount</code>.
    testString: assert((() => { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const didMountString = mockedComponent.instance().componentDidMount.toString(); return new RegExp('document\.addEventListener(.|\n|\r)+keydown(.|\n|\r)+this\.handleKeyPress').test(didMountString); })());
  - text: The keydown listener should be removed from the document in <code>componentWillUnmount</code>.
    testString: assert((() => { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const willUnmountString = mockedComponent.instance().componentWillUnmount.toString(); return new RegExp('document\.removeEventListener(.|\n|\r)+keydown(.|\n|\r)+this\.handleKeyPress').test(willUnmountString); })());
  - text: Once the component has mounted, pressing <code>enter</code> should update its state and the rendered <code>h1</code> tag.
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const beforeState = mockedComponent.state(''message''); const beforeText = mockedComponent.find(''h1'').text(); const pressEnterKey = () => { mockedComponent.instance().handleKeyPress({ keyCode: 13 }); return waitForIt(() => { mockedComponent.update(); return { state: mockedComponent.state(''message''), text: mockedComponent.find(''h1'').text()}; });}; const afterKeyPress = await pressEnterKey(); assert(beforeState !== afterKeyPress.state && beforeText !== afterKeyPress.text); }; '

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
      message: ''
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  // change code below this line
  componentDidMount() {

  }
  componentWillUnmount() {

  }
  // change code above this line
  handleEnter() {
    this.setState({
      message: this.state.message + 'You pressed the enter key! '
    });
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
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
      message: ''
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleEnter = this.handleEnter.bind(this);  }
  componentDidMount() {
    // change code below this line
    document.addEventListener('keydown', this.handleKeyPress);
    // change code above this line
  }
  componentWillUnmount() {
    // change code below this line
    document.removeEventListener('keydown', this.handleKeyPress);
    // change code above this line
  }
  handleEnter() {
    this.setState({
      message: this.state.message + 'You pressed the enter key! '
    });
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
};
```

</section>
