---
id: 5a24c314108439a4d4036185
title: Use && for a More Concise Conditional
challengeType: 6
isRequired: false
forumTopicId: 301413
localeTitle: Используйте && для более сжатого условного
---

## Description
<section id='description'>
Операторы if / else работали в последнем вызове, но есть более сжатый способ добиться того же результата. Представьте, что вы отслеживаете несколько условий в компоненте и хотите, чтобы различные элементы отображались в зависимости от каждого из этих условий. Если вы напишете много <code>else if</code> инструкции возвращают несколько разные пользовательские интерфейсы, вы можете повторить код, который оставляет место для ошибки. Вместо этого вы можете использовать <code>&amp;&amp;</code> логический оператор для выполнения условной логики более кратким образом. Это возможно, потому что вы хотите проверить, является ли условие <code>true</code> , а если оно есть, верните некоторую разметку. Вот пример: <code>{condition &amp;&amp; &lt;p&gt;markup&lt;/p&gt;}</code> Если <code>condition</code> <code>true</code> , разметка будет возвращена. Если условие <code>false</code> , операция немедленно вернет значение <code>false</code> после оценки <code>condition</code> и ничего не вернет. Вы можете включить эти утверждения непосредственно в свои JSX и несколько разных условий вместе, написав <code>&amp;&amp;</code> после каждого из них. Это позволяет обрабатывать более сложную условную логику в методе <code>render()</code> не повторяя много кода.
</section>

## Instructions
<section id='instructions'>
Решить предыдущий пример еще раз, так что <code>h1</code> оказывает только если <code>display</code> является <code>true</code> , но использовать <code>&amp;&amp;</code> логический оператор вместо <code>if/else</code> заявление.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyComponent</code> should exist and render.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return mockedComponent.find('MyComponent').length; })());
  - text: When <code>display</code> is set to <code>true</code>, a <code>div</code>, <code>button</code>, and <code>h1</code> should render.
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const state_1 = () => { mockedComponent.setState({display: true}); return waitForIt(() => mockedComponent )}; const updated = await state_1(); assert(updated.find(''div'').length === 1 && updated.find(''div'').children().length === 2 && updated.find(''button'').length === 1 && updated.find(''h1'').length === 1); }; '
  - text: When <code>display</code> is set to <code>false</code>, only a <code>div</code> and <code>button</code> should render.
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const state_1 = () => { mockedComponent.setState({display: false}); return waitForIt(() => mockedComponent )}; const updated = await state_1(); assert(updated.find(''div'').length === 1 && updated.find(''div'').children().length === 1 && updated.find(''button'').length === 1 && updated.find(''h1'').length === 0); }; '
  - text: The render method should use the && logical operator to check the condition of this.state.display.
    testString: getUserInput => assert(getUserInput('index').includes('&&'));

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
         {this.state.display && <h1>Displayed!</h1>}
       </div>
    );
  }
};
```

</section>
