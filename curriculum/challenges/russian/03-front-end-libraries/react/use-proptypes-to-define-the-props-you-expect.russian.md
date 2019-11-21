---
id: 5a24c314108439a4d403616d
title: Use PropTypes to Define the Props You Expect
challengeType: 6
isRequired: false
forumTopicId: 301419
localeTitle: Используйте PropTypes для определения реквизита, который вы ожидаете
---

## Description
<section id='description'>
React предоставляет полезные функции проверки типов для проверки того, что компоненты получают реквизиты правильного типа. Например, ваше приложение вызывает вызов API для извлечения данных, которые вы ожидаете в массиве, который затем передается компоненту в качестве опоры. Вы можете установить <code>propTypes</code> на свой компонент, чтобы требовать, чтобы данные имели тип <code>array</code> . Это даст полезное предупреждение, когда данные относятся к любому другому типу. Рекомендуется использовать <code>propTypes</code> когда вы <code>propTypes</code> знаете тип пропеллера. Вы можете определить свойство <code>propTypes</code> для компонента так же, как вы определили <code>defaultProps</code> . При этом будет проверяться наличие реквизита данного ключа с заданным типом. Вот пример, требующий <code>function</code> типа для prop, называемого <code>handleClick</code> : <code>MyComponent.propTypes = { handleClick: PropTypes.func.isRequired }</code> В приведенном выше <code>PropTypes.func</code> часть <code>PropTypes.func</code> проверяет, что <code>handleClick</code> является функцией. Добавление <code>isRequired</code> говорит React, что <code>handleClick</code> является обязательным свойством для этого компонента. Вы увидите предупреждение, если эта поддержка не указана. Также обратите внимание, что <code>func</code> представляет <code>function</code> . Среди семи простых примитивов JavaScript <code>function</code> и <code>boolean</code> (написанное как <code>bool</code> ) - это только два, которые используют необычную орфографию. В дополнение к примитивным типам доступны другие типы. Например, вы можете проверить, что опорный элемент является элементом React. Пожалуйста, обратитесь к документации по всем параметрам. <strong>Примечание.</strong> Начиная с версии React v15.5.0, <code>PropTypes</code> импортируется независимо от React, например: <code>import PropTypes from &#39;prop-types&#39;;</code>
</section>

## Instructions
<section id='instructions'>
Определите <code>propTypes</code> для компонента <code>Items</code> чтобы потребовать <code>quantity</code> в качестве опоры и убедитесь, что он имеет <code>number</code> типа.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>ShoppingCart</code> component should render.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart)); return mockedComponent.find('ShoppingCart').length === 1; })());
  - text: The <code>Items</code> component should render.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart)); return mockedComponent.find('Items').length === 1; })());
  - text: The <code>Items</code> component should include a <code>propTypes</code> check that requires <code>quantity</code> to be a <code>number</code>.
    testString: getUserInput => assert((function() { const noWhiteSpace = getUserInput('index').replace(/ /g, ''); return noWhiteSpace.includes('quantity:PropTypes.number.isRequired') && noWhiteSpace.includes('Items.propTypes='); })());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

// change code below this line

// change code above this line

Items.defaultProps = {
  quantity: 0
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />
  }
};

```

</div>

### Before Tests
<div id='jsx-setup'>

```jsx
var PropTypes = {
  number: { isRequired: true }
};

```

</div>

### After Tests
<div id='jsx-teardown'>

```jsx
ReactDOM.render(<ShoppingCart />, document.getElementById('root'))

```

</div>

</section>

## Solution
<section id='solution'>

```jsx
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

// change code below this line
Items.propTypes = {
  quantity: PropTypes.number.isRequired
};
// change code above this line

Items.defaultProps = {
  quantity: 0
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />
  }
};
```

</section>
