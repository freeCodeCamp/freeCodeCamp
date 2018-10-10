---
id: 5a24c314108439a4d4036171
title: Render State in the User Interface
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Состояние визуализации в пользовательском интерфейсе
---

## Description
<section id="description"> Как только вы определяете начальное состояние компонента, вы можете отобразить любую его часть в визуализированном пользовательском интерфейсе. Если компонент является состоятельным, он всегда будет иметь доступ к данным в <code>state</code> в методе <code>render()</code> . Вы можете получить доступ к данным с помощью <code>this.state</code> . Если вы хотите получить доступ к значению состояния в <code>return</code> метода рендеринга, вы должны заключить его в фигурные скобки. <code>State</code> - одна из самых мощных особенностей компонентов в React. Он позволяет отслеживать важные данные в вашем приложении и отображать пользовательский интерфейс в ответ на изменения этих данных. Если ваши данные изменятся, ваш пользовательский интерфейс изменится. React использует то, что называется виртуальным DOM, чтобы отслеживать изменения за кулисами. Когда данные состояния обновляются, он запускает повторную визуализацию компонентов с использованием этих данных, включая дочерние компоненты, которые получили данные в качестве опоры. React обновляет фактический DOM, но только там, где это необходимо. Это означает, что вам не нужно беспокоиться об изменении DOM. Вы просто заявляете, как должен выглядеть пользовательский интерфейс. Обратите внимание, что если вы создаете компонент с состоянием, никакие другие компоненты не знают о его <code>state</code> . Его <code>state</code> полностью инкапсулировано или локально для этого компонента, если вы не передадите данные состояния дочернему компоненту в качестве <code>props</code> . Это понятие инкапсулированного <code>state</code> очень важно, поскольку оно позволяет вам писать определенную логику, а затем содержать и изолировать эту логику в одном месте вашего кода. </section>

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert(Enzyme.mount(React.createElement(MyComponent)).state("name") === "freeCodeCamp", "<code>MyComponent</code> should have a key <code>name</code> with value <code>freeCodeCamp</code> stored in its state.");'
  - text: <code>MyComponent</code> должен отображать заголовок <code>h1</code> заключенный в один <code>div</code> .
    testString: 'assert(/<div><h1>.*<\/h1><\/div>/.test(Enzyme.mount(React.createElement(MyComponent)).html()), "<code>MyComponent</code> should render an <code>h1</code> header enclosed in a single <code>div</code>.");'
  - text: 'Представленный <code>h1</code> заголовок должен содержать текст, отображаемый из состояния компонента.'
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const first = () => { mockedComponent.setState({ name: "TestName" });   return waitForIt(() => mockedComponent.html()) }; const firstValue = await first(); assert(firstValue === "<div><h1>TestName</h1></div>", "The rendered <code>h1</code> header should contain text rendered from the component&apos;s state.");};'

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


### After Test
<div id='jsx-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
