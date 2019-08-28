---
id: 5a24c314108439a4d4036169
title: Pass Props to a Stateless Functional Component
challengeType: 6
isRequired: false
forumTopicId: 301402
localeTitle: Передача реквизитов функциональному компоненту без состояния
---

## Description
<section id='description'>
Предыдущие проблемы много касались создания и компоновки элементов JSX, функциональных компонентов и компонентов класса стиля ES6 в React. С этим основанием пришло время взглянуть на еще одну особенность, часто встречающуюся в React: <b>реквизитах</b> . В React вы можете передать реквизиты или свойства дочерним компонентам. Скажем, у вас есть компонент <code>App</code> который отображает дочерний компонент <code>Welcome</code> который является функциональным компонентом без состояния. Вы можете пройти <code>Welcome</code> в <code>user</code> собственность, написав: <blockquote> &lt;App&gt; <br> &lt;Welcome user = &#39;Mark&#39; /&gt; <br> &lt;/ Приложение&gt; </blockquote> Вы используете <strong>пользовательские атрибуты HTML,</strong> которые React предоставляет поддержку для передачи <code>user</code> свойства в компонент <code>Welcome</code> . Поскольку <code>Welcome</code> является функциональным компонентом без состояния, он имеет доступ к этому значению следующим образом: <blockquote> const Добро пожаловать = (реквизит) =&gt; &lt;h1&gt; Здравствуйте, {props.user}! &lt;/ h1&gt; </blockquote> Стандартно вызывать это значение <code>props</code> и при работе с функциональными компонентами без состояния, вы в основном рассматриваете его как аргумент функции, которая возвращает JSX. Вы можете получить доступ к значению аргумента в теле функции. С компонентами класса вы увидите, что это немного отличается.
</section>

## Instructions
<section id='instructions'>
В редакторе кода <code>CurrentDate</code> компоненты <code>Calendar</code> и <code>CurrentDate</code> . При рендеринге <code>CurrentDate</code> из компонента <code>Calendar</code> передайте свойство <code>date</code> назначенное текущей дате из объекта <code>Date</code> JavaScript. Затем получите доступ к этой <code>prop</code> в компоненте <code>CurrentDate</code> , показывая ее значение в тегах <code>p</code> . Обратите внимание, что для значений <code>prop</code> которые будут оцениваться как JavaScript, они должны быть заключены в фигурные скобки, например <code>date={Date()}</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>Calendar</code> component should return a single <code>div</code> element.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(Calendar)); return mockedComponent.children().type() === 'div'; })());
  - text: The second child of the <code>Calendar</code> component should be the <code>CurrentDate</code> component.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(Calendar)); return mockedComponent.children().childAt(1).name() === 'CurrentDate'; })());
  - text: The <code>CurrentDate</code> component should have a prop called <code>date</code>.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(Calendar)); return mockedComponent.children().childAt(1).props().date })());
  - text: The <code>date</code> prop of the <code>CurrentDate</code> should contain a string of text.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(Calendar)); const prop = mockedComponent.children().childAt(1).props().date; return( typeof prop === 'string' && prop.length > 0 ); })());
  - text: The <code>CurrentDate</code> component should render the value from the <code>date</code> prop in the <code>p</code> tag.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(Calendar)); return mockedComponent.find('p').html().includes(Date().substr(3)); })());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const CurrentDate = (props) => {
  return (
    <div>
      { /* change code below this line */ }
      <p>The current date is: </p>
      { /* change code above this line */ }
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        { /* change code below this line */ }
        <CurrentDate />
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
ReactDOM.render(<Calendar />, document.getElementById('root'))

```

</div>

</section>

## Solution
<section id='solution'>

```jsx
const CurrentDate = (props) => {
  return (
    <div>
      { /* change code below this line */ }
      <p>The current date is: {props.date}</p>
      { /* change code above this line */ }
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        { /* change code below this line */ }
        <CurrentDate date={Date()} />
        { /* change code above this line */ }
      </div>
    );
  }
};
```

</section>
