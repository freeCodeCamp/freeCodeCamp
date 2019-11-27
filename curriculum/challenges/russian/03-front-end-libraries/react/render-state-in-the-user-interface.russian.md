---
id: 5a24c314108439a4d4036171
title: Render State in the User Interface
challengeType: 6
isRequired: false
forumTopicId: 301409
localeTitle: Состояние визуализации в пользовательском интерфейсе
---

## Description
<section id='description'>
Как только вы определяете начальное состояние компонента, вы можете отобразить любую его часть в визуализированном пользовательском интерфейсе. Если компонент является состоятельным, он всегда будет иметь доступ к данным в <code>state</code> в методе <code>render()</code> . Вы можете получить доступ к данным с помощью <code>this.state</code> . Если вы хотите получить доступ к значению состояния в <code>return</code> метода рендеринга, вы должны заключить его в фигурные скобки. <code>State</code> - одна из самых мощных особенностей компонентов в React. Он позволяет отслеживать важные данные в вашем приложении и отображать пользовательский интерфейс в ответ на изменения этих данных. Если ваши данные изменятся, ваш пользовательский интерфейс изменится. React использует то, что называется виртуальным DOM, чтобы отслеживать изменения за кулисами. Когда данные состояния обновляются, он запускает повторную визуализацию компонентов с использованием этих данных, включая дочерние компоненты, которые получили данные в качестве опоры. React обновляет фактический DOM, но только там, где это необходимо. Это означает, что вам не нужно беспокоиться об изменении DOM. Вы просто заявляете, как должен выглядеть пользовательский интерфейс. Обратите внимание, что если вы создаете компонент с состоянием, никакие другие компоненты не знают о его <code>state</code> . Его <code>state</code> полностью инкапсулировано или локально для этого компонента, если вы не передадите данные состояния дочернему компоненту в качестве <code>props</code> . Это понятие инкапсулированного <code>state</code> очень важно, поскольку оно позволяет вам писать определенную логику, а затем содержать и изолировать эту логику в одном месте вашего кода.
</section>

## Instructions
<section id='instructions'>
In the code editor, <code>MyComponent</code> is already stateful. Define an <code>h1</code> tag in the component's render method which renders the value of <code>name</code> from the component's state.
<strong>Note:</strong>&nbsp;The <code>h1</code> should only render the value from <code>state</code> and nothing else. In JSX, any code you write with curly braces <code>{ }</code> will be treated as JavaScript. So to access the value from <code>state</code> just enclose the reference in curly braces.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyComponent</code> should have a key <code>name</code> with value <code>freeCodeCamp</code> stored in its state.
    testString: assert(Enzyme.mount(React.createElement(MyComponent)).state('name') === 'freeCodeCamp');
  - text: <code>MyComponent</code> should render an <code>h1</code> header enclosed in a single <code>div</code>.
    testString: assert(/<div><h1>.*<\/h1><\/div>/.test(Enzyme.mount(React.createElement(MyComponent)).html()));
  - text: The rendered <code>h1</code> header should contain text rendered from the component&apos;s state.
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const first = () => { mockedComponent.setState({ name: ''TestName'' });   return waitForIt(() => mockedComponent.html()) }; const firstValue = await first(); assert(firstValue === ''<div><h1>TestName</h1></div>'');};'

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
      name: 'freeCodeCamp'
    }
  }
  render() {
    return (
      <div>
        { /* change code below this line */ }

        { /* change code above this line */ }
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
      name: 'freeCodeCamp'
    }
  }
  render() {
    return (
      <div>
        { /* change code below this line */ }
        <h1>{this.state.name}</h1>
        { /* change code above this line */ }
      </div>
    );
  }
};
```

</section>
