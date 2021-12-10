---
id: 5a24c314108439a4d4036169
title: Передача пропсів простому функціональному компоненту
challengeType: 6
forumTopicId: 301402
dashedName: pass-props-to-a-stateless-functional-component
---

# --description--

Попередні завдання охоплювали багато інформації стосовно створення і складання елементів JSX, функціональних компонентів та компонентів класу ES6 в React. Маючи таку базу, саме час перейти до іншої дуже поширеної функції у React: **props**. У React можна передавати пропси або властивості дочірнім компонентам. Припустимо, є компонент `App`, який відображає дочірній компонент з назвою `Welcome`, що є простим функціональним компонентом. Можна передати `Welcome` властивості `user` таким чином:

```jsx
<App>
  <Welcome user='Mark' />
</App>
```

Використовуйте самостійно створений та який підтримується React **custom HTML attributes** для передачі компоненту. У цьому випадку, створена властивість `user` передається компоненту `Welcome`. Оскільки `Welcome` є простим функціональним компонентом, він має такий доступ до цього значення:

```jsx
const Welcome = (props) => <h1>Hello, {props.user}!</h1>
```

Як правило, це значення називають `props` і при роботі з простими функціональними компонентами, в основному воно розглядається як аргумент функції, яка відображає JSX. Можна отримати доступ до значення аргументу в тілі функції. З компонентами класу, все дещо інакше.

# --instructions--

У редакторі коду є компоненти `Calendar` та `CurrentDate`. При візуалізації `CurrentDate` з компоненту `Calendar`, передайте зазначену властивість `date` поточній даті об'єкту JavaScript `Date`. Потім перейдіть до `prop` у компоненті `CurrentDate`, демонструючи його значення у межах тегів `p`. Звернуть увагу, що для того, щоб значення `prop` оцінювалися як JavaScript, їх потрібно ставити у фігурні дужки, наприклад, `date={Date()}`.

# --hints--

Компонент `Calendar` повинен відображати одинарний елемент `div`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(Calendar));
    return mockedComponent.children().type() === 'div';
  })()
);
```

Другим дочірнім компонентом `Calendar` має бути компонент `CurrentDate`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(Calendar));
    return mockedComponent.children().childAt(1).name() === 'CurrentDate';
  })()
);
```

Компонент `CurrentDate` повинен мати пропс з назвою `date`.

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

Пропс `date` слід створити за допомогою виклику `Date()`

```js
assert(/<CurrentDatedate={Date\(\)}\/>/.test(__helpers.removeWhiteSpace(code)));
```

Компонент `CurrentDate` повинен відображати значення пропсу `date` у тегу `p`.

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
