---
id: 5a24c314108439a4d4036166
title: Compose React Components
challengeType: 6
isRequired: false
forumTopicId: 301381
localeTitle: Компоновка компонентов реакции
---

## Description
<section id='description'>
Поскольку проблемы продолжают использовать более сложные композиции с компонентами React и JSX, есть еще один важный момент. Рендеринг компонентов класса стиля ES6 в других компонентах ничем не отличается от рендеринга простых компонентов, которые вы использовали в последних нескольких задачах. Вы можете отображать элементы JSX, функциональные компоненты без состояния и компоненты класса ES6 в других компонентах.
</section>

## Instructions
<section id='instructions'>
В редакторе <code>TypesOfFood</code> компонент <code>TypesOfFood</code> уже выполняет компонент под названием « <code>Vegetables</code> . Кроме того, из последней задачи есть компонент <code>Fruits</code> . Гнездо два компонента внутри <code>Fruits</code> - сначала <code>NonCitrus</code> , а затем <code>Citrus</code> . Оба этих компонента предоставляются вам в фоновом режиме. Затем <code>TypesOfFood</code> компонент класса <code>Fruits</code> компонент <code>TypesOfFood</code> , ниже заголовка <code>h1</code> и выше <code>Vegetables</code> . Результатом должен быть ряд вложенных компонентов, который использует два разных типа компонентов.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>TypesOfFood</code> component should return a single <code>div</code> element.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood)); return mockedComponent.children().type() === 'div'; })());
  - text: The <code>TypesOfFood</code> component should return the <code>Fruits</code> component.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood)); return mockedComponent.children().childAt(1).name() === 'Fruits'; })());
  - text: The <code>Fruits</code> component should return the <code>NonCitrus</code> component and the <code>Citrus</code> component.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood)); return (mockedComponent.find('Fruits').children().find('NonCitrus').length === 1 && mockedComponent.find('Fruits').children().find('Citrus').length === 1); })());
  - text: The <code>TypesOfFood</code> component should return the <code>Vegetables</code> component below the <code>Fruits</code> component.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood)); return mockedComponent.children().childAt(2).name() === 'Vegetables'; })());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        { /* change code below this line */ }

        { /* change code above this line */ }
      </div>
    );
  }
};

class TypesOfFood extends React.Component {
  constructor(props) {
     super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* change code below this line */ }

        { /* change code above this line */ }
        <Vegetables />
      </div>
    );
  }
};

```

</div>

### Before Tests
<div id='jsx-setup'>

```jsx
class NonCitrus extends React.Component {
  render() {
    return (
      <div>
        <h4>Non-Citrus:</h4>
        <ul>
          <li>Apples</li>
          <li>Blueberries</li>
          <li>Strawberries</li>
          <li>Bananas</li>
        </ul>
      </div>
    );
  }
};
class Citrus extends React.Component {
  render() {
    return (
      <div>
        <h4>Citrus:</h4>
        <ul>
          <li>Lemon</li>
          <li>Lime</li>
          <li>Orange</li>
          <li>Grapefruit</li>
        </ul>
      </div>
    );
  }
};
class Vegetables extends React.Component {
  render() {
    return (
      <div>
        <h2>Vegetables:</h2>
        <ul>
          <li>Brussel Sprouts</li>
          <li>Broccoli</li>
          <li>Squash</li>
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
ReactDOM.render(<TypesOfFood />, document.getElementById('root'))

```

</div>

</section>

## Solution
<section id='solution'>

```jsx
class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        { /* change code below this line */ }
        <NonCitrus />
        <Citrus />
        { /* change code above this line */ }
      </div>
    )
  }
}

class TypesOfFood extends React.Component {
  constructor(props) {
     super(props);
  }
    render() {
      return (
        <div>
        <h1>Types of Food:</h1>
          { /* change code below this line */ }
          <Fruits />
          { /* change code above this line */ }
          <Vegetables />
        </div>
      );
    }
};
```

</section>
