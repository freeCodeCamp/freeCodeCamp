---
id: 5a24c314108439a4d4036169
title: Передайте пропси до функціонального компонента без стану
challengeType: 6
forumTopicId: 301402
dashedName: pass-props-to-a-stateless-functional-component
---

# --description--

Попередні завдання охоплювали створення та компонування елементів JSX, функціональних компонентів та класових компонентів стилю ES6 в React. Маючи таку базу, саме час перейти до іншої дуже поширеної функції у React: **пропсів**. У React можна передавати пропси, або властивості, до дочірніх компонентів. Припустимо, ви маєте компонент `App`, який відтворює дочірній компонент під назвою `Welcome`, який є функціональним компонентом без стану. Ви можете передати властивість `user` до `Welcome`, написавши:

```jsx
<App>
  <Welcome user='Mark' />
</App>
```

Ви використовуєте **власні атрибути HTML**, створені вами та підтримувані React, для передачі до компонента. У цьому випадку, створена властивість `user` передається компоненту `Welcome`. Оскільки `Welcome` є функціональним компонентом без стану, він має доступ до значення:

```jsx
const Welcome = (props) => <h1>Hello, {props.user}!</h1>
```

Як правило, це значення називають пропсом (`props`), а при роботі з функціональними компонентами без стану його вважають аргументом функції, яка повертає JSX. Можна отримати доступ до значення аргументу в тілі функції. Це трішки відрізняється від класових компонентів.

# --instructions--

У редакторі коду є компоненти `Calendar` та `CurrentDate`. При відтворенні `CurrentDate` з компонента `Calendar`, передайте властивість `date`, призначену поточній даті об’єкта JavaScript `Date`. Потім отримайте доступ до `prop` в компоненті `CurrentDate`, показавши значення в межах тегів `p`. Зверніть увагу: щоб значення `prop` оцінювались як JavaScript, вони мають бути у фігурних дужках (наприклад, `date={Date()}`).

# --hints--

Компонент `Calendar` має повернути єдиний елемент `div`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(Calendar));
    return mockedComponent.children().type() === 'div';
  })()
);
```

Другим дочірнім компонентом компонента `Calendar` має бути компонент `CurrentDate`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(Calendar));
    return mockedComponent.children().childAt(1).name() === 'CurrentDate';
  })()
);
```

Компонент `CurrentDate` повинен мати пропс під назвою `date`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(Calendar));
    return mockedComponent.children().childAt(1).props().date;
  })()
);
```

Пропс `date` компонента `CurrentDate` повинен містити рядок тексту.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(Calendar));
    const prop = mockedComponent.children().childAt(1).props().date;
    return typeof prop === 'string' && prop.length > 0;
  })()
);
```

Пропс `date` має бути створеним завдяки виклику `Date()`

```js
assert(/<CurrentDatedate={Date\(\)}\/>/.test(__helpers.removeWhiteSpace(code)));
```

Компонент `CurrentDate` має відтворити значення пропсу `date` в тегу `p`.

```js
let date = 'dummy date';
assert(
  (function () {
    const mockedComponent = Enzyme.mount(
      React.createElement(CurrentDate, { date })
    );
    return mockedComponent.find('p').html().includes(date);
  })()
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<Calendar />, document.getElementById('root'))
```

## --seed-contents--

```jsx
const CurrentDate = (props) => {
  return (
    <div>
      { /* Change code below this line */ }
      <p>The current date is: </p>
      { /* Change code above this line */ }
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
        { /* Change code below this line */ }
        <CurrentDate />
        { /* Change code above this line */ }
      </div>
    );
  }
};
```

# --solutions--

```jsx
const CurrentDate = (props) => {
  return (
    <div>
      { /* Change code below this line */ }
      <p>The current date is: {props.date}</p>
      { /* Change code above this line */ }
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
        { /* Change code below this line */ }
        <CurrentDate date={Date()} />
        { /* Change code above this line */ }
      </div>
    );
  }
};
```
