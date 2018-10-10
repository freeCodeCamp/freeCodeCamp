---
id: 5a24c314108439a4d4036165
title: Use React to Render Nested Components
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Использовать React для вставки вложенных компонентов
---

## Description
<section id="description"> Последняя задача показала простой способ составления двух компонентов, но есть много разных способов компоновки компонентов с помощью React. Компонентный состав является одной из мощных возможностей React. Когда вы работаете с React, важно начать думать о своем пользовательском интерфейсе с точки зрения таких компонентов, как пример приложения в последнем вызове. Вы разбиваете свой пользовательский интерфейс на свои основные строительные блоки, и эти части становятся компонентами. Это помогает отделить код, отвечающий за пользовательский интерфейс, от кода, ответственного за обработку вашей логики приложения. Это может значительно упростить разработку и сопровождение сложных проектов. </section>

## Instructions
<section id="instructions"> В редакторе кода есть два функциональных компонента, называемых <code>TypesOfFruit</code> и <code>Fruits</code> . Возьмите <code>TypesOfFruit</code> компонент и компоновать его, или <em>гнездо</em> его, в пределах <code>Fruits</code> компонента. Затем возьмите компонент <code>Fruits</code> и <code>TypesOfFood</code> его в компонент <code>TypesOfFood</code> . Результатом должен быть дочерний компонент, вложенный в родительский компонент, который вложен в собственный родительский компонент! </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Компонент <code>TypesOfFood</code> должен возвращать один элемент <code>div</code> .
    testString: 'assert(Enzyme.shallow(React.createElement(TypesOfFood)).type() === "div", "The <code>TypesOfFood</code> component should return a single <code>div</code> element.");'
  - text: Компонент <code>TypesOfFood</code> должен вернуть компонент <code>Fruits</code> .
    testString: 'assert(Enzyme.shallow(React.createElement(TypesOfFood)).props().children[1].type.name === "Fruits", "The <code>TypesOfFood</code> component should return the <code>Fruits</code> component.");'
  - text: ''
    testString: 'assert(Enzyme.mount(React.createElement(TypesOfFood)).find("h2").html() === "<h2>Fruits:</h2>", "The <code>Fruits</code> component should return the <code>TypesOfFruit</code> component.");'
  - text: Компонент <code>TypesOfFruit</code> должен возвращать элементы <code>h2</code> и <code>ul</code> .
    testString: 'assert(Enzyme.mount(React.createElement(TypesOfFood)).find("ul").text() === "ApplesBlueberriesStrawberriesBananas", "The <code>TypesOfFruit</code> component should return the <code>h2</code> and <code>ul</code> elements.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      { /* change code below this line */ }

      { /* change code above this line */ }
    </div>
  );
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
