---
id: 5a24c314108439a4d403616d
title: Використання PropTypes для визначення очікуваних параметрів
challengeType: 6
forumTopicId: 301419
dashedName: use-proptypes-to-define-the-props-you-expect
---

# --description--

React має корисні функції перевірки типу параметра, що отримує компонент. Наприклад, програма робить АРІ виклик, щоб отримати дані з масиву, які потім передаються до компонента як параметр. Можна дати команду `propTypes`, щоб зібрати дані типу `array`. Так ви отримаєте корисне повідомлення, якщо дані будуть іншого типу.

Краще за все встановлювати `propTypes`, коли знаєте заздалегідь, яким буде тип параметрів. Можна встановити властивість `propTypes` для компонента, так само як і `defaultProps`. Таким чином відбудеться перевірка, чи має параметр даного ключа конкретний тип. Ось приклад запиту типу `function` для параметра `handleClick`:

```js
MyComponent.propTypes = { handleClick: PropTypes.func.isRequired }
```

У даному прикладі, частина `PropTypes.func` перевіряє, чи є `handleClick` функцією. Додавання `isRequired` говорить React, що `handleClick` - це відповідне значення для даного компонента. З'явиться повідомлення, якщо цього параметру не буде. Також зверніть увагу, що `func` означає `function`. Серед семи простих типів JavaScript, лише `function` й `boolean` (написаний як `bool`) пишуться незвично. На додаток до цих простих типів, є й інші. Наприклад, можете перевірити, чи є параметр елементом React. Будь ласка, зверніться до <a href="https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes" target="_blank" rel="noopener noreferrer nofollow">документації</a>, щоб дізнатися про інші варіанти.

**Note:** у React v15.5.0 `PropTypes` імпортується незалежно від React, ось так: `import PropTypes from 'prop-types';`

# --instructions--

Визначте `Items` для компонента `propTypes`, що потребує параметра `quantity` та підтвердіть, що його тип є `number`.

# --hints--

Компонент `ShoppingCart` має відображатися.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart));
    return mockedComponent.find('ShoppingCart').length === 1;
  })()
);
```

Компонент `Items` має відображатись.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart));
    return mockedComponent.find('Items').length === 1;
  })()
);
```

Компонент `Items` має перевіряти `propTypes` значення `quantity` та гарантувати, що це значення є числом.

```js
(getUserInput) =>
  assert(
    (function () {
      const noWhiteSpace = __helpers.removeWhiteSpace(getUserInput('index'));
      return (
        noWhiteSpace.includes('quantity:PropTypes.number.isRequired') &&
        noWhiteSpace.includes('Items.propTypes=')
      );
    })()
  );
```

# --seed--

## --before-user-code--

```jsx
var PropTypes = {
  number: { isRequired: true }
};
```

## --after-user-code--

```jsx
ReactDOM.render(<ShoppingCart />, document.getElementById('root'))
```

## --seed-contents--

```jsx
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

// Change code below this line

// Change code above this line

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

# --solutions--

```jsx
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

// Change code below this line
Items.propTypes = {
  quantity: PropTypes.number.isRequired
};
// Change code above this line

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
