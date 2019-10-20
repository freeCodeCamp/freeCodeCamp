---
id: 5a24c314108439a4d4036167
title: Render a Class Component to the DOM
challengeType: 6
isRequired: false
forumTopicId: 301404
localeTitle: Отобразить компонент класса в DOM
---

## Description
<section id='description'>
Вы можете вспомнить использование ReactDOM API в более ранней попытке визуализации элементов JSX в DOM. Процесс рендеринга компонентов React будет выглядеть очень похоже. Последние несколько проблем были сосредоточены на компонентах и ​​составе, поэтому рендеринг был сделан для вас за кулисами. Однако ни один из написанного вами кода React не будет отображаться в DOM без обращения к ReactDOM API. Ниже приведен синтаксис: <code>ReactDOM.render(componentToRender, targetNode)</code> . Первый аргумент - это компонент React, который вы хотите отобразить. Второй аргумент - это узел DOM, который вы хотите отобразить внутри этого компонента. Компоненты React передаются в <code>ReactDOM.render()</code> несколько иначе, чем элементы JSX. Для элементов JSX вы передаете имя элемента, который вы хотите отобразить. Однако для компонентов React вам нужно использовать тот же синтаксис, как если бы вы отображали вложенный компонент, например <code>ReactDOM.render(&lt;ComponentToRender /&gt;, targetNode)</code> . Этот синтаксис используется для компонентов класса ES6 и функциональных компонентов.
</section>

## Instructions
<section id='instructions'>
Компоненты « <code>Fruits</code> и <code>Vegetables</code> определены для вас за кулисами. Выделите оба компонента как дочерние <code>TypesOfFood</code> компонента <code>TypesOfFood</code> , а затем визуализируйте <code>TypesOfFood</code> в DOM. Для вас доступен <code>div</code> с <code>id=&#39;challenge-node&#39;</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>TypesOfFood</code> component should return a single <code>div</code> element.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood)); return mockedComponent.children().type() === 'div'; })());
  - text: The <code>TypesOfFood</code> component should render the <code>Fruits</code> component after the <code>h1</code> element.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood)); return mockedComponent.children().childAt(1).name() === 'Fruits'; })());
  - text: The <code>TypesOfFood</code> component should render the <code>Vegetables</code> component after <code>Fruits</code>.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood)); return mockedComponent.children().childAt(2).name() === 'Vegetables'; })());
  - text: The <code>TypesOfFood</code> component should render to the DOM within the <code>div</code> with the id <code>challenge-node</code>.
    testString: assert((function() { const html = document.getElementById('challenge-node').childNodes[0].innerHTML; return (html === '<h1>Types of Food:</h1><div><h2>Fruits:</h2><h4>Non-Citrus:</h4><ul><li>Apples</li><li>Blueberries</li><li>Strawberries</li><li>Bananas</li></ul><h4>Citrus:</h4><ul><li>Lemon</li><li>Lime</li><li>Orange</li><li>Grapefruit</li></ul></div><div><h2>Vegetables:</h2><ul><li>Brussel Sprouts</li><li>Broccoli</li><li>Squash</li></ul></div>'); })());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* change code below this line */}

        {/* change code above this line */}
      </div>
    );
  }
};

// change code below this line

```

</div>

### Before Tests
<div id='jsx-setup'>

```jsx
const Fruits = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <h4>Non-Citrus:</h4>
        <ul>
          <li>Apples</li>
          <li>Blueberries</li>
          <li>Strawberries</li>
          <li>Bananas</li>
        </ul>
      <h4>Citrus:</h4>
        <ul>
          <li>Lemon</li>
          <li>Lime</li>
          <li>Orange</li>
          <li>Grapefruit</li>
        </ul>
    </div>
  );
};
const Vegetables = () => {
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
};

```

</div>

</section>

## Solution
<section id='solution'>

```jsx
class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* change code below this line */}
          <Fruits />
           <Vegetables />
         {/* change code above this line */}
      </div>
    );
  }
};

// change code below this line
ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'));
```

</section>
