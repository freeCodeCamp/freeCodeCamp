---
id: 5a24c314108439a4d4036184
title: Render with an If-Else Condition
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Выдавать с условием If-Else
---

## Description
<section id="description"> Еще одно применение JavaScript для управления вашим визуализированным представлением - связать элементы, которые отображаются в состоянии. Когда условие истинно, отображается один вид. Когда это ложно, это другое мнение. Вы можете сделать это с помощью стандартного оператора <code>if/else</code> в методе <code>render()</code> компонента React. </section>

## Instructions
<section id="instructions"> MyComponent содержит <code>boolean</code> в своем состоянии, которое отслеживает, хотите ли вы отображать какой-либо элемент в пользовательском интерфейсе или нет. <code>button</code> переключает состояние этого значения. В настоящее время он отображает один и тот же пользовательский интерфейс каждый раз. Перепишите метод <code>render()</code> с инструкцией <code>if/else</code> чтобы, если <code>display</code> <code>true</code> , вы возвращаете текущую разметку. В противном случае верните разметку без элемента <code>h1</code> . <strong>Примечание.</strong> Вы должны написать <code>if/else</code> для прохождения тестов. Использование тернарного оператора здесь не будет. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyComponent</code> должен существовать и визуализироваться.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return mockedComponent.find("MyComponent").length === 1; })(), "<code>MyComponent</code> should exist and render.");'
  - text: 'Когда для <code>display</code> установлено значение <code>true</code> , необходимо <code>display</code> <code>div</code> , <code>button</code> и <code>h1</code> .'
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const state_1 = () => { mockedComponent.setState({display: true}); return waitForIt(() => mockedComponent )}; const updated = await state_1(); assert(mockedComponent.find("div").length === 1 && mockedComponent.find("div").children().length === 2 && mockedComponent.find("button").length === 1 && mockedComponent.find("h1").length === 1, "When <code>display</code> is set to <code>true</code>, a <code>div</code>, <code>button</code>, and <code>h1</code> should render."); }; '
  - text: 'Если для <code>display</code> установлено значение « <code>false</code> , нужно отобразить только <code>div</code> и <code>button</code> .'
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const state_1 = () => { mockedComponent.setState({display: false}); return waitForIt(() => mockedComponent )}; const updated = await state_1(); assert(mockedComponent.find("div").length === 1 && mockedComponent.find("div").children().length === 1 && mockedComponent.find("button").length === 1 && mockedComponent.find("h1").length === 0, "When <code>display</code> is set to <code>false</code>, only a <code>div</code> and <code>button</code> should render."); }; '
  - text: Метод render должен использовать оператор <code>if/else</code> для проверки состояния <code>this.state.display</code> .
    testString: 'getUserInput => assert(getUserInput("index").includes("if") && getUserInput("index").includes("else"), "The render method should use an <code>if/else</code> statement to check the condition of <code>this.state.display</code>.");'

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
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState({
      display: !this.state.display
    });
  }
  render() {
    // change code below this line

    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         <h1>Displayed!</h1>
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
